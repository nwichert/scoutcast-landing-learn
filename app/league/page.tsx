import type { Metadata } from "next"
import Link from "next/link"
import { Check, Play, ArrowRight, Users, Trophy, Flame } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { DownloadDialog } from "@/components/download-dialog"
import { PlayStoreBadge } from "@/components/play-store-badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
    title: "League Pass — One Season Pass for Your Whole Fantasy League",
    description:
        "The commissioner pays $39.99 for the season — all 10–14 league members listen free via invite code. A weekly Recap + Roast episode every Tuesday: exact scores, bench disasters, and season-long storylines, built from your Sleeper league.",
    alternates: { canonical: "/league" },
    openGraph: {
        type: "website",
        url: "https://scoutcast.ai/league",
        title: "League Pass — One Season Pass for Your Whole Fantasy League",
        description:
            "The commissioner pays $39.99 for the season — all 10–14 league members listen free via invite code. A weekly Recap + Roast episode every Tuesday, built from your Sleeper league.",
    },
    twitter: {
        card: "summary_large_image",
        title: "League Pass — One Season Pass for Your Whole Fantasy League",
        description:
            "The commissioner pays $39.99 for the season — all 10–14 league members listen free via invite code. A weekly Recap + Roast episode every Tuesday, built from your Sleeper league.",
    },
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

const HEAT_BARS = [10, 18, 26, 14, 22, 30, 16, 24, 12, 20, 16, 28, 10, 22, 14, 26, 18, 22, 12, 24]

const EPISODE_INGREDIENTS = [
    {
        icon: Trophy,
        title: "Exact scores, real margins",
        body: "Not vibes — the actual numbers. Who won by a field goal's worth of points, who got doubled up, and what it did to the standings.",
    },
    {
        icon: Flame,
        title: "Bench disasters, named",
        body: "The 31 points that stayed on somebody's bench get called out by name. The start/sit call that lost the week doesn't slip quietly by.",
    },
    {
        icon: Users,
        title: "Season-long storylines",
        body: "Rivalry records, revenge games, the 0–6 collapse, the waiver pickup carrying a roster. The episode tracks your league's plot all year.",
    },
]

const STEPS = [
    {
        n: "01",
        title: "The commissioner grabs the pass",
        body: "One purchase — $39.99 for the season — covers the entire league. No collecting Venmo requests from twelve people.",
    },
    {
        n: "02",
        title: "Drop the invite code in the league chat",
        body: "Every member downloads Scoutcast free, enters the code, and they're in. No subscription required for members — the code is the ticket.",
    },
    {
        n: "03",
        title: "Tuesday, everyone gets the same episode",
        body: "The weekly Recap + Roast drops for the whole league at once, built from your Sleeper league's real results. Then the group chat does the rest.",
    },
]

const INCLUDES = [
    "Covers every member of your league — 10 to 14 managers",
    "Weekly Recap + Roast episode, every Tuesday of the season",
    "Exact scores, bench disasters, and season-long storylines",
    "Built from your Sleeper league's real matchups and rosters",
    "Members join free with an invite code — no subscription needed",
]

