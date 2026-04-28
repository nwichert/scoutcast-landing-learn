import type { Metadata } from "next"
import { Check, Play } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { DownloadDialog } from "@/components/download-dialog"
import { CoverageTimeline } from "@/components/fantasy-coverage-timeline"
import { SeasonCountdown } from "@/components/season-countdown"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
    title: "NFL Fantasy Season Pass",
    description:
        "Four audio briefings a week, personalized to your roster and your H2H opponent. Conviction calls in five minutes — not a 90-minute podcast.",
    alternates: { canonical: "/fantasy" },
}

const PALETTE = {
    bg: "#0D1117",
    card: "#161B22",
    border: "#30363D",
    green: "#0AB17B",
    text: "#F0F6FC",
    soft: "#C9D1D9",
    muted: "#8B949E",
}

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-block text-xs font-semibold uppercase tracking-[0.08em] text-[#0AB17B]">{children}</span>
)

const SectionHeading = ({
    eyebrow,
    title,
    align = "left",
}: {
    eyebrow: string
    title: React.ReactNode
    align?: "left" | "center"
}) => (
    <div className={align === "center" ? "flex flex-col items-center gap-3 text-center" : "flex flex-col gap-3"}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="text-balance text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-[#F0F6FC] sm:text-[40px] lg:text-[48px]">{title}</h2>
    </div>
)

const AppleGlyph = ({ size = 16 }: { size?: number }) => (
    <svg
        aria-hidden
        width={size}
        height={(size * 18) / 16}
        viewBox="0 0 814 1000"
        fill="currentColor">
        <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
    </svg>
)

const HEAT_BARS = [8, 14, 22, 12, 18, 26, 16, 22, 10, 18, 14, 24, 8, 20, 12, 26, 14, 18, 10, 22]
const SAMPLE_BARS = [8, 14, 22, 10, 18, 28, 16, 24, 32, 20, 12, 22, 36, 18, 26, 10, 30, 14, 22, 10, 18, 24, 14, 20, 28, 16, 22]

const RHYTHM = [
    {
        day: "Tue",
        time: "7AM",
        title: "Fantasy Recap",
        meta: "3–4 min · The Monday-night dust settles",
        body: "How your roster did — stat lines, own the swing-call hit or miss, name league-wide role changes, set the waiver mindset.",
        accent: false,
    },
    {
        day: "Wed",
        time: "7AM",
        title: "Waiver Wednesday",
        meta: "3–5 min · FAAB bids included",
        body: "Adds personalized to your roster and your H2H opponent's. No \"could be a good play\" — every pickup gets a specific bid.",
        accent: false,
    },
    {
        day: "Thu",
        time: "7AM",
        title: "Start/Sit Thursday",
        meta: "4–6 min · The swing call gets oxygen",
        body: "Locks compressed. One featured swing call with layered reasoning. Your H2H edge — where this week is actually won or lost.",
        accent: false,
    },
    {
        day: "Sun",
        time: "11:30",
        title: "Final Call Sunday",
        meta: "2–3 min · 90 minutes before kickoff",
        body: "Last-minute changes only. Inactives, weather, beat-writer pings — the late news that actually moves your lineup.",
        accent: true,
    },
]

const STEPS = [
    {
        n: "01",
        title: "Upload your roster",
        body: "Screenshot or paste from Yahoo, ESPN, Sleeper, or NFL.com. Add your H2H opponent if you want the edge analysis.",
    },
    {
        n: "02",
        title: "Briefings drop in your feed",
        body: "Wake up Wed/Thu and get a push. The week's calls, queued and ready. No app to open if you don't want to.",
    },
    {
        n: "03",
        title: "Listen in five minutes",
        body: "On the commute, the treadmill, school drop-off. Background audio, lock-screen controls, AirPlay to the car.",
    },
]

