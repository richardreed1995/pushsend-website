import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const results = [
  {
    title: "Construction Services Company",
    subtitle: "Specialized Building Solutions",
    description: "We helped this construction company generate a $850k pipeline in just 3 months with our 10,000 prospect campaign. They went from purely referral-based to systematic lead generation.",
    result: "$850k pipeline in 90 days"
  },
  {
    title: "Investment Advisory Firm",
    subtitle: "Wealth Management Services",
    description: "We helped this investment firm book 180 qualified meetings in a single campaign, leading to over $2.4M in closed business within 6 months.",
    result: "180 meetings booked"
  },
  {
    title: "Enterprise Software Company",
    subtitle: "B2B SaaS Platform",
    description: "We helped this software company book meetings with Fortune 500 companies and scale their enterprise sales division from $50k to $200k monthly revenue.",
    result: "4x revenue growth"
  },
  {
    title: "Digital Marketing Agency",
    subtitle: "Performance Marketing Services",
    description: "We helped this agency fill their calendar with qualified prospects, allowing them to scale from $25k to $95k monthly revenue in just 4 months.",
    result: "280% revenue increase"
  }
];

export default function ResultsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Results</h2>
            <p className="text-xl text-gray-600">Here's some of the results we got:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {results.map((result, index) => (
              <Card key={index} className="border-2 border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-black">{result.title}</CardTitle>
                  <p className="text-gray-600">{result.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    {result.description}
                  </p>
                  <div className="text-3xl font-bold text-black">{result.result}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/get-started-intro">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 text-xl font-semibold shadow-lg">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
