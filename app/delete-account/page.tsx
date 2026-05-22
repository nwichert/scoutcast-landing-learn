import Link from "next/link"
import type { Metadata } from "next"
import { LegalPageHeader, LegalSection, LegalList } from "@/components/legal-page"
import Footer from "@/components/footer"

export const metadata: Metadata = {
    title: "Delete Your Account · Scoutcast.ai",
    description: "How to delete your Scoutcast account and the data associated with it.",
}

export default function DeleteAccountPage() {
    return (
        <div className="bg-background min-h-screen text-foreground">
            <LegalPageHeader />

            <main className="mx-auto max-w-3xl px-6 pb-32 pt-16">
                <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-[56px] sm:leading-[1.05]">Delete Your Account</h1>
                <p className="mt-3 text-base text-foreground/55">Last updated: May 22, 2026</p>

                <div className="mt-14 space-y-5 text-[17px] leading-[1.7] text-foreground/80">
                    <p>
                        This page explains how to delete your Scoutcast account and the personal data associated with it. The Scoutcast app is provided by Scoutcast.ai, Inc. You can request deletion at any time using either method below.
                    </p>
                </div>

                <LegalSection title="Delete your account in the app (fastest)">
                    <ol className="ml-5 list-decimal space-y-2 marker:text-foreground/40">
                        <li>Open the Scoutcast app.</li>
                        <li>Tap the <strong className="font-semibold text-foreground">gear icon</strong> on the Feed to open <strong className="font-semibold text-foreground">Settings</strong>.</li>
                        <li>Tap <strong className="font-semibold text-foreground">Delete Account</strong> and confirm.</li>
                    </ol>
                    <p>This permanently removes your account and associated data right away.</p>
                </LegalSection>

                <LegalSection title="If you cannot access the app">
                    <p>
                        Email{" "}
                        <a
                            href="mailto:support@scoutcast.ai?subject=Delete%20my%20account"
                            className="text-blue-600 hover:underline">
                            support@scoutcast.ai
                        </a>{" "}
                        from the email address on your account, with the subject line &ldquo;Delete my account.&rdquo; We will verify the request and process it within 30 days.
                    </p>
                </LegalSection>

                <LegalSection title="What gets deleted">
                    <LegalList
                        items={[
                            "Your profile (name, email address, account ID)",
                            "Your Casts and generated audio briefings",
                            "Your listening history, streaks, and predictions",
                            "Crew memberships and any hot-take recordings",
                            "Your fantasy roster and any feedback you submitted",
                            "Your saved preferences, followed teams and players, and any X (Twitter) handles you added",
                        ]}
                    />
                </LegalSection>

                <LegalSection title="What may be retained, and for how long">
                    <LegalList
                        items={[
                            "Purchase and transaction records, which are processed and retained by the app store (Google Play or the Apple App Store) and which we may keep as required for legal, tax, accounting, and fraud-prevention purposes.",
                            "Information we are required to retain to comply with legal obligations, resolve disputes, or enforce our agreements — kept only as long as required for those purposes.",
                            "Anonymized or aggregated data that can no longer identify you, which may be retained to operate and improve the Services.",
                            "Residual copies in routine encrypted backups, which are purged on our standard backup rotation.",
                        ]}
                    />
                    <p>All identifiable personal data is deleted within 30 days of your request, except where a longer period is required by law.</p>
                </LegalSection>

                <LegalSection title="Cancel your subscription separately">
                    <p>
                        Deleting your account does not cancel an active paid subscription. To stop auto-renewing charges for Scoutcast Unlimited or the NFL Fantasy Season Pass, cancel in Google Play (Android) or your Apple ID settings (iOS) in addition to deleting your account.
                    </p>
                </LegalSection>

                <LegalSection title="Questions">
                    <p>
                        For questions about account deletion or your data, contact{" "}
                        <a
                            href="mailto:support@scoutcast.ai"
                            className="text-blue-600 hover:underline">
                            support@scoutcast.ai
                        </a>
                        . For more on how we handle your data, see our{" "}
                        <Link
                            href="/privacy"
                            className="text-blue-600 hover:underline">
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </LegalSection>
            </main>
            <Footer variant="light" />
        </div>
    )
}
