# SEO Worklog

Track changes here to correlate against GSC in 2–4 weeks.

---

## 2026-07-21 — Fantasy wave: 17 scheduled posts + auto-publish pipeline

**Strategy:** see content-strategy.md "Fantasy Wave Addendum — 2026-07-21". Research verdict: head terms closed; win on 2026 breakouts (NFL Fantasy→ESPN migration, ESPN Knockout), commissioner/league-culture cluster, beginner Q&A, format explainers, team names.

### Infrastructure
- **Publish gate** in lib/posts.ts: `posts` now excludes future-dated entries at build time (`scheduledPosts` holds them); dev previews all. Scheduled publishing = future-date the post + daily rebuild.
- **scripts/auto-publish.sh** + scripts/ai.scoutcast.blog-autopublish.plist (launchd, daily 8:30am): builds+deploys only when a post is due, pings IndexNow/GSC/Bing, macOS notification. INSTALL: `cp scripts/ai.scoutcast.blog-autopublish.plist ~/Library/LaunchAgents/ && launchctl load ~/Library/LaunchAgents/ai.scoutcast.blog-autopublish.plist`
- **Cloud reminder routine** (trig_016P6365g3V6TabUxqX6Y8St, daily 9:38am CT): verifies publish-day URLs live, emails nick@scoutcast.ai the GSC Request-Indexing checklist; alerts on failure.
- tsconfig excludes drafts/ (agent staging files).

