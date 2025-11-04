"use client";

import { useState } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Groove Garden",
    date: "2024-12-15",
    location: "Boston, MA",
    genre: "Tech House",
    image: "/next.svg",
  },
  {
    id: 2,
    title: "Haunted House",
    date: "2024-10-31",
    location: "Boston, MA",
    genre: "EDM",
    image: "/next.svg",
  },
  {
    id: 3,
    title: "Summer Sessions",
    date: "2025-06-20",
    location: "Boston, MA",
    genre: "Deep House",
    image: "/next.svg",
  },
];

const pastEvents = [
  {
    id: 1,
    title: "Groove Garden 2024",
    date: "2024-08-15",
    location: "Boston, MA",
    genre: "Tech House",
    image: "/next.svg",
    recap: "An unforgettable night of tech house and local talent.",
  },
  {
    id: 2,
    title: "Haunted House 2023",
    date: "2023-10-31",
    location: "Boston, MA",
    genre: "EDM",
    image: "/next.svg",
    recap: "Spooky beats and haunting melodies.",
  },
];

export default function EventsPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-5xl md:text-6xl font-black uppercase mb-12 text-center">
          Events
        </h1>

        {/* Upcoming Events Carousel */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-8">
            Upcoming Events
          </h2>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                    <Card className="h-full hover:border-[#00d4ff] transition-colors">
                      <div className="aspect-video bg-gradient-to-br from-[#00d4ff]/20 to-[#0099cc]/20 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-black text-white/50">{event.title}</span>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>{event.title}</CardTitle>
                        <CardDescription>
                          {new Date(event.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })} • {event.location}
                        </CardDescription>
                        <span className="text-xs font-semibold text-[#00d4ff] uppercase mt-2">
                          {event.genre}
                        </span>
                      </CardHeader>
                      <CardContent>
                        <Button asChild className="w-full">
                          <Link href={`/events/${event.id}`}>Get Tickets</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 hidden lg:flex"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 hidden lg:flex"
              onClick={scrollNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </section>

        {/* Past Events */}
        <section>
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-8">
            Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event) => (
              <Card key={event.id} className="hover:border-[#00d4ff] transition-colors">
                <div className="aspect-video bg-gradient-to-br from-[#00d4ff]/20 to-[#0099cc]/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-black text-white/50">{event.title}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>
                    {new Date(event.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })} • {event.location}
                  </CardDescription>
                  <p className="text-sm text-[#a0a0a0] mt-2">{event.recap}</p>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/gallery?event=${event.id}`}>View Gallery</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

