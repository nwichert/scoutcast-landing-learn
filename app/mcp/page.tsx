import type { Metadata } from "next"
import { ArrowRight, Check, Code2, Copy, X } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CopyUrlButton } from "@/components/copy-url-button"

export const metadata: Metadata = {
    title: "MCP Access · Scoutcast.ai",
    description:
        "Scoutcast's custom MCP connector works with Claude, ChatGPT, Gemini CLI, and any MCP-compatible client. Pull your briefings, your roster, and your casts into the assistant you already use.",
}

const CONNECTOR_URL = "https://mcpserver-hokzq74gea-uc.a.run.app"
const CONNECTOR_HOST = "mcpserver-hokzq74gea-uc.a.run.app"

const TOOLS = [
    "get_my_briefings",
    "get_briefing_script",
    "get_briefing_audio_url",
    "list_my_casts",
    "search_briefings",
    "get_my_profile",
]

const PROMPTS = [
    {
        client: "Claude",
        clientLetter: "C",
        clientBg: "#D97757",
        clientPillBg: "rgba(217,119,87,0.10)",
        clientPillBorder: "rgba(217,119,87,0.35)",
        clientShape: "rounded",
        n: "01",
        quote: "Catch me up on this week's Scoutcast briefings — what should I actually care about?",
        tools: ["get_my_briefings", "get_briefing_script"],
    },
    {
        client: "ChatGPT",
        clientLetter: "G",
        clientBg: "#10A37F",
        clientPillBg: "rgba(16,163,127,0.10)",
        clientPillBorder: "rgba(16,163,127,0.35)",
        clientShape: "round",
        n: "02",
        quote: "Find the briefing where I covered the Yankees rotation — drop me the audio link.",
        tools: ["search_briefings", "get_briefing_audio_url"],
    },
    {
        client: "Gemini CLI",
        clientLetter: "✦",
        clientBg: "#4285F4",
        clientPillBg: "rgba(66,133,244,0.10)",
        clientPillBorder: "rgba(66,133,244,0.35)",
        clientShape: "rounded",
        n: "03",
        quote: "What casts have I made this season and which one got the most listens?",
        tools: ["list_my_casts", "get_my_profile"],
    },
]

const STEPS = [
    {
        n: "01",
        title: "Open your assistant's connector settings",
        time: "~ 10 sec",
        body: "In Claude: Settings → Connectors → Add custom connector. In ChatGPT: Settings → Connectors → New connector.",
    },
    {
        n: "02",
        title: "Paste the connector URL",
        time: "~ 5 sec",
        body: `${CONNECTOR_HOST} — pasted in once, used in every conversation. No personal access tokens to manage.`,
    },
    {
        n: "03",
        title: "Sign in with Scoutcast",
        time: "~ 15 sec",
        body: "Standard OAuth flow with the same email you use in the Scoutcast app. Read-only access to your account — revoke any time from your profile.",
    },
]

const SHARED = [
    "Your briefings list, transcripts, and audio links",
    "Casts you've created, with metadata and listen counts",
    "Your profile basics (name, teams, plan tier)",
    "Search across your full briefing history",
]

const NOT_SHARED = [
    "Payment methods, billing details, App Store receipts",
    "Other users' briefings, casts, or profile data",
    "Write access — your assistant cannot delete or modify anything",
    "Conversations stay between you and your assistant — Scoutcast doesn't see them",
]

export default function McpPage() {
    return (
        <div className="dark min-h-screen bg-[#0A0E14] text-[#E6EDF3] antialiased">
            <Header />
            <main>
                <Hero />
                <Diagram />
                <Prompts />
                <Setup />
                <Trust />
                <FinalCta />
            </main>
            <Footer />
        </div>
    )
}

