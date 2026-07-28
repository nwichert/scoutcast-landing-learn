export const draft = {
  slug: "what-is-ppr-in-fantasy-football",
  title: "What Is PPR in Fantasy Football? PPR Meaning Explained",
  excerpt:
    "PPR means ‘point per reception’: every catch is worth 1 fantasy point (0.5 in half PPR, 0 in standard). Here’s how it changes player value and your draft.",
  date: "2026-08-08",
  author: "Nick Wichert",
  authorRole: "Co-founder, Scoutcast.ai",
  authorUrl: "https://x.com/scoutcastAI",
  body: [
    lead(
      t(
        "PPR stands for ‘point per reception.’ In a PPR fantasy football league, every catch a player makes is worth one fantasy point on top of whatever yardage and touchdown points he earns. Half PPR awards 0.5 points per catch, and standard (non-PPR) scoring awards nothing for the catch itself. That one setting is the single biggest difference between fantasy leagues, because it decides how valuable pass-catchers are relative to pure runners."
      )
    ),
    p(
      t(
        "If a wide receiver catches 8 passes for 80 yards, he scores 8 points in standard, 12 points in half PPR, and 16 points in full PPR — double the standard total, from the exact same real-life game. That’s why the first question to ask about any fantasy league is not ‘who should I draft?’ but ‘what’s the scoring?’"
      )
    ),

    h2("PPR vs. half PPR vs. standard: the comparison"),
    p(
      t(
        "All three formats use the same base scoring — typically 1 point per 10 rushing or receiving yards, 1 point per 25 passing yards, 6 points for a rushing or receiving touchdown, and 4 for a passing touchdown. The only difference is what a reception is worth:"
      )
    ),
    tbl(
      [[t("Format")], [t("Points per catch")], [t("What it rewards")]],
      [
        [
          [b("Full PPR")],
          [t("1.0")],
          [t("Volume pass-catchers; possession receivers and receiving backs")],
        ],
        [
          [b("Half PPR")],
          [t("0.5")],
          [t("A middle ground; catches matter but yards and TDs still dominate")],
        ],
        [
          [b("Standard (non-PPR)")],
          [t("0")],
          [t("Yardage and touchdowns only; favors workhorse runners")],
        ],
      ]
    ),
    p(
      t(
        "The gap compounds over a season. A slot receiver who catches 100 passes gets a 100-point bonus in full PPR — roughly six extra points per week — while a between-the-tackles running back with 20 catches gets almost nothing. Same players, wildly different fantasy value."
      )
    ),

    h2("How PPR changes player value"),
    p(
      t(
        "PPR doesn’t change how anyone plays football; it changes which real-world skills your league pays for. The biggest movers:"
      )
    ),
    ul(
      [
        b("Pass-catching running backs jump up."),
        t(
          " A back who catches 60–80 passes a year can outscore a ‘better’ runner who never sees a target. In full PPR, satellite and third-down backs become legitimate weekly starters instead of desperation plays."
        ),
      ],
      [
        b("Slot receivers and target hogs get a floor."),
        t(
          " High-volume receivers who catch 7–10 short passes a game score respectably even without a touchdown. In standard, those same games can be nearly worthless."
        ),
      ],
      [
        b("Big-play, low-volume players lose ground."),
        t(
          " A deep threat who catches 3 passes for 90 yards is fine in standard but falls behind volume receivers in PPR. Touchdown-dependent players get riskier relative to target-dependent ones."
        ),
      ],
      [
        b("Elite tight ends gain separation."),
        t(
          " The few tight ends who see 100+ targets pull even further ahead of the mid-tier at the position, which changes when the position is worth drafting."
        ),
      ],
    ),

    h2("Which platforms default to which scoring"),
    p(
      t(
        "If you joined a league and never touched the settings, the platform default is almost certainly what you’re playing with:"
      )
    ),
    tbl(
      [[t("Platform")], [t("Default scoring")]],
      [
        [[b("ESPN")], [t("Full PPR (1.0) — the default since 2019")]],
        [[b("Sleeper")], [t("Full PPR (1.0)")]],
        [[b("Yahoo")], [t("Half PPR (0.5)")]],
        [
          [b("NFL Fantasy")],
          [
            t(
              "Historically full PPR; NFL.com leagues are migrating to ESPN’s platform"
            ),
          ],
        ],
      ]
    ),
    p(
      t(
        "Yahoo confirms the 0.5-per-reception default in its "
      ),
      lk(
        "official league settings documentation",
        "https://help.yahoo.com/kb/default-league-settings-scoring-stats-fantasy-football-sln6489.html"
      ),
      t(
        ". But defaults are only defaults — any commissioner can change the reception value before the season starts, so never assume."
      )
    ),

    h2("How to check your league’s scoring"),
    p(
      t(
        "It takes about 30 seconds, and it’s the highest-leverage half-minute of your draft prep:"
      )
    ),
    ul(
      [
        b("ESPN:"),
        t(
          " open your league, go to League → Settings → Scoring, and look for ‘Each reception’ under receiving."
        ),
      ],
      [
        b("Sleeper:"),
        t(
          " tap your league, then Settings (gear icon) → Scoring Settings, and check the ‘Reception’ value."
        ),
      ],
      [
        b("Yahoo:"),
        t(
          " from your league page, go to League → Settings and scroll to the scoring section; ‘Receptions’ shows the per-catch value."
        ),
      ],
    ),
    p(
      t(
        "While you’re in there, also glance at passing touchdowns (4 vs. 6 points) and whether the league uses bonuses like points per first down — those quietly reshape value too."
      )
    ),

    h2("How PPR changes your draft strategy"),
    p(
      t(
        "In full PPR, receivers and pass-catching backs climb the board, so wide receiver–heavy starts and Zero RB builds get much more viable — you can fill running back later with reception-driven backs who have a stable weekly floor. In standard, workhorse running backs who dominate carries and goal-line work are scarcer and more valuable, so grabbing two early tends to be the safer plan. Half PPR sits between the two: still respect the elite backs, but don’t ignore target volume."
      )
    ),
    p(
      t("Whatever the format, draft from rankings built for it. Our "),
      lk("2026 fantasy football rankings", "/blog/fantasy-football-rankings-2026"),
      t(
        " break out PPR value, and it’s worth understanding "
      ),
      lk("how ADP works", "/blog/what-is-adp-fantasy-football"),
      t(
        " — a player’s average draft position on a full-PPR platform like Sleeper can be a round different from his cost in a half-PPR Yahoo league. For the bigger picture on roster construction, see our "
      ),
      lk(
        "2026 draft strategy guide",
        "/blog/fantasy-football-draft-strategy-2026"
      ),
      t(".")
    ),

    h2("The bottom line"),
    p(
      t(
        "PPR is just one number — 1, 0.5, or 0 points per catch — but it quietly decides which players win you your league. Check your league’s setting before you rank a single player, tilt toward target volume as the reception value climbs, and remember that a ‘bad’ real-life game with 9 catches can be a great fantasy day in PPR."
      )
    ),
    p(
      t(
        "And if keeping up with target shares, depth charts, and injury news sounds like a lot — that’s the problem Scoutcast.ai exists to solve. It’s a ~2-minute daily audio briefing on your teams and players, so beginners stay current without drowning in research. The NFL Fantasy Pass ($49.99/season) goes further with league-specific briefings on Tuesday (waivers), Wednesday (matchup edge), Thursday (start/sit), and Sunday morning (final call)."
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
      question: "What does PPR mean in fantasy football?",
      answer:
        "PPR stands for ‘point per reception.’ In PPR leagues, a player earns one fantasy point for every catch he makes, in addition to standard points for yardage and touchdowns. Half PPR awards 0.5 points per catch, and standard (non-PPR) scoring awards nothing for receptions.",
    },
    {
      question: "What is the difference between PPR, half PPR, and standard scoring?",
      answer:
        "The only difference is the value of a reception: 1 point in full PPR, 0.5 in half PPR, and 0 in standard. All three formats typically score yardage and touchdowns the same way — about 1 point per 10 rushing or receiving yards, 1 per 25 passing yards, 6 for rushing or receiving touchdowns, and 4 for passing touchdowns.",
    },
    {
      question: "Is PPR or standard scoring better for beginners?",
      answer:
        "Most beginners should play PPR or half PPR, because it’s what the major platforms default to — ESPN and Sleeper default to full PPR and Yahoo defaults to half PPR — which means most rankings, ADP data, and advice you’ll find online assume reception points. PPR also produces higher, steadier weekly scores, which makes early lineup decisions less punishing.",
    },
    {
      question: "Which fantasy platforms default to PPR scoring?",
      answer:
        "ESPN has defaulted new leagues to full PPR (1 point per reception) since 2019, and Sleeper also defaults to full PPR. Yahoo defaults to half PPR (0.5 points per reception). Commissioners can change the setting on any platform, so always check your specific league’s scoring page before drafting.",
    },
    {
      question: "Who gains the most value in PPR leagues?",
      answer:
        "Pass-catching running backs and high-target slot receivers gain the most, because every catch adds a point regardless of yardage. A back who catches 60–80 passes or a receiver who sees 8–10 targets a game becomes far more valuable in PPR, while touchdown-dependent deep threats and pure between-the-tackles runners lose relative value.",
    },
  ],
};
