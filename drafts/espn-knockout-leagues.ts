export const draft = {
  slug: "espn-knockout-leagues",
  title: "ESPN Knockout Leagues: Rules, Strategy, and How to Win",
  excerpt:
    "ESPN’s new Knockout format eliminates the lowest scorer each week and dumps their roster to waivers. The exact rules, guillotine comparison, and how to survive.",
  date: "2026-07-26",
  author: "Nick Wichert",
  authorRole: "Co-founder, Scoutcast.ai",
  authorUrl: "https://x.com/scoutcastAI",
  body: [
    lead(
      t(
        "A Knockout league is ESPN Fantasy Football’s new elimination format for the 2026 season: every team competes on total points, and the lowest-scoring team each week is eliminated — with its entire roster released to waivers for the surviving managers to bid on. The last manager standing wins."
      )
    ),
    p(
      t(
        "ESPN announced Knockout leagues on July 7, 2026, alongside the rest of its fantasy football updates — a big year for the platform, since "
      ),
      lk("NFL Fantasy is also moving to ESPN", "/blog/nfl-fantasy-moving-to-espn"),
      t(
        ". If you’ve played in a guillotine league before, the concept will feel familiar. If you haven’t, this is one of the most fun (and most brutal) ways to play fantasy football, and ESPN just made it a first-class product instead of a commissioner-run science project. Here’s everything we know about the rules, how it differs from a classic guillotine league, and how to actually win one."
      )
    ),

    h2("How ESPN Knockout leagues work"),
    p(
      t(
        "The core loop is simple: no head-to-head matchups, no playoff bracket, no schedule luck. Everyone’s weekly score counts, and the bottom team is gone. Here are the mechanics as ESPN has published them (all details as of July 2026 — settings could shift before draft season):"
      )
    ),
    tbl(
      [[b("Setting")], [b("How it works")]],
      [
        [[t("Format")], [t("Total points, league-wide. No head-to-head matchups.")]],
        [[t("Elimination")], [t("The lowest-scoring team each week is knocked out. One elimination per week until one manager remains.")]],
        [[t("Eliminated rosters")], [t("The entire roster is released to waivers. Remaining managers acquire those players by placing bids (or via free pickups once bidding clears).")]],
        [[t("League size")], [t("ESPN recommends 12+ managers; 12–18 is the sweet spot. Season length scales with size — an 18-team league runs a full 17-week season, smaller leagues end sooner.")]],
        [[t("Scoring")], [t("PPR by default.")]],
        [[t("Draft")], [t("Snake by default; linear and salary cap drafts are also supported.")]],
        [[t("Cost")], [t("Free to enter and play, like all ESPN Fantasy games.")]],
        [[t("Last words")], [t("Eliminated managers get to send a farewell message to the rest of the league. Use it well.")]],
      ]
    ),
    p(
      t(
        "ESPN hasn’t published anything about official prizes as of July 2026 — Knockout looks like a standard free league type you set up with friends, not a cash contest. And to be clear on the big one: once you’re eliminated, you’re out. There’s no buy-back, no resurrection week."
      )
    ),

    h2("Knockout vs. guillotine leagues"),
    p(
      t(
        "If “lowest scorer gets eliminated and their roster hits waivers” sounds familiar, that’s because it’s the guillotine league format, popularized by longtime fantasy analyst Paul Charchian in 2017. Knockout is ESPN’s productized version of the same idea. The differences are mostly about who does the work:"
      )
    ),
    ul(
      [
        b("Guillotine leagues"),
        t(
          " are traditionally 18 teams, 17 weeks, one cut per week — and historically ran on platforms that didn’t support the format natively. Commissioners manually dropped eliminated rosters, policed FAAB, and tracked who was out."
        ),
      ],
      [
        b("ESPN Knockout leagues"),
        t(
          " automate all of it: eliminations, the roster dump to waivers, and the bidding are handled by the platform. ESPN also allows smaller league sizes (with shorter seasons) instead of the rigid 18-team structure."
        ),
      ],
      [
        b("The strategy is identical."),
        t(
          " Everything the guillotine community has learned since 2017 — floor over ceiling early, hoard FAAB, feast on eliminated rosters — applies directly to Knockout."
        ),
      ],
    ),
    p(
      t(
        "So if you see “knockout” and “guillotine” used interchangeably this season, that’s why. One is the genre; the other is ESPN’s official product name for it."
      )
    ),

    h2("Strategy: how to be the last one standing"),
    h3("Draft for floor, not ceiling"),
    p(
      t(
        "In head-to-head leagues you need spike weeks to beat good opponents. In a Knockout league, weeks 1–6 have exactly one goal: don’t finish last. That means consistent, high-floor players — target-hog receivers, three-down backs, quarterbacks who never post a dud — over boom-bust types. A 9th-place finish out of 18 teams is a perfect week. ESPN’s own analysts put it bluntly: safe and boring is the play early. This also changes your "
      ),
      lk("start/sit decisions", "/blog/fantasy-football-start-sit"),
      t(
        " — the tiebreaker between two similar players is always the safer floor, not the higher ceiling, until the field thins out."
      )
    ),
    h3("The weekly waiver auction is the whole game"),
    p(
      t(
        "This is what makes the format special. Every single week, an entire roster — including whatever studs the eliminated team drafted — hits waivers. In an 18-team league, roughly 196 players are rostered in Week 5, but only about 70 by Week 14. Your draft gets you through September; the waiver auctions decide who wins in December. Treat every elimination like a mini free agency period: know whose roster just dropped, know which of their players fit your bye weeks, and have a bid plan before waivers clear."
      )
    ),
    h3("When to burn FAAB"),
    p(
      t(
        "The classic mistake is blowing your budget on the first big name that hits waivers in September. ESPN’s guidance — and the consensus from years of guillotine play — is to spend conservatively early and aggressively late: avoid putting more than about 25% of your budget on any one player before mid-October. Late-season FAAB is worth far more than early-season FAAB, because the players hitting waivers keep getting better as stronger teams get eliminated. Our general "
      ),
      lk("waiver wire strategy guide", "/blog/fantasy-football-waiver-wire-strategy"),
      t(
        " covers bidding mechanics in more depth, but the Knockout-specific rule is simple: the manager with budget left in November is shopping at a buffet while everyone else watches."
      )
    ),
    h3("Stream, don’t stash"),
    p(
      t(
        "Injured stashes and “he’ll be good in the playoffs” holds are dead weight in this format. There are no playoffs to plan for if you get knocked out in Week 6, and the free agent pool restocks every single week. Every roster spot should be someone who can score for you now — stream defenses, stream tight ends, and if a player gets hurt, cut him without sentiment. Deep-league streaming instincts translate perfectly here."
      )
    ),

    h2("Who should (and shouldn’t) play this format"),
    p(
      t(
        "Play a Knockout league if you love waiver wire chess, want every week to matter, or you’re burned out on schedule luck deciding head-to-head leagues. It’s also a great second league — the total-points format means no matchup prep, just set your best lineup. Skip it if you check your team once a week and forget Thursday inactives, because this format will punish you faster than any other. And if you’re still choosing where to play this season, our "
      ),
      lk("roundup of the best fantasy football apps for 2026", "/blog/best-fantasy-football-apps-2026"),
      t(" covers how ESPN’s app stacks up overall.")
    ),

    h2("One missed inactive ends your season"),
    p(
      t(
        "Here’s the honest reason we’re writing about this format: elimination leagues are the most news-sensitive version of fantasy football that exists. In a head-to-head league, starting an inactive player costs you one loss out of fourteen. In a Knockout league, one zero in your lineup in a bad week and your season is just over — roster dumped, last words, done."
      )
    ),
    p(
      t(
        "That’s exactly the problem we built Scoutcast.ai for. It’s a personalized ~2-minute audio sports briefing every morning — your teams, your players, your leagues — so lineup-relevant news finds you instead of the other way around. For fantasy players, the NFL Fantasy Pass ($49.99/season) adds per-league analyst briefings on Tuesday, Wednesday, Thursday, and Sunday morning: waiver targets after each elimination, start/sit calls for your actual roster, and a final inactives check before kickoff. In a format where missing one beat report is fatal, a two-minute listen over coffee is cheap insurance."
      )
    ),
    p(lk("Download Scoutcast on the App Store →", "https://apps.apple.com/us/app/scoutcast-ai/id6761558329")),
  ],
  faqs: [
    {
      question: "What is a Knockout league in ESPN Fantasy Football?",
      answer:
        "A Knockout league is ESPN’s elimination-style fantasy football format, introduced for the 2026 season. All teams compete on total points instead of head-to-head matchups, and the lowest-scoring team each week is eliminated. The eliminated team’s entire roster is released to waivers, and the last manager standing wins.",
    },
    {
      question: "What’s the difference between a Knockout league and a guillotine league?",
      answer:
        "They’re the same core format. Guillotine leagues — popularized by Paul Charchian in 2017 — traditionally use 18 teams and require commissioners to manually manage eliminations and roster drops. Knockout is ESPN’s official, automated version: the platform handles eliminations, releases rosters to waivers, and supports flexible league sizes.",
    },
    {
      question: "What happens to a team’s roster when it’s eliminated?",
      answer:
        "The eliminated team’s entire roster is released to waivers. All remaining managers can bid on those players (or pick them up as free agents once bidding clears), so the player pool gets stronger every week as more teams are knocked out.",
    },
    {
      question: "How many teams are in an ESPN Knockout league?",
      answer:
        "ESPN recommends at least 12 managers, with 12–18 considered ideal. Season length scales with league size: an 18-team league eliminates one team per week across a full 17-week season, while smaller leagues finish earlier.",
    },
    {
      question: "Can you rejoin a Knockout league after being eliminated?",
      answer:
        "No. As of July 2026, elimination is permanent — there’s no buy-back or re-entry. Eliminated managers get one 'last words' message to send to the rest of the league, and then they’re spectators for the remainder of the season.",
    },
  ],
};
