import Link from "next/link"

const navLinks = [
    { label: "Contact", href: "#contact" },
    { label: "X", href: "https://x.com" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Copyright Dispute Policy", href: "#copyright" },
]

export default function Footer() {
    return (
        <footer className="dark border-t border-white/[0.08] bg-[#0a0a0a]">
            <div className="mx-auto flex max-w-7xl flex-col gap-20 px-20 pb-12 pt-24">
                <Link
                    href="/"
                    className="flex w-fit items-center gap-2.5">
                    <svg
                        aria-hidden
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none">
                        <path
                            d="M9 6 L27 6 L27 14 L17 14 L17 20 L27 20 L27 30 L9 30 L9 22 L19 22 L19 16 L9 16 Z"
                            fill="currentColor"
                            className="text-foreground"
                        />
                    </svg>
                    <span className="text-[28px] font-semibold tracking-tight text-foreground">Scoutcast.ai</span>
                </Link>

                <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                    <nav className="flex flex-wrap items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm text-foreground/55 transition hover:text-foreground">
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center gap-6">
                        <SocialLink
                            href="https://instagram.com"
                            label="Instagram">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <rect
                                    x="2"
                                    y="2"
                                    width="20"
                                    height="20"
                                    rx="5"
                                />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line
                                    x1="17.5"
                                    y1="6.5"
                                    x2="17.51"
                                    y2="6.5"
                                />
                            </svg>
                        </SocialLink>
                        <SocialLink
                            href="https://linkedin.com"
                            label="LinkedIn">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </SocialLink>
                        <SocialLink
                            href="https://x.com/scoutcastAI"
                            label="X">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </SocialLink>
                        <SocialLink
                            href="#download"
                            label="Apple App Store">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor">
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                            </svg>
                        </SocialLink>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const SocialLink = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
    <Link
        href={href}
        aria-label={label}
        className="flex size-5 items-center justify-center text-foreground transition hover:text-foreground/70">
        {children}
    </Link>
)
