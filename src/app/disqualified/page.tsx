import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/logo";

export default function DisqualifiedPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="max-w-2xl mx-auto pt-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Link href="/intro">
              <Logo />
            </Link>
          </div>
          
          <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Thank You for Your Interest
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We appreciate you taking the time to learn about our outbound lead generation system. 
              Unfortunately, this particular offer is specifically designed for B2B companies with 
              monthly revenue above $5,000 and available investment funds.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">What We're Looking For:</h2>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• B2B companies (business-to-business)</li>
                <li>• Monthly revenue of $5,000 or more</li>
                <li>• Available funds to invest in growth ($2,500 one-time fee)</li>
              </ul>
            </div>
            
            <p className="text-gray-600 mb-8">
              Don't worry though! We have other solutions that might be perfect for your business. 
              Feel free to reach out to us to discuss alternative options.
            </p>
            
            <div className="space-y-4">
              <Link href="/intro">
                <Button className="w-full bg-black hover:bg-gray-800 text-white py-3">
                  Back to Homepage
                </Button>
              </Link>
              
              <Link href="/contact">
                <Button variant="outline" className="w-full py-3">
                  Contact Us About Other Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
