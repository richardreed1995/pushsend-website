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

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleEmailSubmit = async () => {
    setError("");
    if (!email.trim()) {
      return setError("Please enter your email address");
    }
    if (!validateEmail(email)) {
      return setError("Please enter a valid email address");
    }

    // Send data to webhook
    try {
      await fetch("https://hook.eu2.make.com/19t79l6rolrkfjod77hd2yr952a54ph5", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          type: "newsletter-subscription",
          completedAt: new Date().toISOString(),
        }),
      });
    } catch (e) {
      // Fail silently
    }

    setIsSubmitted(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEmailSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-24">
          <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Subscribe to Our B2B Growth Newsletter
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Get weekly insights, strategies, and actionable tips to scale your B2B business and build a top 0.1% client acquisition funnel.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-0 pb-20">
          <div className="max-w-2xl mx-auto px-6">
            {!isSubmitted ? (
              <div className="bg-card rounded-3xl shadow-lg border p-6 md:p-8">
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
                    />

                  </div>
                  
                  {error && <p className="text-red-500 text-center font-medium">{error}</p>}
                  
                  <Button 
                    onClick={handleEmailSubmit}
                    className="w-full text-lg py-4 h-14 bg-orange-500 text-white hover:bg-orange-600 font-semibold"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Subscribe to Newsletter
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-card rounded-3xl shadow-lg border p-6 md:p-8">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Welcome to the Newsletter!</h2>
                  <p className="text-base text-muted-foreground mb-6">
                    You've successfully subscribed to our B2B growth newsletter. Check your email for a welcome message and get ready for weekly insights that will help you scale your business.
                  </p>
                  <Button 
                    asChild
                    className="bg-orange-500 text-white hover:bg-orange-600 font-semibold"
                  >
                    <a href="/">Back to Home</a>
                  </Button>
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