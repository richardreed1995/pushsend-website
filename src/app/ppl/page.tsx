'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Logo } from '../../components/logo'
import { ChevronDown } from 'lucide-react'
import { CalendlyWidget } from '../../components/calendly-widget'

// Separate component that uses useSearchParams
function PPLCalculator() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const [monthlyRevenue, setMonthlyRevenue] = useState('')
  const [retentionMonths, setRetentionMonths] = useState('')
  const [costPerLead, setCostPerLead] = useState('250')
  const [targetMeetings, setTargetMeetings] = useState('10')
  const [closeRate, setCloseRate] = useState('33')
  const [grossProfitMargin, setGrossProfitMargin] = useState('')

  // Fixed costs
  const onboardingFee = 1500
  const monthlySoftwareFee = 300

  // FAQ data
  const faqs = [
    {
      question: "How does the pay-per-meeting-ready-lead model work?",
      answer: "You only pay for the leads that are showing interest and are requesting to speak with you."
    },
    {
      question: "What is a \"meeting-ready-lead\"?",
      answer: "A Meeting-Ready-Lead is a lead that shows interest into your product/service and indicates a date or time to speak with you for a demo. On average, our clients are booking around 85-95% of our leads into demos."
    },
    {
      question: "What if the lead isn't qualified?",
      answer: "Meeting-Ready-Leads aren't your typical PPC lead. These leads are highly qualified as we're targeting sophisticated buyers and are showing direct interest into your product/service and the willingness to get on a call. We're literally reaching out to a lead-list approved by you with a hyper personalized message and then managing the response to convert them into a meeting-ready-lead."
    },
    {
      question: "How quickly can I expect results from your campaigns?",
      answer: "Results can vary based on the industry and campaign specifics. However, our streamlined process ensures that companies with product market fit will start seeing results within a few weeks of launching your campaign."
    },
    {
      question: "Do you offer any guarantees?",
      answer: "While we cannot guarantee specific results, our pay-per-meeting-ready-lead model ensures that you only pay for successful outcomes, reflecting our confidence in our process."
    },
    {
      question: "What kind of support will I receive during my campaign?",
      answer: "You will have a dedicated customer success manager who will onboard you, provide 1-on-1 support, weekly reports, and be available for any questions or concerns throughout the campaign."
    },
    {
      question: "What lead generation service does PushSend offer?",
      answer: "Our core service includes lead generation through targeted email campaigns. This method is chosen for the effectiveness in reaching and engaging with a wide yet specific audience pertinent to your business needs."
    }
  ]

  // Load initial values from URL params
  useEffect(() => {
    if (searchParams) {
      const revenue = searchParams.get('revenue') || ''
      const retention = searchParams.get('retention') || ''
      const costPerLeadParam = searchParams.get('costPerLead') || '250'
      const meetings = searchParams.get('meetings') || '10'
      const closeRateParam = searchParams.get('closeRate') || '33'
      const grossProfitMarginParam = searchParams.get('grossProfitMargin') || ''
      
      setMonthlyRevenue(revenue)
      setRetentionMonths(retention)
      setCostPerLead(costPerLeadParam)
      setTargetMeetings(meetings)
      setCloseRate(closeRateParam)
      setGrossProfitMargin(grossProfitMarginParam)
    }
  }, [searchParams])

  // Update URL when inputs change
  const updateURL = (updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString())
    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        params.set(key, value)
      } else {
        params.delete(key)
      }
    })
    
    const newURL = `${window.location.pathname}?${params.toString()}`
    router.replace(newURL, { scroll: false })
  }

  // Function to format numbers with commas
  const formatNumberWithCommas = (value: string) => {
    const num = value.replace(/,/g, '')
    if (num === '') return ''
    const number = parseFloat(num)
    if (isNaN(number)) return value
    return number.toLocaleString()
  }

  // Function to parse comma-formatted numbers
  const parseCommaFormattedNumber = (value: string) => {
    return parseFloat(value.replace(/,/g, '')) || 0
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'grow') {
      setIsAuthenticated(true)
    } else {
      alert('Incorrect password')
    }
  }

  const calculateMetrics = () => {
    const monthlyRev = parseCommaFormattedNumber(monthlyRevenue)
    const retention = parseCommaFormattedNumber(retentionMonths)
    const meetings = parseFloat(targetMeetings) || 0
    const close = parseFloat(closeRate) || 0
    const costPerLeadValue = parseFloat(costPerLead) || 0
    const grossProfitMarginPercent = parseFloat(grossProfitMargin) || 0
    
    // Calculate new customers based on meetings and close rate
    const newCustomers = Math.round(meetings * (close / 100))
    
    // Calculate new monthly revenue
    const newMonthlyRevenue = Math.round(newCustomers * monthlyRev)
    
    // Calculate LTV (monthly revenue * retention months)
    const ltv = Math.round(monthlyRev * retention)
    
    // Calculate combined LTV (LTV × new customers per month)
    const combinedLTV = Math.round(ltv * newCustomers)
    
    // Calculate total cost of leads
    const totalLeadCost = Math.round(costPerLeadValue * meetings)
    
    // Calculate CAC (total cost of leads / number of new customers)
    const cac = newCustomers > 0 ? Math.round(totalLeadCost / newCustomers) : 0
    
    // Calculate LTGP (Lifetime Gross Profit = LTV × gross profit margin %)
    const ltgp = Math.round(ltv * (grossProfitMarginPercent / 100))
    
    // Calculate ROI based on LTV:CAC
    const roi = cac > 0 ? Math.round(((ltv - cac) / cac) * 100) : 0
    
    // Calculate LTV:CAC ratio
    const ltvCacRatio = cac > 0 ? Math.round(ltv / cac) : 0
    
    // Calculate LTGP:CAC ratio
    const ltgpCacRatio = cac > 0 ? Math.round(ltgp / cac) : 0
    
    // Calculate total monthly cost
    const totalMonthlyCost = monthlySoftwareFee + totalLeadCost
    
    return {
      newCustomers,
      newMonthlyRevenue,
      ltv,
      combinedLTV,
      ltgp,
      cac,
      roi,
      ltvCacRatio,
      ltgpCacRatio,
      totalMonthlyCost,
      totalLeadCost
    }
  }

  const metrics = calculateMetrics()

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="text-center mb-4">
              <Logo className="mx-auto mb-4" />
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password Required
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Access
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="w-full bg-white min-h-screen text-gray-800 [&::selection]:bg-orange-200 [&::-moz-selection]:bg-orange-200">
      <div className="max-w-5xl mx-auto p-6">
        <div className="text-center mb-6">
          <Logo className="mx-auto mb-4" />
        </div>
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">PushSend ROI Calculator</h2>
          <div className="h-1 w-24 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Business Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">Your Business Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Monthly Revenue per Customer
                </label>
                <Input
                  type="text"
                  value={monthlyRevenue}
                  onChange={(e) => {
                    const value = formatNumberWithCommas(e.target.value)
                    setMonthlyRevenue(value)
                    updateURL({ revenue: value })
                  }}
                  placeholder="$0"
                  className="focus:ring-orange-200 focus:border-orange-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Average Customer Retention (months)
                </label>
                <Input
                  type="text"
                  value={retentionMonths}
                  onChange={(e) => {
                    const value = formatNumberWithCommas(e.target.value)
                    setRetentionMonths(value)
                    updateURL({ retention: value })
                  }}
                  placeholder="Enter months"
                  className="focus:ring-orange-200 focus:border-orange-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Meeting-ready lead cost
                </label>
                <Input
                  type="text"
                  value={costPerLead}
                  onChange={(e) => {
                    const value = formatNumberWithCommas(e.target.value)
                    setCostPerLead(value)
                    updateURL({ costPerLead: value })
                  }}
                  className="focus:ring-orange-200 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Target Monthly Meeting-Ready Leads
                </label>
                <Input
                  type="text"
                  value={targetMeetings}
                  onChange={(e) => {
                    const value = formatNumberWithCommas(e.target.value)
                    setTargetMeetings(value)
                    updateURL({ meetings: value })
                  }}
                  className="focus:ring-orange-200 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Expected Close Rate (%)
                </label>
                <Input
                  type="number"
                  value={closeRate}
                  onChange={(e) => {
                    const value = e.target.value
                    setCloseRate(value)
                    updateURL({ closeRate: value })
                  }}
                  className="focus:ring-orange-200 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Gross Profit Margin of LTV (%)
                </label>
                <Input
                  type="number"
                  value={grossProfitMargin}
                  onChange={(e) => {
                    const value = e.target.value
                    setGrossProfitMargin(value)
                    updateURL({ grossProfitMargin: value })
                  }}
                  placeholder="0"
                  className="focus:ring-orange-200 focus:border-orange-500"
                />
              </div>
            </CardContent>
          </Card>

          {/* ROI Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">ROI Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-4 rounded flex justify-between items-center">
                <span className="text-gray-700 font-medium">New Customers per Month</span>
                <span className="font-semibold text-gray-900">{metrics.newCustomers}</span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded flex justify-between items-center">
                <span className="text-gray-700 font-medium">New Monthly Revenue</span>
                <span className="font-semibold text-gray-900">${metrics.newMonthlyRevenue.toLocaleString()}</span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded flex justify-between items-center">
                <span className="text-gray-700 font-medium">LTV</span>
                <span className="font-semibold text-gray-900">${metrics.ltv.toLocaleString()}</span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded flex justify-between items-center">
                <span className="text-gray-700 font-medium">Combined LTV</span>
                <span className="font-semibold text-gray-900">${metrics.combinedLTV.toLocaleString()}</span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded flex justify-between items-center">
                <span className="text-gray-700 font-medium">LTGP</span>
                <span className="font-semibold text-gray-900">${metrics.ltgp.toLocaleString()}</span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded flex justify-between items-center">
                <span className="text-gray-700 font-medium">CAC</span>
                <span className="font-semibold text-gray-900">${metrics.cac.toLocaleString()}</span>
              </div>
              
              <div className={`p-4 rounded flex justify-between items-center ${
                metrics.roi >= 0 ? 'bg-green-50' : 'bg-red-50'
              }`}>
                <span className={`font-medium ${metrics.roi >= 0 ? 'text-green-700' : 'text-red-700'}`}>ROI</span>
                <span className={`font-semibold ${metrics.roi >= 0 ? 'text-green-700' : 'text-red-700'}`}>{metrics.roi}%</span>
              </div>
              
              <div className={`p-4 rounded flex justify-between items-center ${
                metrics.ltvCacRatio >= 1 ? 'bg-green-50' : 'bg-red-50'
              }`}>
                <span className={`font-medium ${metrics.ltvCacRatio >= 1 ? 'text-green-700' : 'text-red-700'}`}>LTV:CAC Ratio</span>
                <span className={`font-semibold ${metrics.ltvCacRatio >= 1 ? 'text-green-700' : 'text-red-700'}`}>{metrics.ltvCacRatio}:1</span>
              </div>
              
              <div className={`p-4 rounded flex justify-between items-center ${
                metrics.ltgpCacRatio >= 1 ? 'bg-green-50' : 'bg-red-50'
              }`}>
                <span className={`font-medium ${metrics.ltgpCacRatio >= 1 ? 'text-green-700' : 'text-red-700'}`}>LTGP:CAC Ratio</span>
                <span className={`font-semibold ${metrics.ltgpCacRatio >= 1 ? 'text-green-700' : 'text-red-700'}`}>{metrics.ltgpCacRatio}:1</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Campaign Investment */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">Campaign Investment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">One-off Investment</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Onboarding & Strategy Investment</span>
                    <span className="font-semibold">${onboardingFee.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Monthly Investment</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Software Investment</span>
                    <span className="font-semibold">${monthlySoftwareFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Meeting-Ready Leads</span>
                    <span className="font-semibold">${metrics.totalLeadCost.toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between items-center font-semibold text-gray-800">
                      <span>Total Monthly Investment</span>
                      <span>${metrics.totalMonthlyCost.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps - Calendly Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Next Steps</h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Ready to get started? Schedule a strategy call to discuss your specific needs.
          </p>
          <div className="w-full mb-8">
            <CalendlyWidget />
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-4">
              Prefer to move ahead directly? Email us at{' '}
              <a 
                href="mailto:richard@pushsend.co" 
                className="text-orange-500 hover:text-orange-600 font-semibold underline"
              >
                richard@pushsend.co
              </a>
            </p>
            <p className="text-sm text-gray-500">
              We'll get back to you within 24 hours to discuss your campaign requirements.
            </p>
          </div>
        </div>
        
        <Card className="mt-8">
          <CardContent className="p-4">
            <p className="text-sm text-gray-600">
              Note: This calculator provides estimates for educational purposes only. Actual results may vary depending on various factors including market conditions, industry, target audience, and campaign execution.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Main page component with Suspense boundary
export default function PPLPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading calculator...</p>
        </div>
      </div>
    }>
      <PPLCalculator />
    </Suspense>
  )
}





