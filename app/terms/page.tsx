import Link from "next/link"
import type { Metadata } from "next"
import { LegalPageHeader, LegalSection, LegalSubsection, LegalList } from "@/components/legal-page"
import Footer from "@/components/footer"

export const metadata: Metadata = {
    title: "Terms of Service · Scoutcast.ai",
    description: "The rules for using the Scoutcast app and related services.",
}

export default function TermsPage() {
    return (
        <div className="bg-background min-h-screen text-foreground">
            <LegalPageHeader />

            <main className="mx-auto max-w-3xl px-6 pb-32 pt-16">
                <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-[56px] sm:leading-[1.05]">Terms of Service</h1>
                <p className="mt-3 text-base text-foreground/55">Effective date: February 23, 2026</p>

                <div className="mt-14 space-y-5 text-[17px] leading-[1.7] text-foreground/80">
                    <p>Welcome to Scoutcast! Please read on to learn the rules for using our application, website, and services (collectively, &ldquo;Scoutcast&rdquo; or the &ldquo;App&rdquo;).</p>
                    <p>
                        These Terms of Service (the &ldquo;Terms&rdquo;) are a contract between you and Scoutcast (&ldquo;we&rdquo; and &ldquo;us&rdquo;) and required to use the App. These Terms include the provisions on this page and in our{" "}
                        <Link
                            href="/privacy"
                            className="text-blue-600 hover:underline">
                            Privacy Policy
                        </Link>
                        .
                    </p>
                    <p>The &ldquo;Dispute Resolution&rdquo; section of these Terms explains how any disputes between you and Scoutcast will be handled. It includes an arbitration agreement that requires most disputes to go through binding arbitration instead of court. You can opt out of this arbitration agreement by following the instructions in that section. If you don&rsquo;t opt out, you&rsquo;ll need to bring any claims against us individually (not as part of a class action), and you&rsquo;ll be giving up your right to go to court or have a jury trial.</p>
                </div>

                <LegalSection title="What Is Scoutcast?">
                    <p>Scoutcast is a personalized sports audio briefing app designed to help you stay informed about the teams, players, and sports topics you care about most. By selecting your favorite teams and players, Scoutcast uses AI to generate spoken audio briefings (&ldquo;Casts&rdquo;) that deliver news, analysis, game recaps, and insider perspectives you can listen to throughout your day. Although we believe our App will be fun and informative, it is not a social or companion service, it does not provide gambling, wagering, or financial advice, and it does not provide emotional, therapeutic, or medical support.</p>
                </LegalSection>

                <LegalSection title="Third-Party Sports Content and News">
                    <p>Scoutcast uses licensed data providers, official sports APIs, and publicly available news and media sources to create personalized audio briefings based on your team and player selections. Our automated AI systems generate summaries, analysis, and commentary from these sources. All news and third-party content remain the property of their original rights holders. You may not redistribute content from Scoutcast in any way that replaces or substitutes for the original source.</p>
                </LegalSection>

                <LegalSection title="X (Twitter) Handle Integration">
                    <p>You may add X (Twitter) handles within the App to receive insider perspectives and analysis from publicly available posts by those accounts. Content from these accounts is used solely to enhance your personalized audio briefings. Scoutcast does not access your personal X account, direct messages, or private data. These third-party accounts remain subject to X&rsquo;s terms and policies, and we are not responsible for the accuracy or availability of content from those sources.</p>
                </LegalSection>

                <LegalSection title="Using the App">
                    <LegalSubsection title="Account Registration">
                        <p>The App is offered only to individuals who are at least 18 years old and can form legally binding contracts. By creating an account, you represent that you meet this requirement. You&rsquo;ll need to give us accurate, complete, and up-to-date registration information about yourself at all times.</p>
                        <p>You can only use the App for your own personal purposes&mdash;not for any third party&rsquo;s benefit and not impersonating anyone. You can&rsquo;t transfer or share your account or password with anyone else, and you need to keep them secure. You&rsquo;re responsible for all activity on your account and with your account.</p>
                        <p>If you choose to sign up or log in using a third-party service (like Google or Apple), we may receive information from that service such as your name, email address, and profile picture to create or authenticate your account. By using these login options, you authorize us to access and use this information in accordance with our Privacy Policy.</p>
                    </LegalSubsection>

                    <LegalSubsection title="Our Policies and Standards">
                        <p>Scoutcast helps you listen to personalized sports audio briefings based on your selected teams, players, and interests. To protect our community and service integrity, you may not use Scoutcast to connect, input, or share content that is illegal, harassing, threatening, exploitative, or harmful. You may not generate or transmit content that infringes intellectual property rights, discloses sensitive personal information without authorization, or violates any applicable laws. You may not create, distribute, or republish summaries or outputs that substitute for original sources or violate third-party service terms.</p>
                        <p>While we are not obligated to monitor user activity or content, we may do so to maintain security and protect our users. We reserve the right to restrict or remove content, suspend accounts, or report illegal activity to appropriate authorities if we identify violations of these standards.</p>
                    </LegalSubsection>

                    <LegalSubsection title="Voice and Audio Features">
                        <p>When you use voice features (such as speech recognition to ask questions during a Cast), Scoutcast may capture and process your audio. You must obtain all legally required consents before recording others. You are responsible for complying with all applicable call-recording and eavesdropping laws. For more information, please read our Privacy Policy.</p>
                    </LegalSubsection>
                </LegalSection>

                <LegalSection title="Our Rules and Requirements">
                    <p>We want you to have a great experience using the App, but there are some rules to follow. When you use the App, you promise not to:</p>
                    <LegalList
                        items={[
                            "Infringe or violate anyone’s intellectual property or other rights;",
                            "Use Scoutcast to create or simulate companionship, romance, or therapeutic relationships;",
                            "Violate any laws or regulations, including U.S. Export Administration Regulations (EAR) or International Traffic in Arms Regulations (ITAR);",
                            "Use the App in ways that are harmful, fraudulent, deceptive, threatening, harassing, defamatory, obscene, or otherwise objectionable;",
                            "Include information you know (or should know) is wrong, incomplete, or debatable without proper disclaimers;",
                            "Put your account or anyone else’s at risk (like letting someone else log in as you);",
                            "Try to get passwords, account info, or other security information from other users;",
                            "Compromise computer network security or crack passwords or encryption codes;",
                            "Run mailing lists, Listserv, auto-responders, spam, or any processes that run when you’re not logged in or that interfere with how the App works (including overloading our infrastructure);",
                            "“Crawl,” “scrape,” or “spider” any pages, data, or portions of the App or Content (whether manually or automatically);",
                            "Use Scoutcast outputs for gambling, wagering, or betting purposes;",
                            "Decompile, reverse engineer, or try to get the source code or underlying ideas behind the App.",
                        ]}
                    />
                    <p>If you violate any of these rules, we may terminate your right to use or access the App immediately.</p>
                </LegalSection>

                <LegalSection title="Your Subscription">
                    <p>These Terms become effective when you first use the App or register and activate your account with us, whichever happens first.</p>
                    <p>The App may offer both free and paid subscription tiers. Paid subscriptions are billed through Apple&rsquo;s App Store via StoreKit and will automatically renew for additional periods of the same length at our current prices, unless you cancel before the renewal date. You can manage or cancel your subscription through your Apple ID account settings.</p>
                    <p>You can delete your account at any time by logging into the App and following the instructions in the settings. If you delete your account, your subscription will continue until the end of the subscription period you have already paid for. You may also need to cancel any recurring subscriptions directly through Apple.</p>
                    <p>Scoutcast can terminate or suspend your account at any time for any reason, including if you breach these Terms. After termination, certain provisions of these Terms will continue to apply. This includes any payment obligations or indemnification requirements you have, limitations on our liability, terms about ownership or intellectual property rights, and dispute resolution terms.</p>
                </LegalSection>

                <LegalSection title="Fees and Payment">
                    <p>The App may offer a free tier with limited features and a paid subscription for full access. All purchases and subscription payments are processed through Apple&rsquo;s App Store. Pricing, subscription terms, and available features for each tier will be displayed within the App. Apple&rsquo;s standard terms and refund policies apply to all purchases. We reserve the right to change pricing or subscription terms with advance notice through the App, email, or our website.</p>
                </LegalSection>

                <LegalSection title="Gambling, Wagering, and Betting Disclaimer">
                    <LegalSubsection title="No Gambling Advice or Endorsement">
                        <p>Scoutcast is an entertainment and informational platform only. Nothing in the App&mdash;including AI-generated audio briefings, sports analysis, player statistics, game predictions, fantasy projections, injury reports, or any other content&mdash;constitutes gambling advice, betting guidance, wagering recommendations, or financial advice of any kind. Scoutcast does not endorse, promote, facilitate, or encourage gambling, sports betting, daily fantasy sports contests, or any other form of wagering activity.</p>
                        <p>The App is not a gambling platform, sportsbook, betting exchange, or tipster service, and no content should be interpreted as such.</p>
                    </LegalSubsection>

                    <LegalSubsection title="Prohibited Use for Gambling Purposes">
                        <p>You expressly agree that you will not use the App or any of its outputs for any of the following purposes:</p>
                        <LegalList
                            items={[
                                "Placing, facilitating, or informing any bet, wager, or gambling transaction",
                                "Making decisions related to sports betting, point spreads, over/under lines, parlays, prop bets, futures, or any other wagering markets",
                                "Entering or managing daily fantasy sports contests for prizes or monetary value",
                                "Operating, promoting, or assisting any gambling, bookmaking, or wagering business",
                                "Developing, training, or informing any automated betting system, algorithm, or tool",
                                "Redistributing or reselling App content to persons or entities engaged in gambling or wagering",
                                "Using App content as the basis for any paid tipster, handicapping, or advisory service",
                            ]}
                        />
                        <p>Any use of the App or its outputs in connection with gambling or wagering constitutes a material breach of these Terms and may result in immediate account termination without refund.</p>
                    </LegalSubsection>

                    <LegalSubsection title="No Guarantee of Accuracy for Any Purpose">
                        <p>All content generated by the App is produced by artificial intelligence systems and is inherently speculative, probabilistic, and subject to error. Sports statistics, player performance data, game analysis, predictions, projections, and all other informational outputs are provided &ldquo;as is&rdquo; without any warranty of accuracy, completeness, timeliness, or reliability. AI-generated content may contain factual errors, outdated information, analytical mistakes, and biases inherent in underlying data sources and models. You acknowledge that sports outcomes are inherently unpredictable and that no analysis&mdash;whether human or AI-generated&mdash;can reliably predict future events.</p>
                    </LegalSubsection>

                    <LegalSubsection title="Complete Assumption of Risk">
                        <p>You acknowledge and agree that:</p>
                        <LegalList
                            items={[
                                "You bear sole and complete responsibility for any and all decisions you make based on, or influenced by, content from the App, whether or not such decisions involve gambling or wagering",
                                "You will not rely on any App content as a substitute for your own independent judgment, professional advice, or due diligence",
                                "You understand that AI-generated sports content is for entertainment purposes only and carries no predictive guarantee",
                                "You voluntarily assume all risk associated with any actions taken based on App content",
                                "If you choose to gamble or wager despite these warnings, you do so entirely at your own risk and without any reliance on Scoutcast",
                            ]}
                        />
                    </LegalSubsection>

                    <LegalSubsection title="Complete Exclusion of Liability for Gambling Losses">
                        <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SCOUTCAST, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AFFILIATES, LICENSORS, AND SUPPLIERS SHALL HAVE ABSOLUTELY NO LIABILITY WHATSOEVER FOR ANY LOSSES, DAMAGES, COSTS, OR EXPENSES OF ANY KIND ARISING FROM OR RELATED TO:</p>
                        <LegalList
                            items={[
                                "ANY GAMBLING, BETTING, WAGERING, OR FANTASY SPORTS ACTIVITY, WHETHER OR NOT SUCH ACTIVITY WAS INFORMED BY, BASED ON, OR RELATED TO APP CONTENT;",
                                "ANY FINANCIAL LOSSES RESULTING FROM BETS, WAGERS, OR GAMBLING TRANSACTIONS OF ANY KIND;",
                                "ANY DECISIONS MADE IN RELIANCE ON APP CONTENT, INCLUDING BUT NOT LIMITED TO SPORTS ANALYSIS, PREDICTIONS, STATISTICS, OR PROJECTIONS;",
                                "ANY ADDICTION, COMPULSIVE BEHAVIOR, OR PROBLEM GAMBLING;",
                                "ANY LEGAL CONSEQUENCES ARISING FROM GAMBLING IN JURISDICTIONS WHERE IT IS PROHIBITED OR RESTRICTED;",
                                "ANY THIRD-PARTY CLAIMS RELATED TO YOUR USE OF APP CONTENT IN CONNECTION WITH GAMBLING.",
                            ]}
                        />
                        <p>THIS EXCLUSION APPLIES REGARDLESS OF THE LEGAL THEORY (CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE), EVEN IF SCOUTCAST HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, AND EVEN IF ANY LIMITED REMEDY FAILS OF ITS ESSENTIAL PURPOSE. THIS EXCLUSION IS IN ADDITION TO, AND NOT IN LIMITATION OF, THE GENERAL LIMITATION OF LIABILITY SET FORTH ELSEWHERE IN THESE TERMS.</p>
                    </LegalSubsection>

                    <LegalSubsection title="Gambling Indemnification">
                        <p>You agree to indemnify, defend, and hold harmless Scoutcast and its officers, directors, employees, agents, affiliates, successors, and assigns from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys&rsquo; fees and court costs) arising out of or related to (a) your use of App content in connection with any gambling, betting, or wagering activity; (b) any third-party claims alleging that App content was used to inform, facilitate, or promote gambling; (c) your violation of any gambling laws, regulations, or licensing requirements in any jurisdiction; or (d) any claims by third parties who relied on your redistribution or representation of App content for gambling purposes. This indemnification obligation survives termination of your account and these Terms.</p>
                    </LegalSubsection>

                    <LegalSubsection title="Compliance with Gambling Laws">
                        <p>You are solely responsible for understanding and complying with all applicable gambling, betting, and wagering laws and regulations in your jurisdiction. Many jurisdictions prohibit, restrict, or regulate sports betting, online gambling, daily fantasy sports, and related activities. Scoutcast makes no representation that any use of the App complies with gambling laws in any jurisdiction.</p>
                        <p>If you reside in or access the App from a jurisdiction where gambling is prohibited or restricted, you agree that you will not use App content for any activity that would violate applicable laws. Scoutcast is not responsible for determining the legality of gambling in your jurisdiction and expressly disclaims any obligation to do so.</p>
                    </LegalSubsection>

                    <LegalSubsection title="Problem Gambling Resources">
                        <p>If you or someone you know has a gambling problem, help is available. The following resources provide free, confidential support:</p>
                        <LegalList
                            items={[
                                "National Problem Gambling Helpline: 1-800-522-4700 (call or text, 24/7)",
                                <>National Council on Problem Gambling: <a href="https://www.ncpgambling.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ncpgambling.org</a></>,
                                <>Gamblers Anonymous: <a href="https://www.gamblersanonymous.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">gamblersanonymous.org</a></>,
                                "SAMHSA National Helpline: 1-800-662-4357",
                            ]}
                        />
                    </LegalSubsection>

                    <LegalSubsection title="Severability of Gambling Provisions">
                        <p>If any provision of this &ldquo;Gambling, Wagering, and Betting Disclaimer&rdquo; section is found to be unenforceable in any jurisdiction, the remaining provisions shall continue in full force and effect, and the unenforceable provision shall be modified to the minimum extent necessary to make it enforceable while preserving its intent. The parties agree that each provision of this section is severable and independently enforceable.</p>
                    </LegalSubsection>
                </LegalSection>

                <LegalSection title="Intellectual Property Rights">
                    <LegalSubsection title="Your Content">
                        <p>As between you and Scoutcast, you own all content you upload or provide through the App, including team selections, player preferences, feedback, and any other inputs (&ldquo;Content&rdquo;). You are responsible for your Content, and by providing it, you confirm that you have the right to do so.</p>
                        <p>To operate the App and its features, we need your permission to work with your Content. You grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to host, use, distribute, modify, run, copy, publicly perform or display, translate, and create derivative works of your Content. We will only use this license to provide the App and improve our products and services. This license ends when we delete your Content from our systems.</p>
                        <p>When you delete your account, we will delete Content from your personal account, subject to our standard archival and disaster recovery systems. However, we may not immediately delete Content if we need to keep it to investigate illegal activity, protect our systems and users, comply with legal preservation requirements, or respond to legal requests from courts, law enforcement, or government agencies.</p>
                        <p>You also grant us a perpetual, irrevocable, non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use Content that has been anonymized, aggregated, or otherwise made non-identifiable. We may use this anonymized Content for any purpose, including analytics, research, product development, and business operations.</p>
                        <p>
                            As always, your personal data is subject to the terms of our{" "}
                            <Link
                                href="/privacy"
                                className="text-blue-600 hover:underline">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </LegalSubsection>

                    <LegalSubsection title="AI-Generated Output">
                        <p>Scoutcast owns all outputs generated by the App, including all AI-generated audio briefings, summaries, analysis, and commentary. We grant you a limited, personal, revocable, non-exclusive license to use these outputs for your personal purposes only.</p>
                        <p>You may not use any output for news aggregation, commercial redistribution, automated content generation, mass distribution, or creating competing services. You also may not use outputs for gambling or wagering purposes, harassment, impersonation, or any defamatory, discriminatory, or unlawful purposes.</p>
                        <p>The App may generate similar or identical outputs for different users based on comparable inputs and preferences.</p>
                    </LegalSubsection>

                    <LegalSubsection title="Our App and Marks">
                        <p>We own and retain all rights, title, and interest in and to the App (including all intellectual property rights). When you use the App, except where we&rsquo;ve specifically granted you permission, you may not modify, publish, transmit, participate in the transfer or sale of, create derivative works from, or otherwise exploit the App.</p>
                        <p>We welcome your feedback, suggestions, and any content you share with us publicly. By providing these to us, you grant us the right to freely use, modify, and incorporate them into our products and services without restriction.</p>
                        <p>Scoutcast and all related marks, logos, and user interface elements are trademarks owned exclusively by us. You may not use, reproduce, or copy our trademarks without explicit written consent from Scoutcast.</p>
                    </LegalSubsection>
                </LegalSection>

                <LegalSection title="Copyright Complaints">
                    <p>Scoutcast respects the intellectual property rights of others and expects our users to do the same. If you believe that content accessible through Scoutcast infringes your copyright, you may submit a notice under the Digital Millennium Copyright Act (DMCA). The DMCA provides a process for copyright holders to request removal of allegedly infringing material and for users to respond if they believe the material was removed in error. When we receive a valid DMCA notice, we review it and may remove or disable access to the identified content. If the affected user submits a valid counter-notification, we may restore the content unless the copyright owner initiates legal action within a specified time.</p>
                    <p>
                        You may reach our designated DMCA agent at{" "}
                        <a
                            href="mailto:legal@scoutcast.ai"
                            className="text-blue-600 hover:underline">
                            legal@scoutcast.ai
                        </a>
                        .
                    </p>
                </LegalSection>

                <LegalSection title="Changes to the App">
                    <p>We continuously work to improve Scoutcast, so the App may change over time. We may suspend or discontinue certain App features, add new functionality, impose feature limits, or restrict access to portions of the App without notice. We reserve the right to implement rate limits as reasonably necessary to maintain security, performance, and service quality for all users.</p>
                </LegalSection>

                <LegalSection title="Experimental Features">
                    <p>We may offer beta or experimental features within the App from time to time. These features may be labeled &ldquo;Beta,&rdquo; &ldquo;Experimental,&rdquo; or similar terms. These features are provided as-is and may be available for only a limited time. We may modify or discontinue them without prior notice. Beta and experimental features may function differently or have fewer capabilities than our standard features. You use these features at your own risk, and we are not responsible for any bugs, malfunctions, or other issues that may occur.</p>
                </LegalSection>

                <LegalSection title="Changes to These Terms">
                    <p>These Terms might need to change as we improve the App. We can update the Terms at any time, but if we do, we&rsquo;ll let you know by posting a notice on the Scoutcast website, sending you an email, or notifying you another way. If you don&rsquo;t like the new Terms, you can reject them, but unfortunately that means you cannot continue using Scoutcast. You can stop using the App at any time. We explain in our Privacy Policy how we handle your information after you stop using the App, along with the licenses described above. If we make changes to these Terms and you continue using the App after those changes take effect, that means you accept all the changes.</p>
                </LegalSection>

                <LegalSection title="What Else Do I Need to Know?">
                    <LegalSubsection title="Entire Agreement">
                        <p>These Terms are the complete agreement between you and Scoutcast, and they replace all previous agreements or understandings about the subject matter of these Terms. Except as expressly set out in the &ldquo;App Platform Requirements&rdquo; section, no third parties are intended to benefit from these Terms.</p>
                    </LegalSubsection>

                    <LegalSubsection title="No Promises">
                        <p>The App uses AI features that by nature may produce inaccurate information or exhibit bias. Sports statistics, game results, player information, and other content provided by the App may be incomplete, inaccurate, or out of date. You should independently verify all content before relying on it. Scoutcast does not provide gambling advice, financial advice, legal advice, medical advice, or other professional advice. Do not use Scoutcast to make decisions with legal or material consequences, including wagering or betting decisions.</p>
                        <p>We provide the App on an &ldquo;as-is&rdquo; basis. This means we don&rsquo;t make any promises or guarantees about the App, including that it will work perfectly, be suitable for your specific needs, won&rsquo;t infringe on others&rsquo; rights, or will always be available without interruption. Some states don&rsquo;t allow these kinds of disclaimers, so they may not apply to you.</p>
                    </LegalSubsection>

                    <LegalSubsection title="Limitation of Liability">
                        <p>TO THE FULLEST EXTENT ALLOWED BY APPLICABLE LAW, UNDER NO CIRCUMSTANCES AND UNDER NO LEGAL THEORY (INCLUDING, WITHOUT LIMITATION, TORT, CONTRACT, STRICT LIABILITY, OR OTHERWISE) SHALL SCOUTCAST (OR ITS LICENSORS OR SUPPLIERS) BE LIABLE TO YOU OR TO ANY OTHER PERSON FOR (A) ANY INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES OF ANY KIND, INCLUDING DAMAGES FOR LOST PROFITS, LOSS OF GOODWILL, WORK STOPPAGE, ACCURACY OF RESULTS, OR COMPUTER FAILURE OR MALFUNCTION, OR (B) ANY AMOUNT, IN THE AGGREGATE, IN EXCESS OF THE GREATER OF (I) $100 OR (II) THE AMOUNTS PAID BY YOU TO SCOUTCAST IN CONNECTION WITH THE APP IN THE THREE (3) MONTH PERIOD PRECEDING THE APPLICABLE CLAIM, OR (C) ANY MATTER BEYOND OUR REASONABLE CONTROL. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO THE ABOVE LIMITATION AND EXCLUSIONS MAY NOT APPLY TO YOU.</p>
                    </LegalSubsection>

                    <LegalSubsection title="Indemnity">
                        <p>To the fullest extent allowed by applicable law, you agree to indemnify and hold Scoutcast and its affiliates, officers, agents, employees, and partners harmless from and against any and all claims, liabilities, damages (actual and consequential), losses, and expenses (including attorneys&rsquo; fees) arising from or in any way related to any third-party claims relating to (a) your use of the App (including any actions taken by a third party using your account), and (b) your violation of these Terms. In the event of such a claim, suit, or action (&ldquo;Claim&rdquo;), we will attempt to provide notice of the Claim to the contact information we have for your account (provided that failure to deliver such notice shall not eliminate or reduce your indemnification obligations hereunder).</p>
                    </LegalSubsection>

                    <LegalSubsection title="App Platform Requirements">
                        <p>In connection with your use of the App downloaded via the App Store:</p>
                        <LegalList
                            items={[
                                "Both you and Scoutcast acknowledge that the Terms of Service are concluded between you and Scoutcast only, and not with Apple, and that Apple is not responsible for the App or your Content;",
                                "The App is licensed to you on a limited, non-exclusive, non-transferable, non-sublicensable basis, solely to be used in connection with the App for your private, personal, non-commercial use, subject to all the terms and conditions of these Terms of Service as they are applicable to the App;",
                                "You will only use the App in connection with an Apple device that you own or control;",
                                "You acknowledge and agree that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the App;",
                                "In the event of any failure of the App to conform to any applicable warranty, including those implied by law, you may notify Apple of such failure; upon notification, Apple’s sole warranty obligation to you will be to refund to you the purchase price, if any, of the App;",
                                "You acknowledge and agree that Scoutcast, and not Apple, is responsible for addressing any claims you or any third party may have in relation to the App;",
                                "You acknowledge and agree that, in the event of any third-party claim that the App or your possession and use of the App infringes that third party’s intellectual property rights, Scoutcast, and not Apple, will be responsible for the investigation, defense, settlement, and discharge of any such infringement claim;",
                                "You represent and warrant that you are not located in a country subject to a US Government embargo, or that has been designated by the US Government as a “terrorist supporting” country, and that you are not listed on any US Government list of prohibited or restricted parties;",
                                "Both you and Scoutcast acknowledge and agree that, in your use of the App, you will comply with any applicable third-party terms of agreement which may affect or be affected by such use; and",
                                "Both you and Scoutcast acknowledge and agree that Apple and Apple’s subsidiaries are third-party beneficiaries of these Terms of Service, and that upon your acceptance of these Terms of Service, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms of Service against you as the third-party beneficiary hereof.",
                            ]}
                        />
                    </LegalSubsection>

                    <LegalSubsection title="Assignment">
                        <p>You may not assign, delegate, or transfer these Terms or your rights or obligations hereunder, or your account, in any way (by operation of law or otherwise) without Scoutcast&rsquo;s prior written consent. We may transfer, assign, or delegate these Terms and our rights and obligations under these Terms without consent.</p>
                    </LegalSubsection>

                    <LegalSubsection title="Notices">
                        <p>
                            To send us official notices, email us at:{" "}
                            <a
                                href="mailto:legal@scoutcast.ai"
                                className="text-blue-600 hover:underline">
                                legal@scoutcast.ai
                            </a>
                            .
                        </p>
                        <p>All notices are considered delivered when: (i) sent by email, (ii) delivered in person or by overnight courier, or (iii) five (5) days after being sent by certified mail.</p>
                        <p>We may use email for all communications about the App and updates to these Terms. You must keep your email address current in your account settings to ensure you receive our messages.</p>
                    </LegalSubsection>

                    <LegalSubsection title="Enforceability">
                        <p>If either of us doesn&rsquo;t enforce a right, that doesn&rsquo;t mean we&rsquo;re giving it up. If any part of these Terms is found to be invalid or unenforceable, that part will be limited or removed to the minimum extent necessary, and the rest of these Terms will remain in full effect.</p>
                    </LegalSubsection>

                    <LegalSubsection title="Force Majeure">
                        <p>Scoutcast shall not be liable or responsible for any failure or delay in performance of our obligations due to events beyond our reasonable control, including but not limited to outages, natural disasters, labor strikes, acts of terrorism, pandemics, internet service interruptions, or third-party service provider failures.</p>
                    </LegalSubsection>
                </LegalSection>

                <LegalSection title="Dispute Resolution">
                    <LegalSubsection title="Governing Law">
                        <p>These Terms and your use of the App will be governed by [STATE] and United States law, without regard to conflict-of-law rules. You and Scoutcast agree to submit to the courts in [CITY, STATE] or the United States District Court for the [DISTRICT] (the &ldquo;[CITY] Courts&rdquo;) for any actions where either party seeks injunctive or other equitable relief to prevent infringement or violation of intellectual property rights, as described in the Dispute Resolution section below.</p>
                    </LegalSubsection>

                    <LegalSubsection title="Arbitration and Class Action Waiver">
                        <p className="font-semibold text-foreground">Please read this carefully. It affects your rights.</p>
                        <p>YOU AND SCOUTCAST AGREE THAT ANY DISPUTE, CONTROVERSY, OR CLAIM ARISING OUT OF, OR RELATING TO YOUR USE OF SCOUTCAST, TO ANY PRODUCTS OR SERVICES SOLD OR DISTRIBUTED BY OR THROUGH SCOUTCAST, TO THIS AGREEMENT, AND/OR TO THE CONTENT ON SCOUTCAST SHALL BE RESOLVED ONLY BY FINAL AND BINDING, BILATERAL ARBITRATION, except that (1) you may assert claims in small claims court if your claims qualify; and (2) this agreement to arbitrate does not include your or Scoutcast&rsquo;s right to seek injunctive or other equitable relief in state or federal court in [CITY, STATE] to prevent the actual or threatened infringement, misappropriation, or violation of a party&rsquo;s copyrights, trademarks, trade secrets, patents, or other intellectual property rights. The Federal Arbitration Act, 9 U.S.C. &sect; 1, et seq., and federal arbitration law apply to this agreement and govern all questions as to whether a dispute is subject to arbitration.</p>
                        <p>There is no judge or jury in arbitration, and court review of an arbitration award is limited. An arbitrator, however, can award on an individual basis the same damages and relief as a court (including injunctive and declaratory relief or statutory damages), and must follow these Terms.</p>
                        <p>&ldquo;Disputes&rdquo; shall include, but are not limited to, any claims or controversies between you and Scoutcast against each other related in any way to or arising out of in any way from your Content or the App and/or its outputs, including but not limited to subscriptions, returns, refunds, cancellations, defects, policies, privacy, advertising, or any communications between you and Scoutcast, even if the claim arises after you or Scoutcast has terminated your subscription or user account. Disputes also include, but are not limited to, claims that: (a) you bring against our employees, agents, affiliates, or other representatives; or (b) that Scoutcast brings against you. Disputes also include, but are not limited to, (i) claims in any way related to or arising out of any aspect of the relationship between you and Scoutcast, whether based in contract, tort, statute, fraud, misrepresentation, advertising claims, or any other legal theory; (ii) claims that arose before these Terms or out of a prior set of Terms with Scoutcast; (iii) claims that are subject to ongoing litigation where you are not a party or a class member; and/or (iv) claims that arise after the termination of these Terms.</p>
                        <p>Before initiating an arbitration, you and Scoutcast each agree to first provide the other a written notice (&ldquo;Notice of Dispute&rdquo;), which shall contain: (a) a written description of the problem and relevant documents and supporting information; and (b) a statement of the specific relief sought. A Notice of Dispute should be sent to 145 Strieter Rd. Ann Arbor, MI 48103, or emailed at legal@scoutcast.ai. Scoutcast will provide a Notice of Dispute to you via the email address associated with your Scoutcast account. You and Scoutcast agree to make attempts to resolve the Dispute prior to commencing an arbitration and not to commence an arbitration proceeding until this 45-day post-notice resolution period expires. If an agreement cannot be reached within 45 days of receipt of the Notice of Dispute, you or Scoutcast may commence an arbitration proceeding.</p>
                        <p>Unless you and Scoutcast agree otherwise in writing, arbitration shall (1) be administered by the Judicial Arbitration and Mediation Services, Inc. (&ldquo;JAMS&rdquo;), pursuant to the JAMS Streamlined Arbitration Rules &amp; Procedures then in effect (the &ldquo;JAMS Rules&rdquo;) and as modified by this agreement to arbitrate, including the rules regarding filing, administration, discovery, and arbitrator fees; (2) be conducted by a single, neutral arbitrator; and (3) take place in the county where you reside. To the extent that this agreement to arbitrate conflicts with the JAMS Policy on Consumer Arbitrations Pursuant to Pre-Dispute Clauses Minimum Standards for Procedural Fairness (the &ldquo;Minimum Standards&rdquo;), the Minimum Standards in that regard will apply.</p>
                        <p>We each agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class or representative action. Further, unless both you and Scoutcast expressly agree otherwise, the arbitrator may not consolidate more than one person&rsquo;s claims. If this prohibition of class, representative, or consolidated arbitration is found to be unenforceable, then the entirety of this arbitration provision shall be null and void.</p>
                        <p>If, for any reason, a claim proceeds in court rather than in arbitration, we each waive our right to a jury trial.</p>
                        <p>YOU THEREFORE UNDERSTAND AND AGREE THAT BY ENTERING INTO THIS AGREEMENT, YOU AND SCOUTCAST ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY AND THE RIGHT TO PARTICIPATE IN A CLASS ACTION FOR ANY CLAIMS COVERED BY THIS AGREEMENT.</p>
                        <p>The arbitrator may award declaratory or injunctive relief only in favor of the individual party seeking relief and only to the extent necessary to provide relief warranted by that party&rsquo;s individual claim.</p>
                        <p>The JAMS Rules are available on its website at jamsadr.com/rules-streamlined-arbitration. Notwithstanding any JAMS Rules to the contrary or any other provision in the arbitration rules chosen, by agreement, to govern, you and Scoutcast each agree that all issues regarding the Dispute are delegated to the arbitrator to decide, except that only a court (and not the arbitrator) shall decide any disagreements regarding the scope and enforceability of this agreement to arbitrate.</p>
                        <p>If your claim does not exceed $5,000, you and Scoutcast agree to waive an oral hearing by the arbitrator and the arbitration will be conducted solely on the basis of documents you and Scoutcast submit to the arbitrator, unless you request a hearing or the arbitrator determines that a hearing is necessary. To the extent an oral hearing is requested by you or Scoutcast, or deemed necessary by the arbitrator, you and Scoutcast agree that the hearing will be conducted telephonically or videographically.</p>
                        <p>An arbitrator&rsquo;s award will be a written statement of the disposition of each claim and will also provide a concise written statement of the essential findings and conclusions which form the basis of the award. The arbitrator&rsquo;s decision and award is final and binding, with some limited court review under the FAA, and judgment on the award may be entered in any court of competent jurisdiction.</p>
                        <p>It is each party&rsquo;s responsibility to pay any JAMS filing, case management/administrative, and arbitrator fees as set forth in the JAMS Rules. If your claim for damages does not exceed $5,000, Scoutcast will pay all such fees unless the arbitrator finds that either the substance of your Dispute or the relief sought was frivolous or was brought for an improper purpose (as measured by the standards set forth in Federal Rule of Civil Procedure 11(b)).</p>
                        <p>As an alternative to arbitration, you or Scoutcast may resolve Disputes in a small claims court that has jurisdiction over your claim. These Terms and this arbitration agreement do not prevent you from bringing your Dispute to the attention of any federal, state, or local government agency. Such agencies can, if the law allows, seek relief against Scoutcast on your behalf.</p>
                    </LegalSubsection>
                </LegalSection>

                <LegalSection title="Contact Information">
                    <p>
                        If you have any questions about these Terms, please contact us at{" "}
                        <a
                            href="mailto:legal@scoutcast.ai"
                            className="text-blue-600 hover:underline">
                            legal@scoutcast.ai
                        </a>
                        .
                    </p>
                </LegalSection>
            </main>
            <Footer variant="light" />
        </div>
    )
}
