import { EventProps } from "@/components/app/event-list";
import { HeroProps } from "@/components/app/hero";
import { copy } from "@/lib/copy";
import dayjs from "dayjs";
import { Metadata } from "next";
import { Keyed } from "./utils";

export const config = {
  seo: {
    title: copy.brand.name,
    description: copy.brand.tagline,
    metadataBase: new URL(copy.brand.url),
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: copy.brand.name,
      title: copy.brand.name,
      description: copy.brand.tagline,
      url: copy.brand.url,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${copy.brand.name} — Bespoke Live Music Events in Boston`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.brand.name,
      description: copy.brand.tagline,
      images: ["/twitter-image.jpg"],
    },
  } satisfies Metadata,
  hero: {
    title: copy.home.hero.title,
    titleAlignment: "left",
    meta: copy.home.hero.description,
    actions: [
      {
        type: "link",
        href: copy.home.hero.cta.href,
        label: copy.home.hero.cta.label,
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
