import type { Metadata } from "next"
import { Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { UnsubscribeClient } from "@/components/unsubscribe-client"

const SITE_URL = "https://scoutcast.ai"

export const metadata: Metadata = {
  title: "Unsubscribe — Scoutcast.ai",
  description: "Manage or turn off Scoutcast.ai emails.",
  alternates: { canonical: `${SITE_URL}/unsubscribe` },
  // Utility page — keep it out of search results.
  robots: { index: false, follow: false },
}

export default function UnsubscribePage() {
  return (
    <div className="dark min-h-screen bg-[#0D1117] text-[#F0F6FC] antialiased">
      <Header />
      <main className="px-6 pb-24 pt-28 sm:pt-32 lg:px-12 lg:pt-40">
        <div className="mx-auto flex max-w-md flex-col gap-6">
          <Suspense
            fallback={
              <div className="rounded-2xl border border-[#30363D] bg-[#161B22] p-8 text-[#8B949E]">
                Loading…
              </div>
            }
          >
            <UnsubscribeClient />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  )
}
