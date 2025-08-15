"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { HeroHeader } from "@/components/header";
import Footer from "@/components/footer";
import { Mail, Phone, Building, User } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Comprehensive validation
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      setError("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    // Phone validation (optional but if provided, should be valid)
    if (formData.phone.trim() && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      setError("Please enter a valid phone number");
      setIsSubmitting(false);
      return;
    }

    // Message validation (optional but if provided, should have minimum length)
    if (formData.message.trim() && formData.message.trim().length < 10) {
      setError("Message must be at least 10 characters long");
      setIsSubmitting(false);
      return;
    }

    try {
      // Send data to webhook only if all validation passes
      const response = await fetch("https://hook.eu2.make.com/xq1dvs5e98p1w88grh58skodmco254tx", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || null,
          message: formData.message.trim() || null,
          type: "contact-form",
          source: "contact-page",
          completedAt: new Date().toISOString(),
          userAgent: navigator.userAgent,
          timestamp: Date.now(),
          ipAddress: "client-side", // Will be captured server-side if needed
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook failed: ${response.status}`);
      }
      
      setIsSubmitted(true);
    } catch (err) {
      console.error("Contact form error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <HeroHeader />
        <main className="pt-24 md:pt-36">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 md:p-12">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Thank you!</h1>
              <p className="text-lg text-gray-600 mb-6">
                We've received your message. Our team will get back to you within 24 hours.
              </p>
              <p className="text-sm text-gray-500">
                In the meantime, check out our <a href="/blog" className="text-orange-600 hover:underline">growth insights</a> to get started.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />
      <main className="pt-24 md:pt-36">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Let's Build Something{" "}
              <span className="text-orange-500">Amazing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to scale your business? Get in touch and let's discuss how we can help you achieve your growth goals.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-0 pb-20">
          <div className="max-w-2xl mx-auto px-6">
            <form onSubmit={handleSubmit} className="bg-card rounded-3xl shadow-lg border p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="firstName" className="text-base font-medium text-foreground mb-2 block">
                    First Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="text-lg p-4 h-14 border-2 focus:ring-orange-500/20 focus:border-orange-500"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <Label htmlFor="lastName" className="text-base font-medium text-foreground mb-2 block">
                    Last Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="text-lg p-4 h-14 border-2 focus:ring-orange-500/20 focus:border-orange-500"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="email" className="text-base font-medium text-foreground mb-2 block">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="text-lg p-4 h-14 border-2 focus:ring-orange-500/20 focus:border-orange-500"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-base font-medium text-foreground mb-2 block">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    className="text-lg p-4 h-14 border-2 focus:ring-orange-500/20 focus:border-orange-500"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="message" className="text-base font-medium text-foreground mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your business and how we can help..."
                  value={formData.message}
                  onChange={handleChange}
                  className="text-lg p-4 border-2 focus:ring-orange-500/20 focus:border-orange-500 min-h-[120px] resize-none"
                  disabled={isSubmitting}
                />
              </div>

              {error && <p className="text-red-500 text-center font-medium mb-6">{error}</p>}
              
              <Button 
                type="submit"
                disabled={isSubmitting || !formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()}
                className="w-full text-lg py-4 h-14 bg-orange-500 text-white hover:bg-orange-600 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 