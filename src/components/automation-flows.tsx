import { Button } from "@/components/ui/button";
import { Users, Target, UserCheck, Settings, BarChart3 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const flows = [
  {
    title: "Strategy",
    description: "As soon as you become a customer, you'll receive an onboarding pack. This includes an onboarding form for us to capture all the details of your business, including who you target, what your offer is, and how you want your leads delivered.",
    icon: Target,
    image: "/image-14.png"
  },
  {
    title: "Build campaign",
    description: "Based on this information, we'll outline the campaign strategy based on our library of proven playbooks. This includes verified lead lists and high-converting outbound copy.",
    icon: Users,
    image: "/Screenshot-2025-01-21-at-2.43.31-pm.png"
  },
  {
    title: "Setup infrastructure",
    description: "We will then setup the secondary domains and email accounts for your campaign. This allows us to scale your campaigns with no impact on your main domain.",
    icon: Settings,
    image: "/Screenshot-2025-08-25-at-10.25.17-am.jpg"
  },
  {
    title: "Send leads in real-time",
    description: "We will then send the leads who respond to these emails directly into your CRM and send you an email and slack alert.",
    icon: BarChart3,
    image: "/SCR-20250121-mqas.png"
  },
  {
    title: "Weekly reports",
    description: "You'll receive a report every Friday which outlines the stats from the previous week.",
    icon: UserCheck,
    image: "/image-10-1.png"
  }
];

export default function AutomationFlows() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            How does it work?
          </h2>
        </div>
        
        <div className="space-y-16 mb-16">
          {flows.map((flow, index) => {
            const IconComponent = flow.icon;
            return (
              <div key={flow.title} className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="h-8 w-8 text-gray-500" />
                    <h3 className="text-2xl font-bold text-gray-900">{flow.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {flow.description}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-lg p-4 h-80 flex items-center justify-center overflow-hidden">
                    <Image 
                      src={flow.image} 
                      alt={flow.title}
                      width={500}
                      height={400}
                      className="object-contain rounded-lg max-w-full max-h-full"
                    />
                  </div>
                </div>
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