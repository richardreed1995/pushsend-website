"use client";

import { HeroHeader } from "@/components/header";
import Footer from "@/components/footer";
import { CalendlyWidget } from "@/components/calendly-widget";

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 lg:py-24">
          <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Schedule Your 30-Minute Consultation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-4">
              Let's discuss how PushSend can help you generate consistent sales conversations with qualified prospects ready to speak with your team.
            </p>
            <p className="text-gray-500 text-sm">Please wait a moment for the calendar to load below.</p>
          </div>
        </section>

        {/* Calendly Section */}
        <section className="pt-2 pb-8 md:pb-20">
          <div className="w-full px-4 md:px-6 h-[1200px] md:h-[700px]">
            <CalendlyWidget />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 