const FAQ = [
    {
        q: "Who pays, and what do league members pay?",
        a: "One person — usually the commissioner — buys the League Pass for $39.99 for the season. Everyone else in the league pays nothing: members download the Scoutcast app free, enter the league's invite code, and get every episode. Split it if you want — across a 12-team league it's about $3.33 a manager for the whole season.",
    },
    {
        q: "Do league members need Scoutcast Plus?",
        a: "No. The invite code is the ticket — members don't need Scoutcast Plus or any other subscription to listen to the league's weekly episode. Plus is a separate product for personal daily briefings on the teams you follow.",
    },
    {
        q: "Which fantasy platforms does it work with?",
        a: "Sleeper leagues only at launch. The Recap + Roast is built from your Sleeper league's actual matchups, scores, and rosters, so a connected Sleeper league is required. More platforms are coming.",
    },
    {
        q: "What's actually in the Tuesday episode?",
        a: "A weekly Recap + Roast for the whole league: the exact scores and margins from the week's matchups, the bench disasters (called out by manager), and the season-long storylines — rivalries, streaks, collapses, and the trade everyone's still arguing about. One shared episode, same for every member.",
    },
    {
        q: "How is the League Pass different from the NFL Fantasy Pass?",
        a: "They point in opposite directions. The NFL Fantasy Pass ($39.99/year) is your personal analyst — private briefings about your roster: start/sit calls, waiver bids, your matchup. The League Pass ($39.99/season) is one shared episode about the whole league that all 10–14 members hear. Plenty of managers run both: the Fantasy Pass to win, the League Pass for the group chat.",
    },
    {
        q: "How big can the league be?",
        a: "The League Pass is built for standard leagues of 10 to 14 members. Every member joins with the same invite code.",
    },
]

const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
}

export default function LeaguePage() {
    return (
        <div className="dark min-h-screen bg-[#0D1117] text-[#F0F6FC] antialiased">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
            />
            <Header />

            <main>
                <Hero />
                <TuesdayEpisode />
                <RoastSample />
                <HowItWorks />
                <WhichPass />
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
                    <div className="flex flex-wrap items-center gap-2">
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#30363D] bg-[#161B22] px-3 py-1.5">
                            <span className="size-1.5 shrink-0 rounded-full bg-[#0AB17B]" />
                            <span className="text-xs font-medium uppercase tracking-[0.04em] text-[#C9D1D9]">NFL Fantasy · League Pass</span>
                        </div>
                        <span className="inline-flex items-center rounded-full border border-[#0AB17B]/35 bg-[#0AB17B]/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.04em] text-[#0AB17B]">New</span>
                    </div>
                    <h1 className="text-balance text-[44px] font-bold leading-[1.05] tracking-[-0.02em] text-[#F0F6FC] sm:text-[56px] lg:text-[72px]">
                        One pass.
                        <br />
                        Whole league.
                    </h1>
                    <p className="max-w-xl text-[17px] leading-[1.55] text-[#8B949E] lg:text-lg">
                        The commissioner pays once. All 10&ndash;14 members listen free via invite code. Every Tuesday, the whole league gets a Recap + Roast episode built from your Sleeper league&rsquo;s real results.
                    </p>
                    <div className="mt-2 flex flex-col gap-3">
                        <DownloadDialog className="inline-flex h-13 w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-[#0AB17B] px-5 text-base font-semibold text-[#0D1117] transition hover:bg-[#0BC189] sm:w-fit">
                            <AppleGlyph />
                            Get the League Pass — $39.99
                        </DownloadDialog>
                        <div className="flex items-center gap-2 text-[13px] text-[#8B949E]">
                            <span>$39.99 covers everyone, all season</span>
                            <span className="size-[3px] rounded-full bg-[#30363D]" />
                            <span>Sleeper leagues · iOS &amp; Android</span>
                        </div>
                    </div>
                </div>

                <EpisodePreview />
            </div>
        </section>
    )
}

function EpisodePreview() {
    return (
        <div className="relative flex w-full max-w-md flex-col gap-3 rounded-2xl border border-[#30363D] bg-[#161B22] p-4 lg:max-w-none">
            <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0AB17B]/30 bg-[#0AB17B]/10 px-2.5 py-1">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#0AB17B]">Tue · Wk 7</span>
                </span>
                <span className="text-xs text-[#8B949E]">Recap + Roast · The Dirty Dozen League</span>
            </div>
            <p className="text-base font-semibold leading-[1.35] text-[#F0F6FC]">Mike lost by 4 with 31 points on his bench. The roast writes itself.</p>
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
                <span className="shrink-0 font-mono text-xs text-[#8B949E]">1:58 / 6:24</span>
            </div>
            <p className="text-xs text-[#8B949E]">Delivered to all 12 members at once.</p>
        </div>
    )
}

