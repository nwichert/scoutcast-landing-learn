import Link from "next/link"
import { Check } from "lucide-react"
import { DownloadButton } from "@/components/download-button"

const FREE_INCLUDES = [
    "Daily ~2-minute personalized briefing",
    "Pick your teams, leagues, and X writers",
    "Tap to ask follow-ups, hands-free",
    "Ad-free. CarPlay. Lock-screen controls.",
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
                    <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-[44px] sm:leading-[1.1]">Free to listen. Pay only for fantasy.</h2>
                    <p className="max-w-xl text-lg leading-7 text-foreground/55">Scoutcast is free forever. The NFL Fantasy Season Pass is the one paid add-on — for the people whose lineup decisions need it.</p>
                </div>

                <div className="mt-14 grid gap-5 lg:grid-cols-2">
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

                    <article
                        className="relative flex flex-col gap-6 rounded-[20px] border border-[#0AB17B]/40 p-8"
                        style={{
                            backgroundImage: "linear-gradient(180deg, rgba(10,177,123,0.08) 0%, rgba(255,255,255,0.02) 60%)",
                        }}>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between gap-3">
                                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0AB17B]">NFL Fantasy Season Pass</span>
                                <span className="inline-flex items-center rounded-full border border-[#0AB17B]/35 bg-[#0AB17B]/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#0AB17B]">Add-on</span>
                            </div>
                            <div className="flex items-baseline gap-2.5">
                                <span className="text-[56px] font-bold leading-none tracking-[-0.03em] text-foreground">$49.99</span>
                                <span className="text-[15px] text-foreground/55">/ season</span>
                            </div>
                            <p className="text-[13px] text-foreground/55">~$3 a week across the 17-week regular season.</p>
                        </div>
                        <ul className="flex flex-col gap-2.5 border-t border-white/[0.08] py-4">
                            {FANTASY_INCLUDES.map((item) => (
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
                        <Link
                            href="/fantasy"
                            className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-[#0AB17B] px-5 text-base font-semibold text-[#0D1117] transition hover:bg-[#0BC189]">
                            See the Fantasy pass
                        </Link>
                    </article>
                </div>
            </div>
        </section>
    )
}
