import { HeroHeader } from '@/components/header';
import FooterSection from '@/components/footer';

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <HeroHeader />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 pt-32 pb-20">
        <article className="prose prose-lg mx-auto text-center [&_h2]:font-bold [&_h3]:font-bold">
          <div className="mb-16 flex flex-col items-center gap-6">
            <div className="text-gray-500 text-base mb-2">12 Dec, 2024 <span className="mx-2">|</span> <span className="font-medium">PushSend Team</span></div>
            <h1 className="text-4xl font-bold mb-2 leading-tight">Cookie Policy</h1>
            <p className="text-lg text-gray-600 max-w-2xl">We use cookies to ensure our website and platform function effectively and securely, providing you with a better experience when using our services.</p>
          </div>
          <div className="text-left space-y-8 text-lg leading-relaxed px-2 md:px-8">
            <h2 className="text-2xl font-bold mt-12 mb-6">What Are Cookies?</h2>
            
            <p>
              Cookies and similar technologies are small text documents or pieces of code, typically containing a unique identification number or value. When you visit our website or use our platform, these files are stored on your device. Some cookies are stored only for the duration of your visit ("session cookies"), while others remain on your device for a longer period ("persistent cookies"). This collection of information allows us to provide you with a better experience when using our services.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Why Do We Use Cookies?</h2>
            
            <p>
              We use cookies to ensure our website and platform function effectively and securely. Cookies help us maintain your session when logged into our client portal, carry information between pages, and ensure your connection remains secure throughout your visit. They also allow us to understand how our services are being used, enabling us to make improvements and potentially provide you with more relevant content based on your interests.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Types of Cookies We Use</h2>

            <h3 className="text-xl font-bold mt-8 mb-4">Essential Cookies</h3>
            
            <p>
              These cookies are strictly necessary for the operation of our website and platform. They enable core functionality such as security, network management, and accessibility. You may disable these by changing your browser settings, but this will affect how the website functions. These include:
            </p>

            <div className="bg-gray-100 p-6 rounded-lg my-6">
              <div className="space-y-4">
                <div>
                  <p><strong>PHPSESSID</strong></p>
                  <p>Purpose: Maintains your session across pages</p>
                  <p>Duration: Session</p>
                  <p>Provider: PushSend</p>
                  <p>Type: Essential</p>
                </div>
                <div>
                  <p><strong>cookiefirst-consent</strong></p>
                  <p>Purpose: Stores your cookie preferences</p>
                  <p>Duration: 1 year</p>
                  <p>Provider: CookieFirst</p>
                  <p>Type: Essential</p>
                </div>
                <div>
                  <p><strong>cf_bm</strong></p>
                  <p>Purpose: Manages incoming traffic and security</p>
                  <p>Duration: 30 minutes</p>
                  <p>Provider: Cloudflare</p>
                  <p>Type: Essential</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-8 mb-4">Performance and Analytics Cookies</h3>
            
            <p>
              These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This includes:
            </p>

            <div className="bg-gray-100 p-6 rounded-lg my-6">
              <div className="space-y-4">
                <div>
                  <p><strong>_ga</strong></p>
                  <p>Purpose: Distinguishes unique users</p>
                  <p>Duration: 2 years</p>
                  <p>Provider: Google Analytics</p>
                  <p>Type: Analytics</p>
                </div>
                <div>
                  <p><strong>_gid</strong></p>
                  <p>Purpose: Stores and tracks visitor behaviour</p>
                  <p>Duration: 24 hours</p>
                  <p>Provider: Google Analytics</p>
                  <p>Type: Analytics</p>
                </div>
                <div>
                  <p><strong>hjSession****</strong></p>
                  <p>Purpose: Holds current session data</p>
                  <p>Duration: 30 minutes</p>
                  <p>Provider: Hotjar</p>
                  <p>Type: Analytics</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-8 mb-4">Functional Cookies</h3>
            
            <p>
              These cookies enable enhanced functionality and personalisation. They may be set by us or third-party providers whose services we have added to our pages:
            </p>

            <div className="bg-gray-100 p-6 rounded-lg my-6">
              <div className="space-y-4">
                <div>
                  <p><strong>hubspotutk</strong></p>
                  <p>Purpose: Tracks visitor identity</p>
                  <p>Duration: 13 months</p>
                  <p>Provider: HubSpot</p>
                  <p>Type: Functional</p>
                </div>
                <div>
                  <p><strong>lidc</strong></p>
                  <p>Purpose: LinkedIn integration</p>
                  <p>Duration: 24 hours</p>
                  <p>Provider: LinkedIn</p>
                  <p>Type: Functional</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-8 mb-4">Marketing and Targeting Cookies</h3>
            
            <p>
              These cookies track your visit across our website and other sites, helping us to deliver more relevant advertising. They include:
            </p>

            <div className="bg-gray-100 p-6 rounded-lg my-6">
              <div className="space-y-4">
                <div>
                  <p><strong>_fbp</strong></p>
                  <p>Purpose: Facebook advertising</p>
                  <p>Duration: 3 months</p>
                  <p>Provider: Meta</p>
                  <p>Type: Marketing</p>
                </div>
                <div>
                  <p><strong>_gcl_au</strong></p>
                  <p>Purpose: Google AdSense experiments</p>
                  <p>Duration: 3 months</p>
                  <p>Provider: Google</p>
                  <p>Type: Marketing</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Managing Your Cookie Preferences</h2>
            
            <p>
              You have the right to choose whether to accept or reject cookies. You can exercise this right by:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Using our cookie consent tool when you first visit our website</li>
              <li>Adjusting your browser settings to refuse cookies</li>
              <li>Changing your preferences through our cookie management panel</li>
            </ul>

            <p>
              Most web browsers allow some control of cookies through browser settings. To manage or delete cookies, you can do this through your browser settings. Here's how to do this in common browsers:
            </p>

            <div className="bg-gray-100 p-6 rounded-lg my-6">
              <div className="space-y-2">
                <p><strong>Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies and other site data</p>
                <p><strong>Firefox:</strong> Options &gt; Privacy & Security &gt; Enhanced Tracking Protection</p>
                <p><strong>Safari:</strong> Preferences &gt; Privacy</p>
                <p><strong>Edge:</strong> Settings &gt; Cookies and site permissions</p>
              </div>
            </div>

            <p>
              Please note that restricting cookies may impact your experience of our website and limit your access to certain features of our platform.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Third-Party Cookies</h2>
            
            <p>
              Some cookies are placed by third-party services that appear on our pages. These include:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Google Analytics for website analytics</li>
              <li>HubSpot for customer relationship management</li>
              <li>LinkedIn for professional networking integration</li>
              <li>Hotjar for user experience analysis</li>
            </ul>

            <p>
              We do not control these third-party cookies. For more information about how these companies use your data, please visit their respective privacy policies.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Changes to This Cookie Policy</h2>
            
            <p>
              We may update this Cookie Policy from time to time. When we do, we will revise the "last updated" date at the top of this page. We encourage you to review this policy periodically to stay informed about our use of cookies.
            </p>

            <p>
              This Cookie Policy was last updated on 12 December 2024.
            </p>
          </div>
        </article>
      </main>
      <FooterSection />
    </div>
  );
} 