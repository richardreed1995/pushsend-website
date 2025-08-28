import { Button } from "@/components/ui/button";
import LogoCloud from "@/components/logo-cloud";
import Link from "next/link";

export default function HeroSectionIntro() {
  return (
    <section className="relative overflow-hidden bg-background py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trust Indicator Tab */}
          <div className="mb-6 sm:mb-8 lg:mb-10">
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-gray-100 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm text-gray-700">
              <span className="text-yellow-500">★★★★★</span>
              <span>Trusted by 20+ B2B Businesses</span>
            </div>
          </div>
          
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-5xl leading-tight">
              Get Qualified B2B Sales Conversations Delivered To Your CRM
            </h1>
          </div>
          <p className="text-base leading-6 sm:leading-8 text-muted-foreground mb-4 sm:mb-6 lg:mb-8 sm:text-lg lg:text-xl">
            We'll outreach to 10,000 of your perfect fit prospects with proven playbooks. All for a one-time fee.
          </p>
          <p className="text-xs leading-4 sm:leading-5 text-muted-foreground mb-6 sm:mb-8 lg:mb-12 sm:text-sm lg:text-base">
            See the presentation below for our process and pricing.
          </p>
          
          <div className="mb-6 sm:mb-8 lg:mb-12">
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <iframe 
                  src="https://docs.google.com/presentation/d/e/2PACX-1vRcg5iYKzjOi5SjVzuDYdCaMbqH68Nte-D-bT-julWeSTp5CZ2n2xPcbIchNFxsmmgtcQRzeOOMvXx5/pubembed?start=false&loop=false&delayms=3000" 
                  frameBorder="0" 
                  className="w-full h-full"
                  allowFullScreen={true} 
                  title="PushSend Lead Generation System"
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Link href="/get-started-intro">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 text-xl font-semibold shadow-lg">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* <LogoCloud /> */}
    </section>
  );
} 