"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { HeroHeader } from '@/components/header';
import Footer from '@/components/footer';
import { Mail } from 'lucide-react';

export default function NewsletterPage() {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({
    revenue: '',
    constraint: ''
  });
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleEmailSubmit = () => {
    setError('');
    if (!email.trim()) {
      return setError("Please enter your email address");
    }
    if (!validateEmail(email)) {
      return setError("Please enter a valid email address");
    }

    // Send data to webhook
    fetch("https://hook.eu2.make.com/19t79l6rolrkfjod77hd2yr952a54ph5", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        type: "newsletter-email-collection",
        completedAt: new Date().toISOString(),
      }),
    }).catch(e => {
      // Fail silently
    });

    setStep(1);
  };

  const handleFormSubmit = async () => {
    setError('');
    if (!formData.revenue || !formData.constraint) {
      return setError("Please fill in all fields");
    }

    try {
      await fetch("https://hook.eu2.make.com/19t79l6rolrkfjod77hd2yr952a54ph5", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          type: "newsletter-form-submission",
          revenue: formData.revenue,
          constraint: formData.constraint,
          completedAt: new Date().toISOString(),
        }),
      });
      
      // Redirect to thank you page or show success message
      window.location.href = '/newsletter/thank-you';
    } catch (e) {
      setError("Something went wrong. Please try again.");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEmailSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />
      <main className="pt-24 md:pt-36">
        {/* Hero Section */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Weekly HubSpot Growth Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stay ahead of the curve with our weekly newsletter featuring HubSpot tips, growth strategies, and industry insights. Join thousands of B2B professionals.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-0 pb-20">
          <div className="max-w-2xl mx-auto px-6">
            {/* Step 1: Email Collection */}
            {step === 0 && (
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
                      className="text-lg p-4 h-14 border-2 focus:ring-4 focus:ring-blue-400/20 focus:border-blue-400"
                    />
                  </div>
                  
                  {error && <p className="text-red-500 text-center font-medium">{error}</p>}
                  
                  <Button 
                    onClick={handleEmailSubmit}
                    className="w-full text-lg py-4 h-14 bg-blue-300 text-white hover:bg-blue-400 font-semibold"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Subscribe to Newsletter
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Detailed Form */}
            {step === 1 && (
              <div className="bg-card rounded-3xl shadow-lg border p-6 md:p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Almost there!</h2>
                  <p className="text-base text-muted-foreground">Help us personalize your newsletter experience and deliver the most relevant insights</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-foreground mb-2 block">Annual revenue</Label>
                    <select
                      value={formData.revenue}
                      onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                      className="w-full p-3 h-12 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-background"
                    >
                      <option value="">Select your annual revenue</option>
                      <option value="under-100k">Under $100k</option>
                      <option value="100k-500k">$100k - $500k</option>
                      <option value="500k-1m">$500k - $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="5m-10m">$5M - $10M</option>
                      <option value="10m+">$10M+</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium text-foreground mb-2 block">Biggest growth constraint</Label>
                    <select
                      value={formData.constraint}
                      onChange={(e) => setFormData({ ...formData, constraint: e.target.value })}
                      className="w-full p-3 h-12 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-background"
                    >
                      <option value="">Select your biggest constraint</option>
                      <option value="lead-generation">Lead Generation</option>
                      <option value="conversion-rate">Conversion Rate</option>
                      <option value="sales-process">Sales Process</option>
                      <option value="team-scaling">Team Scaling</option>
                      <option value="marketing-budget">Marketing Budget</option>
                      <option value="brand-awareness">Brand Awareness</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  {error && <p className="text-red-500 text-center font-medium">{error}</p>}
                  
                  <Button 
                    onClick={handleFormSubmit}
                    className="w-full text-lg py-4 h-14 bg-blue-300 text-white hover:bg-blue-400 font-semibold"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Complete Subscription
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
