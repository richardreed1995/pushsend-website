"use client";

import { BarChart3, Target, ShieldCheck, Users, Mail, TrendingUp, Settings } from 'lucide-react';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../card';

const methodologyCards = [
  {
    icon: <Mail className="size-7 text-zinc-500" />,
    title: 'Discovery',
    description:
      'We start with a comprehensive consultation to understand your business goals, current HubSpot setup, and growth objectives.',
  },
  {
    icon: <Target className="size-7 text-zinc-500" />,
    title: 'Strategy',
    description:
      'We develop a tailored roadmap that aligns HubSpot\'s capabilities with your specific business needs and growth targets.',
  },
  {
    icon: <Settings className="size-7 text-zinc-500" />,
    title: 'Implementation',
    description:
      'Our experts execute the plan efficiently, keeping you informed throughout the process with regular updates and clear communication.',
  },
  {
    icon: <Users className="size-7 text-zinc-500" />,
    title: 'Optimisation',
    description:
      'We continuously monitor performance and provide recommendations to ensure you\'re getting maximum value from your HubSpot investment.',
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
    <section id="process" className="py-12 md:py-20 bg-white text-foreground scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6 space-y-16">
        <div className="mx-auto max-w-xl text-center space-y-4">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl mb-4">How We Work</h2>
          <p className="text-muted-foreground text-lg">Our proven process for delivering exceptional HubSpot results.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2">
          {methodologyCards.map((card) => (
            <Card key={card.title} className="bg-background border border-border text-foreground shadow-md flex flex-col h-full">
              <CardHeader className="flex flex-col items-start gap-1 border-none px-4 pt-5 pb-0">
                <div className="flex items-center gap-2 w-full">
                  {card.icon}
                  <CardTitle className="text-left text-base font-semibold">{card.title}</CardTitle>
                </div>
                <hr className="border-t border-border my-3 w-full" />
              </CardHeader>
              <CardContent className="flex-1 flex items-start justify-start px-4 pb-5 pt-0">
                <CardDescription className="text-left text-muted-foreground text-sm leading-relaxed">
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