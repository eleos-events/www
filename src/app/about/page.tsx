import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-5xl md:text-6xl font-black uppercase mb-12 text-center">
          About Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black uppercase">
              Our Philosophy
            </h2>
            <p className="text-lg text-[#a0a0a0]">
              elëos events is a Boston-based bespoke events company producing one-off 
              live-music parties that showcase local talent. Our goal is to deliver 
              high-quality, highly produced experiences at relatively low cost.
            </p>
            <p className="text-lg text-[#a0a0a0]">
              Each event has a customised design and unique visual production. We believe 
              that every night should be a bespoke experience, with different visual 
              production and immersive environments that connect people through dance and music.
            </p>
            <p className="text-lg text-[#a0a0a0]">
              We pioneer the local music scene by providing a platform for emerging artists 
              while maintaining the production quality of world-class venues. Our multi-room 
              experiences and bespoke visual production create unforgettable moments that 
              bring communities together.
            </p>
          </div>
          <div className="aspect-video bg-gradient-to-br from-[#00d4ff]/10 to-[#0099cc]/10 rounded-lg flex items-center justify-center">
            <span className="text-2xl font-black text-white/30">Event Footage</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-black uppercase mb-4">Bespoke Design</h3>
              <p className="text-[#a0a0a0]">
                Every event is uniquely designed with custom visuals and production that 
                match the theme and atmosphere.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-black uppercase mb-4">Local Talent</h3>
              <p className="text-[#a0a0a0]">
                We showcase the best local DJs and performers, giving them a platform 
                to shine on a world-class stage.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-black uppercase mb-4">Accessible Pricing</h3>
              <p className="text-[#a0a0a0]">
                Premium experiences at accessible prices. We believe everyone deserves 
                access to high-quality events.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-8 text-center">
            What Makes Us Different
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-[#00d4ff] pl-6">
              <h3 className="text-xl font-semibold mb-2">Immersive Experiences</h3>
              <p className="text-[#a0a0a0]">
                Our events are designed to be fully immersive. From the moment you enter, 
                you're transported into a world of music, light, and energy.
              </p>
            </div>
            <div className="border-l-4 border-[#ff6b35] pl-6">
              <h3 className="text-xl font-semibold mb-2">Connection Through Dance</h3>
              <p className="text-[#a0a0a0]">
                We believe in the power of dance to bring people together. Our events 
                create spaces where connections are forged on the dance floor.
              </p>
            </div>
            <div className="border-l-4 border-[#00d4ff] pl-6">
              <h3 className="text-xl font-semibold mb-2">Pioneering Music</h3>
              <p className="text-[#a0a0a0]">
                We're always pushing boundaries, showcasing new sounds and supporting 
                artists who are shaping the future of electronic music.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

