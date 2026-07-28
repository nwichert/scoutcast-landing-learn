export const draft = {
  slug: "what-is-faab-in-fantasy-football",
  title: "What Is FAAB in Fantasy Football? Bidding Explained",
  excerpt:
    "FAAB (Free Agent Acquisition Budget) is a season-long budget — usually $100 — you spend in blind bids to claim waiver players. Here's how to bid it well.",
  date: "2026-08-08",
  author: "Nick Wichert",
  authorRole: "Co-founder, Scoutcast.ai",
  authorUrl: "https://x.com/scoutcastAI",
  body: [
    lead(
      t(
        "FAAB stands for Free Agent Acquisition Budget: a fixed pot of fake money — typically $100 for the season — that every manager uses to bid on players on the waiver wire. When waivers process, the highest blind bid wins the player and that amount is deducted from the winner's budget. Spend it all, and you're limited to players nobody else bids on for the rest of the year."
      )
    ),
    p(
      t(
        "FAAB has become the preferred waiver system in serious leagues because it rewards judgment instead of luck or a bad record: everyone has the same budget, every bid is sealed, and how much a breakout player is worth to you is a genuine strategic decision. Here's how it compares to the other waiver systems, when claims actually process, and how much to bid."
      )
    ),

    h2("FAAB vs. rolling waivers vs. reverse standings"),
    p(
      t(
        "Every league needs a rule for what happens when two managers want the same free agent. There are three common systems:"
      )
    ),
    tbl(
      [[t("System")], [t("How it decides")], [t("The catch")]],
      [
        [
          [b("FAAB bidding")],
          [t("Highest blind bid wins; amount comes out of a season-long budget")],
          [t("Overspend early and you're broke for the stretch run")],
        ],
        [
          [b("Rolling waivers")],
          [
            t(
              "Priority list; win a claim and you drop to the bottom while everyone else moves up"
            ),
          ],
          [t("You hoard your #1 spot and agonize over when to burn it")],
        ],
        [
          [b("Reverse standings")],
          [t("Worst record gets first pick, resetting every week")],
          [t("Rewards losing; the best teams almost never land the big adds")],
        ],
      ]
    ),
    p(
      t(
        "Platform defaults vary: Sleeper defaults to rolling waivers, ESPN defaults to a weekly reverse-standings reset, and Yahoo defaults to a continual rolling list — but all three support FAAB, and both Yahoo and Sleeper use a $100 budget as the standard when it's turned on. If you're brand new to leagues and lineups in general, start with "
      ),
      lk("how fantasy football works", "/blog/how-does-fantasy-football-work"),
      t(" and come back.")
    ),

    h2("When do waivers process?"),
    p(
      t(
        "On default settings, players lock onto waivers when the week's games begin and claims process early "
      ),
      b("Wednesday morning, roughly 3–5 AM ET"),
      t(
        ", on ESPN, Yahoo, and Sleeper alike. That's why fantasy players talk about “waiver Wednesday”: you submit bids Monday or Tuesday after watching the week's games, the platform resolves every claim overnight, and Wednesday morning you wake up to find out what you won. After waivers clear, unclaimed players become free agents anyone can add instantly — first come, first served — until they lock again at kickoff."
      )
    ),
    p(
      t(
        "Two practical notes. First, commissioners can change both the processing day and the lock rules, so check your league settings rather than assuming. Second, submit your bids by Tuesday night — the most common FAAB mistake isn't a bad bid, it's no bid, because you fell asleep before setting your claims."
      )
    ),

    h2("How much should you bid?"),
    p(
      t(
        "Think in percentages of your total budget, not dollars, so the guidance works whether your league uses $100 or $1,000. The tiers below assume a $100 budget:"
      )
    ),
    tbl(
      [[t("Player type")], [t("Bid range")], [t("Example situation")]],
      [
        [
          [b("League-winner")],
          [t("40–70%+ ($40–$70+)")],
          [t("A backup RB inherits a full starting workload after an injury")],
        ],
        [
          [b("Solid weekly starter")],
          [t("15–30% ($15–$30)")],
          [t("A WR who just moved into a clear every-week role")],
        ],
        [
          [b("Useful flex or upside stash")],
          [t("5–12% ($5–$12)")],
          [t("A rookie trending up, a TE with a growing target share")],
        ],
        [
          [b("Streamer or lottery ticket")],
          [t("1–4% ($1–$4)")],
          [t("A one-week QB, defense, or kicker streamer")],
        ],
        [
          [b("Everyone else")],
          [t("$0")],
          [t("Speculative adds nobody else is likely to bid on")],
        ],
      ]
    ),
    p(
      t(
        "A few rules of thumb sharpen this. Bid odd numbers — $23 beats the crowd sitting at $20, and in most leagues ties are broken by waiver priority, so an extra dollar or two is cheap insurance. Use "
      ),
      b("$0 bids"),
      t(
        " liberally on speculative players: if nobody else bids, you get them for free and keep your powder dry. And most importantly, "
      ),
      b("don't hoard your budget past Week 10"),
      t(
        ". Unused FAAB expires worthless at season's end, and by mid-November the pool of league-changing pickups has largely dried up. A manager who ends the year with $60 unspent didn't play it safe — they left real roster upgrades on the table. For which players are actually worth bidding on each week, see our "
      ),
      lk(
        "waiver wire strategy guide",
        "/blog/fantasy-football-waiver-wire-strategy"
      ),
      t(".")
    ),

    h2("Common FAAB mistakes"),
    ul(
      [
        b("Blowing half the budget in September."),
        t(
          " Week 1 overreactions are the classic trap. Injuries guarantee that better opportunities are coming in October — keep at least 50–60% of your budget through the first month."
        ),
      ],
      [
        b("Hoarding until it's worthless."),
        t(
          " The opposite failure. FAAB is a tool for winning this season; a big unspent balance in December is just a scoreboard of missed chances."
        ),
      ],
      [
        b("Bidding on the player, not the situation."),
        t(
          " A famous name in a murky committee deserves $8, not $40. A no-name backup walking into 20 touches a game deserves $40, not $8. Pay for projected volume."
        ),
      ],
      [
        b("Round-number bids."),
        t(
          " $20, $25, and $50 are where bids cluster. $21, $27, and $53 win those players for nearly the same price."
        ),
      ],
      [
        b("Only submitting one claim."),
        t(
          " Platforms let you rank multiple conditional claims. Stack backups behind your primary target so losing one bid doesn't mean winning nothing."
        ),
      ],
      [
        b("Forgetting the add still has to start."),
        t(
          " Winning the bid is half the job — the other half is getting the player into your lineup at the right time. Our "
        ),
        lk("start/sit guide", "/blog/fantasy-football-start-sit"),
        t(" covers that call."),
      ],
    ),

    hr(),

    p(
      t(
        "FAAB is ultimately an information game: the manager who hears about the injury or depth-chart change first gets to shape their bids before the market catches up. Scoutcast.ai delivers a ~2-minute daily audio briefing built around your teams and players, so waiver-relevant news reaches you before your leaguemates open an app. The NFL Fantasy Pass ($49.99/season) adds Tuesday, Wednesday, Thursday, and Sunday briefings tailored to your specific league — including waiver targets worth bidding on and how your roster stacks up."
      )
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
      question: "What does FAAB stand for in fantasy football?",
      answer:
        "FAAB stands for Free Agent Acquisition Budget. It's a fixed pot of imaginary money — usually $100 per team for the season — that managers use to place blind bids on waiver-wire players. The highest bid wins the player, and the amount is deducted from that manager's remaining budget.",
    },
    {
      question: "How much FAAB should I bid on a player?",
      answer:
        "Think in percentages of your budget: 40–70%+ for a true league-winner (like a backup RB stepping into a full starting job), 15–30% for a solid new weekly starter, 5–12% for flex-worthy upside adds, and $1–$4 for streamers. Bid odd numbers like $21 or $27 to edge out managers clustering at round numbers, and use $0 bids on speculative players nobody else is chasing.",
    },
    {
      question: "When do waivers clear in fantasy football?",
      answer:
        "On default settings, ESPN, Yahoo, and Sleeper all process waiver claims early Wednesday morning, roughly between 3 and 5 AM ET. You submit bids after the week's games end, claims resolve overnight Tuesday into Wednesday, and unclaimed players then become first-come, first-served free agents. Commissioners can change the schedule, so check your league settings.",
    },
    {
      question: "What happens to unused FAAB at the end of the season?",
      answer:
        "It disappears — unused FAAB has no carryover value and doesn't convert into anything. That's why hoarding is a mistake: by around Week 10 the supply of impact pickups shrinks fast, so a large unspent balance late in the year usually means you passed on upgrades that could have helped you win.",
    },
    {
      question: "Can you trade FAAB in fantasy football?",
      answer:
        "In many leagues, yes. Sleeper supports including FAAB dollars in trades natively, and other platforms or league constitutions often allow it as a commissioner-managed option. It's a real strategic lever — a rebuilding team can sell budget to a contender for players — but check your league settings or ask your commissioner, since not every league permits it.",
    },
  ],
};
