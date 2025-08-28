"use client";

import { useState, useEffect } from "react";
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
  const [fieldErrors, setFieldErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const router = useRouter();

  const totalSteps = 4;
  const progress = ((step + 1) / totalSteps) * 100;

  // Real-time validation for contact fields
  useEffect(() => {
    if (step === 3) {
      const firstNameValid = formData.firstName.trim().length > 0;
      const lastNameValid = formData.lastName.trim().length > 0;
      const emailValid = formData.email.trim().length > 0 && validateEmail(formData.email);
      const phoneValid = formData.phone.trim().length > 0;
      
      setIsFormValid(firstNameValid && lastNameValid && emailValid && phoneValid);
      
      // Update field-specific errors
      setFieldErrors({
        firstName: firstNameValid ? "" : "First name is required",
        lastName: lastNameValid ? "" : "Last name is required",
        email: !formData.email.trim() ? "Email is required" : (!validateEmail(formData.email) ? "Please enter a valid email" : ""),
        phone: phoneValid ? "" : "Phone number is required"
      });
    }
  }, [formData.firstName, formData.lastName, formData.email, formData.phone, step]);

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
    
    // CRITICAL: Double-check form validity before proceeding
    if (!isFormValid) {
      setError("Please fill in all required fields correctly");
      return;
    }
    
    // Additional validation checks
    const trimmedData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim()
    };
    
    // Validate each field individually
    if (!trimmedData.firstName || trimmedData.firstName.length === 0) {
      setError("First name is required");
      return;
    }
    
    if (!trimmedData.lastName || trimmedData.lastName.length === 0) {
      setError("Last name is required");
      return;
    }
    
    if (!trimmedData.email || trimmedData.email.length === 0) {
      setError("Email is required");
      return;
    }
    
    if (!validateEmail(trimmedData.email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    if (!trimmedData.phone || trimmedData.phone.length === 0) {
      setError("Phone number is required");
      return;
    }
    
    // Validate business logic fields
    if (!formData.businessType || !formData.monthlyRevenue || !formData.hasFunds) {
      setError("Please complete all steps of the form");
      return;
    }
    
    // Check qualification before proceeding
    if (!checkQualification()) {
      router.push("/disqualified");
      return;
    }
    
    // Set submitting flag
    setFormData(prev => ({ ...prev, isSubmitting: true }));
    
    try {
      // Final safety check - ensure we have complete and valid data
      const webhookData = {
        businessType: formData.businessType,
        monthlyRevenue: formData.monthlyRevenue,
        hasFunds: formData.hasFunds,
        ...trimmedData
      };
      
      // CRITICAL: Final validation - ensure no empty values
      const hasEmptyValues = Object.values(webhookData).some(value => !value || value.trim() === '');
      if (hasEmptyValues) {
        console.error("PREVENTING WEBHOOK - Empty values detected:", webhookData);
        setError("Please fill in all required fields");
        return;
      }
      
      // Additional validation - check for minimum length requirements
      if (trimmedData.firstName.length < 2 || trimmedData.lastName.length < 2) {
        setError("Names must be at least 2 characters long");
        return;
      }
      
      if (trimmedData.phone.length < 10) {
        setError("Please enter a valid phone number");
        return;
      }
      
      console.log("Submitting form with complete data:", webhookData);
      
      // Only send webhook if we have complete and valid data
      try {
        const response = await fetch("https://hook.eu2.make.com/cj5346r20ujxqqvzqf8ba6uqiwq3zmse", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            formData: webhookData,
            type: "intro-qualification",
            completedAt: new Date().toISOString(),
            userAgent: navigator.userAgent,
            timestamp: Date.now(),
            sessionId: Math.random().toString(36).substring(7),
            validation: {
              firstNameLength: trimmedData.firstName.length,
              lastNameLength: trimmedData.lastName.length,
              emailLength: trimmedData.email.length,
              phoneLength: trimmedData.phone.length,
              allFieldsPresent: true
            }
          }),
        });
        
        if (!response.ok) {
          console.error("Webhook failed:", response.status, response.statusText);
          setError("There was an error submitting your form. Please try again.");
          return;
        } else {
          console.log("Webhook sent successfully with complete data");
        }
      } catch (e) {
        console.error("Webhook error:", e);
        setError("There was an error submitting your form. Please try again.");
        return;
      }
      
      // If qualified and webhook successful, go to success page
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
      
      // Only allow Enter key submission on the final step AND when form is valid
      if (step === 3 && isFormValid) {
        submitForm();
      } else if (step < 3) {
        next();
      }
      // If on final step but form not valid, do nothing (prevent submission)
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear field-specific error when user starts typing
    if (fieldErrors[field as keyof typeof fieldErrors]) {
      setFieldErrors(prev => ({ ...prev, [field]: "" }));
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
                    onChange={e => handleInputChange("firstName", e.target.value)}
                    onKeyPress={handleKeyPress}
                    className={`mt-1 text-base p-4 focus:ring-2 focus:ring-black ${
                      fieldErrors.firstName ? 'border-red-500' : ''
                    }`}
                  />
                  {fieldErrors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{fieldErrors.firstName}</p>
                  )}
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">Last name *</Label>
                  <Input 
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    value={formData.lastName} 
                    onChange={e => handleInputChange("lastName", e.target.value)}
                    onKeyPress={handleKeyPress}
                    className={`mt-1 text-base p-4 focus:ring-2 focus:ring-black ${
                      fieldErrors.lastName ? 'border-red-500' : ''
                    }`}
                  />
                  {fieldErrors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{fieldErrors.lastName}</p>
                  )}
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
                  onChange={e => handleInputChange("email", e.target.value)}
                  onKeyPress={handleKeyPress}
                  className={`mt-1 text-base p-4 focus:ring-2 focus:ring-black ${
                    fieldErrors.email ? 'border-red-500' : ''
                  }`}
                />
                {fieldErrors.email && (
                  <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>
                )}
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700">Phone number *</Label>
                <Input 
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone} 
                  onChange={e => handleInputChange("phone", e.target.value)}
                  onKeyPress={handleKeyPress}
                  className={`mt-1 text-base p-4 focus:ring-2 focus:ring-black ${
                    fieldErrors.phone ? 'border-red-500' : ''
                  }`}
                />
                {fieldErrors.phone && (
                  <p className="text-red-500 text-xs mt-1">{fieldErrors.phone}</p>
                )}
              </div>
            </div>
            
            {/* Form validation status */}
            <div className="mb-4 p-3 rounded-lg bg-gray-50 border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Form Status:</span>
                <span className={`font-medium ${isFormValid ? 'text-green-600' : 'text-red-600'}`}>
                  {isFormValid ? '✓ Ready to submit' : '✗ Please complete all fields'}
                </span>
              </div>
            </div>
            
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
            
            <div className="flex justify-center">
              <Button 
                className={`w-full ${
                  isFormValid 
                    ? 'bg-black hover:bg-gray-800 text-white' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`} 
                onClick={submitForm}
                disabled={!isFormValid || formData.isSubmitting}
              >
                {formData.isSubmitting ? 'Submitting...' : 'Get Started'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 