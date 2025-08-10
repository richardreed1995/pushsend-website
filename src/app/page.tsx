import HeroSection from "@/components/hero-section";
import Features4 from "@/components/features-4";
import Methodology from "@/components/methodology";
import WhatsIncluded from "@/components/whats-included";
import Testimonials from "@/components/testimonials";
import CallToAction from "@/components/call-to-action";
import Faqs3 from "@/components/faqs-3";
import Footer from "@/components/footer";
import Features from "@/components/features-12";
import { HeroHeader } from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Target, MessageSquare, Database, BarChart3, Settings, TrendingUp, Users, Shield, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroHeader />
      <main className="flex-1 flex flex-col gap-12">
        <HeroSection />
        <Features4 />
        <Methodology />
        <WhatsIncluded />
        <Testimonials />
        <Features />
        <Faqs3 />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
