"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { copy } from "@/lib/copy";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Check } from "lucide-react";

const STORAGE_KEY = "newsletter-subscribed";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "true") {
        setAlreadySubscribed(true);
      }
    } catch {
      // localStorage not available
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading || !email) return;

    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || "Something went wrong. Try again.");
        return;
      }

      try {
        localStorage.setItem(STORAGE_KEY, "true");
      } catch {
        // localStorage not available
      }

      setSubscribed(true);
      setAlreadySubscribed(true);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="border-t border-white/[0.06] bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter signup */}
        <div id="newsletter" className="mb-10 text-center">
          {alreadySubscribed ? (
            <div className="flex items-center justify-center gap-2 text-sm text-[#a0a0a0]">
              <Check className="h-4 w-4 text-teal-400" />
              <span>You&apos;re on the list. We&apos;ll be in touch.</span>
            </div>
          ) : (
            <>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#a0a0a0]">
                Never miss an event
              </p>
              <form
                onSubmit={handleSubmit}
                className="mx-auto flex max-w-sm items-center rounded-full border border-white/[0.08] bg-white/[0.03] p-1.5 focus-within:border-white/[0.15] transition-colors duration-300"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading || subscribed}
                  className="flex-1 bg-transparent px-4 text-sm text-white placeholder:text-[#555] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button
                  type="submit"
                  disabled={isLoading || subscribed || !email}
                  size="sm"
                  className="shrink-0"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </form>
              {error && (
                <p className="mt-2 text-sm text-red-400">{error}</p>
              )}
              <p className="mt-3 text-xs text-[#555]">
                By subscribing, you agree to receive event updates.
              </p>
            </>
          )}
        </div>

        {/* Copyright and links */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 border-t border-white/[0.06] pt-8">
          <p className="text-sm text-[#a0a0a0]">
            {copy.footer.copyright.replace("{year}", String(new Date().getFullYear()))}
          </p>
          <div className="flex space-x-8">
            {copy.footer.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#a0a0a0] hover:text-[#00d4ff] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
