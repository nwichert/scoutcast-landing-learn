# SEO Worklog

Track changes here to correlate against GSC in 2–4 weeks.

---

## 2026-08-24 — CTR title/snippet pass: ADP, PPR, FAAB (Aug 22–23 schedule item)

Per the Answer-Era addendum schedule: three definitional pages served at pos 6–10 on
big impression volume with ~zero clicks (GSC Jul 27–Aug 23). The answer box eats the
definition, so each title now keeps the query tokens but adds the promise the post
already delivers beyond it. Excerpts (= meta description + on-page intro) rewritten
the same way; `updatedAt` bumped since title/excerpt render on-page.

| Page | 28d data | New title |
|---|---|---|
| `what-is-adp-fantasy-football` | ~1.4K impr on "adp … meaning" cluster @ pos ~9–11, 1 click | What ADP Means in Fantasy Football (And How to Beat It) |
| `what-is-ppr-in-fantasy-football` | "ppr" 936 impr @ 6.3, "what is ppr" 255 @ 8.2, 1 click total | What Is PPR in Fantasy Football? (+ Half PPR vs. Standard) |
| `what-is-faab-in-fantasy-football` | "faab fantasy football" 548 @ 7.5, "faab" 336 @ 9.4, 0 clicks | What Is FAAB in Fantasy Football? (+ How Much to Bid) |

No body changes. FAQPage schema untouched.

### Watch for in GSC (check ~2026-09-07)
- Strategy estimate for this pass: +200 clicks/mo across the three pages
- PPR: CTR on "ppr" head query (0.1% → anything >0.5% is a win at pos 6)
- FAAB: "faab fantasy football" @ pos 7.5 is the volume query — CTR from 0%
- ADP: watch position too — title dropped exact "What does ADP mean" phrasing

---

## 2026-08-14 — RESULTS: fantasy wave measured; Jul 21 checkpoints closed

**Data:** `Google-Trends-Research/scoutcast.ai-Performance-on-Search-2026-08-14.xlsx`
(GSC, Web, last 3 months = 2026-05-13 → 2026-08-12; final day partial due to reporting lag).
No measurement had been taken since the Jul 16 export — this entry closes both the
Aug 5 and Aug 20 checkpoints set on 2026-07-21, plus the Jul 23 podcast-title checkpoint.

### Headline: the wave worked, and CTR recovered

Trailing 28 days at each of the three exports:

| Window | Impressions | Clicks | CTR |
|---|---|---|---|
| May 21 – Jun 17 | 5,438 | 65 | 1.20% |
| Jun 17 – Jul 14 | 52,692 | 196 | 0.37% |
| **Jul 16 – Aug 12** | **197,507** | **2,401** | **1.22%** |

36× impressions and 37× clicks in eight weeks, with CTR back to the pre-World-Cup level.
The 0.37% trough was dilution from `world-cup-bracket-2026` (22,268 impr @ 0.05% — bracket
intent is answered in-SERP), not a sitewide problem; it washed out as fantasy volume arrived.

Monthly: Jun 28,196 impr / 104 clicks · Jul 90,169 / 790 · **Aug 1–12 139,221 / 1,785 @ 1.28%**.
Peak day Aug 5 (213 clicks). 90-day total 258,624 impr / 2,686 clicks / 1.04%.
Mobile CTR 1.33% vs desktop 0.62% — mobile is 2.1× and is where installs come from.

### Checkpoint verdicts (against "Watch for in GSC", 2026-07-21)

| Checkpoint | Verdict | Evidence |
|---|---|---|
| Migration post → impressions within days | ✅ **Beat** | `nfl-fantasy-moving-to-espn` 38,072 impr / 439 clicks / pos 5.89; cluster at pos 2.3–3.5 |
| Knockout post → impressions | ⚠️ **Right call, small** | `espn-knockout-leagues` 990 impr / 10 clicks / pos 7.09 — real but ~2% of migration |
| Beginner batch → "what is ppr/flex/faab" from late Aug | ❌ **Impressions only** | 17,896 impr across the 5 definitional pages → **20 clicks total** |
| Team-names spike Aug 25 – Sep 7 | ⏳ Not yet live | publishes 08-18; still ahead of the window |
| Apps post CTR + position from retitle | ✅ **Confirmed** | pos 10.19 → **8.89**, clicks 7 → 24, impr 1,615 → 4,849 |

### What produced the clicks

- **`fantasy-football-punishment-ideas` — 1,431 clicks / 20,635 impr / 6.93% CTR / pos 7.80.**
  53% of all site clicks from one post. Cluster: 69 queries, 1,091 clicks, 11,484 impr, **9.50% CTR**.
  Head term "fantasy football punishments" runs **11.54% CTR at position 5.61** — above-normal
  for that position, i.e. the title/snippet is taking clicks from pages ranked above it.
  Validates the culture-cluster thesis (no publisher on page 1 + demand displaced by Reddit mods).
- **`nfl-fantasy-moving-to-espn` — 439 clicks / 38,072 impr / pos 5.89.** Zero-competition
  breakout confirmed; published 2 days after the research call, top-3 on the query cluster.
- **Earlier interventions compounded rather than plateaued:** `best-sports-news-apps`
  72 → 194 clicks (6,780 → 16,013 impr, pos 6.88 → 6.14); `espn-app-alternatives` 12 → 37
  (1,056 → 3,576, pos 7.67 → 6.39); `how-many-people-play-fantasy-football` 11 → 36 (pos 6.48 → 5.80).

