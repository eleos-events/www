---
description: Refactor a page or component to match the eleos design language
allowed-tools: Read, Write, Edit, Glob, Grep, Bash(pnpm:*), mcp__playwright__browser_navigate, mcp__playwright__browser_take_screenshot, mcp__playwright__browser_snapshot, mcp__ide__getDiagnostics
---

# Superdesign — eleos Design Language Refactor

You are refactoring a page or component to match the eleos events design system. This is a dark, premium, music-event brand. The aesthetic is: modern glassmorphism, bold typography, colorful gradient accents against deep black, and subtle motion.

## Design Tokens

### Colors

- **Background**: `bg-black` (pure black, `#000000`)
- **Surface**: `bg-white/[0.02]` to `bg-white/[0.06]` (glassmorphic, NOT gray cards)
- **Borders**: `border-white/[0.06]`, hover: `border-white/[0.1]` to `border-white/[0.12]`
- **Text primary**: `text-white`
- **Text secondary**: `text-[#555]` or `text-[#707070]`, hover brightens to `text-[#999]` or `text-[#a0a0a0]`
- **Accent**: `text-[#00d4ff]` (cyan), used sparingly for labels and highlights
- **Brand gradients**: Use Tailwind gradient classes like `from-pink-500 to-purple-600`, `from-cyan-400 to-pink-500`, `from-red-500 to-red-700`, `from-orange-400 to-orange-600`, `from-teal-400 to-emerald-500`

### Typography

- **Headings**: `font-black uppercase tracking-tight` or `tracking-wide`. Use the heading font (Archivo Black via `font-heading` CSS variable).
- **Large headings**: Use `bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent` for a fading gradient text effect.
- **Eyebrow labels**: `text-sm font-medium uppercase tracking-[0.3em] text-[#00d4ff]` — placed above headings for context.
- **Body text**: `text-lg text-[#a0a0a0]` or `text-[#707070]`

### Cards & Surfaces

- **Glass cards**: `rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm`
- **Hover state**: `hover:border-white/[0.1] hover:bg-white/[0.04]`
- **Colored ring on hover**: `ring-1 ring-transparent` + `group-hover:ring-{color}-500/30`
- **Gradient border glow**: An absolutely positioned div behind the card with `bg-gradient-to-r {gradient} opacity-0 blur-sm group-hover:opacity-20`
- **Never use solid gray backgrounds** like `bg-gray-800` or `bg-[#1a1a1a]` for cards. Always use semi-transparent white.

### Backgrounds & Atmosphere

- **Ambient blobs**: Large, absolutely positioned divs with low-opacity colors and heavy blur. Example:
  ```
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-purple-600/[0.03] blur-[150px]" />
    <div className="absolute -right-40 top-60 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.04] blur-[150px]" />
  </div>
  ```
- Use 2-3 blobs per page section with different colors (purple, cyan, pink, teal). Keep opacity between `0.02` and `0.05`.
- The container holding blobs needs `overflow-hidden` on the parent.

### Interactive Elements

- **Buttons**: Use the existing `<Button>` component from `@/components/ui/button`. For custom CTAs, use gradient backgrounds with `rounded-full` pill shape.
- **Links/cards hover**: `transition-all duration-300`, scale with `hover:scale-[1.02]`, icons animate with `group-hover:scale-110 group-hover:rotate-3`.
- **Arrow indicators**: Use `ArrowUpRight` from lucide-react on link cards. Style: `text-[#333] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5`.

### Animation

- **Staggered fade-in**: Use `animate-fade-in-up` class (defined in globals.css) with `style={{ animationDelay: \`${index \* 100}ms\` }}` on repeated items.
- **Transitions**: Always `duration-300` for hovers. Use `duration-500` for opacity/glow effects.
- Keep animations subtle — no bouncing, no sliding from far away. Just gentle fades and micro-interactions.

### Spacing & Layout

- **Page sections**: `py-24` vertical padding
- **Container**: `container mx-auto px-4 sm:px-6 lg:px-8`
- **Max content widths**: `max-w-md` for narrow (forms, link lists), `max-w-2xl` for medium, `max-w-4xl` for wide sections
- **Card gaps**: `gap-3` for tight lists, `gap-4` for grids
- **Section inner spacing**: Cards use `px-6 py-5`

### Icons

- Use `lucide-react` for standard icons.
- For brand icons not in lucide (TikTok, SoundCloud, etc.), use inline SVGs from Simple Icons (https://simpleicons.org).
- Icon badges: `flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br {gradient} shadow-lg` with `h-7 w-7 text-white` icons inside.

## Process

1. **Read the target file(s)** the user specifies.
2. **Read `src/app/contact/page.tsx`** as the reference implementation of this design language.
3. **Identify what needs to change**: Look for old patterns like solid gray backgrounds, missing hover states, lack of ambient blobs, flat typography, missing glassmorphism.
4. **Refactor the component** applying the design tokens above. Preserve all existing functionality and data — only change presentation.
5. **Check for TypeScript errors** using `mcp__ide__getDiagnostics`.
6. **Take a screenshot** of the result in the browser if a dev server is running.
7. **Show the user** the before/after.

## Anti-patterns to Fix

- `bg-[#0a0a0a]` or `bg-[#1a1a1a]` cards → replace with `bg-white/[0.02]` glassmorphism
- `border-[#333333]` → replace with `border-white/[0.06]`
- `bg-gradient-to-b from-black to-[#0a0a0a]` section backgrounds → replace with pure `bg-black` + ambient blobs
- Missing hover states on interactive elements
- Flat headings without gradient text treatment
- No eyebrow labels above section headings
- Static layouts without staggered animations

$ARGUMENTS
