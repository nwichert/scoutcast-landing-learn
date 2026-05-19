#!/usr/bin/env node
// Submit URLs to IndexNow -> instantly notifies Bing, Yandex, Seznam, Naver and
// the rest of the IndexNow network. This is the real "instant index" lever for
// everything except Google, and because Bing powers Microsoft Copilot it also
// feeds Copilot's answer engine.
//
//   node scripts/indexnow-ping.mjs                    # ping homepage + every blog post
//   node scripts/indexnow-ping.mjs <url> [<url> ...]   # ping only the URLs you pass
//   node scripts/indexnow-ping.mjs --dry-run          # print the payload, send nothing
//
// IndexNow authenticates by a key file reachable at https://<host>/<key>.txt whose
// body is the key itself. If none exists in public/, one is generated here — but a
// freshly generated key only works once deployed, so on first run this script writes
// the key and skips the ping; deploy, then run again.

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { posts } from "../lib/posts.ts";

const SITE = "https://scoutcast.ai";
const HOST = "scoutcast.ai";
const ENDPOINT = "https://api.indexnow.org/indexnow";

const publicDir = new URL("../public/", import.meta.url);
const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const urlArgs = args.filter((a) => !a.startsWith("--"));

// --- locate or create the IndexNow key -------------------------------------
const KEY_RE = /^[a-f0-9]{8,128}\.txt$/;
let key = null;
let createdKey = false;
for (const f of readdirSync(publicDir)) {
  if (!KEY_RE.test(f)) continue;
  const body = readFileSync(new URL(f, publicDir), "utf8").trim();
  if (body === f.replace(/\.txt$/, "")) {
    key = body;
    break;
  }
}
if (!key) {
  key = randomUUID().replaceAll("-", "");
  createdKey = true;
  if (dryRun) {
    console.log(`No IndexNow key found; would generate public/${key}.txt`);
  } else {
    writeFileSync(new URL(`${key}.txt`, publicDir), key);
    console.log(`Generated IndexNow key file public/${key}.txt`);
    console.log("Deploy it (must be publicly reachable) before IndexNow will accept pings.");
  }
}

// --- build the URL list ----------------------------------------------------
const urlList = urlArgs.length
  ? urlArgs
  : [`${SITE}/`, ...posts.map((p) => `${SITE}/blog/${p.slug}/`)];

const payload = { host: HOST, key, keyLocation: `${SITE}/${key}.txt`, urlList };

if (dryRun || createdKey) {
  if (createdKey && !dryRun) {
    console.log("\nKey file not deployed yet — skipping the ping this run.");
  }
  console.log("\nIndexNow payload:");
  console.log(JSON.stringify(payload, null, 2));
  process.exit(0);
}

// --- submit ----------------------------------------------------------------
const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});
// 200 = accepted, 202 = accepted + pending verification. Anything else is a problem.
console.log(`IndexNow ${res.status} ${res.statusText} — ${urlList.length} URL(s) submitted`);
if (res.status !== 200 && res.status !== 202) {
  console.log(await res.text());
  process.exit(1);
}