const VS = [
    {
        label: "vs Fantasy Footballers / Fantasy Focus",
        them: "90-minute show. Generic. \"Could be a good play.\"",
        us: "5 minutes. Your roster. \"Bid 38% on Cook, drop McLaurin.\"",
    },
    {
        label: "vs scrolling X / Twitter",
        them: "Hot takes, beat-writer firehose, three accounts disagreeing.",
        us: "Curated signal, delivered. The takes you needed, none you didn't.",
    },
    {
        label: "vs ESPN / CBS waiver articles",
        them: "Ad walls, SEO filler, recap of last week dressed as analysis.",
        us: "No ads. Specific bids. Owns its misses out loud.",
    },
]

const INCLUDES = [
    "Tue / Wed / Thu / Sun briefings, all 18 weeks",
    "Fantasy playoffs (Wk 15–17) + H2H opponent edge",
    "NFL playoff DFS briefings + Super Bowl preview",
    "Up to 3 leagues. Yahoo, ESPN, Sleeper, NFL.com.",
    "Offline downloads. CarPlay. AirPods controls.",
]

const FAQ = [
    {
        q: "How long are the briefings?",
        a: "Two to six minutes. Tuesday recap runs 3–4 min, Waiver Wednesday is the longest at 3–5 min, Start/Sit Thursday is 4–6 min, and Sunday final call is the shortest at 2–3 min. Built for the coffee, the drive, the gym walk-in.",
    },
    {
        q: "What leagues and platforms do you support?",
        a: "Yahoo, ESPN, Sleeper, and NFL.com out of the box. Standard, half-PPR, and full-PPR scoring. Up to 3 leagues per account.",
    },
    {
        q: "Do I have to upload my roster?",
        a: "Recommended but not required. Without it you'll still get the league-wide briefing — but the personalized swing calls and H2H opponent edge are the whole point.",
    },
    {
        q: "What happens in the offseason?",
        a: "Your pass auto-renews each August before the season opens. We pause briefings between February and August and don't bill until the new schedule drops.",
    },
    {
        q: "Can I listen offline?",
        a: "Yes. Briefings download to your device automatically when they drop. Plays on the subway, on a flight, or anywhere your roster can't get a signal.",
    },
    {
        q: "How is this different from the Fantasy Footballers?",
        a: "Same instinct, opposite shape. They're a 90-minute three-host show with broad takes. We're five minutes, one analyst voice, calibrated to your exact roster — every week.",
    },
]

export default function FantasyPage() {
    return (
        <div className="dark min-h-screen bg-[#0D1117] text-[#F0F6FC] antialiased">
            <Header />

            <main>
                <Hero />
                <Rhythm />
                <HowItWorks />
                <BriefingSample />
                <Coverage />
                <Comparison />
                <Pricing />
                <FaqSection />
                <FinalCta />
            </main>

            <Footer />
        </div>
    )
}

function Hero() {
    return (
        <section className="relative overflow-hidden px-6 pb-20 pt-28 sm:pt-32 lg:px-12 lg:pb-28 lg:pt-40">
            <div
                aria-hidden
                className="pointer-events-none absolute -top-44 left-1/2 h-[520px] w-[520px] -translate-x-1/2 lg:h-[760px] lg:w-[760px]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle farthest-corner at 50% 50%, rgba(10,177,123,0.18) 0%, rgba(10,177,123,0.04) 40%, transparent 70%)",
                }}
            />
            <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
                <div className="flex flex-col gap-6">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#30363D] bg-[#161B22] px-3 py-1.5">
                        <span className="size-1.5 shrink-0 rounded-full bg-[#0AB17B]" />
                        <span className="text-xs font-medium uppercase tracking-[0.04em] text-[#C9D1D9]">NFL Fantasy · Season Pass</span>
                    </div>
                    <h1 className="text-balance text-[44px] font-bold leading-[1.05] tracking-[-0.02em] text-[#F0F6FC] sm:text-[56px] lg:text-[72px]">
                        Stop Scrolling.
                        <br />
                        Start Winning.
                    </h1>
                    <p className="max-w-xl text-[17px] leading-[1.55] text-[#8B949E] lg:text-lg">
                        Four audio briefings a week, personalized to your roster and your H2H opponent. Conviction calls in five minutes — not a 90-minute podcast.
                    </p>
                    <div className="mt-2 flex flex-col gap-3">
                        <DownloadDialog className="inline-flex h-13 w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-[#0AB17B] px-5 text-base font-semibold text-[#0D1117] transition hover:bg-[#0BC189] sm:w-fit">
                            <AppleGlyph />
                            Get the Season Pass — $49.99
                        </DownloadDialog>
                        <div className="flex items-center gap-2 text-[13px] text-[#8B949E]">
                            <span>About $3 a week in-season</span>
                            <span className="size-[3px] rounded-full bg-[#30363D]" />
                            <span>Cancel anytime in iOS</span>
                        </div>
                    </div>
                </div>

                <PlayerPreview />
            </div>
        </section>
    )
}

