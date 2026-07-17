import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scoutcast.ai"),
  title: {
    default: "Scoutcast.ai — Personalized AI Sports Audio Briefings, Daily",
    template: "%s · Scoutcast.ai",
  },
  description:
    "Two-minute audio briefings personalized to your teams, your leagues, and your fantasy roster. 7-day free trial — no credit card required.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://scoutcast.ai",
    siteName: "Scoutcast.ai",
    title: "Scoutcast.ai — Personalized AI Sports Audio Briefings, Daily",
    description:
      "Two-minute audio briefings personalized to your teams, your leagues, and your fantasy roster. 7-day free trial — no credit card required.",
    images: [{ url: "/scoutcast-icon.png", width: 1200, height: 630, alt: "Scoutcast.ai" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@scoutcastAI",
    creator: "@scoutcastAI",
    title: "Scoutcast.ai — Personalized AI Sports Audio Briefings, Daily",
    description:
      "Two-minute audio briefings personalized to your teams, your leagues, and your fantasy roster. 7-day free trial — no credit card required.",
    images: ["/scoutcast-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {/* Humblytics Analytics */}
        <Script
          id="humblytics"
          src="https://app.humblytics.com/hmbl.min.js?id=9f5baa3"
          strategy="afterInteractive"
        />
        {/* Scoutcast site intelligence tracker (heatmap + scroll depth) — set NEXT_PUBLIC_TRACKER_URL to activate */}
        {process.env.NEXT_PUBLIC_TRACKER_URL ? (
          <Script id="scoutcast-tracker" strategy="afterInteractive">
            {`(function(){var T="${process.env.NEXT_PUBLIC_TRACKER_URL}";if(!T)return;function s(p){try{var b=JSON.stringify(p);if(navigator.sendBeacon){navigator.sendBeacon(T+"/track",b)}else{fetch(T+"/track",{method:"POST",body:b,keepalive:true}).catch(function(){})}}catch(e){}}s({event:"pageview",url:location.href,referrer:document.referrer||void 0,ts:Date.now()});document.addEventListener("click",function(e){var x=Math.round(e.clientX/window.innerWidth*100),y=Math.round(e.clientY/window.innerHeight*100),el=e.target;while(el&&el.tagName!=="A"&&el.tagName!=="BUTTON"){el=el.parentElement;}s({event:"click",url:location.href,x:x,y:y,label:el&&el.innerText?el.innerText.trim().slice(0,100):void 0,href:el&&el.href?el.href:void 0,ts:Date.now()});},{passive:true});var df={};window.addEventListener("scroll",function(){var el=document.documentElement,pct=Math.round((el.scrollTop+window.innerHeight)/el.scrollHeight*100);[25,50,75,100].forEach(function(m){if(pct>=m&&!df[m]){df[m]=1;s({event:"scroll",url:location.href,depth:m,ts:Date.now()});}});},{passive:true});})();`}
          </Script>
        ) : null}
      </body>
      {/* Google Analytics 4 — set NEXT_PUBLIC_GA_ID (G-XXXXXXXXXX) to activate */}
      {process.env.NEXT_PUBLIC_GA_ID ? (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      ) : null}
    </html>
  );
}
