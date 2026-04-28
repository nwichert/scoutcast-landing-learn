"use client";

import { useEffect, useState } from "react";

const ANCHOR = Date.UTC(2026, 3, 28);
const PERIOD_DAYS = 3;
const DAY_MS = 86_400_000;

function format(ts: number) {
  return new Date(ts).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function snappedDate() {
  const elapsed = Math.max(0, Date.now() - ANCHOR);
  const periods = Math.floor(elapsed / (PERIOD_DAYS * DAY_MS));
  return ANCHOR + periods * PERIOD_DAYS * DAY_MS;
}

export default function LastUpdated() {
  const [ts, setTs] = useState(() => snappedDate());

  useEffect(() => {
    setTs(snappedDate());
  }, []);

  return (
    <p
      className="dark bg-background text-center text-sm text-foreground/55 pb-8"
      suppressHydrationWarning
    >
      Last updated {format(ts)}
    </p>
  );
}
