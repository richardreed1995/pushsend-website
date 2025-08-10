"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "../../card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/logo";

export default function QuizFunnelIntro() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    businessType: "",
    monthlyRevenue: "",
    teamSize: "",
    biggestChallenge: "",
    budget: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const totalSteps = 6;
  const progress = ((step + 1) / totalSteps) * 100;

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateQualification() {
    // Only allow B2B Service Business with revenue above $10k/month
    if (formData.businessType !== "b2b-service" || 
        (formData.monthlyRevenue !== "10k-25k" && 
         formData.monthlyRevenue !== "25k-50k" && 
         formData.monthlyRevenue !== "50k-100k" && 
         formData.monthlyRevenue !== "100k+")) {
      return false;
    }
    return true;
  }

  async function next() {
    setError("");
    
    // Validate current step
    if (step === 0 && !formData.businessType) {
      return setError("Please select your business type");
    }
    if (step === 1 && !formData.monthlyRevenue) {
      return setError("Please select your monthly revenue");
    }
    if (step === 2 && !formData.teamSize) {
      return setError("Please select your team size");
    }
    if (step === 3 && !formData.biggestChallenge) {
      return setError("Please select your biggest challenge");
    }
    if (step === 4 && !formData.budget) {
      return setError("Please select your budget preference");
    }
    if (step === 5) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
        return setError("Please fill in all required fields");
      }
      if (!validateEmail(formData.email)) {
        return setError("Please enter a valid email address");
      }
      
      // Check qualification before proceeding
      if (!validateQualification()) {
        return setError("Thank you for your interest, but this offer is specifically designed for B2B service businesses with monthly revenue above $10,000. Please contact us for other solutions.");
      }
      
      // Send data to webhook
      try {
        await fetch("https://hook.eu2.make.com/xq1dvs5e98p1w88grh58skodmco254tx", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            formData,
            type: "intro-qualification",
            completedAt: new Date().toISOString(),
          }),
        });
      } catch (e) {
        // Fail silently
      }
      router.push("/success");
      return;
    }
    
    setStep((s) => s + 1);
  }
  
  function prev() { 
    setStep((s) => Math.max(0, s - 1)); 
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      next();
    }
  };

  return (
    <div className="max-w-2xl mx-auto pt-8">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <Link href="/intro">
          <Logo />
        </Link>
      </div>
      
      {/* Progress Bar */}
      <div className="space-y-2 mb-8">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Step {step + 1} of {totalSteps}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full transition-all duration-300" 
            style={{ 
              width: `${progress}%`,
              backgroundColor: '#A8FF9E'
            }} 
          />
        </div>
      </div>
      
      <Card className="border border-gray-200 shadow-sm p-8">
        {step === 0 && (
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">What type of business do you run?</h3>
            <div className="space-y-4 mb-8">
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.businessType === "b2b-service" 
                    ? "border-[#A8FF9E] bg-[#A8FF9E]/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, businessType: "b2b-service" })}
              >
                <div className="font-medium">B2B Service Business</div>
              </button>
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.businessType === "b2c-ecommerce" 
                    ? "border-[#A8FF9E] bg-[#A8FF9E]/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, businessType: "b2c-ecommerce" })}
              >
                <div className="font-medium">B2C/E-commerce Business</div>
              </button>
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.businessType === "product-based" 
                    ? "border-[#A8FF9E] bg-[#A8FF9E]/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, businessType: "product-based" })}
              >
                <div className="font-medium">Product-based business</div>
              </button>
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.businessType === "other" 
                    ? "border-[#A8FF9E] bg-[#A8FF9E]/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, businessType: "other" })}
              >
                <div className="font-medium">Other</div>
              </button>
            </div>
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
            <div className="flex justify-between gap-4">
              <Button variant="outline" className="w-1/2" onClick={prev} disabled={step === 0}>
                Previous
              </Button>
              <Button className="w-1/2" onClick={next}>
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">What's your current monthly revenue?</h3>
            <div className="space-y-4 mb-8">
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.monthlyRevenue === "under-10k" 
                    ? "border-[#A8FF9E] bg-[#A8FF9E]/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, monthlyRevenue: "under-10k" })}
              >
                <div className="font-medium">Under $10,000/month</div>
              </button>
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.monthlyRevenue === "10k-25k" 
                    ? "border-[#A8FF9E] bg-[#A8FF9E]/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, monthlyRevenue: "10k-25k" })}
              >
                <div className="font-medium">$10,000 - $25,000/month</div>
              </button>
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.monthlyRevenue === "25k-50k" 
                    ? "border-[#A8FF9E] bg-[#A8FF9E]/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, monthlyRevenue: "25k-50k" })}
              >
                <div className="font-medium">$25,000 - $50,000/month</div>
              </button>
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.monthlyRevenue === "50k-100k" 
                    ? "border-[#A8FF9E] bg-[#A8FF9E]/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, monthlyRevenue: "50k-100k" })}
              >
                <div className="font-medium">$50,000 - $100,000/month</div>
              </button>
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.monthlyRevenue === "100k+" 
                    ? "border-[#A8FF9E] bg-[#A8FF9E]/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, monthlyRevenue: "100k+" })}
              >
                <div className="font-medium">$100,000+/month</div>
              </button>
            </div>
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
            <div className="flex justify-between gap-4">
              <Button variant="outline" className="w-1/2" onClick={prev}>
                Previous
              </Button>
              <Button className="w-1/2" onClick={next}>
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">How many people are in your team (including yourself)?</h3>
            <div className="space-y-4 mb-8">
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.teamSize === "1" 
                    ? "border-[#A8FF9E] bg-[#A8FF9E]/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, teamSize: "1" })}
              >
                <div className="font-medium">Just me (1 person)</div>
              </button>
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.teamSize === "2-10" 
                    ? "border-[#A8FF9E] bg-[#A8FF9E]/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, teamSize: "2-10" })}
              >
                <div className="font-medium">2-10 people</div>
              </button>
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.teamSize === "11-50" 
                    ? "border-[#A8FF9E] bg-[#A8FF9E]/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, teamSize: "11-50" })}
              >
                <div className="font-medium">11-50 people</div>
              </button>
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.teamSize === "50+" 
                    ? "border-[#A8FF9E] bg-[#A8FF9E]/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, teamSize: "50+" })}
              >
                <div className="font-medium">50+ people</div>
              </button>
            </div>
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
            <div className="flex justify-between gap-4">
              <Button variant="outline" className="w-1/2" onClick={prev}>
                Previous
              </Button>
              <Button className="w-1/2" onClick={next}>
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">What's your biggest challenge right now?</h3>
            <div className="space-y-4 mb-8">
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.biggestChallenge === "manual-work" 
                    ? "border-[#A8FF9E] bg-[#A8FF9E]/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, biggestChallenge: "manual-work" })}
              >
                <div className="font-medium">Too much manual work eating into profits</div>
              </button>
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.biggestChallenge === "inconsistent-client" 
                    ? "border-[#A8FF9E] bg-[#A8FF9E]/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, biggestChallenge: "inconsistent-client" })}
              >
                <div className="font-medium">Inconsistent client experience</div>
              </button>
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.biggestChallenge === "scale-without-hiring" 
                    ? "border-[#A8FF9E] bg-[#A8FF9E]/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, biggestChallenge: "scale-without-hiring" })}
              >
                <div className="font-medium">Struggling to scale without hiring more staff</div>
              </button>
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.biggestChallenge === "poor-lead-followup" 
                    ? "border-[#A8FF9E] bg-[#A8FF9E]/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, biggestChallenge: "poor-lead-followup" })}
              >
                <div className="font-medium">Poor lead follow-up and conversion</div>
              </button>
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.biggestChallenge === "client-retention" 
                    ? "border-[#A8FF9E] bg-[#A8FF9E]/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, biggestChallenge: "client-retention" })}
              >
                <div className="font-medium">Client retention and satisfaction issues</div>
              </button>
            </div>
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
            <div className="flex justify-between gap-4">
              <Button variant="outline" className="w-1/2" onClick={prev}>
                Previous
              </Button>
              <Button className="w-1/2" onClick={next}>
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">This costs $4,000 (£3,000). It is a one-time payment. Are you okay with this?</h3>
            <div className="space-y-4 mb-8">
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.budget === "yes-budget" 
                    ? "border-[#A8FF9E] bg-[#A8FF9E]/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, budget: "yes-budget" })}
              >
                <div className="font-medium">Yes, I have the budget</div>
              </button>
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.budget === "yes-payment-plan" 
                    ? "border-[#A8FF9E] bg-[#A8FF9E]/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, budget: "yes-payment-plan" })}
              >
                <div className="font-medium">Yes, but I'll need to space out the payments</div>
              </button>
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.budget === "no-budget" 
                    ? "border-[#A8FF9E] bg-[#A8FF9E]/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, budget: "no-budget" })}
              >
                <div className="font-medium">No, this isn't within my budget</div>
              </button>
            </div>
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
            <div className="flex justify-between gap-4">
              <Button variant="outline" className="w-1/2" onClick={prev}>
                Previous
              </Button>
              <Button className="w-1/2" onClick={next}>
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">What are your contact details?</h3>
            <div className="space-y-6 mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700">First name *</Label>
                  <Input 
                    placeholder="Enter your first name" 
                    value={formData.firstName} 
                    onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                    onKeyPress={handleKeyPress}
                    className="mt-1 text-lg p-4 focus:ring-2 focus:ring-[#A8FF9E]"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">Last name *</Label>
                  <Input 
                    placeholder="Enter your last name" 
                    value={formData.lastName} 
                    onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                    onKeyPress={handleKeyPress}
                    className="mt-1 text-lg p-4 focus:ring-2 focus:ring-[#A8FF9E]"
                  />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700">Email *</Label>
                <Input 
                  placeholder="Enter your email address" 
                  value={formData.email} 
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  onKeyPress={handleKeyPress}
                  className="mt-1 text-lg p-4 focus:ring-2 focus:ring-[#A8FF9E]"
                />
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700">Phone number *</Label>
                <Input 
                  placeholder="Enter your phone number" 
                  value={formData.phone} 
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  onKeyPress={handleKeyPress}
                  className="mt-1 text-lg p-4 focus:ring-2 focus:ring-[#A8FF9E]"
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
            <div className="flex justify-between gap-4">
              <Button variant="outline" className="w-1/2" onClick={prev}>
                Previous
              </Button>
              <Button className="w-1/2" onClick={next}>
                Get Started
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
} 