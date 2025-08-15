import { Users, Target, MessageSquare, BarChart3, Settings, Mail, Phone, Zap, Shield } from 'lucide-react';

const includedServices = [
  {
    icon: <Users className="size-5 text-orange-500" />,
    title: 'Dedicated account manager'
  },
  {
    icon: <Target className="size-5 text-orange-500" />,
    title: 'Campaign strategy'
  },
  {
    icon: <MessageSquare className="size-5 text-orange-500" />,
    title: 'Email copy written'
  },
  {
    icon: <Settings className="size-5 text-orange-500" />,
    title: 'Infrastructure setup'
  },
  {
    icon: <Phone className="size-5 text-orange-500" />,
    title: 'Monthly check-in call'
  },
  {
    icon: <Shield className="size-5 text-orange-500" />,
    title: 'AI-powered personalisation'
  },
  {
    icon: <Target className="size-5 text-orange-500" />,
    title: 'Custom lead lists built'
  },
  {
    icon: <BarChart3 className="size-5 text-orange-500" />,
    title: 'Weekly reporting'
  },
  {
    icon: <Zap className="size-5 text-orange-500" />,
    title: 'Fast onboarding'
  },
  {
    icon: <Mail className="size-5 text-orange-500" />,
    title: 'Leads sent to your CRM'
  }
];

export default function WhatsIncluded() {
  return (
    <section className="py-6 md:py-10">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">What's Included?</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Everything you need to generate consistent sales conversations, managed by our expert team.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="bg-zinc-900 rounded-3xl border p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
              {includedServices.map((service, index) => (
                <div key={index} className="flex items-center gap-3 text-white w-full max-w-xs">
                  {service.icon}
                  <span className="text-base font-medium">{service.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 