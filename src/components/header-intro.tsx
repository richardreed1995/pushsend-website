"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import Link from "next/link";

export function HeroHeaderIntro() {
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 10);
    });
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b shadow-sm"
          : "bg-background"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/intro" className="flex items-center">
              <Logo />
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/get-started-intro">
              <Button className="bg-[#A8FF9E] text-black hover:bg-[#8BFF7A]">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 