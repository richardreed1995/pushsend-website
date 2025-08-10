import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Users, Target, MessageSquare, BarChart3, Settings, Mail, Phone, Zap, Shield, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function WhatsIncluded() {
    return (
        <section className="dark:bg-muted/25 bg-zinc-50 py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        See What's Included For Your Campaigns
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Everything you need to generate consistent sales conversations, managed by our expert team.
                    </p>
                </div>
                
                <div className="mx-auto grid gap-2 sm:grid-cols-5">
                    <Card className="group overflow-hidden shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl">
                        <CardHeader>
                            <div className="md:p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <Users className="size-6 text-orange-500" />
                                    <p className="font-medium">Dedicated Account Manager</p>
                                </div>
                                <p className="text-muted-foreground mt-3 max-w-sm text-sm">Your personal growth expert who manages your campaigns and provides strategic guidance throughout your journey.</p>
                            </div>
                        </CardHeader>

                        <div className="relative h-fit pl-6 md:pl-12">
                            <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,var(--color-background)_100%)]"></div>

                            <div className="bg-background overflow-hidden rounded-tl-lg border-l border-t pl-2 pt-2 dark:bg-zinc-950">
                                <Image
                                    src="/mail2.png"
                                    className="hidden dark:block"
                                    alt="Account management illustration dark"
                                    width={1207}
                                    height={929}
                                />
                                <Image
                                    src="/mail2-light.png"
                                    className="shadow dark:hidden"
                                    alt="Account management illustration light"
                                    width={1207}
                                    height={929}
                                />
                            </div>
                        </div>
                    </Card>

                    <Card className="group overflow-hidden shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl">
                        <p className="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg font-semibold sm:text-2xl md:p-6">Lead Lists & Campaign Copy</p>

                        <CardContent className="mt-auto h-fit">
                            <div className="relative mb-6 sm:mb-0">
                                <div className="absolute -inset-6 [background:radial-gradient(50%_75%_at_75%_50%,transparent,var(--color-background)_100%)]"></div>
                                <div className="aspect-76/59 overflow-hidden rounded-r-lg border">
                                    <Image
                                        src="/origin-cal-dark.png"
                                        className="hidden dark:block"
                                        alt="Lead generation illustration dark"
                                        width={1207}
                                        height={929}
                                    />
                                    <Image
                                        src="/origin-cal.png"
                                        className="shadow dark:hidden"
                                        alt="Lead generation illustration light"
                                        width={1207}
                                        height={929}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="group p-6 shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-bl-xl md:p-12">
                        <p className="mx-auto mb-12 max-w-md text-balance text-center text-lg font-semibold sm:text-2xl">Weekly Reporting & Support</p>

                        <div className="flex justify-center gap-6">
                            <div className="inset-shadow-sm dark:inset-shadow-white/5 bg-muted/35 relative flex aspect-square size-16 items-center rounded-[7px] border p-3 shadow-lg ring dark:shadow-white/5 dark:ring-black">
                                <BarChart3 className="mt-auto size-4 text-orange-500" />
                            </div>
                            <div className="inset-shadow-sm dark:inset-shadow-white/5 bg-muted/35 flex aspect-square size-16 items-center justify-center rounded-[7px] border p-3 shadow-lg ring dark:shadow-white/5 dark:ring-black">
                                <Phone className="size-4 text-orange-500" />
                            </div>
                        </div>
                    </Card>
                    <Card className="group relative shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-br-xl">
                        <CardHeader className="p-6 md:p-12">
                            <p className="font-medium">Complete Campaign Infrastructure</p>
                            <p className="text-muted-foreground mt-2 max-w-sm text-sm">From inbox setup to AI-powered personalization - we handle everything needed for successful outreach campaigns.</p>
                        </CardHeader>
                        <CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
                            <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
                                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                                    <Settings className="size-6 text-orange-500" />
                                </div>
                                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                                    <Target className="size-6 text-orange-500" />
                                </div>
                                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                                    <MessageSquare className="size-6 text-orange-500" />
                                </div>
                                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                                    <Mail className="size-6 text-orange-500" />
                                </div>
                                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                                    <Zap className="size-6 text-orange-500" />
                                </div>
                                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                                    <Shield className="size-6 text-orange-500" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
