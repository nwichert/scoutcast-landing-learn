import { Check, X } from "lucide-react"

const features = [
    "Hands-free listening",
    "Personalized to your teams",
    "Learns what you care about",
    "Multi-source in one place",
    "Finite daily briefing (no doom scroll)",
    "Ad-free",
]

export default function ComparatorSection() {
    return (
        <section className="dark bg-background">
            <div className="mx-auto flex max-w-6xl flex-col items-start gap-12 px-6 py-24 lg:flex-row lg:items-start lg:gap-20">
                <div className="flex max-w-[320px] flex-col gap-6 pt-14">
                    <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-[44px] sm:leading-[1.15]">See how we stack up</h2>
                    <p className="text-[17px] leading-[26px] text-foreground/55">Scoutcast delivers personalized, on-demand audio briefs, emerging as the top choice over static websites.</p>
                </div>

                <div className="relative grid w-full grid-cols-[1.4fr_1fr_1fr] lg:max-w-[640px]">
                    <div className="flex flex-col">
                        <div className="flex h-14 items-end px-6 py-2">
                            <span className="text-[13px] font-medium text-foreground/55">Features</span>
                        </div>
                        {features.map((feature, i) => (
                            <div
                                key={feature}
                                className={`flex h-14 items-center gap-1 px-6 ${i === 0 ? "rounded-tl-xl" : ""} ${i === features.length - 1 ? "rounded-bl-xl" : ""} ${i % 2 === 1 ? "bg-white/[0.03]" : ""}`}>
                                <span className="text-sm text-foreground/80">{feature}</span>
                                <button
                                    type="button"
                                    aria-label={`About ${feature}`}
                                    className="ml-1 flex size-4 items-center justify-center rounded-full bg-white/10 text-[10px] font-medium text-foreground/65">
                                    ?
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="relative flex flex-col rounded-xl border border-white/20 bg-white/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                        <div className="flex h-14 items-center justify-center px-4">
                            <div className="flex items-center gap-2">
                                <div className="flex size-[26px] items-center justify-center rounded-md bg-emerald-500">
                                    <span className="text-[18px] font-extrabold leading-none text-white">S</span>
                                </div>
                                <span className="text-base font-bold tracking-tight text-foreground">Scoutcast</span>
                            </div>
                        </div>
                        {features.map((feature, i) => (
                            <div
                                key={feature}
                                className={`flex h-14 items-center justify-center ${i % 2 === 1 ? "bg-white/[0.03]" : ""}`}>
                                <span className="flex size-[18px] items-center justify-center rounded-full bg-emerald-500">
                                    <Check
                                        className="size-2.5 text-white"
                                        strokeWidth={3}
                                    />
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col">
                        <div className="flex h-14 items-center justify-center px-4">
                            <span className="text-base font-bold tracking-tight text-foreground/70">Sports Website</span>
                        </div>
                        {features.map((feature, i) => (
                            <div
                                key={feature}
                                className={`flex h-14 items-center justify-center ${i % 2 === 1 ? "bg-white/[0.03]" : ""}`}>
                                <span className="flex size-[18px] items-center justify-center rounded-full bg-rose-500">
                                    <X
                                        className="size-2 text-white"
                                        strokeWidth={3}
                                    />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
