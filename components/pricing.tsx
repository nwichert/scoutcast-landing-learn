import Link from "next/link"
import { Check } from "lucide-react"
import { DownloadButton } from "@/components/download-button"

const TRIAL_INCLUDES = [
    "Up to 7 active Scoutcasts",
    "Daily ~2-minute personalized briefing",
    "Pick your teams, leagues, and X writers",
    "Tap to ask follow-ups, hands-free",
    "Ad-free. Lock-screen controls.",
]

const PLUS_INCLUDES = [
    "Up to 7 active Scoutcasts — follow 7 teams, players, or leagues",
    "Daily briefings with scores, injuries, odds, and storylines",
    "Tap Ask for instant audio follow-ups on anything in your brief",
    "Everything in the free trial",
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
                    <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-[44px] sm:leading-[1.1]">7 days free. No credit card required.</h2>
                    <p className="max-w-xl text-lg leading-7 text-foreground/55">Everyone starts with a full 7-day free trial of Scoutcast Plus. After the trial, it's $5.99/month — and you can add the NFL Fantasy Season Pass when your lineup needs it.</p>
                </div>

                <div className="mt-14 grid gap-5 lg:grid-cols-3">
                    {/* Free trial */}
                    <article className="flex flex-col gap-6 rounded-[20px] border border-white/[0.08] bg-white/[0.02] p-8">
                        <div className="flex flex-col gap-2">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/55">Free trial</span>
                            <div className="flex items-baseline gap-2.5">
                                <span className="text-[56px] font-bold leading-none tracking-[-0.03em] text-foreground">7 days</span>
                            </div>
                            <p className="text-[13px] text-foreground/55">No credit card required. Full access to everything in Plus.</p>
                        </div>
                        <ul className="flex flex-col gap-2.5 border-t border-white/[0.08] py-4">
                            {TRIAL_INCLUDES.map((item) => (
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
                            label="Start free trial"
                            showIcon={false}
                            className="h-12 justify-center rounded-xl border-white/15 bg-white/[0.06] px-5 text-base hover:bg-white/[0.1]"
                        />
                    </article>

                    {/* Scoutcast Plus */}
                    <article
                        className="relative flex flex-col gap-6 rounded-[20px] border border-[#0AB17B]/40 p-8"
                        style={{
                            backgroundImage: "linear-gradient(180deg, rgba(10,177,123,0.08) 0%, rgba(255,255,255,0.02) 60%)",
                        }}>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between gap-3">
                                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0AB17B]">Scoutcast Plus</span>
                                <span className="inline-flex items-center rounded-full border border-[#0AB17B]/35 bg-[#0AB17B]/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#0AB17B]">After trial</span>
                            </div>
                            <div className="flex items-baseline gap-2.5">
                                <span className="text-[56px] font-bold leading-none tracking-[-0.03em] text-foreground">$5.99</span>
                                <span className="text-[15px] text-foreground/55">/ month</span>
                            </div>
                            <p className="text-[13px] text-foreground/55">Auto-renews monthly — cancel anytime.</p>
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
                            <p className="text-[13px] text-foreground/55">Auto-renews each season · about $3 a week. Works with Scoutcast Plus.</p>
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
