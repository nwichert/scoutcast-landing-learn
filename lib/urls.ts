export const APP_STORE_URL =
    "https://apps.apple.com/us/app/scoutcast-ai/id6761558329?itscg=30200&itsct=apps_box_link&mttnsubad=6761558329"

export const PLAY_STORE_URL =
    "https://play.google.com/store/apps/details?id=ai.scoutcast.android"

// Google Play attributes installs to the `referrer` param via its Install Referrer API,
// so per-placement UTMs here are visible in Play Console acquisition reports without any
// Apple-side equivalent (that requires an App Store Connect campaign provider token).
export function buildPlayStoreUrl(placement?: string) {
    if (!placement) return PLAY_STORE_URL
    const referrer = `utm_source=website&utm_medium=cta&utm_campaign=${placement}`
    return `${PLAY_STORE_URL}&referrer=${encodeURIComponent(referrer)}`
}