function PlayerPreview() {
    return (
        <div className="relative flex w-full max-w-md flex-col gap-3 rounded-2xl border border-[#30363D] bg-[#161B22] p-4 lg:max-w-none">
            <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0AB17B]/30 bg-[#0AB17B]/10 px-2.5 py-1">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#0AB17B]">Wed · Wk 7</span>
                </span>
                <span className="text-xs text-[#8B949E]">Waiver Wednesday</span>
            </div>
            <p className="text-base font-semibold leading-[1.35] text-[#F0F6FC]">Cook is the FAAB swing — bid 38%. Drop McLaurin.</p>
            <div className="flex items-center gap-3">
                <button
                    type="button"
                    aria-label="Play"
                    className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#0AB17B]">
                    <Play className="size-3.5 fill-[#0D1117] text-[#0D1117]" />
                </button>
                <div className="flex h-7 grow items-center gap-[3px]">
                    {HEAT_BARS.map((h, i) => {
                        const active = i < 8
                        return (
                            <span
                                key={i}
                                className={active ? "scoutcast-bar w-[3px] rounded-[2px]" : "w-[3px] rounded-[2px]"}
                                style={{
                                    height: `${h}px`,
                                    backgroundColor: active ? PALETTE.green : PALETTE.border,
                                    animationDelay: active ? `${i * 90}ms` : undefined,
                                }}
                            />
                        )
                    })}
                </div>
                <span className="shrink-0 font-mono text-xs text-[#8B949E]">2:47 / 4:12</span>
            </div>
        </div>
    )
}

