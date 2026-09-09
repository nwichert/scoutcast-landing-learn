"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import posthog from "posthog-js"

// Rendered directly rather than behind a date gate. The previous World Cup /
// fantasy phase switch resolved on the client only (useSyncExternalStore's
// server snapshot returned the pre-July-20 phase), so the static HTML shipped
// the World Cup banner to crawlers long after the final and every visitor saw
// it flash before hydration swapped it. Change the copy here when the campaign
// changes.
export function AnnouncementBanner() {
    return (
        <Link
            href="/fantasy"
            onClick={() => posthog.capture("announcement_banner_clicked", { phase: "sleeper_connect", destination: "/fantasy" })}
            className="group flex w-full items-center justify-center gap-2 bg-[#0AB17B] px-6 py-2 text-[#0A0E14] transition hover:bg-[#0BC189]">
            <span className="rounded-full bg-[#0A0E14]/15 px-2 py-[2px] font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#0A0E14]">New</span>
            <span className="text-[13px] font-medium leading-tight sm:text-sm">
                <span className="hidden sm:inline">Now connect your Sleeper league — read-only, so every briefing knows your live roster.</span>
                <span className="sm:hidden">Connect your Sleeper league — read-only.</span>
            </span>
            <span className="inline-flex items-center gap-1 text-[13px] font-semibold sm:text-sm">
                See the Season Pass
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
        </Link>
    )
}
