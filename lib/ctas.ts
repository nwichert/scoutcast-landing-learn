/**
 * Intent-matched blog CTAs.
 *
 * Search intent varies enormously across the blog — someone reading "what does ADP mean"
 * is learning the game, someone reading "is NFL Fantasy shutting down" has just lost the
 * app they used daily. One generic CTA served both badly. Each group below names the
 * searcher's problem first and positions Scoutcast.ai as the answer to *that*.
 *
 * Grouped by slug rather than set per-post so the copy for a whole intent can be edited
 * in one place, and so adding a post to a group is a one-line change.
 */
export type BlogCta = {
    headline: string
    /** Optional supporting line. Kept short — this sits inline in the article. */
    sub?: string
    /** Overrides the iOS button label where "Download Free" is the wrong verb. */
    label?: string
}

type CtaGroup =
    | "draft-timing"
    | "learn"
    | "migration"
    | "world-cup"
    | "league-social"
    | "cost-of-watching"
    | "tech-news"

const GROUP_COPY: Record<CtaGroup, BlogCta> = {
    // Rewritten 2026-08-16 on the `migration` frame. The previous copy ("Draft
    // season moves fast — don't get caught off guard") converted 0 of 409
    // visitors over 30 days. It sold urgency about a date the reader had just
    // looked up, then offered a habit. This names the season-long decision
    // instead and answers the compatibility objection up front, which is what
    // the 4.5% migration CTA does.
    "draft-timing": {
        headline: "Your draft is the easy part. The 17 weeks after aren't.",
        sub: "Scoutcast.ai layers on top of ESPN, Yahoo, Sleeper, or NFL.com — 2 minutes each morning on your roster and the news that changes your lineup.",
        label: "Get Scoutcast",
    },
    learn: {
        headline: "New to fantasy? Learn it 2 minutes at a time",
        sub: "A short daily briefing in plain language — the terms, the moves, and what actually matters this week.",
    },
    // Scoutcast is not a fantasy platform and doesn't replace one. Your league app runs
    // the league; Scoutcast is the news-and-insight layer on top of it. Copy here must
    // read as "win more weeks in the platform you're on", never as a substitute for it.
    migration: {
        headline: "New platform. Same weekly decisions.",
        sub: "Scoutcast.ai layers on top of whatever platform your league lands on — 2 minutes of news and insight, so you win more weeks.",
        label: "Get Scoutcast",
    },
    "world-cup": {
        headline: "Know what happened while you were working",
        sub: "Goals, lineups, and knockout scenarios in a 2-minute briefing — the fastest way to catch up.",
    },
    // The reader just did (or is doing) the streaming-cost math and is annoyed.
    // Scoutcast is NOT a streaming service and must never read as "cancel your
    // subscriptions" — the honest frame is that watching and staying informed are
    // different jobs, and only one of them costs $100+/month.
    "cost-of-watching": {
        headline: "You can’t stream every game. You can still know everything that happened.",
        sub: "Scoutcast.ai is a ~2-minute morning audio briefing on your teams and players — the games you couldn’t watch, covered by the time you pour coffee. $4.99/mo after a 7-day free trial.",
        label: "Get Scoutcast",
    },
    // Tech-take posts (robot umps, Hawk-Eye). The reader is a general sports fan
    // following how the game itself is changing, not shopping for an app — keep it
    // to the news-layer pitch, no fantasy framing.
    "tech-news": {
        headline: "The game keeps changing. Your morning catch-up shouldn’t.",
        sub: "Scoutcast.ai briefs you on your teams and players every morning — including the rule and tech changes that actually affect how you watch.",
        label: "Get Scoutcast",
    },
    // Rewritten 2026-08-16. The previous copy ("Running the league is the easy
    // part") converted 1 of 1,473 visitors over 30 days — the site's largest
    // traffic source and its worst-converting message. This is the hardest
    // group to convert: the reader came for a laugh, not a tool. So the copy
    // stops selling commissioner convenience and instead ties the punishment
    // they're reading about to the outcome, on the same layers-on-top frame.
    "league-social": {
        headline: "Same league. Same platform. Fewer excuses.",
        sub: "Scoutcast.ai layers on top of your league app — 2 minutes a morning on your roster and your opponent, so you're not the one taking the punishment.",
        label: "Get Scoutcast",
    },
}

