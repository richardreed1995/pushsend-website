import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TestimonialsIntro() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 mb-12">
          <div className="flex flex-col justify-between bg-white p-8 rounded-lg shadow-sm">
            <blockquote className="text-gray-900 mb-4">
              <p className="text-lg leading-relaxed">
                "Working with PushSend has been an incredibly positive and fruitful experience - Rich is thoughtful, responsive and super collaborative, working hard to understand and respond to client needs. Our new PushSend outreach campaign has generated new leads and business opportunities, providing a brilliant springboard for growth."
              </p>
            </blockquote>
            <div className="flex items-center">
              <div className="ml-3">
                <p className="text-sm font-semibold text-gray-900">Kate Newton</p>
                <p className="text-sm text-gray-500">Optimist Performance</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-between bg-white p-8 rounded-lg shadow-sm">
            <blockquote className="text-gray-900 mb-4">
              <p className="text-lg leading-relaxed">
                "PushSend have been instrumental in helping drive our explosive growth so far. The process throughout was clear and structured, and we saw an immediate ROI from the get-go."
              </p>
            </blockquote>
            <div className="flex items-center">
              <div className="ml-3">
                <p className="text-sm font-semibold text-gray-900">Callum Woodcock</p>
                <p className="text-sm text-gray-500">Founder, Winefi</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-between bg-white p-8 rounded-lg shadow-sm">
            <blockquote className="text-gray-900 mb-4">
              <p className="text-lg leading-relaxed">
                "We saw immediate success from working with PushSend. Easily the highest-ROI channel we've used to date."
              </p>
            </blockquote>
            <div className="flex items-center">
              <div className="ml-3">
                <p className="text-sm font-semibold text-gray-900">Hugo Tilmouth</p>
                <p className="text-sm text-gray-500">Partner, Founders Capital</p>
              </div>
            </div>
          </div>
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