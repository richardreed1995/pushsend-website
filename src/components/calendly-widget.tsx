"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    Calendly: any
  }
}

export function CalendlyWidget() {
  const widgetRef = useRef<HTMLDivElement>(null)
  const scriptLoadedRef = useRef(false)
  const widgetInitializedRef = useRef(false)

  useEffect(() => {
    // Prevent multiple initializations
    if (widgetInitializedRef.current) return

    const initCalendly = () => {
      if (window.Calendly && widgetRef.current && !widgetInitializedRef.current) {
        // Clear any existing content
        widgetRef.current.innerHTML = ''
        
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/richard-pushsend/intro?hide_gdpr_banner=1",
          parentElement: widgetRef.current,
          prefill: {},
          utm: {},
        })
        widgetInitializedRef.current = true
      }
    }

    // Check if Calendly is already loaded
    if (window.Calendly) {
      initCalendly()
    } else {
      // Remove any existing Calendly scripts to prevent duplicates
      const existingScripts = document.querySelectorAll('script[src*="calendly.com"]')
      existingScripts.forEach(script => script.remove())

      // Remove any existing Calendly iframes to prevent duplicates
      const existingIframes = document.querySelectorAll('iframe[src*="calendly.com"]')
      existingIframes.forEach(iframe => iframe.remove())

      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      
      script.onload = () => {
        // Small delay to ensure Calendly is fully initialized
        setTimeout(initCalendly, 100)
      }
      
      document.body.appendChild(script)
      scriptLoadedRef.current = true
    }

    return () => {
      // Clean up on unmount
      if (widgetRef.current) {
        widgetRef.current.innerHTML = ''
      }
      widgetInitializedRef.current = false
    }
  }, [])

  return (
    <div 
      ref={widgetRef} 
      id="calendly-inline-widget" 
      className="w-full h-screen min-h-screen" 
      style={{ minWidth: "100%", height: "100vh" }} 
    />
  )
} 