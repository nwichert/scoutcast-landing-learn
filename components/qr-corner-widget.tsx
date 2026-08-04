"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import posthog from "posthog-js"
import { cn } from "@/lib/utils"

export function QrCornerWidget({
    topId,
    bottomId,
    placement,
}: {
    /** id of the element the widget appears after scrolling past */
    topId: string
    /** id of the element the widget hides in front of, to avoid stacking two CTAs */
    bottomId: string
    placement: string
}) {
    const [visible, setVisible] = useState(false)
    const hasTrackedShow = useRef(false)

    useEffect(() => {
        const top = document.getElementById(topId)
        const bottom = document.getElementById(bottomId)
        if (!top || !bottom) return

        let topPassed = false
        let bottomReached = false
        const recompute = () => setVisible(topPassed && !bottomReached)

        const topObserver = new IntersectionObserver(
            ([entry]) => {
                topPassed = !entry.isIntersecting && entry.boundingClientRect.bottom < 0
                recompute()
            },
            { threshold: 0 },
        )
        const bottomObserver = new IntersectionObserver(
            ([entry]) => {
                bottomReached = entry.isIntersecting
                recompute()
            },
            { threshold: 0 },
        )

        topObserver.observe(top)
        bottomObserver.observe(bottom)
        return () => {
            topObserver.disconnect()
            bottomObserver.disconnect()
        }
    }, [topId, bottomId])

    useEffect(() => {
        if (visible && !hasTrackedShow.current) {
            hasTrackedShow.current = true
            posthog.capture("qr_corner_widget_shown", { placement })
        }
    }, [visible, placement])

    return (
        <div
            aria-hidden={!visible}
            className={cn(
                "fixed bottom-6 right-6 z-40 hidden items-center gap-3 rounded-2xl border border-[#30363D] bg-[#161B22] p-3 shadow-2xl transition-all duration-500 sm:flex",
                visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
            )}
        >
            <div className="flex flex-col items-center gap-1">
                <div className="rounded-lg bg-white p-1.5">
                    <Image
                        src="/scoutcast-qr.png"
                        alt="Scan to download Scoutcast on the App Store"
                        width={64}
                        height={64}
                        className="size-16"
                    />
                </div>
                <span className="text-[10px] font-medium uppercase tracking-[0.04em] text-[#8B949E]">iPhone</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <div className="rounded-lg bg-white p-1.5">
                    <Image
                        src="/scoutcast-play-qr.png"
                        alt="Scan to download Scoutcast on Google Play"
                        width={64}
                        height={64}
                        className="size-16"
                    />
                </div>
                <span className="text-[10px] font-medium uppercase tracking-[0.04em] text-[#8B949E]">Android</span>
            </div>
            <p className="max-w-[80px] pr-1 text-[13px] font-semibold leading-[1.3] text-[#F0F6FC]">
                Scan to get the app
            </p>
        </div>
    )
}
