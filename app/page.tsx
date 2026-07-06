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
      name: "Scoutcast Free",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      category: "Free",
      description:
        "Free plan with one active Scoutcast. Daily ~2-minute personalized audio briefing, custom teams, leagues, and X writers, hands-free follow-up questions, ad-free.",
    },
    {
      "@type": "Offer",
      name: "Scoutcast Unlimited (Monthly)",
      price: "4.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      category: "InAppPurchase",
      description:
        "Auto-renewing monthly subscription. Removes the free-tier limit for unlimited active Scoutcasts. Cancel anytime in Apple ID settings.",
    },
    {
      "@type": "Offer",
      name: "Scoutcast Unlimited (Annual)",
      price: "39.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      category: "InAppPurchase",
      description:
        "Auto-renewing annual subscription. Removes the free-tier limit for unlimited active Scoutcasts. Cancel anytime in Apple ID settings.",
    },
    {
      "@type": "Offer",
      name: "NFL Fantasy Season Pass",
      price: "49.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      category: "InAppPurchase",
      description:
        "Auto-renewing per-NFL-season subscription, sold separately from Scoutcast Unlimited. Tue/Wed/Thu/Sun briefings, H2H opponent edge, fantasy playoffs, NFL playoff DFS insights, Super Bowl preview. Up to 3 leagues across Yahoo, ESPN, Sleeper, NFL.com.",
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
        text: "Yes. The NFL Fantasy Season Pass ($49.99/season) adds four audio briefings a week personalized to your roster and your head-to-head opponent — waiver bids on Wednesday, start/sit calls on Thursday, and a final call Sunday morning before kickoff. It works with any fantasy platform and with the free app.",
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
        text: "A fresh brief drops every morning based on overnight scores and news. You can also trigger an on-demand refresh after a game ends.",
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
          href="/blog/world-cup-bracket-2026/"
          className="text-foreground/55 hover:text-foreground"
        >
          Latest from the blog:{" "}
          <span className="text-foreground/85">The 2026 FIFA World Cup Bracket</span>{" "}
          →
        </Link>
      </div>
      <LastUpdated />
      <Footer />
    </>
  );
}
