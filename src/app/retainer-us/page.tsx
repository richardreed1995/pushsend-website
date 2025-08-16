'use client'

import { useState } from 'react'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Logo } from '../../components/logo'
import { ChevronDown } from 'lucide-react'

export default function RetainerUSPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const prospectTiers = [
    { 
      prospects: 3500, 
      cost: 3000, 
      label: '$3,000 p/m',
      description: '3,500 prospects p/m',
      name: 'Starter',
      costPerProspect: (3000 / 3500).toFixed(2)
    },
    { 
      prospects: 7000, 
      cost: 4000, 
      label: '$4,000 p/m',
      description: '7,000 prospects p/m',
      name: 'Growth',
      costPerProspect: (4000 / 7000).toFixed(2)
    },
    { 
      prospects: 15000, 
      cost: 5000, 
      label: '$5,000 p/m',
      description: '15,000 prospects p/m',
      name: 'Scale',
      costPerProspect: (5000 / 15000).toFixed(2)
    }
  ]

  const offerStrengths = [
    { label: 'Good', rate: 1/500 },
    { label: 'Great', rate: 1/350 },
    { label: 'Exceptional', rate: 1/200 },
    { label: 'Outstanding', rate: 1/100 }
  ]

  // FAQ data
  const faqs = [
    {
      question: "How does the pricing structure work?",
      answer: "We offer three tiers based on prospect volume: Starter (3,500 prospects at $3,000 p/m), Growth (7,000 prospects at $4,000 p/m), and Scale (15,000 prospects at $5,000 p/m). All plans include our full suite of services and support."
    },
    {
      question: "What's included in each pricing tier?",
      answer: "All tiers include personalized email sequences, automated lead nurturing, secondary domain setup with enterprise Azure infrastructure, detailed performance analytics, and strategic insights to inform your broader marketing and sales efforts."
    },
    {
      question: "Can I change my plan volume during the engagement?",
      answer: "Yes, absolutely. We understand business needs fluctuate, so you can increase or decrease your volume on a month-by-month basis to match your current requirements and budget."
    },
    {
      question: "Can I send more than 15,000 prospects per month?",
      answer: "Absolutely! Our systems can scale to millions of emails per month. If you need higher volume than our Scale tier, we'll create a custom enterprise package tailored to your specific requirements."
    },
    {
      question: "What's the minimum commitment required?",
      answer: "We operate on a 12-month contract with a break clause at 3 months. This structure allows you to evaluate our impact during the initial period while providing the stability needed for long-term campaign optimization and results."
    },
    {
      question: "What happens after the 3-month break clause period?",
      answer: "If you choose to continue past the 3-month mark, you'll be committed to the full 12-month term. We'll provide comprehensive quarterly reviews and ongoing optimization to ensure maximum ROI throughout the engagement."
    },
    {
      question: "How often do you reach out to prospects?",
      answer: "Our strategy focuses on hitting your Total Addressable Market (TAM) once per quarter with a concise, high-impact 2-email sequence. This approach maximizes engagement while respecting prospect preferences."
    },
    {
      question: "How do you ensure emails don't look generic?",
      answer: "We use personalized variables throughout our email sequences, incorporating specific details about each prospect's company, role, industry challenges, and recent developments to create authentic, relevant messaging."
    },
    {
      question: "What automated sequences do you create?",
      answer: "We develop customized automated sequences designed to nurture leads through your sales funnel, from initial awareness through to qualified opportunities, helping you close more deals with less manual effort."
    },
    {
      question: "How do you protect my company's domain reputation?",
      answer: "We send all emails from secondary domains using enterprise-grade Azure infrastructure. This protects your primary domain while ensuring high deliverability rates and professional presentation."
    },
    {
      question: "What kind of reporting and insights do I receive?",
      answer: "You'll receive detailed feedback on which messaging approaches and offers resonate most with your target market. These insights directly inform your wider marketing and sales strategy, extending value beyond just the email campaigns."
    },
    {
      question: "How are leads delivered to our team?",
      answer: "All leads are sent into your CRM in real-time, plus we send email and Slack notifications to ensure immediate visibility. This multi-channel approach ensures no opportunities are missed and your sales team can respond quickly."
    },
    {
      question: "Can you help with automated follow-up responses to leads?",
      answer: "Yes, we can set up automated email responses to leads using our AI-powered analysis engine. This ensures consistent, personalized initial responses while your sales team prepares for direct outreach."
    },
    {
      question: "How often do we receive performance updates?",
      answer: "You'll receive weekly feedback on campaign performance, including detailed metrics, insights, and optimization recommendations. This frequent reporting allows for rapid adjustments and continuous improvement."
    },
    {
      question: "Do you help with LinkedIn outreach, cold calling, or other channels?",
      answer: "We solely focus on email as we prefer to be specialists in one channel rather than generalists across many. However, our account strategists can help build comprehensive lead lists for your sales team to prospect to internally and use for advertising campaigns across other platforms."
    },
    {
      question: "What metrics do you track to measure success?",
      answer: "We track key metrics including open rates, response rates, meeting bookings, and ultimately new customer acquisition. Our ROI calculator helps estimate potential returns based on your specific business metrics."
    },
    {
      question: "What if the campaign doesn't perform as expected?",
      answer: "During our 3-month pilot, we continuously optimize based on performance data. If results aren't meeting expectations, we adjust messaging, timing, and targeting to improve outcomes. Our goal is your success."
    },
    {
      question: "Can you help with industries that have longer sales cycles?",
      answer: "Absolutely. We adapt our approach based on your industry's typical sales cycle, adjusting follow-up timing and messaging to match your prospects' buying journey and decision-making process."
    },
    {
      question: "How quickly can we launch a campaign?",
      answer: "Typically, we can have your first campaign live within 2-3 weeks of onboarding. This includes strategy development, list building, email creation, technical setup, and thorough testing."
    },
    {
      question: "What information do you need from us to get started?",
      answer: "We'll need details about your ideal customer profile, current sales process, key value propositions, and any specific messaging or compliance requirements for your industry."
    },
    {
      question: "Do you provide ongoing support during the campaign?",
      answer: "Yes, you'll have dedicated account management throughout the engagement, with regular strategy calls, performance reviews, and optimization recommendations to ensure maximum ROI."
    }
  ]

  const [selectedTier, setSelectedTier] = useState(0)
  const [monthlyRevenue, setMonthlyRevenue] = useState('')
  const [retentionMonths, setRetentionMonths] = useState('')
  const [closeRate, setCloseRate] = useState('33')
  const [offerStrength, setOfferStrength] = useState(0)
  const [grossProfitMargin, setGrossProfitMargin] = useState('70')

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
    if (password === 'scale') {
      setIsAuthenticated(true)
    } else {
      alert('Incorrect password')
    }
  }

  const calculateMetrics = () => {
    const monthlyRev = parseCommaFormattedNumber(monthlyRevenue)
    const retention = parseCommaFormattedNumber(retentionMonths)
    const close = parseFloat(closeRate) || 0
    const grossProfit = parseFloat(grossProfitMargin) || 0
    
    // Calculate leads from prospects using selected offer strength
    const monthlyMeetings = Math.round(prospectTiers[selectedTier].prospects * offerStrengths[offerStrength].rate)
    
    // Calculate new customers (based on leads and close rate)
    const newCustomers = Math.round(monthlyMeetings * (close / 100))
    
    // Calculate new monthly revenue
    const newMonthlyRevenue = Math.round(newCustomers * monthlyRev)
    
    // Calculate LTV (monthly revenue * retention months)
    const ltv = Math.round(monthlyRev * retention)
    
    // Calculate LTGP (LTV * gross profit margin)
    const ltgp = Math.round(ltv * (grossProfit / 100))
    
    // Calculate CAC (total cost divided by new customers)
    const cac = newCustomers > 0 ? Math.round(prospectTiers[selectedTier].cost / newCustomers) : 0
    
    // Calculate ROI based on LTV:CAC
    const roi = cac > 0 ? Math.round(((ltv - cac) / cac) * 100) : 0
    
    return {
      monthlyMeetings,
      newCustomers,
      newMonthlyRevenue,
      ltv,
      ltgp,
      cac,
      roi,
      ltvCacRatio: Math.round(ltv / cac),
      ltgpCacRatio: Math.round(ltgp / cac)
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
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                Access
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="w-full bg-white min-h-screen text-gray-800 [&::selection]:bg-orange-300 [&::-moz-selection]:bg-orange-300">
      <div className="max-w-5xl mx-auto p-6">
        <div className="text-center mb-6">
          <Logo className="mx-auto mb-4" />
        </div>
        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2 text-gray-800">Select Your Plan</h2>
              <div className="h-1 w-24 bg-orange-500"></div>
            </div>
            
            {/* Pricing Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {prospectTiers.map((tier, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTier(index)}
                  className={`p-3 rounded-lg transition-all text-center ${
                    selectedTier === index 
                      ? 'bg-orange-50 border-2 border-orange-500' 
                      : 'bg-white border-2 border-gray-200 hover:border-orange-300'
                  }`}
                >
                  <div className="text-lg font-semibold mb-1 text-orange-600">{tier.name}</div>
                  <div className="text-xl font-semibold mb-2 text-gray-800">{tier.description}</div>
                  <div className="text-sm text-gray-700">{tier.label} • ${tier.costPerProspect}/prospect</div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  onChange={(e) => setMonthlyRevenue(formatNumberWithCommas(e.target.value))}
                  placeholder="$0"
                  className="focus:ring-orange-200 focus:border-orange-500 [&::selection]:bg-orange-300 [&::-moz-selection]:bg-orange-300"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Average Customer Retention (months)
                </label>
                <Input
                  type="text"
                  value={retentionMonths}
                  onChange={(e) => setRetentionMonths(formatNumberWithCommas(e.target.value))}
                  placeholder="Enter months"
                  className="focus:ring-orange-500 focus:border-orange-500 [&::selection]:bg-orange-300 [&::-moz-selection]:bg-orange-300"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Expected Close Rate (%)
                </label>
                <Input
                  type="number"
                  value={closeRate}
                  onChange={(e) => setCloseRate(e.target.value)}
                  className="focus:ring-orange-200 focus:border-orange-500 [&::selection]:bg-orange-300 [&::-moz-selection]:bg-orange-300"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Gross Profit Margin (%)
                </label>
                <Input
                  type="number"
                  value={grossProfitMargin}
                  onChange={(e) => setGrossProfitMargin(e.target.value)}
                  className="focus:ring-orange-500 focus:border-orange-500 [&::selection]:bg-orange-300 [&::-moz-selection]:bg-orange-300"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Offer Strength
                </label>
                <select
                  value={offerStrength}
                  onChange={(e) => setOfferStrength(parseInt(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded focus:ring-1 focus:ring-orange-200 focus:border-orange-500 text-gray-800 [&::selection]:bg-orange-300 [&::-moz-selection]:bg-orange-300"
                >
                  {offerStrengths.map((strength, index) => (
                    <option key={index} value={index}>
                      {strength.label} (1 lead per {1/strength.rate} prospects)
                    </option>
                  ))}
                </select>
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
                <span className="text-gray-700 font-medium">Meetings per Month</span>
                <span className="font-semibold text-gray-900">{metrics.monthlyMeetings}</span>
              </div>

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

        {/* FAQ Section */}
        <div className="mb-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Frequently Asked Questions - Pricing</h2>
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
