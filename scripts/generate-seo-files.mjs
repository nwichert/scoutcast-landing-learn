#!/usr/bin/env node
// Regenerate public/sitemap.xml and the "Recent posts" block of public/llms.txt
// from the canonical `posts` array in lib/posts.ts — so neither file can go stale
// or fall out of sync after you add or edit a blog post.
//
//   node scripts/generate-seo-files.mjs           # write the files
//   node scripts/generate-seo-files.mjs --check    # report what WOULD change, write nothing (exit 1 if drift)
//
// Node strips the TypeScript types from lib/posts.ts at load time (Node >= 22.6),
// so this plain .mjs can import the posts array directly without a build step or tsx.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { posts } from "../lib/posts.ts";

const SITE = "https://scoutcast.ai";

// Top-level pages that exist under app/. Add a route here when you add a new page.
// (Asset routes like /icon.png and dynamic /blog/[slug] are handled separately.)
const STATIC_ROUTES = [
  "/",
  "/blog/",
  "/contact/",
  "/copyright/",
  "/fantasy/",
  "/listen/",
  "/mcp/",
  "/privacy/",
  "/terms/",
];

const sitemapPath = new URL("../public/sitemap.xml", import.meta.url);
const llmsPath = new URL("../public/llms.txt", import.meta.url);
const isCheck = process.argv.includes("--check");

const sortedPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
const newestPostDate = sortedPosts.length
  ? sortedPosts[0].date
  : new Date().toISOString().slice(0, 10);

// --- sitemap.xml -----------------------------------------------------------
// We can't infer when a marketing page last changed, so preserve the lastmod
// already recorded for static routes; only blog posts derive lastmod from source.
const existingLastmod = new Map();
if (existsSync(sitemapPath)) {
  const re = /<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g;
  const cur = readFileSync(sitemapPath, "utf8");
  for (let m; (m = re.exec(cur)); ) existingLastmod.set(m[1], m[2]);
}

const entries = [];
for (const route of STATIC_ROUTES) {
  const loc = `${SITE}${route}`;
  // Blog index reflects the newest post; other static pages keep their recorded date.
  const lastmod =
    route === "/blog/" ? newestPostDate : existingLastmod.get(loc) ?? newestPostDate;
  entries.push({ loc, lastmod });
}
for (const p of sortedPosts) {
  entries.push({ loc: `${SITE}/blog/${p.slug}/`, lastmod: p.updatedAt ?? p.date });
}

const sitemapXml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  entries
    .map(
      (e) =>
        `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n  </url>`
    )
    .join("\n") +
  `\n</urlset>\n`;

// --- llms.txt "Recent posts" block ----------------------------------------
// Everything above "## Recent posts" is hand-maintained and left untouched;
// the recent-posts list and the trailing "Last updated" line are regenerated.
// post.excerpt is the single source of truth for each blurb.
const recentBlock =
  `## Recent posts\n` +
  sortedPosts
    .map((p) => `- ${p.title} (${p.date}): ${SITE}/blog/${p.slug} — ${p.excerpt}`)
    .join("\n") +
  `\n\nLast updated: ${newestPostDate}\n`;

let llmsOut;
if (existsSync(llmsPath)) {
  const cur = readFileSync(llmsPath, "utf8");
  const idx = cur.indexOf("## Recent posts");
  const head = idx >= 0 ? cur.slice(0, idx) : cur.endsWith("\n") ? cur : `${cur}\n`;
  llmsOut = head + recentBlock;
} else {
  llmsOut = recentBlock;
}

// --- write or check --------------------------------------------------------
function sync(path, label, next) {
  const cur = existsSync(path) ? readFileSync(path, "utf8") : "";
  if (cur === next) {
    console.log(`  = ${label} already up to date`);
    return false;
  }
  if (isCheck) {
    console.log(`  ~ ${label} would change`);
  } else {
    writeFileSync(path, next);
    console.log(`  + wrote ${label}`);
  }
  return true;
}

const changedSitemap = sync(sitemapPath, "public/sitemap.xml", sitemapXml);
const changedLlms = sync(llmsPath, "public/llms.txt", llmsOut);

console.log(
  `\n${entries.length} sitemap URLs (${sortedPosts.length} posts), newest ${newestPostDate}`
);

if (isCheck && (changedSitemap || changedLlms)) process.exit(1);
