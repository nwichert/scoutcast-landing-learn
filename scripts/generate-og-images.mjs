// Generates 1200x630 OG card PNGs for every post in lib/posts.ts.
// Renders an HTML template via headless Chrome. Output: public/blog/<slug>/og.png
//
// Usage: node scripts/generate-og-images.mjs [slug ...]   (no args = all posts)

import { readFileSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { tmpdir } from "node:os";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

// Extract { slug, title, excerpt } from lib/posts.ts without a TS toolchain.
const src = readFileSync(join(root, "lib/posts.ts"), "utf8");
const postRe = /slug:\s*"([^"]+)",\s*title:\s*"((?:[^"\\]|\\.)*)",\s*excerpt:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g;
const posts = [];
for (const m of src.matchAll(postRe)) {
  posts.push({ slug: m[1], title: JSON.parse(`"${m[2]}"`), excerpt: JSON.parse(`"${m[3]}"`) });
}
if (posts.length === 0) {
  console.error("No posts parsed from lib/posts.ts — check the regex against the file format.");
  process.exit(1);
}

const only = process.argv.slice(2);
const targets = only.length ? posts.filter((p) => only.includes(p.slug)) : posts;

const logoData = readFileSync(join(root, "public/scoutcast-logo.png")).toString("base64");

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function cardHtml({ title }) {
  // Long titles scale down so they never clip.
  const size = title.length > 70 ? 56 : title.length > 45 ? 64 : 74;
  return `<!doctype html>
<html><head><meta charset="utf-8"><style>
  * { margin: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; }
  body {
    font-family: -apple-system, "Helvetica Neue", Arial, sans-serif;
    background: #0b0f0d;
    background-image:
      radial-gradient(1000px 600px at 85% -10%, rgba(23,179,128,0.22), transparent 60%),
      radial-gradient(800px 500px at -10% 110%, rgba(23,179,128,0.12), transparent 55%);
    color: #fafafa;
    display: flex; flex-direction: column;
    padding: 64px 72px;
    position: relative; overflow: hidden;
  }
  .rule { position: absolute; left: 0; top: 0; width: 100%; height: 10px;
    background: linear-gradient(90deg, #17b380, #0e8a61); }
  .logo { height: 52px; }
  .title {
    flex: 1; display: flex; align-items: center;
    font-size: ${size}px; font-weight: 760; line-height: 1.12;
    letter-spacing: -0.022em; max-width: 1010px;
    text-wrap: balance;
  }
  .footer { display: flex; align-items: center; gap: 16px;
    font-size: 26px; color: #9db5aa; font-weight: 500; }
  .dot { width: 12px; height: 12px; border-radius: 50%; background: #17b380; }
</style></head>
<body>
  <div class="rule"></div>
  <img class="logo" src="data:image/png;base64,${logoData}" alt="">
  <div class="title">${esc(title)}</div>
  <div class="footer"><span class="dot"></span> scoutcast.ai/blog &nbsp;·&nbsp; Notes from the booth</div>
</body></html>`;
}

const work = join(tmpdir(), `og-gen-${process.pid}`);
mkdirSync(work, { recursive: true });

for (const post of targets) {
  const htmlPath = join(work, `${post.slug}.html`);
  writeFileSync(htmlPath, cardHtml(post));
  const outDir = join(root, "public/blog", post.slug);
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "og.png");
  execFileSync(CHROME, [
    "--headless=new",
    `--screenshot=${outPath}`,
    "--window-size=1200,630",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--default-background-color=00000000",
    `file://${htmlPath}`,
  ], { stdio: "pipe" });
  console.log(`✓ ${post.slug}/og.png`);
}

rmSync(work, { recursive: true, force: true });
console.log(`Done — ${targets.length} image(s).`);
