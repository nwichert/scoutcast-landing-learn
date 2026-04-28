"use client"

import { Fragment } from "react"
import { Check, Minus, X } from "lucide-react"
import { Popover } from "@base-ui/react/popover"
import { Logo, LogoIcon } from "@/components/logo"
import { cn } from "@/lib/utils"

type SupportState = true | false | "partial"

type ComparisonFeature = {
    label: string
    definition: string
    scoutcast: SupportState
    theAthletic: SupportState
    theScore: SupportState
    briefingAM: SupportState
    footnotes?: Partial<Record<"scoutcast" | "theAthletic" | "theScore" | "briefingAM", string>>
}

const features: ComparisonFeature[] = [
    {
        label: "Hands-free audio briefing",
        definition: "Listen to your daily sports update without looking at a screen — while driving, working out, or making coffee.",
        scoutcast: true,
        theAthletic: "partial",
        theScore: false,
        briefingAM: true,
        footnotes: {
            theAthletic: "Podcasts and AI-narrated articles, but not personalized to your teams.",
        },
    },
    {
        label: "Personalized to your specific teams",
        definition: "Pick the leagues, teams, and players you follow; the briefing focuses on those, not the league at large.",
        scoutcast: true,
        theAthletic: true,
        theScore: true,
        briefingAM: true,
    },
    {
        label: "AI-generated, refreshed daily",
        definition: "A new briefing is produced every morning by an AI from the previous day’s scores and news — not pre-recorded human podcasts.",
        scoutcast: true,
        theAthletic: false,
        theScore: false,
        briefingAM: true,
    },
    {
        label: "Tap-to-ask follow-up questions",
        definition: "Interrupt the briefing mid-play to ask a question and get an instant audio answer with deeper context.",
        scoutcast: true,
        theAthletic: false,
        theScore: false,
        briefingAM: false,
    },
    {
        label: "Add custom sources (e.g., X writers)",
        definition: "Plug in specific beat writers’ X handles so their takes shape your personalized briefing.",
        scoutcast: true,
        theAthletic: false,
        theScore: false,
        briefingAM: false,
    },
    {
        label: "Finite daily briefing (no doom scroll)",
        definition: "A bounded ~2-minute briefing that ends when the day’s news is covered, instead of an infinite feed.",
        scoutcast: true,
        theAthletic: false,
        theScore: false,
        briefingAM: true,
    },
    {
        label: "Live scores & real-time alerts",
        definition: "Push notifications and a constantly updating scoreboard during games.",
        scoutcast: false,
        theAthletic: "partial",
        theScore: true,
        briefingAM: false,
        footnotes: {
            scoutcast: "Coming soon — Scoutcast is a morning briefing, not a live tracker (yet).",
        },
    },
    {
        label: "Long-form editorial & feature writing",
        definition: "In-depth articles, columns, and investigative reporting from staff journalists.",
        scoutcast: false,
        theAthletic: true,
        theScore: false,
        briefingAM: false,
    },
    {
        label: "Sports-first focus",
        definition: "The product is built for sports fans; sports isn’t one tag among many topics.",
        scoutcast: true,
        theAthletic: true,
        theScore: true,
        briefingAM: false,
        footnotes: {
            briefingAM: "BriefingAM is a general AI briefing app — sports is one topic among news, calendar, weather, and email.",
        },
    },
    {
        label: "Ad-free",
        definition: "No advertising in the listening experience.",
        scoutcast: true,
        theAthletic: true,
        theScore: false,
        briefingAM: true,
        footnotes: {
            theAthletic: "Subscription-required to remove ads and unlock content.",
        },
    },
]

const competitorColumns: Array<{
    key: "theAthletic" | "theScore" | "briefingAM"
    label: string
}> = [
    { key: "theAthletic", label: "The Athletic" },
    { key: "theScore", label: "theScore" },
    { key: "briefingAM", label: "BriefingAM" },
]

function StateIcon({ state }: { state: SupportState }) {
    if (state === true) {
        return (
            <span
                aria-label="Supported"
                className="flex size-[18px] items-center justify-center rounded-full bg-emerald-500">
                <Check className="size-2.5 text-white" strokeWidth={3} />
            </span>
        )
    }
    if (state === false) {
        return (
            <span
                aria-label="Not supported"
                className="flex size-[18px] items-center justify-center rounded-full bg-rose-500">
                <X className="size-2 text-white" strokeWidth={3} />
            </span>
        )
    }
    return (
        <span
            aria-label="Partially supported"
            className="flex size-[18px] items-center justify-center rounded-full bg-amber-500">
            <Minus className="size-2.5 text-white" strokeWidth={3} />
        </span>
    )
}

