"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Action, ActionProps } from "@/components/app/generic-action";
import dayjs, { type Dayjs } from "dayjs";
import Image from "next/image";
import { Empty } from "@/components/ui/empty";
import useEmblaCarousel from "embla-carousel-react";
import { config } from "@/lib/config";
import { cn } from "@/lib/utils";

export type EventProps = {
  title: string;
  imageUrl: string;
  date: Dayjs;
  location: string;
  action: ActionProps;
};

export function Event({ title, imageUrl, date, location, action }: EventProps) {
  return (
    <Card className="overflow-hidden hover:border-[#00d4ff] transition-all duration-300 hover:shadow-lg hover:shadow-[#00d4ff]/20 group">
      <div className="relative aspect-[3/4] bg-black overflow-hidden">
        {/* Blurred background fill */}
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center blur-2xl scale-110 opacity-40"
            aria-hidden="true"
            priority={false}
          />
        </div>
        {/* Main poster image */}
        <div className="relative h-full flex items-center justify-center">
          <Image
            src={imageUrl}
            alt={title}
            width={500}
            height={667}
            className="object-contain object-center transition-transform duration-300 group-hover:scale-105 max-h-full max-w-full"
            priority={false}
          />
        </div>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {date.format("MMMM D, YYYY")} • {location}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Action {...action} />
      </CardContent>
    </Card>
  );
}

export type EventListProps = {
  title: string;
  titleAlignment?: "left" | "center";
  showViewAllEvents?: boolean;
  showPastEvents?: boolean;
};

export function EventList({
  title,
  titleAlignment = "center",
  showViewAllEvents = true,
  showPastEvents = false,
}: EventListProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const filteredEvents = config.events.filter((event) =>
    showPastEvents
      ? event.date.isBefore(dayjs().startOf("day"))
      : event.date.isAfter(dayjs().startOf("day"))
  );

  if (filteredEvents.length === 0) {
    return (
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={cn(
              "text-4xl md:text-5xl font-black uppercase mb-12",
              titleAlignment === "left" && "text-left",
              titleAlignment === "center" && "text-center"
            )}
          >
            {title}
          </h2>
          <Empty
            title="No events found"
            description="Check back soon for upcoming events"
          />
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={cn(
            "text-4xl md:text-5xl font-black uppercase mb-12",
            titleAlignment === "left" && "text-left",
            titleAlignment === "center" && "text-center"
          )}
        >
          {title}
        </h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {filteredEvents.map(({ key, ...event }) => (
                <div
                  key={key}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-0.75rem)] lg:flex-[0_0_calc(33.333%-1rem)] min-w-0"
                >
                  <Event {...event} />
                </div>
              ))}
            </div>
          </div>
          {filteredEvents.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 hidden lg:flex z-10"
                onClick={scrollPrev}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 hidden lg:flex z-10"
                onClick={scrollNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
        </div>
        {showViewAllEvents && filteredEvents.length > 0 && (
          <div className="text-center mt-12">
            <Action type="link" href="/events" label="View All Events" />
          </div>
        )}
      </div>
    </section>
  );
}
