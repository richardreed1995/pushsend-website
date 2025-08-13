import HeroSection from "@/components/hero-section";
import Features4 from "@/components/features-4";
import HubSpotServices from "@/components/hubspot-services";
import Methodology from "@/components/methodology";
import CallToAction from "@/components/call-to-action";
import Faqs3 from "@/components/faqs-3";
import Footer from "@/components/footer";
import Features from "@/components/features-12";
import { HeroHeader } from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroHeader />
      <main className="flex-1 flex flex-col gap-12">
        <HeroSection />
        <Features4 />
        <HubSpotServices />
        <Methodology />
        <Faqs3 />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
