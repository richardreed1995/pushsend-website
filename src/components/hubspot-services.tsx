import { Settings, Target, Users, Shield, Zap, Database, BarChart3, Cpu } from 'lucide-react';

const services = [
  {
    icon: <Settings className="size-5 text-zinc-300" />,
    title: 'HubSpot Onboarding',
    description: 'Centralise your teams, tools, and internal processes in a single platform engineered for enhanced collaboration.',
  },
  {
    icon: <Database className="size-5 text-zinc-300" />,
    title: 'HubSpot Administration',
    description: 'Optimise your backend operations with expert configuration, maintenance, and ongoing management.',
  },
  {
    icon: <Target className="size-5 text-zinc-300" />,
    title: 'Marketing Hub',
    description: 'Generate qualified leads faster and leverage the full power of HubSpot\'s AI-powered marketing software.',
  },
  {
    icon: <Users className="size-5 text-zinc-300" />,
    title: 'Sales Hub',
    description: 'Build your pipeline and close more deals with HubSpot\'s AI-powered sales software that empowers your reps.',
  },
  {
    icon: <Shield className="size-5 text-zinc-300" />,
    title: 'Service Hub',
    description: 'Keep a pulse on your customers\' satisfaction with help desk, ticketing, and AI-powered support tools.',
  },
  {
    icon: <Zap className="size-5 text-zinc-300" />,
    title: 'Content Hub',
    description: 'Create assets and manage campaign impact across the full customer journey using HubSpot\'s content AI agents.',
  },
  {
    icon: <BarChart3 className="size-5 text-zinc-300" />,
    title: 'Commerce Hub',
    description: 'Turn full carts into cash flow with e-commerce tools including invoices, quotes, and revenue reporting.',
  },
  {
    icon: <Cpu className="size-5 text-zinc-300" />,
    title: 'Operations Hub',
    description: 'Sync, clean, and curate prospect and customer data for a unified view of your business.',
  },
  {
    icon: <Settings className="size-5 text-zinc-300" />,
    title: 'Integrations',
    description: 'Upgrade your legacy software to systems that work seamlessly with HubSpot\'s fully integrated CRM.',
  },
];

export default function HubSpotServices() {
  return (
    <section className="py-6 md:py-10 scroll-mt-24 bg-zinc-900 text-white">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">Our HubSpot Services</h2>
          <p className="text-zinc-300 text-base md:text-lg">
            Comprehensive HubSpot solutions to accelerate your business growth across all hubs and integrations.
          </p>
        </div>
        
        <div className="relative mx-auto grid max-w-4xl divide-x divide-y divide-zinc-700 border border-zinc-700 *:p-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center gap-2">
                {service.icon}
                <h3 className="text-base font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-sm text-zinc-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
