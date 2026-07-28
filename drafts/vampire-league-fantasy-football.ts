export const draft = {
  slug: "vampire-league-fantasy-football",
  title: "Vampire League Fantasy Football: Rules and Strategy",
  excerpt:
    "A vampire league is fantasy football where one team drafts nothing — then steals a starter from every team it beats. Here are the rules, variants, and strategy.",
  date: "2026-08-19",
  author: "Nick Wichert",
  authorRole: "Co-founder, Scoutcast.ai",
  authorUrl: "https://x.com/scoutcastAI",
  body: [
    lead(
      t(
        "A vampire league is a fantasy football format where one manager — the vampire — doesn’t draft. The vampire builds a roster entirely from undrafted players, and every time the vampire wins a head-to-head matchup, it gets to steal a starter from the team it just beat. Everyone else spends the season trying not to get bitten."
      )
    ),
    p(
      t(
        "It’s one of the best-kept secrets in alternative fantasy formats, and the search results for it are shockingly thin — which is a shame, because the design is brilliant. The vampire starts as the worst team in the league and gets stronger with every victory, turning every matchup against it into a game with real stakes."
      )
    ),
    h2("The Rules"),
    ul(
      [
        b("One team is the vampire."),
        t(
          " The vampire sits out the draft entirely. Its roster is built from the undrafted player pool after everyone else has picked."
        ),
      ],
      [
        b("The vampire owns the waiver wire."),
        t(
          " In the classic ruleset, only the vampire can add free agents during the season. Every other team is locked into its drafted roster."
        ),
      ],
      [
        b("Wins let the vampire bite."),
        t(
          " When the vampire beats a team head-to-head, it steals one player from that team’s starting lineup — and sends back one of its own starters at the same position. It’s a forced one-for-one swap, not a pure theft."
        ),
      ],
      [
        b("Everyone else plays normally."),
        t(
          " Standard head-to-head schedule, standard scoring, standard playoffs. The vampire is just another team on the schedule — until it starts winning."
        ),
      ],
    ),
    h2("Common Variants"),
    ul(
      [
        b("Protected player."),
        t(
          " Each week, non-vampire teams designate one starter as bite-proof. This keeps a hot vampire from instantly acquiring the league’s best player."
        ),
      ],
      [
        b("One bite per victim."),
        t(
          " The vampire can’t steal from a team it has already beaten, forcing it to plan which matchups matter most."
        ),
      ],
      [
        b("Vampire drafts last."),
        t(
          " A softer version gives the vampire the final pick of every round instead of no picks at all."
        ),
      ],
      [
        b("Championship-or-nothing."),
        t(
          " Some leagues rule the vampire can only win the title by winning the championship game itself, regardless of record."
        ),
      ],
      [
        b("Shared waivers."),
        t(
          " A milder setup gives everyone waiver access but the vampire top priority every week. Purists consider the exclusive wire the whole point."
        ),
      ],
    ),
    h2("Why It’s Fun"),
    p(
      t(
        "Regular leagues have dead weeks — Week 11 against the 2–8 team nobody cares about. Vampire leagues don’t, because losing to the vampire costs you a starter. A matchup against the vampire in October can matter more than a playoff game. Meanwhile the vampire is playing a completely different sport: scraping waiver-wire gold, picking which opponents to target, and slowly assembling a monster from other people’s rosters. By December, a good vampire is genuinely scary, and the league has a shared villain. That’s narrative you can’t get from a standard 12-teamer."
      )
    ),
    h2("Commissioner Setup Tips"),
    ul(
      [
        b("Pick your vampire carefully."),
        t(
          " The role demands an experienced, hyper-active manager. A checked-out vampire kills the format; a degenerate makes it legendary. Volunteers first, or draw lots among your sickest players."
        ),
      ],
      [
        b("Expect manual enforcement."),
        t(
          " No major platform automates vampire rules. On Sleeper or ESPN, run a normal league, lock waivers for non-vampire teams, and process bites as commissioner-executed trades."
        ),
      ],
      [
        b("Write the rules down before the draft."),
        t(
          " Bite timing (immediately after the game? Tuesday?), the protected-player rule, and injury edge cases should all be settled in writing before Week 1."
        ),
      ],
      [
        b("Use 12 or more teams."),
        t(
          " A deeper league thins the undrafted pool, which keeps the vampire appropriately desperate in September."
        ),
      ],
    ),
    h2("Strategy for the Vampire"),
    p(
      t(
        "Your September roster will be bad — that’s the design. Attack volume: stream every favorable matchup, churn the wire daily, and treat the early schedule as a scouting mission. When you do win, bite for keeps: steal the best player at your weakest position, not the biggest name. And target teams, not weeks — if your league plays the one-bite-per-victim variant, a win over the league’s stacked contender is worth more than two wins over bottom-feeders. Every waiver-wire breakout of the season belongs to you alone, so know the "
      ),
      lk("waiver wire", "/blog/fantasy-football-waiver-wire-strategy"),
      t(" cold — it’s your entire draft, held every single day.")
    ),
    h2("Strategy for Everyone Else"),
    p(
      t(
        "Beat the vampire early, while its roster is still scraps — an 0–4 vampire is harmless, a 5–2 vampire is a problem. When your matchup comes up, play your floor: this is not the week for boom-or-bust fliers, because losing costs you a starter. Use your protection wisely if your league allows it — protect the player the vampire needs, which isn’t always your best player. And draft depth at RB and WR, because a bite hurts far less when you have a real replacement behind the guy you lose."
      )
    ),
    p(
      t(
        "Vampire leagues punish managers who tune out, on both sides of the bite. Scoutcast.ai keeps you current in about two minutes a day — an AI audio briefing on your players, your matchup, and the news that moves lineups. The NFL Fantasy Pass ($49.99/season) adds Tuesday, Wednesday, Thursday, and Sunday briefings built around your actual leagues, which is exactly the cadence a vampire grinding the wire needs."
      )
    ),
    p(
      t("If you like formats with a body count, a "),
      lk("guillotine league", "/blog/guillotine-league-fantasy-football"),
      t(
        " is the vampire league’s bloodier cousin — and if you’d rather delete in-season management entirely, "
      ),
      lk("best ball", "/blog/what-is-best-ball-fantasy-football"),
      t(" is the opposite extreme.")
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
      q: "Does the vampire steal a player outright?",
      a: "No — in the standard ruleset it’s a forced swap. The vampire takes one player from the beaten team’s starting lineup and sends back one of its own starters at the same position, so the victim is downgraded rather than left with a hole.",
    },
    {
      q: "Can the vampire win the league?",
      a: "Yes, and a good one often contends by December. Some leagues add a twist where the vampire can only claim the title by winning the championship game itself, no matter its seed or record.",
    },
    {
      q: "What platform supports vampire leagues?",
      a: "None natively. Commissioners run them on Sleeper, ESPN, or Yahoo by locking waivers for non-vampire teams and processing bites manually as trades. It takes an engaged commissioner, but the overhead is one transaction per vampire win.",
    },
    {
      q: "Is being the vampire fun or miserable?",
      a: "Fun — if you love waiver wires and scheming. You start with the league’s worst roster and exclusive free agency, and every win upgrades you at an opponent’s expense. Managers who only enjoy drafting should not volunteer.",
    },
  ],
};
