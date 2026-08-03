import { PhoneIllustration } from "@/components/ui/illustrations/phone-illustration"
import { DownloadButton } from "@/components/download-button"
import { PlayStoreButton } from "@/components/play-store-button"

export default function HeroSection() {
    return (
        <section className="dark bg-background">
            <div className="relative overflow-hidden pb-36 pt-44">
                <div
                    aria-hidden
                    className="pointer-events-none absolute -top-60 left-1/2 h-[720px] w-[1200px] -translate-x-1/2"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle farthest-corner at 50% 50%, rgba(10,177,123,0.18) 0%, rgba(10,177,123,0.04) 40%, transparent 70%)",
                    }}
                />

                <div className="relative mx-auto mb-12 flex max-w-5xl flex-col items-center px-6 text-center">
                    <span className="mb-5 inline-block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0AB17B]">
                        For fans with two minutes, not twenty-five
                    </span>
                    <h1 className="max-w-2xl text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-[56px] lg:text-[64px]">
                        Only your teams.
                        <br />
                        No scrolling.
                    </h1>
                    <p className="mt-6 max-w-2xl text-balance text-lg leading-7 text-foreground/70 sm:text-xl">
                        A personalized audio briefing on the leagues, teams, and players you actually follow — generated fresh every morning. Tap to ask follow-ups, hands-free.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <DownloadButton label="App Store" placement="hero" />
                        <PlayStoreButton label="Google Play" placement="hero" />
                    </div>
                </div>

                <div className="relative px-6">
                    <PhoneIllustration />
                </div>
            </div>
        </section>
    )
}
