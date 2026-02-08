import { NewsletterSignup } from "@/components/newsletter-signup";
import { Hero } from "@/components/app/hero";
import { EventList } from "@/components/app/event-list";
import { config } from "@/lib/config";
import { copy } from "@/lib/copy";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Page-level ambient blobs (below the hero) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-[50%] h-[500px] w-[500px] rounded-full bg-teal-500/[0.03] blur-[150px]" />
        <div className="absolute -right-40 top-[55%] h-[400px] w-[400px] rounded-full bg-purple-600/[0.04] blur-[150px]" />
        <div className="absolute left-1/2 top-[65%] h-[400px] w-[400px] rounded-full bg-pink-500/[0.03] blur-[150px]" />
        <div className="absolute -right-40 top-[80%] h-[500px] w-[500px] rounded-full bg-teal-500/[0.04] blur-[150px]" />
        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.03] blur-[150px]" />
      </div>

      <Hero {...config.hero} />
      <EventList showViewAllEvents={true} title={copy.home.events.title} />
      <NewsletterSignup />
    </div>
  );
}
