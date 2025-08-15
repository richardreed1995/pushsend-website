"use client";

import { useState } from "react";
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import Link from 'next/link'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

export default function FAQsThree() {
    const [openItem, setOpenItem] = useState<string | null>(null);

    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'shield-check',
            question: 'Will this work for my business?',
            answer: 'We can\'t answer this without reviewing your business - that\'s part of our discovery process. We\'ll give you some honest insight into whether this could work for you. We turn down around 40% of the applications we receive to ensure we only work with businesses where we can deliver results.',
        },
        {
            id: 'item-2',
            icon: 'users',
            question: 'How much work will I need to put in?',
            answer: 'Very minimal input on your side - we handle basically everything. We generate the leads and support you in closing them, putting systems in place to follow up with all leads we generate. You\'ll provide some initial information about your business and target market, then we take care of the rest. You\'ll receive regular updates and reports, but the heavy lifting is done by our team.',
        },
        {
            id: 'item-3',
            icon: 'trending-up',
            question: 'What\'s the ROI I can expect?',
            answer: 'Clients typically receive their first qualified conversations within the first couple of weeks of launch. The ROI will depend on your investment, but most businesses run a positive ROI from the first campaign we launch.',
        },
        {
            id: 'item-4',
            icon: 'message-square',
            question: 'How do you ensure your emails don\'t sound AI-generated?',
            answer: 'We use AI carefully with constrained variables - we don\'t let AI write whole emails. We write the emails ourselves and then use AI for specific bits to personalise them. Our team crafts messages that sound like they come from a real person who has done their homework.',
        },
        {
            id: 'item-5',
            icon: 'clock',
            question: 'How quickly can you generate leads?',
            answer: 'We typically start seeing responses within 1-2 weeks of launching a campaign. The first qualified meetings usually come in within 2-3 weeks. We optimise campaigns continuously based on performance data to improve results over time.',
        },
        {
            id: 'item-6',
            icon: 'bar-chart',
            question: 'How much visibility will I have into this?',
            answer: 'Complete transparency. You\'ll receive weekly reports with detailed metrics including open rates, reply rates, meeting bookings, and campaign performance. You\'ll also get notifications for every email response and meeting booking in real-time.',
        },
        {
            id: 'item-7',
            icon: 'pound-sterling',
            question: 'What does this cost?',
            answer: 'We typically have a pilot period for working together, and then we look to implement a long-term growth strategy. Investment varies based on campaign scope and volume targets. Book a call to discuss pricing for your specific requirements.',
        },
        {
            id: 'item-8',
            icon: 'globe',
            question: 'What industries do you work with?',
            answer: 'We work with B2B companies across SaaS, professional services, financial services, technology, and consulting. The key requirement is that you have a high-value offering (typically £5k+ average contract value) and a clear value proposition.',
        },
        {
            id: 'item-9',
            icon: 'arrow-right-circle',
            question: 'What are the next steps to get started?',
            answer: 'Schedule a consultation call with our team. We\'ll discuss your business, target market, and goals to see if we\'re a good fit. If we are, we\'ll create a proposal outlining our approach and expected results for your specific situation.',
        },
    ]

    const toggleItem = (itemId: string) => {
        setOpenItem(openItem === itemId ? null : itemId);
    };

    return (
        <section className="bg-muted dark:bg-background py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold">FAQs</h2>
                            <p className="text-muted-foreground mt-4">
                                Commonly asked questions
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <div className="w-full space-y-2">
                            {faqItems.map((item) => {
                                const isOpen = openItem === item.id;
                                return (
                                    <div
                                        key={item.id}
                                        className="bg-background shadow-xs rounded-lg border px-4 last:border-b hover:bg-gray-50 transition-colors cursor-pointer"
                                        onClick={() => toggleItem(item.id)}
                                    >
                                        <div className="flex items-center justify-between w-full py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="flex size-6">
                                                    <DynamicIcon
                                                        name={item.icon}
                                                        className="m-auto size-4"
                                                    />
                                                </div>
                                                <span className="text-base">{item.question}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <svg
                                                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                        {isOpen && (
                                            <div className="pb-5">
                                                <div className="px-9">
                                                    <p className="text-sm text-zinc-600 dark:text-zinc-300">{item.answer}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
