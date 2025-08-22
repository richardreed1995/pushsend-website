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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      const response = await fetch("https://hook.eu2.make.com/wo23cq6ck256g3w4vy918yk1en8iae4w", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify({
          email: email.trim(),
          type: "downloads-form",
          source: "downloads-page",
          completedAt: new Date().toISOString(),
          userAgent: navigator.userAgent,
          timestamp: Date.now(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook failed: ${response.status}`);
      }

      // Redirect to the specified URL only after successful webhook
      window.open("https://gamma.app/docs/All-of-our-content-qezf4torn071c3h?mode=doc", "_blank");
    } catch (e) {
      console.error("Download form error:", e);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e as any);
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
              Get Your Free{" "}
              <span className="text-foreground">Growth Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Access our collection of proven templates, guides, and resources to accelerate your business growth.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-0 pb-20">
          <div className="max-w-2xl mx-auto px-6">
            <form onSubmit={handleSubmit} className="bg-card rounded-3xl shadow-lg border p-6 md:p-8">
              <div className="space-y-4">
                <div>
                  <Label className="text-base font-medium text-foreground mb-2 block">Email Address</Label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="text-lg p-4 h-14 border-2 focus:ring-orange-500/20 focus:border-orange-500"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                {error && <p className="text-red-500 text-center font-medium">{error}</p>}
                
                <Button 
                  type="submit"
                  disabled={isSubmitting || !email.trim()}
                  className="w-full text-lg py-4 h-14 bg-orange-500 text-white hover:bg-orange-600 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-5 w-5" />
                      Get Free Downloads
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 