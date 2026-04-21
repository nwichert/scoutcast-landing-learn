import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AnnouncementBanner() {
    return (
        <Link
            href="/mcp"
            className="group flex w-full items-center justify-center gap-2 bg-[#0AB17B] px-6 py-2 text-[#0A0E14] transition hover:bg-[#0BC189]">
            <span className="rounded-full bg-[#0A0E14]/15 px-2 py-[2px] font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#0A0E14]">New</span>
            <span className="text-[13px] font-medium leading-tight sm:text-sm">
                <span className="hidden sm:inline">Scoutcast&rsquo;s MCP connector works with Claude, ChatGPT, Gemini CLI &amp; any MCP client.</span>
                <span className="sm:hidden">Scoutcast on Claude, ChatGPT &amp; Gemini CLI.</span>
            </span>
            <span className="inline-flex items-center gap-1 text-[13px] font-semibold sm:text-sm">
                Learn how
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
        </Link>
    )
}
