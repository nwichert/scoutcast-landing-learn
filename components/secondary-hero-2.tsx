"use client"

import posthog from "posthog-js"
import { PhoneIllustration } from "@/components/ui/illustrations/phone-illustration"
import { DownloadButton } from "@/components/download-button"
import { PlayStoreButton } from "@/components/play-store-button"

/**
 * Hero copy, v2 — "layer on top of your league", not "save time".
 *
 * The previous copy ("For fans with two minutes, not twenty-five" / "Only your
 * teams. No scrolling.") pitched a better daily habit. The blog CTAs in
 * lib/ctas.ts run that same time-savings frame against real traffic and it does
 * not convert: 0/409 on when-does-fantasy-football-start, 1/1473 on
 * punishment-ideas. The frame that does convert — 27/603, 4.5% — names a
 * decision the reader is already in and promises to sit on top of the platform
 * they already use ("New platform. Same weekly decisions.").
 *
 * So the hero now leads with the compatibility answer and the outcome, not the
 * time saved. `copy_version` rides along on the CTA event so the before/after
 * is comparable without a flag.
 *
 * The `hero-copy-test` A/B test this replaced was removed rather than concluded:
 * at ~13 assigned homepage visitors per arm per month against an ~8% baseline,
 * it needed years to reach power. Homepage reach, not homepage copy, is the
 * binding constraint — see the blog/mobile CTA surfaces for the volume.
 */
const COPY_VERSION = "v2-layer-on-top"

export default function HeroSection() {
    const trackCtaClick = (store: "App Store" | "Google Play") => {
        posthog.capture("hero_cta_clicked", { copy_version: COPY_VERSION, store })
    }

    return (
        <section className="dark bg-background">
            <div className="relative overflow-hidden pb-36 pt-44">
                <div
                    aria-hidden
                    className="pointer-events-none absolute -top-60 left-1/2 h-[720px] w-[1200px] -translate-x-1/2"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle farthest-corner at 50% 50%, rgba(10,177,123,0.18) 0%, rgba(10,177,123,0.04) 40%, transparent 70%)",
                    }}
                />

                <div className="relative mx-auto mb-12 flex max-w-5xl flex-col items-center px-6 text-center">
                    <span className="mb-5 inline-block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0AB17B]">
                        Works with ESPN, Yahoo, Sleeper, and NFL.com
                    </span>
                    <h1 className="max-w-2xl text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-[56px] lg:text-[64px]">
                        Win more weeks.
                        <br />
                        Two minutes a morning.
                    </h1>
                    <p className="mt-6 max-w-2xl text-balance text-lg leading-7 text-foreground/70 sm:text-xl">
                        Scoutcast.ai layers on top of your league — a personalized audio
                        briefing on your roster, your opponent, and the news that actually
                        changes your lineup. Tap to ask follow-ups, hands-free.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <DownloadButton
                            label="Start Free Trial"
                            placement="hero"
                            onClick={() => trackCtaClick("App Store")}
                        />
                        <PlayStoreButton
                            label="Start Free Trial"
                            placement="hero"
                            onClick={() => trackCtaClick("Google Play")}
                        />
                    </div>
                </div>

                <div className="relative px-6">
                    <PhoneIllustration />
                </div>
            </div>
        </section>
    )
}
