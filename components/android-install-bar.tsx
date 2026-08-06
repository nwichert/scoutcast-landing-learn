"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import posthog from "posthog-js"
import { buildPlayStoreUrl, type Attribution } from "@/lib/urls"
import { trackInstallClick } from "@/lib/track"

const DISMISS_KEY = "scoutcast:android-bar-dismissed"

/**
 * Android's answer to the iOS Smart App Banner, which Safari renders for us from the
 * `apple-itunes-app` meta tag. Chrome has no equivalent, so Android users had no install
 * path short of scrolling to a CTA — and the QR corner widget is desktop-only.
 *
 * Renders nothing until a client-side UA check confirms Android, so desktop and iOS
 * never see it and never pay a layout shift for it. Dismissal is per-session.
 */
export function AndroidInstallBar({ attribution }: { attribution?: Attribution }) {
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (!/Android/i.test(navigator.userAgent)) return
        if (sessionStorage.getItem(DISMISS_KEY)) return
        setShow(true)
        posthog.capture("android_install_bar_shown", { ...attribution })
        // attribution is a stable literal from the server component; re-running on
        // identity change would re-fire the impression event on every render.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!show) return null

    const dismiss = () => {
        sessionStorage.setItem(DISMISS_KEY, "1")
        setShow(false)
        posthog.capture("android_install_bar_dismissed", { ...attribution })
    }

    return (
        <>
            {/* Keeps the bar from covering the last line of the footer. */}
            <div aria-hidden className="h-[68px] md:hidden" />
            <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#30363D] bg-[#161B22]/95 backdrop-blur md:hidden">
                <div className="flex items-center gap-3 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
                    <button
                        type="button"
                        onClick={dismiss}
                        aria-label="Dismiss"
                        className="-ml-1 flex size-7 flex-shrink-0 items-center justify-center rounded-full text-[#8B949E] transition hover:bg-white/5 hover:text-[#F0F6FC]">
                        <X className="size-4" />
                    </button>
                    <Image
                        src="/scoutcast-icon.png"
                        alt=""
                        width={36}
                        height={36}
                        className="size-9 flex-shrink-0 rounded-lg"
                    />
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-[14px] font-semibold leading-tight text-[#F0F6FC]">Scoutcast.ai</p>
                        <p className="truncate text-[12px] leading-tight text-[#8B949E]">Free on Google Play</p>
                    </div>
                    <a
                        href={buildPlayStoreUrl(undefined, { ...attribution, content: "android-bar" })}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackInstallClick("play_store", { ...attribution, content: "android-bar" })}
                        className="flex-shrink-0 rounded-full bg-[#0AB17B] px-4 py-2 text-[14px] font-semibold text-[#04231A] transition active:bg-[#0BC189]">
                        Install
                    </a>
                </div>
            </div>
        </>
    )
}
