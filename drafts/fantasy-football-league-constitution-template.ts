export const draft = {
  slug: "fantasy-football-league-constitution-template",
  title: "Fantasy Football League Constitution Template (Full Guide)",
  excerpt:
    "A complete fantasy football league constitution template — dues, FAAB, trade vetoes, punishments, commissioner powers — plus why each rule exists.",
  date: "2026-08-05",
  author: "Nick Wichert",
  authorRole: "Co-founder, Scoutcast.ai",
  authorUrl: "https://x.com/scoutcastAI",
  body: [
    lead(
      t(
        "Every dead fantasy league died the same way. A trade got vetoed out of spite, or a 2–8 team stopped setting lineups in December, or the commissioner changed a rule mid-season and half the league called it rigged. None of those are talent problems — they’re governance problems, and every one of them is preventable with a document your league ratifies before the draft. That document is the league constitution: the written rules that decide arguments before they happen. Below is a complete, copy-ready template — not a PDF download — with a short note on why each rule exists, so your league can argue about it once and never again."
      )
    ),
    p(
      t(
        "Copy the articles below into a shared doc, fill in the bracketed values, and put the whole thing to a league vote before draft day. Everything here is a starting point — the numbers matter less than the fact that they’re written down "
      ),
      em("before"),
      t(" anyone knows whether they’re contending or tanking.")
    ),
    h2("Article I — League structure"),
    ul(
      [b("Name and format."), t(" The [League Name] is a [12]-team [redraft / keeper / dynasty] league using [PPR / half-PPR / standard] scoring, hosted on [platform].")],
      [b("Season."), t(" The regular season runs Weeks 1–[14]. Playoffs run Weeks [15–17] with [6] teams seeded by record, then total points.")],
      [b("Membership."), t(" A roster spot belongs to a person, not a seat. Members may not share teams or transfer them without a majority league vote.")],
      [b("Calendar."), t(" Draft date, keeper deadline, trade deadline, and dues deadline are published by [August 1] each year.")]
    ),
    p(
      em("Why this rule exists: "),
      t(
        "most league fights trace back to something nobody defined. Writing down format, playoff seeding, and who actually owns each team removes the ambiguity that fuels them — tiebreakers especially belong in August, not Week 15."
      )
    ),
    h2("Article II — Dues, payouts, and escrow"),
    ul(
      [b("Entry fee."), t(" Dues are $[X] per team, payable to the league treasurer by [two weeks before the draft]. No payment, no draft pick.")],
      [b("Escrow."), t(" All dues are collected in full before Week 1 and held by the [commissioner / treasurer / league payment app]. Payouts are never fronted from future promises.")],
      [b("Payout structure."), t(" 1st place: [60]% of the pot. 2nd: [25]%. 3rd: [10]%. Highest regular-season points: [5]%.")],
      [b("Points-scored payout."), t(" The regular-season points payout exists so a team that misses the playoffs on tiebreakers still has something to play for.")]
    ),
    p(
      em("Why this rule exists: "),
      t(
        "chasing money in January ruins friendships. Collecting everything up front means the loser has already paid and the winner never has to invoice anybody. The single biggest source of league drama isn’t trades; it’s a champion trying to collect from a guy who went 3–11 and stopped answering texts."
      )
    ),
    h2("Article III — Rosters and scoring"),
    ul(
      [b("Starting lineup."), t(" [1 QB, 2 RB, 2 WR, 1 TE, 1 FLEX, 1 DST, 1 K], with [6] bench spots and [2] IR slots.")],
      [b("Scoring."), t(" Scoring settings are locked on the platform before the draft and attached to this constitution as an appendix.")],
      [b("Lineup responsibility."), t(" Every member is responsible for setting a legal, active lineup every week of the season — including after elimination.")],
      [b("Stat corrections."), t(" Official platform stat corrections stand, even when they flip a matchup. No re-litigating games.")]
    ),
    p(
      em("Why this rule exists: "),
      t(
        "locking scoring before the draft prevents the classic mid-season discovery that a setting was “wrong” — conveniently noticed by the team it hurt. And the lineup clause is the foundation for Article VIII: an eliminated team starting two players on bye can decide a playoff race, so a real lineup is a duty owed to the whole league."
      )
    ),
    h2("Article IV — Waivers and FAAB"),
    ul(
      [b("FAAB budget."), t(" Each team receives $[100] in free-agent acquisition budget for the season. No in-season top-ups, no trading FAAB [unless the league votes to allow it].")],
      [b("Processing."), t(" Waivers process [Wednesday] overnight. Blind bids; ties broken by [reverse standings].")],
      [b("Zero-dollar bids."), t(" Teams that exhaust their budget may still place $0 bids and add free agents after waivers clear.")],
      [b("No collusive bidding."), t(" Coordinating bids with another team to steer a player is a collusion offense under Article VII.")]
    ),
    p(
      em("Why this rule exists: "),
      t(
        "FAAB replaces waiver-priority arguments with a market. Everyone gets the same budget, every bid is a real decision, and nobody can claim the system favored whoever held first priority the week a starting running back hit waivers."
      )
    ),
    h2("Article V — Trades, vetoes, and the deadline"),
    ul(
      [b("Deadline."), t(" The trade deadline is [Tuesday of Week 11] at [11:59 PM ET]. No exceptions, including pending trades.")],
      [b("Review window."), t(" Accepted trades process after a [24-hour] review window.")],
      [b("Veto standard."), t(" Trades may be reversed only on evidence of collusion — never because the league thinks one side “won” the trade. Lopsided is legal; dishonest is not.")],
      [b("Veto mechanism."), t(" A veto requires [a majority vote of non-involved members / a ruling by a three-member ethics panel], recorded in the league chat with a stated reason.")],
      [b("Future considerations."), t(" Side agreements outside the platform (cash, dinner, “I’ll owe you one”) are unenforceable and treated as collusion evidence.")]
    ),
    p(
      em("Why this rule exists: "),
      t(
        "veto abuse kills more leagues than bad trades do. Managers are entitled to make bad deals; they are not entitled to make fake ones. Writing the standard as “collusion only” protects trade markets from the loudest guy in the chat, and the deadline stops contenders from renting players from checked-out teams in Week 14."
      )
    ),
    h2("Article VI — Keeper rules [if applicable]"),
    ul(
      [b("Keeper count."), t(" Each team may keep [0–3] players year over year.")],
      [b("Cost."), t(" A kept player costs [a draft pick one round earlier than where he was drafted / his auction value plus $5]. Undrafted players cost a [10th]-round pick.")],
      [b("Declaration deadline."), t(" Keepers must be declared by [two weeks before the draft]. Late declarations forfeit keeper rights for the year.")],
      [b("Redraft leagues."), t(" Strike this article and note its removal in the amendment log.")]
    ),
    p(
      em("Why this rule exists: "),
      t(
        "keeper ambiguity is an August time bomb. Escalating costs stop one lucky waiver pickup from being a free first-rounder forever, and a hard declaration deadline means nobody drafts around information other teams don’t have."
      )
    ),
    h2("Article VII — Tanking and collusion"),
    ul(
      [b("Good-faith standard."), t(" Every member must manage their team to win each week’s matchup, all season.")],
      [b("Tanking."), t(" Deliberately benching healthy starters, dropping useful players for nothing, or throwing matchups to affect standings or draft position is prohibited.")],
      [b("Collusion."), t(" Any agreement between teams to move players or bids for shared benefit — including “loan” trades — is collusion.")],
      [b("Penalties."), t(" First offense: formal warning and reversal of the move where possible. Second offense: loss of [next year’s first-round pick / eligibility for payouts]. Egregious cases: expulsion by [two-thirds] vote, with dues forfeited.")]
    ),
    p(
      em("Why this rule exists: "),
      t(
        "one tanking team distorts every playoff race it touches — the contenders who play the tanker in December get free wins the rest of the field never got. Naming the offense and the penalty in writing lets the commissioner act on it without the ruling looking personal."
      )
    ),
    h2("Article VIII — Punishments and enforcement"),
    ul(
      [b("Last-place punishment."), t(" The last-place finisher must complete [the punishment], as ratified by league vote before the draft, no later than [next year’s draft day].")],
      [b("Proof."), t(" Completion requires [photo / video] evidence posted to the league chat.")],
      [b("Punishment escrow."), t(" Each member posts a $[25] punishment deposit with their dues, refunded on completion. Skipping the punishment forfeits the deposit and next year’s roster spot.")],
      [b("No-shows and quitters."), t(" A member who abandons their team mid-season (two consecutive weeks with an illegal or unset lineup, unresponsive to the commissioner) forfeits dues, is replaced at the commissioner’s discretion, and automatically inherits the last-place punishment.")],
      [b("Buyout."), t(" The league may set a pre-agreed cash buyout of $[X] — decided now, not after someone loses.")]
    ),
    p(
      em("Why this rule exists: "),
      t(
        "punishments written after the season are negotiations; punishments written before the season are contracts. Every clause here — proof, deposit, buyout — exists because a loser somewhere developed amnesia in January. The quitter clause matters most: the member who abandons ship in November does more damage than the one who finishes last trying. If you still need the punishment itself, we ranked "
      ),
      lk("46 fantasy football punishment ideas by severity", "/blog/fantasy-football-punishment-ideas"),
      t(" — pick one and ratify it with this document.")
    ),
    h2("Article IX — Commissioner powers and limits"),
    ul(
      [b("Duties."), t(" The commissioner maintains league settings, collects and disburses funds, publishes the calendar, and rules on situations this constitution doesn’t cover.")],
      [b("Limits."), t(" The commissioner may not change scoring, rosters, payouts, or playoff format mid-season, and may not rule on any matter involving their own team — those go to [a designated co-commissioner / an ethics panel of three uninvolved members].")],
      [b("Transparency."), t(" Every commissioner ruling is posted in the league chat with a reason within [48 hours].")],
      [b("Removal."), t(" A commissioner may be replaced mid-season by a [two-thirds] vote of all other members.")]
    ),
    p(
      em("Why this rule exists: "),
      t(
        "a commissioner with unlimited power is a coup waiting to happen; a commissioner with no power can’t stop a tanker. The recusal clause is the one leagues skip and regret — the first time a commissioner rules on their own trade, trust never fully comes back."
      )
    ),
    h2("Article X — Dispute resolution"),
    ul(
      [b("Step one."), t(" Disputes go to the commissioner in writing within [48 hours] of the triggering event.")],
      [b("Step two."), t(" If the commissioner is involved or the ruling is contested, a [three-member] panel of uninvolved managers decides by majority vote.")],
      [b("Finality."), t(" Panel rulings are final for the season. Losing parties may propose a rule change under Article XI for future seasons.")]
    ),
    p(
      em("Why this rule exists: "),
      t(
        "the 48-hour window stops six-week-old grievances from resurfacing during the playoffs, and finality means the league argues about rules once, then moves on."
      )
    ),
    h2("Article XI — Amendments"),
    ul(
      [b("Proposal window."), t(" Rule changes may be proposed by any member during the offseason window ([end of season through two weeks before the draft]).")],
      [b("Vote."), t(" Amendments pass with a [two-thirds] majority and take effect the following season.")],
      [b("Mid-season freeze."), t(" No rule affecting scoring, rosters, payouts, or playoffs may change during the season — the only exception is a unanimous vote.")],
      [b("The log."), t(" Every passed amendment is dated and appended to this document.")]
    ),
    p(
      em("Why this rule exists: "),
      t(
        "mid-season rule changes always help someone specific, and everyone knows exactly who. The supermajority keeps a 7–5 voting bloc from rewriting the league, and the unanimous-consent exception still lets you fix a genuine emergency."
      )
    ),
    hr(),
    h2("How to adopt your constitution"),
    p(
      t("Don’t email this out and call it ratified. Do it properly, once:")
    ),
    ul(
      [b("Fill in the brackets first."), t(" Circulate a completed draft — real numbers, real deadlines — two weeks before the draft, so people vote on specifics, not vibes.")],
      [b("Vote before draft day."), t(" Ratify by [two-thirds] vote while everyone still believes they’re winning the title. Nobody negotiates in good faith after Week 10. If you’re not sure how much runway you have, check "), lk("when fantasy football starts", "/blog/when-does-fantasy-football-start"), t(" and work backward.")],
      [b("Get affirmative agreement."), t(" A thumbs-up emoji from every member in the league chat is your signature page. Silence is not consent — chase the stragglers.")],
      [b("Pin it where the league lives."), t(" League chat, group doc, or your platform’s league notes. A constitution nobody can find governs nothing.")],
      [b("Revisit it every offseason."), t(" Open the amendment window, vote on proposals, log the changes. Ten minutes a year keeps the document alive instead of stale.")]
    ),
    h2("The rule no document can enforce: engagement"),
    p(
      t(
        "A constitution stops disputes, but it can’t make a casual member care in Week 12 — and disengaged members are where quitters come from. The best commissioners solve that with lower effort, not more rules. Scoutcast.ai turns each member’s teams and players into a ~2-minute daily audio briefing they can play while making coffee, and the NFL Fantasy Pass ($49.99/season) adds analyst briefings on Tuesday, Wednesday, Thursday, and Sunday built around their actual fantasy roster — waivers, start/sit, matchup stakes. A league where “I didn’t have time to follow football this week” stops being true is a league where Articles VII and VIII rarely get invoked. It also pairs well with the rest of a modern commissioner’s stack — see "
      ),
      lk("the best fantasy football apps for 2026", "/blog/best-fantasy-football-apps-2026"),
      t(".")
    ),
    p(lk("Download Scoutcast on the App Store →", "https://apps.apple.com/us/app/scoutcast-ai/id6761558329")),
  ],
  faqs: [
    {
      question: "What should a fantasy football league constitution include?",
      answer:
        "At minimum: league structure and playoff format, dues and payout structure with a payment deadline, roster and scoring settings, waiver/FAAB rules, trade rules with a deadline and veto policy, a tanking and collusion policy with penalties, last-place punishment and quitter enforcement, commissioner powers and limits, a dispute-resolution process, and an amendment procedure. Keeper or dynasty leagues also need keeper costs and declaration deadlines.",
    },
    {
      question: "What is a fair trade veto policy?",
      answer:
        "The consensus fair standard is collusion-only: trades are reversed exclusively when there’s evidence of dishonest dealing, never because voters think one side lost the trade. Pair it with a 24-hour review window and require any veto to come from a majority of non-involved members (or an ethics panel) with a stated, recorded reason. Vetoing “bad” trades kills trade markets and is the fastest way to make managers quit.",
    },
    {
      question: "How are fantasy football punishments actually enforced?",
      answer:
        "Enforcement has to be written before the season: name the punishment, a completion deadline, and a proof requirement (photo or video to the league chat) in the constitution, then collect a refundable punishment deposit alongside dues. Skipping the punishment forfeits the deposit and next year’s roster spot. A pre-agreed cash buyout, set before anyone loses, removes the January negotiation entirely.",
    },
    {
      question: "When should a league adopt its constitution?",
      answer:
        "Before the draft — ideally ratified by a two-thirds vote at least two weeks out, while every member still believes they’re a contender. Rules written after the season starts always look like they target someone. Revisit the document every offseason through a formal amendment window and log any changes.",
    },
    {
      question: "Can fantasy league rules change mid-season?",
      answer:
        "They shouldn’t, and a good constitution says so explicitly: no mid-season changes to scoring, rosters, payouts, or playoff format, with a single exception for a unanimous league vote. Mid-season changes always benefit someone specific, which makes even well-intentioned fixes look rigged. Genuine problems get logged and voted on in the offseason amendment window.",
    },
  ],
};
