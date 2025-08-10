'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X, ChevronDown, ChevronUp, FileText, Send, DollarSign, Settings, Users, BookOpen, Download, ClipboardList, TrendingUp, Mail } from 'lucide-react'
import { Button } from './ui/button'
import React from 'react'
import { cn } from "../lib/utils";

const navigationItems = [
    {
        name: 'Why PushSend',
        href: '/#why-pushsend',
        hasDropdown: false
    },
    {
        name: 'Process',
        href: '/#process',
        hasDropdown: false
    },
    {
        name: 'About',
        href: '/about',
        hasDropdown: false
    },
    {
        name: 'Resources',
        href: '#',
        hasDropdown: true,
        items: [
            {
                title: 'Blog',
                description: 'Growth insights & tips',
                href: '/blog',
                icon: BookOpen
            },
            {
                title: 'Downloads',
                description: '12 free downloads',
                href: '/downloads',
                icon: ClipboardList
            },
            {
                title: 'Newsletter',
                description: 'Weekly growth insights',
                href: '/newsletter',
                icon: Mail
            }
        ]
    }
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleDropdownToggle = (name: string) => {
        setActiveDropdown(activeDropdown === name ? null : name)
    }

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex items-center justify-between py-3 lg:py-4">
                        {/* Logo */}
                        <Link
                            href="/"
                            aria-label="home"
                            className="flex items-center space-x-2">
                            <Logo />
                        </Link>

                        {/* Desktop Navigation - Centered */}
                        <div className="hidden lg:flex lg:flex-1 lg:justify-center">
                            <ul className="flex items-center gap-8 text-sm">
                                {navigationItems.map((item, index) => (
                                    <li key={index} className="relative">
                                        {item.hasDropdown ? (
                                            <div 
                                                className="relative group"
                                                onMouseEnter={() => setActiveDropdown(item.name)}
                                                onMouseLeave={() => setActiveDropdown(null)}
                                            >
                                                <button
                                                    className="text-muted-foreground hover:text-accent-foreground flex items-center gap-1 duration-150"
                                                >
                                                    <span>{item.name}</span>
                                                    <ChevronDown className="size-4" />
                                                </button>
                                                
                                                {activeDropdown === item.name && (
                                                    <div className={`absolute top-full mt-2 rounded-xl border bg-background/95 backdrop-blur-sm shadow-lg ${
                                                        item.name === 'Resources' ? 'w-80 left-0' : 'w-80 left-0'
                                                    }`}>
                                                        {/* Invisible buffer zone to prevent gap */}
                                                        <div className="absolute -top-2 left-0 right-0 h-2"></div>
                                                        <div className="p-8">
                                                            {item.name === 'Resources' ? (
                                                                <div className="space-y-4">
                                                                    {item.items?.map((subItem, subIndex) => {
                                                                        const IconComponent = subItem.icon
                                                                        return (
                                                                            <Link
                                                                                key={subIndex}
                                                                                href={subItem.href}
                                                                                className="flex items-center gap-4 rounded-lg p-4 transition-colors hover:bg-muted/50"
                                                                            >
                                                                                <IconComponent className="size-6 text-muted-foreground" />
                                                                                <div>
                                                                                    <div className="font-medium text-foreground">{subItem.title}</div>
                                                                                    <div className="text-sm text-muted-foreground">{subItem.description}</div>
                                                                                </div>
                                                                            </Link>
                                                                        )
                                                                    })}
                                                                </div>
                                                            ) : (
                                                                <div className="grid gap-3">
                                                                    {item.items?.map((subItem, subIndex) => {
                                                                        const IconComponent = subItem.icon
                                                                        return (
                                                                            <Link
                                                                                key={subIndex}
                                                                                href={subItem.href}
                                                                                className="flex items-center gap-3 rounded-lg p-3 hover:bg-muted/50 transition-colors"
                                                                            >
                                                                                <IconComponent className="size-5 text-muted-foreground" />
                                                                                <div>
                                                                                    <div className="font-medium text-foreground">{subItem.title}</div>
                                                                                    <div className="text-sm text-muted-foreground">{subItem.description}</div>
                                                                                </div>
                                                                            </Link>
                                                                        )
                                                                    })}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Desktop CTA Button */}
                        <div className="hidden lg:block">
                            <Button
                                asChild
                                size="sm"
                                className="lg:inline-flex bg-orange-500 text-white hover:bg-orange-600">
                                <Link href="/get-started">
                                    <span>Get Started</span>
                                </Link>
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuState(!menuState)}
                            aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                            className="relative z-20 -m-2.5 block cursor-pointer p-2.5 lg:hidden">
                            <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                            <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                        </button>

                        {/* Mobile Menu */}
                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden w-full">
                                <ul className="space-y-6 text-base">
                                    {navigationItems.map((item, index) => (
                                        <li key={index}>
                                            {item.hasDropdown ? (
                                                <div>
                                                    <button
                                                        onClick={() => handleDropdownToggle(item.name)}
                                                        className="text-muted-foreground hover:text-accent-foreground flex items-center justify-between w-full duration-150"
                                                    >
                                                        <span>{item.name}</span>
                                                        {activeDropdown === item.name ? (
                                                            <ChevronUp className="size-4" />
                                                        ) : (
                                                            <ChevronDown className="size-4" />
                                                        )}
                                                    </button>
                                                    
                                                    {activeDropdown === item.name && (
                                                        <div className="mt-4 ml-4 space-y-3">
                                                            {item.items?.map((subItem, subIndex) => {
                                                                const IconComponent = subItem.icon
                                                                return (
                                                                    <Link
                                                                        key={subIndex}
                                                                        href={subItem.href}
                                                                        className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-muted/50"
                                                                    >
                                                                        <IconComponent className="size-5 text-muted-foreground" />
                                                                        <div>
                                                                            <div className="font-medium text-foreground">{subItem.title}</div>
                                                                            <div className="text-sm text-muted-foreground">{subItem.description}</div>
                                                                        </div>
                                                                    </Link>
                                                                )
                                                            })}
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <Link
                                                    href={item.href}
                                                    className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                    <span>{item.name}</span>
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
