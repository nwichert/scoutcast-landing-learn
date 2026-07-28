export const draft = {
  slug: "guillotine-league-fantasy-football",
  title: "Guillotine League Fantasy Football: Rules and Strategy",
  excerpt:
    "A guillotine league eliminates the lowest-scoring fantasy team every week and dumps its roster to waivers. Last manager standing after Week 17 wins it all.",
  date: "2026-08-19",
  author: "Nick Wichert",
  authorRole: "Co-founder, Scoutcast.ai",
  authorUrl: "https://x.com/scoutcastAI",
  body: [
    lead(
      t(
        "A guillotine league is a fantasy football format with no head-to-head matchups: every week, the lowest-scoring team in the league is eliminated, and its entire roster is dumped onto waivers for the survivors to bid on. The blade falls every single week until one manager is left standing."
      )
    ),
    p(
      t(
        "The format was popularized by Matthew Berry and has become the fastest-growing alternative to standard leagues, because it fixes fantasy football’s two worst problems at once: there are no dead teams (you’re playing for survival every week), and there are no schedule-luck losses (you’re only eliminated if you’re genuinely the worst that week)."
      )
    ),
    h2("The Rules"),
    ul(
      [
        b("No matchups."),
        t(
          " You compete against the entire league simultaneously. Your score just has to beat one team: whoever finishes last."
        ),
      ],
      [
        b("Lowest weekly score is eliminated."),
        t(
          " Every week, one team is guillotined. In an 18-team league, that’s one elimination per week across a 17-week season."
        ),
      ],
      [
        b("The dead team’s roster goes to waivers."),
        t(
          " This is the format’s engine. When a team holding a top-five running back gets chopped in Week 6, that running back hits the wire — and a FAAB feeding frenzy begins."
        ),
      ],
      [
        b("FAAB bidding decides who feasts."),
        t(
          " Each manager gets a fixed free-agent budget for the season — commonly $200, with some leagues using $1,000 or more for finer-grained bidding. Blind bids, highest wins, no refills."
        ),
      ],
      [
        b("Last team standing wins."),
        t(
          " Survive every cut through Week 17 and the league is yours."
        ),
      ],
    ),
    h2("Guillotine vs. ESPN Knockout"),
    p(
      t(
        "In 2026, ESPN launched an official, fully productized version of this format called Knockout leagues: lowest scorer eliminated weekly, roster released to waivers for bidding, 12–18 teams, even a built-in “last words” feature for the fallen. If your league lives on ESPN, Knockout is guillotine with the commissioner overhead removed. The rules are near-identical — “guillotine” is the format’s generic name, “Knockout” is ESPN’s implementation. We break down the differences in our "
      ),
      lk("ESPN Knockout leagues explainer", "/blog/espn-knockout-leagues"),
      t(".")
    ),
    h2("Strategy: Surviving the Blade"),
    h3("Draft floor, not ceiling"),
    p(
      t(
        "Early on, you don’t need to be good — you need to not be last. That inverts normal draft strategy: boring, high-floor veterans and reliable target-hogs are worth more than boom-or-bust upside picks, because one catastrophic week ends your season. Depth matters too. A Week 5 bye-pocalypse that would cost you one matchup in a normal league can cost you everything here."
      )
    ),
    h3("Pace your FAAB across 17 weeks"),
    p(
      t(
        "FAAB is your real currency, and the temptation is to blow it early. Resist. Every week another full roster hits the wire, and the players available in Week 10 — released by teams that were good enough to survive nine cuts — are far better than the Week 2 scraps. A common trap is winning a $190 bidding war in September, then watching a top-three player hit waivers in November while you sit broke. Budget by phases: stay stingy early, keep at least half your budget past midseason, and remember that leftover FAAB on elimination day is worth exactly zero. For the mechanics of blind bidding itself, see our "
      ),
      lk("waiver wire strategy guide", "/blog/fantasy-football-waiver-wire-strategy"),
      t(".")
    ),
    h3("Know when to spend big"),
    p(
      t(
        "Two moments justify emptying the wallet: a true difference-maker hits the wire (an elite RB or WR from a chopped team — these players win guillotine leagues), or you’re in visible danger — if your roster keeps flirting with last place, spending big now beats saving for a future you won’t see. Late season, the math flips entirely: with four teams left and $300 in hand, spend it all. There’s nothing to save for."
      )
    ),
    h2("How to Set One Up"),
    ul(
      [
        b("18 teams is the canonical size."),
        t(
          " One elimination per week across 17 NFL weeks leaves exactly one champion in Week 17. Smaller leagues work — start eliminations later or end earlier."
        ),
      ],
      [
        b("Platforms."),
        t(
          " Guillotine Leagues™ (Fantasy Life’s dedicated app) supports the format natively, as does ESPN via Knockout. On Sleeper or Yahoo, commissioners run it manually: set league to total-points, remove the eliminated team’s players to free agency each Tuesday."
        ),
      ],
      [
        b("Use generous FAAB and daily waivers."),
        t(
          " The bidding wars are the fun. A bigger budget ($1,000) makes bids more expressive than a $100 one."
        ),
      ],
      [
        b("Set elimination timing in writing."),
        t(
          " Standard is: week locks Monday night, roster hits waivers Tuesday, bids process Wednesday. Ambiguity here causes the only fights this format ever has."
        ),
      ],
    ),
    p(
      t(
        "Guillotine leagues are unforgiving to managers who check out — miss one bad week and you’re gone, miss one big waiver drop and someone else feasts. Scoutcast.ai is built for exactly that: a ~2-minute daily audio briefing that keeps you current on your players in minutes, not hours. The NFL Fantasy Pass ($49.99/season) delivers Tuesday, Wednesday, Thursday, and Sunday briefings around your actual leagues — Tuesday and Wednesday being precisely when guillotine waivers get decided."
      )
    ),
    p(
      t("Want more formats? See how a "),
      lk("vampire league", "/blog/vampire-league-fantasy-football"),
      t(" turns one team into the league villain, or go zero-maintenance with "),
      lk("best ball", "/blog/what-is-best-ball-fantasy-football"),
      t(".")
    ),
    p(
      lk(
        "Download Scoutcast on the App Store →",
        "https://apps.apple.com/us/app/scoutcast-ai/id6761558329"
      )
    ),
  ],
  faqs: [
    {
      q: "How many teams should a guillotine league have?",
      a: "18 is the canonical number: one elimination per week over a 17-week NFL season leaves exactly one survivor. Leagues of 12–17 teams work fine — just start the eliminations in a later week so the final cut lands in Week 17.",
    },
    {
      q: "What happens to an eliminated team’s players?",
      a: "The entire roster is released to waivers, where surviving managers bid on the players with FAAB. This weekly roster dump is the heart of the format — league-winning players hit the wire all season long.",
    },
    {
      q: "Is a guillotine league the same as ESPN’s Knockout league?",
      a: "Functionally yes. Guillotine is the generic format name; Knockout is ESPN’s official 2026 implementation with automated eliminations, waiver releases, and 12–18 team support. The core rules — lowest weekly scorer eliminated, roster to waivers — are the same.",
    },
    {
      q: "How much FAAB should I save in a guillotine league?",
      a: "Aim to keep at least half your budget through midseason. The best players hit waivers in the middle and late weeks, when strong teams start getting chopped. But spend aggressively if you’re flirting with last place — unspent FAAB is worthless once you’re eliminated.",
    },
  ],
};
