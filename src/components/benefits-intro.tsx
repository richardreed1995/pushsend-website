import { Button } from "@/components/ui/button";
import { DollarSign, Zap, Users, Target, Shield, Clock } from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    title: "No Monthly Retainers",
    description: "You pay once and get a complete campaign that books meetings for months.",
    icon: DollarSign
  },
  {
    title: "No Expensive In-House Team",
    description: "Avoid hiring expensive SDRs or building internal outbound teams.",
    icon: Users
  },
  {
    title: "Save Hundreds Of Hours",
    description: "No need to spend months learning outbound or building prospect lists.",
    icon: Clock
  }
];

export default function BenefitsIntro() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            3 Reasons You Should Get Started Now:
          </h2>
          <p className="text-lg text-gray-600">
            Fast implementation, guaranteed results, and a proactive team of experts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <div key={benefit.title} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <IconComponent className="h-8 w-8 text-gray-500" />
                  <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
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