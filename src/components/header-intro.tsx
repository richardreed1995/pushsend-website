"use client";

import { Logo } from "@/components/logo";
import Link from "next/link";

export function HeroHeaderIntro() {
  return (
    <header className="bg-gray-100 border-b shadow-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-12 items-center justify-center">
          <Link href="/intro" className="flex items-center">
            <Logo />
          </Link>
        </div>
      </div>
    </header>
  );
} 