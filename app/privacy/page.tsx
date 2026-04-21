import type { Metadata } from "next"
import { LegalPageHeader, LegalSection, LegalSubsection, LegalList } from "@/components/legal-page"
import Footer from "@/components/footer"

export const metadata: Metadata = {
    title: "Privacy Policy · Scoutcast.ai",
    description: "How Scoutcast collects, uses, and protects your personal data.",
}

export default function PrivacyPage() {
    return (
        <div className="bg-background min-h-screen text-foreground">
            <LegalPageHeader />

            <main className="mx-auto max-w-3xl px-6 pb-32 pt-16">
                <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-[56px] sm:leading-[1.05]">Privacy Policy</h1>
                <p className="mt-3 text-base text-foreground/55">Last updated: February 23, 2026</p>

                <div className="mt-14 space-y-5 text-[17px] leading-[1.7] text-foreground/80">
                    <p>
                        This Privacy Policy applies to the Scoutcast website (scoutcast.ai), the Scoutcast mobile application (the &ldquo;App&rdquo;), and the related services (collectively, the &ldquo;Services&rdquo;) offered by Scoutcast (&ldquo;Scoutcast,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;). By using or accessing the Services in any manner, you acknowledge that you accept the practices and policies outlined below, and you hereby consent that we will collect, use, and share your information as described in this Privacy Policy.
                    </p>
                    <p>
                        Remember that your use of the Services is always subject to our Terms of Service, which incorporates this Privacy Policy. Any terms we use in this Privacy Policy without defining them have the definitions given to them in the Terms of Service.
                    </p>
                </div>

                <LegalSection title="What This Privacy Policy Covers">
                    <p>
                        This Privacy Policy covers how we treat Personal Data that we gather when you access or use the Services, including when you listen to AI-generated sports audio briefings (&ldquo;Casts&rdquo;), select teams and players to follow, or interact with the App. &ldquo;Personal Data&rdquo; means any information that identifies or relates to a particular individual and includes information referred to as &ldquo;personally identifiable information&rdquo; or &ldquo;personal information&rdquo; under applicable data privacy laws, rules, or regulations. This Privacy Policy does not cover the practices of companies we don&rsquo;t own or control or people we don&rsquo;t manage, including third-party services, which are governed by their own privacy policies.
                    </p>
                </LegalSection>

                <LegalSection title="Personal Data We Collect">
                    <p>The following details the categories of Personal Data we collect and have collected over the past 12 months:</p>

                    <LegalSubsection title="Account Information">
                        <LegalList items={["Name", "Email address", "User ID", "Account creation date", "Subscription status and purchase history (via Apple StoreKit)"]} />
                    </LegalSubsection>

                    <LegalSubsection title="Sports Preferences and Selections">
                        <LegalList items={["Teams you follow", "Players you follow", "Sports leagues of interest", "Content preferences for AI-generated audio briefings (e.g., tone, depth, topics)", "X (Twitter) handles you add for insider content integration"]} />
                    </LegalSubsection>

                    <LegalSubsection title="Audio and Content Data">
                        <LegalList items={["Listening history and playback interactions", "Audio briefing preferences (voice, length, style)", "Feedback and ratings on generated content"]} />
                    </LegalSubsection>

                    <LegalSubsection title="Voice and Interaction Data">
                        <LegalList items={["Voice command inputs and transcriptions (if voice features are used)", "Conversation history with any interactive features", "Questions submitted via speech recognition"]} />
                    </LegalSubsection>

                    <LegalSubsection title="User Preferences and Personalization Data">
                        <LegalList items={["Topics of interest", "Content preferences for AI-generated audio briefings", "Interaction settings and communication preferences", "Notification preferences"]} />
                    </LegalSubsection>

                    <LegalSubsection title="Usage and Analytics Data">
                        <LegalList items={["App usage patterns and feature interactions", "Session duration and frequency", "Listening duration and completion rates", "Feature performance metrics", "Error logs and debugging information"]} />
                    </LegalSubsection>

                    <LegalSubsection title="Device and Technical Information">
                        <LegalList items={["Device type and operating system", "App version", "IP address", "Mobile advertising identifiers"]} />
                    </LegalSubsection>

                    <LegalSubsection title="Location Data">
                        <LegalList items={["General location information derived from your IP address", "Geolocation information provided by your mobile device (to the extent you authorize this permission)"]} />
                    </LegalSubsection>

                    <LegalSubsection title="Inferences and Personalization Signals">
                        <LegalList items={["Favorite team and player engagement patterns", "Topical affinities (e.g., trade rumors, game recaps, fantasy sports)", "Listening habits and engagement signals", "High-level interest profiles created from your activity and content preferences"]} />
                    </LegalSubsection>

                    <LegalSubsection title="Other Identifying Information That You Voluntarily Choose to Provide">
                        <LegalList items={["Identifying information submitted by you in emails, messages, survey responses, or other content you provide to the Services", "Support communications"]} />
                    </LegalSubsection>
                </LegalSection>

                <LegalSection title="How We Collect Personal Data">
                    <p>We collect Personal Data from two primary sources:</p>

                    <LegalSubsection title="Directly from You">
                        <LegalList items={["When you create an account in the App, build your profile, or set preferences", "When you select teams, players, or X handles to follow", "When you interact with AI-generated audio briefings (play, pause, skip, rate)", "When you use voice features such as speech recognition to ask questions", "When you interact with our Services through surveys, free-form text fields, or other inputs", "Through automatic collection when you use our Services, including via Cookies (see “Tracking Tools, Advertising and Opt-Out” section) and mobile analytics SDKs", "When you contact us directly", "When you subscribe to our email mailing list"]} />
                    </LegalSubsection>

                    <LegalSubsection title="From Third Parties">
                        <LegalList items={["Platform Providers: Apple and similar platforms when delivering Services or processing app distribution and in-app purchases", "Sports Data Providers: Licensed sports data APIs and publicly available sports information sources used to generate your audio briefings", "Social Media Platforms: Publicly available content from X (Twitter) handles you designate for insider content integration", "Service Providers: Analytics and customer support vendors that help us understand and improve your experience"]} />
                    </LegalSubsection>
                </LegalSection>

                <LegalSection title="Why We Collect Personal Data">
                    <LegalSubsection title="Service Delivery and Enhancement">
                        <LegalList items={["Managing your account and processing transactions (purchases are handled through Apple StoreKit)", "Generating personalized AI-powered sports audio briefings based on your selected teams, players, and preferences", "Providing relevant sports content, news, analysis, and insider perspectives", "Integrating publicly available content from X handles you select", "Meeting or fulfilling the reason you provided the information to us", "Providing support and assistance for the Services", "Improving the Services, including through research, testing, analytics, and AI model improvement (including to enhance content generation, audio quality, and personalization)", "Personalizing communications based on your preferences", "Ensuring security, fraud prevention, and debugging", "Carrying out other business purposes stated when collecting your Personal Data or as otherwise set forth in applicable data privacy laws"]} />
                    </LegalSubsection>

                    <LegalSubsection title="Communicating and Marketing">
                        <LegalList items={["Marketing our Services, including through email campaigns (if you’ve subscribed to our mailing list) and social media", "Responding to your inquiries and sending requested information", "Sending communications according to your preferences"]} />
                    </LegalSubsection>

                    <LegalSubsection title="Legal and Safety Compliance">
                        <LegalList items={["Conducting safety reviews per our risk and moderation policies", "Meeting obligations under third-party agreements (including with third-party AI, LLM, and text-to-speech providers)", "Complying with laws, law enforcement, regulations, and legal processes", "Protecting rights, property, and safety of all parties", "Enforcing agreements and resolving disputes"]} />
                    </LegalSubsection>
                </LegalSection>

                <LegalSection title="How We Share Your Personal Data">
                    <p>We disclose your Personal Data to the service providers and third parties listed below. Some of these disclosures may constitute a &ldquo;sale&rdquo; under certain state laws. See state-specific sections for details.</p>

                    <LegalSubsection title="Service Providers">
                        <p>These parties help us provide the Services or perform business functions on our behalf. They include:</p>
                        <LegalList items={["Third-party AI and LLM providers for content generation and natural language processing", "Text-to-speech providers for audio briefing generation", "Hosting, technology, and communication providers", "Security and fraud prevention consultants", "Support and customer service vendors", "Sports data API providers"]} />
                    </LegalSubsection>

                    <LegalSubsection title="Advertising and Analytics Partners">
                        <p>These parties provide analytics on web traffic and app usage and help us measure, place, and optimize advertisements. They include:</p>
                        <LegalList items={["Companies that track how users found or were referred to the Services", "Companies that deliver targeted advertisements on our behalf", "Companies that track how users interact with the Services, including mobile analytics providers", "Companies that measure advertising campaign performance and conversion rates", "Companies that help us understand user demographics and interests for advertising purposes"]} />
                    </LegalSubsection>

                    <LegalSubsection title="Legal Obligations">
                        <p>We may share any Personal Data that we collect with third parties in conjunction with any of the activities set forth under &ldquo;Legal and Safety Compliance&rdquo; above.</p>
                    </LegalSubsection>

                    <LegalSubsection title="Business Transfers">
                        <p>All of your Personal Data that we collect may be transferred to a third party if we undergo a merger, acquisition, bankruptcy, or other transaction in which that third party assumes control of our business (in whole or in part). Should one of these events occur, we will make reasonable efforts to notify you before your information becomes subject to different privacy and security policies and practices.</p>
                    </LegalSubsection>
                </LegalSection>

                <LegalSection title="AI Features and Data Use">
                    <p>Scoutcast delivers personalized AI-generated sports audio briefings by processing your team and player selections, content preferences, and listening behavior to generate tailored sports content. We personalize your experience using your preferences, listening history, and engagement patterns to provide relevant, timely sports briefings.</p>
                    <p>To improve the App&rsquo;s overall quality and safety, we use aggregated or de-identified data such as listening statistics and anonymous usage patterns. We work with trusted third-party providers under strict data agreements for AI content generation, text-to-speech synthesis, and sports data processing; they can only use your data to provide Scoutcast&rsquo;s services and must maintain appropriate safeguards.</p>
                    <p>We do not use your identifiable personal data for AI model training without your explicit opt-in. For quality assurance, we may review limited samples of de-identified data, and we will always seek your consent before using any identifiable content for review beyond basic service operations.</p>
                </LegalSection>

                <LegalSection title="X (Twitter) Handle Integration">
                    <p>When you add X handles to your Scoutcast profile, we access only publicly available content from those accounts to enhance your audio briefings with insider perspectives and analysis. We do not access your personal X account, direct messages, or private data. You can add or remove X handles at any time through the App settings.</p>
                </LegalSection>

                <LegalSection title="Why Does Scoutcast Collect Location Data?">
                    <p>Scoutcast may use general location information to provide location-aware sports content (such as prioritizing local team coverage) and contextually relevant information. We may derive this information from your IP address or, if you authorize geolocation data via your mobile device, from your device. You can manage or revoke geolocation permission in your mobile device settings.</p>
                </LegalSection>

                <LegalSection title="Data That Is Not Personal Data">
                    <p>We may create aggregated, de-identified, or anonymized data from the Personal Data we collect, including by removing information that makes the data personally identifiable to a particular user. We may use such aggregated, de-identified, or anonymized data and share it with third parties for our lawful business purposes, including to analyze, build, and improve the Services (including to improve our AI content generation, audio quality, and personalization capabilities) and promote our business, provided that we will not share such data in a manner that could identify you.</p>
                </LegalSection>

                <LegalSection title="Tracking Tools, Advertising, and Opt-Out">
                    <p>The Services use cookies and similar technologies such as pixel tags, web beacons, clear GIFs, and JavaScript (collectively, &ldquo;Cookies&rdquo;) in our web interfaces, as well as mobile SDKs in our App, to enable our servers to recognize your device, tell us how and when you visit and use our Services, analyze trends, learn about our user base, and operate and improve our Services. Cookies are small pieces of data&mdash;usually text files&mdash;placed on your computer, tablet, phone, or similar device when you use that device to access our Services. We may also supplement the information we collect from you with information received from third parties, including third parties that have placed their own Cookies on your device(s). Please note that because of our use of Cookies, the Services do not support &ldquo;Do Not Track&rdquo; requests sent from a browser at this time.</p>

                    <p>We use the following types of Cookies:</p>

                    <p><strong className="font-semibold text-foreground">Essential Cookies.</strong> Essential Cookies are required for providing you with features or services that you have requested. Disabling these Cookies may make certain features and services unavailable.</p>

                    <p><strong className="font-semibold text-foreground">Functional Cookies.</strong> Functional Cookies are used to record your choices and settings regarding our Services, maintain your preferences over time, and recognize you when you return to our Services.</p>

                    <p><strong className="font-semibold text-foreground">Performance/Analytical Cookies.</strong> Performance/Analytical Cookies allow us to understand how visitors use our Services by collecting information about the number of visitors, pages viewed, and time spent on our Services.</p>

                    <p>You can decide whether or not to accept Cookies through your internet browser&rsquo;s settings. Most browsers have an option for turning off the Cookie feature. You can also delete all Cookies that are already on your device. If you do this, however, you may have to manually adjust some preferences every time you visit our website, and some of the Services and functionalities may not work.</p>

                    <p>To find out more information about Cookies, including information about how to manage and delete Cookies, please visit{" "}
                        <a
                            href="https://allaboutcookies.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline">
                            allaboutcookies.org
                        </a>
                        .
                    </p>
                </LegalSection>

                <LegalSection title="Data Security and Retention">
                    <p>We seek to protect your Personal Data from unauthorized access, use, and disclosure using appropriate physical, technical, organizational, and administrative security measures based on the type of Personal Data and how we are processing that data. You should also help protect your data by appropriately selecting and protecting your password and/or other sign-on mechanism; limiting access to your mobile device and browser; and signing off after you have finished accessing your account.</p>
                    <p>Although we work to protect the security of your account and other data that we hold in our records, please be aware that no method of transmitting data over the internet or storing data is completely secure.</p>
                    <p>We retain Personal Data about you for as long as you have an open account with us or as otherwise necessary to provide you with our Services. In some cases we retain Personal Data for longer, if doing so is necessary to comply with our legal obligations, resolve disputes, or is otherwise permitted or required by applicable law, rule, or regulation. We may further retain information in an anonymous or aggregated form where that information would not identify you personally. Analytics logs are retained for up to 12 months, after which they are either aggregated or deleted in accordance with our data-retention schedule.</p>
                </LegalSection>

                <LegalSection title="Eligibility">
                    <p>As noted in the Terms of Service, we do not knowingly collect or solicit Personal Data from or for individuals under 18 years of age. If you are under the age of 18, please do not attempt to register for or otherwise use the Services or send us any Personal Data.</p>
                    <p>Additionally, in accordance with our practices to comply with the Children&rsquo;s Online Privacy Protection Act, if we learn we have collected Personal Data from a child under 13 years of age, we will delete that information as quickly as possible. If you believe that a child under 13 years of age may have provided Personal Data to us, please contact us at{" "}
                        <a
                            href="mailto:legal@scoutcast.ai"
                            className="text-blue-600 hover:underline">
                            legal@scoutcast.ai
                        </a>
                        .
                    </p>
                </LegalSection>

                <LegalSection title="State Law Privacy Rights">
                    <p>If you are a U.S. resident, you have the following rights regarding the personal information we hold about you, plus any other rights required by law:</p>
                    <LegalList
                        items={[
                            "Know what personal information we have collected about you.",
                            "Access a copy of the personal information that we hold about you.",
                            "Know what personal information about you we have shared with third parties.",
                            "Opt out of the sharing of your personal information with third parties.",
                            "Object to our processing of your personal information.",
                            "Request that we limit our use of your sensitive personal information to what is necessary to perform the services you requested.",
                            "Not be discriminated against for exercising your data subject rights.",
                            "Request that we delete any personal information we have collected from you.",
                            "Request that we correct any inaccurate personal information about you.",
                            "Export the personal information you have provided to Scoutcast in a format that can be transferred electronically to a third party.",
                            "Withdraw any consent you previously gave us to process your personal information.",
                            "Delete your Scoutcast account by following the instructions in the Service.",
                        ]}
                    />
                    <p>These rights are not absolute. We may deny your request to exercise data subject rights for legitimate reasons, including we cannot verify your identity, your request could violate another person&rsquo;s rights or applicable law, or your request could interfere with our services or prevent us from providing a service you&rsquo;ve requested.</p>
                    <p>You may update or correct your information, and exercise certain opt-out rights, by emailing{" "}
                        <a
                            href="mailto:legal@scoutcast.ai"
                            className="text-blue-600 hover:underline">
                            legal@scoutcast.ai
                        </a>
                        .
                    </p>
                </LegalSection>

                <LegalSection title="International Data Transfers">
                    <p>If you access the Services from outside the United States, your information may be processed in the U.S. and other countries that may have different data protection laws than your country. Where required, we implement appropriate safeguards (e.g., standard contractual clauses) for cross-border transfers.</p>
                </LegalSection>

                <LegalSection title="Changes to This Privacy Policy">
                    <p>We&rsquo;re constantly trying to improve our Services, so we may need to change this Privacy Policy from time to time, but we will alert you to any such changes by placing a notice on our website and in the App, by sending you an email, and/or by some other means. Please note that if you&rsquo;ve opted not to receive legal notice emails from us (or you haven&rsquo;t provided us with your email address), those legal notices will still govern your use of the Services, and you are still responsible for reading and understanding them. If you use the Services after any changes to the Privacy Policy have been posted, that means you agree to all of the changes. Use of information we collect is subject to the Privacy Policy in effect at the time such information is collected.</p>
                </LegalSection>

                <LegalSection title="Contact Information">
                    <p>If you have any questions or comments about this Privacy Policy, the ways in which we collect and use your Personal Data, or your choices and rights regarding such collection and use, please do not hesitate to contact us at{" "}
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

