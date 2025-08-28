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
    hasFunds: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const totalSteps = 4;
  const progress = ((step + 1) / totalSteps) * 100;

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function checkQualification() {
    // Disqualify if:
    // 1. B2C company
    // 2. Under $5k monthly revenue
    // 3. No funds available
    if (formData.businessType === "b2c" || 
        formData.monthlyRevenue === "under-5k" || 
        formData.hasFunds === "no") {
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
    if (step === 2 && !formData.hasFunds) {
      return setError("Please select whether you have available funds");
    }
    if (step === 3) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
        return setError("Please fill in all required fields");
      }
      if (!validateEmail(formData.email)) {
        return setError("Please enter a valid email address");
      }
      
      // Check qualification before proceeding
      if (!checkQualification()) {
        router.push("/disqualified");
        return;
      }
      
      // Send data to webhook (you can update this URL)
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
      
      // If qualified, go to success page
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
              backgroundColor: '#000000'
            }} 
          />
        </div>
      </div>
      
      <Card className="border border-gray-200 shadow-sm p-8">
        {step === 0 && (
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Are you a B2B Company or a B2C Company?</h3>
            <div className="space-y-4 mb-8">
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.businessType === "b2b" 
                    ? "border-black bg-black/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, businessType: "b2b" })}
              >
                <div className="font-medium">B2B Company</div>
                <div className="text-sm text-gray-600 mt-1">
                  You sell products or services to other businesses, not directly to consumers.
                </div>
              </button>
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.businessType === "b2c" 
                    ? "border-black bg-black/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, businessType: "b2c" })}
              >
                <div className="font-medium">B2C Company</div>
                <div className="text-sm text-gray-600 mt-1">
                  You sell products or services directly to individual consumers.
                </div>
              </button>
            </div>
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
            <div className="flex justify-between gap-4">
              <Button variant="outline" className="w-1/2" onClick={prev} disabled={step === 0}>
                Previous
              </Button>
              <Button className="w-1/2 bg-black hover:bg-gray-800 text-white" onClick={next}>
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">What is your approximate CURRENT monthly revenue in your business?</h3>
            <div className="space-y-4 mb-8">
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.monthlyRevenue === "under-5k" 
                    ? "border-black bg-black/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, monthlyRevenue: "under-5k" })}
              >
                <div className="font-medium">Under $5k</div>
              </button>
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.monthlyRevenue === "5k-25k" 
                    ? "border-black bg-black/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, monthlyRevenue: "5k-25k" })}
              >
                <div className="font-medium">$5k - $25k</div>
              </button>
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.monthlyRevenue === "25k-100k" 
                    ? "border-black bg-black/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, monthlyRevenue: "25k-100k" })}
              >
                <div className="font-medium">$25k - $100k</div>
              </button>
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.monthlyRevenue === "100k+" 
                    ? "border-black bg-black/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, monthlyRevenue: "100k+" })}
              >
                <div className="font-medium">$100k+</div>
              </button>
            </div>
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
            <div className="flex justify-between gap-4">
              <Button variant="outline" className="w-1/2" onClick={prev}>
                Previous
              </Button>
              <Button className="w-1/2 bg-black hover:bg-gray-800 text-white" onClick={next}>
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">The price for this service is a one-time fee of $2,500. Do you have available funds to invest in getting this set up?</h3>
            <div className="space-y-4 mb-8">
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.hasFunds === "yes" 
                    ? "border-black bg-black/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, hasFunds: "yes" })}
              >
                <div className="font-medium">Yes</div>
              </button>
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.hasFunds === "no" 
                    ? "border-black bg-black/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setFormData({ ...formData, hasFunds: "no" })}
              >
                <div className="font-medium">No</div>
              </button>
            </div>
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
            <div className="flex justify-between gap-4">
              <Button variant="outline" className="w-1/2" onClick={prev}>
                Previous
              </Button>
              <Button className="w-1/2 bg-black hover:bg-gray-800 text-white" onClick={next}>
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
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
                    className="mt-1 text-lg p-4 focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">Last name *</Label>
                  <Input 
                    placeholder="Enter your last name" 
                    value={formData.lastName} 
                    onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                    onKeyPress={handleKeyPress}
                    className="mt-1 text-lg p-4 focus:ring-2 focus:ring-black"
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
                  className="mt-1 text-lg p-4 focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700">Phone number *</Label>
                <Input 
                  placeholder="Enter your phone number" 
                  value={formData.phone} 
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  onKeyPress={handleKeyPress}
                  className="mt-1 text-lg p-4 focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
            <div className="flex justify-between gap-4">
              <Button variant="outline" className="w-1/2" onClick={prev}>
                Previous
              </Button>
              <Button className="w-1/2 bg-black hover:bg-gray-800 text-white" onClick={next}>
                Get Started
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
} 