import Image from "next/image"
import { InfiniteSlider } from "@/components/ui/infinite-slider"

type League = {
    name: string
    src: string
    width: number
    height: number
    invert?: boolean
}

const leagues: League[] = [
    { name: "NFL", src: "/logos/nfl.png", width: 52, height: 52 },
    { name: "NBA", src: "/logos/nba.png", width: 52, height: 52 },
    { name: "MLB", src: "/logos/mlb.png", width: 52, height: 52 },
    { name: "NHL", src: "/logos/nhl.png", width: 52, height: 52 },
    { name: "MLS", src: "/logos/mls.png", width: 52, height: 52 },
    { name: "Premier League", src: "/logos/premier-league.svg", width: 140, height: 56 },
    { name: "PGA Tour", src: "/logos/pga.png", width: 52, height: 52 },
    { name: "UEFA Champions League", src: "/logos/champions-league.png", width: 110, height: 70, invert: true },
    { name: "La Liga", src: "/logos/la-liga.png", width: 52, height: 52 },
    { name: "Bundesliga", src: "/logos/bundesliga.svg", width: 130, height: 60 },
    { name: "Serie A", src: "/logos/serie-a.svg", width: 60, height: 60 },
    { name: "Ligue 1", src: "/logos/ligue-1.svg", width: 60, height: 60 },
    { name: "NCAA", src: "/logos/ncaa.svg", width: 60, height: 60 },
    { name: "WNBA", src: "/logos/wnba.png", width: 52, height: 52 },
    { name: "ATP", src: "/logos/atp.svg", width: 60, height: 60 },
    { name: "WTA", src: "/logos/wta.svg", width: 60, height: 60 },
    { name: "LIV Golf", src: "/logos/LIVgolf.png", width: 160, height: 28, invert: true },
    { name: "Formula 1", src: "/logos/f1.png", width: 120, height: 30 },
]

export default function LogoCloud() {
    return (
        <section className="dark bg-background">
            <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24">
                <div className="mb-12 flex max-w-2xl flex-col items-center gap-4">
                    <h2 className="text-balance text-center text-4xl font-semibold tracking-tight text-foreground sm:text-[44px] sm:leading-[1.15]">Global Sports Coverage</h2>
                    <p className="max-w-xl text-balance text-center text-lg leading-7 text-foreground/55">
                        Scoutcast.ai is an agentic media company that turns raw sports data like scores, news, and highlights, and turns them into engaging two-minute audio briefings.
                    </p>
                </div>

                <div className="mask-x-from-80% mask-x-to-100% relative w-full">
                    <InfiniteSlider
                        speed={40}
                        speedOnHover={20}
                        gap={56}
                        className="items-center">
                        {leagues.map((league) => (
                            <div
                                key={league.name}
                                className="flex h-[86px] shrink-0 items-center justify-center">
                                <Image
                                    src={league.src}
                                    alt={league.name}
                                    width={league.width}
                                    height={league.height}
                                    className="h-auto w-auto object-contain"
                                    style={{
                                        maxHeight: `${league.height}px`,
                                        maxWidth: `${league.width}px`,
                                        filter: league.invert ? "invert(1) brightness(1.1)" : undefined,
                                    }}
                                />
                            </div>
                        ))}
                    </InfiniteSlider>
                </div>
            </div>
        </section>
    )
}
