export type InlineNode =
  | { type: "text"; value: string }
  | { type: "strong"; value: string }
  | { type: "em"; value: string }
  | { type: "link"; value: string; href: string };

export type Block =
  | { type: "lead"; content: InlineNode[] }
  | { type: "p"; content: InlineNode[] }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: InlineNode[][] }
  | { type: "table"; headers: InlineNode[][]; rows: InlineNode[][][] }
  | { type: "img"; src: string; alt: string; caption?: string; width?: number; height?: number }
  | { type: "hr" };

export type FAQ = { question: string; answer: string };

export type ComparedItem = {
  name: string;
  url: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  updatedAt?: string;
  author: string;
  authorRole?: string;
  authorUrl?: string;
  ogImage?: string;
  body: Block[];
  faqs?: FAQ[];
  comparedItems?: { name: string; items: ComparedItem[] };
};

const t = (value: string): InlineNode => ({ type: "text", value });
const b = (value: string): InlineNode => ({ type: "strong", value });
const em = (value: string): InlineNode => ({ type: "em", value });
const lk = (value: string, href: string): InlineNode => ({ type: "link", value, href });

const p = (...content: InlineNode[]): Block => ({ type: "p", content });
const h2 = (text: string): Block => ({ type: "h2", text });
const h3 = (text: string): Block => ({ type: "h3", text });
const ul = (...items: InlineNode[][]): Block => ({ type: "ul", items });
const lead = (...content: InlineNode[]): Block => ({ type: "lead", content });
const hr = (): Block => ({ type: "hr" });
const tbl = (headers: InlineNode[][], rows: InlineNode[][][]): Block => ({
  type: "table",
  headers,
  rows,
});
const img = (
  src: string,
  alt: string,
  opts: { caption?: string; width?: number; height?: number } = {}
): Block => ({ type: "img", src, alt, ...opts });

