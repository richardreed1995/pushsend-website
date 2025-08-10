'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { ChartBarIncreasingIcon, Database, Fingerprint, IdCard, ChevronDown, BarChart3, Target, ShieldCheck, Mail, Users, TrendingUp, Settings, FileText, Rocket } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BorderBeam } from './magicui/border-beam'

export default function Features() {
    type ImageKey = 'item-1' | 'item-2' | 'item-3' | 'item-4' | 'item-5' | 'item-6'
    const [activeItem, setActiveItem] = useState<ImageKey>('item-1')
    const [openItem, setOpenItem] = useState<string>('item-1')

    const images = {
        'item-1': {
            image: '/Group 22.png',
            alt: 'Onboarding',
        },
        'item-2': {
            image: '/Group 21.png',
            alt: 'Kick off call',
        },
        'item-3': {
            image: '/Group 23.png',
            alt: 'Infrastructure',
        },
        'item-4': {
            image: '/Group 24.png',
            alt: 'Strategy',
        },
        'item-5': {
            image: '/Group 25.png',
            alt: 'Launch',
        },
        'item-6': {
            image: '/Group 27.png',
            alt: 'Scale',
        },
    }

    return (
        <section className="py-12 md:py-20 lg:py-32">
            <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
                <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="text-balance text-4xl font-medium lg:text-6xl">Our Process</h2>
                    <p>Discover our step-by-step approach to identifying and engaging high-quality leads.</p>
                </div>

                <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
                    <Accordion
                        type="single"
                        className="w-full"
                    >
                        <AccordionItem value="item-1">
                            <div
                                role="button"
                                tabIndex={0}
                                aria-expanded={openItem === 'item-1'}
                                onClick={() => { setOpenItem('item-1'); setActiveItem('item-1') }}
                                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setOpenItem('item-1'); setActiveItem('item-1') } }}
                                className={`transition-all duration-200 rounded-2xl border shadow-sm mb-6 cursor-pointer outline-none focus:ring-2 focus:ring-black/40 ${openItem === 'item-1' ? 'border-black shadow-lg bg-white dark:bg-zinc-900' : 'bg-background hover:shadow-md'} group flex flex-col`}
                            >
                                <div className="flex items-center gap-3 px-6 py-6 text-lg font-semibold">
                                    <span className="text-black font-bold text-xl mr-2">1)</span>
                                    <FileText className="size-6 text-black" />
                                    Onboarding
                                    <div className="ml-auto flex items-center h-full">
                                        <ChevronDown className={`size-7 font-bold transition-transform ${openItem === 'item-1' ? 'rotate-180' : ''}`} />
                                    </div>
                                </div>
                                <div className={openItem === 'item-1' ? 'block' : 'hidden'}>
                                    <div className="px-6 pb-6 pt-2 text-zinc-600 dark:text-zinc-300 text-base">
                                        After signing our proposal, we'll have you fill out an onboarding form so we can understand more about you and your business.
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <div
                                role="button"
                                tabIndex={0}
                                aria-expanded={openItem === 'item-2'}
                                onClick={() => { setOpenItem('item-2'); setActiveItem('item-2') }}
                                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setOpenItem('item-2'); setActiveItem('item-2') } }}
                                className={`transition-all duration-200 rounded-2xl border shadow-sm mb-6 cursor-pointer outline-none focus:ring-2 focus:ring-black/40 ${openItem === 'item-2' ? 'border-black shadow-lg bg-white dark:bg-zinc-900' : 'bg-background hover:shadow-md'} group flex flex-col`}
                            >
                                <div className="flex items-center gap-3 px-6 py-6 text-lg font-semibold">
                                    <span className="text-black font-bold text-xl mr-2">2)</span>
                                    <Users className="size-6 text-black" />
                                    Kick off call
                                    <div className="ml-auto flex items-center h-full">
                                        <ChevronDown className={`size-7 font-bold transition-transform ${openItem === 'item-2' ? 'rotate-180' : ''}`} />
                                    </div>
                                </div>
                                <div className={openItem === 'item-2' ? 'block' : 'hidden'}>
                                    <div className="px-6 pb-6 pt-2 text-zinc-600 dark:text-zinc-300 text-base">
                                        Our account managers will go over your onboarding form on a call with you to formulate an initial campaign strategy.
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <div
                                role="button"
                                tabIndex={0}
                                aria-expanded={openItem === 'item-3'}
                                onClick={() => { setOpenItem('item-3'); setActiveItem('item-3') }}
                                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setOpenItem('item-3'); setActiveItem('item-3') } }}
                                className={`transition-all duration-200 rounded-2xl border shadow-sm mb-6 cursor-pointer outline-none focus:ring-2 focus:ring-black/40 ${openItem === 'item-3' ? 'border-black shadow-lg bg-white dark:bg-zinc-900' : 'bg-background hover:shadow-md'} group flex flex-col`}
                            >
                                <div className="flex items-center gap-3 px-6 py-6 text-lg font-semibold">
                                    <span className="text-black font-bold text-xl mr-2">3)</span>
                                    <Settings className="size-6 text-black" />
                                    Infrastructure
                                    <div className="ml-auto flex items-center h-full">
                                        <ChevronDown className={`size-7 font-bold transition-transform ${openItem === 'item-3' ? 'rotate-180' : ''}`} />
                                    </div>
                                </div>
                                <div className={openItem === 'item-3' ? 'block' : 'hidden'}>
                                    <div className="px-6 pb-6 pt-2 text-zinc-600 dark:text-zinc-300 text-base">
                                        We'll take all the information from the kick-off call to set up your inboxes, build you lead list, and write your campaigns.
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <div
                                role="button"
                                tabIndex={0}
                                aria-expanded={openItem === 'item-4'}
                                onClick={() => { setOpenItem('item-4'); setActiveItem('item-4') }}
                                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setOpenItem('item-4'); setActiveItem('item-4') } }}
                                className={`transition-all duration-200 rounded-2xl border shadow-sm mb-6 cursor-pointer outline-none focus:ring-2 focus:ring-black/40 ${openItem === 'item-4' ? 'border-black shadow-lg bg-white dark:bg-zinc-900' : 'bg-background hover:shadow-md'} group flex flex-col`}
                            >
                                <div className="flex items-center gap-3 px-6 py-6 text-lg font-semibold">
                                    <span className="text-black font-bold text-xl mr-2">4)</span>
                                    <Target className="size-6 text-black" />
                                    Strategy
                                    <div className="ml-auto flex items-center h-full">
                                        <ChevronDown className={`size-7 font-bold transition-transform ${openItem === 'item-4' ? 'rotate-180' : ''}`} />
                                    </div>
                                </div>
                                <div className={openItem === 'item-4' ? 'block' : 'hidden'}>
                                    <div className="px-6 pb-6 pt-2 text-zinc-600 dark:text-zinc-300 text-base">
                                        We'll outline a GTM strategy which outlines the campaigns we'll run to which audiences in priority order.
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <div
                                role="button"
                                tabIndex={0}
                                aria-expanded={openItem === 'item-5'}
                                onClick={() => { setOpenItem('item-5'); setActiveItem('item-5') }}
                                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setOpenItem('item-5'); setActiveItem('item-5') } }}
                                className={`transition-all duration-200 rounded-2xl border shadow-sm mb-6 cursor-pointer outline-none focus:ring-2 focus:ring-black/40 ${openItem === 'item-5' ? 'border-black shadow-lg bg-white dark:bg-zinc-900' : 'bg-background hover:shadow-md'} group flex flex-col`}
                            >
                                <div className="flex items-center gap-3 px-6 py-6 text-lg font-semibold">
                                    <span className="text-black font-bold text-xl mr-2">5)</span>
                                    <Rocket className="size-6 text-black" />
                                    Launch
                                    <div className="ml-auto flex items-center h-full">
                                        <ChevronDown className={`size-7 font-bold transition-transform ${openItem === 'item-5' ? 'rotate-180' : ''}`} />
                                    </div>
                                </div>
                                <div className={openItem === 'item-5' ? 'block' : 'hidden'}>
                                    <div className="px-6 pb-6 pt-2 text-zinc-600 dark:text-zinc-300 text-base">
                                        After the GTM strategy and initial campaign has been signed off, our team will launch your campaign to that audience.
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <div
                                role="button"
                                tabIndex={0}
                                aria-expanded={openItem === 'item-6'}
                                onClick={() => { setOpenItem('item-6'); setActiveItem('item-6') }}
                                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setOpenItem('item-6'); setActiveItem('item-6') } }}
                                className={`transition-all duration-200 rounded-2xl border shadow-sm mb-6 cursor-pointer outline-none focus:ring-2 focus:ring-black/40 ${openItem === 'item-6' ? 'border-black shadow-lg bg-white dark:bg-zinc-900' : 'bg-background hover:shadow-md'} group flex flex-col`}
                            >
                                <div className="flex items-center gap-3 px-6 py-6 text-lg font-semibold">
                                    <span className="text-black font-bold text-xl mr-2">6)</span>
                                    <TrendingUp className="size-6 text-black" />
                                    Scale
                                    <div className="ml-auto flex items-center h-full">
                                        <ChevronDown className={`size-7 font-bold transition-transform ${openItem === 'item-6' ? 'rotate-180' : ''}`} />
                                    </div>
                                </div>
                                <div className={openItem === 'item-6' ? 'block' : 'hidden'}>
                                    <div className="px-6 pb-6 pt-2 text-zinc-600 dark:text-zinc-300 text-base">
                                        You'll receive notifications of email responses, a weekly report of campaign stats, and a monthly call to check in on your progress.
                                    </div>
                                </div>
                            </div>
                        </AccordionItem>
                    </Accordion>

                    <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
                        <div className="aspect-76/59 bg-background relative w-full rounded-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${activeItem}-id`}
                                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className="size-full overflow-hidden rounded-2xl border bg-white dark:bg-zinc-900 shadow-md">
                                    <Image
                                        src={images[activeItem].image}
                                        className="size-full object-cover object-left-top dark:mix-blend-lighten"
                                        alt={images[activeItem].alt}
                                        width={1207}
                                        height={929}
                                        loading="lazy"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <BorderBeam
                            duration={6}
                            size={200}
                            className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
