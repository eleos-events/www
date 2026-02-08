"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, ThumbsUp } from "lucide-react";
import { copy } from "@/lib/copy";

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
        setError(data.error || copy.newsletter.errors.generic);
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
      setError(copy.newsletter.errors.network);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isHydrated) {
    return (
      <section
        id="newsletter"
        className="relative py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
        className="relative py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 md:p-16">
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-500/10 ring-1 ring-teal-500/30">
                <ThumbsUp className="h-8 w-8 text-teal-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                {copy.newsletter.success.title}
              </h2>
              <p className="text-lg text-[#a0a0a0] max-w-md">
                {copy.newsletter.success.description}
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
      className="relative py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 md:p-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#00d4ff]">
            {copy.newsletter.eyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            {copy.newsletter.title}
          </h2>
          <p className="text-lg text-[#a0a0a0] mb-8">
            {copy.newsletter.description}
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="name" className="sr-only">
                  {copy.newsletter.form.namePlaceholder}
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder={copy.newsletter.form.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={isLoading || subscribed}
                />
              </div>
              <div>
                <Label htmlFor="email" className="sr-only">
                  {copy.newsletter.form.emailPlaceholder}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={copy.newsletter.form.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading || subscribed}
                />
              </div>
              <div>
                <Label htmlFor="phone" className="sr-only">
                  {copy.newsletter.form.phonePlaceholder}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={copy.newsletter.form.phonePlaceholder}
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
                {copy.newsletter.form.consentLabel}
              </Label>
            </div>
            {error && (
              <p className="text-sm text-red-400">{error}</p>
            )}
            <Button
              type="submit"
              size="lg"
              className="w-full md:w-auto min-w-[220px] transition-transform hover:scale-105 active:scale-95"
              disabled={!consent || isLoading || subscribed}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {copy.newsletter.form.submittingLabel}
                </>
              ) : subscribed ? (
                copy.newsletter.form.submittedLabel
              ) : (
                copy.newsletter.form.submitLabel
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
