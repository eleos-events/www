import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NewsletterSignup } from "@/components/newsletter-signup";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/splash.png')] bg-cover bg-center bg-no-repeat" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase mb-6 leading-tight">
            Join our next event
          </h1>
          <p className="text-xl md:text-2xl text-[#a0a0a0] mb-8 max-w-2xl mx-auto">
            Boston-based bespoke events company producing high-quality, highly produced experiences at relatively low cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/events">View Events</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Get Tickets</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#00d4ff] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#00d4ff] rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-12 text-center">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden hover:border-[#00d4ff] transition-colors">
                <div className="aspect-video bg-gradient-to-br from-[#00d4ff]/20 to-[#0099cc]/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-black text-white/50">Event {i}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Groove Garden {i}</CardTitle>
                  <CardDescription>Date TBA • Boston, MA</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="/events">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
                Bespoke Production Value
              </h2>
              <p className="text-lg text-[#a0a0a0] mb-4">
                Each event has a customised design and unique visual production. We create immersive, 
                high-production experiences that showcase local talent and bring communities together through music.
              </p>
              <p className="text-lg text-[#a0a0a0] mb-6">
                Our mission is to deliver world-class events at accessible prices, making premium 
                experiences available to everyone.
              </p>
              <Button asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
            <div className="aspect-video bg-gradient-to-br from-[#00d4ff]/10 to-[#0099cc]/10 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-black text-white/30">Event Footage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>
  );
}