export const posts: Post[] = [
  {
    slug: "why-we-built-scoutcast",
    title: "Why we built Scoutcast.ai",
    excerpt:
      "A personalized 2-minute AI sports briefing for your morning — and the morning with my son that started it.",
    date: "2026-04-28",
    updatedAt: "2026-04-28",
    author: "Nick Wichert",
    authorRole: "Co-founder, Scoutcast.ai",
    authorUrl: "https://x.com/scoutcastAI",
    ogImage: "/blog/why-we-built-scoutcast/og.png",
    body: [
      lead(
        t(
          "Scoutcast.ai is a personalized AI sports audio briefing for iOS. You pick your leagues, teams, and players, and every morning you get a ~2-minute audio rundown of exactly what matters to you. You can tap the mic mid-briefing to ask a follow-up question and get an instant audio answer."
        )
      ),
      p(t("This is the story of why my co-founder Trevor Mason and I built it.")),

      h2("The morning my son couldn’t find his guys"),
      p(t("Every morning, my son would ask our Echo Show for sports highlights. And every morning, the same thing happened — random clips, none of them about the players he actually cared about.")),
      p(t("He’d just sit there. Scrolling. Hoping someone he actually followed would show up.")),
      img(
        "/blog/why-we-built-scoutcast/son-watching-sports-tv.png",
        "A boy sits in front of a TV showing a generic sports-app feed — Top 10 Plays, SportsCenter, and ads for Fubo and Sling — while a Patriots helmet, a Patriots banner, and a handwritten football schedule sit in the room around him.",
        { width: 1586, height: 992 }
      ),
      p(t("I watched him do this one Saturday and realized: that’s me too.")),

      h2("The 20-minute morning sports scroll"),
      p(t("Here’s what my morning looks like when I want to catch up on my teams:")),
      ul(
        [t("Open ESPN, scroll through national headlines that aren’t about any team I follow")],
        [t("Switch to The Athletic — gated paywall on three of the four articles I want")],
        [t("Open Twitter, dodge ads and hot takes, find one beat writer’s thread, lose it")],
        [t("Open my fantasy app to check waivers")],
        [t("Repeat tomorrow")]
      ),
      p(t("Twenty minutes later I’ve consumed a lot of pixels and remember almost none of it. None of it was "), em("for me"), t(". It was for the league — and I had to do all the filtering myself.")),
      p(t("This isn’t a sports problem. It’s a media problem. We’ve built infinite-content pipes — feeds, notifications, push alerts — and pushed all the curation work onto the reader. The job of being informed has become the job of filtering. And the filter is your time.")),

      h2("AI can do everything except this"),
      p(t("We have AI that writes code, generates video, drafts legal contracts, and runs entire customer support orgs. But the morning sports check-in — the most predictable, most personal, most repeatable five minutes of my day — is still a manual scroll across four apps.")),
      p(t("That’s the gap.")),
      p(t("The same technology that lets a model summarize a 200-page report in 30 seconds should be able to read every game recap, every box score, every beat-writer thread overnight, and hand me a 2-minute audio rundown about "), em("my"), t(" teams by the time I’m pouring coffee.")),
      p(t("So Trevor and I built that.")),

      h2("What Scoutcast actually does"),
      p(t("You install the app, pick your leagues (NFL, NBA, MLB, NHL, MLS, Premier League, La Liga, Champions League, PGA, college football, NCAA basketball, college baseball, college hockey, Formula 1 — and a few more), pick your teams and players, and optionally add specific X writers whose takes you want included.")),
      p(t("Every morning, Scoutcast generates a personalized audio briefing. Roughly two minutes. Scores from the games that mattered to you, storylines on the players you follow, what’s coming next, and trade rumors or lineup news from your custom sources.")),
      p(t("You listen while you make coffee, drive, or work out. No screen, no scroll, no rabbit hole.")),

      h2("The thing nobody else does"),
      p(t("Two features I’m proud of, neither of which exists in any other AI briefing app I’ve found:")),
      p(b("Tap-to-ask follow-ups."), t(" Mid-briefing, tap the mic and ask a question. "), em("“What’s his stat line?” “Tell me more about that trade.” “Who’s he replacing?”"), t(" You get an instant audio answer, then the briefing picks up where it left off. The same pattern works on CarPlay and from the lock screen.")),
      p(b("Custom sources from beat writers."), t(" Plug in the X handles of the writers you actually trust — your team’s beat reporter, your favorite analyst — and Scoutcast blends their takes into your briefing alongside scores and league news. Your information diet, in your voice, not a national feed.")),
      p(t("There are great AI briefing apps (Huxe and BriefingAM are both excellent), but they’re built for general news with sports as one tab. Scoutcast is sports-first, and these two features only make sense in a product that knows you well enough to know who "), em("your guys"), t(" are.")),

      h2("Pricing, in one paragraph"),
      p(t("Scoutcast is free. All leagues, all teams, the daily briefing, follow-up questions, custom sources — all free. There is one paid add-on: an NFL Fantasy Season Pass at $49.99 per season for fantasy-specific briefings (Tue/Wed/Thu/Sun, head-to-head edge, waiver picks, start/sit calls, Sunday morning final call). That’s it. No ads, ever.")),

      h2("What’s next"),
      p(t("College football this fall. International soccer expansion. More languages. And we’re publicly working on live-game segments — short bursts during big moments, not just the morning recap.")),
      p(t("We’re also live as an "), lk("MCP connector", "https://modelcontextprotocol.io"), t(" — meaning if you use Claude, ChatGPT, or Gemini CLI, you can plug your Scoutcast account in and ask the AI directly about your briefings. Settings → MCP Connector inside the app.")),

      h2("Try it"),
      p(t("Scoutcast.ai is live on iOS, iPadOS, and macOS (Apple Silicon). Free download:")),
      p(lk("Download Scoutcast on the App Store →", "https://apps.apple.com/us/app/scoutcast-ai/id6761558329")),
      p(t("If you’ve ever spent 20 minutes catching up on sports before your coffee was cool — try it. I’d love to hear what you think. You can reach me at "), lk("nick@scoutcast.ai", "mailto:nick@scoutcast.ai"), t(" or "), lk("@scoutcastAI", "https://x.com/scoutcastAI"), t(" on X.")),

      hr(),
    ],
    faqs: [
      {
        question: "What is Scoutcast.ai?",
        answer:
          "Scoutcast.ai is a personalized AI sports audio briefing app for iOS. You pick the leagues, teams, and players you follow, and every morning Scoutcast generates a ~2-minute audio rundown of scores, storylines, and what’s next. You can interrupt the briefing to ask follow-up questions and get instant audio answers.",
      },
      {
        question: "How is Scoutcast different from BriefingAM, Huxe, or DayStart AI?",
        answer:
          "Those apps are general-purpose AI briefing tools where sports is one of many topics. Scoutcast is sports-first: deeper league coverage, custom beat-writer sources, tap-to-ask follow-ups during playback, and a fantasy-specific paid add-on for the NFL season.",
      },
      {
        question: "How is Scoutcast different from The Athletic or theScore?",
        answer:
          "The Athletic is long-form journalism behind a paywall; theScore is real-time scores and notifications. Scoutcast is a finite, personalized audio briefing — built for hands-free morning listening, not for scrolling.",
      },
      {
        question: "Which leagues does Scoutcast cover?",
        answer:
          "NFL, NBA, MLB, NHL, MLS, WNBA, Premier League, La Liga, Bundesliga, Serie A, Ligue 1, UEFA Champions League, NCAA football, NCAA basketball, NCAA baseball, NCAA hockey, PGA Tour, LIV Golf, Formula 1, ATP, and WTA. New leagues are added based on listener demand.",
      },
      {
        question: "Is Scoutcast free?",
        answer:
          "Yes. All daily briefings across every league are free, with no ads. There is one paid in-app purchase: an NFL Fantasy Season Pass at $49.99 per season, which adds fantasy-specific briefings (Tue/Wed/Thu/Sun) tailored to your roster.",
      },
      {
        question: "What platforms is Scoutcast on?",
        answer:
          "iOS 17+, iPadOS 17+, and macOS 14+ on Apple Silicon. Android is on the roadmap but not yet available.",
      },
      {
        question: "Can I use Scoutcast with Claude or ChatGPT?",
        answer:
          "Yes. Scoutcast is an MCP connector. Inside the app, go to Settings → MCP Connector to copy a server URL you can add to Claude, ChatGPT, Gemini CLI, or any other MCP-compatible AI client.",
      },
    ],
  },
];