function StatusPill({ children }: { children: React.ReactNode }) {
    return (
        <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-[#1E2733] bg-[#0F1620] px-3.5 py-2">
            <span className="size-1.5 shrink-0 rounded-full bg-[#0AB17B] shadow-[0_0_10px_rgba(10,177,123,0.7)]" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-[#5DE0A6]">{children}</span>
        </div>
    )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
    return <span className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#5DE0A6]">{children}</span>
}

function SectionHeading({ eyebrow, title, sub, align = "left" }: { eyebrow: string; title: React.ReactNode; sub?: React.ReactNode; align?: "left" | "center" }) {
    return (
        <div className={align === "center" ? "mx-auto flex max-w-2xl flex-col items-center gap-4 text-center" : "flex flex-col gap-4"}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="text-balance text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-[#E6EDF3] sm:text-[42px] lg:text-[56px]">{title}</h2>
            {sub && <p className="max-w-xl text-base leading-7 text-[#7D8693] sm:text-lg">{sub}</p>}
        </div>
    )
}

function Hero() {
    return (
        <section className="relative overflow-hidden px-6 pb-16 pt-28 text-center sm:pt-32 lg:px-12 lg:pb-24 lg:pt-40">
            <div
                aria-hidden
                className="pointer-events-none absolute -top-44 left-1/2 h-[520px] w-[520px] -translate-x-1/2 lg:h-[800px] lg:w-[1100px]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle farthest-corner at 50% 50%, rgba(10,177,123,0.16) 0%, rgba(10,177,123,0.04) 40%, transparent 70%)",
                }}
            />
            <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-7">
                <StatusPill>MCP Server · Live</StatusPill>
                <h1 className="text-balance text-[44px] font-bold leading-[1.05] tracking-[-0.025em] text-[#E6EDF3] sm:text-[64px] lg:text-[80px]">
                    Your sports brain,
                    <br />
                    plugged into Claude, ChatGPT &amp; Gemini.
                </h1>
                <p className="max-w-2xl text-base leading-[1.6] text-[#7D8693] sm:text-lg lg:text-xl">
                    Scoutcast&rsquo;s custom MCP connector works with Claude, ChatGPT, Gemini CLI, and any MCP-compatible client. Pull your briefings, your roster, and your casts into the assistant you already use.
                </p>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                    <a
                        href="#setup"
                        className="inline-flex h-14 items-center justify-center gap-2.5 rounded-[14px] bg-[#0AB17B] px-6 text-base font-semibold text-[#0A0E14] transition hover:bg-[#0BC189]">
                        <Check
                            className="size-3.5"
                            strokeWidth={2.5}
                        />
                        Add Scoutcast to your AI
                    </a>
                    <a
                        href="#setup"
                        className="inline-flex h-14 items-center justify-center gap-2.5 rounded-[14px] border border-[#1E2733] bg-[#0F1620]/60 px-[22px] text-[#E6EDF3] transition hover:bg-[#0F1620]">
                        <Code2 className="size-3.5 text-[#5DE0A6]" />
                        <span className="font-mono text-sm font-medium">View setup snippet</span>
                    </a>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2.5">
                    <span className="font-mono text-xs tracking-[0.04em] text-[#7D8693]">{CONNECTOR_HOST}</span>
                    <span className="size-[3px] rounded-full bg-[#1E2733]" />
                    <span className="font-mono text-xs tracking-[0.04em] text-[#7D8693]">Compatible with Claude · ChatGPT · Gemini CLI · any MCP client</span>
                </div>
            </div>
        </section>
    )
}

