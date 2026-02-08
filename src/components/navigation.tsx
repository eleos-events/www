"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { copy } from "@/lib/copy";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-[60] w-full border-b border-white/[0.06] bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center">
              <Logo className="h-8 w-auto text-white" />
            </Link>

            <div className="hidden md:flex md:items-center md:space-x-6">
              {copy.nav.items.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[#707070] transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              <Button asChild>
                <Link href={copy.nav.cta.href}>{copy.nav.cta.label}</Link>
              </Button>
            </div>

            <button
              className="md:hidden flex h-10 w-10 items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative h-5 w-6">
                <span
                  className={cn(
                    "absolute left-0 h-[2px] w-6 bg-white transition-[top,transform] duration-300",
                    mobileMenuOpen ? "top-[9px] rotate-45" : "top-0"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[9px] h-[2px] w-6 bg-white transition-[transform,opacity] duration-300",
                    mobileMenuOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-[2px] w-6 bg-white transition-[top,transform] duration-300",
                    mobileMenuOpen ? "top-[9px] -rotate-45" : "top-[18px]"
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[55] bg-black/98 backdrop-blur-xl md:hidden">
          {/* Ambient blobs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.06] blur-[150px]" />
            <div className="absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-purple-600/[0.05] blur-[150px]" />
          </div>

          <div className="relative flex h-full flex-col px-6 pt-24">
            <nav className="space-y-2">
              {copy.nav.items.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block animate-fade-in-up"
                  style={{ animationDelay: `${index * 60}ms` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-5 py-4 active:bg-white/[0.06]">
                    <span className="text-3xl font-black uppercase tracking-tight text-white">
                      {item.label}
                    </span>
                  </div>
                </Link>
              ))}
            </nav>

            <div
              className="mt-10 animate-fade-in-up"
              style={{ animationDelay: `${copy.nav.items.length * 60 + 60}ms` }}
            >
              <Button asChild size="lg" className="w-full">
                <Link
                  href={copy.nav.cta.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {copy.nav.cta.label}
                </Link>
              </Button>
            </div>

            <p
              className="mt-auto pb-12 text-center text-xs uppercase tracking-[0.2em] text-[#555] animate-fade-in-up"
              style={{ animationDelay: `${copy.nav.items.length * 60 + 120}ms` }}
            >
              {copy.brand.name}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
