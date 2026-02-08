import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EventList } from "@/components/app/event-list";
import { config } from "@/lib/config";
import dayjs from "dayjs";

const hasUpcomingEvents = config.events.some((event) =>
  event.date.isAfter(dayjs().startOf("day"))
);

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black">
      {hasUpcomingEvents ? (
        <>
          {/* Page header */}
          <section className="relative overflow-hidden bg-black pt-16 pb-8">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.04] blur-[150px]" />
              <div className="absolute -right-40 top-10 h-[400px] w-[400px] rounded-full bg-purple-600/[0.03] blur-[150px]" />
            </div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#00d4ff] animate-fade-in-up">
                Our experiences
              </p>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                Events
              </h1>
            </div>
          </section>
          <EventList
            title="Upcoming Events"
            titleAlignment="left"
            showViewAllEvents={false}
            showPastEvents={false}
          />
        </>
      ) : (
        /* Combined hero when no upcoming events — compact and atmospheric */
        <section className="relative overflow-hidden bg-black pt-16 pb-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-purple-600/[0.04] blur-[150px]" />
            <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.05] blur-[150px]" />
            <div className="absolute left-1/3 bottom-0 h-[400px] w-[400px] rounded-full bg-pink-500/[0.03] blur-[150px]" />
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#00d4ff] animate-fade-in-up">
              Our experiences
            </p>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Events
            </h1>
            <div className="max-w-xl animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <p className="text-lg text-[#a0a0a0] mb-6">
                Our curators are finalizing the next set of one-off experiences.
                Sign up to be the first to know when tickets drop.
              </p>
              <Link
                href="/#newsletter"
                className="inline-flex items-center gap-2 text-[#00d4ff] font-medium transition-colors duration-300 hover:text-white"
              >
                Get notified
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <EventList
        title="Past Events"
        eyebrow="Looking back"
        titleAlignment="left"
        showViewAllEvents={false}
        showPastEvents={true}
      />
    </div>
  );
}
