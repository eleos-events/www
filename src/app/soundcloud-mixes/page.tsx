import Image from "next/image";
import Link from "next/link";
import { Footer } from "~/components/ui/footer";
import { SoundCloudEmbed } from "~/components/ui/soundcloud-embed";

const mixes = [
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1831725351&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false",
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1628982222&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false",
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1583740787&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false",
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1537343389&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false",
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1508423254&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false",
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1450328572&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false",
];

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col items-center bg-background text-white">
      <div
        className="container flex flex-grow flex-col items-center px-4"
        style={{ maxHeight: "calc(100% - 4rem)" }}
      >
        <Link href="/">
          <Image
            src="/logo.png"
            width={100}
            height={100}
            alt="elëos events logo"
          />
        </Link>
        <div className="flex h-full w-full flex-col items-center space-y-4 overflow-scroll px-4 pb-4">
          {mixes.map((mix, index) => (
            <SoundCloudEmbed key={index} url={mix} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
