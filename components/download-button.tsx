"use client"

import { X } from "lucide-react"
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DownloadCard } from "@/components/contact"

export function DownloadButton() {
    return (
        <Dialog>
            <DialogTrigger
                render={
                    <button
                        type="button"
                        className="inline-flex h-9 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-3.5 text-sm font-medium text-foreground transition hover:bg-white/[0.08]"
                    />
                }>
                <AppleGlyph />
                iPhone
            </DialogTrigger>
            <DialogContent
                showCloseButton={false}
                className="dark block max-h-[90vh] w-[calc(100%-2rem)] max-w-[calc(100%-2rem)] overflow-y-auto rounded-3xl border-0 bg-transparent p-0 ring-0 sm:max-w-xl md:max-w-3xl lg:max-w-4xl">
                <DialogTitle className="sr-only">Download Scoutcast.ai</DialogTitle>
                <div className="relative">
                    <DialogClose
                        render={
                            <button
                                type="button"
                                aria-label="Close"
                                className="absolute right-4 top-4 z-10 flex size-8 items-center justify-center rounded-full border border-white/10 bg-black/60 text-foreground/70 backdrop-blur transition hover:bg-black/80 hover:text-foreground"
                            />
                        }>
                        <X className="size-4" />
                    </DialogClose>
                    <DownloadCard />
                </div>
            </DialogContent>
        </Dialog>
    )
}

const AppleGlyph = () => (
    <svg
        aria-hidden
        width="14"
        height="16"
        viewBox="0 0 814 1000"
        fill="currentColor">
        <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
    </svg>
)
