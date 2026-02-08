import { EventProps } from "@/components/app/event-list";
import { HeroProps } from "@/components/app/hero";
import dayjs from "dayjs";
import { Metadata } from "next";
import { Keyed } from "./utils";

export const config = {
  seo: {
    title: "elëos events",
    description:
      "Boston-based bespoke events company producing one-off live-music parties that showcase local talent. High-quality, highly produced experiences at relatively low cost.",
    openGraph: {
      title: "elëos events",
      description:
        "Boston-based bespoke events company producing one-off live-music parties that showcase local talent. High-quality, highly produced experiences at relatively low cost.",
      images: [{ url: "/splash.png" }],
    },
  } satisfies Metadata,
  hero: {
    title: "Join our next event",
    titleAlignment: "left",
    meta: "Boston-based bespoke events company producing high-quality, highly produced experiences that showcase local talent.",
    actions: [
      {
        type: "link",
        href: "/events",
        label: "View Events",
        key: "view-events",
      },
    ],
  } satisfies HeroProps,
  events: [
    {
      key: "groove-garden",
      title: "Groove Garden",
      imageUrl: "/event-posters/groove-garden.png",
      date: dayjs("2024-08-02"),
      location: "Cambridge, MA",
      action: {
        type: "link",
        href: "https://posh.vip/e/groove-garden-5",
        label: "View Event",
      },
    },
    {
      key: "haunted-house",
      title: "Haunted House",
      imageUrl: "/event-posters/haunted-house.png",
      date: dayjs("2025-11-01"),
      location: "Cambridge, MA",
      action: {
        type: "link",
        href: "https://posh.vip/e/haunted-house-8",
        label: "View Event",
      },
    },
  ] satisfies Keyed<EventProps>[],
} as const;
