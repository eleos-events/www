import { NewsletterSignup } from "@/components/newsletter-signup";
import { Hero } from "@/components/app/hero";
import { EventList } from "@/components/app/event-list";
import { config } from "@/lib/config";
import { copy } from "@/lib/copy";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero {...config.hero} />
      <EventList showViewAllEvents={true} title={copy.home.events.title} />
      <NewsletterSignup />
    </div>
  );
}
