# Fantasy Punishment Video Pipeline (UGC-style, AI presenter)

Drafted 2026-07-21. Research-backed plan for turning the punishment content angle into
short-form video distribution. Companion to the `fantasy-football-punishment-ideas`
blog post (publishes 2026-08-01).

## The answer to "can we do all of this via MCP?"

Yes, generation → composite → publish → logging can all run from Claude Code via MCP,
with one exception: the one-time account setups below are human steps.

**Stack: HeyGen (official MCP) → Remotion composite → Blotato MCP → TikTok + Reels + Shorts.**
~$61/mo at 3 videos/week: HeyGen Avatar IV pay-as-you-go ≈ $32/mo (~$4/min), Blotato
Starter $29/mo, X API pennies per post.

Why this stack:
- **HeyGen is the only avatar generator with an official MCP server** (`generate_avatar_video`,
  `get_avatar_video_status`, etc. — heygen.com/model-context-protocol). Arcads has better raw
  UGC realism but no affordable API ($110/mo+, API on custom tier only). Fallbacks if HeyGen
  reads too "news anchor" on TikTok: Captions/Mirage API (~$7 per 40s clip) or Argil ($39/mo flat).
- **Blotato has passed TikTok's Content Posting API audit** — posting through it avoids the
  audits that jail solo devs (direct TikTok API = private-only until audited; YouTube API =
  uploads locked private until compliance review; Meta = 2–4 week app review). MCP endpoint:
  `mcp.blotato.com/mcp` with API-key header. Postiz cloud ($29/mo) is the equivalent alternative.
- **Remotion composite matters for reach:** raw static AI-avatar talking heads reportedly get
  ~47% less TikTok distribution. Wrapping the avatar in motion (captions, punishment b-roll
  stills, brand end-card) is what makes it perform — and the Remotion setup already exists
  (hype-reel repo).
- **Do NOT build on Sora** — API sunsets Sept 24, 2026. Veo 3.1 Fast is optional garnish for
  4–8s punishment "skit" b-roll only.

## Disclosure (non-negotiable)

An AI presenter doing branded commentary is allowed on every platform **if labeled**:
- TikTok: mandatory AI label (aggregators expose the AIGC flag; C2PA metadata auto-detected).
- YouTube: "altered/synthetic content" checkbox — enforced since Jan 2026, no reach penalty.
- Meta: "Made with AI" label; Instagram now has an "AI Creator" account type — lean into a
  named, openly-AI "Scoutcast host" persona rather than pretending it's a person.
- Never frame clips as real-customer testimonials. Bake a small "AI host" chip into the
  Remotion comp so the disclosure travels with the video.

## Where to post (in order)

1. **TikTok** — #fantasyfootballpunishment has 1.6M+ posts; the genre is TikTok-native.
2. **Instagram Reels** — same asset cross-posts.
3. **YouTube Shorts** — third priority, evergreen search tail.
4. **X** — clip drop + link back to the blog post ($0.015/post API).

Formats that win: ranked lists ("5 most diabolical punishments"), story-time retells,
commentary. Not full-frame static talking heads. Cadence: 3/week (Tue/Thu/Sun), ramping
through draft season (peak Aug 23–Sep 7).

## Weekly automated flow (Claude Code)

1. Claude writes 3 scripts (hook → 3 punishments → CTA) sourced from the blog post tiers.
2. HeyGen MCP: `generate_avatar_video` (locked "Scoutcast host" avatar + voice, 9:16) →
   poll status → download.
3. Remotion render: avatar layer + animated captions + b-roll stills + AI-host chip +
   Scoutcast end-card.
4. Blotato MCP: upload media → post to TikTok (AIGC flag), Reels, Shorts (synthetic flag),
   X; schedule Tue/Thu/Sun slots.
5. Log post IDs/links to Notion (existing MCP); weekly performance recap via Resend (existing MCP).

## Instagram caption (episode 1) + reusable template

Caption:

> Last place in your fantasy league isn't just a ranking. It's a sentence. 💀
>
> Our AI host counts down the punishments that keep entire leagues showing up in Week 14 — from the Waffle House marathon (one waffle per point you lost by) to the SAT retake.
>
> Which one is your league running this year? Drop it in the comments 👇
>
> Full list of 46 ranked by severity → link in bio
>
> 🎙️ Made with AI — because our host would never survive the Waffle House challenge.

Hashtags:

> #fantasyfootball #fantasyfootballpunishment #fantasyfootballpunishments #fantasyleague #fantasydraft #nfl #fantasyfootball2026 #draftday #fantasyfootballmemes #lastplacepunishment #wafflehouse #fantasycommish

Series template: swap line 1 for the episode's most absurd punishment; keep the
comment-bait question, bio-link CTA (→ /blog/fantasy-football-punishment-ideas/ during
the series), and the AI-host joke constant; rotate 2–3 episode-specific hashtags against
the fixed core (#fantasyfootball #fantasyfootballpunishment #fantasyleague #nfl
#fantasyfootball2026). First line is the pre-"…more" hook — punchline never waits.

## One-time human setup (~half a day)

- [ ] HeyGen account; pick ONE stock avatar + voice as the recurring host; $5 API top-up;
      add HeyGen MCP to Claude Code.
- [ ] Brand accounts: TikTok business, Instagram Business (linked FB Page), YouTube channel;
      consider IG "AI Creator" label.
- [ ] Blotato $29/mo; OAuth-connect the accounts; API key → add `mcp.blotato.com/mcp` to
      Claude Code.
- [ ] Build the 9:16 Remotion template once (avatar-video prop, caption track, disclosure
      chip, end-card) — adapt from hype-reel.
- [ ] No TikTok audit / Meta review / YouTube audit needed — Blotato's audited clients cover it.
