import Image from "next/image"
import { CheckCircle2, Clock, Flame, Menu, Mic, Play, Share2, Users, Wifi } from "lucide-react"

type Episode = {
    id: string
    date: string
    league: {
        label: string
        icon: React.ReactNode
    }
    title: string
    subtitle: string
    duration: string
    tag?: string
    tagAlign?: "inline" | "overflow"
    overflowText?: string
    badge?: string
}

const MLB_ICON = (
    <div className="flex size-8 items-center justify-center overflow-hidden rounded-md bg-white">
        <Image
            src="/logos/mlb.png"
            alt="MLB"
            width={32}
            height={32}
            className="size-7 object-contain"
        />
    </div>
)

const PGA_ICON = (
    <div className="flex size-8 items-center justify-center">
        <Image
            src="/logos/pga.svg"
            alt="PGA Tour"
            width={32}
            height={32}
            className="size-8 object-contain"
        />
    </div>
)

const episodes: Episode[] = [
    {
        id: "mlb-streaks",
        date: "Wednesday · April 15, 2026",
        league: { label: "MLB", icon: MLB_ICON },
        title: "MLB Heats Up: Streaks, Shutouts &…",
        subtitle: "Dodgers, Yankees, and Brewer…",
        duration: "1:56",
        tag: "MLB",
    },
    {
        id: "mcilroy-leg",
        date: "Monday · April 13, 2026",
        league: { label: "PGA", icon: PGA_ICON },
        title: "McIlroy's Masters Leg…",
        subtitle: "Rory McIlroy completes the ca…",
        duration: "2:07",
        tag: "The Masters",
        badge: "Wrap-Up",
    },
    {
        id: "masters-sunday",
        date: "Sunday · April 12, 2026",
        league: { label: "PGA", icon: PGA_ICON },
        title: "Masters Sunday: McIlroy and Young…",
        subtitle: "A six-shot lead is gone — the g…",
        duration: "1:20",
        tagAlign: "overflow",
        overflowText: "Follow all the scores, news, highlights, and major plays of",
    },
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

        <div className="relative flex items-start justify-between px-6 pt-9">
            <div className="flex flex-col gap-1">
                <h3 className="text-[26px] font-bold leading-8 tracking-tight text-foreground">Good evening, Nick</h3>
                <p className="text-sm text-foreground/55">Thursday, April 16</p>
                <div className="mt-1.5 flex items-center gap-1.5">
                    <Flame className="size-4 fill-amber-400 text-orange-500" />
                    <span className="text-[13px] font-medium text-foreground/80">1 day</span>
                </div>
            </div>
            <button
                type="button"
                aria-label="Open menu"
                className="flex size-9 items-center justify-center rounded-full border border-white/20">
                <Menu className="size-4 text-foreground" />
            </button>
        </div>

        <div className="relative mx-6 mt-6 flex gap-1 rounded-full bg-white/[0.06] p-1">
            <div className="flex h-9 flex-1 items-center justify-center rounded-full">
                <span className="text-sm font-medium text-foreground/75">New</span>
            </div>
            <div className="flex h-9 flex-1 items-center justify-center rounded-full bg-white/15">
                <span className="text-sm font-semibold text-foreground">Listened</span>
            </div>
        </div>

        <div className="relative flex flex-col gap-6 px-5 pt-6">
            {episodes.map((episode) => (
                <EpisodeGroup
                    key={episode.id}
                    episode={episode}
                />
            ))}
            <span className="pl-1 text-[11px] font-semibold uppercase tracking-widest text-foreground/45">Saturday · April 11, 2026</span>
        </div>

        <div
            className="absolute inset-x-0 bottom-0 flex items-start justify-center gap-12 px-4 pb-9 pt-3.5"
            style={{ backgroundImage: "linear-gradient(180deg, rgba(5,5,5,0) 0%, #050505 40%, #050505 100%)" }}>
            <TabItem
                label="Feed"
                active
                icon={
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none">
                        {[
                            [3, 10, 6],
                            [7, 6, 14],
                            [11, 3, 20],
                            [15, 7, 12],
                            [19, 10, 6],
                        ].map(([x, y, h]) => (
                            <rect
                                key={x}
                                x={x}
                                y={y}
                                width="2.5"
                                height={h}
                                rx="1"
                                fill="#22C55E"
                            />
                        ))}
                    </svg>
                }
            />
            <TabItem
                label="Studio"
                icon={<Mic className="size-[22px] text-foreground" />}
            />
            <TabItem
                label="Crews"
                icon={<Users className="size-[22px] text-foreground" />}
            />
        </div>
    </div>
)

