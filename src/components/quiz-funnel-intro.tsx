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
    phone: "",
    isSubmitting: false
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
    
    // Only advance to next step if not on the final step
    if (step < 3) {
      setStep((s) => s + 1);
      return;
    }
  }

  async function submitForm() {
    setError("");
    
    // Prevent multiple submissions
    if (formData.isSubmitting) {
      return;
    }
    
    // Set submitting flag
    setFormData(prev => ({ ...prev, isSubmitting: true }));
    
    try {
      // Validate the final step (contact details)
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
        setError("Please fill in all required fields");
        return;
      }
      if (!validateEmail(formData.email)) {
        setError("Please enter a valid email address");
        return;
      }
      
      // Additional validation to ensure all required fields are properly filled
      if (!formData.businessType || !formData.monthlyRevenue || !formData.hasFunds) {
        setError("Please complete all steps of the form");
        return;
      }
      
      // Check qualification before proceeding
      if (!checkQualification()) {
        router.push("/disqualified");
        return;
      }
      
      // Final validation - ensure we have complete and valid data
      const trimmedData = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim()
      };
      
      if (!trimmedData.firstName || !trimmedData.lastName || !trimmedData.email || !trimmedData.phone) {
        setError("Please fill in all required fields");
        return;
      }
      
      // Only send webhook if we have complete and valid data
      const webhookData = {
        businessType: formData.businessType,
        monthlyRevenue: formData.monthlyRevenue,
        hasFunds: formData.hasFunds,
        ...trimmedData
      };
      
      // Final safety check - ensure no empty values
      const hasEmptyValues = Object.values(webhookData).some(value => !value || value.trim() === '');
      if (hasEmptyValues) {
        console.error("Preventing webhook - empty values detected:", webhookData);
        setError("Please fill in all required fields");
        return;
      }
      
      console.log("Submitting form with data:", webhookData);
      
      // Send form data to our API route (which handles Slack and Google Sheets)
      try {
        // Don't wait for the API response - redirect immediately
        fetch("/api/submit-form", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(webhookData),
        }).catch(apiError => {
          console.error("API error (background):", apiError);
        });
        
        console.log("Form submitted successfully - redirecting to success page");
      } catch (apiError) {
        console.error("API error:", apiError);
        // Don't fail the form submission if API call fails
      }
      
      // Redirect immediately to success page
      router.push("/success");
    } finally {
      // Reset submitting flag
      setFormData(prev => ({ ...prev, isSubmitting: false }));
    }
  }
  
  function prev() { 
    setStep((s) => Math.max(0, s - 1)); 
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default form submission behavior
      
      // Only allow Enter key submission on the final step
      if (step === 3) {
        // Additional check to ensure we're not in the middle of typing
        const target = e.target as HTMLInputElement;
        if (target && target.value && target.value.trim()) {
          submitForm();
        }
      } else {
        next();
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Logo */}
      <div className="flex justify-center mb-4 sm:mb-8 pt-0 sm:pt-8">
        <Link href="/intro">
          <Logo />
        </Link>
      </div>
      
      {/* Progress Bar */}
      <div className="space-y-2 mb-6 sm:mb-8">
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
      
      <div className="sm:border sm:border-gray-200 sm:shadow-sm sm:rounded-lg sm:p-8 p-4">
        {step === 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-8 text-center">Are you a B2B Company or a B2C Company?</h3>
            <div className="space-y-4 mb-8">
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.businessType === "b2b" 
                    ? "border-black bg-black/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => {
                  setFormData({ ...formData, businessType: "b2b" });
                  setTimeout(() => next(), 300);
                }}
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
                onClick={() => {
                  setFormData({ ...formData, businessType: "b2c" });
                  setTimeout(() => next(), 300);
                }}
              >
                <div className="font-medium">B2C Company</div>
                <div className="text-sm text-gray-600 mt-1">
                  You sell products or services directly to individual consumers.
                </div>
              </button>
            </div>
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
          </div>
        )}

        {step === 1 && (
          <div>
            <h3 className="text-lg font-semibold mb-8 text-center">What is your approximate CURRENT monthly revenue in your business?</h3>
            <div className="space-y-4 mb-8">
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.monthlyRevenue === "under-5k" 
                    ? "border-black bg-black/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => {
                  setFormData({ ...formData, monthlyRevenue: "under-5k" });
                  setTimeout(() => next(), 300);
                }}
              >
                <div className="font-medium">Under $5k</div>
              </button>
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.monthlyRevenue === "5k-25k" 
                    ? "border-black bg-black/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => {
                  setFormData({ ...formData, monthlyRevenue: "5k-25k" });
                  setTimeout(() => next(), 300);
                }}
              >
                <div className="font-medium">$5k - $25k</div>
              </button>
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.monthlyRevenue === "25k-100k" 
                    ? "border-black bg-black/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => {
                  setFormData({ ...formData, monthlyRevenue: "25k-100k" });
                  setTimeout(() => next(), 300);
                }}
              >
                <div className="font-medium">$25k - $100k</div>
              </button>
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.monthlyRevenue === "100k+" 
                    ? "border-black bg-black/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => {
                  setFormData({ ...formData, monthlyRevenue: "100k+" });
                  setTimeout(() => next(), 300);
                }}
              >
                <div className="font-medium">$100k+</div>
              </button>
            </div>
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-lg font-semibold mb-8 text-center">The price for this service is a one-time fee of $2,500. Do you have available funds to invest in getting this set up?</h3>
            <div className="space-y-4 mb-8">
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.hasFunds === "yes" 
                    ? "border-black bg-black/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => {
                  setFormData({ ...formData, hasFunds: "yes" });
                  setTimeout(() => next(), 300);
                }}
              >
                <div className="font-medium">Yes</div>
              </button>
              <button
                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                  formData.hasFunds === "no" 
                    ? "border-black bg-black/10" 
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => {
                  setFormData({ ...formData, hasFunds: "no" });
                  setTimeout(() => next(), 300);
                }}
              >
                <div className="font-medium">No</div>
              </button>
            </div>
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="text-lg font-semibold mb-8 text-center">What are your contact details?</h3>
            <div className="space-y-6 mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700">First name *</Label>
                  <Input 
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    value={formData.firstName} 
                    onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                    onKeyPress={handleKeyPress}
                    className="mt-1 text-base p-4 focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">Last name *</Label>
                  <Input 
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    value={formData.lastName} 
                    onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                    onKeyPress={handleKeyPress}
                    className="mt-1 text-base p-4 focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700">Email *</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email} 
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  onKeyPress={handleKeyPress}
                  className="mt-1 text-base p-4 focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700">Phone number *</Label>
                <Input 
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone} 
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  onKeyPress={handleKeyPress}
                  className="mt-1 text-base p-4 focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
            <div className="flex justify-center">
              <Button className="w-full bg-black hover:bg-gray-800 text-white" onClick={submitForm}>
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 