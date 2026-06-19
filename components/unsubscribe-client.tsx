"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"

// The deployed Cloud Function that records the opt-out (sets emailEnabled:false
// on the user doc). It validates the per-user token, so it works without login.
// Same endpoint the one-click List-Unsubscribe header points at.
const UNSUBSCRIBE_FN = "https://us-central1-scoutcast-ios.cloudfunctions.net/unsubscribeEmail"

type State = "idle" | "working" | "done" | "no-token"

export function UnsubscribeClient() {
  const params = useSearchParams()
  const u = params.get("u") ?? ""
  const t = params.get("t") ?? ""
  const [state, setState] = useState<State>("idle")

  useEffect(() => {
    if (!u || !t) {
      setState("no-token")
      return
    }
    setState("working")
    // Fire the opt-out. The function is cross-origin and doesn't send CORS
    // headers, so we POST no-cors (opaque response) and confirm optimistically.
    // The authoritative GET link below is the fallback if anything went wrong.
    fetch(`${UNSUBSCRIBE_FN}?u=${encodeURIComponent(u)}&t=${encodeURIComponent(t)}`, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
    })
      .catch(() => {})
      .finally(() => setState("done"))
  }, [u, t])

  if (state === "no-token") {
    return (
      <Panel heading="Manage your emails">
        <p className="text-[16px] leading-[1.6] text-[#C9D1D9]">
          To unsubscribe from Scoutcast.ai emails, open the{" "}
          <strong className="font-semibold text-[#F0F6FC]">
            “Unsubscribe from these emails”
          </strong>{" "}
          link at the bottom of any Scoutcast email — it knows which account to update. You
          can also turn emails off anytime in the app under Settings.
        </p>
        <Link
          href="/"
          className="text-sm font-semibold text-[#0AB17B] hover:text-[#0BC189]"
        >
          ← Back to Scoutcast.ai
        </Link>
      </Panel>
    )
  }

  if (state === "done") {
    return (
      <Panel heading="You're unsubscribed">
        <p className="text-[16px] leading-[1.6] text-[#C9D1D9]">
          You won&apos;t get briefing, event, or re-engagement emails from Scoutcast.ai
          anymore. You can turn them back on anytime in the app under Settings.
        </p>
        <p className="text-[13px] leading-[1.6] text-[#8B949E]">
          Didn&apos;t take effect?{" "}
          <a
            href={`${UNSUBSCRIBE_FN}?u=${encodeURIComponent(u)}&t=${encodeURIComponent(t)}`}
            className="text-[#0AB17B] underline-offset-4 hover:underline"
          >
            Confirm here
          </a>
          .
        </p>
      </Panel>
    )
  }

  return (
    <Panel heading="Unsubscribing…">
      <p className="text-[16px] leading-[1.6] text-[#C9D1D9]">One moment.</p>
    </Panel>
  )
}

function Panel({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#30363D] bg-[#161B22] p-8">
      <h1 className="text-[26px] font-bold leading-tight text-[#F0F6FC]">{heading}</h1>
      {children}
    </div>
  )
}
