import { ImageIllustration } from "@/components/ui/illustrations/image-illustration"

export default function HeroSection() {
    return (
        <section data-theme="quartz">
            <div className="bg-white pt-44">
                <div className="mx-auto mb-12 max-w-5xl px-6">
                    <div className="mx-auto max-w-3xl">
                        <h1 className="text-balance text-5xl font-semibold sm:text-7xl">Transparency Through Claims Intelligence</h1>
                        <p className="text-muted-foreground ml-auto mt-6 max-w-md text-balance text-lg">Improve health outcomes while reducing costs through data transparency and accountability.</p>
                    </div>
                </div>
                <ImageIllustration />
            </div>
        </section>
    )
}