function DataCell({
    state,
    footnote,
    striped,
    transparent = false,
}: {
    state: SupportState
    footnote?: string
    striped: boolean
    transparent?: boolean
}) {
    return (
        <div
            className={cn(
                "relative z-10 flex flex-col items-center justify-center gap-1.5 px-2 py-3",
                !transparent && striped && "bg-white/[0.03]"
            )}>
            <StateIcon state={state} />
            {footnote ? (
                <p className="text-center text-[10px] leading-tight text-foreground/55">{footnote}</p>
            ) : null}
        </div>
    )
}

export default function ComparatorSection() {
    return (
        <section
            id="compare"
            className="dark bg-background scroll-mt-20">
            <div className="mx-auto flex max-w-6xl flex-col items-start gap-12 px-6 py-24 lg:flex-row lg:items-start lg:gap-20">
                <div className="flex max-w-[320px] flex-col gap-4 pt-14">
                    <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-[44px] sm:leading-[1.15]">See how we stack up</h2>
                    <p className="text-[13px] leading-5 text-foreground/55">Honest comparison of personalized sports apps. Last updated April 2026.</p>
                    <p className="text-[17px] leading-[26px] text-foreground/55">Personalized, on-demand audio briefings — built for sports fans, not feed scrollers or productivity dashboards.</p>
                </div>

                <div className="w-full overflow-x-auto lg:max-w-[760px]">
                    <div
                        className="relative grid min-w-[640px] grid-cols-[1.6fr_1fr_1fr_1fr_1fr] lg:min-w-0"
                        role="table"
                        aria-label="Feature comparison: Scoutcast.ai vs The Athletic, theScore, and BriefingAM">
                        {/* Scoutcast column highlight card — grid item spanning all rows in column 2 */}
                        <div
                            aria-hidden
                            className="pointer-events-none rounded-xl border border-white/20 bg-white/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                            style={{ gridColumn: "2", gridRow: `1 / span ${features.length + 1}` }}
                        />

                        {/* Header row */}
                        <div className="relative z-10 flex h-14 items-end px-4 py-2 sm:px-6">
                            <span className="text-[13px] font-medium text-foreground/55">Features</span>
                        </div>
                        <div className="relative z-10 flex h-14 items-center justify-center px-2">
                            <LogoIcon className="h-7 w-auto sm:hidden" />
                            <Logo className="hidden h-6 w-auto sm:block" />
                        </div>
                        {competitorColumns.map((col) => (
                            <div
                                key={col.key}
                                className="relative z-10 flex h-14 items-center justify-center px-1 sm:px-2">
                                <span className="text-center text-[11px] font-bold leading-tight tracking-tight text-foreground/70 sm:text-sm">{col.label}</span>
                            </div>
                        ))}

                        {/* Data rows */}
                        {features.map((feature, i) => {
                            const striped = i % 2 === 1
                            const isFirst = i === 0
                            const isLast = i === features.length - 1
                            return (
                                <Fragment key={feature.label}>
                                    {/* Label cell with definition */}
                                    <div
                                        className={cn(
                                            "relative z-10 flex flex-col gap-1 px-4 py-3 sm:px-6",
                                            striped && "bg-white/[0.03]",
                                            isFirst && "rounded-tl-xl",
                                            isLast && "rounded-bl-xl"
                                        )}>
                                        <div className="flex items-center gap-1">
                                            <span className="text-xs leading-tight text-foreground/85 sm:text-sm">{feature.label}</span>
                                            <Popover.Root>
                                                <Popover.Trigger
                                                    aria-label={`About ${feature.label}`}
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
                                                            <p className="text-[13px] leading-[1.45] text-foreground/80">{feature.definition}</p>
                                                        </Popover.Popup>
                                                    </Popover.Positioner>
                                                </Popover.Portal>
                                            </Popover.Root>
                                        </div>
                                        <p className="text-[11px] leading-snug text-foreground/55 sm:text-xs">{feature.definition}</p>
                                    </div>

                                    {/* Scoutcast cell — transparent so highlight card shows through */}
                                    <DataCell
                                        state={feature.scoutcast}
                                        footnote={feature.footnotes?.scoutcast}
                                        striped={striped}
                                        transparent
                                    />

                                    {/* Competitor cells */}
                                    {competitorColumns.map((col) => (
                                        <DataCell
                                            key={col.key}
                                            state={feature[col.key]}
                                            footnote={feature.footnotes?.[col.key]}
                                            striped={striped}
                                        />
                                    ))}
                                </Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
