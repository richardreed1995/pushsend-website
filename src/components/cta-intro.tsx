import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTAIntro() {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
          Ready to transform your business into a profit machine?
        </h2>
        <div className="mt-12">
          <Link href="/get-started-intro">
            <Button size="lg" className="bg-[#A8FF9E] text-black hover:bg-[#8BFF7A] px-8 py-4 text-lg">
              Get Started Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 