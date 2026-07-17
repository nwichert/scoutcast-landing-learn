import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ScheduleBrowser } from "@/components/schedule-browser"
import { upcomingEvents, sportsList } from "@/lib/events"

const SITE_URL = "https://scoutcast.ai"
const TITLE = "Sports Schedules 2026 — Majors, Finals & Marquee Events"
const DESCRIPTION =
  "The marquee sports events worth your time in 2026 — the NFL season, the majors, Grand Slams, openers and finals. Filter by sport and get any of them as a 2-minute Scoutcast briefing."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/schedules` },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/schedules`,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default function SchedulesPage() {
  // "Now" is resolved at build time — the static export is rebuilt regularly,
  // so the page always reads as a forward-looking schedule.
  const today = new Date().toISOString().slice(0, 10)
  const events = upcomingEvents(today)
  const sports = sportsList()

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Marquee sports events 2026",
    itemListElement: events.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/schedules/${e.slug}/`,
      name: e.name,
    })),
  }

  return (
    <div className="dark min-h-screen bg-[#0D1117] text-[#F0F6FC] antialiased">
      <JsonLd data={itemListLd} />
      <Header />

      <main className="px-6 pb-24 pt-28 sm:pt-32 lg:px-12 lg:pt-40">
        <div className="mx-auto flex max-w-2xl flex-col gap-10">
          <header className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-[#0AB17B]">
              Schedules
            </span>
            <h1 className="text-balance text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-[#F0F6FC] sm:text-[44px]">
              The events worth your time in 2026
            </h1>
            <p className="text-[17px] leading-[1.6] text-[#C9D1D9]">
              The majors, finals, Grand Slams and openers that actually matter — not every
              game, just the ones you plan your week around. Pick one and get a ~2-minute
              Scoutcast briefing the morning it matters.
            </p>
          </header>

          {events.length > 0 ? (
            <ScheduleBrowser events={events} sports={sports} />
          ) : (
            <p className="text-[#8B949E]">
              The next batch of marquee events is being lined up — check back soon.
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
