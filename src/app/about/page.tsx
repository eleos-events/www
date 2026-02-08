import { Palette, Music, Ticket, Sparkles, Heart, Radio } from "lucide-react";

const pillars = [
  {
    title: "Bespoke Design",
    description:
      "Every event is uniquely designed with custom visuals and production that match the theme and atmosphere.",
    icon: Palette,
    gradient: "from-pink-500 to-purple-600",
  },
  {
    title: "Local Talent",
    description:
      "We showcase the best local DJs and performers, giving them a platform to shine on a world-class stage.",
    icon: Music,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    title: "Accessible Pricing",
    description:
      "Premium experiences at accessible prices. We believe everyone deserves access to high-quality events.",
    icon: Ticket,
    gradient: "from-teal-400 to-emerald-500",
  },
];

const differentiators = [
  {
    title: "Immersive Experiences",
    description:
      "Our events are designed to be fully immersive. From the moment you enter, you're transported into a world of music, light, and energy.",
    icon: Sparkles,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    title: "Connection Through Dance",
    description:
      "We believe in the power of dance to bring people together. Our events create spaces where connections are forged on the dance floor.",
    icon: Heart,
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Pioneering Music",
    description:
      "We're always pushing boundaries, showcasing new sounds and supporting artists who are shaping the future of electronic music.",
    icon: Radio,
    gradient: "from-orange-400 to-orange-600",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero header */}
      <section className="relative overflow-hidden bg-black pt-16 pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-purple-600/[0.04] blur-[150px]" />
          <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.05] blur-[150px]" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#00d4ff] animate-fade-in-up">
            Who we are
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            About Us
          </h1>
          <p className="text-lg md:text-xl text-[#a0a0a0] max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Boston-based bespoke events company producing one-off live-music
            parties that showcase local talent.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative overflow-hidden bg-black py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-teal-500/[0.03] blur-[150px]" />
          <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-pink-500/[0.03] blur-[150px]" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#00d4ff]">
              Our philosophy
            </p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent mb-10">
              Every night should be
              <br />a bespoke experience
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-[#a0a0a0]">
                Each event has a customised design and unique visual production.
                We believe that every night should be a bespoke experience, with
                different visual production and immersive environments that
                connect people through dance and music.
              </p>
              <p className="text-lg text-[#a0a0a0]">
                We pioneer the local music scene by providing a platform for
                emerging artists while maintaining the production quality of
                world-class venues. Our multi-room experiences and bespoke visual
                production create unforgettable moments that bring communities
                together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative overflow-hidden bg-black py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-600/[0.03] blur-[150px]" />
          <div className="absolute -right-40 top-60 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.04] blur-[150px]" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#00d4ff]">
              What we deliver
            </p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              Built on three pillars
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm px-6 py-8 transition-[border-color,background-color] duration-300 hover:border-white/[0.1] hover:bg-white/[0.04] animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient glow on hover */}
                  <div
                    className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${pillar.gradient} opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-20`}
                  />
                  <div className="relative">
                    <div
                      className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${pillar.gradient} shadow-lg transition-transform duration-300 backface-hidden group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-black uppercase mb-3 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-[#a0a0a0]">{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="relative overflow-hidden bg-black py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-pink-500/[0.04] blur-[150px]" />
          <div className="absolute -left-40 top-40 h-[400px] w-[400px] rounded-full bg-teal-500/[0.03] blur-[150px]" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#00d4ff]">
              The difference
            </p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              What makes us different
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative flex items-start gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm px-6 py-5 transition-[border-color,background-color] duration-300 hover:border-white/[0.1] hover:bg-white/[0.04] animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-20`}
                  />
                  <div
                    className={`relative mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg transition-transform duration-300 backface-hidden group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="relative">
                    <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[#a0a0a0]">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
