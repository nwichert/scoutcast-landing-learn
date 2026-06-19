// ─── Marquee Sports-Events Dataset (marketing site copy) ────────────────────
//
// Powers the public /schedules pages. This is the website-side copy of the
// canonical dataset; the email engine keeps an identical one at
// scoutcast/functions/src/data/sportsEvents.ts.
//
//   ⚠️  KEEP IN SYNC: edit an event in both files (same id/slug/dates/leagues),
//       or the heads-up email will link to a schedule page that doesn't exist.
//
// Plain TS with no runtime imports so scripts/generate-seo-files.mjs can import
// it directly (Node strips the types at load time).

// Canonical league codes (mirror of scoutcast/functions/src/leagues.ts). Kept
// as a string for the website — only the email engine needs the strict union.
export type LeagueCode = string;

export interface SportEvent {
  id: string;
  slug: string;
  name: string;
  sport: string;
  leagues: LeagueCode[];
  tier: "marquee";
  startDate: string;
  endDate: string;
  location?: string;
  blurb: string;
  teamAbbreviations?: string[];
}

export const EVENTS: SportEvent[] = [
  {
    id: "fifa-world-cup-2026",
    slug: "fifa-world-cup-2026",
    name: "FIFA World Cup 2026",
    sport: "Soccer",
    leagues: ["WORLD_CUP"],
    tier: "marquee",
    startDate: "2026-06-11",
    endDate: "2026-07-19",
    location: "USA · Canada · Mexico",
    blurb: "The first 48-team World Cup, hosted across North America — group stage through the final.",
  },
  {
    id: "nba-draft-2026",
    slug: "nba-draft-2026",
    name: "2026 NBA Draft",
    sport: "Basketball",
    leagues: ["NBA"],
    tier: "marquee",
    startDate: "2026-06-25",
    endDate: "2026-06-26",
    location: "Brooklyn, NY",
    blurb: "The next class enters the league — lottery picks, trades, and where your team lands.",
  },
  {
    id: "wimbledon-2026",
    slug: "wimbledon-2026",
    name: "Wimbledon 2026",
    sport: "Tennis",
    leagues: ["ATP", "WTA"],
    tier: "marquee",
    startDate: "2026-06-29",
    endDate: "2026-07-12",
    location: "London, England",
    blurb: "Tennis's grass-court Grand Slam at the All England Club — two weeks to the finals.",
  },
  {
    id: "british-grand-prix-2026",
    slug: "british-grand-prix-2026",
    name: "British Grand Prix 2026",
    sport: "Motorsport",
    leagues: ["F1"],
    tier: "marquee",
    startDate: "2026-07-03",
    endDate: "2026-07-05",
    location: "Silverstone, England",
    blurb: "Formula 1 at Silverstone — one of the fastest, most historic rounds on the calendar.",
  },
  {
    id: "tour-de-france-2026",
    slug: "tour-de-france-2026",
    name: "Tour de France 2026",
    sport: "Cycling",
    leagues: ["CYCLING"],
    tier: "marquee",
    startDate: "2026-07-04",
    endDate: "2026-07-26",
    location: "France",
    blurb: "Three weeks, 21 stages, one yellow jersey — cycling's biggest race.",
  },
  {
    id: "ufc-summer-card-2026",
    slug: "ufc-summer-card-2026",
    name: "UFC International Fight Week 2026",
    sport: "MMA",
    leagues: ["UFC"],
    tier: "marquee",
    startDate: "2026-07-11",
    endDate: "2026-07-11",
    location: "Las Vegas, NV",
    blurb: "The summer's marquee UFC card — title fights headlining International Fight Week.",
  },
  {
    id: "mlb-all-star-2026",
    slug: "mlb-all-star-game-2026",
    name: "MLB All-Star Game 2026",
    sport: "Baseball",
    leagues: ["MLB"],
    tier: "marquee",
    startDate: "2026-07-14",
    endDate: "2026-07-14",
    location: "Philadelphia, PA",
    blurb: "The Midsummer Classic — the league's best meet at Citizens Bank Park.",
  },
  {
    id: "the-open-championship-2026",
    slug: "the-open-championship-2026",
    name: "The Open Championship 2026",
    sport: "Golf",
    leagues: ["PGA", "DP_WORLD_TOUR"],
    tier: "marquee",
    startDate: "2026-07-16",
    endDate: "2026-07-19",
    location: "Royal Birkdale, England",
    blurb: "Golf's oldest major — links golf and the Claret Jug on the line.",
  },
  {
    id: "fedex-cup-playoffs-2026",
    slug: "fedex-cup-playoffs-2026",
    name: "FedEx Cup Playoffs 2026",
    sport: "Golf",
    leagues: ["PGA"],
    tier: "marquee",
    startDate: "2026-08-20",
    endDate: "2026-08-30",
    location: "USA",
    blurb: "The PGA Tour's three-event postseason — who closes the season as champion.",
  },
  {
    id: "epl-opening-weekend-2026",
    slug: "premier-league-opening-weekend-2026",
    name: "Premier League Opening Weekend 2026/27",
    sport: "Soccer",
    leagues: ["EPL"],
    tier: "marquee",
    startDate: "2026-08-15",
    endDate: "2026-08-16",
    location: "England",
    blurb: "The new Premier League season kicks off — first look at every side.",
  },
  {
    id: "us-open-tennis-2026",
    slug: "us-open-tennis-2026",
    name: "US Open Tennis 2026",
    sport: "Tennis",
    leagues: ["ATP", "WTA"],
    tier: "marquee",
    startDate: "2026-08-31",
    endDate: "2026-09-13",
    location: "New York, NY",
    blurb: "The year's final tennis Grand Slam, under the lights in Flushing Meadows.",
  },
  {
    id: "nascar-playoffs-2026",
    slug: "nascar-cup-playoffs-2026",
    name: "NASCAR Cup Series Playoffs 2026",
    sport: "Motorsport",
    leagues: ["NASCAR"],
    tier: "marquee",
    startDate: "2026-09-06",
    endDate: "2026-09-06",
    location: "USA",
    blurb: "The Cup Series postseason begins — the 16-driver chase for the title.",
  },
  {
    id: "nfl-kickoff-2026",
    slug: "nfl-kickoff-2026",
    name: "NFL Kickoff 2026",
    sport: "Football",
    leagues: ["NFL"],
    tier: "marquee",
    startDate: "2026-09-10",
    endDate: "2026-09-10",
    location: "USA",
    blurb: "The NFL season opens — defending champs raise the banner, and your team's back.",
  },
  {
    id: "ucl-league-phase-2026",
    slug: "champions-league-returns-2026",
    name: "Champions League Returns 2026/27",
    sport: "Soccer",
    leagues: ["UCL"],
    tier: "marquee",
    startDate: "2026-09-15",
    endDate: "2026-09-17",
    location: "Europe",
    blurb: "Europe's premier club competition is back for a new league phase.",
  },
  {
    id: "nhl-opening-night-2026",
    slug: "nhl-opening-night-2026",
    name: "NHL Opening Night 2026",
    sport: "Hockey",
    leagues: ["NHL"],
    tier: "marquee",
    startDate: "2026-10-07",
    endDate: "2026-10-07",
    location: "USA · Canada",
    blurb: "Puck drop on a new NHL season — banners, openers, and fresh rosters.",
  },
  {
    id: "breeders-cup-2026",
    slug: "breeders-cup-2026",
    name: "Breeders' Cup 2026",
    sport: "Horse Racing",
    leagues: ["NTL"],
    tier: "marquee",
    startDate: "2026-10-30",
    endDate: "2026-10-31",
    location: "USA",
    blurb: "Thoroughbred racing's world championships — two days, fourteen championship races.",
  },
];

