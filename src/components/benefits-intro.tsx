import { DollarSign, Zap, Users, Target, Shield, Clock } from "lucide-react";

const benefits = [
  {
    title: "Pay Once, Own Forever",
    description: "No monthly agency retainers or subscription fees. You pay once and these systems belong to your business permanently.",
    icon: DollarSign
  },
  {
    title: "Avoid the Headache of Hiring",
    description: "Avoid the headache of hiring expensive in-house employees to handle automation and process management.",
    icon: Users
  },
  {
    title: "Save Hours of Time",
    description: "Don't spend hours learning complicated skills of B2B automation. We handle everything for you.",
    icon: Clock
  }
];

export default function BenefitsIntro() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Three Reasons You Should Get Started Now
          </h2>
          <p className="text-lg text-gray-600">
            Fast implementation, guaranteed results, and a proactive team of experts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
} 