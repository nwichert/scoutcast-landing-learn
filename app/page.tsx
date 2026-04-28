import Header from "@/components/header";
import HeroSection from "@/components/secondary-hero-2";
import LogoCloud from "@/components/logo-cloud";
import FeaturesSection from "@/components/features-2";
import ComparatorSection from "@/components/comparator-7";
import DownloadSection from "@/components/contact";
import Pricing from "@/components/pricing";
import FAQs from "@/components/faqs-1";
import Footer from "@/components/footer";

const mobileApplicationLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Scoutcast.ai",
  alternateName: "Scoutcast",
  applicationCategory: "SportsApplication",
  applicationSubCategory: "News",
  operatingSystem: "iOS 17.0, iPadOS 17.0, macOS 14.0",
  description:
    "Personalized AI sports audio briefings. Pick your teams and leagues, and Scoutcast generates a ~2-minute daily audio rundown of scores, storylines, and top performers. Tap to ask follow-up questions and get instant audio answers.",
  url: "https://scoutcast.ai",
  downloadUrl: "https://apps.apple.com/us/app/scoutcast-ai/id6761558329",
  installUrl: "https://apps.apple.com/us/app/scoutcast-ai/id6761558329",
  softwareVersion: "2.0.2",
  datePublished: "2025-01-01",
  dateModified: "2026-04-27",
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
    },
    {
      "@type": "Offer",
      name: "NFL Fantasy Season Pass",
      price: "49.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      category: "InAppPurchase",
      description:
        "One-time, per-NFL-season pass. Tue/Wed/Thu/Sun briefings, H2H opponent edge, fantasy playoffs, NFL playoff DFS, Super Bowl preview. Up to 3 leagues across Yahoo, ESPN, Sleeper, NFL.com.",
    },
  ],
  featureList: [
    "Personalized daily audio briefings",
    "Voice follow-up questions",
    "Custom sources from X writers",
    "CarPlay support",
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
  legalName: "Scoutcast.ai Corporation",
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
      <Header />
      <HeroSection />
      <LogoCloud />
      <FeaturesSection />
      <ComparatorSection />
      <DownloadSection />
      <Pricing />
      <FAQs />
      <p className="dark bg-background text-center text-sm text-foreground/55 pb-8">
        Last updated April 27, 2026
      </p>
      <Footer />
    </>
  );
}
