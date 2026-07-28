export const draft = {
  slug: "how-does-fantasy-football-work",
  title: "How Does Fantasy Football Work? A Beginner’s Guide",
  excerpt:
    "You draft real NFL players, start a lineup each week, and their real-game stats become your points. Highest score wins. Here’s the full beginner walkthrough.",
  date: "2026-08-08",
  author: "Nick Wichert",
  authorRole: "Co-founder, Scoutcast.ai",
  authorUrl: "https://x.com/scoutcastAI",
  body: [
    lead(
      t(
        "Fantasy football works like this: you join a league (usually 8–12 people), draft a roster of real NFL players before the season, and each week you start a lineup that scores fantasy points based on those players’ actual game stats — yards, touchdowns, catches. Every week you face one other person in your league head-to-head, the higher score wins, and the best records make the playoffs in December. That’s the whole game."
      )
    ),
    p(
      t(
        "Everything else — waivers, trades, PPR, flex spots — is detail layered on top of that loop. Here’s how a full season actually plays out, what your roster looks like, what it costs, and how much time it really takes."
      )
    ),

    h2("The season lifecycle: league → draft → lineups → playoffs"),
    ul(
      [
        b("1. Join or start a league (July–August)."),
        t(
          " Free on ESPN, Sleeper, or Yahoo. Join friends, coworkers, or a public league. Most leagues have 10 or 12 teams."
        ),
      ],
      [
        b("2. Draft your team (late August–early September)."),
        t(
          " Everyone takes turns picking NFL players until rosters are full — usually 15–16 rounds, snake order (the pick order reverses each round). Most drafts happen in the two weeks before the season; see "
        ),
        lk(
          "when fantasy football starts",
          "/blog/when-does-fantasy-football-start"
        ),
        t(" for exact 2026 timing."),
      ],
      [
        b("3. Set your lineup every week (September–December)."),
        t(
          " Before games kick off, you choose which players start and which sit on your bench. Only starters score points for you."
        ),
      ],
      [
        b("4. Work the waiver wire and make trades."),
        t(
          " Undrafted players (and players others drop) sit in a free-agent pool. Each week — typically Tuesday night into Wednesday — you can claim them via ‘waivers’ to replace injured or underperforming players. You can also trade players with other managers."
        ),
      ],
      [
        b("5. Make the playoffs and win it all."),
        t(
          " After a roughly 14-week regular season, the top 4–6 teams enter a single-elimination bracket in NFL Weeks 15–17. Win the championship week and you take the trophy (and the bragging rights)."
        ),
      ],
    ),

    h2("What your roster looks like"),
    p(
      t(
        "A typical starting lineup has 9 slots, plus a bench. Here’s the standard setup on most platforms:"
      )
    ),
    tbl(
      [[t("Position")], [t("Typical starters")], [t("What it is")]],
      [
        [[b("QB")], [t("1")], [t("Quarterback — scores on passing yards and TDs")]],
        [[b("RB")], [t("2")], [t("Running backs — rushing yards, TDs, catches")]],
        [[b("WR")], [t("2")], [t("Wide receivers — catches, receiving yards, TDs")]],
        [[b("TE")], [t("1")], [t("Tight end — scores like a receiver")]],
        [
          [b("FLEX")],
          [t("1")],
          [t("A wildcard slot: start any extra RB, WR, or TE")],
        ],
        [[b("K")], [t("1")], [t("Kicker — field goals and extra points")]],
        [
          [b("DST")],
          [t("1")],
          [t("A whole team’s defense/special teams — sacks, turnovers, TDs")],
        ],
        [
          [b("Bench")],
          [t("6–7")],
          [t("Reserves who don’t score; your injury and bye-week insurance")],
        ],
        [
          [b("IR")],
          [t("0–2")],
          [t("Injured reserve slots for players who are officially out")],
        ],
      ]
    ),
    p(
      t(
        "Every NFL team has one bye week (a week off), so part of the weekly job is making sure you’re not starting someone whose team isn’t playing."
      )
    ),

    h2("How scoring works"),
    p(
      t(
        "Your players’ real stats convert to points automatically. Typical default values: 1 point per 10 rushing or receiving yards, 1 point per 25 passing yards, 6 points for a rushing or receiving touchdown, 4 points for a passing touchdown, and minus 2 for interceptions or lost fumbles. A good weekly team score lands somewhere around 100–130 points in most formats."
      )
    ),
    p(
      t(
        "The setting that varies most between leagues is the value of a catch. Many leagues award 1 point per reception (‘PPR’) or 0.5 (‘half PPR’), which makes pass-catchers significantly more valuable. It’s worth two minutes to understand — here’s our full explainer on "
      ),
      lk("what PPR means", "/blog/what-is-ppr-in-fantasy-football"),
      t(" and how to check your league’s settings.")
    ),

    h2("Redraft vs. keeper vs. dynasty"),
    p(
      t(
        "In a redraft league — the default, and what beginners should play — everyone starts from scratch with a fresh draft every year. Keeper leagues let each manager carry over a few players (usually 1–3) to next season, adding a light long-term element. Dynasty leagues keep entire rosters year over year and add rookie drafts, which is deeply strategic but a big commitment — save it for year two or three."
      )
    ),

    h2("What fantasy football costs"),
    p(
      t(
        "Nothing, if you want. ESPN, Sleeper, and Yahoo are all free to play, including drafts, waivers, trades, and live scoring. Many friend leagues add an entry fee — commonly $20–$100 per person — that pays out to the season’s top finishers, but that’s a league choice, not a platform requirement. Optional extras like premium research tools or draft kits exist, but a beginner needs none of them to play and win."
      )
    ),

    h2("How much time does it take?"),
    p(
      t(
        "Honestly: about 1–5 hours a week during the season, and you control where on that range you land. The floor is roughly an hour — set your lineup midweek, put in a waiver claim or two, check for injury news Sunday morning. The ceiling is a genuine hobby: reading matchup analysis, negotiating trades, and watching every game with a scoreboard open. Both versions are fun; the game doesn’t require the ceiling."
      )
    ),
    p(
      t(
        "If your life only allows the floor, build a lean routine — we wrote a whole system for "
      ),
      lk(
        "playing fantasy football as a busy parent",
        "/blog/fantasy-football-for-busy-parents"
      ),
      t(
        " that fits the entire week into about 30 focused minutes. And when you’re ready to go a level deeper, here’s "
      ),
      lk(
        "how to research fantasy football",
        "/blog/how-to-research-fantasy-football"
      ),
      t(" without losing your evenings.")
    ),

    h2("Your first-season game plan"),
    p(
      t(
        "Join a 10- or 12-team league with people you know, draft in late August, and don’t overthink it: start your studs, check injury reports before kickoff, and make one or two waiver moves a week. Most first-year managers who simply avoid starting injured or bye-week players finish mid-pack or better — the biggest beginner mistake isn’t bad strategy, it’s inattention."
      )
    ),
    p(
      t(
        "That’s also exactly the gap Scoutcast.ai covers. It’s a ~2-minute daily audio briefing on your players and teams — injuries, depth-chart moves, who’s trending — so beginners stay sharp without drowning in research or doomscrolling four apps. The NFL Fantasy Pass ($49.99/season) adds briefings built around your actual league: Tuesday (waivers), Wednesday (matchup edge), Thursday (start/sit), and Sunday morning (final call)."
      )
    ),
    p(
      lk(
        "Download Scoutcast on the App Store →",
        "https://apps.apple.com/us/app/scoutcast-ai/id6761558329"
      )
    ),
    hr(),
  ],
  faqs: [
    {
      question: "How does fantasy football work in simple terms?",
      answer:
        "You join a league of 8–12 people, draft real NFL players onto your team, and start a lineup each week. Your players’ real-game stats — yards, touchdowns, catches — convert into fantasy points, you face one leaguemate head-to-head each week, and the higher score wins. The best records make the playoffs in December, and the bracket winner is league champion.",
    },
    {
      question: "Is fantasy football free to play?",
      answer:
        "Yes. ESPN, Sleeper, and Yahoo all offer completely free leagues with drafts, live scoring, waivers, and trades included. Many private leagues choose to add an entry fee — commonly $20–$100 — that pays out to top finishers, but paying is a league decision, not a requirement.",
    },
    {
      question: "How much time does fantasy football take each week?",
      answer:
        "Plan on 1–5 hours per week during the season, depending on how deep you go. The minimum viable routine is about an hour: set your lineup midweek, make a waiver claim, and check injury news before Sunday kickoff. More competitive managers spend extra time on matchup research and trades, but it’s optional.",
    },
    {
      question: "What positions do you start in fantasy football?",
      answer:
        "A standard lineup starts 9 players: 1 quarterback, 2 running backs, 2 wide receivers, 1 tight end, 1 FLEX (an extra RB, WR, or TE of your choice), 1 kicker, and 1 team defense/special teams. You’ll also have 6–7 bench spots for reserves and often an IR slot for injured players.",
    },
    {
      question: "How do waivers work in fantasy football?",
      answer:
        "Players nobody drafted (or that managers dropped) go into a shared free-agent pool. Each week — typically processing Tuesday night into Wednesday morning — you can submit waiver claims for those players, dropping someone from your roster to make room. Claim priority usually goes to weaker teams first, or via a FAAB bidding budget, depending on league settings.",
    },
    {
      question: "What’s the difference between redraft, keeper, and dynasty leagues?",
      answer:
        "Redraft leagues reset completely each year with a fresh draft, and they’re the best format for beginners. Keeper leagues let each manager retain a few players (usually 1–3) into the next season. Dynasty leagues carry over entire rosters year after year and add rookie drafts, making them the most strategic and highest-commitment format.",
    },
  ],
};
