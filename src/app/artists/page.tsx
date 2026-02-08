import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { copy } from "@/lib/copy";

const artists = [
  {
    id: 1,
    name: "DJ Name One",
    genre: "Tech House",
    platform: "SoundCloud",
  },
  {
    id: 2,
    name: "DJ Name Two",
    genre: "Deep House",
    platform: "Spotify",
  },
  {
    id: 3,
    name: "DJ Name Three",
    genre: "EDM",
    platform: "SoundCloud",
  },
  {
    id: 4,
    name: "DJ Name Four",
    genre: "Techno",
    platform: "Spotify",
  },
];

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-5xl md:text-6xl font-black uppercase mb-12 text-center">
          {copy.artists.hero.title}
        </h1>
        <p className="text-center text-lg text-[#a0a0a0] mb-12 max-w-2xl mx-auto">
          {copy.artists.hero.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((artist) => (
            <Card key={artist.id} className="hover:border-[#00d4ff] transition-colors">
              <div className="aspect-square bg-gradient-to-br from-[#00d4ff]/20 to-[#0099cc]/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-black text-white/50">{artist.name}</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{artist.name}</CardTitle>
                <CardDescription className="text-[#00d4ff] uppercase text-xs">
                  {artist.genre}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/artists/${artist.id}`}>{copy.artists.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