### What didn't work — and the standing rules that follow

1. **Date/definitional queries return impressions, not clicks. Stop treating them as traffic plays.**
   `when-does-fantasy-football-start` is the site's biggest impression driver — **83,750 impr, 217
   clicks, 0.26%** — and the head term alone is 11,538 impr / 4 clicks / 0.03% @ pos 7.62. The
   definitional batch: `what-is-adp` 8,827 impr / 7 clicks, `what-is-ppr` 3,581 / 3,
   `what-is-faab` 2,763 / 4, `what-is-a-flex` 1,725 / 4, `how-does-ff-work` 1,119 / 2.
   Google answers these in-SERP. **New rule:** 3c pages are AI-citation and authority surface
   only; never counted toward click targets, and no more of them until a citation-side
   measurement exists to justify the slot.
2. **Orphaned pages don't rank — and the two most strategically important pages are orphans.**
   `nfl-offseason-catch-up-2026`, called in the strategy "the purest product-fit page we can
   write" and the page that sells the Pass hardest: **10 impressions, 0 clicks in 3 weeks**
   (pos 8.40, 0 inbound internal links). `fantasy-football-league-constitution-template`
   ("weakest SERP found"): **68 impr, 3 clicks**, also 0 inbound. Across the blog: ~57 internal
   links over 52 posts, 12 posts with 0 inbound and 8 with 1.
3. **Prompt-shaped queries are visibility, not traffic.** 55 natural-language queries →
   2,860 impr, **2 clicks** ("what apps give fastest world cup match updates?" 803 impr / 0 clicks
   / pos 6.14). Some carry agent scaffolding verbatim (`context: location: viet nam…` @ pos 2.00),
   which is real evidence AI systems are reading the pages. Track separately from click goals.
4. **`/schedules/` has no traction.** ~24 pages, near-zero clicks, positions 8–46
   (`wimbledon-2026` 36.4, `us-open-tennis-2026` 46.7). Either commit to it or stop generating it.
5. **`/fantasy/` gets nothing from search** — 63 impr, 0 clicks, pos 10.17. The money page is
   reached only via in-post links (31 posts link to it), never via Google.

### Actions taken from this read

- (none yet — this entry is the measurement; fixes below are queued)

### Next actions, in priority order

1. **Pricing correction, site-wide (blocking).** `public/pricing.md` (last touched 2026-04-27)
   and `public/llms.txt` still state a permanently free tier and "Season Pass is not a
   subscription," while `components/pricing.tsx` charges $5.99/mo Plus after a 7-day trial.
   16 posts repeat the free claim, **14 inside `faqs`** → shipped as FAQPage JSON-LD, i.e. the
   exact strings Google and LLMs quote. Worst on the best pages (`best-sports-news-apps`,
   `best-free-nba-news-apps-2026`, where "free + ad-free" *is* the differentiator argument).
   Only `scoutcast-vs-huxe-vs-briefingam` is correct. Fix, redeploy, re-ping IndexNow.
2. **OG images.** 35 of 52 posts have none and `generateMetadata` has no fallback
   (`images: post.ogImage ? … : undefined`) — including the punishment post, the single most
   shareable asset on the site. Add the fallback, batch-run `scripts/generate-og-images.mjs`.
3. **Internal-link pass on the 12 orphans**, `nfl-offseason-catch-up-2026` first (link in from
   the punishment post, the migration post, and `when-does-fantasy-football-start` — all three
   have traffic and none link to it). Normalize hrefs to relative `/blog/…` while in there.
4. **Snippet-recapture pass on the impression giants.** `when-does-fantasy-football-start`
   (83,750 impr @ 0.26%) and `what-is-adp` (8,827 @ 0.08%): restructure so the answer is a
   scannable block Google must click through for (dated table per platform, not a prose answer).
   If CTR doesn't move by ~2 weeks, accept these as citation-only per rule 1.
5. **Replicate the punishment pattern, don't extend it.** The win came from SERP structure
   (no publisher on page 1 + community-displaced demand), not from the topic. `draft-order-ideas`
   and `draft-party-ideas` shipped 08-13 with 0 days of data — they are the direct test.
6. **Tool play still unbuilt** (#3e, "biggest structural unlock"): no calculator/generator route
   exists. Keeper calculator was due 08-14.

### Watch for in GSC (check ~2026-09-01 and ~2026-09-22)

- `draft-order-ideas` / `draft-party-ideas` (live 08-13): do they reproduce the punishment CTR
  profile? This is the cleanest test of whether the culture-cluster thesis generalizes.
- `fantasy-football-team-names-2026` (live 08-18): impressions in the Aug 25 – Sep 7 window;
  ~49.5K/mo head term, so watch position more than clicks.
- `sleeper-vs-espn-vs-yahoo` (live 08-24) + format explainers (08-19).
- Post-pricing-fix: any CTR change on `best-sports-news-apps` / `best-free-nba-news-apps-2026`
  once the free-tier claim is corrected (hypothesis: neutral to slightly negative on CTR,
  positive on install→retain — check store conversion, not just GSC).
- Orphan fix: does `nfl-offseason-catch-up-2026` clear 100 impressions once linked?
- Season-start inflection: fantasy interest peaks the week of Labor Day (Sep 7). Expect the
  Aug curve to continue through Sep 7, then decay on draft-timing terms and shift to
  waiver/start-sit intent — the Sept pivot (#14) should be queued before then.

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
