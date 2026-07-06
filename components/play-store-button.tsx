import { PLAY_STORE_URL } from "@/lib/urls"
import { cn } from "@/lib/utils"

const buttonClass = "inline-flex h-9 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-3.5 text-sm font-medium text-foreground transition hover:bg-white/[0.08]"

export function PlayStoreButton({ label = "Android", className }: { label?: string; className?: string }) {
    return (
        <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonClass, className)}>
            <PlayGlyph />
            {label}
        </a>
    )
}

const PlayGlyph = () => (
    <svg
        aria-hidden
        width="13"
        height="13"
        viewBox="0 0 100 100"
        fill="none">
        <path d="M10 5 L10 95 L58 50 Z" fill="#4285F4" />
        <path d="M10 5 L70.6 38.2 L58 50 Z" fill="#34A853" />
        <path d="M70.6 38.2 L92 50 L70.6 61.8 L58 50 Z" fill="#FBBC04" />
        <path d="M58 50 L70.6 61.8 L10 95 Z" fill="#EA4335" />
    </svg>
)
