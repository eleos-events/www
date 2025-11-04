"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

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

  const filteredImages = selectedEvent === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.event === selectedEvent);

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-5xl md:text-6xl font-black uppercase mb-12 text-center">
          Gallery
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {events.map((event) => (
            <Button
              key={event}
              variant={selectedEvent === event ? "default" : "outline"}
              onClick={() => setSelectedEvent(event)}
            >
              {event}
            </Button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid mb-4 bg-gradient-to-br from-[#00d4ff]/20 to-[#0099cc]/20 aspect-square rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
            >
              <span className="text-lg font-black text-white/50">{item.event}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

