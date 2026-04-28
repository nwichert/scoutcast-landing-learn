import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
