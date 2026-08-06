import posthog from "posthog-js"
import type { Attribution } from "@/lib/urls"

type Gtag = (command: "event", name: string, params?: Record<string, unknown>) => void

/**
 * Install-CTA clicks, sent to PostHog and GA4 from one call.
 *
 * Event names match what PostHog already has history for (`app_store_link_clicked` /
 * `play_store_link_clicked`) so pre- and post-attribution data stay comparable — the
 * campaign/content props are additive. GA4 gets a single `install_click` event since
 * it has no prior series to preserve, and no-ops when NEXT_PUBLIC_GA_ID is unset.
 */
export function trackInstallClick(
    store: "app_store" | "play_store",
    props: { placement?: string; label?: string } & Attribution,
) {
    const { campaign, content, placement, label } = props

    posthog.capture(`${store}_link_clicked`, { placement, label, campaign, content })

    const gtag = (globalThis as { gtag?: Gtag }).gtag
    gtag?.("event", "install_click", { store, placement, campaign, content })
}
