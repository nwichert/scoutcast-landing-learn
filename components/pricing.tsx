"use client"

import Link from "next/link"
import { Check } from "lucide-react"
import { DownloadButton } from "@/components/download-button"
import posthog from "posthog-js"

const PLUS_INCLUDES = [
    "Unlimited casts — every team, league, and player you follow",
    "Daily ~2-minute briefings with scores, injuries, odds, and storylines",
    "Tap Ask for instant audio follow-ups on anything in your brief",
    "Casts you stop listening to nap themselves and resume with one tap — no clutter, no waste",
    "Ad-free. Lock-screen controls.",
]

const FANTASY_INCLUDES = [
    "Start/sit calls, waiver bids, and weekly matchup briefings",
    "Sunday-morning final call before kickoff",
    "H2H opponent edge + fantasy playoffs",
    "Up to 3 leagues — Yahoo, ESPN, Sleeper, NFL.com",
]

const LEAGUE_INCLUDES = [
    "One pass covers the whole league — 10–14 members listen free",
    "Weekly “Recap + Roast” episode every Tuesday",
    "Exact scores, bench disasters, season-long storylines",
    "Built from your Sleeper league (more platforms coming)",
]

export default function Pricing() {
    return (
        <section
            id="pricing"
            className="dark scroll-mt-20 bg-background">
            <div className="mx-auto max-w-6xl px-6 py-24">
                <div className="flex flex-col items-center gap-3 text-center">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0AB17B]">Pricing</span>
                    <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-[44px] sm:leading-[1.1]">7 days free. No credit card required.</h2>
                    <p className="max-w-xl text-lg leading-7 text-foreground/55">Pick your game: your teams, your fantasy roster, or your whole league — each is $39.99 a year. Scoutcast Plus starts with a full 7-day free trial, no credit card required.</p>
                </div>

                <div className="mt-14 grid gap-5 lg:grid-cols-3">
                    {/* Scoutcast Plus */}
                    <article
                        className="relative flex flex-col gap-6 rounded-[20px] border border-[#0AB17B]/40 p-8"
                        style={{
                            backgroundImage: "linear-gradient(180deg, rgba(10,177,123,0.08) 0%, rgba(255,255,255,0.02) 60%)",
                        }}>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between gap-3">
                                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0AB17B]">Scoutcast Plus</span>
                                <span className="inline-flex items-center rounded-full border border-[#0AB17B]/35 bg-[#0AB17B]/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#0AB17B]">7 days free</span>
                            </div>
                            <div className="flex items-baseline gap-2.5">
                                <span className="text-[56px] font-bold leading-none tracking-[-0.03em] text-foreground">$4.99</span>
                                <span className="text-[15px] text-foreground/55">/ month</span>
                            </div>
                            <p className="text-[13px] text-foreground/55">Or $39.99/year — about $3.33/mo, save 33%. Full 7-day free trial first, no credit card required.</p>
                        </div>
                        <ul className="flex flex-col gap-2.5 border-t border-white/[0.08] py-4">
                            {PLUS_INCLUDES.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-2.5">
                                    <Check
                                        className="mt-1 size-3.5 shrink-0 text-[#0AB17B]"
                                        strokeWidth={2.5}
                                    />
                                    <span className="text-sm text-foreground/80">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <DownloadButton
                            label="Try free for 7 days"
                            showIcon={false}
                            placement="pricing_plus"
                            className="h-12 justify-center rounded-xl border-transparent bg-[#0AB17B] px-5 text-base font-semibold text-[#0D1117] hover:bg-[#0BC189]"
                        />
                    </article>

                    {/* NFL Fantasy Pass */}
                    <article className="relative flex flex-col gap-6 rounded-[20px] border border-white/[0.08] bg-white/[0.02] p-8">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between gap-3">
                                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/55">NFL Fantasy Pass</span>
                                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-foreground/60">Sold separately</span>
                            </div>
                            <div className="flex items-baseline gap-2.5">
                                <span className="text-[56px] font-bold leading-none tracking-[-0.03em] text-foreground">$39.99</span>
                                <span className="text-[15px] text-foreground/55">/ year</span>
                            </div>
                            <p className="text-[13px] text-foreground/55">Your personal AI fantasy analyst · under $2.50 a week in-season. Doesn&rsquo;t require Plus.</p>
                        </div>
                        <ul className="flex flex-col gap-2.5 border-t border-white/[0.08] py-4">
                            {FANTASY_INCLUDES.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-2.5">
                                    <Check
                                        className="mt-1 size-3.5 shrink-0 text-foreground/70"
                                        strokeWidth={2.5}
                                    />
                                    <span className="text-sm text-foreground/80">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/fantasy"
                            onClick={() => posthog.capture("fantasy_pass_cta_clicked", { placement: "pricing_card" })}
                            className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.06] px-5 text-base font-semibold text-foreground transition hover:bg-white/[0.1]">
                            See the Fantasy pass
                        </Link>
                    </article>

                    {/* League Pass */}
                    <article className="relative flex flex-col gap-6 rounded-[20px] border border-white/[0.08] bg-white/[0.02] p-8">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between gap-3">
                                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/55">League Pass</span>
                                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-foreground/60">New</span>
                            </div>
                            <div className="flex items-baseline gap-2.5">
                                <span className="text-[56px] font-bold leading-none tracking-[-0.03em] text-foreground">$39.99</span>
                                <span className="text-[15px] text-foreground/55">/ season</span>
                            </div>
                            <p className="text-[13px] text-foreground/55">The commissioner pays once — the whole league listens free via invite code.</p>
                        </div>
                        <ul className="flex flex-col gap-2.5 border-t border-white/[0.08] py-4">
                            {LEAGUE_INCLUDES.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-2.5">
                                    <Check
                                        className="mt-1 size-3.5 shrink-0 text-foreground/70"
                                        strokeWidth={2.5}
                                    />
                                    <span className="text-sm text-foreground/80">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <DownloadButton
                            label="Get the League Pass"
                            showIcon={false}
                            placement="pricing_league"
                            className="h-12 justify-center rounded-xl border-white/15 bg-white/[0.06] px-5 text-base hover:bg-white/[0.1]"
                        />
                    </article>
                </div>
            </div>
        </section>
    )
}
