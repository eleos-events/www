/**
 * Centralised site copy.
 *
 * Every user-facing string lives here so the data layer can be swapped for a
 * headless CMS (Sanity, Contentful, etc.) without touching component code.
 *
 * Guidelines for a future CMS migration:
 *  1. Define a provider that fetches from the CMS and returns a `SiteCopy` object.
 *  2. Replace the static `copy` export below with the provider's return value.
 *  3. Components already consume `copy.*` — no further changes needed.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface SiteCopy {
  /** Global brand strings reused across multiple surfaces. */
  brand: {
    name: string;
    tagline: string;
    url: string;
  };

  nav: {
    items: { href: string; label: string }[];
    cta: { href: string; label: string };
  };

  home: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
      cta: { href: string; label: string };
    };
    events: { title: string };
  };

  about: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
    };
    philosophy: {
      eyebrow: string;
      title: string;
      paragraphs: string[];
    };
    pillars: {
      eyebrow: string;
      title: string;
      items: { title: string; description: string }[];
    };
    differentiators: {
      eyebrow: string;
      title: string;
      items: { title: string; description: string }[];
    };
  };

  events: {
    hero: {
      eyebrow: string;
      title: string;
    };
    empty: {
      description: string;
      cta: string;
    };
    upcoming: { title: string };
    past: {
      eyebrow: string;
      title: string;
    };
  };

  gallery: {
    hero: {
      eyebrow: string;
      title: string;
    };
  };

  artists: {
    hero: {
      title: string;
      description: string;
    };
    cta: string;
  };

  blog: {
    title: string;
    cta: string;
  };

  contact: {
    hero: {
      eyebrow: string;
      title: string;
    };
    socials: {
      name: string;
      handle: string;
      href: string;
    }[];
  };

  newsletter: {
    eyebrow: string;
    title: string;
    description: string;
    form: {
      namePlaceholder: string;
      emailPlaceholder: string;
      phonePlaceholder: string;
      consentLabel: string;
      submitLabel: string;
      submittingLabel: string;
      submittedLabel: string;
    };
    success: {
      title: string;
      description: string;
    };
    errors: {
      generic: string;
      network: string;
    };
  };

  footer: {
    copyright: string;
    links: { href: string; label: string }[];
  };

  unsubscribe: {
    loading: string;
    success: { title: string; description: string };
    error: { title: string; description: string };
  };

  eventList: {
    empty: {
      title: string;
      description: string;
      notifyLabel: string;
    };
    eyebrow: {
      upcoming: string;
      past: string;
    };
    viewAllLabel: string;
  };
}

// ---------------------------------------------------------------------------
// Hard-coded copy (swap this with a CMS fetch in the future)
// ---------------------------------------------------------------------------

