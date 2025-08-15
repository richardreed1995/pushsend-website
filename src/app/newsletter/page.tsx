"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HeroHeader } from "@/components/header";
import Footer from "@/components/footer";
import { Mail } from "lucide-react";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Prevent multiple submissions
    if (isSubmitting) return;
    
    // Validate email
    if (!email.trim()) {
      return setError("Please enter your email address");
    }
    if (!validateEmail(email)) {
      return setError("Please enter a valid email address");
    }

    setIsSubmitting(true);

    try {
      // Send data to webhook only if validation passes
      const response = await fetch("https://hook.eu2.make.com/19t79l6rolrkfjod77hd2yr952a54ph5", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify({
          email: email.trim(),
          type: "newsletter-subscription",
          source: "newsletter-page",
          completedAt: new Date().toISOString(),
          userAgent: navigator.userAgent,
          timestamp: Date.now(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook failed: ${response.status}`);
      }

      setIsSubmitted(true);
    } catch (e) {
      console.error("Newsletter subscription error:", e);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEmailSubmit(e as any);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />
      <main className="pt-24 md:pt-36">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Stay Ahead with Our{" "}
              <span className="text-[#A8FF9E]">Growth Newsletter</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get weekly insights on lead generation, automation, and business growth strategies that actually work.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-0 pb-20">
          <div className="max-w-2xl mx-auto px-6">
            {!isSubmitted ? (
              <form onSubmit={handleEmailSubmit} className="bg-card rounded-3xl shadow-lg border p-6 md:p-8">
                <div className="space-y-4">
                  <div>
                    <Label className="text-base font-medium text-foreground mb-2 block">Email Address</Label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="text-lg p-4 h-14 border-2 focus:ring-4 focus:ring-[#A8FF9E]/20 focus:border-[#A8FF9E]"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  {error && <p className="text-red-500 text-center font-medium">{error}</p>}
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting || !email.trim()}
                    className="w-full text-lg py-4 h-14 bg-[#A8FF9E] text-black hover:bg-[#A8FF9E]/90 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                        Subscribing...
                      </>
                    ) : (
                      <>
                        <Mail className="mr-2 h-5 w-5" />
                        Subscribe to Newsletter
                      </>
                    )}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="bg-card rounded-3xl shadow-lg border p-6 md:p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#A8FF9E] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Welcome to the Family!</h2>
                  <p className="text-muted-foreground mb-6">
                    You've successfully subscribed to our newsletter. Check your email for a confirmation message.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Don't see it? Check your spam folder or{" "}
                    <button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setEmail("");
                      }}
                      className="text-[#A8FF9E] hover:underline"
                    >
                      try again
                    </button>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 