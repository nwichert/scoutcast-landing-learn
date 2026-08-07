#!/usr/bin/env node
// Print the URLs present in the freshly generated public/sitemap.xml but NOT in
// the sitemap the live site is currently serving — i.e. what this deploy is about
// to make public. One URL per line.
//
// This replaces the old rule in auto-publish.sh, which pinged only posts whose
// date was exactly today:
//
//     posts.filter((p) => p.date === TODAY)
//
// That rule silently dropped a post forever if the scheduler missed its date —
// which is how the 2026-08-05 post ended up going live two days late with no
// IndexNow or GSC ping. Diffing against what is actually deployed is stateless
// and self-healing: a post missed for three days still shows up as new on the
// next run, and one already live is never re-pinged.
//
//   node scripts/newly-live-urls.mjs            # URLs this deploy adds
//   node scripts/newly-live-urls.mjs --all      # every URL in the local sitemap
//
// Run AFTER scripts/generate-seo-files.mjs and BEFORE the deploy.

import { readFileSync } from "node:fs";

const LIVE_SITEMAP = "https://scoutcast.ai/sitemap.xml";

const locsIn = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

// Sitemaps on both sides come from generate-seo-files.mjs, so formatting already
// matches; normalizing the trailing slash just keeps the diff honest if it ever
// stops matching.
const key = (url) => url.replace(/\/+$/, "");

const local = locsIn(readFileSync(new URL("../public/sitemap.xml", import.meta.url), "utf8"));

if (local.length === 0) {
  console.error("public/sitemap.xml has no <loc> entries — run generate-seo-files.mjs first.");
  process.exit(1);
}

if (process.argv.includes("--all")) {
  console.log(local.join("\n"));
  process.exit(0);
}

let live;
try {
  const res = await fetch(LIVE_SITEMAP, { cache: "no-store" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  live = locsIn(await res.text());
} catch (err) {
  // Can't tell new from old. Emit nothing rather than re-submitting all ~50 URLs
  // and burning the IndexNow quota — the deploy itself still proceeds.
  console.error(`Could not fetch ${LIVE_SITEMAP} (${err.message}) — reporting no new URLs.`);
  process.exit(0);
}

const liveKeys = new Set(live.map(key));
const fresh = local.filter((url) => !liveKeys.has(key(url)));

if (fresh.length > 0) console.log(fresh.join("\n"));