// Drafts: held out of the rendered blog until ready to ship.
export const draftPosts: Post[] = [
  {
    slug: "scoutcast-vs-huxe-vs-briefingam",
    title: "Scoutcast vs Huxe vs BriefingAM: which AI audio briefing app should you use?",
    excerpt:
      "An honest comparison of the three best AI audio briefing apps in 2026 — what each one is good at, where each one falls short, and which to pick based on what you actually care about.",
    date: "2026-05-12",
    updatedAt: "2026-05-12",
    author: "Nick Wichert",
    authorRole: "Co-founder, Scoutcast.ai",
    authorUrl: "https://x.com/scoutcastAI",
    ogImage: "/blog/scoutcast-vs-huxe-vs-briefingam/og.png",
    body: [
      lead(
        t(
          "AI audio briefing apps generate a short, personalized audio rundown of your day — news, calendar, sports, or whatever you care about — refreshed each morning. The three best in 2026 are Huxe (general-purpose, by ex-NotebookLM founders), BriefingAM (general-purpose, Apple-ecosystem, news + calendar focus), and Scoutcast.ai (sports-first, with custom beat-writer sources and an MCP connector for Claude / ChatGPT / Gemini). Here’s how they compare, and how to pick."
        )
      ),
      p(
        b("Disclosure:"),
        t(" I’m a co-founder of Scoutcast.ai. I’ve tried to write this comparison the same way I’d want a competitor to write one about my product. If anything here is wrong about Huxe or BriefingAM, email me at "),
        lk("nick@scoutcast.ai", "mailto:nick@scoutcast.ai"),
        t(" and I’ll fix it — and credit you in the changelog at the bottom.")
      ),

      h2("What is an AI audio briefing app?"),
      p(t("An AI audio briefing app generates a short, personalized audio summary on a schedule you choose — usually each morning. You tell it what you care about (news, calendar, email, sports, weather), and it produces a 2–5 minute audio segment you can listen to hands-free. The category emerged in 2025; until then, the closest thing was a smart speaker reading you canned headlines.")),
      p(t("This post compares the three apps that have separated from the pack: Huxe, BriefingAM, and Scoutcast.ai. Adjacent apps like DayStart AI and Daily Brief – InfoDrizzle exist but are out of scope here.")),

      h2("The TL;DR"),
      p(t("Don’t want to read the table? Pick by use case:")),
      ul(
        [b("Huxe"), t(" — if you want one app for everything (email, calendar, news, sports, weather) and you’re on Android, or want the broadest topic coverage.")],
        [b("BriefingAM"), t(" — if you’re Apple-ecosystem-only and want a focused morning briefing with email, calendar, and team-level sports.")],
        [b("Scoutcast.ai"), t(" — if sports is the primary thing you want briefed, especially if you follow specific players, plug in beat-writer sources, play fantasy football, or want to query your briefings from Claude or ChatGPT.")]
      ),
      p(t("Worth flagging up front: Huxe also lets you tap-and-hold to interrupt the hosts mid-briefing and ask follow-ups, so that’s no longer a Scoutcast-only feature.")),

      h2("Side-by-side comparison"),
      p(t("Sourced from App Store listings, vendor sites, and press coverage (TechCrunch, XDA, Android Police). Where a row would have required guesswork, it’s been left out rather than filled with a placeholder.")),
      tbl(
        [
          [t("Dimension")],
          [t("Scoutcast.ai")],
          [t("Huxe")],
          [t("BriefingAM")],
        ],
        [
          [[t("Category")], [t("Sports-first")], [t("General-purpose")], [t("General-purpose")]],
          [[t("Built by")], [t("Independent (Scoutcast.ai, Inc.)")], [t("Ex-NotebookLM founders; $4.6M from Conviction, Dylan Field, Jeff Dean")], [t("Prepd LLC (independent)")]],
          [[t("Platform")], [t("iOS, iPadOS, macOS")], [t("iOS, Android")], [t("iOS, iPadOS, macOS, visionOS")]],
          [[t("Refreshes daily")], [t("✓")], [t("✓")], [t("✓")]],
          [[t("Personalized to specific sports teams")], [t("✓")], [t("Partial — sports as a topic/category")], [t("✓ — leagues and teams")]],
          [[t("Custom sources from beat writers (X handles)")], [t("✓")], [t("✗")], [t("✗")]],
          [[t("Tap-to-ask follow-up questions")], [t("✓")], [t("✓ (“tap and hold to speak”)")], [t("✗")]],
          [[t("Integrates email & calendar")], [t("✗")], [t("✓")], [t("✓")]],
          [[t("Live “stations” / topic tracking")], [t("✗")], [t("✓")], [t("✗")]],
          [[t("Fantasy football mode")], [t("✓ ($49.99/season)")], [t("✗")], [t("✗")]],
          [[t("MCP connector for Claude / ChatGPT / Gemini")], [t("✓")], [t("✗")], [t("✗")]],
          [[t("Free tier")], [t("✓ (full features, no ads)")], [t("✓ (entirely free)")], [t("✓ (paid tier available)")]],
          [[t("Years in market")], [t("<1 year")], [t("<1 year (public Sept 2025)")], [t("<1 year")]],
        ]
      ),

      h2("Where each app wins"),

      h3("Where Huxe wins"),
      ul(
        [b("Breadth across information types."), t(" Sports is one tab among many — politics, science, AI, finance, life, X, Reddit.")],
        [b("Live Stations."), t(" Public stations across a dozen-plus categories let you track an arbitrary topic (a company, a portfolio, your kid’s school district) and refresh on demand. Nothing else in the category does this.")],
        [b("Real interactivity."), t(" Tap-and-hold to interrupt the hosts mid-briefing and ask follow-ups. (The feature this post’s first draft incorrectly listed as Scoutcast-only.)")],
        [b("Cross-platform."), t(" The only one of the three with both iOS and Android.")],
        [b("Pedigree."), t(" Built by ex-NotebookLM founders (Raiza Martin, Jason Spielman, Stephen Hughes), with $4.6M from Conviction, Figma’s Dylan Field, and Google Research’s Jeff Dean.")],
      ),

      h3("Where BriefingAM wins"),
      ul(
        [b("Apple-ecosystem depth."), t(" The only briefing app of the three that runs across iOS, iPadOS, macOS, and visionOS. If you live inside Apple, it fits cleanly.")],
        [b("Team-level sports as part of a general briefing."), t(" Pick favorite leagues and teams and BriefingAM blends them into the same flow as email, calendar, traffic, weather, and news. Not as deep as Scoutcast, but a real selling point if you don’t want a separate sports app.")],
      ),

      h3("Where Scoutcast wins"),
      ul(
        [b("Specific team and player tracking."), t(" The briefing is built around your leagues, teams, and players — not “Sports” as a topic category.")],
        [b("Custom beat-writer sources."), t(" Add the X handles of writers you trust — your team’s beat reporter, your favorite analyst — and their takes blend into the briefing alongside league news. Genuinely unique.")],
        [b("Fantasy football roster awareness."), t(" A $49.99/season add-on adds Tue/Wed/Thu/Sun briefings tailored to your roster: head-to-head edge, waiver picks, start/sit calls, Sunday-morning final call. Genuinely unique.")],
        [b("MCP connector for Claude / ChatGPT / Gemini."), t(" Plug your Scoutcast account into any MCP-compatible AI client and ask the model directly about your briefings. The only row in the table no other app matches.")],
        [b("Tighter format."), t(" ~2 minutes vs the ~5 minutes the general-purpose apps default to. If your morning is already full, the shorter format is the point.")],
        [b("Global sports coverage."), t(" The league list goes well past the US majors — Premier League, La Liga, Bundesliga, Serie A, Ligue 1, UEFA Champions League, Formula 1, PGA, LIV, ATP, WTA, and NCAA baseball and hockey on top of football and basketball. If the team or driver you follow isn’t on national TV in your country, this is where the depth shows up.")],
      ),

      h2("The differentiator no one else has"),
      p(t("Of every row in the comparison table, the one that no other product matches is the "), b("MCP connector"), t(" — Settings → MCP Connector inside Scoutcast gives you a server URL you can paste into Claude, ChatGPT, Gemini CLI, or any other MCP-compatible client. From there you can ask the AI directly about your briefings, your teams, and your roster, and have it pipe that context into whatever else you’re working on.")),
      p(t("If you live inside an AI assistant during the day, this is the row that matters. None of the general-purpose briefing apps advertises an MCP server.")),

      h2("Decision matrix — which one should you pick?"),
      tbl(
        [[t("If you…")], [t("Pick")]],
        [
          [[t("Want a single morning brief covering email, calendar, news, and a bit of sports")], [t("Huxe or BriefingAM")]],
          [[t("Want a brief that fits the Apple ecosystem (iPad, Mac, Vision Pro)")], [t("BriefingAM")]],
          [[t("Are on Android")], [t("Huxe")]],
          [[t("Want sports as the "), em("primary"), t(" thing in your morning")], [t("Scoutcast.ai")]],
          [[t("Follow specific NFL/NBA/MLB beat writers and want their takes in your briefing")], [t("Scoutcast.ai")]],
          [[t("Play fantasy football and want a roster-aware briefing")], [t("Scoutcast.ai")]],
          [[t("Want to plug your briefings into Claude or ChatGPT")], [t("Scoutcast.ai (MCP connector)")]],
          [[t("Want to track an arbitrary topic on demand (a company, a portfolio, a school district)")], [t("Huxe (Live Stations)")]],
          [[t("Want the longest briefing")], [t("Huxe (~5 min)")]],
          [[t("Want the shortest briefing")], [t("Scoutcast.ai (~2 min)")]],
        ]
      ),

      h2("What none of these apps do (yet)"),
      p(t("A short, generous list of real gaps in the whole category:")),
      ul(
        [t("No app currently delivers genuine live-game audio updates — short bursts during big moments, not just the morning recap.")],
        [t("All three are mobile-first; none has a desktop web app for browser listening.")],
        [t("Of the three, only Huxe runs on Android; Scoutcast and BriefingAM are Apple-only.")],
        [t("No app is doing real conversational continuous audio yet — they’re all read-aloud briefings with optional Q&A interrupts, not flowing dialogue.")],
        [t("None has a meaningfully large social or community layer.")],
      ),

      h2("Try them"),
      p(t("All three have free tiers. The honest move is to install all three for a week and pick what fits your morning.")),
      ul(
        [lk("Scoutcast.ai on the App Store", "https://apps.apple.com/us/app/scoutcast-ai/id6761558329")],
        [lk("Huxe on the App Store (iOS)", "https://apps.apple.com/us/app/huxe/id6743417504")],
        [lk("Huxe on Google Play (Android)", "https://play.google.com/store/apps/details?id=com.huxe.android.apps.huxe")],
        [lk("BriefingAM on the App Store", "https://apps.apple.com/us/app/briefingam-ai-audio-briefing/id6743698762")],
      ),

      h2("Disclosure"),
      p(t("I’m Nick, co-founder of Scoutcast.ai. I tried to write this comparison the way I’d want a competitor to write one about us. If anything here is wrong about Huxe or BriefingAM, email me at "), lk("nick@scoutcast.ai", "mailto:nick@scoutcast.ai"), t(" and I’ll fix it — and credit you in the changelog below.")),

      h2("Changelog"),
      p(em("No corrections logged yet. When something here changes, the date and the change will appear here.")),

      hr(),
    ],
    faqs: [
      {
        question: "What is the best AI audio briefing app in 2026?",
        answer:
          "There isn’t a single best app — it depends on what you want briefed. Huxe is best for breadth and is the only one with an Android app. BriefingAM is best for an Apple-ecosystem general briefing. Scoutcast.ai is best if sports is the primary thing you want covered, especially with custom beat-writer sources or fantasy football.",
      },
      {
        question: "Is Huxe sports-specific?",
        answer:
          "No. Huxe is a general-purpose AI briefing app from ex-NotebookLM founders, publicly launched in September 2025. Sports is one of many Live Station categories alongside Politics, Science, AI, Business, X, and Reddit. If you want sports-first depth with team and player tracking, Scoutcast.ai is built for that case.",
      },
      {
        question: "Does BriefingAM cover sports?",
        answer:
          "Yes. BriefingAM lets you pick favorite leagues and teams, and surfaces content on those teams as part of a general daily briefing that also covers email, calendar, traffic, weather, and news. It does not offer custom beat-writer sources, fantasy football mode, or an MCP connector.",
      },
      {
        question: "What is Scoutcast.ai?",
        answer:
          "Scoutcast.ai is a personalized AI sports audio briefing for iOS, iPadOS, and macOS. You pick your leagues, teams, and players, and every morning you get a ~2-minute audio rundown. You can tap the mic mid-briefing to ask follow-up questions, plug in beat-writer X handles as custom sources, and connect briefings to Claude or ChatGPT via MCP.",
      },
      {
        question: "Are these apps free?",
        answer:
          "Scoutcast.ai is free with no ads, plus one optional in-app purchase: an NFL Fantasy Season Pass at $49.99 per season. Huxe is entirely free. BriefingAM has a free tier and a paid tier; the vendor describes the paid tier as roughly the price of a daily Starbucks run.",
      },
      {
        question: "Which AI audio briefing app has the best fantasy football coverage?",
        answer:
          "Scoutcast.ai is the only one of the three with a dedicated fantasy football mode. The $49.99/season add-on delivers Tue/Wed/Thu/Sun briefings tailored to your roster — head-to-head edge, waiver picks, start/sit calls, and a Sunday-morning final call. Huxe and BriefingAM cover the NFL but not at the roster level.",
      },
      {
        question: "Is there an Android version of any of these apps?",
        answer:
          "Only Huxe. Huxe runs on iOS and Android, both publicly launched in September 2025. Scoutcast.ai is iOS, iPadOS, and macOS only — Android is on the roadmap. BriefingAM is Apple-only (iOS, iPadOS, macOS, and visionOS).",
      },
      {
        question: "Do any of these apps work with Claude or ChatGPT?",
        answer:
          "Only Scoutcast.ai. Inside the app, Settings → MCP Connector gives you a server URL you can add to Claude, ChatGPT, Gemini CLI, or any other MCP-compatible client. Neither Huxe nor BriefingAM advertises an MCP connector.",
      },
    ],
    comparedItems: {
      name: "AI audio briefing apps compared",
      items: [
        {
          name: "Scoutcast.ai",
          url: "https://apps.apple.com/us/app/scoutcast-ai/id6761558329",
        },
        {
          name: "Huxe",
          url: "https://apps.apple.com/us/app/huxe/id6743417504",
        },
        {
          name: "BriefingAM",
          url: "https://apps.apple.com/us/app/briefingam-ai-audio-briefing/id6743698762",
        },
      ],
    },
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
