import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type FaqGroup = {
    group: string
    items: { id: string; question: string; answer: string }[]
}

const faqGroups: FaqGroup[] = [
    {
        group: "Product",
        items: [
            {
                id: "cost",
                question: "How much does Scoutcast cost?",
                answer: "Everyone starts with a free 7-day trial — no credit card required. After the trial, Scoutcast Plus is $5.99/month and includes up to 7 active casts. The NFL Fantasy Season Pass is a separate $49.99/season add-on.",
            },
            {
                id: "credit-card",
                question: "Do I need a credit card to try it?",
                answer: "No. The 7-day trial requires no payment information. You only subscribe if you decide to continue after the trial ends.",
            },
            {
                id: "after-trial",
                question: "What happens after the trial?",
                answer: "Your briefings pause until you subscribe to Scoutcast Plus ($5.99/month). Nothing is deleted — your casts, sources, and settings are all saved. You can resubscribe and pick up right where you left off.",
            },
            {
                id: "existing",
                question: "I already subscribe — does this affect me?",
                answer: "No. Existing subscribers keep their current price and plan.",
            },
            {
                id: "vs-espn",
                question: "How is this different from checking ESPN or theScore?",
                answer: "ESPN and theScore show you everything — you scroll until you find what matters. Scoutcast flips that: you tell it your teams and players once, and every morning it delivers a ~2-minute audio brief covering only those. No feed to scroll, no scores from sports you don't follow, no ads. Tap Ask if you want to dig deeper on anything.",
            },
            {
                id: "personalize",
                question: "How does Scoutcast personalize my briefings?",
                answer: "Pick your teams, sports, and preferred X writers. Scoutcast learns what you care about over time — focusing on the players, stats, and storylines you actually listen to, and skipping the rest.",
            },
            {
                id: "length",
                question: "How long is each briefing?",
                answer: "Briefings are designed to be around two minutes — enough to catch you up on what matters, without another doom-scroll.",
            },
            {
                id: "leagues",
                question: "Which sports and leagues does Scoutcast cover?",
                answer: "NFL, NBA, MLB, NHL, MLS, Premier League, Champions League, PGA Tour, and more. New leagues are added based on listener demand.",
            },
            {
                id: "fantasy",
                question: "Does Scoutcast work for fantasy football?",
                answer: "Yes. The NFL Fantasy Season Pass ($49.99/season) adds four audio briefings a week personalized to your roster and your head-to-head opponent — waiver bids on Wednesday, start/sit calls on Thursday, and a final call Sunday morning before kickoff. It works with any fantasy platform and requires Scoutcast Plus.",
            },
            {
                id: "android",
                question: "Does Scoutcast work on Android?",
                answer: "Yes. Scoutcast is now on Google Play for Android, alongside iPhone, iPad, and Mac.",
            },
        ],
    },
    {
        group: "Audio & Sources",
        items: [
            {
                id: "ask",
                question: "Can I interrupt the briefing to ask a question?",
                answer: "Yes. Tap Ask at any point and ask a follow-up like “what’s his stat line?” or “more on the trade.” Your briefing pauses, answers, and picks up where you left off.",
            },
            {
                id: "sources",
                question: "Which sources does Scoutcast pull from?",
                answer: "Scores and stats come from verified sports data providers. You can also add your preferred X writers — Scoutcast blends their takes into your personalized briefing.",
            },
            {
                id: "refresh",
                question: "When does my daily brief refresh?",
                answer: "A fresh brief drops every morning based on overnight scores and news. You can also trigger an on-demand refresh after a game ends.",
            },
        ],
    },
]

export default function FAQs() {
    return (
        <section id="faq" className="dark bg-background scroll-mt-20">
            <div className="mx-auto max-w-6xl px-6 py-24">
                <div className="grid gap-12 md:grid-cols-5 md:gap-24">
                    <div className="flex flex-col gap-6 md:col-span-2">
                        <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-[44px] sm:leading-[1.1]">Sports audio briefing FAQs</h2>
                        <p className="text-lg leading-7 text-foreground/55">Everything about how Scoutcast works</p>
                        <p className="mt-2 text-[15px] leading-6 text-foreground/55">
                            Can’t find what you’re looking for? Email us at{" "}
                            <Link
                                href="mailto:support@scoutcast.ai"
                                className="font-medium text-foreground hover:underline">
                                support@scoutcast.ai
                            </Link>{" "}
                            or tag us on{" "}
                            <Link
                                href="https://x.com/scoutcastAI"
                                className="font-medium text-foreground hover:underline">
                                X
                            </Link>
                            .
                        </p>
                    </div>

                    <div className="flex flex-col gap-12 md:col-span-3">
                        {faqGroups.map((group) => (
                            <div
                                key={group.group}
                                className="flex flex-col gap-4">
                                <h3 className="pl-6 text-lg font-semibold text-foreground">{group.group}</h3>
                                <Accordion className="flex flex-col">
                                    {group.items.map((item) => (
                                        <AccordionItem
                                            key={item.id}
                                            value={item.id}
                                            className="border-white/[0.06] not-last:border-b has-data-[panel-open]:border-b-0 has-data-[panel-open]:rounded-[14px] has-data-[panel-open]:border has-data-[panel-open]:border-white/[0.08] has-data-[panel-open]:bg-white/[0.04] has-data-[panel-open]:shadow-[0_4px_16px_rgba(0,0,0,0.2)] has-data-[panel-open]:px-6 px-6">
                                            <AccordionTrigger className="cursor-pointer border-0 py-4 text-base font-normal text-foreground/85 hover:no-underline aria-expanded:font-medium aria-expanded:text-foreground">
                                                {item.question}
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <p className="text-[15px] leading-6 text-foreground/65">{item.answer}</p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
