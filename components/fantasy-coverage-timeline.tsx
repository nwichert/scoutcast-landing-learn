"use client"

import { useEffect, useRef, useState } from "react"

const COVERAGE = [
    {
        title: "Regular Season",
        meta: "SEP – JAN · 18 WK",
        body: "Tue/Wed/Thu/Sun briefings. 72 audio drops, every one keyed to your roster.",
    },
    {
        title: "Fantasy Playoffs",
        meta: "WK 15 – 17 · 3 WK",
        body: "Same three drops, with playoff-stakes framing. Survive-and-advance reasoning, narrower swing call.",
    },
    {
        title: "NFL Playoff DFS",
        meta: "JAN – FEB · 3 WK",
        body: "Wild Card, Divisional, Conference Championship. DFS-specific lineup construction and stack reasoning.",
    },
    {
        title: "Super Bowl",
        meta: "FEB · 1 WK",
        body: "Full preview drop + final call ~90 minutes before kickoff. The whole season ends with a kept promise.",
    },
]

const STEP_MS = 350

export function CoverageTimeline() {
    const ref = useRef<HTMLOListElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const node = ref.current
        if (!node) return
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    obs.disconnect()
                }
            },
            { threshold: 0.2 }
        )
        obs.observe(node)
        return () => obs.disconnect()
    }, [])

    return (
        <ol
            ref={ref}
            data-visible={visible}
            className="mt-8">
            {COVERAGE.map((item, i) => {
                const isLast = i === COVERAGE.length - 1
                const dotDelay = i * STEP_MS
                const lineDelay = dotDelay + 150
                return (
                    <li
                        key={item.title}
                        className="flex items-start gap-4">
                        <div className="flex shrink-0 flex-col items-center self-stretch">
                            <span
                                className="mt-1.5 size-3.5 shrink-0 origin-center scale-0 rounded-full border-[3px] border-[#0AB17B]/20 bg-[#0AB17B] opacity-0 transition duration-500 ease-out data-[visible=true]:scale-100 data-[visible=true]:opacity-100"
                                data-visible={visible}
                                style={{ transitionDelay: `${dotDelay}ms` }}
                            />
                            {!isLast && (
                                <span
                                    className="mt-1 min-h-7 w-0.5 grow origin-top scale-y-0 bg-[#30363D] transition-transform duration-500 ease-out data-[visible=true]:scale-y-100"
                                    data-visible={visible}
                                    style={{ transitionDelay: `${lineDelay}ms` }}
                                />
                            )}
                        </div>
                        <div className="flex grow flex-col gap-1.5 pb-7">
                            <div className="flex flex-col items-baseline justify-between gap-1 sm:flex-row sm:gap-3">
                                <h3 className="text-[17px] font-semibold text-[#F0F6FC]">{item.title}</h3>
                                <span className="font-mono text-[11px] text-[#8B949E]">{item.meta}</span>
                            </div>
                            <p className="text-[13px] leading-[1.55] text-[#8B949E]">{item.body}</p>
                        </div>
                    </li>
                )
            })}
        </ol>
    )
}
