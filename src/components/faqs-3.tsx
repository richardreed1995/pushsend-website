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
            question: 'What makes Breeze different from other HubSpot agencies?',
            answer: 'We\'re a dedicated HubSpot partner agency that focuses exclusively on B2B businesses. Our team consists of certified HubSpot experts who understand the platform inside and out, allowing us to deliver faster results and more strategic guidance than generalist agencies.',
        },
        {
            id: 'item-2',
            icon: 'clock',
            question: 'How long does a typical HubSpot project take?',
            answer: 'Project timelines vary depending on complexity and scope. Simple configurations might take 1-2 weeks, whilst comprehensive implementations or migrations can take 6-12 weeks. We\'ll provide a detailed timeline during our initial consultation.',
        },
        {
            id: 'item-3',
            icon: 'settings',
            question: 'Do you work with businesses already using HubSpot?',
            answer: 'Absolutely! Many of our clients come to us with existing HubSpot setups that need optimisation, advanced configuration, or integration with other systems. We can audit your current setup and recommend improvements.',
        },
        {
            id: 'item-4',
            icon: 'users',
            question: 'What size businesses do you typically work with?',
            answer: 'We specialise in B2B businesses ranging from growing startups to established enterprises. Our sweet spot is companies with 10-500 employees who are serious about scaling their sales and marketing operations.',
        },
        {
            id: 'item-5',
            icon: 'graduation-cap',
            question: 'Can you help with HubSpot training for our team?',
            answer: 'Yes, we provide comprehensive training as part of our implementation projects. This includes platform training, best practices workshops, and ongoing support to ensure your team can maximise HubSpot\'s capabilities.',
        },
        {
            id: 'item-6',
            icon: 'headphones',
            question: 'Do you offer ongoing support after project completion?',
            answer: 'We offer various ongoing support options, from ad-hoc consultancy to regular optimisation reviews. We\'ll discuss what level of ongoing support makes sense for your business during our consultation.',
        },
        {
            id: 'item-7',
            icon: 'award',
            question: 'What HubSpot certifications does your team hold?',
            answer: 'Our team holds multiple HubSpot certifications including Marketing Software, Sales Software, Service Hub, and Solutions Architecture. We stay current with all HubSpot updates and new features.',
        },
        {
            id: 'item-8',
            icon: 'pound-sterling',
            question: 'How do you charge for your services?',
            answer: 'We work on a project basis with transparent, fixed pricing agreed upfront. No hidden costs or surprise fees. We\'ll provide a detailed quote after understanding your specific requirements.',
        },
        {
            id: 'item-9',
            icon: 'link',
            question: 'Can you integrate HubSpot with our existing tools?',
            answer: 'Yes, we\'re experienced with HubSpot integrations across hundreds of business applications. From CRM migrations to marketing automation tools, we can help connect your entire tech stack.',
        },
        {
            id: 'item-10',
            icon: 'heart',
            question: 'What if we\'re not happy with the results?',
            answer: 'Your satisfaction is our priority. We work closely with you throughout each project and offer revisions to ensure the final deliverable meets your expectations. We\'re not satisfied until you are.',
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
                                Commonly asked questions about our HubSpot services
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
