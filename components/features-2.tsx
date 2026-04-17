import { MessageIllustration } from "@/components/ui/illustrations/message-illustration"
import { IntegrationsIllustration } from "@/components/ui/illustrations/integrations-illustration"

export default function FeaturesSection() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto w-full max-w-5xl px-6">
                <div className="ring-border @4xl:grid-cols-2 @max-4xl:divide-y @4xl:divide-x bg-card/50 relative grid overflow-hidden rounded-2xl border border-transparent shadow-md shadow-black/5 ring-1">
                    <div className="row-span-2 grid grid-rows-subgrid gap-8 p-8">
                        <div className="mx-auto max-w-xs self-center">
                            <MessageIllustration />
                        </div>
                        <div className="mx-auto max-w-sm text-center">
                            <h3 className="text-balance font-semibold">Powerful analytics dashboard</h3>
                            <p className="text-muted-foreground mt-3 text-balance">Track performance metrics with real-time data visualization and customizable reports for informed.</p>
                        </div>
                    </div>
                    <div className="row-span-2 grid grid-rows-subgrid gap-8 p-8">
                        <div className="@4xl:px-8 mx-auto max-w-sm">
                            <IntegrationsIllustration />
                        </div>
                        <div className="relative z-10 mx-auto max-w-sm text-center">
                            <h3 className="text-balance font-semibold">Streamlined invoicing system</h3>
                            <p className="text-muted-foreground mt-3 text-balance">Generate, send, and manage professional invoices automatically with integrated payment tracking.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}