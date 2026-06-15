import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
    "Two-minute audio briefings personalized to your teams, your leagues, and your fantasy roster. Free on iPhone.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://scoutcast.ai",
    siteName: "Scoutcast.ai",
    title: "Scoutcast.ai — Personalized AI Sports Audio Briefings, Daily",
    description:
      "Two-minute audio briefings personalized to your teams, your leagues, and your fantasy roster. Free on iPhone.",
    images: [{ url: "/scoutcast-icon.png", width: 1200, height: 630, alt: "Scoutcast.ai" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@scoutcastAI",
    creator: "@scoutcastAI",
    title: "Scoutcast.ai — Personalized AI Sports Audio Briefings, Daily",
    description:
      "Two-minute audio briefings personalized to your teams, your leagues, and your fantasy roster. Free on iPhone.",
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
        {/* Scoutcast site intelligence tracker — set NEXT_PUBLIC_TRACKER_URL to activate */}
        {process.env.NEXT_PUBLIC_TRACKER_URL ? (
          <Script id="scoutcast-tracker" strategy="afterInteractive">
            {`(function(){var T="${process.env.NEXT_PUBLIC_TRACKER_URL}";if(!T)return;function s(p){try{if(navigator.sendBeacon){navigator.sendBeacon(T+"/track",new Blob([JSON.stringify(p)],{type:"application/json"}))}else{fetch(T+"/track",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p),keepalive:true}).catch(function(){})}}catch(e){}}s({event:"pageview",url:location.href,referrer:document.referrer||void 0,ts:Date.now()});document.addEventListener("click",function(e){var el=e.target;while(el&&el.tagName!=="A"&&el.tagName!=="BUTTON"){el=el.parentElement;}if(!el)return;s({event:"click",url:location.href,label:el.innerText?el.innerText.trim().slice(0,100):void 0,href:el.href||void 0,ts:Date.now()});},{passive:true});})();`}
          </Script>
        ) : null}
      </body>
    </html>
  );
}
