import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const benefits = ['24/7 support availability', 'Dedicated account manager', 'Custom integrations', 'Priority response time']

export default function Contact() {
    return (
        <section className="bg-background py-24">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="bg-muted/30 @2xl:grid-cols-2 @lg:p-0 @max-2xl:divide-y @2xl:divide-x grid overflow-hidden rounded-3xl border">
                    <div className="@lg:p-12 flex flex-col justify-center p-8">
                        <div className="text-muted-foreground mb-6 w-fit text-xs font-medium">Enterprise</div>
                        <h1 className="text-balance text-3xl font-semibold">Ready to scale your business?</h1>
                        <p className="text-muted-foreground mt-4 text-balance">Get in touch with our enterprise team to discuss custom solutions for your organization.</p>

                        <ul className="mt-8 space-y-3">
                            {benefits.map((benefit) => (
                                <li
                                    key={benefit}
                                    className="flex items-center gap-3">
                                    <CheckCircle2 className="size-4 shrink-0 fill-emerald-400/25 text-emerald-600 dark:text-emerald-500" />
                                    <span className="text-sm">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="text-muted-foreground mt-8 text-sm">
                            Looking for general support?{' '}
                            <Link
                                href="#support"
                                className="text-primary font-medium hover:underline">
                                Visit our help center
                            </Link>
                        </div>
                    </div>

                    <div className="bg-card @lg:p-12 flex flex-col justify-center p-8">
                        <h2 className="text-xl font-semibold">Talk to our team</h2>
                        <p className="text-muted-foreground mt-2 text-sm">Fill out the form and we'll be in touch within 24 hours.</p>

                        <form className="mt-6 space-y-4">
                            <div className="grid gap-3 sm:grid-cols-2">
                                <Input
                                    aria-label="First name"
                                    placeholder="First name"
                                    required
                                />
                                <Input
                                    aria-label="Last name"
                                    placeholder="Last name"
                                    required
                                />
                            </div>
                            <Input
                                aria-label="Work email"
                                type="email"
                                placeholder="Work email"
                                required
                            />
                            <Input
                                aria-label="Company name"
                                placeholder="Company name"
                                required
                            />
                            <Input
                                aria-label="Phone number"
                                placeholder="Phone number"
                                type="tel"
                            />
                            <Button
                                type="submit"
                                className="mt-4 w-full"
                                size="lg">
                                Request a demo
                                <ArrowRight className="ml-2 size-4" />
                            </Button>
                        </form>

                        <p className="text-muted-foreground mt-4 text-center text-xs">
                            By submitting, you agree to our{' '}
                            <Link
                                href="#"
                                className="underline hover:no-underline">
                                Terms
                            </Link>{' '}
                            and{' '}
                            <Link
                                href="#"
                                className="underline hover:no-underline">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}