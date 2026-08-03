"use client"

import { useState } from "react"
import Link from "next/link"
import { type SportEvent, formatEventDateRange } from "@/lib/events"
import { cn } from "@/lib/utils"
import posthog from "posthog-js"

const ALL = "All sports"

export function ScheduleBrowser({
  events,
  sports,
}: {
  events: SportEvent[]
  sports: string[]
}) {
  const [active, setActive] = useState<string>(ALL)
  const filtered =
    active === ALL ? events : events.filter((e) => e.sport === active)
  const chips = [ALL, ...sports]

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by sport">
        {chips.map((sport) => {
          const isActive = sport === active
          return (
            <button
              key={sport}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => {
                setActive(sport)
                posthog.capture("schedule_sport_filtered", { sport })
              }}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition",
                isActive
                  ? "border-[#0AB17B] bg-[#0AB17B]/10 text-[#0AB17B]"
                  : "border-white/10 text-[#C9D1D9] hover:border-white/25 hover:text-[#F0F6FC]"
              )}
            >
              {sport}
            </button>
          )
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-[#8B949E]">No upcoming events for this sport right now.</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {filtered.map((event) => (
            <li key={event.id}>
              <Link
                href={`/schedules/${event.slug}/`}
                className="group flex flex-col gap-2 rounded-xl border border-[#30363D] bg-[#161B22] p-5 transition hover:border-[#0AB17B]/60 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-white/[0.06] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#8B949E]">
                      {event.sport}
                    </span>
                    <span className="font-mono text-xs text-[#8B949E]">
                      {formatEventDateRange(event.startDate, event.endDate)}
                    </span>
                  </div>
                  <h2 className="text-[19px] font-semibold leading-tight text-[#F0F6FC] group-hover:text-[#0AB17B]">
                    {event.name}
                  </h2>
                  <p className="text-[15px] leading-[1.5] text-[#C9D1D9]">{event.blurb}</p>
                </div>
                <span className="shrink-0 text-sm font-semibold text-[#0AB17B] sm:ml-6">
                  View →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
