export const draft = {
  slug: "what-is-a-flex-in-fantasy-football",
  title: "What Is a Flex in Fantasy Football? Explained Simply",
  excerpt:
    "The flex is a lineup spot you can fill with an RB, WR, or TE — your choice each week. Here's how it works, what superflex means, and who to put in it.",
  date: "2026-08-08",
  author: "Nick Wichert",
  authorRole: "Co-founder, Scoutcast.ai",
  authorUrl: "https://x.com/scoutcastAI",
  body: [
    lead(
      t(
        "A flex in fantasy football is a starting lineup spot that can be filled by more than one position — in most leagues, a running back, wide receiver, or tight end. Unlike your RB or WR slots, which lock you into one position, the flex lets you start whichever eligible player you think will score the most points that week."
      )
    ),
    p(
      t(
        "That's the whole concept. The default lineup on ESPN, Yahoo, and Sleeper is 1 QB, 2 RB, 2 WR, 1 TE, 1 flex, 1 kicker, and 1 defense — so in a standard league, the flex is effectively your seventh skill-position starter and the one genuine weekly decision your roster forces on you. Here's how eligibility works, what the variants mean, and a simple framework for actually picking the player."
      )
    ),

    h2("What positions are flex eligible?"),
    p(
      t("In a standard flex ("),
      t("sometimes labeled "),
      b("W/R/T"),
      t(
        " on Yahoo), you can start a running back, wide receiver, or tight end. Quarterbacks, kickers, and defenses are never eligible for a normal flex spot. Some leagues tweak the eligibility list, and the slot's label tells you exactly what's allowed:"
      )
    ),
    ul(
      [
        b("FLEX or W/R/T:"),
        t(
          " RB, WR, or TE. This is the default on ESPN, Yahoo, and Sleeper and by far the most common setup."
        ),
      ],
      [
        b("W/R:"),
        t(
          " WR or RB only. Some leagues exclude tight ends to keep elite TEs from being doubled up."
        ),
      ],
      [
        b("W/T:"),
        t(" WR or TE only — rarer, usually in older or custom league formats."),
      ],
      [
        b("Superflex (Q/W/R/T):"),
        t(
          " any offensive skill player including a quarterback. More on this below, because it changes everything."
        ),
      ],
    ),
    p(
      t(
        "If you're ever unsure, tap the flex slot on your platform — it will only show you players who are eligible to fill it."
      )
    ),

    h2("What is a superflex?"),
    p(
      t("A "),
      b("superflex"),
      t(
        " is a flex spot that also accepts quarterbacks. Because QBs reliably outscore every other position — a mid-range starting quarterback usually beats a good RB or WR week over week — the correct play in a superflex league is almost always to start a second quarterback in that slot. Only start an RB or WR there if your second QB is on bye, injured, or facing a brutal matchup with no alternative."
      )
    ),
    p(
      t(
        "The bigger impact is on draft day: in superflex leagues, quarterbacks get drafted dramatically earlier because every team wants two starters. If you join a superflex league and draft it like a normal league, you'll be starting waiver-wire QBs all season. Check your league's lineup settings "
      ),
      em("before"),
      t(" you draft, not after.")
    ),

    h2("Flex strategy: who should you actually start?"),
    p(
      t(
        "The flex decision comes down to one question: which eligible player has the highest realistic point expectation this week? A few principles get you most of the way there:"
      )
    ),
    ul(
      [
        b("Volume beats talent."),
        t(
          " A running back projected for 18 touches or a receiver seeing 8–9 targets is a safer flex than a big-name player in a crowded rotation. Touches and targets are the currency of fantasy points."
        ),
      ],
      [
        b("In PPR, lean RB/WR over TE."),
        t(
          " In leagues that award a point per reception, pass-catching backs and high-target receivers pile up catches that most tight ends simply don't get. Outside the elite few, TEs are low-floor, touchdown-dependent plays — a risky profile for a flex. (New to scoring formats? See "
        ),
        lk("what PPR means", "/blog/what-is-ppr-in-fantasy-football"),
        t(".)"),
      ],
      [
        b("Think matchup, not reputation."),
        t(
          " A mediocre receiver facing the league's worst pass defense often outscores a star facing its best. Vegas lines help too: players in games with high point totals tend to score more fantasy points."
        ),
      ],
      [
        b("Floor vs. ceiling depends on the week."),
        t(
          " Favored to win your matchup? Start the safe, high-volume player. A big underdog? Take the boom-or-bust deep threat — you need the ceiling."
        ),
      ],
    ),

    h2("Common beginner mistakes"),
    ul(
      [
        b("Starting a name instead of a role."),
        t(
          " Last year's star who lost his job to a rookie is not a flex play, no matter how familiar the name feels."
        ),
      ],
      [
        b("Flexing a touchdown-dependent TE over a volume WR."),
        t(
          " If your tight end needs a touchdown to reach 10 points and your receiver gets there on catches alone, start the receiver."
        ),
      ],
      [
        b("Ignoring the Thursday trap."),
        t(
          " Flexing a Thursday player locks that spot before Sunday's injury news breaks. It's fine — just make sure you're confident, because you can't pivot."
        ),
      ],
      [
        b("Forgetting byes and game status."),
        t(
          " The single most common flex error is leaving a bye-week or inactive player in the slot. Check your lineup Sunday morning, every week."
        ),
      ],
    ),

    h2("Quick decision framework: who do I flex?"),
    tbl(
      [[t("Situation")], [t("Flex this")], [t("Why")]],
      [
        [
          [t("PPR league, need a safe floor")],
          [t("High-target WR or pass-catching RB")],
          [t("Receptions guarantee points even without a TD")],
        ],
        [
          [t("Standard scoring, close call")],
          [t("The RB with more projected touches")],
          [t("Rushing volume is the steadiest path to points")],
        ],
        [
          [t("You're a big underdog this week")],
          [t("Boom-or-bust deep threat")],
          [t("You need ceiling, not floor, to pull the upset")],
        ],
        [
          [t("Two similar players, different matchups")],
          [t("The one facing the weaker defense")],
          [t("Matchup is the tiebreaker when volume is equal")],
        ],
        [
          [t("Superflex league")],
          [t("Your second QB, almost always")],
          [t("Even average QBs outscore good RBs and WRs")],
        ],
        [
          [t("Tempted by a mid-tier TE")],
          [t("Usually the WR or RB instead")],
          [t("Non-elite TEs are touchdown-dependent and low-floor")],
        ],
      ]
    ),
    p(
      t("Still stuck on a specific pair of players? Our "),
      lk("start/sit guide", "/blog/fantasy-football-start-sit"),
      t(" walks through the tiebreakers in more depth, and our "),
      lk("2026 rankings", "/blog/fantasy-football-rankings-2026"),
      t(" are a solid baseline when two options feel identical.")
    ),

    hr(),

    p(
      t(
        "One last edge: flex decisions are won with information, and most of it breaks during the week — injury designations, depth-chart shifts, a backup suddenly trending toward a start. Scoutcast.ai turns that into a ~2-minute daily audio briefing built around your teams and players, so you hear the news before your league does. The NFL Fantasy Pass ($49.99/season) goes further with Tuesday, Wednesday, Thursday, and Sunday briefings specific to your actual league — including flex-relevant lineup calls and waiver targets."
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
      question: "What is a flex in fantasy football?",
      answer:
        "A flex is a starting lineup spot that can be filled by more than one position — in most leagues a running back, wide receiver, or tight end. It sits alongside your fixed RB, WR, and TE slots and lets you start whichever eligible player you expect to score the most points that week.",
    },
    {
      question: "Should I put a TE in the flex?",
      answer:
        "Usually not. Outside the elite tier, tight ends see fewer targets than starting receivers and rely on touchdowns for their points, which makes them low-floor flex plays — especially in PPR leagues, where high-volume WRs and pass-catching RBs rack up reception points. Flex a TE only when he has a genuinely strong target share or an exceptional matchup.",
    },
    {
      question: "What is a superflex in fantasy football?",
      answer:
        "A superflex is a flex spot that also accepts quarterbacks (RB, WR, TE, or QB). Because quarterbacks consistently outscore other positions, you should almost always start a second QB in a superflex slot, and QBs get drafted much earlier in superflex leagues as a result.",
    },
    {
      question: "Can you put a quarterback in a normal flex spot?",
      answer:
        "No. A standard flex only accepts running backs, wide receivers, and tight ends. Quarterbacks are only flex-eligible in superflex leagues, where the slot is usually labeled Q/W/R/T or SUPERFLEX. Kickers and defenses are never flex-eligible.",
    },
    {
      question: "Who should I put in my flex this week?",
      answer:
        "Start the eligible player with the best combination of volume and matchup: projected touches or targets first, opposing defense second. In PPR leagues lean toward high-target WRs and pass-catching RBs; if you're a heavy underdog, favor a high-ceiling player over a safe floor. When it's truly close, the player in the higher-scoring projected game is a good tiebreaker.",
    },
  ],
};