const SLUG_GROUPS: Record<CtaGroup, string[]> = {
    "draft-timing": [
        "when-does-fantasy-football-start",
        "fantasy-football-draft-strategy-2026",
        "fantasy-football-mock-draft-2026",
        "fantasy-football-rankings-2026",
        "fantasy-football-sleeper-picks-2026",
        "fantasy-football-rookie-rankings-2026",
        "fantasy-football-busts-2026",
        "who-should-i-draft-fantasy-football-2026",
        "how-to-research-fantasy-football",
        "best-apps-for-fantasy-football-season",
        "best-fantasy-football-apps-2026",
    ],
    learn: [
        "what-is-adp-fantasy-football",
        "what-is-ppr-in-fantasy-football",
        "how-does-fantasy-football-work",
        "what-is-a-flex-in-fantasy-football",
        "what-is-faab-in-fantasy-football",
        "what-is-best-ball-fantasy-football",
        "fantasy-football-waiver-wire-strategy",
        "fantasy-football-start-sit",
    ],
    migration: [
        "nfl-fantasy-moving-to-espn",
        "espn-knockout-leagues",
        "espn-app-alternatives",
        "sleeper-vs-espn-vs-yahoo-fantasy-football",
    ],
    "world-cup": [
        "how-to-follow-the-2026-world-cup-when-you-work",
        "world-cup-2026-by-the-numbers",
        "best-apps-for-following-the-2026-world-cup",
        "best-world-cup-apps-us-soccer-fans",
        "best-world-cup-apps-mexico-fans",
        "best-world-cup-apps-england-fans",
        "world-cup-bracket-2026",
    ],
    "cost-of-watching": [
        "follow-college-football-without-five-streaming-services",
        "cost-of-watching-sports-2026",
    ],
    "tech-news": [
        "mlb-robot-umpires-2026-postseason",
        "nfl-hawk-eye-virtual-measurement",
    ],
    // Entertainment/listicle intent: the reader is usually a commissioner or an active
    // member of a social league — the one person who drags ten others onto a platform.
    "league-social": [
        "fantasy-football-punishment-ideas",
        "fantasy-football-team-names-2026",
        "fantasy-football-draft-order-ideas",
        "fantasy-football-draft-party-ideas",
        "fantasy-football-league-constitution-template",
        "vampire-league-fantasy-football",
        "guillotine-league-fantasy-football",
    ],
}

const DEFAULT_CTA: BlogCta = {
    headline: "Get your team's 2-minute briefing every morning",
}

const BY_SLUG: Record<string, BlogCta> = Object.fromEntries(
    (Object.entries(SLUG_GROUPS) as [CtaGroup, string[]][]).flatMap(([group, slugs]) =>
        slugs.map((slug) => [slug, GROUP_COPY[group]]),
    ),
)

export function ctaForSlug(slug: string): BlogCta {
    return BY_SLUG[slug] ?? DEFAULT_CTA
}

/**
 * Apple campaign token for a page — deliberately coarse.
 *
 * Google Play's Install Referrer accepts arbitrary UTMs, so Play keeps full per-page,
 * per-CTA-position granularity. Apple does not: campaigns must be created by hand in
 * App Store Connect, and one only appears in App Analytics after it has produced
 * first-time downloads from at least five distinct users. At this site's volume a
 * per-page token would never clear that floor, so iOS rolls up to three buckets that
 * plausibly will. Per-page and per-position iOS detail comes from PostHog/GA4 clicks.
 *
 * Each value here must exist as a campaign in App Store Connect to report.
 */
const APPLE_CAMPAIGN_BY_GROUP: Partial<Record<CtaGroup, string>> = {
    migration: "blog-espn-migration",
    "draft-timing": "blog-draft-timing",
}

const APPLE_CAMPAIGN_FALLBACK = "blog-other"

const APPLE_CAMPAIGN_BY_SLUG: Record<string, string> = Object.fromEntries(
    (Object.entries(SLUG_GROUPS) as [CtaGroup, string[]][]).flatMap(([group, slugs]) =>
        slugs.map((slug) => [slug, APPLE_CAMPAIGN_BY_GROUP[group] ?? APPLE_CAMPAIGN_FALLBACK]),
    ),
)

export function appleCampaignForSlug(slug: string): string {
    return APPLE_CAMPAIGN_BY_SLUG[slug] ?? APPLE_CAMPAIGN_FALLBACK
}
