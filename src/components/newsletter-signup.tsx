"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      return;
    }
    // Handle newsletter signup logic here
    console.log({ email, name, phone, consent });
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
      setName("");
      setPhone("");
      setConsent(false);
    }, 3000);
  };

  return (
    <section id="newsletter" className="py-24 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
            Never miss an event
          </h2>
          <p className="text-lg text-[#a0a0a0] mb-8">
            Sign up for announcements and presales. Be the first to know about our next party.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="name" className="sr-only">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone" className="sr-only">Phone (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone (Optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Checkbox 
                id="consent" 
                checked={consent}
                onCheckedChange={(checked) => setConsent(checked === true)}
              />
              <Label htmlFor="consent" className="text-sm text-[#a0a0a0] cursor-pointer">
                I consent to receive updates and marketing communications
              </Label>
            </div>
            <Button 
              type="submit" 
              size="lg" 
              className="w-full md:w-auto min-w-[200px]"
              disabled={!consent}
            >
              {subscribed ? "Subscribed!" : "Sign Up"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

