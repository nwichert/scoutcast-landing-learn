import Link from "next/link"
import type { Metadata } from "next"
import { LegalPageHeader } from "@/components/legal-page"
import Footer from "@/components/footer"

export const metadata: Metadata = {
    title: "Contact & Support · Scoutcast.ai",
    description: "Get in touch with the Scoutcast team — questions, bug reports, and feedback.",
}

export default function ContactPage() {
    return (
        <div className="bg-background min-h-screen text-foreground">
            <LegalPageHeader />

            <main className="mx-auto max-w-3xl px-6 pb-32 pt-16">
                <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-[56px] sm:leading-[1.05]">Contact &amp; Support</h1>
                <p className="mt-3 text-base text-foreground/55">Last updated: February 23, 2026</p>

                <p className="mt-14 text-lg leading-7 text-foreground/80">Have a question, found a bug, or just want to share feedback? Reach out to us anytime.</p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">Email Us</h2>
                <p className="mt-4 text-base leading-7 text-foreground/80">
                    You can contact the Scoutcast team at:{" "}
                    <a
                        href="mailto:support@scoutcast.ai"
                        className="font-semibold text-foreground hover:underline">
                        support@scoutcast.ai
                    </a>
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">More Information</h2>
                <p className="mt-4 text-base leading-7 text-foreground/80">
                    For details on how we handle your data and app usage, please review our{" "}
                    <Link
                        href="/privacy"
                        className="text-blue-600 hover:underline">
                        Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link
                        href="/terms"
                        className="text-blue-600 hover:underline">
                        Terms of Service
                    </Link>
                    .
                </p>
            </main>
            <Footer variant="light" />
        </div>
    )
}
