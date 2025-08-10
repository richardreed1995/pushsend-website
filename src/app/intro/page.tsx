import HeroSectionIntro from "@/components/hero-section-intro";
import TestimonialsIntro from "@/components/testimonials-intro";
import AutomationFlows from "@/components/automation-flows";
import BenefitsIntro from "@/components/benefits-intro";
import FAQsIntro from "@/components/faqs-intro";
import CTAIntro from "@/components/cta-intro";
import FooterIntro from "@/components/footer-intro";
import { HeroHeaderIntro } from "@/components/header-intro";

export default function IntroPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroHeaderIntro />
      <main className="flex-1 flex flex-col">
        <HeroSectionIntro />
        <BenefitsIntro />
        <AutomationFlows />
        <TestimonialsIntro />
        <FAQsIntro />
        <CTAIntro />
      </main>
      <FooterIntro />
    </div>
  );
} 