function Rhythm() {
    return (
        <section className="px-6 py-16 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="The week, on schedule"
                    title="Four drops. Built for every day your roster needs to move."
                />
                <div className="mt-8 grid gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
                    {RHYTHM.map((card) => (
                        <article
                            key={card.title}
                            className="flex flex-col gap-3.5 rounded-2xl border border-[#30363D] bg-[#161B22] p-5">
                            <div className="flex items-center gap-3">
                                <div
                                    className={`flex size-14 shrink-0 flex-col items-center justify-center rounded-xl border bg-[#0D1117] ${
                                        card.accent ? "border-[#0AB17B]/40" : "border-[#30363D]"
                                    }`}>
                                    <span
                                        className={`text-[10px] font-semibold uppercase tracking-[0.08em] ${
                                            card.accent ? "text-[#0AB17B]" : "text-[#8B949E]"
                                        }`}>
                                        {card.day}
                                    </span>
                                    <span className="mt-0.5 text-[18px] font-bold leading-none text-[#F0F6FC]">{card.time}</span>
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <h3 className="text-[17px] font-semibold leading-tight text-[#F0F6FC]">{card.title}</h3>
                                    <p className="text-xs text-[#8B949E]">{card.meta}</p>
                                </div>
                            </div>
                            <p className="text-sm leading-[1.55] text-[#C9D1D9]">{card.body}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

function HowItWorks() {
    return (
        <section className="px-6 py-16 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Setup"
                    title="Set up once. Listen all season."
                />
                <div className="mt-8 grid gap-3.5 md:grid-cols-3">
                    {STEPS.map((step) => (
                        <article
                            key={step.n}
                            className="flex items-start gap-4 rounded-2xl border border-[#30363D] bg-[#161B22] p-5">
                            <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#0AB17B]/40 bg-[#0AB17B]/10">
                                <span className="font-mono text-sm font-semibold text-[#0AB17B]">{step.n}</span>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <h3 className="text-[17px] font-semibold leading-tight text-[#F0F6FC]">{step.title}</h3>
                                <p className="text-sm leading-[1.55] text-[#8B949E]">{step.body}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

function BriefingSample() {
    return (
        <section className="px-6 py-16 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-3xl">
                <SectionHeading
                    eyebrow="A Sample, 30 seconds"
                    title="Here's the analyst voice. No filler."
                />
                <article className="mt-8 flex flex-col gap-4 rounded-[20px] border border-[#30363D] bg-[#161B22] p-5 lg:p-7">
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <span className="size-1.5 shrink-0 rounded-full bg-[#0AB17B]" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#C9D1D9]">Thu · Wk 7 · Start/Sit</span>
                        </div>
                        <span className="font-mono text-[11px] text-[#8B949E]">EXCERPT 02:12 → 02:42</span>
                    </div>
                    <h3 className="text-xl font-bold leading-tight tracking-[-0.01em] text-[#F0F6FC] lg:text-2xl">FLEX swing call: Conner over Pollard</h3>
                    <blockquote className="rounded-lg border-l-2 border-[#0AB17B] bg-[#0D1117] py-4 pl-5 pr-4 text-[15px] leading-[1.6] text-[#C9D1D9]">
                        &ldquo;Conner over Pollard at FLEX. Cardinals defense is 31st against the run since Week 4 — Kingsbury&rsquo;s offense saw a 67% rush rate in their last two games when Pollard played fewer than 60% of snaps. Conner&rsquo;s red-zone share is 71%. The hedge people are giving you is matchup volatility. The actual data says start him.&rdquo;
                    </blockquote>
                    <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                aria-label="Play sample"
                                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#0AB17B]">
                                <Play className="size-4 fill-[#0D1117] text-[#0D1117]" />
                            </button>
                            <div className="flex h-9 grow items-center gap-[2.5px]">
                                {SAMPLE_BARS.map((h, i) => (
                                    <span
                                        key={i}
                                        className="w-[2.5px] rounded-[2px]"
                                        style={{
                                            height: `${h}px`,
                                            backgroundColor: i < 13 ? PALETTE.green : PALETTE.border,
                                            boxShadow: i === 12 ? "0 0 12px rgba(10,177,123,0.6)" : undefined,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center justify-between font-mono text-[11px] text-[#8B949E]">
                            <span>02:12</span>
                            <span className="font-sans">1.0× speed</span>
                            <span>02:42</span>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

function Coverage() {
    return (
        <section className="px-6 py-16 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-3xl">
                <SectionHeading
                    eyebrow="What $49.99 actually buys"
                    title="The whole NFL calendar. Not a half season."
                />
                <CoverageTimeline />
            </div>
        </section>
    )
}

function Comparison() {
    return (
        <section className="px-6 py-16 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Why this, not that"
                    title="You already have a fantasy stack. We're the part that's missing."
                />
                <div className="mt-8 grid gap-3.5 md:grid-cols-3">
                    {VS.map((row) => (
                        <article
                            key={row.label}
                            className="flex flex-col gap-3 rounded-2xl border border-[#30363D] bg-[#161B22] p-5">
                            <span className="text-xs font-semibold uppercase tracking-[0.04em] text-[#8B949E]">{row.label}</span>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-baseline gap-2.5">
                                    <span className="min-w-[38px] font-mono text-[11px] text-[#8B949E]">THEM</span>
                                    <span className="text-sm leading-[1.5] text-[#8B949E]">{row.them}</span>
                                </div>
                                <div className="flex items-baseline gap-2.5">
                                    <span className="min-w-[38px] font-mono text-[11px] font-semibold text-[#0AB17B]">US</span>
                                    <span className="text-sm leading-[1.55] text-[#F0F6FC]">{row.us}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

function Pricing() {
    return (
        <section
            id="pricing"
            className="scroll-mt-24 px-6 py-16 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-2xl">
                <SectionHeading
                    eyebrow="Pricing"
                    title="One price. Whole season. No tiers."
                />
                <article
                    className="relative mt-8 flex flex-col gap-5 rounded-[20px] border border-[#0AB17B]/40 p-6 lg:p-8"
                    style={{
                        backgroundImage: "linear-gradient(180deg, rgba(10,177,123,0.08) 0%, rgba(22,27,34,1) 60%)",
                    }}>
                    <div className="flex flex-col gap-2">
                        <Eyebrow>NFL Season Pass</Eyebrow>
                        <div className="flex items-baseline gap-2.5">
                            <span className="text-[56px] font-bold leading-none tracking-[-0.03em] text-[#F0F6FC] lg:text-[64px]">$49.99</span>
                            <span className="text-[15px] text-[#8B949E]">/ season</span>
                        </div>
                        <p className="text-[13px] text-[#8B949E]">~$3 a week across the 17-week regular season.</p>
                    </div>
                    <ul className="flex flex-col gap-2.5 border-t border-[#30363D] py-4">
                        {INCLUDES.map((item) => (
                            <li
                                key={item}
                                className="flex items-start gap-2.5">
                                <Check
                                    className="mt-1 size-3.5 shrink-0 text-[#0AB17B]"
                                    strokeWidth={2.5}
                                />
                                <span className="text-sm text-[#C9D1D9]">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <DownloadDialog className="inline-flex h-13 cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-[#0AB17B] px-5 text-base font-semibold text-[#0D1117] transition hover:bg-[#0BC189]">
                        <AppleGlyph />
                        Buy on the App Store
                    </DownloadDialog>
                    <p className="self-center text-center text-xs text-[#8B949E]">One-time charge per season. Auto-renews each August unless you cancel.</p>
                </article>
            </div>
        </section>
    )
}

function FaqSection() {
    return (
        <section className="px-6 py-16 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-3xl">
                <SectionHeading
                    eyebrow="Questions"
                    title="Common ones, answered."
                />
                <Accordion className="mt-8 flex flex-col border-t border-[#30363D]">
                    {FAQ.map((item) => (
                        <AccordionItem
                            key={item.q}
                            className="border-b border-[#30363D]">
                            <AccordionTrigger className="**:data-[slot=accordion-trigger-icon]:text-[#8B949E] cursor-pointer items-center border-0 px-1 py-5 text-left text-base font-semibold leading-[1.4] text-[#F0F6FC] hover:no-underline">
                                {item.q}
                            </AccordionTrigger>
                            <AccordionContent className="px-1 pb-5 text-sm leading-[1.6] text-[#8B949E]">{item.a}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

function FinalCta() {
    return (
        <section className="relative flex flex-col items-center gap-6 overflow-hidden px-6 pb-24 pt-24 text-center lg:pb-32 lg:pt-32">
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-60 left-1/2 h-[480px] w-[600px] -translate-x-1/2"
                style={{
                    backgroundImage:
                        "radial-gradient(circle farthest-corner at 50% 50%, rgba(10,177,123,0.22) 0%, rgba(10,177,123,0.06) 35%, transparent 70%)",
                }}
            />
            <SeasonCountdown />
            <h2 className="relative text-balance text-[44px] font-bold leading-[1.05] tracking-[-0.02em] text-[#F0F6FC] sm:text-[56px] lg:text-[72px]">
                Stop scrolling.
                <br />
                Start listening.
            </h2>
            <p className="relative max-w-md text-base leading-[1.55] text-[#8B949E]">Five minutes a briefing. Four a week. Personalized to your roster, ready before kickoff.</p>
            <a
                href="#"
                className="relative mt-2 inline-flex h-14 items-center gap-3 rounded-[14px] bg-[#F0F6FC] pl-3.5 pr-4 text-[#0D1117] transition hover:bg-white">
                <AppleGlyph size={22} />
                <div className="flex flex-col items-start text-left">
                    <span className="text-[10px] font-medium leading-none tracking-[0.02em] text-[#57606A]">Download on the</span>
                    <span className="text-lg font-bold leading-tight tracking-[-0.01em] text-[#0D1117]">App Store</span>
                </div>
            </a>
        </section>
    )
}
