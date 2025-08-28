import { Button } from "@/components/ui/button";
import Link from "next/link";

const costItems = [
  { item: "10,000 verified contacts", cost: "$1,400", time: "100 hours" },
  { item: "Professional email sequences written and optimised", cost: "$3,000", time: "50 hours" },
  { item: "Enterprise-grade sending infrastructure", cost: "$1,200 p/m", time: "150 hours" },
  { item: "Weekly performance reports", cost: "Included", time: "20 hours" },
  { item: "Meeting booking system setup", cost: "Included", time: "40 hours" },
  { item: "Campaign management and optimisation", cost: "Included", time: "80 hours" }
];

export default function CostComparison() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">How much to do it myself?</h2>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-8">
            <div className="grid grid-cols-3 bg-gray-100 p-4 font-semibold text-gray-900">
              <div>Item</div>
              <div className="text-center">Cost</div>
              <div className="text-center">Time</div>
            </div>
            
            <div className="divide-y divide-gray-200">
              {costItems.map((costItem, index) => (
                <div key={index} className="grid grid-cols-3 p-4 items-center">
                  <div className="text-gray-700">{costItem.item}</div>
                  <div className="text-center font-medium text-gray-900">{costItem.cost}</div>
                  <div className="text-center text-gray-600">{costItem.time}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center bg-green-100 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-bold text-green-800 mb-2">Saving of $5,600 and 440 hours using PushSend</h3>
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
