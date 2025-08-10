import { Users, Target, UserCheck, Settings, BarChart3 } from "lucide-react";

const flows = [
  {
    title: "Acquisition",
    description: "Our authority content system transforms your expertise into a content machine. We take your thoughts, ideas, and knowledge and automatically turn them into engaging social content, blog content, email campaigns that position you as the expert in your field and generate high quality leads.",
    icon: Target,
    image: "Acquisition automation flow showing lead tracking and analytics"
  },
  {
    title: "Conversion",
    description: "We help you build an assessment funnel that generates and qualifies leads. The assessment tool educates your leads on your offer and shows them how you can solve their problems.",
    icon: Users,
    image: "Conversion automation flow showing meeting scheduling and client management"
  },
  {
    title: "Onboarding",
    description: "Our automated onboarding sequence impresses new clients from the moment they sign. This system guides clients through everything they need to know, sets clear expectations, collects essential information, and ensures they feel confident and excited about working with you.",
    icon: UserCheck,
    image: "Onboarding automation flow showing client welcome sequence"
  },
  {
    title: "Fulfilment",
    description: "Production line task management that keeps your team organised and projects on track. Our fulfilment system automatically assigns tasks to the right team members at the right time, tracks progress, and ensures consistent delivery standards without you having to micromanage every detail.",
    icon: Settings,
    image: "Fulfilment automation flow showing task management and project tracking"
  },
  {
    title: "Retention",
    description: "Automated client satisfaction tracking that identifies upsell and case study opportunities. Our retention system also flags at risk clients, so you can take action and proactively fix issues.",
    icon: BarChart3,
    image: "Retention automation flow showing client analytics and reporting"
  }
];

export default function AutomationFlows() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Our Automation Flows Cover The Five Core Pillars Of Your Business:
          </h2>
        </div>
        
        <div className="space-y-16">
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
                  <div className="bg-gray-100 rounded-lg p-8 h-64 flex items-center justify-center">
                    <p className="text-gray-500 text-center">{flow.image}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 