"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, ThumbsUp } from "lucide-react";

const STORAGE_KEY = "newsletter-subscribed";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "true") {
        setAlreadySubscribed(true);
      }
    } catch {
      // localStorage not available
    }
    setIsHydrated(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent || isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, consent }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || "Something went wrong. Please try again.");
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
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isHydrated) {
    return (
      <section
        id="newsletter"
        className="relative py-24 bg-black overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-teal-500/[0.04] blur-[150px]" />
          <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.03] blur-[150px]" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 md:p-16 flex items-center justify-center min-h-[280px]">
            <Loader2 className="h-8 w-8 animate-spin text-teal-400" />
          </div>
        </div>
      </section>
    );
  }

  if (alreadySubscribed) {
    return (
      <section
        id="newsletter"
        className="relative py-24 bg-black overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-teal-500/[0.04] blur-[150px]" />
          <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.03] blur-[150px]" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 md:p-16">
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-500/10 ring-1 ring-teal-500/30">
                <ThumbsUp className="h-8 w-8 text-teal-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                You&apos;re on the list
              </h2>
              <p className="text-lg text-[#a0a0a0] max-w-md">
                We&apos;ll let you know when something big is coming.
                See you on the dance floor.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="newsletter"
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-teal-500/[0.04] blur-[150px]" />
        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.03] blur-[150px]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 md:p-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#00d4ff]">
            Stay in the loop
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Never miss an event
          </h2>
          <p className="text-lg text-[#a0a0a0] mb-8">
            Sign up for announcements and presales. Be the first to know about
            our next party.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="name" className="sr-only">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={isLoading || subscribed}
                />
              </div>
              <div>
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading || subscribed}
                />
              </div>
              <div>
                <Label htmlFor="phone" className="sr-only">
                  Phone (Optional)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone (Optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={isLoading || subscribed}
                />
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(checked === true)}
                disabled={isLoading || subscribed}
              />
              <Label
                htmlFor="consent"
                className="text-sm text-[#a0a0a0] cursor-pointer"
              >
                I consent to receive updates and marketing communications
              </Label>
            </div>
            {error && (
              <p className="text-sm text-red-400">{error}</p>
            )}
            <Button
              type="submit"
              size="lg"
              className="w-full md:w-auto min-w-[220px] transition-all hover:scale-105 active:scale-95"
              disabled={!consent || isLoading || subscribed}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing up...
                </>
              ) : subscribed ? (
                "Subscribed!"
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