function TuesdayEpisode() {
    return (
        <section className="px-6 py-16 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="The Tuesday episode"
                    title="Recap + Roast. Your league's week, told back to it."
                />
                <p className="mt-4 max-w-2xl text-[17px] leading-[1.55] text-[#8B949E]">
                    Every Tuesday, one shared episode goes out to the entire league — built from your Sleeper league&rsquo;s actual matchups, not generic NFL talk. Three ingredients, every week:
                </p>
                <div className="mt-8 grid gap-3.5 md:grid-cols-3">
                    {EPISODE_INGREDIENTS.map((item) => (
                        <article
                            key={item.title}
                            className="flex flex-col gap-3.5 rounded-2xl border border-[#30363D] bg-[#161B22] p-5">
                            <div className="flex size-10 items-center justify-center rounded-xl border border-[#0AB17B]/40 bg-[#0AB17B]/10">
                                <item.icon className="size-4.5 text-[#0AB17B]" strokeWidth={2} />
                            </div>
                            <h3 className="text-[17px] font-semibold leading-tight text-[#F0F6FC]">{item.title}</h3>
                            <p className="text-sm leading-[1.55] text-[#C9D1D9]">{item.body}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

function RoastSample() {
    return (
        <section className="px-6 py-16 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-3xl">
                <SectionHeading
                    eyebrow="A sample, 20 seconds"
                    title="It knows the scores. It remembers the history."
                />
                <article className="mt-8 flex flex-col gap-4 rounded-[20px] border border-[#30363D] bg-[#161B22] p-5 lg:p-7">
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <span className="size-1.5 shrink-0 rounded-full bg-[#0AB17B]" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#C9D1D9]">Tue · Wk 7 · Recap + Roast</span>
                        </div>
                        <span className="font-mono text-[11px] text-[#8B949E]">EXCERPT 01:38 → 01:58</span>
                    </div>
                    <blockquote className="rounded-lg border-l-2 border-[#0AB17B] bg-[#0D1117] py-4 pl-5 pr-4 text-[15px] leading-[1.6] text-[#C9D1D9]">
                        &ldquo;Mike drops to 2–5 after losing to Sarah by four — with 31 points sitting on his bench. That&rsquo;s now three straight weeks Mike has benched his highest scorer, which has to be some kind of record. Meanwhile Sarah&rsquo;s waiver-wire tight end just outscored two first-round picks, and she is officially the person your league fears most. Trade deadline is in three weeks. Mike — do something.&rdquo;
                    </blockquote>
                    <p className="text-xs leading-relaxed text-[#8B949E]">Illustrative episode excerpt. Your league&rsquo;s episode is generated from your Sleeper league&rsquo;s real scores, rosters, and season history.</p>
                </article>
            </div>
        </section>
    )
}

function HowItWorks() {
    return (
        <section className="px-6 py-16 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="How it works"
                    title="One purchase. One code. Every Tuesday."
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
                <div className="mt-3 flex items-start gap-3 rounded-2xl border border-[#30363D] bg-[#161B22] p-5">
                    <ArrowRight className="mt-0.5 size-5 shrink-0 text-[#0AB17B]" />
                    <p className="text-[15px] leading-[1.6] text-[#C9D1D9]">
                        <span className="font-semibold text-[#F0F6FC]">Sleeper leagues at launch.</span>{" "}The episode is built from your Sleeper league&rsquo;s real matchups, rosters, and history, so a Sleeper league is required for now. More platforms are coming.
                    </p>
                </div>
            </div>
        </section>
    )
}

function WhichPass() {
    return (
        <section className="px-6 py-16 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-5xl">
                <SectionHeading
                    eyebrow="League Pass vs Fantasy Pass"
                    title="One is for your league. One is for your lineup."
                />
                <div className="mt-8 grid gap-3.5 md:grid-cols-2">
                    <article className="flex flex-col gap-3 rounded-2xl border border-[#0AB17B]/40 bg-[#161B22] p-6">
                        <Eyebrow>League Pass · $39.99/season</Eyebrow>
                        <h3 className="text-xl font-bold leading-tight text-[#F0F6FC]">One shared episode for all of you</h3>
                        <p className="text-sm leading-[1.6] text-[#C9D1D9]">
                            The commissioner pays, every member listens free. A weekly Recap + Roast about the league itself — scores, bench disasters, storylines. Built for the group chat.
                        </p>
                    </article>
                    <article className="flex flex-col gap-3 rounded-2xl border border-[#30363D] bg-[#161B22] p-6">
                        <Eyebrow>NFL Fantasy Pass · $39.99/year</Eyebrow>
                        <h3 className="text-xl font-bold leading-tight text-[#F0F6FC]">A private analyst for your roster</h3>
                        <p className="text-sm leading-[1.6] text-[#C9D1D9]">
                            Personal briefings four days a week: waiver bids, start/sit calls, your H2H matchup, and a Sunday-morning final call. Built to win your league.
                        </p>
                        <Link
                            href="/fantasy"
                            className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#0AB17B] transition hover:text-[#0BC189]">
                            See the Fantasy Pass
                            <ArrowRight className="size-4" />
                        </Link>
                    </article>
                </div>
                <p className="mt-4 text-sm leading-[1.6] text-[#8B949E]">
                    They&rsquo;re independent purchases — plenty of managers run both: the Fantasy Pass to win, the League Pass for bragging rights.
                </p>
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
                    title="Cheaper than one round of league-dues pizza."
                />
                <article
                    className="relative mt-8 flex flex-col gap-5 rounded-[20px] border border-[#0AB17B]/40 p-6 lg:p-8"
                    style={{
                        backgroundImage: "linear-gradient(180deg, rgba(10,177,123,0.08) 0%, rgba(22,27,34,1) 60%)",
                    }}>
                    <div className="flex flex-col gap-2">
                        <Eyebrow>League Pass</Eyebrow>
                        <div className="flex items-baseline gap-2.5">
                            <span className="text-[56px] font-bold leading-none tracking-[-0.03em] text-[#F0F6FC] lg:text-[64px]">$39.99</span>
                            <span className="text-[15px] text-[#8B949E]">/ season</span>
                        </div>
                        <p className="text-[13px] text-[#8B949E]">One purchase covers the entire league — about $3.33 a manager in a 12-team league.</p>
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
                        Get the League Pass
                    </DownloadDialog>
                    <p className="self-center text-center text-xs text-[#8B949E]">Purchased in the app via the App Store or Google Play. Sleeper leagues at launch.</p>
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
            <h2 className="relative text-balance text-[44px] font-bold leading-[1.05] tracking-[-0.02em] text-[#F0F6FC] sm:text-[56px] lg:text-[72px]">
                Your league,
                <br />
                roasted weekly.
            </h2>
            <p className="relative max-w-md text-base leading-[1.55] text-[#8B949E]">One pass, every member, every Tuesday. The group chat will never be quiet again.</p>
            <div className="relative mt-2 flex flex-col items-center gap-3 sm:flex-row">
                <DownloadDialog className="inline-flex h-14 cursor-pointer items-center gap-3 rounded-[14px] bg-[#F0F6FC] pl-3.5 pr-4 text-[#0D1117] transition hover:bg-white">
                    <AppleGlyph size={22} />
                    <div className="flex flex-col items-start text-left">
                        <span className="text-[10px] font-medium leading-none tracking-[0.02em] text-[#57606A]">Download on the</span>
                        <span className="text-lg font-bold leading-tight tracking-[-0.01em] text-[#0D1117]">App Store</span>
                    </div>
                </DownloadDialog>
                <PlayStoreBadge placement="league_hero" />
            </div>
        </section>
    )
}
