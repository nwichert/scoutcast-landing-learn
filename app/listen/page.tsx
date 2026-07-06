import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { APP_STORE_URL } from "@/lib/urls"

export const metadata: Metadata = {
    title: "Listen on Scoutcast.ai",
    description:
        "Open your briefing in the Scoutcast app. Two-minute audio rundowns personalized to your teams, your leagues, and your fantasy roster. Free on iPhone and Android.",
    alternates: { canonical: "/listen" },
    itunes: {
        appId: "6761558329",
        appArgument: "https://scoutcast.ai/listen",
    },
}

const POINTS = [
    "Your briefing, ready to play the moment you open the app",
    "About two minutes — your teams, your players, nothing else",
    "Tap to ask follow-ups, hands-free",
    "Free on iPhone and Android — no account needed to start",
]

export default function ListenPage() {
    return (
        <div className="dark min-h-screen bg-[#0A0E14] text-[#E6EDF3] antialiased">
            <Header />
            <main>
                <section className="relative overflow-hidden px-6 pb-28 pt-24 lg:px-12 lg:pb-40 lg:pt-32">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -top-44 left-1/2 h-[520px] w-[520px] -translate-x-1/2 lg:h-[800px] lg:w-[1100px]"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle farthest-corner at 50% 50%, rgba(10,177,123,0.16) 0%, rgba(10,177,123,0.04) 40%, transparent 70%)",
                        }}
                    />
                    <div className="relative mx-auto grid max-w-5xl items-center gap-14 lg:grid-cols-[1fr_320px] lg:gap-20">
                        <div className="flex flex-col items-start gap-7">
                            <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-[#1E2733] bg-[#0F1620] px-3.5 py-2">
                                <span className="size-1.5 shrink-0 rounded-full bg-[#0AB17B] shadow-[0_0_10px_rgba(10,177,123,0.7)]" />
                                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-[#5DE0A6]">
                                    Your briefing is waiting
                                </span>
                            </div>
                            <h1 className="text-balance text-[40px] font-bold leading-[1.05] tracking-[-0.025em] text-[#E6EDF3] sm:text-[56px] lg:text-[68px]">
                                Open this in the Scoutcast app.
                            </h1>
                            <p className="max-w-xl text-base leading-[1.6] text-[#7D8693] sm:text-lg">
                                On your iPhone, this link drops you straight into your briefing. Don&rsquo;t have the
                                app yet? Install it free from the App Store and your first briefing is ready in
                                seconds.
                            </p>
                            <ul className="flex flex-col gap-3">
                                {POINTS.map((point) => (
                                    <li
                                        key={point}
                                        className="flex items-start gap-3">
                                        <Check
                                            className="mt-1 size-4 shrink-0 text-[#0AB17B]"
                                            strokeWidth={2.5}
                                        />
                                        <span className="text-[15px] leading-[1.5] text-[#E6EDF3]">{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
                                <a
                                    href={APP_STORE_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex h-14 items-center justify-center gap-2.5 rounded-[14px] bg-[#0AB17B] px-6 text-base font-semibold text-[#0A0E14] transition hover:bg-[#0BC189]">
                                    Get Scoutcast on the App Store
                                    <ArrowRight
                                        className="size-4"
                                        strokeWidth={2.5}
                                    />
                                </a>
                                <span className="font-mono text-xs tracking-[0.04em] text-[#7D8693]">
                                    Already installed? Tap the email link again from your iPhone.
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-5 rounded-[20px] border border-[#1E2733] bg-[#0F1620] p-8">
                            <Image
                                src="/scoutcast-icon.png"
                                alt="Scoutcast.ai"
                                width={72}
                                height={72}
                                className="size-[72px] rounded-2xl"
                            />
                            <div className="rounded-2xl bg-white p-3">
                                <Image
                                    src="/scoutcast-qr.png"
                                    alt="Scan to download Scoutcast on the App Store"
                                    width={180}
                                    height={180}
                                    className="size-[180px]"
                                />
                            </div>
                            <span className="text-center font-mono text-[11px] leading-[1.5] tracking-[0.04em] text-[#7D8693]">
                                Scan with your iPhone camera to install
                            </span>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