function Diagram() {
    return (
        <section className="px-6 py-16 lg:px-12 lg:py-24">
            <div className="mx-auto flex max-w-6xl flex-col gap-14">
                <SectionHeading
                    eyebrow="How it connects"
                    title="One server. Every assistant you already use."
                    align="center"
                />
                <div className="relative overflow-hidden rounded-3xl border border-[#1E2733] bg-[#0F1620] p-6 sm:p-10 lg:p-14">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[800px] max-w-full -translate-x-1/2 -translate-y-1/2"
                        style={{
                            backgroundImage:
                                "radial-gradient(ellipse at 50% 50%, rgba(10,177,123,0.10) 0%, transparent 70%)",
                        }}
                    />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 opacity-[0.35]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(30,39,51,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(30,39,51,0.8) 1px, transparent 1px)",
                            backgroundSize: "32px 32px",
                        }}
                    />
                    <div className="relative flex flex-col items-stretch gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
                        <SourceCard />
                        <FlowConnector label="JSON-RPC" />
                        <McpBridge />
                        <FlowConnector label="Streaming" />
                        <ClientStack />
                    </div>
                </div>
            </div>
        </section>
    )
}

function SourceCard() {
    return (
        <article className="relative flex w-full max-w-md flex-col gap-3 self-center rounded-2xl border border-[#1E2733] bg-[#0A0E14] p-6 lg:w-[280px]">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <div className="flex size-7 items-center justify-center rounded-lg border border-[#0AB17B]/40 bg-[#0AB17B]/10">
                        <span className="grid grid-cols-2 gap-px">
                            {[0, 1, 2, 3].map((i) => (
                                <span
                                    key={i}
                                    className="size-1.5 rounded-[1px] bg-[#0AB17B]"
                                />
                            ))}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-[#E6EDF3]">Scoutcast.ai</span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.04em] text-[#7D8693]">Source</span>
                    </div>
                </div>
                <span className="size-1.5 rounded-full bg-[#0AB17B] shadow-[0_0_8px_rgba(10,177,123,0.7)]" />
            </div>
            <div className="mt-2 flex flex-col gap-1.5 border-t border-[#1E2733] pt-3">
                {TOOLS.map((tool, i) => (
                    <div
                        key={tool}
                        className={i === 0 ? "rounded-md bg-[#0AB17B]/10 px-2 py-1.5" : "px-2 py-1.5"}>
                        <span className={`font-mono text-[11px] ${i === 0 ? "text-[#5DE0A6]" : "text-[#7D8693]"}`}>{tool}</span>
                    </div>
                ))}
            </div>
        </article>
    )
}

function FlowConnector({ label }: { label: string }) {
    return (
        <div
            aria-hidden
            className="flex flex-col items-center justify-center gap-2.5 self-center lg:w-32">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#0AB17B]/35 bg-[#0AB17B]/10 px-2.5 py-1">
                <span className="size-[5px] rounded-full bg-[#0AB17B]" />
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.06em] text-[#5DE0A6]">{label}</span>
            </div>
            <svg
                className="hidden lg:block"
                width="140"
                height="24"
                viewBox="0 0 140 24"
                fill="none">
                <path
                    d="M0 12 L140 12"
                    stroke="rgba(10,177,123,0.55)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="6 6"
                    className="scoutcast-dash-flow"
                />
            </svg>
            <svg
                className="lg:hidden"
                width="24"
                height="48"
                viewBox="0 0 24 48"
                fill="none">
                <path
                    d="M12 0 L12 48"
                    stroke="rgba(10,177,123,0.55)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="6 6"
                    className="scoutcast-dash-flow"
                />
            </svg>
        </div>
    )
}

function McpBridge() {
    return (
        <article
            className="relative flex w-full max-w-md flex-col gap-4 self-center rounded-[20px] border border-[#0AB17B]/35 p-6 shadow-[0_0_0_1px_rgba(10,177,123,0.08),0_24px_60px_rgba(10,177,123,0.18)] lg:w-[320px] lg:p-7"
            style={{
                backgroundImage: "linear-gradient(180deg, rgba(10,177,123,0.10) 0%, rgba(10,177,123,0.02) 100%)",
            }}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-[#0AB17B]">
                        <Code2
                            className="size-4 text-[#0A0E14]"
                            strokeWidth={2.5}
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-base font-bold text-[#E6EDF3]">MCP Server</span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-[#5DE0A6]">Protocol · v1</span>
                    </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0AB17B]/15 px-2 py-1">
                    <span className="size-[5px] rounded-full bg-[#0AB17B] shadow-[0_0_8px_rgba(10,177,123,0.7)]" />
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.06em] text-[#5DE0A6]">Live</span>
                </span>
            </div>
            <div className="flex flex-col gap-1 rounded-[10px] border border-[#1E2733] bg-[#0A0E14] px-3.5 py-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-[#7D8693]">Connector URL</span>
                <span className="break-all font-mono text-[11px] leading-4 text-[#E6EDF3]">{CONNECTOR_HOST}</span>
            </div>
            <div className="flex flex-row gap-2">
                <div className="flex flex-1 flex-col rounded-lg border border-[#0AB17B]/25 bg-[#0AB17B]/[0.06] px-3 py-2.5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-[#7D8693]">Auth</span>
                    <span className="text-sm font-semibold text-[#E6EDF3]">OAuth 2.1</span>
                </div>
                <div className="flex flex-1 flex-col rounded-lg border border-[#0AB17B]/25 bg-[#0AB17B]/[0.06] px-3 py-2.5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-[#7D8693]">Scope</span>
                    <span className="text-sm font-semibold text-[#E6EDF3]">Read-only</span>
                </div>
            </div>
        </article>
    )
}

function ClientStack() {
    return (
        <div className="flex w-full max-w-md flex-col gap-3 self-center lg:w-[280px]">
            <ClientCard
                name="Claude"
                icon={<span className="text-sm font-bold text-[#0A0E14]">C</span>}
                bg="#D97757"
                shape="rounded"
                meta="Web · Desktop · iOS"
            />
            <ClientCard
                name="ChatGPT"
                icon={<span className="text-sm font-bold text-[#0A0E14]">G</span>}
                bg="#10A37F"
                shape="round"
                meta="via Connectors"
            />
            <ClientCard
                name="Gemini CLI"
                icon={<GeminiSparkle />}
                bg="#4285F4"
                shape="rounded"
                meta="Terminal"
            />
            <div className="flex items-center justify-center rounded-xl border border-dashed border-[#1E2733] p-3">
                <span className="font-mono text-[11px] tracking-[0.04em] text-[#7D8693]">+ Cursor · Zed · any MCP client</span>
            </div>
        </div>
    )
}

function GeminiSparkle() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="size-3.5"
            fill="#0A0E14"
            aria-hidden>
            <path d="M12 1.5L13.7 9.1L21.5 12L13.7 14.9L12 22.5L10.3 14.9L2.5 12L10.3 9.1Z" />
        </svg>
    )
}

