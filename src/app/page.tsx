import Link from "next/link";
import Image from "next/image";
import { InstagramIcon } from "../components/icons/instagram-icon";
import { Button, buttonVariants } from "~/components/ui/button";
import { TikTokIcon } from "~/components/icons/tiktok-icon";
import { YouTubeIcon } from "~/components/icons/youtube-icon";
import { TicketIcon } from "~/components/icons/ticket-icon";
import { SoundCloudIcon } from "~/components/icons/soundcloud-icon";
import { Footer } from "~/components/ui/footer";

const meta = {
  instagram: "https://www.instagram.com/eleos_events/",
  tikTok: "https://www.tiktok.com/@eleos_events_ofc",
  youTube: "https://www.youtube.com/@eleos_events",
  hauntedHouse: "/haunted-house",
  soundCloudMixes: "/soundcloud-mixes",
};

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col items-center overflow-hidden bg-background text-white">
      <div className="container flex h-full flex-col items-center px-4">
        <Link href="/">
          <Image
            src="/logo.png"
            width={400}
            height={400}
            alt="elëos events logo"
          />
        </Link>
        <div className="flex w-full flex-col items-center space-y-4 px-4">
          <Link href={meta.hauntedHouse} className="w-full">
            <Button
              title="Haunted House Tickets"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "w-full text-white",
              })}
            >
              <TicketIcon />
              <span className="ml-2">Haunted House Tickets</span>
            </Button>
          </Link>
          <Link href={meta.instagram} className="w-full">
            <Button
              title="Instagram"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "w-full text-white",
              })}
            >
              <InstagramIcon />
              <span className="ml-2">Instagram</span>
            </Button>
          </Link>
          <Link href={meta.tikTok} className="w-full">
            <Button
              title="TikTok"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "w-full text-white",
              })}
            >
              <TikTokIcon />
              <span className="ml-2">TikTok</span>
            </Button>
          </Link>
          <Link href={meta.youTube} className="w-full">
            <Button
              title="YouTube"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "w-full text-white",
              })}
            >
              <YouTubeIcon />
              <span className="ml-2">YouTube</span>
            </Button>
          </Link>
          <Link href={meta.soundCloudMixes} className="w-full">
            <Button
              title="SoundCloud Mixes"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "w-full text-white",
              })}
            >
              <SoundCloudIcon />
              <span className="ml-2">SoundCloud Mixes</span>
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
