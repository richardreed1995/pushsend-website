import Link from 'next/link';
import Image from 'next/image';
import { HeroHeader } from '@/components/header';
import FooterSection from '@/components/footer';

const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const posts = [
  {
    slug: 'ai-outbound-messages',
    title: 'How to Use AI in Your Outbound Messages',
    category: 'Guide',
    date: '19 Nov, 2024',
    image: '/gradii-1920x1080 (15).png',
    excerpt: 'As an agency sending over thousands of cold emails monthly, we\'ve developed a robust framework for using AI to generate effective, personalised messages.'
  },
  {
    slug: 'hire-lead-generation-agency',
    title: 'How to Hire a Lead Generation Agency',
    category: 'Guide',
    date: '20 Nov, 2024',
    image: '/gradii-1920x1080 (16).png',
    excerpt: 'I wanted to share some insights on how to make an informed decision when hiring a lead generation agency. Many people approach this with unrealistic expectations.'
  },
  {
    slug: 'cold-email-infrastructure',
    title: 'How to Setup Cold Email Infrastructure',
    category: 'Guide',
    date: '21 Nov, 2024',
    image: '/gradii-1920x1080 (17).png',
    excerpt: 'As someone who has spent thousands of hours perfecting email infrastructure, I can tell you that even the world\'s best cold email is worthless if it never reaches the recipient\'s primary inbox.'
  }
];

export default function BlogList() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <HeroHeader />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 pt-28 pb-16">
        <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all bg-white border border-gray-100">
              <div className="aspect-[4/3] w-full relative">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 flex flex-col gap-2">
                <div className="text-sm text-gray-500 font-medium">{post.category} <span className="ml-2">{post.date}</span></div>
                <h2 className="text-xl font-semibold leading-tight group-hover:underline">{post.title}</h2>
                <p className="text-gray-600 text-base mt-2 line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <FooterSection />
    </div>
  );
} 