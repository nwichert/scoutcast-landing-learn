import type { Metadata } from "next"
import { LegalPageHeader, LegalSection, LegalList } from "@/components/legal-page"
import Footer from "@/components/footer"

export const metadata: Metadata = {
    title: "Copyright Dispute Policy · Scoutcast.ai",
    description: "How Scoutcast handles DMCA copyright infringement claims and counter-notifications.",
}

export default function CopyrightPage() {
    return (
        <div className="bg-background min-h-screen text-foreground">
            <LegalPageHeader />

            <main className="mx-auto max-w-3xl px-6 pb-32 pt-16">
                <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-[56px] sm:leading-[1.05]">Copyright Dispute Policy</h1>
                <p className="mt-3 text-base text-foreground/55">Effective date: February 23, 2026</p>

                <div className="mt-14 space-y-5 text-[17px] leading-[1.7] text-foreground/80">
                    <p>We follow the Digital Millennium Copyright Act (DMCA) to handle copyright infringement claims. We will:</p>
                    <LegalList
                        items={[
                            "Expeditiously block or remove content we reasonably believe infringes copyright",
                            "Terminate accounts of repeat infringers",
                        ]}
                    />
                </div>

                <LegalSection title="How to Report Copyright Infringement">
                    <p>If you believe content on the App infringes your copyright (or you&rsquo;re authorized to act for the copyright owner), send a written notice to our Designated Agent with all the following:</p>
                    <LegalList
                        items={[
                            "Your physical or electronic signature (or signature of someone authorized to act for the copyright owner)",
                            "Description of the copyrighted work being infringed",
                            "Location of the infringing content with enough detail for us to find and verify it",
                            "Your contact information: address, phone number, and email address (if available)",
                            "A statement that you have a good faith belief the use isn’t authorized by the copyright owner, their agent, or the law",
                            "A statement under penalty of perjury that your notice is accurate and you’re authorized to act for the copyright owner",
                        ]}
                    />
                </LegalSection>

                <LegalSection title="What We Do When We Receive a Valid Notice">
                    <p>Upon receipt of a compliant DMCA notice, we will expeditiously remove or disable access to the identified material and promptly notify the uploader/subscriber. If the subscriber is a repeat infringer, we may terminate their account consistent with our repeat-infringer policy.</p>
                </LegalSection>

                <LegalSection title="How to Submit a Counter-Notice">
                    <p>If you believe your content was wrongly removed or you had the right to post it, you can send our Designated Agent a counter-notice with:</p>
                    <LegalList
                        items={[
                            "Your physical or electronic signature",
                            "Description of the removed content and where it appeared before removal",
                            "A statement under penalty of perjury that you believe the content was removed by mistake or misidentification",
                            <>
                                Your name, address, phone number, and email (if available), plus your consent to federal court jurisdiction either:
                                <ul className="ml-5 mt-2 list-[circle] space-y-2 marker:text-foreground/40">
                                    <li>In the judicial district where you live (if in the United States), or</li>
                                    <li>In any judicial district where Scoutcast is located (if outside the United States)</li>
                                </ul>
                            </>,
                        ]}
                    />
                    <p>You must also agree to accept legal service from the person who filed the original complaint.</p>
                </LegalSection>

                <LegalSection title="Counter-Notice Process">
                    <p>When we receive a valid counter-notice, we will promptly forward it to the original notifier and inform them that we will restore the material in ten (10) business days. Unless our agent receives notice that the notifier has filed an action seeking a court order, we will restore the material between ten (10) and fourteen (14) business days after we received your counter-notice.</p>
                </LegalSection>

                <LegalSection title="Repeat Infringers">
                    <p>Scoutcast maintains and enforces a policy to terminate accounts of users who repeatedly infringe copyrights. We notify all account holders of this policy and will terminate accounts when appropriate. We support and do not interfere with standard technical measures that copyright owners use to identify and protect their works.</p>
                </LegalSection>

                <LegalSection title="Contact Our Designated Agent">
                    <p>Send all copyright notices and counter-notices to:</p>
                    <address className="not-italic rounded-2xl border border-border bg-foreground/[0.03] p-6 text-foreground/90">
                        <div className="font-semibold text-foreground">Designated DMCA Agent</div>
                        <div className="mt-2">Scoutcast.ai &mdash; Legal</div>
                        <div>145 Strieter Rd.</div>
                        <div>Ann Arbor, MI 48103</div>
                        <div className="mt-2">
                            <a
                                href="mailto:legal@scoutcast.ai"
                                className="text-blue-600 hover:underline">
                                legal@scoutcast.ai
                            </a>
                        </div>
                    </address>
                    <p>Scoutcast has registered this agent with the U.S. Copyright Office&rsquo;s DMCA Designated Agent Directory and will keep the listing up to date.</p>
                </LegalSection>
            </main>
            <Footer variant="light" />
        </div>
    )
}
