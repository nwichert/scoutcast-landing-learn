"use client"

import { useEffect, useState } from "react"
import posthog from "posthog-js"
import { PhoneIllustration } from "@/components/ui/illustrations/phone-illustration"
import { DownloadButton } from "@/components/download-button"
import { PlayStoreButton } from "@/components/play-store-button"

const HERO_COPY_FLAG = "hero-copy-test"

type Variant = "control" | "test"

const COPY = {
    control: {
        eyebrow: "For fans with two minutes, not twenty-five",
        headlineLine1: "Only your teams.",
        headlineLine2: "No scrolling.",
        body: "A personalized audio briefing on the leagues, teams, and players you actually follow — generated fresh every morning. Tap to ask follow-ups, hands-free.",
        ctaLabel: (store: "App Store" | "Google Play") => store,
    },
    test: {
        eyebrow: "For fans with two minutes, not twenty-five",
        headlineLine1: "Your teams. 2 minutes.",
        headlineLine2: "Every morning.",
        body: "Skip the scroll. Get a personalized audio briefing on your teams, leagues, and players — fresh every morning, with hands-free follow-up questions built in.",
        ctaLabel: (_store: "App Store" | "Google Play") => "Start Free Trial",
    },
} as const satisfies Record<Variant, {
    eyebrow: string
    headlineLine1: string
    headlineLine2: string
    body: string
    ctaLabel: (store: "App Store" | "Google Play") => string
}>

export default function HeroSection() {
    const [variant, setVariant] = useState<Variant>("control")

    useEffect(() => {
        const applyFlag = () => {
            const value = posthog.getFeatureFlag(HERO_COPY_FLAG)
            if (value === "test" || value === "control") setVariant(value)
        }
        applyFlag()
        posthog.onFeatureFlags(applyFlag)
    }, [])

    const copy = COPY[variant]

    const trackCtaClick = (store: "App Store" | "Google Play") => {
        posthog.capture("hero_cta_clicked", { variant, store })
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
                        {copy.eyebrow}
                    </span>
                    <h1 className="max-w-2xl text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-[56px] lg:text-[64px]">
                        {copy.headlineLine1}
                        <br />
                        {copy.headlineLine2}
                    </h1>
                    <p className="mt-6 max-w-2xl text-balance text-lg leading-7 text-foreground/70 sm:text-xl">
                        {copy.body}
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <DownloadButton
                            label={copy.ctaLabel("App Store")}
                            placement="hero"
                            onClick={() => trackCtaClick("App Store")}
                        />
                        <PlayStoreButton
                            label={copy.ctaLabel("Google Play")}
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