export const copy: SiteCopy = {
  brand: {
    name: "elëos events",
    tagline:
      "Boston-based bespoke events company producing one-off live-music parties that showcase local talent. High-quality, highly produced experiences at relatively low cost.",
    url: "https://eleos.events",
  },

  nav: {
    items: [
      { href: "/", label: "Home" },
      { href: "/events", label: "Events" },
      { href: "/about", label: "About" },
      { href: "/gallery", label: "Gallery" },
      { href: "/contact", label: "Contact" },
    ],
    cta: { href: "/events", label: "Get Tickets" },
  },

  home: {
    hero: {
      eyebrow: "Live music experiences",
      title: "Join our next event",
      description:
        "Boston-based bespoke events company producing high-quality, highly produced experiences that showcase local talent.",
      cta: { href: "/events", label: "View Events" },
    },
    events: {
      title: "Upcoming Events",
    },
  },

  about: {
    hero: {
      eyebrow: "Who we are",
      title: "About Us",
      description:
        "Boston-based bespoke events company producing one-off live-music parties that showcase local talent.",
    },
    philosophy: {
      eyebrow: "Our philosophy",
      title: "Every night should be\na bespoke experience",
      paragraphs: [
        "Each event has a customised design and unique visual production. We believe that every night should be a bespoke experience, with different visual production and immersive environments that connect people through dance and music.",
        "We pioneer the local music scene by providing a platform for emerging artists while maintaining the production quality of world-class venues. Our multi-room experiences and bespoke visual production create unforgettable moments that bring communities together.",
      ],
    },
    pillars: {
      eyebrow: "What we deliver",
      title: "Built on three pillars",
      items: [
        {
          title: "Bespoke Design",
          description:
            "Every event is uniquely designed with custom visuals and production that match the theme and atmosphere.",
        },
        {
          title: "Local Talent",
          description:
            "We showcase the best local DJs and performers, giving them a platform to shine on a world-class stage.",
        },
        {
          title: "Accessible Pricing",
          description:
            "Premium experiences at accessible prices. We believe everyone deserves access to high-quality events.",
        },
      ],
    },
    differentiators: {
      eyebrow: "The difference",
      title: "What makes us different",
      items: [
        {
          title: "Immersive Experiences",
          description:
            "Our events are designed to be fully immersive. From the moment you enter, you're transported into a world of music, light, and energy.",
        },
        {
          title: "Connection Through Dance",
          description:
            "We believe in the power of dance to bring people together. Our events create spaces where connections are forged on the dance floor.",
        },
        {
          title: "Pioneering Music",
          description:
            "We're always pushing boundaries, showcasing new sounds and supporting artists who are shaping the future of electronic music.",
        },
      ],
    },
  },

  events: {
    hero: {
      eyebrow: "Our experiences",
      title: "Events",
    },
    empty: {
      description:
        "Our curators are finalizing the next set of one-off experiences. Sign up to be the first to know when tickets drop.",
      cta: "Get notified",
    },
    upcoming: { title: "Upcoming Events" },
    past: {
      eyebrow: "Looking back",
      title: "Past Events",
    },
  },

  gallery: {
    hero: {
      eyebrow: "Captured moments",
      title: "Gallery",
    },
  },

  artists: {
    hero: {
      title: "Local Talent",
      description:
        "Discover the talented DJs and performers who bring our events to life. Each artist brings their unique sound and energy to create unforgettable experiences.",
    },
    cta: "Listen",
  },

  blog: {
    title: "News & Blog",
    cta: "Read More",
  },

  contact: {
    hero: {
      eyebrow: "Find us everywhere",
      title: "Let's Connect",
    },
    socials: [
      {
        name: "Instagram",
        handle: "@eleos_events",
        href: "https://www.instagram.com/eleos_events/",
      },
      {
        name: "TikTok",
        handle: "@eleos_events_ofc",
        href: "https://www.tiktok.com/@eleos_events_ofc",
      },
      {
        name: "YouTube",
        handle: "@eleos_events",
        href: "https://www.youtube.com/@eleos_events",
      },
      {
        name: "SoundCloud",
        handle: "Mixes & Sets",
        href: "https://on.soundcloud.com/7Uzed1qsUASOLBeIg9",
      },
    ],
  },

  newsletter: {
    eyebrow: "Stay in the loop",
    title: "Never miss an event",
    description:
      "Sign up for announcements and presales. Be the first to know about our next party.",
    form: {
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      phonePlaceholder: "Phone (Optional)",
      consentLabel:
        "I consent to receive updates and marketing communications",
      submitLabel: "Sign Up",
      submittingLabel: "Signing up...",
      submittedLabel: "Subscribed!",
    },
    success: {
      title: "You're on the list",
      description:
        "We'll let you know when something big is coming. See you on the dance floor.",
    },
    errors: {
      generic: "Something went wrong. Please try again.",
      network: "Network error. Please check your connection and try again.",
    },
  },

  footer: {
    copyright: "\u00A9 {year} elëos events. All rights reserved.",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms" },
    ],
  },

  unsubscribe: {
    loading: "Processing your request...",
    success: {
      title: "Unsubscribed",
      description:
        "You've been removed from our mailing list. You won't receive any more emails from us.",
    },
    error: {
      title: "Something went wrong",
      description:
        "We couldn't process your unsubscribe request. Please try again or contact us directly.",
    },
  },

  eventList: {
    empty: {
      title: "More magic on the way",
      description:
        "Our curators are finalizing the next set of one-off experiences. Join the newsletter to be the first to know.",
      notifyLabel: "Notify Me When Live",
    },
    eyebrow: {
      upcoming: "What's next",
      past: "Looking back",
    },
    viewAllLabel: "View All Events",
  },
};
