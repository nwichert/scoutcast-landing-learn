"use client"

import { X } from "lucide-react"
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DownloadCard } from "@/components/contact"
import { APP_STORE_URL } from "@/lib/urls"

export function DownloadDialog({ className, children }: { className?: string; children: React.ReactNode }) {
    return (
        <>
            <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${className ?? ""} sm:hidden`}>
                {children}
            </a>
            <div className="hidden sm:contents">
                <Dialog>
                    <DialogTrigger
                        render={
                            <button
                                type="button"
                                className={className}
                            />
                        }>
                        {children}
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
            </div>
        </>
    )
}
