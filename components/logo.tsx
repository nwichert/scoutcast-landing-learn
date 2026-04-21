import Image from 'next/image'
import { cn } from '@/lib/utils'

const LOGO_WIDTH = 1353
const LOGO_HEIGHT = 260

export const Logo = ({ className }: { className?: string; uniColor?: boolean }) => {
    return (
        <Image
            src="/scoutcast-logo.png"
            alt="Scoutcast"
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
            priority
            className={cn('h-8 w-auto', className)}
        />
    )
}

export const LogoIcon = ({ className }: { className?: string; uniColor?: boolean }) => {
    return (
        <Image
            src="/scoutcast-icon.png"
            alt="Scoutcast"
            width={444}
            height={452}
            priority
            className={cn('h-6 w-auto', className)}
        />
    )
}
