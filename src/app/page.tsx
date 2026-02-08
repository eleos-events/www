import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { Hero } from "@/components/app/hero";
import { EventList } from "@/components/app/event-list";
import { config } from "@/lib/config";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero {...config.hero} />
      <EventList showViewAllEvents={true} title="Upcoming Events" />
      {/* About Preview
      <section className="py-24 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
                Bespoke Production Value
              </h2>
              <p className="text-lg text-[#a0a0a0] mb-4">
                Each event has a customised design and unique visual production.
                We create immersive, high-production experiences that showcase
                local talent and bring communities together through music.
              </p>
              <p className="text-lg text-[#a0a0a0] mb-6">
                Our mission is to deliver world-class events at accessible
                prices, making premium experiences available to everyone.
              </p>
              <Button asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
            <div className="aspect-video bg-gradient-to-br from-[#00d4ff]/10 to-[#0099cc]/10 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-black text-white/30">
                Event Footage
              </span>
            </div>
          </div>
        </div>
      </section> */}

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>
  );
}
