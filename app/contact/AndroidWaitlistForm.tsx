"use client";

import { useState } from "react";
import posthog from "posthog-js";

const ENDPOINT = "https://us-central1-scoutcast-ios.cloudfunctions.net/androidWaitlist";

export default function AndroidWaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      posthog.capture("android_waitlist_joined");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="mt-4 text-base leading-7 text-foreground/80">
        You&rsquo;re on the list. We&rsquo;ll email you when Android launches.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-start">
      <input
        type="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-lg border border-foreground/20 bg-foreground/5 px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:ring-2 focus:ring-foreground/30 sm:max-w-xs"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-lg bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:opacity-90 disabled:opacity-50"
      >
        {status === "loading" ? "Saving…" : "Notify me"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-500 sm:self-center">Something went wrong — try again.</p>
      )}
    </form>
  );
}
