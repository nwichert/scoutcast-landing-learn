"use client"

import Link from "next/link"
import { useSyncExternalStore } from "react"
import { ArrowRight } from "lucide-react"
import posthog from "posthog-js"

// World Cup final is July 19, 2026 — flip to fantasy once it's over.
const FANTASY_PHASE_START = Date.UTC(2026, 6, 20, 4) // 2026-07-20 00:00 ET

const subscribe = () => () => {}

function useFantasyPhase() {
    // Server/build renders World Cup; the client swaps after hydration when past the final.
    return useSyncExternalStore(
        subscribe,
        () => Date.now() >= FANTASY_PHASE_START,
        () => false
    )
}

export function AnnouncementBanner() {
    const fantasyPhase = useFantasyPhase()

    if (fantasyPhase) {
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

    return (
        <Link
            href="/blog/best-apps-for-following-the-2026-world-cup/"
            onClick={() => posthog.capture("announcement_banner_clicked", { phase: "world_cup", destination: "/blog/best-apps-for-following-the-2026-world-cup/" })}
            className="group flex w-full items-center justify-center gap-2 bg-[#0AB17B] px-6 py-2 text-[#0A0E14] transition hover:bg-[#0BC189]">
            <span className="rounded-full bg-[#0A0E14]/15 px-2 py-[2px] font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#0A0E14]">Live</span>
            <span className="text-[13px] font-medium leading-tight sm:text-sm">
                <span className="hidden sm:inline">World Cup 2026 is live — catch every match in your daily two-minute briefing.</span>
                <span className="sm:hidden">World Cup 2026 — catch up in two minutes.</span>
            </span>
            <span className="inline-flex items-center gap-1 text-[13px] font-semibold sm:text-sm">
                Get the app
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
        </Link>
    )
}
