import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <div className="mt-12">
          <Link href="/get-started-intro">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 text-xl font-semibold shadow-lg">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
