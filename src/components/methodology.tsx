"use client";

import { BarChart3, Target, ShieldCheck, Users, Mail, TrendingUp, Settings } from 'lucide-react';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../card';

const methodologyCards = [
  {
    icon: <Mail className="size-7 text-zinc-300" />,
    title: 'Enterprise deliverability',
    description:
      'We believe infrastructure determines outcomes. We build dedicated outbound systems with properly warmed inboxes, premium domains, and diversified sending patterns. Our infrastructure ensures consistent inbox placement, because the best message means nothing if it lands in spam.',
  },
  {
    icon: <Target className="size-7 text-zinc-300" />,
    title: 'Smart targeting',
    description:
      'We believe volume drives results when paired with intelligent targeting. We combine multiple data sources to identify the right stakeholders at scale. We test fast to find prospects who want to have sales conversations, then scale this across your total addressable market.',
  },
  {
    icon: <Settings className="size-7 text-zinc-300" />,
    title: 'Structured process',
    description:
      'We believe simplicity scales. We focus on sending the right email, to the right person, at the right time. We use AI in a closely constrained way to add context and personalisation to every message.',
  },
  {
    icon: <Users className="size-7 text-zinc-300" />,
    title: 'Growth experts',
    description:
      'We believe in representing your brand at its best. We shine light on problems prospects didn\'t know existed, providing insights upfront. Every conversation we generate is with genuinely interested prospects, enhancing your reputation whilst your sales team enjoys higher close rates.',
  },
];

const steps = [
  {
    title: 'Onboarding',
    description:
      'After signing our proposal, we\'ll have you fill out an onboarding form so we can understand more about you and your business.',
  },
  {
    title: 'Kick off call',
    description:
      'Our account managers will go over your onboarding form on a call with you to formulate an initial campaign strategy.',
  },
  {
    title: 'Infrastructure',
    description:
      'We\'ll take all the information from the kick-off call to set up your inboxes, build you lead list, and write your campaigns.',
  },
  {
    title: 'Strategy',
    description:
      'We\'ll outline a GTM strategy which outlines the campaigns we\'ll run to which audiences in priority order.',
  },
  {
    title: 'Launch',
    description:
      'After the GTM strategy and initial campaign has been signed off, our team will launch your campaign to that audience.',
  },
  {
    title: 'Scale',
    description:
      'You\'ll receive notifications of email responses, a weekly report of campaign stats, and a monthly call to check in on your progress.',
  },
];

export default function Methodology() {
  return (
    <section id="process" className="py-12 md:py-20 bg-zinc-900 text-white scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6 space-y-16">
        <div className="mx-auto max-w-xl text-center space-y-4">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl mb-4">Our Methodology</h2>
          <p className="text-zinc-300 text-lg">Discover our approach to creating outbound results at scale.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2">
          {methodologyCards.map((card) => (
            <Card key={card.title} className="bg-zinc-950 border-zinc-800 text-white shadow-md flex flex-col h-full">
              <CardHeader className="flex flex-col items-start gap-1 border-none px-4 pt-5 pb-0">
                <div className="flex items-center gap-2 w-full">
                  {card.icon}
                  <CardTitle className="text-left text-base font-semibold">{card.title}</CardTitle>
                </div>
                <hr className="border-t border-zinc-700 my-3 w-full" />
              </CardHeader>
              <CardContent className="flex-1 flex items-start justify-start px-4 pb-5 pt-0">
                <CardDescription className="text-left text-zinc-300 text-sm leading-relaxed">
                  {card.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 