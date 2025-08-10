import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react';

export default function Features() {
    return (
        <section id="why-pushsend" className="py-6 md:py-10 scroll-mt-24">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Why PushSend?</h2>
                    <p className="text-muted-foreground text-base md:text-s">
                        We combine enterprise intelligence platforms with strategic outreach to help B2B companies generate consistent sales conversations. Seamless handoffs to your sales team with qualified, interested prospects.
                    </p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Data intelligence</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Find the right people. We use the latest data intelligence tools to identify and prioritise prospects most likely to engage in sales conversations.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Personalised emails</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Send thoughtful messages. We craft personalised campaigns that get prospects excited to speak with your sales team about your solution.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Fingerprint className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Enterprise deliverability</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Land in the inbox. We use a diversified email sending infrastructure to ensure your emails land in the primary inbox.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Pencil className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Proven Playbook</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">We have 25+ proven outbound playbooks we can deploy for our customers that have been successful across our client base.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Settings2 className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Work with experts</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Work with GTM specialists who understand the nuances of B2B sales cycles and how to effectively engage decision-makers.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-5 text-zinc-500" />
                            <h3 className="text-base font-semibold">Best-in-class process</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">We handle prospecting and initial engagement so your sales team can focus on what they do best - closing deals.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
