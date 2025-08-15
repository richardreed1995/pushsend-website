"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HeroHeader } from "@/components/header";
import Footer from "@/components/footer";
import { Download } from "lucide-react";

export default function GuidePage() {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    phone: "",
    website: "",
    revenue: "",
    constraint: ""
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email.trim()) {
      return setError("Please enter your email address");
    }
    if (!validateEmail(email)) {
      return setError("Please enter a valid email address");
    }
    setStep(1);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Prevent multiple submissions
    if (isSubmitting) return;
    
    // Validate all required fields
    if (!formData.revenue.trim() || !formData.constraint.trim()) {
      return setError("Please fill in all required fields");
    }

    // Validate email again (in case it was changed)
    if (!email.trim() || !validateEmail(email)) {
      return setError("Please enter a valid email address");
    }

    setIsSubmitting(true);

    try {
      // Send data to webhook only if all validation passes
      const response = await fetch("https://hook.eu2.make.com/xq1dvs5e98p1w88grh58skodmco254tx", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify({
          email: email.trim(),
          formData: {
            first: formData.first.trim() || null,
            last: formData.last.trim() || null,
            phone: formData.phone.trim() || null,
            website: formData.website.trim() || null,
            revenue: formData.revenue.trim(),
            constraint: formData.constraint.trim()
          },
          type: "guide-download",
          source: "guide-page",
          completedAt: new Date().toISOString(),
          userAgent: navigator.userAgent,
          timestamp: Date.now(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook failed: ${response.status}`);
      }

      // Trigger download only after successful webhook
      window.open("/path-to-your-guide.pdf", "_blank");
    } catch (e) {
      console.error("Guide download error:", e);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (step === 0) {
        handleEmailSubmit(e as any);
      } else {
        handleFormSubmit(e as any);
      }
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
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
              <span className="text-[#A8FF9E]">Growth Guide</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Access our comprehensive guide to building a high-converting lead generation system.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-0 pb-20">
          <div className="max-w-2xl mx-auto px-6">
            {/* Step 1: Email Collection */}
            {step === 0 && (
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
                      className="text-lg p-4 h-14 border-2 focus:ring-[#A8FF9E]/20 focus:border-[#A8FF9E]"
                      required
                    />
                  </div>
                  
                  {error && <p className="text-red-500 text-center font-medium">{error}</p>}
                  
                  <Button 
                    type="submit"
                    disabled={!email.trim()}
                    className="w-full text-lg py-4 h-14 bg-[#A8FF9E] text-black hover:bg-[#A8FF9E]/90 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Get Free Trainings
                  </Button>
                </div>
              </form>
            )}

            {/* Step 2: Detailed Form */}
            {step === 1 && (
              <form onSubmit={handleFormSubmit} className="bg-card rounded-3xl shadow-lg border p-6 md:p-8">
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-foreground">Tell us about your business</h3>
                    <p className="text-muted-foreground">This helps us personalize your guide</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-foreground mb-2 block">First Name</Label>
                      <Input
                        type="text"
                        placeholder="John"
                        value={formData.first}
                        onChange={(e) => handleInputChange('first', e.target.value)}
                        className="focus:ring-[#A8FF9E]/20 focus:border-[#A8FF9E]"
                      />
                    </div>
                    
                    <div>
                      <Label className="text-sm font-medium text-foreground mb-2 block">Last Name</Label>
                      <Input
                        type="text"
                        placeholder="Doe"
                        value={formData.last}
                        onChange={(e) => handleInputChange('last', e.target.value)}
                        className="focus:ring-[#A8FF9E]/20 focus:border-[#A8FF9E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-foreground mb-2 block">Phone Number</Label>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="focus:ring-[#A8FF9E]/20 focus:border-[#A8FF9E]"
                      />
                    </div>
                    
                    <div>
                      <Label className="text-sm font-medium text-foreground mb-2 block">Website</Label>
                      <Input
                        type="url"
                        placeholder="https://yourcompany.com"
                        value={formData.website}
                        onChange={(e) => handleInputChange('website', e.target.value)}
                        className="focus:ring-[#A8FF9E]/20 focus:border-[#A8FF9E]"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-foreground mb-2 block">
                      Annual Revenue <span className="text-red-500">*</span>
                    </Label>
                    <select
                      value={formData.revenue}
                      onChange={(e) => handleInputChange('revenue', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#A8FF9E]/20 focus:border-[#A8FF9E]"
                      required
                    >
                      <option value="">Select your annual revenue</option>
                      <option value="under-100k">Under $100k</option>
                      <option value="100k-500k">$100k - $500k</option>
                      <option value="500k-1m">$500k - $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="5m-10m">$5M - $10M</option>
                      <option value="over-10m">Over $10M</option>
                    </select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-foreground mb-2 block">
                      Biggest Challenge <span className="text-red-500">*</span>
                    </Label>
                    <select
                      value={formData.constraint}
                      onChange={(e) => handleInputChange('constraint', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#A8FF9E]/20 focus:border-[#A8FF9E]"
                      required
                    >
                      <option value="">Select your biggest challenge</option>
                      <option value="lead-generation">Lead Generation</option>
                      <option value="conversion-rates">Conversion Rates</option>
                      <option value="scaling-operations">Scaling Operations</option>
                      <option value="team-building">Team Building</option>
                      <option value="process-automation">Process Automation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {error && <p className="text-red-500 text-center font-medium">{error}</p>}
                  
                  <div className="flex gap-4">
                    <Button 
                      type="button"
                      onClick={() => setStep(0)}
                      variant="outline"
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button 
                      type="submit"
                      disabled={isSubmitting || !formData.revenue || !formData.constraint}
                      className="flex-1 bg-[#A8FF9E] text-black hover:bg-[#A8FF9E]/90 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Download className="mr-2 h-4 w-4" />
                          Get Your Guide
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 