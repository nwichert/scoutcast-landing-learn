import Header from "@/components/header";
import HeroSection from "@/components/secondary-hero-2";
import LogoCloud from "@/components/logo-cloud";
import FeaturesSection from "@/components/features-2";
import ComparatorSection from "@/components/comparator-7";
import FantasyStrip from "@/components/fantasy-strip";
import DownloadSection from "@/components/contact";
import Pricing from "@/components/pricing";
import FAQs from "@/components/faqs-1";
import Footer from "@/components/footer";
import LastUpdated from "@/components/last-updated";
import Link from "next/link";

const mobileApplicationLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Scoutcast.ai",
  alternateName: "Scoutcast",
  applicationCategory: "SportsApplication",
  applicationSubCategory: "News",
  operatingSystem: "iOS 17.0, iPadOS 17.0, macOS 14.0, Android",
  description:
    "Personalized AI sports audio briefings. Pick your teams and leagues, and Scoutcast generates a ~2-minute daily audio rundown of scores, storylines, and top performers. Tap to ask follow-up questions and get instant audio answers.",
  url: "https://scoutcast.ai",
  downloadUrl: "https://apps.apple.com/us/app/scoutcast-ai/id6761558329",
  installUrl: "https://apps.apple.com/us/app/scoutcast-ai/id6761558329",
  softwareVersion: "2.0.2",
  datePublished: "2025-01-01",
  dateModified: "2026-07-06",
  author: {
    "@type": "Organization",
    name: "Scoutcast.ai, Inc.",
  },
  publisher: {
    "@type": "Organization",
    name: "Scoutcast.ai, Inc.",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Scoutcast Plus (monthly)",
      price: "4.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      category: "InAppPurchase",
      description:
        "Auto-renewing monthly subscription. Unlimited casts, daily ~2-minute personalized audio briefings, scores/injuries/odds/storylines, and tap-to-ask audio follow-ups. Starts with a free 7-day trial — no credit card required. Cancel anytime.",
    },
    {
      "@type": "Offer",
      name: "Scoutcast Plus (annual)",
      price: "39.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      category: "InAppPurchase",
      description:
        "Auto-renewing annual subscription — about $3.33/month, roughly 33% less than monthly. Same features as monthly Scoutcast Plus, starting with a free 7-day trial.",
    },
    {
      "@type": "Offer",
      name: "NFL Fantasy Pass",
      price: "39.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      category: "InAppPurchase",
      description:
        "Auto-renewing yearly subscription, sold separately — does not require Scoutcast Plus. Tue/Wed/Thu/Sun briefings, H2H opponent edge, fantasy playoffs, NFL playoff DFS insights, Super Bowl preview. Up to 3 leagues across Yahoo, ESPN, Sleeper, NFL.com.",
    },
    {
      "@type": "Offer",
      name: "League Pass",
      price: "39.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      category: "InAppPurchase",
      description:
        "One season pass for an entire fantasy league: the commissioner pays, all 10–14 members listen free via invite code. Weekly 'Recap + Roast' episode every Tuesday built from the league's Sleeper account. Sleeper leagues only at launch.",
    },
  ],
  featureList: [
    "Personalized daily audio briefings",
    "Voice follow-up questions",
    "Custom sources from X writers",
    "Lock-screen controls",
    "Crews and listening leaderboards",
    "MCP connector for Claude, ChatGPT, Gemini",
    "Ad-free",
  ],
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Scoutcast.ai",
  legalName: "Scoutcast.ai, Inc.",
  alternateName: "Scoutcast",
  url: "https://scoutcast.ai",
  logo: "https://scoutcast.ai/scoutcast-icon.png",
  description:
    "Scoutcast.ai is an agentic media company that turns raw sports data into personalized two-minute audio briefings.",
  foundingDate: "2025",
  sameAs: [
    "https://apps.apple.com/us/app/scoutcast-ai/id6761558329",
    "https://www.instagram.com/scoutcast.ai/",
    "https://www.linkedin.com/company/109072371",
    "https://x.com/scoutcastAI",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: "https://scoutcast.ai/contact",
  },
};

const faqPageLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Scoutcast personalize my briefings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pick your teams, sports, and preferred X writers. Scoutcast learns what you care about over time — focusing on the players, stats, and storylines you actually listen to, and skipping the rest.",
      },
    },
    {
      "@type": "Question",
      name: "How long is each briefing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Briefings are designed to be around two minutes — enough to catch you up on what matters, without another doom-scroll.",
      },
    },
    {
      "@type": "Question",
      name: "Which sports and leagues does Scoutcast cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NFL, NBA, MLB, NHL, MLS, Premier League, Champions League, PGA Tour, and more. New leagues are added based on listener demand.",
      },
    },
    {
      "@type": "Question",
      name: "Does Scoutcast work for fantasy football?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, two ways. The NFL Fantasy Pass ($39.99/year) is your personal AI fantasy analyst — start/sit calls, waiver bids, weekly matchup briefings, and a Sunday-morning final call, synced to your roster on Yahoo, ESPN, Sleeper, or NFL.com. The League Pass ($39.99/season) covers your entire league: the commissioner pays once, all 10–14 members listen free, and everyone gets a weekly “Recap + Roast” episode every Tuesday (Sleeper leagues at launch). Both are independent purchases — no Scoutcast Plus required.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Scoutcast League Pass?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One pass for your whole fantasy league: the commissioner pays $39.99 for the season, and all 10–14 members listen free via an invite code. Every Tuesday the league gets a “Recap + Roast” episode — exact scores, bench disasters, and season-long storylines, built from your Sleeper league. Sleeper leagues only at launch, more platforms coming.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a limit on how many casts I can follow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — Scoutcast Plus includes unlimited casts, so every team, league, and player you follow gets briefed every morning. To keep your library clutter-free, a cast you stop listening to naps itself after a few skipped episodes and resumes with one tap.",
      },
    },
    {
      "@type": "Question",
      name: "Can I interrupt the briefing to ask a question?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Tap Ask at any point and ask a follow-up like “what’s his stat line?” or “more on the trade.” Your briefing pauses, answers, and picks up where you left off.",
      },
    },
    {
      "@type": "Question",
      name: "Which sources does Scoutcast pull from?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scores and stats come from verified sports data providers. You can also add your preferred X writers — Scoutcast blends their takes into your personalized briefing.",
      },
    },
    {
      "@type": "Question",
      name: "When does my daily brief refresh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A fresh brief drops every morning based on overnight scores and news.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Scoutcast cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Everyone starts with a free 7-day trial — no credit card required. After the trial, Scoutcast Plus is $4.99/month or $39.99/year (about $3.33/month) with unlimited casts. The NFL Fantasy Pass ($39.99/year) and League Pass ($39.99/season) are separate purchases — neither requires Plus. Cut Line and betting odds stay free.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a credit card to try Scoutcast?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The 7-day trial requires no payment information. You only subscribe if you decide to continue after the trial ends.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after the free trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your briefings stop until you subscribe to Scoutcast Plus ($4.99/month or $39.99/year). Nothing is deleted — your casts, sources, and settings are all saved.",
      },
    },
  ],
};

const comparisonDatasetLd = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "Scoutcast.ai vs The Athletic vs theScore vs BriefingAM — feature comparison",
  description:
    "Side-by-side feature comparison of Scoutcast.ai, The Athletic, theScore, and BriefingAM across 10 dimensions of personalized sports media.",
  url: "https://scoutcast.ai/#compare",
  creator: { "@type": "Organization", name: "Scoutcast.ai, Inc." },
  dateModified: "2026-04-28",
  license: "https://scoutcast.ai/terms",
  keywords:
    "sports app comparison, AI sports briefing, The Athletic alternative, theScore alternative, BriefingAM alternative, personalized sports audio",
};

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <JsonLd data={mobileApplicationLd} />
      <JsonLd data={organizationLd} />
      <JsonLd data={faqPageLd} />
      <JsonLd data={comparisonDatasetLd} />
      <Header />
      <HeroSection />
      <LogoCloud />
      <FeaturesSection />
      <ComparatorSection />
      <FantasyStrip />
      <DownloadSection />
      <Pricing />
      <FAQs />
      <div className="dark bg-background pb-2 text-center text-sm">
        <Link
          href="/blog/fantasy-football-mock-draft-2026/"
          className="text-foreground/55 hover:text-foreground"
        >
          Latest from the blog:{" "}
          <span className="text-foreground/85">Fantasy Football Mock Draft 2026: How to Prepare</span>{" "}
          →
        </Link>
      </div>
      <LastUpdated />
      <Footer />
    </>
  );
}
