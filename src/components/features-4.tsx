import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react';

export default function Features() {
    return (
        <section id="why-breeze" className="py-6 md:py-10 scroll-mt-24">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Why Choose Our HubSpot Expertise?</h2>
                    <p className="text-muted-foreground text-base md:text-s">
                        Access a dedicated team of HubSpot specialists with deep platform knowledge and proven results across industries.
                    </p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Expertise</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Access a dedicated team of HubSpot specialists with deep platform knowledge and proven results across industries.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Speed</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Growth loves speed. We complete HubSpot projects efficiently, helping you achieve your goals faster.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Fingerprint className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Comprehensive</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">From initial setup to advanced optimisation, we handle all aspects of HubSpot across Marketing, Sales, and Service Hubs.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Pencil className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Results-Driven</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Benefit from strategic recommendations designed to improve your HubSpot implementation and maximise ROI.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Settings2 className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Flexible Solutions</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Whether you need a one-off project or ongoing support, we tailor our approach to your business needs.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Cost-Effective</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Avoid expensive long-term commitments. Get expert HubSpot help when you need it, how you need it.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
