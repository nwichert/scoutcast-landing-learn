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

type CtaGroup = "draft-timing" | "learn" | "migration" | "world-cup" | "league-social"

const GROUP_COPY: Record<CtaGroup, BlogCta> = {
    "draft-timing": {
        headline: "Draft season moves fast — don't get caught off guard",
        sub: "A 2-minute morning briefing on your players, so you never miss the camp news that changes your board.",
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
    "league-social": {
        headline: "Running the league is the easy part",
        sub: "Keep the group chat fed: a 2-minute daily briefing on everyone's teams, so you're always the one who knew first.",
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
