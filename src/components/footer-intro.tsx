import { Logo } from "@/components/logo";
import Link from "next/link";

export default function FooterIntro() {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="flex items-center gap-6">
            <Logo />
            <div className="h-4 w-px bg-gray-300"></div>
            <p className="text-sm text-muted-foreground">
              © 2025 Palm. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <Link 
              href="/privacy-policy" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <div className="h-4 w-px bg-gray-300"></div>
            <Link 
              href="/cookie-policy" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Policy
            </Link>
            <div className="h-4 w-px bg-gray-300"></div>
            <Link 
              href="/terms" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 