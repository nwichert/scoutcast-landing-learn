"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SeasonCountdown } from "@/components/season-countdown"
import posthog from "posthog-js"

export default function FantasyStrip() {
    return (
        <section className="dark bg-background">
            <div className="mx-auto max-w-6xl px-6 pb-24">
                <Link
                    href="/fantasy"
                    onClick={() => posthog.capture("fantasy_pass_cta_clicked", { placement: "homepage_strip" })}
                    className="group relative flex flex-col gap-5 overflow-hidden rounded-[20px] border border-[#0AB17B]/40 p-8 transition hover:border-[#0AB17B]/70 sm:flex-row sm:items-center sm:justify-between"
                    style={{
                        backgroundImage: "linear-gradient(135deg, rgba(10,177,123,0.10) 0%, rgba(255,255,255,0.02) 55%)",
                    }}>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0AB17B]">NFL Fantasy · Season Pass</span>
                            <SeasonCountdown />
                        </div>
                        <p className="max-w-xl text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-[28px] sm:leading-[1.15]">
                            Four audio briefings a week, personalized to your roster and your H2H opponent.
                        </p>
                        <p className="text-[15px] text-foreground/55">Waiver bids Wednesday. Start/sit Thursday. Final call Sunday. $39.99 per season — under $2.50 a week.</p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-2 text-base font-semibold text-[#0AB17B]">
                        See the Season Pass
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                </Link>
            </div>
        </section>
    )
}