/** Look an event up by slug. */
export function getEvent(slug: string): SportEvent | undefined {
  return EVENTS.find((e) => e.slug === slug);
}

/** Distinct sport groups, in first-seen order — drives the filter chips. */
export function sportsList(): string[] {
  const seen: string[] = [];
  for (const e of EVENTS) if (!seen.includes(e.sport)) seen.push(e.sport);
  return seen.sort();
}

/**
 * Events sorted by start date. Past events (already ended before `todayISO`)
 * drop off so the page always reads as a forward schedule. Pass today's date
 * as YYYY-MM-DD (the caller decides "now" — at build time for the static site).
 */
export function upcomingEvents(todayISO: string): SportEvent[] {
  return EVENTS.filter((e) => e.endDate >= todayISO).sort((a, b) =>
    a.startDate < b.startDate ? -1 : a.startDate > b.startDate ? 1 : 0
  );
}

/** "Jul 16–19, 2026" / "Jul 14, 2026" — compact human range. */
export function formatEventDateRange(startDate: string, endDate: string): string {
  const s = new Date(`${startDate}T12:00:00Z`);
  const e = new Date(`${endDate}T12:00:00Z`);
  const mon = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", timeZone: "UTC" });
  const day = (d: Date) => d.getUTCDate();
  const year = e.getUTCFullYear();
  if (startDate === endDate) return `${mon(s)} ${day(s)}, ${year}`;
  if (mon(s) === mon(e)) return `${mon(s)} ${day(s)}–${day(e)}, ${year}`;
  return `${mon(s)} ${day(s)} – ${mon(e)} ${day(e)}, ${year}`;
}
