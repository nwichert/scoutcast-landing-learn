export const APP_STORE_ID = "6761558329"

export const APP_STORE_URL =
    "https://apps.apple.com/us/app/scoutcast-ai/id6761558329?itscg=30200&itsct=apps_box_link&mttnsubad=6761558329"

export const PLAY_STORE_URL =
    "https://play.google.com/store/apps/details?id=ai.scoutcast.android"

/**
 * Per-CTA attribution for install links.
 *
 * `campaign` is the page the CTA sits on (a blog slug), `content` is where on that
 * page it sits (`cta-hero`, `cta-checklist`, `cta-footer`, …). Together they answer
 * "which article, and which CTA within it, drove this install".
 *
 * Site-wide CTAs (header, homepage) pass only a `placement` and keep the older
 * `utm_source=website&utm_medium=cta` shape so their existing reports stay continuous.
 */
export type Attribution = {
    campaign?: string
    content?: string
    source?: string
    medium?: string
}

function buildReferrer(placement?: string, attribution?: Attribution): string {
    if (attribution?.campaign) {
        const params = [
            `utm_source=${attribution.source ?? "blog"}`,
            `utm_medium=${attribution.medium ?? "organic"}`,
            `utm_campaign=${attribution.campaign}`,
        ]
        if (attribution.content) params.push(`utm_content=${attribution.content}`)
        return params.join("&")
    }
    return placement ? `utm_source=website&utm_medium=cta&utm_campaign=${placement}` : ""
}

// Google Play attributes installs to the `referrer` param via its Install Referrer API,
// so these UTMs are visible in Play Console acquisition reports with no extra setup.
export function buildPlayStoreUrl(placement?: string, attribution?: Attribution) {
    const referrer = buildReferrer(placement, attribution)
    if (!referrer) return PLAY_STORE_URL
    return `${PLAY_STORE_URL}&referrer=${encodeURIComponent(referrer)}`
}

/**
 * App Store Connect truncates `ct` at 40 characters. Trim the campaign from the tail
 * rather than the whole token, so the CTA position — the part we actually compare
 * against itself across pages — always survives.
 */
export function appleCampaignToken({ campaign, content }: Attribution): string {
    if (!campaign) return ""
    const suffix = content ? `_${content.replace(/^cta-/, "")}` : ""
    return `${campaign.slice(0, 40 - suffix.length)}${suffix}`
}

// Apple only files `ct` under a named campaign in App Analytics when it is paired with
// the account's provider token. We emit `ct` regardless — it costs nothing and is inert
// without `pt` — so adding NEXT_PUBLIC_APPLE_PROVIDER_TOKEN later turns attribution on
// with no code change. Until then, iOS per-page numbers come from PostHog/GA4 clicks.
const APPLE_PROVIDER_TOKEN = process.env.NEXT_PUBLIC_APPLE_PROVIDER_TOKEN

export function buildAppStoreUrl(attribution?: Attribution, placement?: string) {
    // Blog CTAs key off campaign+content; site-wide CTAs (header, homepage) only have a
    // placement, but they still deserve a token — otherwise every non-blog iOS install
    // lands in one undifferentiated bucket.
    const token = attribution?.campaign
        ? appleCampaignToken(attribution)
        : placement
          ? appleCampaignToken({ campaign: placement })
          : ""
    if (!token) return APP_STORE_URL
    const url = new URL(APP_STORE_URL)
    url.searchParams.set("ct", token)
    if (APPLE_PROVIDER_TOKEN) url.searchParams.set("pt", APPLE_PROVIDER_TOKEN)
    url.searchParams.set("mt", "8")
    return url.toString()
}
