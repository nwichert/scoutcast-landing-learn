import { MessageSquare, Mic, Wifi } from "lucide-react"

const activeBarHeights = [18, 32, 48, 24, 62, 78, 40, 54, 88, 36, 22, 46, 72, 30, 58, 42, 64, 50]
const idleBarHeights = [48, 34, 62, 24, 50, 38, 28, 54, 42, 18, 36, 48, 30, 22, 40, 16, 26, 14]
const playheadHeight = 108

const voiceChips: { text: string; align: "start" | "end" }[] = [
    { text: "what’s his stat line?", align: "start" },
    { text: "more on the trade", align: "end" },
    { text: "what were his stats last week?", align: "start" },
]

export const PhoneIllustration = () => (
    <div
        aria-hidden
        className="relative mx-auto flex h-[860px] w-[400px] shrink-0 flex-col overflow-hidden rounded-[52px] border border-white/10 shadow-2xl shadow-black/60"
        style={{ backgroundImage: "linear-gradient(180deg, #1a1410 0%, #0f0a08 20%, #050505 100%)" }}>
        <div
            aria-hidden
            className="absolute left-1/2 top-[18px] h-[34px] w-[118px] -translate-x-1/2 rounded-full bg-black"
        />

        <div className="relative flex h-11 items-center justify-between px-7 pt-[18px]">
            <span className="text-[15px] font-semibold text-foreground">9:43</span>
            <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-[3px]">
                    {[0, 1, 2, 3].map((i) => (
                        <span
                            key={i}
                            className="size-1 rounded-full bg-foreground/50"
                        />
                    ))}
                </div>
                <Wifi className="size-[15px] text-foreground" />
                <div className="flex h-3 w-[26px] items-center rounded-[3px] border-[1.3px] border-foreground/60 p-px">
                    <div className="h-2 w-5 rounded-[1.5px] bg-foreground" />
                </div>
            </div>
        </div>

        <div className="relative flex flex-col gap-3.5 px-7 pt-7">
            <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 py-1.5 pl-2.5 pr-3">
                <span className="relative flex size-2 items-center justify-center">
                    <span className="scoutcast-live-ping absolute inset-0 rounded-full bg-emerald-400/60" />
                    <span className="relative size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-emerald-300">Now Playing</span>
            </span>
            <h3 className="text-[26px] font-semibold leading-[1.15] tracking-tight text-foreground">Bucks Daily Brief</h3>
            <div className="flex items-center gap-2 text-[13px] text-foreground/45">
                <span>Monday &middot; April 13</span>
                <span className="size-[3px] rounded-full bg-foreground/30" />
                <span>4 min</span>
            </div>
        </div>

        <div className="relative mt-7 flex flex-col gap-3.5 px-7">
            <div className="flex h-[120px] items-center justify-center gap-[3px]">
                {activeBarHeights.map((h, i) => (
                    <span
                        key={`active-${i}`}
                        className="scoutcast-bar w-1 rounded-[2px] bg-emerald-400"
                        style={{ height: `${h}px`, animationDelay: `${i * 70}ms` }}
                    />
                ))}
                <span
                    className="scoutcast-bar w-1.5 rounded-[3px] bg-gradient-to-b from-emerald-300 to-emerald-500 shadow-[0_0_18px_rgba(52,211,153,0.85)]"
                    style={{ height: `${playheadHeight}px`, animationDuration: "0.9s" }}
                />
                {idleBarHeights.map((h, i) => (
                    <span
                        key={`idle-${i}`}
                        className="w-1 rounded-[2px] bg-white/[0.18]"
                        style={{ height: `${h}px` }}
                    />
                ))}
            </div>
            <div className="flex items-center justify-between font-mono text-[11px]">
                <span className="font-medium text-emerald-300">1:42</span>
                <span className="text-foreground/40">&minus;2:18</span>
            </div>
        </div>

        <div className="relative mt-6 flex flex-col gap-2.5 px-7">
            {voiceChips.map((chip) => (
                <VoiceChip
                    key={chip.text}
                    text={chip.text}
                    align={chip.align}
                />
            ))}
        </div>

        <div className="relative mt-auto flex flex-col items-center gap-3 px-7 pb-7">
            <span className="text-[11px] font-medium uppercase tracking-[0.04em] text-foreground/45">Tap to interrupt</span>
            <button
                type="button"
                aria-label="Ask"
                className="scoutcast-pill-breathe inline-flex items-center gap-3 rounded-full border-[1.5px] border-emerald-400/55 bg-gradient-to-b from-emerald-500/30 to-emerald-900/55 py-3.5 pl-5 pr-7 shadow-[0_0_32px_rgba(52,211,153,0.35),inset_0_1px_0_rgba(255,255,255,0.12)]">
                <MessageSquare className="size-5 text-emerald-300" />
                <span className="text-[17px] font-semibold tracking-tight text-foreground">Ask</span>
            </button>
        </div>
    </div>
)

const VoiceChip = ({ text, align }: { text: string; align: "start" | "end" }) => {
    const alignClass = align === "start" ? "self-start rounded-[20px_20px_20px_6px]" : "self-end rounded-[20px_20px_6px_20px]"
    return (
        <div className={`inline-flex max-w-[88%] items-center gap-2.5 border border-emerald-400/30 bg-emerald-400/10 py-2.5 pl-3 pr-3.5 ${alignClass}`}>
            <Mic className="size-3.5 shrink-0 text-emerald-400" />
            <span className="text-[14px] font-medium leading-[18px] text-foreground/90">&ldquo;{text}&rdquo;</span>
        </div>
    )
}
