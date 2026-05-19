#!/usr/bin/env node
// Bing Webmaster URL Submission API. Note: the IndexNow ping (indexnow-ping.mjs)
// ALREADY notifies Bing instantly and needs no account, so this script is mostly a
// belt-and-suspenders / quota-tracked alternative. Use it if you specifically want
// submissions to show up in the Bing Webmaster dashboard.
//
// Auth: an API key from Bing Webmaster Tools -> Settings -> API access.
//   BING_WEBMASTER_API_KEY = <key>
//   BING_SITE_URL          = https://scoutcast.ai   (the verified site; default)
//
//   node scripts/bing-submit.mjs                    # submit homepage + every blog post
//   node scripts/bing-submit.mjs <url> [<url> ...]   # submit specific URLs
//
// See .claude/skills/publish-and-index/references/credentials-setup.md for setup.

import { posts } from "../lib/posts.ts";

const SITE = "https://scoutcast.ai";
const siteUrl = process.env.BING_SITE_URL || SITE;
const apiKey = process.env.BING_WEBMASTER_API_KEY;
const urlArgs = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const urlList = urlArgs.length
  ? urlArgs
  : [`${SITE}/`, ...posts.map((p) => `${SITE}/blog/${p.slug}/`)];

if (!apiKey) {
  console.log("Bing: no BING_WEBMASTER_API_KEY set.");
  console.log("IndexNow already notifies Bing instantly, so this is optional. To submit");
  console.log("via the Bing API instead, set the key (see credentials-setup.md), or manually:");
  console.log(`  Bing Webmaster Tools -> Sitemaps -> submit ${SITE}/sitemap.xml`);
  process.exit(0);
}

const res = await fetch(
  `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=${apiKey}`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ siteUrl, urlList }),
  }
);
const text = await res.text();
if (res.ok) {
  console.log(`Bing URL submission accepted — ${urlList.length} URL(s) for ${siteUrl}`);
} else {
  console.log(`Bing submission failed: ${res.status} ${text}`);
  process.exit(1);
}
