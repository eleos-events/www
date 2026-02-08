# elëos events — Website Summary

> Boston-based bespoke events company producing one-off live-music parties that showcase local talent. High-quality, highly produced experiences at relatively low cost.

**URL:** https://eleos.events
**Stack:** Next.js 16, React 19, Tailwind CSS 4, Resend (email), Posh (ticketing)

---

## Site Map

| Route | Page |
|---|---|
| `/` | Home |
| `/events` | Events listing |
| `/about` | About Us |
| `/gallery` | Photo gallery |
| `/artists` | Local talent showcase |
| `/blog` | News & Blog |
| `/contact` | Social links / Connect |
| `/privacy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `/unsubscribe` | Newsletter unsubscribe |

---

## Page-by-Page Copy

### Global

- **Brand name:** elëos events
- **Nav items:** Home, Events, About, Gallery, Contact
- **Nav CTA button:** "Get Tickets" → `/contact`
- **Footer:** "© {year} elëos events. All rights reserved." | Privacy Policy | Terms

---

### Home (`/`)

**Hero**
- Eyebrow: "Live music experiences"
- Headline: "Join our next event"
- Description: "Boston-based bespoke events company producing high-quality, highly produced experiences that showcase local talent."
- CTA: "View Events" → `/events`
- Background: Full-bleed image (`/images/splash.jpg`) with gradient overlay

**Upcoming Events**
- Section title: "Upcoming Events"
- Horizontal carousel of event cards
- CTA: "View All Events"

**Newsletter Signup**
- Eyebrow: "Stay in the loop"
- Headline: "Never miss an event"
- Description: "Sign up for announcements and presales. Be the first to know about our next party."
- Fields: Name, Email, Phone (Optional)
- Consent: "I consent to receive updates and marketing communications"
- Button states: "Sign Up" → "Signing up..." → "Subscribed!"
- Success title: "You're on the list"
- Success description: "We'll let you know when something big is coming. See you on the dance floor."
- Error (generic): "Something went wrong. Please try again."
- Error (network): "Network error. Please check your connection and try again."

---

### Events (`/events`)

**Header**
- Eyebrow: "Our experiences"
- Headline: "Events"

**When no upcoming events:**
- Description: "Our curators are finalizing the next set of one-off experiences. Sign up to be the first to know when tickets drop."
- CTA: "Get notified" → newsletter section

**Upcoming events section**
- Eyebrow: "What's next"
- Title: "Upcoming Events"

**Past events section**
- Eyebrow: "Looking back"
- Title: "Past Events"

**Event list empty state**
- Title: "More magic on the way"
- Description: "Our curators are finalizing the next set of one-off experiences. Join the newsletter to be the first to know."
- CTA: "Notify Me When Live"

---

### About (`/about`)

**Hero**
- Eyebrow: "Who we are"
- Headline: "About Us"
- Description: "Boston-based bespoke events company producing one-off live-music parties that showcase local talent."

**Philosophy**
- Eyebrow: "Our philosophy"
- Headline: "Every night should be a bespoke experience"
- Paragraph 1: "Each event has a customised design and unique visual production. We believe that every night should be a bespoke experience, with different visual production and immersive environments that connect people through dance and music."
- Paragraph 2: "We pioneer the local music scene by providing a platform for emerging artists while maintaining the production quality of world-class venues. Our multi-room experiences and bespoke visual production create unforgettable moments that bring communities together."

**Three Pillars**
- Eyebrow: "What we deliver"
- Headline: "Built on three pillars"
  1. **Bespoke Design** — "Every event is uniquely designed with custom visuals and production that match the theme and atmosphere."
  2. **Local Talent** — "We showcase the best local DJs and performers, giving them a platform to shine on a world-class stage."
  3. **Accessible Pricing** — "Premium experiences at accessible prices. We believe everyone deserves access to high-quality events."

**Differentiators**
- Eyebrow: "The difference"
- Headline: "What makes us different"
  1. **Immersive Experiences** — "Our events are designed to be fully immersive. From the moment you enter, you're transported into a world of music, light, and energy."
  2. **Connection Through Dance** — "We believe in the power of dance to bring people together. Our events create spaces where connections are forged on the dance floor."
  3. **Pioneering Music** — "We're always pushing boundaries, showcasing new sounds and supporting artists who are shaping the future of electronic music."

---

### Gallery (`/gallery`)

- Eyebrow: "Captured moments"
- Headline: "Gallery"
- Filter: "All" + dynamic event names (currently "Groove Garden", "Haunted House")
- Content: 9 Groove Garden photos, 7 Haunted House photos (masonry grid)

---

### Artists (`/artists`)

- Headline: "Local Talent"
- Description: "Discover the talented DJs and performers who bring our events to life. Each artist brings their unique sound and energy to create unforgettable experiences."
- CTA per card: "Listen"
- Placeholder artists:
  1. DJ Name One — Tech House
  2. DJ Name Two — Deep House
  3. DJ Name Three — EDM
  4. DJ Name Four — Techno

---

### Blog (`/blog`)

- Headline: "News & Blog"
- Filters: All, Announcement, Recap, Interview, Insights
- CTA per card: "Read More"
- Placeholder posts:
  1. "Groove Garden Recap: A Night to Remember" (recap, Aug 20 2024) — "Our latest event brought together the best local talent for an unforgettable night of tech house."
  2. "Announcing Our Next Event: Haunted House" (announcement, Sep 15 2024) — "Get ready for our Halloween special featuring spooky beats and haunting melodies."
  3. "Artist Spotlight: DJ Name One" (interview, Aug 10 2024) — "We sat down with one of our featured artists to discuss their journey and sound."
  4. "The Boston Electronic Music Scene" (insights, Jul 25 2024) — "Exploring the vibrant electronic music community in Boston and its growing influence."

---

### Contact (`/contact`)

- Eyebrow: "Find us everywhere"
- Headline: "Let's Connect"
- Socials:
  1. **Instagram** — @eleos_events → https://www.instagram.com/eleos_events/
  2. **TikTok** — @eleos_events_ofc → https://www.tiktok.com/@eleos_events_ofc
  3. **YouTube** — @eleos_events → https://www.youtube.com/@eleos_events
  4. **SoundCloud** — Mixes & Sets → https://on.soundcloud.com/7Uzed1qsUASOLBeIg9

---

### Unsubscribe (`/unsubscribe`)

- Loading: "Processing your request..."
- Success title: "Unsubscribed"
- Success description: "You've been removed from our mailing list. You won't receive any more emails from us."
- Error title: "Something went wrong"
- Error description: "We couldn't process your unsubscribe request. Please try again or contact us directly."

---

## Current Events Data

| Event | Date | Location | Ticketing |
|---|---|---|---|
| Groove Garden | Aug 2, 2024 | Cambridge, MA | https://posh.vip/e/groove-garden-5 |
| Haunted House | Nov 1, 2025 | Cambridge, MA | https://posh.vip/e/haunted-house-8 |

Both events use the CTA label "View Event".

---

## SEO / Meta

- **Title:** elëos events
- **Description:** Boston-based bespoke events company producing one-off live-music parties that showcase local talent. High-quality, highly produced experiences at relatively low cost.
- **OG image alt:** "elëos events — Bespoke Live Music Events in Boston"
- **OG type:** website
- **Locale:** en_US
- **Privacy page title:** "Privacy Policy — elëos events"
- **Terms page title:** "Terms & Conditions — elëos events"

---

## Privacy Policy (last updated Feb 2026)

eleos events ("we", "us", or "our") operates the website eleos.events. This Privacy Policy explains how we collect, use, and protect your information when you visit our site or attend our events.

**Information We Collect**

*Information you provide:*
- Newsletter sign-up: name, email address, and optional phone number when you subscribe to our mailing list.
- Contact & enquiries: any information you share when reaching out to us through social channels or email.
- Event attendance: ticket purchase details processed by our third-party ticketing partners (e.g. Posh).

*Information collected automatically:*
- Usage data: pages visited, time on site, referring URL, and browser/device type via standard server logs.
- Cookies: we use essential cookies to keep the site functional. We do not use advertising or tracking cookies.

**How We Use Your Information**
- To send event announcements and presale access you opted in to receive.
- To improve our website and event experiences.
- To respond to your questions or requests.

We will never sell, rent, or trade your personal information to third parties.

**Third-Party Services**
- Ticketing platforms (e.g. Posh) for event ticket sales and entry management.
- Email delivery services for sending newsletters and announcements.

Each operates under their own privacy policies, which we encourage you to review.

**Data Retention:** We keep your information only as long as necessary to provide the services you signed up for. You can request deletion of your data at any time by contacting us.

**Your Rights:** Unsubscribe from our newsletter via the link in any email. Request access to or deletion of your personal data. Contact us at the channels listed on our contact page.

**Security:** We take reasonable measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.

**Changes to This Policy:** We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.

**Contact:** Reach out through our contact page at eleos.events/contact.

---

## Terms & Conditions (last updated Feb 2026)

These Terms & Conditions ("Terms") govern your use of the eleos.events website and your attendance at events produced by eleos events ("we", "us", or "our"). By using our site or purchasing tickets to our events, you agree to these Terms.

**Event Attendance**
- Age requirements: some events may have age restrictions. It is your responsibility to check event details before purchasing a ticket.
- Behaviour: we are committed to creating safe, inclusive spaces. We reserve the right to refuse entry or remove any attendee whose behaviour is disruptive, threatening, or violates our code of conduct.
- Assumption of risk: live events involve inherent risks including loud music, low lighting, and crowded spaces. By attending, you acknowledge and accept these risks.

**Tickets & Refunds**
- Tickets are sold through third-party platforms (e.g. Posh). Purchases are subject to the ticketing platform's own terms and refund policies.
- We will make reasonable efforts to communicate any event changes, postponements, or cancellations as early as possible.
- In the event of a cancellation by us, refunds will be processed through the original ticketing platform.

**Intellectual Property**
- All content on this website, including text, graphics, logos, images, and design, is the property of eleos events and is protected by applicable intellectual property laws.
- You may not reproduce, distribute, or create derivative works from our content without written permission.

**Photography & Media**
- Events may be photographed and/or recorded for promotional purposes.
- By attending an event, you consent to the possibility of appearing in photos or videos that may be used on our website, social media, or marketing materials.
- If you would like an image of yourself removed, contact us and we will make reasonable efforts to accommodate your request.

**Newsletter & Communications**
- By subscribing to our newsletter, you agree to receive event announcements, presale information, and marketing communications.
- You can unsubscribe at any time using the link provided in each email.

**Limitation of Liability**
- Our website and event information are provided "as is". We make no warranties regarding the accuracy or completeness of event details, and information is subject to change.
- To the maximum extent permitted by law, eleos events shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or attendance at our events.

**Third-Party Links:** Our website may contain links to external sites (social media, ticketing platforms, etc.). We are not responsible for the content or privacy practices of those sites.

**Changes to These Terms:** We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated date. Continued use of our site after changes constitutes acceptance of the revised Terms.

**Governing Law:** These Terms are governed by and construed in accordance with the laws of the Commonwealth of Massachusetts, without regard to its conflict of law provisions.

**Contact:** Reach out through our contact page at eleos.events/contact.

---

## Design Notes

- **Palette:** Black background, white/gray text, cyan (#00d4ff) accent, gradient cards (pink/purple, cyan/blue, teal/emerald, orange)
- **Typography:** Archivo Black (headlines), Aileron (subheadings), Inter (body)
- **Visual:** Ambient gradient blobs per page, hover glow effects, fade-in-up animations, full-bleed hero image on home
- **Copy management:** All strings centralized in `src/lib/copy.ts` (CMS-ready `SiteCopy` interface)
