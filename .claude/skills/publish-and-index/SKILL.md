---
name: publish-and-index
description: >-
  Publish and index Scoutcast.ai blog posts end to end: regenerate sitemap.xml and
  llms.txt from lib/posts.ts, build the static export, deploy to Firebase hosting, then
  submit the new URLs to IndexNow, Google Search Console, and Bing so they get indexed
  fast and surfaced in search + AI answers (ChatGPT, Perplexity, Copilot, Gemini). Use
  this whenever the user adds or edits posts in lib/posts.ts and wants them live and
  discoverable — trigger on "publish the new article(s)", "ship the blog post(s)",
  "deploy and index", "get these indexed", "push the posts live", "submit to search
  engines", "resubmit the sitemap", or "index the new posts". Also use it after a post
  is added to lib/posts.ts even when the user only says "deploy" or "ship it" in a blog
  context. This is the one-command path so the publish-then-index checklist never has to
  be done by hand.
---

# Publish and Index (Scoutcast.ai)

This skill ships new/edited blog posts and gets them indexed. It assumes the posts
already exist in `lib/posts.ts` (the blog renders straight from that array — adding a
post there creates its route automatically). Run from the Next project root
(`scoutcast-landing-learn/`).

## Why this exists

The blog auto-generates pages from `lib/posts.ts`, but two discovery files
(`public/sitemap.xml`, `public/llms.txt`) were hand-maintained and easy to forget, and
the deploy + index submission was a manual checklist. This skill makes the whole thing
one pass, and keeps the discovery files derived from a single source of truth so they
can't drift.

## What is and isn't automatable (read this once)

Being honest about the ceiling keeps the skill from pretending:

- **Fully automated:** sitemap/llms.txt regeneration, build, Firebase deploy, and
  **IndexNow** — which instantly notifies Bing, Yandex, and the IndexNow network. Bing
  powers Microsoft **Copilot**, so IndexNow is also the Copilot lever.
- **Automated with credentials:** Google Search Console **sitemap submission** + URL
  inspection (read-only status), and the Bing URL Submission API. These need one-time
  setup (see `references/credentials-setup.md`). Without creds, the scripts print the
  manual steps and exit cleanly — the rest of the pipeline still runs.
- **Not automatable at all:** Google's "Request Indexing" button. Google's Indexing API
  officially supports only `JobPosting`/`BroadcastEvent`, not articles. So per-URL
  indexing requests in GSC remain manual; the skill surfaces the URLs to paste.
- **No action needed:** AI crawlers (GPTBot, ChatGPT-User, OAI-SearchBot, PerplexityBot,
  ClaudeBot, anthropic-ai, Google-Extended) discover posts via robots.txt + sitemap on
  their own schedule. The skill just verifies they're still allowed.

## The workflow

Work through these in order. Steps 2–4 must precede 5–7: IndexNow and the search engines
can only see pages (and the IndexNow key file) once they're deployed.

### 1. Identify what's shipping
Find the new or edited posts so you know which URLs to submit:
```
git status --short lib/posts.ts && git --no-pager diff lib/posts.ts | grep -E '^\+\s+slug:'
```
Collect the affected slugs → their URLs are `https://scoutcast.ai/blog/<slug>/`. If you
can't tell what changed (e.g. nothing staged), it's fine to submit all post URLs; the
scripts default to that.

### 2. Regenerate the discovery files from source
```
node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON scripts/generate-seo-files.mjs
```
This rewrites `public/sitemap.xml` and the `## Recent posts` block + `Last updated` line
of `public/llms.txt` from the `posts` array. Show the diff so the user sees what changed.
`post.excerpt` is the source of truth for each llms.txt blurb — fix the excerpt in
`lib/posts.ts` if a blurb reads wrong, then rerun. Use `--check` to preview without
writing.

### 3. Build the static export
```
npm run build
```
Confirm the new slugs generated (the `/blog/[slug]` line lists them, and
`out/blog/<slug>/index.html` exists). The build also runs the TypeScript check, so a typo
in `lib/posts.ts` fails here rather than in production.

### 4. Deploy to Firebase hosting
```
npx firebase deploy --only hosting
```
`--only hosting` keeps it scoped (no Firestore rules / functions touched). This is the
one production side effect — if there are unrelated uncommitted changes or the user
hasn't clearly asked to go live, confirm first. If it fails with "Failed to get Firebase
project … permission", the CLI is logged into the wrong Google account; ask the user to
run `! firebase login --reauth` with the account that owns the `scoutcast-8d5fa` project,
then retry. Deploy is pre-authorized in `.claude/settings.json`.

### 5. IndexNow (instant: Bing / Copilot / Yandex)
```
node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON scripts/indexnow-ping.mjs <new-url> [<new-url> ...]
```
Pass the URLs from step 1; with no args it pings the homepage + every post.

**First-run bootstrap:** if no IndexNow key file exists in `public/`, the script
generates `public/<key>.txt` and skips the ping (the key isn't live yet). In that case:
commit the key file, redeploy (step 4), then run the ping again. After the key exists
once, every future run pings immediately. (A key may already be committed — then this is
a non-issue.)

### 6. Google Search Console
```
node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON scripts/gsc-submit.mjs <new-url> [<new-url> ...]
```
Submits the sitemap and (with creds) reports each URL's index status. Without creds it
prints the manual GSC steps. Either way, remind the user that the fastest Google nudge is
manual: GSC → URL Inspection → paste each new URL → Request Indexing.

### 7. Bing URL Submission (optional)
```
node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON scripts/bing-submit.mjs <new-url> [<new-url> ...]
```
IndexNow already told Bing in step 5, so only run this if a `BING_WEBMASTER_API_KEY` is
set and the user wants submissions to appear in the Bing Webmaster dashboard. With no key
it prints an optional note and exits.

### 8. Verify AI crawlers are still allowed
Confirm `public/robots.txt` still has `Allow: /` for GPTBot, ChatGPT-User, OAI-SearchBot,
PerplexityBot, ClaudeBot, anthropic-ai, and Google-Extended, and still references the
sitemap. No submission is needed — this is just a guard against an accidental block.

### 9. Report
Summarize: deployed URL, which URLs were pinged/submitted where, GSC sitemap status, the
AI-crawler check, and any manual fallback still required (especially GSC per-URL Request
Indexing, since that has no API).

## Guardrails

- **Secrets stay out of git.** The IndexNow key file (`public/<key>.txt`) is *meant* to
  be public and committed. The GSC service-account JSON and `BING_WEBMASTER_API_KEY` are
  secrets — load them from env (or a gitignored file), never commit them, and never echo
  their contents. `.gitignore` already excludes the usual paths.
- **Build before deploy, always.** Firebase serves whatever is in `out/`; a stale `out/`
  ships stale pages.
- **Order matters.** Don't ping IndexNow or submit to search engines before the deploy in
  step 4 — they validate against the live site and the live key file.
- **The trigger is a request, not an event.** Skills run when the user asks. If the user
  wants this to fire automatically on every commit, point them at wiring these scripts
  into a git pre-push hook or CI step — that's the event-driven version.

## Files this skill drives

- `scripts/generate-seo-files.mjs` — sitemap.xml + llms.txt from `lib/posts.ts`
- `scripts/indexnow-ping.mjs` — IndexNow submission (+ key bootstrap)
- `scripts/gsc-submit.mjs` — GSC sitemap submit + URL inspection (needs creds)
- `scripts/bing-submit.mjs` — Bing URL Submission API (needs key; optional)
- `references/credentials-setup.md` — one-time GSC + Bing credential setup
