import { Cpu, Fingerprint, Pencil, Zap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../card';

const features = [
  {
    icon: <Zap className="size-7 text-zinc-500" />, // 100% Exclusive to You
    title: '100% Exclusive to You',
    description:
      "Every prospect comes to you and only you. No more racing 5 other companies to make first contact. You're the only business they hear from.",
  },
  {
    icon: <Cpu className="size-7 text-zinc-500" />, // AI-Powered Quality Control
    title: 'AI-Powered Quality Control',
    description:
      'Our systematic qualification process checks 15+ data points before any lead reaches you. Only serious buyers with verified budgets get through.',
  },
  {
    icon: <Fingerprint className="size-7 text-zinc-500" />, // Instant CRM Delivery
    title: 'Instant CRM Delivery',
    description:
      
      "Prospects appear in your system within seconds of qualification. Call while they're still highly engaged and ready to buy.",
  },
  {
    icon: <Pencil className="size-7 text-zinc-500" />, // Pre-Warmed Prospects
    title: 'Pre-Warmed Prospects',
    description:
      "Every lead receives SMS and email confirmation that your company will call. They're expecting you and actually answer the phone.",
  },
];

export default function FeaturesCards() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">Why Choose Palm?</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            The modern way to scale B2B tech: systematic growth engines that deliver qualified deals directly to your sales team.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {features.map((feature, idx) => (
            <Card
              key={feature.title}
              className="transition-shadow hover:shadow-lg border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
            >
              <CardHeader className="flex flex-col items-center gap-2 border-none px-0 pb-0">
                {feature.icon}
                <CardTitle className="text-center text-lg font-semibold mt-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pt-2 pb-4">
                <CardDescription className="text-center text-muted-foreground text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 