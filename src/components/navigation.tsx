"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  // { href: "/artists", label: "Artists" },
  { href: "/gallery", label: "Gallery" },
  // { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#333333] bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo className="h-8 w-auto text-white" />
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white transition-colors hover:text-[#00d4ff]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button asChild>
              <Link href="/contact">Get Tickets</Link>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-[#333333] bg-black md:hidden">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-white transition-colors hover:bg-[#1a1a1a] hover:text-[#00d4ff]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-4 w-full">
              <Link href="/contact">Get Tickets</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
