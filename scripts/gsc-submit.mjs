#!/usr/bin/env node
// Google Search Console automation. Be clear-eyed about what Google actually
// allows programmatically:
//   * sitemaps.submit  -> tell Google to (re)fetch the sitemap. THIS is automatable.
//   * URL Inspection   -> read-only index/coverage status for a URL. Automatable (read).
//   * "Request Indexing" (the button in the GSC UI) -> NO public API. The Indexing
//     API only officially covers JobPosting / BroadcastEvent, not articles. So per-URL
//     indexing requests stay manual; this script prints those steps as a fallback.
//
// Auth: a Google Cloud service account with the Search Console API enabled, added as
// a full user on the GSC property. Provide it via either:
//   GOOGLE_APPLICATION_CREDENTIALS = /path/to/service-account.json
//   GSC_SERVICE_ACCOUNT_JSON       = the JSON contents inline
// And the property:
//   GSC_SITE_URL = "sc-domain:scoutcast.ai"   (domain property; default)
//                  or "https://scoutcast.ai/" (URL-prefix property)
//
//   node scripts/gsc-submit.mjs                 # submit the sitemap
//   node scripts/gsc-submit.mjs <url> [<url>]    # submit sitemap + inspect each URL's status
//
// See .claude/skills/publish-and-index/references/credentials-setup.md for setup.

import { readFileSync } from "node:fs";
import { createSign } from "node:crypto";

const SITE = "https://scoutcast.ai";
const SITEMAP = `${SITE}/sitemap.xml`;
const siteUrl = process.env.GSC_SITE_URL || "sc-domain:scoutcast.ai";
const urls = process.argv.slice(2).filter((a) => !a.startsWith("--"));

function loadServiceAccount() {
  if (process.env.GSC_SERVICE_ACCOUNT_JSON) {
    return JSON.parse(process.env.GSC_SERVICE_ACCOUNT_JSON);
  }
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    return JSON.parse(readFileSync(process.env.GOOGLE_APPLICATION_CREDENTIALS, "utf8"));
  }
  return null;
}

const sa = loadServiceAccount();
if (!sa) {
  // Graceful degradation: no creds yet, so hand back the manual steps and succeed.
  console.log("Google Search Console: no service-account credentials found.");
  console.log("Skipping API calls. Do this manually (or set up credentials — see the");
  console.log("credentials-setup.md referenced above):");
  console.log(`  1. GSC -> Sitemaps -> submit ${SITEMAP}`);
  console.log("  2. GSC -> URL Inspection -> paste each new URL -> Request Indexing:");
  for (const u of urls) console.log(`       ${u}`);
  process.exit(0);
}

const b64url = (s) => Buffer.from(s).toString("base64url");

async function accessToken() {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = b64url(
    JSON.stringify({
      iss: sa.client_email,
      scope: "https://www.googleapis.com/auth/webmasters",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    })
  );
  const signer = createSign("RSA-SHA256");
  signer.update(`${header}.${claim}`);
  const signature = signer.sign(sa.private_key, "base64url");
  const jwt = `${header}.${claim}.${signature}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`token exchange failed: ${res.status} ${JSON.stringify(json)}`);
  return json.access_token;
}

const token = await accessToken();
const auth = { Authorization: `Bearer ${token}` };

// --- sitemaps.submit -------------------------------------------------------
const submitUrl = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
  siteUrl
)}/sitemaps/${encodeURIComponent(SITEMAP)}`;
const submitRes = await fetch(submitUrl, { method: "PUT", headers: auth });
if (submitRes.ok) {
  console.log(`GSC sitemap submitted: ${SITEMAP} (property ${siteUrl})`);
} else {
  console.log(`GSC sitemap submit failed: ${submitRes.status} ${await submitRes.text()}`);
  process.exitCode = 1;
}

// --- URL inspection (read-only status) -------------------------------------
for (const u of urls) {
  const res = await fetch(
    "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect",
    {
      method: "POST",
      headers: { ...auth, "Content-Type": "application/json" },
      body: JSON.stringify({ inspectionUrl: u, siteUrl }),
    }
  );
  const json = await res.json();
  if (!res.ok) {
    console.log(`  inspect ${u}: ${res.status} ${JSON.stringify(json)}`);
    continue;
  }
  const r = json.inspectionResult?.indexStatusResult ?? {};
  console.log(`  ${u}\n    verdict=${r.verdict ?? "?"} coverage="${r.coverageState ?? "?"}"`);
}

console.log(
  "\nNote: Google has no API to *request indexing* of articles — the sitemap submit above"
);
console.log(
  "is the programmatic lever. For the fastest manual nudge, URL-Inspect each new URL in GSC."
);
