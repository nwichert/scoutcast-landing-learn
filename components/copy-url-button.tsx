"use client"

import { useEffect, useState } from "react"
import { Check, Copy } from "lucide-react"

export function CopyUrlButton({ url }: { url: string }) {
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        if (!copied) return
        const id = setTimeout(() => setCopied(false), 2000)
        return () => clearTimeout(id)
    }, [copied])

    const onClick = async () => {
        try {
            await navigator.clipboard.writeText(url)
            setCopied(true)
        } catch {
            const ta = document.createElement("textarea")
            ta.value = url
            ta.setAttribute("readonly", "")
            ta.style.position = "absolute"
            ta.style.left = "-9999px"
            document.body.appendChild(ta)
            ta.select()
            document.execCommand("copy")
            document.body.removeChild(ta)
            setCopied(true)
        }
    }

    return (
        <button
            type="button"
            onClick={onClick}
            aria-live="polite"
            className="inline-flex h-14 items-center justify-center gap-2.5 rounded-[14px] border border-[#1E2733] bg-[#0F1620]/60 px-[22px] text-[#E6EDF3] transition hover:bg-[#0F1620]">
            {copied ? (
                <Check
                    className="size-3.5 text-[#5DE0A6]"
                    strokeWidth={2.5}
                />
            ) : (
                <Copy className="size-3.5 text-[#5DE0A6]" />
            )}
            <span className="font-mono text-sm font-medium">{copied ? "Copied" : "Copy URL"}</span>
        </button>
    )
}
