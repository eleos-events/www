"use client";

import { useState } from "react";

const galleryImages = [
  { id: 1, event: "Groove Garden", category: "all", image: "/next.svg" },
  { id: 2, event: "Groove Garden", category: "all", image: "/next.svg" },
  { id: 3, event: "Haunted House", category: "all", image: "/next.svg" },
  { id: 4, event: "Haunted House", category: "all", image: "/next.svg" },
  { id: 5, event: "Groove Garden", category: "all", image: "/next.svg" },
  { id: 6, event: "Haunted House", category: "all", image: "/next.svg" },
  { id: 7, event: "Groove Garden", category: "all", image: "/next.svg" },
  { id: 8, event: "Haunted House", category: "all", image: "/next.svg" },
];

const events = ["all", "Groove Garden", "Haunted House"];

export default function GalleryPage() {
  const [selectedEvent, setSelectedEvent] = useState("all");

  const filteredImages =
    selectedEvent === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.event === selectedEvent);

  return (
    <div className="min-h-screen bg-black">
      {/* Page header */}
      <section className="relative overflow-hidden bg-black pt-16 pb-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-purple-600/[0.04] blur-[150px]" />
          <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.05] blur-[150px]" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#00d4ff] animate-fade-in-up">
            Captured moments
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent mb-8 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Gallery
          </h1>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            {events.map((event) => (
              <button
                key={event}
                onClick={() => setSelectedEvent(event)}
                className={`rounded-full px-5 py-2 text-sm font-medium uppercase tracking-wide transition-[border-color,background-color,color] duration-300 ${
                  selectedEvent === event
                    ? "bg-white/[0.1] text-white border border-white/[0.15]"
                    : "bg-white/[0.02] text-[#707070] border border-white/[0.06] hover:bg-white/[0.04] hover:text-[#a0a0a0] hover:border-white/[0.1]"
                }`}
              >
                {event}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="relative overflow-hidden bg-black py-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-teal-500/[0.03] blur-[150px]" />
          <div className="absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-pink-500/[0.03] blur-[150px]" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
            {filteredImages.map((item, index) => (
              <div
                key={item.id}
                className="group relative mb-4 break-inside-avoid rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm aspect-square flex items-center justify-center cursor-pointer transition-[border-color,background-color,transform] duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] hover:scale-[1.02] animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${Math.min(index * 80, 300)}ms` }}
              >
                {/* Gradient glow on hover */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-15" />
                <span className="relative text-sm font-medium uppercase tracking-wide text-[#555] transition-colors duration-300 group-hover:text-[#999]">
                  {item.event}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