### Scheduled posts (all spliced into lib/posts.ts; publish = date arrives + daily build)
| Date | Slug | Play |
|---|---|---|
| 07-23 | nfl-fantasy-moving-to-espn | zero-competition breakout |
| 07-26 | espn-knockout-leagues | zero-competition breakout |
| 07-29 | when-does-fantasy-football-start | +90% timing query |
| 07-30 | nfl-offseason-catch-up-2026 | product-fit hub (Reddit VOC #1) |
| ~~08-01~~ **published 07-21** | fantasy-football-punishment-ideas | culture cluster; feeds video series — pulled forward, live + IndexNow-pinged |
| 08-05 | fantasy-football-league-constitution-template | weakest SERP found |
| 08-08 | what-is-ppr / how-does-ff-work / what-is-a-flex / what-is-faab | beginner Q&A batch |
| 08-13 | draft-order-ideas / draft-party-ideas | culture cluster |
| 08-18 | fantasy-football-team-names-2026 | biggest crackable term (~49.5K/mo) |
| 08-19 | best-ball / vampire-league / guillotine-league | format explainers |
| 08-24 | sleeper-vs-espn-vs-yahoo-fantasy-football | platform choice + migration tie-in |

### Edits to live posts
- best-fantasy-football-apps-2026: title → "7 Best Fantasy Football Apps for 2026 Drafts, Compared", excerpt rewritten, updatedAt bumped (1,615 impr @ pos 10.2, CTR 0.43% — freshness + snippet play).

### Watch for in GSC (check ~2026-08-05 and ~2026-08-20)
- Migration/Knockout posts: impressions on "nfl fantasy shutting down", "knockout league" within days (zero-competition SERPs).
- Beginner batch: "what is ppr/flex/faab" impressions from late Aug.
- Team names post: impressions spike Aug 25–Sep 7 window.
- Apps post: CTR uplift from new title; position movement toward page 1.

### Still open (from strategy queue)
- Keeper-cost calculator tool (#8) + trade analyzer (Sept) — tool-intent SERPs.
- Position mid-tails (#12, draft mid-Aug when ADP news settles), stats-series next installment.
- Wave posts NOT drafted yet: none — all 17 through Aug 24 are staged.

---

## 2026-06-19 — NBA Draft post (timely + evergreen dual play)

**Page:** `/blog/nba-draft-2026/` (new)
**Target keywords:** `how to follow the 2026 nba draft` (timely) + `nba draft results 2026` (evergreen through August)

### Strategy
Dual-purpose page: pre-draft framing for the "how to follow" intent now; structured results placeholder that becomes the evergreen long-tail anchor after June 26.

### Changes
- **New post created** at `/blog/nba-draft-2026/`
- **Title:** "How to Follow the 2026 NBA Draft" — 33 chars ✓
- **Excerpt:** 138 chars, both intents (follow + results) ✓
- **Content:** When/where to watch; 3 modes (live, alerts, morning recap); comparison table (ESPN, theScore, NBA app, Scoutcast.ai); results placeholder H2 to be filled in June 27
- **Schema:** Article + FAQPage (5 AEO questions) + ItemList (4 apps) — all auto-generated
- **Internal links OUT:** → `/blog/best-free-nba-news-apps-2026/`
- **Internal link IN:** from `best-free-nba-news-apps-2026` closing section ("For the NBA Draft specifically, see...")
- **sitemap.xml + llms.txt** regenerated (47 URLs, 20 posts)
- **Deployed:** pending (Firebase reauth needed)

### Post-draft update needed (morning of June 27)
- Fill in the "2026 NBA Draft results" section with actual picks 1-60
- Update `updatedAt` to June 27
- Change title to "2026 NBA Draft Results: Every Pick, Team by Team" (targets evergreen query)
- Change excerpt to lead with results angle
- Redeploy and ping IndexNow

### Watch for in GSC (check ~2026-07-19)
- Impressions on "nba draft 2026", "how to follow nba draft 2026" before June 26
- Long-tail: "nba draft results 2026", "[team] nba draft pick 2026" queries after June 26
- CTR on results queries post-update

---

## 2026-06-18 — Phase 3: Strengthen best-sports-news-apps (ad-free angle)

**Page:** `/blog/best-sports-news-apps/`
**Target keyword:** `best sports news apps` + `sports news apps no ads` angle

### Changes
- **Title** shortened from 65 chars → 53 chars, no-ads angle added: "Best Sports News Apps in 2026 (No-Ad Picks Included)"
- **Meta description** cut from 199 chars → 150 chars, no-ads angle leads: "Seven sports news apps compared by job — and two are completely ad-free. From live highlights to a 2-minute morning audio catch-up, updated for 2026."
- **`updatedAt`** bumped to 2026-06-18
- **No-ads callout paragraph** added directly after disclosure — prominently names Apple Sports and Scoutcast.ai as the two ad-free options in their free tier
- **New H2:** "Sports news apps with no ads" — added before "Which should you pick?"; explicitly contrasts ad-free options vs. ad-heavy ESPN/Yahoo/SofaScore/theScore; 3 paragraphs
- **Apple Sports H2** updated: "best free minimal scoreboard" → "best free scoreboard, no ads" (stronger keyword match)
- Internal links (World Cup + NBA) already present from Phase 2 ✓
- Schema: Article + FAQPage + ItemList already auto-generated ✓
- **Deployed:** scoutcast.ai live
- **IndexNow:** `best-sports-news-apps` page pinged (Bing/Copilot/Yandex)

### Manual step still needed
- GSC → URL Inspection → Request Indexing: `https://scoutcast.ai/blog/best-sports-news-apps/`

### Watch for in GSC (check ~2026-07-18)
- Position on "best sports news apps" variants: currently ~pos 4
- New impressions on "sports news apps no ads" / "ad-free sports app" queries
- CTR uplift from shorter title (53 chars fits desktop without truncation)

---

## 2026-06-18 — Phase 2: New NBA page (biggest gap)

**Page:** `/blog/best-free-nba-news-apps-2026/` (new)
**Target keyword:** `best free nba news apps 2026` (203 impr / 0 clicks; no prior dedicated page)

### Changes
- **New post created** covering 7 free NBA news apps (ESPN, theScore, Apple Sports, Yahoo Sports, NBA App, Bleacher Report, Scoutcast.ai)
- **Title:** "Best Free NBA News Apps in 2026" — 31 chars ✓
- **Meta description:** 154 chars, job-based + ad-free angle ✓
- **Comparison table** present (app · best for · ads? · personalized? · free tier · platforms)
- **Ad-free section** ("The two no-ad options") leads with Apple Sports + Scoutcast.ai
- **Internal links OUT:** → `espn-app-alternatives`, → `best-sports-news-apps` (×1 each)
- **Internal link IN:** from `best-sports-news-apps` last paragraph (contextual, before App Store CTA)
- **Schema:** Article + FAQPage + ItemList (comparedItems for 7 apps) — all auto-generated
- **sitemap.xml + llms.txt** regenerated (28 URLs, 19 posts)
- **Deployed:** scoutcast.ai live
- **IndexNow:** new NBA page + updated sports-news page pinged (Bing/Copilot/Yandex)

### Manual step still needed
- GSC → URL Inspection → Request Indexing: `https://scoutcast.ai/blog/best-free-nba-news-apps-2026/`

### Watch for in GSC (check ~2026-07-16)
- New impressions and first clicks on "best free nba news apps 2026" variants
- CTR uplift on `best-sports-news-apps` from added NBA link

---

## 2026-06-17 — Phase 1: World Cup page lift

**Page:** `/blog/best-apps-for-following-the-2026-world-cup/`
**Target keyword:** `best app to follow world cup 2026` (pos ~8.4, 2,076 impr/7d)

### Changes
- **Title** shortened from 71 chars → 42 chars: "Best Apps for Following the 2026 World Cup" (keyword-first, year included, < 60 char target)
- **Meta description** cut from 217 chars → 146 chars, benefit-led with "live" urgency and tournament framing
- **`updatedAt`** bumped to 2026-06-17 (freshness signal; renders as "Last updated June 17, 2026")
- **Lead paragraph** rewritten to open with "The 2026 World Cup is underway" (tournament-live framing, present tense)
- **FAQ questions** rewritten as AEO queries matching real search patterns:
  - "What's the best app to follow the 2026 World Cup?"
  - "How can I keep up with the World Cup at work?"
  - "Is there a free app to follow the 2026 World Cup?"
- **Internal link added** from World Cup page → `/blog/how-to-keep-up-with-sports-when-you-dont-have-time/` (year-round system; anchor: "how to keep up with sports when you don't have time")
- **Internal link IN** from homepage: blog callout now points to the World Cup page (was "Why we built Scoutcast.ai")

### Pre-existing links confirmed
- World Cup post → `how-to-follow-the-2026-world-cup-when-you-work` (×2 in body)
- `best-sports-news-apps` → World Cup post (line 1207)
- World Cup sub-pages (`us-soccer-fans`, `mexico-fans`, `england-fans`) → World Cup pillar page (×2 each)

### Schema
- `Article` + `FAQPage` + `ItemList` — all auto-generated; no changes needed
- FAQPage now reflects updated AEO-optimized questions

### Build / lint
- Build: ✓ (33 static pages)
- Lint: 3 pre-existing errors in untouched files; 0 new errors introduced

### Watch for in GSC (check ~2026-07-08)
- Avg position: 8.4 → target top 3
- CTR: 1.59% (33 clicks / 2,076 impr) → expect improvement especially on desktop
- Impressions: should hold or grow during live tournament window (through Jul 19)
