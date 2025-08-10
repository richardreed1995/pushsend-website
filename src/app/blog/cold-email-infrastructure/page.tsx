import { HeroHeader } from '@/components/header';
import Image from 'next/image';
import FooterSection from '@/components/footer';
import Link from 'next/link';

export default function ColdEmailInfrastructureBlog() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <HeroHeader />
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 pt-32 pb-20">
        <article className="prose prose-lg mx-auto text-center [&_h2]:font-bold [&_h3]:font-bold">
          <div className="mb-16 flex flex-col items-center gap-6">
            <div className="text-gray-500 text-base mb-2">21 Nov, 2024 <span className="mx-2">|</span> <span className="font-medium">PushSend Team</span></div>
            <h1 className="text-4xl font-bold mb-2 leading-tight">How to Setup Cold Email Infrastructure</h1>
            <div className="w-full aspect-[16/7] relative rounded-2xl overflow-hidden mb-4">
              <Image src="/gradii-1920x1080 (17).png" alt="Cold Email Infrastructure Guide" fill className="object-cover" />
            </div>
          </div>
          <div className="text-left space-y-8 text-lg leading-relaxed px-2 md:px-8">
            <p>
              As someone who has spent thousands of hours perfecting email infrastructure, I can tell you that even the world's best cold email is worthless if it never reaches the recipient's primary inbox. In this guide, I'll share comprehensive insights into setting up robust email infrastructure that will help your campaigns succeed.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Why Infrastructure Matters</h2>
            
            <p>
              Most cold email campaigns fail before they even begin. While it's tempting to jump straight into writing and sending emails, poor infrastructure will doom your efforts from the start. You might succeed with mediocre emails and great infrastructure, but you'll never succeed with great emails and poor infrastructure.
            </p>

            <p>
              The tragic reality is that most outbound campaigns fail at this foundational level. Many people don't want to invest the time in proper setup, leading to poor results and wasted effort. This guide will help you avoid these pitfalls and create a solid foundation for successful campaigns.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Domain Management: The First Building Block</h2>
            
            <p>
              Rather than sending from your main company domain, you need to set up what we call "adjacent domains". These are domains similar to your primary domain but specifically for email campaigns. For instance, if your company domain is pushsend.com, you might create domains like pushsendemail.com, withpushsend.com, or getpushsend.com.
            </p>

            <p>
              When selecting adjacent domains, consider your brand's credibility. These domains should feel natural and trustworthy to recipients. Once purchased, set up 301 redirects to your main domain. This ensures that if someone copies and pastes your domain into their browser, they'll land on your actual website. Surprisingly, most recipients don't find this redirect suspicious or even notice it.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Calculating Your Domain Requirements</h2>
            
            <p>
              The number of domains you need depends on your desired email volume. We typically set up three inboxes per domain and send 20 cold emails per inbox daily – similar to what a normal human sales representative would send. To calculate your domain requirements, use this formula:
            </p>

            <div className="bg-gray-100 p-4 rounded-lg my-6">
              <p className="font-mono text-lg">Adjacent Domains = (Desired Daily Volume / 60) x 1.1</p>
            </div>

            <p>
              The 1.1 multiplier ensures you have reserve domains available when active domains experience deliverability issues. For example, if you want to send 600 emails daily, you'll need 11 domains. This isn't a strict rule, but it's a reliable starting point.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Setting Up for Deliverability</h2>
            
            <p>
              Email deliverability is about more than just getting your message delivered – it's about ensuring your emails land in the primary inbox where they'll actually be seen. This requires attention to three crucial authentication protocols:
            </p>

            <p>
              <strong>SPF (Sender Policy Framework)</strong> helps prevent email spoofing by specifying which servers can send emails from your domain. Think of it as a guest list for a private party – only those on the list get in.
            </p>

            <p>
              <strong>DMARC (Domain-based Message Authentication)</strong> acts as your security policy, telling receiving servers how to handle emails that fail authentication checks. It's like having a bouncer who knows exactly what to do with uninvited guests.
            </p>

            <p>
              <strong>DKIM (DomainKeys Identified Mail)</strong> adds a digital signature to your emails, proving they haven't been tampered with during transit. Consider it your email's passport, confirming its authenticity.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Creating and Managing Your Email Infrastructure</h2>
            
            <p>
              When it comes to setting up your email inboxes, we recommend using either Google Workspace or Microsoft 365. Avoid private IP solutions, as they often raise red flags with email service providers. Here's why: established providers like Google and Microsoft have built trust over years, while private IP addresses are often associated with spammers who've been blocked by major providers.
            </p>

            <p>
              For each domain, set up three inboxes using real human names – preferably senior staff members or founders. Recipients tend to respond better to emails from authority figures rather than junior sales staff. Use professional profile pictures and complete profiles to enhance credibility.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">The Crucial Art of Email Warming</h2>
            
            <p>
              Email warming is perhaps the most misunderstood aspect of email infrastructure. Think of email service providers as cautious friends who need time to trust you. A new inbox sending hundreds of emails immediately is like a stranger making excessive demands – it raises suspicions.
            </p>

            <p>
              Start by gradually increasing email volume over 3-4 weeks. Begin with just a few emails daily, slowly ramping up to your target volume. The emails should mirror natural communication patterns – varied response rates, different types of engagement, and realistic timing between messages.
            </p>

            <p>
              Most importantly, don't stop warming once your campaigns begin. Continue maintaining healthy engagement rates through regular warming activities. Think of it as maintaining a relationship rather than just making an introduction.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Looking Forward</h2>
            
            <p>
              Remember, setting up proper email infrastructure is an investment in your campaign's success. While it might seem daunting initially, this foundation will support your cold email efforts for years to come. In the next section, we'll explore how to craft compelling messages that take full advantage of this robust infrastructure.
            </p>

            <div className="border-t pt-8 mt-12">
              <h3 className="text-xl font-bold mb-4">Related blogs</h3>
              <div className="space-y-2">
                <Link href="/blog/hire-lead-generation-agency" className="text-blue-600 hover:underline block">
                  How to hire a lead generation agency
                </Link>
                <Link href="/blog/ai-outbound-messages" className="text-blue-600 hover:underline block">
                  How to use AI in your outbound messages
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <FooterSection />
    </div>
  );
} 