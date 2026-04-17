import { ChevronUp, MessageSquare, Mic, X as XIcon } from "lucide-react"

const activeBars = [6, 14, 22, 10, 18, 28, 16, 24, 32, 20, 12, 22, 28, 18, 26, 10, 30]
const highlightBar = 36
const idleBars = [14, 22, 10, 18, 24, 14, 20, 28, 16, 22, 10, 26, 18, 14, 22, 8]

export default function FeaturesSection() {
    return (
        <section className="dark bg-background">
            <div className="mx-auto max-w-5xl px-6 py-24">
                <h2 className="mx-auto mb-14 max-w-3xl text-balance text-center text-4xl font-semibold tracking-tight text-foreground sm:text-[44px] sm:leading-[1.15]">Powerful Tools. Easy to Use.</h2>

                <div className="grid overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.03] lg:grid-cols-2">
                    <div className="flex flex-col gap-8 border-b border-white/[0.08] p-10 lg:border-b-0 lg:border-r">
                        <div className="mx-auto flex h-30 w-full max-w-[320px] flex-col rounded-[14px] border border-white/10 bg-black/50 px-4 pt-4">
                            <span className="text-sm text-foreground/35">e.g. Milwaukee Bucks, focus on Giannis</span>
                        </div>
                        <div className="mx-auto flex max-w-[320px] flex-col items-center gap-3 text-center">
                            <h3 className="text-lg font-semibold leading-6 text-foreground">What do you want to hear about?</h3>
                            <p className="text-sm leading-5 text-foreground/55">The more specific you are, the better the results and the more personalized it will be.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 p-10">
                        <div className="mx-auto flex w-full max-w-[320px] flex-col gap-3">
                            <div className="flex items-center gap-2 pl-1">
                                <XIcon className="size-3.5 text-foreground/75" />
                                <span className="text-sm font-medium text-foreground/75">Sources</span>
                                <ChevronUp className="size-3 text-foreground/75" />
                            </div>
                            <div className="flex h-12 items-center justify-between gap-3 rounded-[10px] border border-white/[0.14] bg-black/60 px-4">
                                <div className="flex grow items-center">
                                    <span className="text-[15px] text-foreground">@cbssports</span>
                                    <span className="ml-px h-[18px] w-0.5 animate-pulse bg-foreground" />
                                </div>
                                <span className="text-sm font-semibold text-emerald-500">Add</span>
                            </div>
                            <div className="flex items-center gap-2 pl-1">
                                <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/15 py-1 pl-2.5 pr-2">
                                    <span className="text-[13px] font-medium text-emerald-400">@espn</span>
                                    <button
                                        type="button"
                                        aria-label="Remove @espn"
                                        className="flex size-3.5 items-center justify-center rounded-full bg-white/20">
                                        <XIcon
                                            className="size-2 text-foreground"
                                            strokeWidth={3}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto flex max-w-[320px] flex-col items-center gap-3 text-center">
                            <h3 className="text-lg font-semibold leading-6 text-foreground">Add sources to your briefings</h3>
                            <p className="text-sm leading-5 text-foreground/55">Include your preferred X writers to add more personalization to each Cast you create.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-5 grid overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.03] lg:grid-cols-[42%_1fr]">
                    <div className="flex flex-col justify-center gap-4 border-b border-white/[0.06] px-11 py-12 lg:border-b-0 lg:border-r">
                        <h3 className="text-[26px] font-semibold leading-8 tracking-tight text-foreground">Audio that listens back</h3>
                        <p className="text-[15px] leading-[22px] text-foreground/60">Interrupt your briefing: &ldquo;what&rsquo;s his stat line?&rdquo; or &ldquo;more on the trade&rdquo; or &ldquo;what were his stats last week?&rdquo; &mdash; and it picks up where you left off.</p>
                        <button
                            type="button"
                            className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-900/60 py-2.5 pl-4 pr-5 text-[15px] font-semibold text-foreground transition hover:bg-emerald-900/80">
                            <MessageSquare className="size-4 text-emerald-400" />
                            Ask
                        </button>
                    </div>

                    <div className="flex flex-col justify-center gap-5 bg-white/[0.02] p-11">
                        <div className="flex items-center gap-2.5">
                            <span className="size-2 rounded-full bg-emerald-400" />
                            <span className="text-xs font-medium uppercase tracking-[0.04em] text-foreground/65">Bucks Daily Brief · Now Playing</span>
                        </div>
                        <div className="flex h-9 items-center gap-[2.5px]">
                            {activeBars.map((h, i) => (
                                <span
                                    key={`active-${i}`}
                                    className="w-[2.5px] rounded-full bg-emerald-400"
                                    style={{ height: `${h}px` }}
                                />
                            ))}
                            <span
                                className="w-[3.5px] rounded-full bg-gradient-to-b from-emerald-300 to-emerald-500 shadow-[0_0_12px_rgba(52,211,153,0.65)]"
                                style={{ height: `${highlightBar}px` }}
                            />
                            {idleBars.map((h, i) => (
                                <span
                                    key={`idle-${i}`}
                                    className="w-[2.5px] rounded-full bg-white/20"
                                    style={{ height: `${h}px` }}
                                />
                            ))}
                        </div>
                        <div className="flex flex-col gap-2">
                            <VoiceChip
                                align="start"
                                text="what's his stat line?"
                            />
                            <VoiceChip
                                align="center"
                                text="more on the trade"
                            />
                            <VoiceChip
                                align="end"
                                text="what were his stats last week?"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const alignClass = {
    start: "self-start",
    center: "self-center",
    end: "self-end",
} as const

const VoiceChip = ({ text, align }: { text: string; align: keyof typeof alignClass }) => (
    <div className={`flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-2.5 ${alignClass[align]}`}>
        <Mic className="size-3.5 text-emerald-400" />
        <span className="text-[13px] font-medium text-foreground/90">&ldquo;{text}&rdquo;</span>
    </div>
)
