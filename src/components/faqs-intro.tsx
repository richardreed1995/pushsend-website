"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What exactly do I get with the 5 automation flows?",
    answer: "You get complete automation systems for Acquisition, Conversion, Onboarding, Fulfilment, and Retention - all built specifically for your business and fully integrated with your existing tools."
  },
  {
    question: "How long does implementation take?",
    answer: "Most systems are implemented within 30 days. We work quickly to get you seeing results fast, with some automations going live within the first week."
  },
  {
    question: "What tools do you work with?",
    answer: "We use enterprise-grade platforms like Make, N8n, and custom code solutions. These integrate seamlessly with your existing CRM, project management, accounting, and communication tools."
  },
  {
    question: "Do I need technical knowledge to run these?",
    answer: "No technical knowledge required. We provide comprehensive training and ongoing support. Your team will be confident using the systems within days."
  },
  {
    question: "What if I need changes or updates later?",
    answer: "We provide ongoing support and can make adjustments as your business grows. The systems are designed to scale with you."
  },
  {
    question: "Will this work for my specific type of service business?",
    answer: "Yes, our systems are designed specifically for B2B service businesses like agencies, consultancies, and professional services. We customize everything to your specific needs."
  },
  {
    question: "What's the investment?",
    answer: "Full pricing is revealed in the video above. Schedule your call to discuss your specific needs and get a custom quote."
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