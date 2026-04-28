"use client"

import { Check, X } from "lucide-react"
import { Popover } from "@base-ui/react/popover"
import { Logo, LogoIcon } from "@/components/logo"

type Feature = {
    name: string
    description: string
    matrix: [boolean, boolean, boolean, boolean]
}

const competitors = ["The Athletic", "theScore", "BriefingAM"] as const

const features: Feature[] = [
    {
        name: "Hands-free listening",
        description: "Listen in the car, on a run, or while you work. No screen, no scrolling — just audio you can play through AirPods, CarPlay, or any Bluetooth device.",
        matrix: [true, false, false, true],
    },
    {
        name: "Personalized to your teams",
        description: "Briefings focus on the teams and players you follow, not a generic national feed. Your rivalry games lead; the rest stays out of your way.",
        matrix: [true, true, true, false],
    },
    {
        name: "Learns what you care about",
        description: "Scoutcast adapts to your listening habits. Skip a segment and it shows up less; replay one and you'll get more of that angle over time.",
        matrix: [true, false, false, false],
    },
    {
        name: "Multi-source in one place",
        description: "Scores, news, injuries, beat-writer reporting, and highlights — all stitched into one coherent briefing so you don't tab-hop between apps.",
        matrix: [true, false, false, false],
    },
    {
        name: "Finite daily briefing (no doom scroll)",
        description: "Every briefing has a defined start and end. No infinite feed engineered to keep you swiping. You get what you need, then you're out.",
        matrix: [true, false, false, true],
    },
    {
        name: "Ad-free",
        description: "No pre-rolls, no mid-rolls, no sponsor reads in your briefing. The audio is the product — we're not selling your attention.",
        matrix: [true, true, false, true],
    },
]

function Cell({ on, i }: { on: boolean; i: number }) {
    return (
        <div className={`flex h-14 items-center justify-center ${i % 2 === 1 ? "bg-white/[0.03]" : ""}`}>
            {on ? (
                <span className="flex size-[18px] items-center justify-center rounded-full bg-emerald-500">
                    <Check className="size-2.5 text-white" strokeWidth={3} />
                </span>
            ) : (
                <span className="flex size-[18px] items-center justify-center rounded-full bg-rose-500">
                    <X className="size-2 text-white" strokeWidth={3} />
                </span>
            )}
        </div>
    )
}

export default function ComparatorSection() {
    return (
        <section id="compare" className="dark bg-background scroll-mt-20">
            <div className="mx-auto flex max-w-6xl flex-col items-start gap-12 px-6 py-24 lg:flex-row lg:items-start lg:gap-20">
                <div className="flex max-w-[320px] flex-col gap-6 pt-14">
                    <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-[44px] sm:leading-[1.15]">See how we stack up</h2>
                    <p className="text-[17px] leading-[26px] text-foreground/55">Personalized, on-demand audio briefings — built for sports fans, not feed scrollers or productivity dashboards.</p>
                </div>

                <div className="relative grid w-full grid-cols-[1.6fr_1fr_1fr_1fr_1fr] lg:max-w-[760px]">
                    <div className="flex flex-col">
                        <div className="flex h-14 items-end px-4 py-2 sm:px-6">
                            <span className="text-[13px] font-medium text-foreground/55">Features</span>
                        </div>
                        {features.map((feature, i) => (
                            <div
                                key={feature.name}
                                className={`flex h-14 items-center gap-1 px-4 sm:px-6 ${i === 0 ? "rounded-tl-xl" : ""} ${i === features.length - 1 ? "rounded-bl-xl" : ""} ${i % 2 === 1 ? "bg-white/[0.03]" : ""}`}>
                                <span className="text-xs leading-tight text-foreground/80 sm:text-sm">{feature.name}</span>
                                <Popover.Root>
                                    <Popover.Trigger
                                        aria-label={`About ${feature.name}`}
                                        className="ml-1 flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/10 text-[10px] font-medium text-foreground/65 transition hover:bg-white/20 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30">
                                        ?
                                    </Popover.Trigger>
                                    <Popover.Portal>
                                        <Popover.Positioner sideOffset={8}>
                                            <Popover.Popup className="data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 z-50 max-w-[280px] rounded-lg border border-white/10 bg-popover p-3 text-sm leading-relaxed text-popover-foreground shadow-[0_8px_24px_rgba(0,0,0,0.4)] outline-none">
                                                <Popover.Arrow className="data-[side=bottom]:top-[-6px] data-[side=top]:bottom-[-6px] [&>svg]:fill-popover [&>svg]:stroke-white/10">
                                                    <svg
                                                        width={12}
                                                        height={6}
                                                        viewBox="0 0 12 6"
                                                        fill="currentColor">
                                                        <path d="M0 6 L6 0 L12 6 Z" />
                                                    </svg>
                                                </Popover.Arrow>
                                                <p className="text-[13px] leading-[1.45] text-foreground/80">{feature.description}</p>
                                            </Popover.Popup>
                                        </Popover.Positioner>
                                    </Popover.Portal>
                                </Popover.Root>
                            </div>
                        ))}
                    </div>

                    <div className="relative flex flex-col rounded-xl border border-white/20 bg-white/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                        <div className="flex h-14 items-center justify-center px-2">
                            <LogoIcon className="h-7 w-auto sm:hidden" />
                            <Logo className="hidden h-6 w-auto sm:block" />
                        </div>
                        {features.map((feature, i) => (
                            <Cell key={feature.name} on={feature.matrix[0]} i={i} />
                        ))}
                    </div>

                    {competitors.map((name, col) => (
                        <div key={name} className="flex flex-col">
                            <div className="flex h-14 items-center justify-center px-1 sm:px-2">
                                <span className="text-center text-[11px] font-bold leading-tight tracking-tight text-foreground/70 sm:text-sm">
                                    {name}
                                </span>
                            </div>
                            {features.map((feature, i) => (
                                <Cell key={feature.name} on={feature.matrix[col + 1]} i={i} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
