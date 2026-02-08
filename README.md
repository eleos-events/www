# eleos events — www

Marketing website for eleos events, a Boston-based bespoke live music events company.

Built with Next.js 16 (App Router), React 19, and Tailwind CSS 4.

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **UI:** React 19, Tailwind CSS 4, Radix UI primitives
- **Email:** Resend + React Email
- **Icons:** Lucide React
- **Carousel:** Embla Carousel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
  app/                  # Next.js App Router pages
    about/              # About page
    artists/            # Artists listing
    blog/               # Blog with category filters
    contact/            # Contact form
    events/             # Upcoming events
    gallery/            # Photo gallery with event filters
    privacy/            # Privacy policy
    terms/              # Terms & conditions
    unsubscribe/        # Newsletter unsubscribe
    api/newsletter/     # Newsletter signup & unsubscribe API
  components/
    app/                # Domain components (hero, event list, etc.)
    ui/                 # Reusable UI primitives (button, card, input, etc.)
  lib/
    copy.ts             # Centralised site copy (CMS-ready)
    config.ts           # SEO metadata, hero config, event data
    gallery-data.ts     # Gallery image manifest with blur placeholders
    utils.ts            # Shared utilities
public/
  images/
    event-posters/      # Event poster artwork
    events/             # Optimised event photos (WebP)
    og-image.jpg        # OpenGraph social image
    twitter-image.jpg   # Twitter card image
    splash.jpg          # Hero background
```

## Site Copy

All user-facing strings are centralised in `src/lib/copy.ts` behind a typed `SiteCopy` interface. This makes it straightforward to swap in a headless CMS (Sanity, Contentful, etc.) without touching component code.

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start dev server         |
| `npm run build` | Production build         |
| `npm start`     | Serve production build   |
| `npm run lint`  | Run ESLint               |
