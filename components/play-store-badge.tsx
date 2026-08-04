"use client"

import { buildPlayStoreUrl } from "@/lib/urls"
import { cn } from "@/lib/utils"
import posthog from "posthog-js"

export function PlayStoreBadge({ placement, className }: { placement?: string; className?: string }) {
    return (
        <a
            href={buildPlayStoreUrl(placement)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => posthog.capture("play_store_link_clicked", { placement, label: "badge" })}
            className={cn("inline-flex h-14 items-center transition hover:opacity-90", className)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/google-play-badge.svg"
                alt="Get it on Google Play"
                className="h-14 w-auto"
            />
        </a>
    )
}
