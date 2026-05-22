import Link from "next/link"
import { Check } from "lucide-react"
import { DownloadButton } from "@/components/download-button"

const FREE_INCLUDES = [
    "One active Scoutcast",
    "Daily ~2-minute personalized briefing",
    "Pick your teams, leagues, and X writers",
    "Tap to ask follow-ups, hands-free",
    "Ad-free. Lock-screen controls.",
]

const UNLIMITED_INCLUDES = [
    "Unlimited active Scoutcasts",
    "Everything in the free plan",
    "Create and run as many casts as you want",
    "Switch between casts anytime",
]

const FANTASY_INCLUDES = [
    "Tue / Wed / Thu / Sun briefings, all 18 weeks",
    "H2H opponent edge + fantasy playoffs",
    "NFL playoff DFS + Super Bowl preview",
    "Up to 3 leagues — Yahoo, ESPN, Sleeper, NFL.com",
]

export default function Pricing() {
    return (
        <section
            id="pricing"
            className="dark scroll-mt-20 bg-background">
            <div className="mx-auto max-w-6xl px-6 py-24">
                <div className="flex flex-col items-center gap-3 text-center">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0AB17B]">Pricing</span>
                    <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-[44px] sm:leading-[1.1]">Start free. Go Unlimited when you want more.</h2>
                    <p className="max-w-xl text-lg leading-7 text-foreground/55">Scoutcast is free with one active Cast. Go Unlimited to run as many as you like — and add the NFL Fantasy Season Pass when your lineup needs it.</p>
                </div>

                <div className="mt-14 grid gap-5 lg:grid-cols-3">
                    {/* Free */}
                    <article className="flex flex-col gap-6 rounded-[20px] border border-white/[0.08] bg-white/[0.02] p-8">
                        <div className="flex flex-col gap-2">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/55">Scoutcast</span>
                            <div className="flex items-baseline gap-2.5">
                                <span className="text-[56px] font-bold leading-none tracking-[-0.03em] text-foreground">Free</span>
                            </div>
                            <p className="text-[13px] text-foreground/55">Your daily sports brief, personalized — at no cost.</p>
                        </div>
                        <ul className="flex flex-col gap-2.5 border-t border-white/[0.08] py-4">
                            {FREE_INCLUDES.map((item) => (
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
                            label="Download free"
                            className="h-12 justify-center rounded-xl border-white/15 bg-white/[0.06] px-5 text-base hover:bg-white/[0.1]"
                        />
                    </article>

                    {/* Scoutcast Unlimited */}
                    <article
                        className="relative flex flex-col gap-6 rounded-[20px] border border-[#0AB17B]/40 p-8"
                        style={{
                            backgroundImage: "linear-gradient(180deg, rgba(10,177,123,0.08) 0%, rgba(255,255,255,0.02) 60%)",
                        }}>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between gap-3">
                                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0AB17B]">Scoutcast Unlimited</span>
                                <span className="inline-flex items-center rounded-full border border-[#0AB17B]/35 bg-[#0AB17B]/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#0AB17B]">Most popular</span>
                            </div>
                            <div className="flex items-baseline gap-2.5">
                                <span className="text-[56px] font-bold leading-none tracking-[-0.03em] text-foreground">$4.99</span>
                                <span className="text-[15px] text-foreground/55">/ month</span>
                            </div>
                            <p className="text-[13px] text-foreground/55">or $39.99 / year — auto-renews, cancel anytime.</p>
                        </div>
                        <ul className="flex flex-col gap-2.5 border-t border-white/[0.08] py-4">
                            {UNLIMITED_INCLUDES.map((item) => (
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
                            label="Get Unlimited"
                            className="h-12 justify-center rounded-xl border-transparent bg-[#0AB17B] px-5 text-base font-semibold text-[#0D1117] hover:bg-[#0BC189]"
                        />
                    </article>

                    {/* NFL Fantasy Season Pass */}
                    <article className="relative flex flex-col gap-6 rounded-[20px] border border-white/[0.08] bg-white/[0.02] p-8">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between gap-3">
                                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/55">NFL Fantasy Season Pass</span>
                                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-foreground/60">Add-on</span>
                            </div>
                            <div className="flex items-baseline gap-2.5">
                                <span className="text-[56px] font-bold leading-none tracking-[-0.03em] text-foreground">$49.99</span>
                                <span className="text-[15px] text-foreground/55">/ season</span>
                            </div>
                            <p className="text-[13px] text-foreground/55">Auto-renews each season · about $3 a week. Works with Free or Unlimited.</p>
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
                            className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.06] px-5 text-base font-semibold text-foreground transition hover:bg-white/[0.1]">
                            See the Fantasy pass
                        </Link>
                    </article>
                </div>
            </div>
        </section>
    )
}
