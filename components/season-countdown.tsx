"use client"

import { useEffect, useState } from "react"

const SEASON_START = new Date("2026-09-10T20:20:00-04:00")

function daysUntil(target: Date) {
    const ms = target.getTime() - Date.now()
    return Math.max(0, Math.ceil(ms / 86_400_000))
}

export function SeasonCountdown() {
    const [days, setDays] = useState(() => daysUntil(SEASON_START))

    useEffect(() => {
        const tick = () => setDays(daysUntil(SEASON_START))
        tick()
        const id = setInterval(tick, 60 * 60 * 1000)
        return () => clearInterval(id)
    }, [])

    const label =
        days === 0
            ? "Season is live"
            : `Season starts in ${days} ${days === 1 ? "day" : "days"}`

    return (
        <div className="scoutcast-pill-breathe relative inline-flex items-center gap-2 rounded-full border border-[#30363D] bg-[#161B22] px-3 py-1.5">
            <span className="relative flex size-1.5 shrink-0 items-center justify-center">
                <span className="scoutcast-live-ping absolute inline-flex size-full rounded-full bg-[#0AB17B]" />
                <span className="relative inline-flex size-full rounded-full bg-[#0AB17B]" />
            </span>
            <span
                suppressHydrationWarning
                className="text-xs font-medium uppercase tracking-[0.04em] text-[#C9D1D9]">
                {label}
            </span>
        </div>
    )
}