function ClientCard({ name, icon, bg, shape, meta }: { name: string; icon: React.ReactNode; bg: string; shape: "rounded" | "round"; meta: string }) {
    return (
        <article className="flex flex-col gap-2 rounded-2xl border border-[#1E2733] bg-[#0A0E14] p-5">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <div
                        className={`flex size-7 items-center justify-center ${shape === "round" ? "rounded-full" : "rounded-lg"}`}
                        style={{ backgroundColor: bg }}>
                        {icon}
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-[#E6EDF3]">{name}</span>
                        <span className="font-mono text-[10px] tracking-[0.04em] text-[#7D8693]">{meta}</span>
                    </div>
                </div>
                <span className="size-1.5 rounded-full bg-[#0AB17B] shadow-[0_0_8px_rgba(10,177,123,0.6)]" />
            </div>
        </article>
    )
}

function Prompts() {
    return (
        <section className="px-6 py-16 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="What you can ask"
                    title="Talk to your sports brief like you'd talk to your group chat."
                    sub="Once Scoutcast is connected, your assistant has direct access to your briefings, your roster, the casts you've made, and your account profile."
                />
                <div className="mt-12 grid gap-5 md:grid-cols-3">
                    {PROMPTS.map((p) => (
                        <article
                            key={p.n}
                            className="flex flex-col gap-5 rounded-[20px] border border-[#1E2733] bg-[#0F1620] p-6 lg:p-7">
                            <div className="flex items-center justify-between">
                                <span
                                    className="inline-flex items-center gap-2 rounded-full border px-2.5 py-1"
                                    style={{ borderColor: p.clientPillBorder, backgroundColor: p.clientPillBg }}>
                                    <span
                                        className={`flex size-3.5 items-center justify-center text-[9px] font-bold text-[#0A0E14] ${p.clientShape === "round" ? "rounded-full" : "rounded-[3px]"}`}
                                        style={{ backgroundColor: p.clientBg }}>
                                        {p.clientLetter}
                                    </span>
                                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.06em] text-[#E6EDF3]">{p.client}</span>
                                </span>
                                <span className="font-mono text-[10px] tracking-[0.04em] text-[#7D8693]">PROMPT {p.n}</span>
                            </div>
                            <p className="text-[20px] font-semibold leading-[1.35] text-[#E6EDF3]">&ldquo;{p.quote}&rdquo;</p>
                            <div className="flex flex-col gap-2 border-t border-[#1E2733] pt-4">
                                {p.tools.map((tool) => (
                                    <div
                                        key={tool}
                                        className="flex items-center gap-2">
                                        <Check
                                            className="size-3 shrink-0 text-[#0AB17B]"
                                            strokeWidth={2.5}
                                        />
                                        <span className="font-mono text-[11px] tracking-[0.04em] text-[#5DE0A6]">{tool}</span>
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

function Setup() {
    return (
        <section
            id="setup"
            className="scroll-mt-24 px-6 py-16 lg:px-12 lg:py-24">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[440px_1fr] lg:gap-20">
                <div className="flex flex-col gap-5">
                    <Eyebrow>Two-tap setup</Eyebrow>
                    <h2 className="text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-[#E6EDF3] sm:text-[42px] lg:text-[56px]">Paste a URL. You&rsquo;re done.</h2>
                    <p className="text-base leading-7 text-[#7D8693] sm:text-lg">No SDK to install, no API keys to copy. Drop the connector URL into your assistant&rsquo;s settings, sign in with the Scoutcast account you already have, and the tools light up in the same conversation you were already in.</p>
                    <div className="mt-2 flex flex-col gap-1.5 rounded-xl border border-[#1E2733] bg-[#0F1620] p-4">
                        <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-[#7D8693]">Your connector URL</span>
                            <span className="inline-flex items-center gap-1.5 rounded-md border border-[#1E2733] bg-[#0A0E14] px-2 py-0.5">
                                <Copy className="size-2.5 text-[#5DE0A6]" />
                                <span className="font-mono text-[10px] font-medium tracking-[0.04em] text-[#E6EDF3]">Copy</span>
                            </span>
                        </div>
                        <span className="break-all font-mono text-[13px] leading-[1.4] text-[#5DE0A6]">{CONNECTOR_URL}</span>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    {STEPS.map((step) => (
                        <article
                            key={step.n}
                            className="flex flex-row gap-5 rounded-2xl border border-[#1E2733] bg-[#0F1620] p-6">
                            <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#0AB17B]/40 bg-[#0AB17B]/10">
                                <span className="font-mono text-sm font-semibold text-[#5DE0A6]">{step.n}</span>
                            </div>
                            <div className="flex flex-1 flex-col gap-1.5">
                                <div className="flex flex-col items-baseline justify-between gap-1 sm:flex-row sm:gap-3">
                                    <h3 className="text-lg font-semibold text-[#E6EDF3]">{step.title}</h3>
                                    <span className="font-mono text-[11px] tracking-[0.04em] text-[#7D8693]">{step.time}</span>
                                </div>
                                <p className="break-words text-sm leading-6 text-[#7D8693]">{step.body}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

function Trust() {
    return (
        <section className="px-6 py-16 lg:px-12 lg:py-24">
            <div className="mx-auto flex max-w-6xl flex-col gap-12">
                <SectionHeading
                    eyebrow="What's shared, what isn't"
                    title="Read-only by design."
                    sub="The MCP server can answer questions about your Scoutcast account. It cannot post on your behalf, change your subscription, or modify a single byte of your data."
                    align="center"
                />
                <div className="grid gap-5 lg:grid-cols-2">
                    <article
                        className="flex flex-col gap-5 rounded-[20px] border border-[#0AB17B]/35 p-7 lg:p-8"
                        style={{
                            backgroundImage: "linear-gradient(180deg, rgba(10,177,123,0.06) 0%, rgba(10,177,123,0.01) 100%)",
                        }}>
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-[#E6EDF3] sm:text-[22px]">Shared with your assistant</h3>
                            <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#5DE0A6]">Read</span>
                        </div>
                        <ul className="flex flex-col gap-3">
                            {SHARED.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3">
                                    <Check
                                        className="mt-1 size-4 shrink-0 text-[#0AB17B]"
                                        strokeWidth={2.5}
                                    />
                                    <span className="text-[15px] leading-[1.5] text-[#E6EDF3]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                    <article className="flex flex-col gap-5 rounded-[20px] border border-[#1E2733] bg-[#0F1620] p-7 lg:p-8">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-[#E6EDF3] sm:text-[22px]">Never leaves Scoutcast</h3>
                            <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#7D8693]">Private</span>
                        </div>
                        <ul className="flex flex-col gap-3">
                            {NOT_SHARED.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3">
                                    <X
                                        className="mt-1 size-4 shrink-0 text-[#7D8693]"
                                        strokeWidth={2}
                                    />
                                    <span className="text-[15px] leading-[1.5] text-[#7D8693]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    )
}

function FinalCta() {
    return (
        <section className="relative flex flex-col items-center gap-7 overflow-hidden px-6 pb-32 pt-24 text-center lg:pb-40 lg:pt-32">
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-60 left-1/2 h-[600px] w-[900px] -translate-x-1/2"
                style={{
                    backgroundImage:
                        "radial-gradient(ellipse at 50% 50%, rgba(10,177,123,0.18) 0%, rgba(10,177,123,0.04) 40%, transparent 70%)",
                }}
            />
            <div className="relative inline-flex items-center gap-2.5 rounded-full border border-[#0AB17B]/40 bg-[#0AB17B]/10 px-3.5 py-2">
                <span className="size-1.5 shrink-0 rounded-full bg-[#0AB17B] shadow-[0_0_10px_rgba(10,177,123,0.7)]" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#5DE0A6]">Available now · Free with any Scoutcast account</span>
            </div>
            <h2 className="relative text-balance text-[44px] font-bold leading-[1.05] tracking-[-0.025em] text-[#E6EDF3] sm:text-[60px] lg:text-[72px]">
                Stop copy-pasting.
                <br />
                Start asking.
            </h2>
            <p className="relative max-w-md text-base leading-7 text-[#7D8693] sm:text-lg">Wire Scoutcast into the assistant you already have open. Five minutes from now you&rsquo;ll be asking your sports brief anything.</p>
            <div className="relative mt-3 flex flex-col gap-3 sm:flex-row">
                <a
                    href="#setup"
                    className="inline-flex h-14 items-center justify-center gap-2.5 rounded-[14px] bg-[#0AB17B] px-6 text-base font-semibold text-[#0A0E14] transition hover:bg-[#0BC189]">
                    Get setup
                    <ArrowRight
                        className="size-4"
                        strokeWidth={2.5}
                    />
                </a>
                <CopyUrlButton url={CONNECTOR_URL} />
            </div>
        </section>
    )
}
