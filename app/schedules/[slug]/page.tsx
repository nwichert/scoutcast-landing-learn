import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { DownloadButton } from "@/components/download-button"
import { EVENTS, getEvent, formatEventDateRange, type SportEvent } from "@/lib/events"

const SITE_URL = "https://scoutcast.ai"

export function generateStaticParams() {
  return EVENTS.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const event = getEvent(slug)
  if (!event) return {}
  const canonical = `${SITE_URL}/schedules/${event.slug}`
  const title = `${event.name} — Schedule, Dates & 2-Minute Briefings`
  const description = `${event.blurb} Get ${event.name} as a daily ~2-minute Scoutcast.ai audio briefing.`
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonical,
    },
    twitter: { card: "summary_large_image", title, description },
  }
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

function buildEventLd(event: SportEvent) {
  return {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: event.name,
    description: event.blurb,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    ...(event.location
      ? { location: { "@type": "Place", name: event.location } }
      : {}),
    url: `${SITE_URL}/schedules/${event.slug}`,
    organizer: { "@type": "Organization", name: "Scoutcast.ai", url: SITE_URL },
  }
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const event = getEvent(slug)
  if (!event) notFound()

  return (
    <div className="dark min-h-screen bg-[#0D1117] text-[#F0F6FC] antialiased">
      <JsonLd data={buildEventLd(event)} />
      <Header />

      <main className="px-6 pb-24 pt-28 sm:pt-32 lg:px-12 lg:pt-40">
        <article className="mx-auto flex max-w-2xl flex-col gap-8">
          <Link
            href="/schedules/"
            className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#0AB17B] hover:text-[#0BC189]"
          >
            ← All schedules
          </Link>

          <header className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-white/[0.06] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#8B949E]">
                {event.sport}
              </span>
              <span className="font-mono text-xs text-[#8B949E]">
                {formatEventDateRange(event.startDate, event.endDate)}
              </span>
            </div>
            <h1 className="text-balance text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-[#F0F6FC] sm:text-[44px]">
              {event.name}
            </h1>
            <p className="text-[17px] leading-[1.6] text-[#C9D1D9]">{event.blurb}</p>
            {event.location ? (
              <p className="text-[15px] text-[#8B949E]">📍 {event.location}</p>
            ) : null}
          </header>

          <div className="flex flex-col gap-4 rounded-2xl border border-[#30363D] bg-[#161B22] p-6">
            <h2 className="text-[20px] font-semibold text-[#F0F6FC]">
              Follow it in ~2 minutes a day
            </h2>
            <p className="text-[16px] leading-[1.6] text-[#C9D1D9]">
              Skip the doomscroll. Add {event.name} to your casts and Scoutcast.ai gives you a
              short, personalized audio briefing — previews before it starts, recaps once it&apos;s
              underway. Pick your teams and even your favorite beat writers as sources.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <DownloadButton label="Get it as a cast" />
              <Link
                href="/schedules/"
                className="text-sm font-semibold text-[#0AB17B] hover:text-[#0BC189]"
              >
                Browse more events →
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
