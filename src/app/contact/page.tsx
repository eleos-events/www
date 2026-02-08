import Link from "next/link";
import { Instagram, Youtube, ArrowUpRight } from "lucide-react";
import type { ComponentType } from "react";

interface Social {
  name: string;
  handle: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  gradient: string;
  ring: string;
  internal?: boolean;
}

const socials: Social[] = [
  {
    name: "Instagram",
    handle: "@eleos_events",
    href: "https://www.instagram.com/eleos_events/",
    icon: Instagram,
    gradient: "from-amber-500 via-pink-500 to-purple-600",
    ring: "group-hover:ring-pink-500/30",
  },
  {
    name: "TikTok",
    handle: "@eleos_events_ofc",
    href: "https://www.tiktok.com/@eleos_events_ofc",
    icon: TikTokIcon,
    gradient: "from-cyan-400 via-white to-pink-500",
    ring: "group-hover:ring-cyan-400/30",
  },
  {
    name: "YouTube",
    handle: "@eleos_events",
    href: "https://www.youtube.com/@eleos_events",
    icon: Youtube,
    gradient: "from-red-500 to-red-700",
    ring: "group-hover:ring-red-500/30",
  },
  {
    name: "SoundCloud",
    handle: "Mixes & Sets",
    href: "/soundcloud-mixes",
    icon: SoundCloudIcon,
    gradient: "from-orange-400 to-orange-600",
    ring: "group-hover:ring-orange-500/30",
    internal: true,
  },
];

function SocialCard({ social, index }: { social: Social; index: number }) {
  const Icon = social.icon;

  const inner = (
    <>
      {/* Gradient border glow on hover */}
      <div
        className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${social.gradient} opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-20`}
      />
      <div className="relative flex w-full items-center gap-5">
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${social.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
        >
          <Icon className="h-7 w-7 text-white drop-shadow" />
        </div>
        <div className="min-w-0 text-left">
          <p className="text-lg font-bold text-white tracking-tight">
            {social.name}
          </p>
          <p className="truncate text-sm text-[#555] transition-colors duration-300 group-hover:text-[#999]">
            {social.handle}
          </p>
        </div>
        <ArrowUpRight className="ml-auto h-5 w-5 text-[#333] transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </>
  );

  const className = `group relative flex items-center rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-5 ring-1 ring-transparent transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.04] ${social.ring}`;

  const style = {
    animationDelay: `${index * 100}ms`,
  };

  if (social.internal) {
    return (
      <Link
        href={social.href}
        className={`${className} animate-fade-in-up`}
        style={style}
      >
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} animate-fade-in-up`}
      style={style}
    >
      {inner}
    </a>
  );
}

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-purple-600/[0.03] blur-[150px]" />
        <div className="absolute -right-40 top-60 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.04] blur-[150px]" />
        <div className="absolute left-1/3 bottom-0 h-[400px] w-[400px] rounded-full bg-pink-500/[0.03] blur-[150px]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-md">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#00d4ff]">
              Find us everywhere
            </p>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              Let&apos;s
              <br />
              Connect
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {socials.map((social, i) => (
              <SocialCard key={social.name} social={social} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.4a8.16 8.16 0 0 0 4.77 1.53V7.48a4.85 4.85 0 0 1-1.01-.79Z" />
    </svg>
  );
}

function SoundCloudIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M23.999 14.165c-.052 1.796-1.612 3.169-3.4 3.169h-8.18a.68.68 0 0 1-.675-.683V7.862a.747.747 0 0 1 .452-.724s.75-.513 2.333-.513a5.364 5.364 0 0 1 2.763.755 5.433 5.433 0 0 1 2.57 3.54c.282-.08.574-.121.868-.12.884 0 1.73.358 2.347.992s.948 1.49.922 2.373ZM10.721 8.421c.247 2.98.427 5.697 0 8.672a.264.264 0 0 1-.53 0c-.395-2.946-.22-5.718 0-8.672a.264.264 0 0 1 .53 0ZM9.072 9.448c.285 2.659.37 4.986-.006 7.655a.277.277 0 0 1-.55 0c-.331-2.63-.256-5.02 0-7.655a.277.277 0 0 1 .556 0Zm-1.663-.257c.27 2.726.39 5.171 0 7.904a.266.266 0 0 1-.532 0c-.38-2.69-.257-5.21 0-7.904a.266.266 0 0 1 .532 0Zm-1.647.77a26.108 26.108 0 0 1-.008 7.147.272.272 0 0 1-.542 0 27.955 27.955 0 0 1 0-7.147.275.275 0 0 1 .55 0Zm-1.67 1.769c.421 1.865.228 3.5-.029 5.388a.257.257 0 0 1-.514 0c-.21-1.858-.398-3.549 0-5.389a.272.272 0 0 1 .543 0Zm-1.655-.273c.388 1.897.26 3.508-.01 5.412-.026.28-.514.283-.54 0-.244-1.878-.347-3.54-.01-5.412a.283.283 0 0 1 .56 0Zm-1.668.911c.4 1.268.257 2.292-.026 3.572a.257.257 0 0 1-.514 0c-.241-1.262-.354-2.312-.023-3.572a.283.283 0 0 1 .563 0Z" />
    </svg>
  );
}
