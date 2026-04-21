import Link from "next/link"
import { LogoIcon } from "@/components/logo"
import { DownloadButton } from "@/components/download-button"

export function LegalPageHeader() {
    return (
        <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-10">
            <Link
                href="/"
                aria-label="Scoutcast.ai home"
                className="flex items-center gap-2.5">
                <LogoIcon className="size-9" />
                <span className="text-[26px] font-bold tracking-tight">Scoutcast.ai</span>
            </Link>
            <DownloadButton
                label="Available on the App Store"
                className="h-11 rounded-full border-foreground bg-foreground px-5 text-background hover:bg-foreground/90"
            />
        </header>
    )
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-[28px]">{title}</h2>
            <div className="mt-5 space-y-5 text-[17px] leading-[1.7] text-foreground/80">{children}</div>
        </section>
    )
}

export function LegalSubsection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="mt-8">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">{title}</h3>
            <div className="mt-3 space-y-3">{children}</div>
        </div>
    )
}

export function LegalList({ items }: { items: React.ReactNode[] }) {
    return (
        <ul className="ml-5 list-disc space-y-2 marker:text-foreground/40">
            {items.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    )
}
