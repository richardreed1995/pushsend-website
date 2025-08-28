"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What exactly do I get with the outbound lead generation system?",
    answer: "You get a complete outbound system including professional sending infrastructure, a qualified prospect list of 10,000 contacts, personalized email sequences, and automated meeting booking - all set up and launched within 30 days."
  },
  {
    question: "How long does implementation take?",
    answer: "The complete system is set up and launched within 30 days. We work quickly to get you seeing results fast, with the campaign going live within the first week."
  },
  {
    question: "What tools do you use for the system?",
    answer: "We use enterprise-grade email infrastructure, advanced prospecting tools, and AI-powered research to ensure maximum deliverability and effectiveness for your campaigns."
  },
  {
    question: "Do I need technical knowledge to run this?",
    answer: "No technical knowledge required. We handle all the setup, and the system runs automatically. Your only job is to attend the meetings that get booked into your calendar."
  },
  {
    question: "What if I need changes or updates later?",
    answer: "We provide ongoing support and can make adjustments as your business grows. The system is designed to scale with you and can be optimized based on performance."
  },
  {
    question: "Will this work for my specific type of B2B business?",
    answer: "Yes, our system is designed specifically for B2B service businesses. We customize the prospect targeting and messaging to your specific industry and ideal customer profile."
  },
  {
    question: "What's the investment?",
    answer: "Full pricing is revealed in the video above. Schedule your call to discuss your specific needs and get a custom quote for your outbound lead generation system."
  }
];

export default function FAQsIntro() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Can't find what you're looking for? Contact our team
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 