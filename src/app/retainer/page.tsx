'use client'

import { useState } from 'react'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Logo } from '../../components/logo'

export default function RetainerPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')

  const prospectTiers = [
    { 
      prospects: 3500, 
      cost: 2000, 
      label: '£2,000/month',
      description: '3,500 prospects',
      name: 'Starter',
      costPerProspect: (2000 / 3500).toFixed(2)
    },
    { 
      prospects: 7000, 
      cost: 3000, 
      label: '£3,000/month',
      description: '7,000 prospects',
      name: 'Growth',
      costPerProspect: (3000 / 7000).toFixed(2)
    },
    { 
      prospects: 15000, 
      cost: 4000, 
      label: '£4,000/month',
      description: '15,000 prospects',
      name: 'Scale',
      costPerProspect: (4000 / 15000).toFixed(2)
    }
  ]

  const offerStrengths = [
    { label: 'Good', rate: 1/500 },
    { label: 'Great', rate: 1/350 },
    { label: 'Exceptional', rate: 1/200 },
    { label: 'Outstanding', rate: 1/100 }
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
    if (password === 'grow') {
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
    <div className="w-full bg-white min-h-screen text-gray-800 [&::selection]:bg-orange-200 [&::-moz-selection]:bg-orange-200">
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
                  <div className="text-sm text-gray-700">{tier.label} • £{tier.costPerProspect}/prospect</div>
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
                  placeholder="£0"
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
                  onChange={(e) => setRetentionMonths(formatNumberWithCommas(e.target.value))}
                  placeholder="Enter months"
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
                  onChange={(e) => setCloseRate(e.target.value)}
                  className="focus:ring-orange-200 focus:border-orange-500"
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
                  className="focus:ring-orange-200 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Offer Strength
                </label>
                <select
                  value={offerStrength}
                  onChange={(e) => setOfferStrength(parseInt(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded focus:ring-1 focus:ring-orange-200 focus:border-orange-500 text-gray-800"
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
                <span className="font-semibold text-gray-900">£{metrics.newMonthlyRevenue.toLocaleString()}</span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded flex justify-between items-center">
                <span className="text-gray-700 font-medium">LTV</span>
                <span className="font-semibold text-gray-900">£{metrics.ltv.toLocaleString()}</span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded flex justify-between items-center">
                <span className="text-gray-700 font-medium">CAC</span>
                <span className="font-semibold text-gray-900">£{metrics.cac.toLocaleString()}</span>
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