const EpisodeGroup = ({ episode }: { episode: Episode }) => (
    <div className="flex flex-col gap-2.5">
        <span className="pl-1 text-[11px] font-semibold uppercase tracking-widest text-foreground/45">{episode.date}</span>
        <div className="relative flex flex-col gap-3.5 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#101828]/70 py-4 pl-[18px] pr-4">
            <span className="absolute inset-y-0 left-0 w-[3px] bg-emerald-500" />
            <div className="relative flex items-start gap-3">
                <div className="flex size-[52px] shrink-0 items-center justify-center rounded-[10px] bg-[#0F1A2E]">{episode.league.icon}</div>
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <div className="flex min-w-0 items-center gap-2">
                        <p className="min-w-0 flex-1 truncate text-[17px] font-bold leading-[22px] tracking-tight text-foreground">{episode.title}</p>
                        {episode.badge && (
                            <span className="inline-flex shrink-0 items-center rounded-full border border-teal-400/35 bg-teal-400/15 px-2.5 py-[3px]">
                                <span className="text-[11px] font-semibold text-teal-300">{episode.badge}</span>
                            </span>
                        )}
                    </div>
                    <p className="text-[13px] text-foreground/50">{episode.subtitle}</p>
                </div>
                <div className="flex size-[38px] shrink-0 items-center justify-center rounded-[10px] border border-emerald-500/35 bg-emerald-500/10">
                    <Play className="size-3.5 fill-emerald-500 text-emerald-500" />
                </div>
            </div>
            <EpisodeMeta episode={episode} />
        </div>
    </div>
)

const EpisodeMeta = ({ episode }: { episode: Episode }) => {
    const metaLeft = (
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
                <Clock className="size-3 text-foreground/55" />
                <span className="text-xs text-foreground/55">{episode.duration}</span>
            </div>
            <Share2 className="size-3 text-foreground/55" />
        </div>
    )

    const listened = (
        <div className="flex items-center gap-1">
            <CheckCircle2 className="size-3 fill-emerald-500 text-[#050505]" />
            <span className="text-xs font-medium text-emerald-500">Listened</span>
        </div>
    )

    if (episode.tagAlign === "overflow") {
        return (
            <div className="relative flex items-start justify-between gap-3 pl-16">
                <div className="flex shrink-0 flex-col gap-2">
                    {metaLeft}
                    {listened}
                </div>
                <p className="max-w-40 flex-1 text-right text-[11px] leading-[15px] text-foreground/45">{episode.overflowText}</p>
            </div>
        )
    }

    return (
        <div className="relative flex items-center justify-between pl-16">
            {metaLeft}
            <div className="flex items-center gap-2.5">
                {listened}
                {episode.tag && <span className="text-xs font-medium text-foreground/70">{episode.tag}</span>}
            </div>
        </div>
    )
}

const TabItem = ({ label, icon, active = false }: { label: string; icon: React.ReactNode; active?: boolean }) => (
    <div className={active ? "flex flex-col items-center gap-1 rounded-2xl bg-white/[0.08] px-4 py-2" : "flex flex-col items-center gap-1 px-3.5 py-2"}>
        {icon}
        <span className={active ? "text-[10px] font-semibold text-emerald-500" : "text-[10px] font-medium text-foreground"}>{label}</span>
    </div>
)
