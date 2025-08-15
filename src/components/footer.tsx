"use client";

import { Logo } from '@/components/logo'
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { cn } from "../lib/utils";
import { ChevronsUpDown, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const links = [
    {
        group: 'Overview',
        items: [
            {
                title: 'Why PushSend',
                href: '/#why-pushsend',
            },
            {
                title: 'Process',
                href: '/#process',
            },
            {
                title: 'About',
                href: '/about',
            },
        ],
    },
    {
        group: 'Resources',
        items: [
            {
                title: 'Blog',
                href: '/blog',
            },
            {
                title: 'Downloads',
                href: '/downloads',
            },
            {
                title: 'Newsletter',
                href: '/newsletter',
            },
        ],
    },
    {
        group: 'Legal',
        items: [
            {
                title: 'Privacy',
                href: '/privacy',
            },
            {
                title: 'Terms',
                href: '/terms',
            },
            {
                title: 'Cookies',
                href: '/cookies',
            },
        ],
    },
]

export default function FooterSection() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        
        // Prevent multiple submissions
        if (isSubmitting) return;
        
        // Validate email
        if (!email.trim()) {
            return setError("Please enter your email address");
        }
        if (!validateEmail(email)) {
            return setError("Please enter a valid email address");
        }

        setIsSubmitting(true);

        try {
            // Send data to webhook only if validation passes
            const response = await fetch("https://hook.eu2.make.com/19t79l6rolrkfjod77hd2yr952a54ph5", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest"
                },
                body: JSON.stringify({
                    email: email.trim(),
                    type: "newsletter-subscription",
                    source: "footer",
                    completedAt: new Date().toISOString(),
                    userAgent: navigator.userAgent,
                    timestamp: Date.now(),
                }),
            });

            if (!response.ok) {
                throw new Error(`Webhook failed: ${response.status}`);
            }

            setIsSubmitted(true);
            setEmail("");
        } catch (e) {
            console.error("Footer newsletter error:", e);
            setError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleEmailSubmit(e as any);
        }
    };

    return (
        <footer className="border-b bg-white pt-20 dark:bg-transparent">
            <div className="mb-8 border-b md:mb-12">
                <div className="mx-auto flex max-w-5xl flex-wrap items-end justify-between gap-6 px-6 pb-6">
                    <Link
                        href="/"
                        aria-label="go home"
                        className="block size-fit">
                        <Logo />
                    </Link>
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <Link
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-muted-foreground hover:text-orange-500 block">
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                            </svg>
                        </Link>
                        <Link
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="text-muted-foreground hover:text-orange-500 block">
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
                            </svg>
                        </Link>
                        <Link
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="text-muted-foreground hover:text-orange-500 block">
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-12 md:grid-cols-6 md:gap-0 lg:grid-cols-5">
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:col-span-4 md:row-start-1 lg:col-span-3">
                        {links.map((link, index) => (
                            <div
                                key={index}
                                className="space-y-4 text-sm">
                                <span className="block font-medium">{link.group}</span>
                                {link.items.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="text-muted-foreground hover:text-orange-500 block duration-150">
                                        <span>{item.title}</span>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                    
                    {/* Contact Column */}
                    <div className="space-y-4 text-sm md:col-span-2 md:row-start-1 lg:col-span-1">
                        <span className="block font-medium">Contact</span>
                        <div className="space-y-2">
                            <Link
                                href="mailto:richard@pushsend.co"
                                className="text-muted-foreground hover:text-orange-500 block duration-150">
                                <span>Email</span>
                            </Link>
                            <Link
                                href="/contact"
                                className="text-muted-foreground hover:text-orange-500 block duration-150 flex items-center gap-2">
                                <span>Contact</span>
                            </Link>
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="row-start-1 border-b pb-8 text-sm md:col-span-2 md:border-none lg:col-span-1">
                        <div className="space-y-4">
                            <Label
                                htmlFor="mail"
                                className="block font-medium">
                                Subscribe to our newsletter
                            </Label>
                            {!isSubmitted ? (
                                <div className="space-y-2">
                                    <div className="flex gap-2">
                                        <Input
                                            type="email"
                                            id="mail"
                                            name="mail"
                                            placeholder="Your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onKeyPress={handleKeyPress}
                                            className="h-8 text-sm flex-1"
                                        />
                                        <Button 
                                            size="sm" 
                                            className="bg-orange-500 text-white hover:bg-orange-600"
                                            onClick={handleEmailSubmit}
                                        >
                                            Submit
                                        </Button>
                                    </div>
                                    {error && <p className="text-red-500 text-xs">{error}</p>}
                                </div>
                            ) : (
                                <div className="text-green-600 text-xs">
                                    Thanks for subscribing!
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
                    <small className="text-muted-foreground order-last block text-center text-sm md:order-first">© 2025 PushSend. All rights reserved.</small>
                </div>
            </div>
        </footer>
    )
}
