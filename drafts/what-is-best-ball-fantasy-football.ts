export const draft = {
  slug: "what-is-best-ball-fantasy-football",
  title: "What Is Best Ball Fantasy Football? Format Explained",
  excerpt:
    "Best ball is draft-and-done fantasy football: you draft a roster and your highest scorers auto-count each week. No waivers, no trades, no lineup setting.",
  date: "2026-08-19",
  author: "Nick Wichert",
  authorRole: "Co-founder, Scoutcast.ai",
  authorUrl: "https://x.com/scoutcastAI",
  body: [
    lead(
      t(
        "Best ball is a fantasy football format where the draft is the entire game. You draft a roster, and every week the scoring engine automatically counts your highest-scoring players at each position. There are no waivers, no trades, and no lineups to set — once the draft ends, your season runs on autopilot."
      )
    ),
    p(
      t(
        "That one design choice changes everything. In a normal league, half the skill is in-season management: streaming defenses, timing waiver claims, benching the wrong guy at the worst time. Best ball deletes all of that. Your only job is to draft a roster deep enough and diverse enough that "
      ),
      em("someone"),
      t(
        " on it spikes every week. Searches for the format have exploded because it scratches a specific itch — people who love drafting but hate the 17-week chore that follows."
      )
    ),
    h2("How Best Ball Works"),
    ul(
      [
        b("You draft a big roster."),
        t(
          " Underdog drafts run 18 rounds; DraftKings runs 20. Snake order, usually 12 managers per draft room."
        ),
      ],
      [
        b("Your optimal lineup is set for you."),
        t(
          " After each NFL week, the platform automatically starts your highest scorers at each slot — typically QB, 2 RB, 3 WR, TE, and a flex on Underdog."
        ),
      ],
      [
        b("There are no in-season moves."),
        t(
          " No waivers, no trades, no free agency. If your quarterback tears an ACL in Week 2, your backup plan is whoever you already drafted."
        ),
      ],
      [
        b("Highest cumulative points wins."),
        t(
          " Most contests score Weeks 1–14 as a regular season, then advance the top teams through playoff rounds."
        ),
      ],
    ),
    h2("Best Ball vs. Redraft"),
    tbl(
      ["", "Best ball", "Redraft"],
      [
        ["Draft", "Everything — your season is decided here", "Important, but recoverable"],
        ["Lineups", "Set automatically, optimal every week", "You set them (and get them wrong)"],
        ["Waivers and trades", "None", "Weekly, all season"],
        ["Roster size", "18–20 players", "Usually 15–16"],
        ["Time after draft day", "Zero required", "Hours per week"],
        ["Typical stakes", "Entry-fee tournaments, huge fields", "League dues, 10–12 friends"],
      ]
    ),
    h2("Where to Play Best Ball"),
    p(
      b("Underdog Fantasy"),
      t(
        " is the gold standard. Its flagship Best Ball Mania tournament draws hundreds of thousands of entries with a multimillion-dollar prize pool, using 18-round drafts and half-PPR scoring."
      )
    ),
    p(
      b("DraftKings"),
      t(
        " runs the other major tournament scene: 20-round drafts, full-PPR scoring with yardage bonuses, and generally softer draft rooms at low stakes. "
      ),
      b("Yahoo"),
      t(" and "),
      b("Sleeper"),
      t(
        " both support best ball drafts too, though without the massive tournament prize pools. Notably, ESPN does not offer a dedicated best ball product — its new elimination-style format is "
      ),
      lk("Knockout leagues", "/blog/espn-knockout-leagues"),
      t(", which is a different animal entirely."),
    ),
    h2("Draft Strategy Basics"),
    p(
      t(
        "Because you can never replace a player, best ball rosters are built around volume and variance, not week-to-week decisions."
      )
    ),
    ul(
      [
        b("Roster construction by position."),
        t(
          " A common 18-round build is 2–3 QBs, 4–6 RBs, 7–9 WRs, and 2–3 TEs. You need enough bodies at every position to survive byes and injuries with no waiver wire."
        ),
      ],
      [
        b("Load up on wide receivers."),
        t(
          " WR is the deepest position and the best-ball scoring engine rewards spike weeks. A late-round WR who posts three 20-point games is automatically in your lineup those weeks — you never had to guess which ones."
        ),
      ],
      [
        b("Stack your quarterbacks."),
        t(
          " Pairing a QB with his own WR or TE doubles your payoff when they connect. In tournaments, stacks are how you build the ceiling weeks that win playoff rounds."
        ),
      ],
      [
        b("Chase upside late."),
        t(
          " Boring veterans with safe floors are worth less here than in redraft. In the final rounds, draft the rookie or the ambiguous-backfield lottery ticket — if he hits, the algorithm starts him for you."
        ),
      ],
    ),
    h2("Tournament vs. Season-Long Best Ball"),
    p(
      b("Tournaments"),
      t(
        " (Best Ball Mania, DraftKings Millionaire) pool enormous fields. You compete against your 12-person draft room for 14 weeks, then advance through elimination rounds toward a Week 17 final. Winning requires ceiling — correlated stacks and league-winning upside picks."
      )
    ),
    p(
      b("Season-long sit-and-gos"),
      t(
        " are single draft rooms where the highest total score over the full season wins. No advancing rounds, so steady weekly production matters more than one monster playoff week."
      )
    ),
    h2("Who Best Ball Is For"),
    p(
      t(
        "Best ball is for people who think draft day is the best day of the fantasy calendar and everything after it is homework. It’s also a great second format: keep your home league for the trash talk, and fire off a handful of best ball drafts in July and August for extra sweat with zero added workload. If you want formats that go the other direction — more chaos, more in-season drama — try a "
      ),
      lk("guillotine league", "/blog/guillotine-league-fantasy-football"),
      t(" or a "),
      lk("vampire league", "/blog/vampire-league-fantasy-football"),
      t(".")
    ),
    p(
      t(
        "One thing best ball doesn’t remove is the value of being informed on draft day — and drafts run from May to September, so news keeps mattering. That’s where Scoutcast.ai fits: a ~2-minute daily audio briefing on your teams and players, so staying current takes minutes instead of hours. During the season, the NFL Fantasy Pass ($49.99/season) adds Tuesday, Wednesday, Thursday, and Sunday briefings built around your actual leagues."
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
      q: "Is best ball the same as daily fantasy (DFS)?",
      a: "No. DFS lineups last one week or one slate; a best ball roster lasts the whole season. Best ball is season-long fantasy with the management removed — the only decision you make is the draft.",
    },
    {
      q: "Can you make trades or waiver moves in best ball?",
      a: "No. The roster you draft is the roster you finish with. Injuries and busts are covered only by the depth you drafted, which is why rosters run 18–20 players.",
    },
    {
      q: "How much does best ball cost to play?",
      a: "Entries on Underdog and DraftKings start around $3–$5, with contests running into the thousands for high stakes. Yahoo and Sleeper also offer free or low-cost best ball drafts.",
    },
    {
      q: "What scoring do best ball sites use?",
      a: "Underdog uses half-PPR (0.5 points per reception). DraftKings uses full PPR plus bonuses for 300 passing yards and 100 rushing or receiving yards. Always check scoring before you draft — it changes player values.",
    },
    {
      q: "What is Best Ball Mania?",
      a: "Underdog’s flagship tournament: hundreds of thousands of 18-round, 12-person drafts feeding a multimillion-dollar prize pool. Regular-season scoring runs Weeks 1–14, then top teams advance through playoff rounds to a Week 17 final.",
    },
  ],
};
