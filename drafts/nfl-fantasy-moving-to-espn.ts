export const draft = {
  slug: "nfl-fantasy-moving-to-espn",
  title: "NFL Fantasy Is Shutting Down: Move Your League to ESPN",
  excerpt:
    "The NFL shut down season-long NFL Fantasy. ESPN is now the official fantasy game, with a league import tool at espn.com/importnfl. Here's how it works.",
  date: "2026-07-23",
  author: "Nick Wichert",
  authorRole: "Co-founder, Scoutcast.ai",
  authorUrl: "https://x.com/scoutcastAI",
  body: [
    lead(
      t(
        "Yes, NFL Fantasy is shutting down. Beginning with the 2026 season, the NFL no longer operates its season-long fantasy football game, and ESPN is now the official fantasy game of the NFL. If you're a commissioner, you migrate your league at "
      ),
      lk("espn.com/importnfl", "https://espn.com/importnfl"),
      t(
        " — league settings, configuration, and league history come with it, and keeper leagues bring rosters too. There's no published deadline as of July 2026, but you'll want it done well before your draft."
      )
    ),
    p(
      t(
        "The announcement came on July 16, 2026, via a joint FAQ from ESPN and the NFL. It's the final step of the deal struck in 2025, in which ESPN took over NFL Network and the NFL's fantasy assets while the league took an equity stake in ESPN. The NFL Fantasy app and site are winding down as a season-long platform; ESPN built a dedicated migration flow so existing leagues don't have to start from zero."
      )
    ),
    p(
      t(
        "Here's the whole process, what actually transfers, and what to do if you'd rather use this moment to switch to Sleeper or Yahoo instead. Where the official documentation is vague, I say so — details may change, so treat everything here as accurate as of July 2026."
      )
    ),

    h2("Step 1: Know which email your NFL Fantasy account uses"),
    p(
      t(
        "The entire migration keys off email matching. Before you touch anything, confirm the email address on your NFL Fantasy account — it's how ESPN finds your leagues. If you use the same email for ESPN (or don't have an ESPN account yet and create one with that email), the import is nearly automatic."
      )
    ),
    p(
      t(
        "If your ESPN account uses a different email, you're not stuck. The flow lets you enter your NFL Fantasy email, and ESPN sends a secure one-time link to that address. Click it, verify you own the account, and your NFL leagues get connected to your ESPN login. This is the step most likely to trip up league members who signed up for NFL Fantasy with an old email — check that you can still receive mail there."
      )
    ),

    h2("Step 2: Run the import at espn.com/importnfl"),
    p(
      t("Go to "),
      lk("espn.com/importnfl", "https://espn.com/importnfl"),
      t(
        ", or open the ESPN Fantasy app — the migration experience lives in both places, plus ESPN.com/Fantasy. Once your email is matched, ESPN shows you every eligible NFL Fantasy league tied to your account. Select the leagues you want to bring over."
      )
    ),
    p(
      t(
        "Any manager can start this process for their own teams, but the league itself needs the commissioner. ESPN notifies commissioners when members of their league begin migrating, and commissioners are walked through league setup and activation."
      )
    ),

    h2("Step 3: Commissioners activate and verify the league"),
    p(
      t(
        "Activation is the commissioner's job. Once you activate, the league exists on ESPN Fantasy and members can join, manage rosters, and get ready for the season. Before you tell everyone it's done, verify the details ESPN imported:"
      )
    ),
    ul(
      [
        b("Scoring settings."),
        t(
          " ESPN says settings and configuration transfer \"where available,\" which means anything NFL Fantasy supported that ESPN structures differently could land as an approximation. Check PPR values, defensive scoring, and any custom point rules line by line."
        ),
      ],
      [
        b("Roster slots and divisions."),
        t(
          " Confirm bench size, IR slots, FLEX configuration, and division assignments match what your league actually ran."
        ),
      ],
      [
        b("Draft date and type."),
        t(
          " The import recreates your league, not your calendar. Set your draft date, time, and format (snake, auction) fresh on ESPN."
        ),
      ],
      [
        b("Keeper rules."),
        t(
          " If you run keepers, your team rosters migrate with the league — but re-confirm the keeper count and any round-cost rules in ESPN's settings, since keeper mechanics differ between platforms."
        ),
      ]
    ),

    h2("Step 4: League members join the migrated league"),
    p(
      t(
        "After the commissioner activates, each member goes through the same email-matching flow — same email, instant access; different email, the one-time verification link. Then they claim their team in the migrated league. Members don't need to do anything before the commissioner activates, but the season goes smoother if everyone sorts out their ESPN login now instead of the week of the draft."
      )
    ),

    h2("What transfers and what doesn't"),
    p(
      t(
        "ESPN's own language is \"league settings, league configuration details, and league history, where available.\" The NFL's support FAQ adds that migrated leagues show past standings and league record history, and that keeper leagues bring team rosters. Here's the honest breakdown as of July 2026:"
      )
    ),
    tbl(
      [[t("Item")], [t("Transfers?")], [t("Notes")]],
      [
        [
          [t("League settings & configuration")],
          [t("Yes")],
          [t("\"Where available\" — verify scoring line by line")],
        ],
        [
          [t("League history (standings, records)")],
          [t("Yes")],
          [t("Past champions and record history carry over")],
        ],
        [
          [t("Rosters (keeper leagues)")],
          [t("Yes")],
          [t("Keeper league rosters migrate with the league")],
        ],
        [
          [t("Rosters (redraft leagues)")],
          [t("No")],
          [t("You were drafting fresh anyway — nothing lost")],
        ],
        [
          [t("Draft date & schedule")],
          [t("No")],
          [t("Set your draft up fresh on ESPN")],
        ],
        [
          [t("League chat & message boards")],
          [t("Not confirmed")],
          [t("Assume gone — screenshot anything you care about")],
        ],
        [
          [t("Custom team logos & avatars")],
          [t("Not confirmed")],
          [t("Plan to re-upload on ESPN")],
        ],
        [
          [t("NFL Fantasy account itself")],
          [t("No")],
          [t("You'll use an ESPN account going forward")],
        ],
      ]
    ),
    p(
      t(
        "The safe move: before your league disappears from the NFL platform, screenshot your all-time standings, trophy history, and anything sentimental. Migration is designed to preserve history, but \"where available\" is doing real work in that sentence, and nobody has published an exact list of what falls outside it."
      )
    ),

    h2("If you're not the commissioner"),
    p(
      t(
        "Three things, in order. First, make sure you know which email your NFL Fantasy account uses and that you can receive mail there. Second, create or dust off your ESPN account — ideally on that same email. Third, nudge your commissioner. The league doesn't move until they activate it, and every year some league dies not from a platform shutdown but from a commissioner who didn't get around to it until Labor Day weekend."
      )
    ),
    p(
      t(
        "If your commissioner has genuinely gone dark, your options are to rally the league around a new commissioner on a fresh ESPN league, or to rebuild elsewhere — which brings up the real question."
      )
    ),

    h2("If you don't want ESPN: Sleeper and Yahoo"),
    p(
      t(
        "The migration tool only goes one place. But a forced move is also a free decision point — the switching cost you've been avoiding for years just got paid for you. If your league has been curious about other platforms, this is the cheapest moment you'll ever have to switch."
      )
    ),
    p(
      b("Sleeper"),
      t(
        " is the strongest alternative for most leagues. Modern interface, no ads, and built-in league chat that's genuinely better than anything ESPN or Yahoo offers. The trade-off versus ESPN: no automated import, so your commissioner recreates settings by hand and your NFL Fantasy history stays behind. For leagues where the group chat is half the fun, it's worth it."
      )
    ),
    p(
      b("Yahoo Fantasy"),
      t(
        " is the veteran option — 25+ years of refinement, reliable live scoring, and a strong Best Ball product. Same catch: manual setup, no history import. Yahoo makes sense if your league skews toward managers who already live in the Yahoo ecosystem."
      )
    ),
    p(
      t(
        "The honest summary: ESPN is the only destination where your league history survives. Sleeper and Yahoo are both good platforms that require starting the record books over. I compared all three in more depth in "
      ),
      lk("the best fantasy football apps for 2026", "/blog/best-fantasy-football-apps-2026"),
      t(".")
    ),

    h2("Is there a deadline?"),
    p(
      t(
        "As of July 2026, neither ESPN nor the NFL has published a hard migration deadline. The practical deadline is your draft: the league needs to be activated, settings verified, and every member joined before you're on the clock. Draft season concentrates in late August — if you're reading this in July, you have time; if it's mid-August, do it today. ("
      ),
      lk("Here's the full preseason timeline", "/blog/when-does-fantasy-football-start"),
      t(" if you're planning backwards from kickoff.)")
    ),

    h2("While you're rebuilding your stack"),
    p(
      t(
        "A platform move is when most people rethink the rest of their fantasy setup — the group re-forms, the apps get reinstalled, and you notice which tools you actually used last season and which you just kept around."
      )
    ),
    p(
      t(
        "One thing I'd put on the list: Scoutcast.ai, which we built for exactly the person going through this migration — someone who cares about their league but doesn't have an hour a day for research. It generates a personalized audio briefing, about two minutes, covering the teams and leagues you follow. It works alongside any platform, so it doesn't matter whether your league lands on ESPN, Sleeper, or Yahoo."
      )
    ),
    p(
      t("For fantasy specifically, the "),
      b("NFL Fantasy Pass ($49.99/season)"),
      t(
        " adds per-league analyst briefings on Tuesday, Wednesday, Thursday, and Sunday — waiver targets after Monday night, injury and practice-report reads midweek, and a final call Sunday morning, all tailored to your actual roster. If you're heading into a draft on a new platform, it pairs well with "
      ),
      lk("a solid draft strategy", "/blog/fantasy-football-draft-strategy-2026"),
      t(".")
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
      question: "Is NFL Fantasy shutting down?",
      answer:
        "Yes. Beginning with the 2026 season, the NFL no longer operates a season-long fantasy football game. ESPN is now the official fantasy game of the NFL, and existing NFL Fantasy leagues can migrate to ESPN Fantasy through a dedicated import tool at espn.com/importnfl.",
    },
    {
      question: "Do I lose my league history when I move to ESPN?",
      answer:
        "Mostly no. The migration preserves league settings, configuration details, and league history — including past standings and record history — where available. Keeper leagues also bring team rosters. Things like league chat threads and custom team logos are not confirmed to transfer, so screenshot anything sentimental before the NFL platform winds down.",
    },
    {
      question: "Is there a deadline to migrate my NFL Fantasy league to ESPN?",
      answer:
        "As of July 2026, no official deadline has been published. The practical deadline is your draft: the commissioner needs to activate the migrated league and every member needs to join before draft day, so aim to finish well before late August.",
    },
    {
      question: "Is ESPN Fantasy Football free?",
      answer:
        "Yes. Standard ESPN Fantasy Football leagues are free to create, join, and play as of July 2026, on both ESPN.com and the ESPN Fantasy app. Migrating an NFL Fantasy league to ESPN does not cost anything.",
    },
    {
      question: "Can I move my NFL Fantasy league to Sleeper or Yahoo instead?",
      answer:
        "You can, but there's no automated import — the migration tool only moves leagues to ESPN. On Sleeper or Yahoo, your commissioner recreates the league settings manually and your NFL Fantasy history stays behind. Many leagues still choose Sleeper for its modern, chat-first experience; ESPN is the only option that preserves league history.",
    },
  ],
};
