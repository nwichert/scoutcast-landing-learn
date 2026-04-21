'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/logo'
import { DownloadButton } from '@/components/download-button'
import { AnnouncementBanner } from '@/components/announcement-banner'
import React from 'react'
import { useScroll, useMotionValueEvent } from 'motion/react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { Menu, X } from 'lucide-react'
import { useMedia } from '@/hooks/use-media'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

interface FeatureLink {
    href: string
    name: string
    description?: string
}

interface MobileLink {
    groupName?: string
    links?: FeatureLink[]
    name?: string
    href?: string
}

const features: FeatureLink[] = [
    {
        href: '#ux',
        name: 'AI',
        description: 'Generate Insights and Recommendations',
    },
    {
        href: '#performance',
        name: 'Performance',
        description: 'Lightning-fast load times',
    },
    {
        href: '#security',
        name: 'Security',
        description: 'Keep your data safe and secure',
    },
    {
        href: '#support',
        name: 'Customer Support',
        description: 'Get help when you need it',
    },
    {
        href: '#automation',
        name: 'Automation',
        description: 'Automate your workflow',
    },
    {
        href: '#scalability',
        name: 'Scalability',
        description: 'Scale your application effortlessly',
    },
    {
        href: '#backup',
        name: 'Backup',
        description: 'Keep your data backed up',
    },
    {
        href: '#analytics',
        name: 'Analytics',
        description: 'Track and measure your progress',
    },
]

const useCases: FeatureLink[] = [
    {
        href: '#ux',
        name: 'Marketplace',
        description: 'Find and buy AI tools',
    },
    {
        href: '#performance',
        name: 'Guides',
        description: 'Learn how to use AI tools',
    },
    {
        href: '#security',
        name: 'API Integration',
        description: 'Integrate AI tools into your app',
    },
    {
        href: '#support',
        name: 'Partnerships',
        description: 'Get help when you need it',
    },
]

const contentLinks: FeatureLink[] = [
    {
        name: 'Announcements',
        href: '#link',
    },
    {
        name: 'Resources',
        href: '#link',
    },
    { name: 'Blog', href: '#link' },
]

const mobileLinks: MobileLink[] = [
    {
        groupName: 'Product',
        links: features,
    },
    {
        groupName: 'Solutions',
        links: [...useCases, ...contentLinks],
    },
    { name: 'NFL Fantasy', href: '/fantasy' },
    { name: 'MCP Access', href: '/mcp' },
    { name: 'Pricing', href: '#' },
]

export default function HeaderEight() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const isLarge = useMedia('(min-width: 64rem)')
    const pathname = usePathname()
    const showBanner = pathname !== '/mcp'

    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setIsScrolled(latest > 50)
    })

    return (
        <>
            <header
                role="banner"
                data-state={isMobileMenuOpen ? 'active' : 'inactive'}
                {...(isScrolled && { 'data-scrolled': true })}>
                <div className="fixed inset-x-0 top-0 z-50">
                    <div className={cn('dark border-b border-border bg-background/60 backdrop-blur', !isLarge && 'h-14 overflow-hidden', isMobileMenuOpen && 'h-screen bg-background/75')}>
                        <div className="mx-auto max-w-6xl px-6 lg:px-12">
                            <div className="relative flex flex-wrap items-center justify-between lg:py-3">
                                <div className="flex justify-between gap-8 max-lg:h-14 max-lg:w-full max-lg:border-b">
                                    <Link
                                        href="/"
                                        aria-label="home"
                                        className="flex items-center space-x-2">
                                        <Logo uniColor />
                                    </Link>

                                    {isLarge && <NavMenu />}
                                    <button
                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                        aria-label={isMobileMenuOpen == true ? 'Close Menu' : 'Open Menu'}
                                        className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2.5 text-[#0AB17B] lg:hidden">
                                        <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                        <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 text-white" />
                                    </button>
                                </div>

                                {!isLarge && isMobileMenuOpen && <MobileMenu closeMenu={() => setIsMobileMenuOpen(false)} />}

                                <div className="max-lg:in-data-[state=active]:mt-6 in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                                    <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                        <DownloadButton label="Download" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {showBanner && <AnnouncementBanner />}
                </div>
            </header>
        </>
    )
}

const MobileMenu = ({ closeMenu }: { closeMenu: () => void }) => {
    return (
        <nav
            role="navigation"
            className="w-full text-white">
            <Accordion className="**:hover:no-underline -mx-4 mt-0.5 space-y-0.5">
                {mobileLinks.map((link, index) => {
                    if (link.groupName && link.links) {
                        return (
                            <AccordionItem
                                key={index}
                                value={link.groupName}
                                className="group relative border-b-0 before:pointer-events-none before:absolute before:inset-x-4 before:bottom-0 before:border-b">
                                <AccordionTrigger className="**:!font-normal data-[state=open]:bg-white/5 flex items-center justify-between px-4 py-3 text-lg text-white">{link.groupName}</AccordionTrigger>
                                <AccordionContent className="pb-5">
                                    <ul>
                                        {link.links.map((feature, featureIndex) => (
                                            <li key={featureIndex}>
                                                <Link
                                                    href={feature.href}
                                                    onClick={closeMenu}
                                                    className="hover:bg-white/5 block rounded-lg px-4 py-3 text-lg text-white">
                                                    {feature.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        )
                    }
                    return null
                })}
            </Accordion>
            {mobileLinks.map((link, index) => {
                if (link.name && link.href) {
                    return (
                        <Link
                            key={index}
                            href={link.href}
                            onClick={closeMenu}
                            className="group relative block border-0 border-b border-white/10 py-4 text-lg text-white">
                            {link.name}
                        </Link>
                    )
                }
                return null
            })}
        </nav>
    )
}

const NavMenu = () => {
    return (
        <NavigationMenu className="not-dark:**:data-[slot=navigation-menu-viewport]:shadow-foreground/5 **:data-[slot=navigation-menu-viewport]:bg-card **:data-[slot=navigation-menu-viewport]:left-5 **:data-[slot=navigation-menu-viewport]:rounded-3xl data-[slot=navigation-menu-viewport]:top-1 max-lg:hidden">
            <NavigationMenuList className="gap-3">
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="#product">Product</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="#compare">Compare</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="#faq">FAQ</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/fantasy">NFL Fantasy</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/mcp">MCP Access</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function ListItem({ title, description, href, ...props }: React.ComponentPropsWithoutRef<'li'> & { href: string; title: string; description?: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href} className="gap-0 px-4">
                    <div className="text-foreground text-sm font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-1 text-sm">{description}</p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}