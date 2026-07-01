"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause } from "lucide-react"

// Fires when any player starts, carrying its own id, so the others pause —
// only one drop sample plays at a time across the section.
const PLAY_EVENT = "scoutcast:drop-play"

let idCounter = 0

export function FantasyDropPlayer({
    src,
    label,
    accent = false,
}: {
    src: string
    label: string
    accent?: boolean
}) {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const idRef = useRef<string>("")
    const [playing, setPlaying] = useState(false)
    if (!idRef.current) idRef.current = `drop-${++idCounter}`

    useEffect(() => {
        function onOtherPlay(e: Event) {
            const id = (e as CustomEvent<string>).detail
            if (id !== idRef.current) audioRef.current?.pause()
        }
        window.addEventListener(PLAY_EVENT, onOtherPlay as EventListener)
        return () => window.removeEventListener(PLAY_EVENT, onOtherPlay as EventListener)
    }, [])

    function toggle() {
        const a = audioRef.current
        if (!a) return
        if (a.paused) {
            window.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: idRef.current }))
            void a.play().catch(() => setPlaying(false))
        } else {
            a.pause()
        }
    }

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={`${playing ? "Pause" : "Play"} the ${label} sample`}
            className={`mt-auto flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition ${
                accent
                    ? "border-[#0AB17B]/40 bg-[#0AB17B]/10 text-[#0AB17B] hover:bg-[#0AB17B]/15"
                    : "border-[#30363D] bg-[#0D1117] text-[#C9D1D9] hover:border-[#0AB17B]/40 hover:text-[#0AB17B]"
            }`}>
            {playing ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
            <span>{playing ? "Playing sample" : "Play sample"}</span>
            <audio
                ref={audioRef}
                src={src}
                preload="none"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
                onError={() => setPlaying(false)}
            />
        </button>
    )
}
