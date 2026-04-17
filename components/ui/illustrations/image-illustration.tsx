'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

export const ImageIllustration = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null)

    const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect()
        if (!rect) return
        setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    return (
        <div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={() => setMouse(null)}
            className="relative mx-auto aspect-[1237/864] max-w-3xl overflow-hidden">
            <Image
                src="/hero.png"
                alt="first responders and healthcare professionals"
                className="size-full object-cover"
                width={1237}
                height={864}
                priority
            />

            {mouse && (
                <div
                    aria-hidden
                    className="pointer-events-none absolute size-40 -translate-x-1/2 -translate-y-1/2 mix-blend-overlay blur-2xl will-change-transform md:size-72"
                    style={{ left: mouse.x, top: mouse.y }}>
                    <div className="bg-linear-to-r absolute inset-0 rounded-full from-red-600 via-white to-blue-600" />
                </div>
            )}
        </div>
    )
}
