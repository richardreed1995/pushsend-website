import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import LogoCloud from "@/components/logo-cloud";
import Link from "next/link";

export default function HeroSectionIntro() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <TextEffect
              className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight"
            >
              Get 5 Complete Business Automation Systems Built & Installed In Your Business - In Just 30 Days!
            </TextEffect>
          </div>
          <p className="text-lg leading-8 text-muted-foreground mb-8">
            We'll set up automated systems that take care of 5 key areas of your business for a one-time payment. More profits, less stress, and more free time!
          </p>
          <p className="text-lg leading-8 text-muted-foreground mb-12">
            Watch this video for all the details and price, then schedule your call!
          </p>
          
          <div className="flex justify-center mb-12">
            <Link href="/get-started-intro">
              <Button size="lg" className="bg-[#A8FF9E] text-black hover:bg-[#8BFF7A] px-12 py-6 text-xl font-semibold shadow-lg">
                Get Started NOW
              </Button>
            </Link>
          </div>
          
          <div className="mb-12">
            <div className="aspect-video w-full max-w-4xl mx-auto bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Wispr Flow Video Embed</p>
            </div>
          </div>
        </div>
      </div>
      <LogoCloud />
    </section>
  );
} 