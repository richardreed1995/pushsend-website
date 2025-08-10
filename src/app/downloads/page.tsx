"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HeroHeader } from "@/components/header";
import Footer from "@/components/footer";
import { Download } from "lucide-react";

export default function DownloadsPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async () => {
    setError("");
    if (!email.trim()) {
      return setError("Please enter your email address");
    }
    if (!validateEmail(email)) {
      return setError("Please enter a valid email address");
    }

    // Send data to webhook
    try {
      await fetch("https://hook.eu2.make.com/wo23cq6ck256g3w4vy918yk1en8iae4w", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          type: "downloads-form",
          completedAt: new Date().toISOString(),
        }),
      });
    } catch (e) {
      // Fail silently
    }

    // Redirect to the specified URL
    window.open("https://gamma.app/docs/All-of-our-content-qezf4torn071c3h?mode=doc", "_blank");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
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
            Download Our 12 Free B2B Growth Trainings
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Get instant access to our trainings on how to build a top 0.1% B2B client acquisition funnel.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-0 pb-20">
          <div className="max-w-2xl mx-auto px-6">
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
                    className="text-lg p-4 h-14 border-2 focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>
                
                {error && <p className="text-red-500 text-center font-medium">{error}</p>}
                
                <Button 
                  onClick={handleSubmit}
                  className="w-full text-lg py-4 h-14 bg-orange-500 text-white hover:bg-orange-600 font-semibold"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Get Free Downloads
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 