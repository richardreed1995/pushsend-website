"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "../../card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/logo";

export default function QuizFunnel() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    industry: "",
    revenue: "",
    teamSize: "",
    improvements: "",
    familiarity: "",
    source: "",
    additionalInfo: "",
    name: "",
    email: "",
    phone: "",
    website: ""
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const totalSteps = 8;
  const progress = ((step + 1) / totalSteps) * 100;

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function next() {
    setError("");
    
    // Validate current step
    if (step === 0 && !formData.industry) {
      return setError("Please select your industry");
    }
    if (step === 1 && !formData.revenue) {
      return setError("Please select your annual revenue");
    }
    if (step === 2 && !formData.teamSize) {
      return setError("Please select your team size");
    }
    if (step === 4 && !formData.familiarity) {
      return setError("Please select your familiarity with Palm");
    }
    if (step === 5 && !formData.source.trim()) {
      return setError("Please let us know how you found us");
    }
    if (step === 6 && !formData.name) {
      return setError("Please enter your name");
    }
    if (step === 7) {
      if (!formData.email || !formData.phone) {
        return setError("Please fill in all required fields");
      }
      if (!validateEmail(formData.email)) {
        return setError("Please enter a valid email address");
      }
      
      // Send data to webhook
      try {
        await fetch("https://hook.eu2.make.com/xq1dvs5e98p1w88grh58skodmco254tx", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            formData,
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
        <Logo />
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
            <h3 className="text-2xl font-semibold mb-8 text-center">What industry are you in?</h3>
            <div className="mb-8">
              <select
                value={formData.industry}
                onChange={e => setFormData({ ...formData, industry: e.target.value })}
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A8FF9E] focus:border-transparent text-lg"
              >
                <option value="">Select...</option>
                <option value="accounting">Accounting</option>
                <option value="consulting">Consulting</option>
                <option value="marketing">Marketing</option>
                <option value="legal">Legal</option>
                <option value="technology">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="real-estate">Real Estate</option>
                <option value="other">Other</option>
              </select>
            </div>
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
            <div className="flex justify-between gap-4">
              <Button variant="outline" className="w-1/2" onClick={prev} disabled={step === 0}>
                Back
              </Button>
              <Button className="w-1/2" onClick={next}>
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">What is your annual revenue?</h3>
            <div className="mb-8">
              <select
                value={formData.revenue}
                onChange={e => setFormData({ ...formData, revenue: e.target.value })}
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A8FF9E] focus:border-transparent text-lg"
              >
                <option value="">Select...</option>
                <option value="under-100k">Under $100k</option>
                <option value="100k-500k">$100k - $500k</option>
                <option value="500k-1m">$500k - $1M</option>
                <option value="1m-5m">$1M - $5M</option>
                <option value="5m-10m">$5M - $10M</option>
                <option value="10m+">$10M+</option>
              </select>
            </div>
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
            <div className="flex justify-between gap-4">
              <Button variant="outline" className="w-1/2" onClick={prev}>
                Back
              </Button>
              <Button className="w-1/2" onClick={next}>
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">What is your full time team headcount?</h3>
            <div className="mb-8">
              <select
                value={formData.teamSize}
                onChange={e => setFormData({ ...formData, teamSize: e.target.value })}
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A8FF9E] focus:border-transparent text-lg"
              >
                <option value="">Select...</option>
                <option value="1-5">1-5</option>
                <option value="6-10">6-10</option>
                <option value="11-25">11-25</option>
                <option value="26-50">26-50</option>
                <option value="51-100">51-100</option>
                <option value="100+">100+</option>
              </select>
            </div>
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
            <div className="flex justify-between gap-4">
              <Button variant="outline" className="w-1/2" onClick={prev}>
                Back
              </Button>
              <Button className="w-1/2" onClick={next}>
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Do you have any ideas about things you would like to improve first?</h3>
            <div className="mb-8">
              <textarea
                value={formData.improvements}
                onChange={e => setFormData({ ...formData, improvements: e.target.value })}
                placeholder="Share your thoughts on what you'd like to improve..."
                className="w-full p-4 border border-gray-200 rounded-lg resize-none h-32 focus:outline-none focus:ring-2 focus:ring-[#A8FF9E] focus:border-transparent text-lg"
              />
            </div>
            <div className="flex justify-between gap-4">
              <Button variant="outline" className="w-1/2" onClick={prev}>
                Back
              </Button>
              <Button className="w-1/2" onClick={next}>
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">How familiar are you with Palm?</h3>
            <div className="mb-8">
              <select
                value={formData.familiarity}
                onChange={e => setFormData({ ...formData, familiarity: e.target.value })}
                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A8FF9E] focus:border-transparent text-lg"
              >
                <option value="">Select...</option>
                <option value="not-familiar">Not familiar</option>
                <option value="somewhat-familiar">Somewhat familiar</option>
                <option value="very-familiar">Very familiar</option>
                <option value="existing-client">Existing client</option>
              </select>
            </div>
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
            <div className="flex justify-between gap-4">
              <Button variant="outline" className="w-1/2" onClick={prev}>
                Back
              </Button>
              <Button className="w-1/2" onClick={next}>
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">How did you find out about us?</h3>
            <div className="mb-8">
              <textarea
                value={formData.source}
                onChange={e => setFormData({ ...formData, source: e.target.value })}
                placeholder="Tell us how you discovered Palm..."
                className="w-full p-4 border border-gray-200 rounded-lg resize-none h-32 focus:outline-none focus:ring-2 focus:ring-[#A8FF9E] focus:border-transparent text-lg"
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
            <div className="flex justify-between gap-4">
              <Button variant="outline" className="w-1/2" onClick={prev}>
                Back
              </Button>
              <Button className="w-1/2" onClick={next}>
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 6 && (
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Please share anything else that will help prepare for our meeting.</h3>
            <div className="mb-8">
              <textarea
                value={formData.additionalInfo}
                onChange={e => setFormData({ ...formData, additionalInfo: e.target.value })}
                placeholder="Any additional information..."
                className="w-full p-4 border border-gray-200 rounded-lg resize-none h-32 focus:outline-none focus:ring-2 focus:ring-[#A8FF9E] focus:border-transparent text-lg"
              />
            </div>
            <div className="flex justify-between gap-4">
              <Button variant="outline" className="w-1/2" onClick={prev}>
                Back
              </Button>
              <Button className="w-1/2" onClick={next}>
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 7 && (
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Contact Information</h3>
            <div className="space-y-6 mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700">First Name *</Label>
                  <Input 
                    placeholder="Enter your first name" 
                    value={formData.name.split(' ')[0] || ''} 
                    onChange={e => {
                      const lastName = formData.name.split(' ').slice(1).join(' ') || '';
                      setFormData({ ...formData, name: `${e.target.value} ${lastName}`.trim() });
                    }}
                    onKeyPress={handleKeyPress}
                    className="mt-1 text-lg p-4 focus:ring-2 focus:ring-[#A8FF9E]"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">Last Name *</Label>
                  <Input 
                    placeholder="Enter your last name" 
                    value={formData.name.split(' ').slice(1).join(' ') || ''} 
                    onChange={e => {
                      const firstName = formData.name.split(' ')[0] || '';
                      setFormData({ ...formData, name: `${firstName} ${e.target.value}`.trim() });
                    }}
                    onKeyPress={handleKeyPress}
                    className="mt-1 text-lg p-4 focus:ring-2 focus:ring-[#A8FF9E]"
                  />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700">Work Email *</Label>
                <Input 
                  placeholder="Enter your work email" 
                  value={formData.email} 
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  onKeyPress={handleKeyPress}
                  className="mt-1 text-lg p-4 focus:ring-2 focus:ring-[#A8FF9E]"
                />
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700">Your Phone Number *</Label>
                <Input 
                  placeholder="Enter your phone number" 
                  value={formData.phone} 
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  onKeyPress={handleKeyPress}
                  className="mt-1 text-lg p-4 focus:ring-2 focus:ring-[#A8FF9E]"
                />
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700">Company Website:</Label>
                <Input 
                  placeholder="Enter your company website" 
                  value={formData.website} 
                  onChange={e => setFormData({ ...formData, website: e.target.value })}
                  onKeyPress={handleKeyPress}
                  className="mt-1 text-lg p-4 focus:ring-2 focus:ring-[#A8FF9E]"
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
            <div className="flex justify-between gap-4">
              <Button variant="outline" className="w-1/2" onClick={prev}>
                Back
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