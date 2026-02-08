"use client";

import { useState, useEffect, useCallback } from "react";
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
import { copy } from "@/lib/copy";
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
    <Card className="overflow-hidden hover:border-white/[0.12] hover:bg-white/[0.04] hover:shadow-lg hover:shadow-[#00d4ff]/10 group">
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
  eyebrow?: string;
  titleAlignment?: "left" | "center";
  showViewAllEvents?: boolean;
  showPastEvents?: boolean;
};

export function EventList({
  title,
  eyebrow,
  titleAlignment = "center",
  showViewAllEvents = true,
  showPastEvents = false,
}: EventListProps) {
  const eyebrowText =
    eyebrow ?? (showPastEvents ? copy.eventList.eyebrow.past : copy.eventList.eyebrow.upcoming);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

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
      <section className="relative py-24 bg-black overflow-hidden">
        {/* Ambient background blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-teal-500/[0.03] blur-[150px]" />
          <div className="absolute -right-40 top-40 h-[400px] w-[400px] rounded-full bg-purple-600/[0.04] blur-[150px]" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={cn(titleAlignment === "center" && "text-center")}>
            <p
              className={cn(
                "mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#00d4ff]",
                titleAlignment === "left" && "text-left"
              )}
            >
              {eyebrowText}
            </p>
            <h2
              className={cn(
                "text-4xl md:text-5xl font-black uppercase mb-12 tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent",
                titleAlignment === "left" && "text-left",
                titleAlignment === "center" && "text-center"
              )}
            >
              {title}
            </h2>
          </div>
          <div className="text-center">
            <Empty
              title={copy.eventList.empty.title}
              description={copy.eventList.empty.description}
              notifyHref="#newsletter"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-teal-500/[0.03] blur-[150px]" />
        <div className="absolute -right-40 top-40 h-[400px] w-[400px] rounded-full bg-purple-600/[0.04] blur-[150px]" />
        <div className="absolute left-1/2 bottom-0 h-[400px] w-[400px] rounded-full bg-pink-500/[0.03] blur-[150px]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(titleAlignment === "center" && "text-center")}>
          <p
            className={cn(
              "mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#00d4ff]",
              titleAlignment === "left" && "text-left"
            )}
          >
            {eyebrowText}
          </p>
          <h2
            className={cn(
              "text-4xl md:text-5xl font-black uppercase mb-12 tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent",
              titleAlignment === "left" && "text-left",
              titleAlignment === "center" && "text-center"
            )}
          >
            {title}
          </h2>
        </div>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {filteredEvents.map(({ key, ...event }, index) => (
                <div
                  key={key}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-0.75rem)] lg:flex-[0_0_calc(33.333%-1rem)] min-w-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
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
              {/* Mobile pagination dots */}
              <div className="flex justify-center gap-2 mt-6 lg:hidden">
                {filteredEvents.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "h-2 rounded-full transition-[width,background-color] duration-300",
                      selectedIndex === index
                        ? "w-6 bg-[#00d4ff]"
                        : "w-2 bg-white/20"
                    )}
                    onClick={() => emblaApi?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        {showViewAllEvents && filteredEvents.length > 0 && (
          <div className="text-center mt-12">
            <Action type="link" href="/events" label={copy.eventList.viewAllLabel} />
          </div>
        )}
      </div>
    </section>
  );
}
