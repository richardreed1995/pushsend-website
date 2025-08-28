"use client"

import { useEffect } from "react"
import { CalendlyWidget } from "@/components/calendly-widget"
import { trackEvent } from "@/components/meta-pixel-events"
import { Logo } from "@/components/logo"

export default function SuccessPage() {
  useEffect(() => {
    // Track successful qualification
    trackEvent("ViewContent")
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with Logo */}
      <header className="py-6 px-4">
        <div className="max-w-2xl mx-auto flex justify-center">
          <Logo />
        </div>
      </header>

      <div className="text-center py-8 px-4">
        <h1 className="text-3xl font-black text-gray-900 mb-4">Application Submitted Successfully!</h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Thank you for your interest in PushSend. Let's schedule a strategy call to discuss your specific needs.
        </p>
        <br></br>
        <p className="text-gray-500 text-sm">Please wait 5 seconds for the calendar to load below.</p>
      </div>

      <div className="w-full px-4 h-[1200px] md:h-[700px]">
        <CalendlyWidget />
      </div>
    </div>
  )
} 