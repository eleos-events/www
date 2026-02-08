import { Palette, Music, Ticket, Sparkles, Heart, Radio } from "lucide-react";
import { copy } from "@/lib/copy";

const pillarIcons = [Palette, Music, Ticket];
const pillarGradients = [
  "from-pink-500 to-purple-600",
  "from-cyan-400 to-blue-500",
  "from-teal-400 to-emerald-500",
];

const differentiatorIcons = [Sparkles, Heart, Radio];
const differentiatorGradients = [
  "from-cyan-400 to-blue-500",
  "from-pink-500 to-rose-600",
  "from-orange-400 to-orange-600",
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Page-level ambient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-purple-600/[0.04] blur-[150px]" />
        <div className="absolute -right-40 top-[15%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.05] blur-[150px]" />
        <div className="absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-teal-500/[0.03] blur-[150px]" />
        <div className="absolute -left-40 top-[45%] h-[400px] w-[400px] rounded-full bg-pink-500/[0.03] blur-[150px]" />
        <div className="absolute -left-40 top-[60%] h-[500px] w-[500px] rounded-full bg-purple-600/[0.03] blur-[150px]" />
        <div className="absolute -right-40 top-[70%] h-[400px] w-[400px] rounded-full bg-cyan-500/[0.04] blur-[150px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-pink-500/[0.04] blur-[150px]" />
        <div className="absolute -left-40 bottom-[10%] h-[400px] w-[400px] rounded-full bg-teal-500/[0.03] blur-[150px]" />
      </div>

      {/* Hero header */}
      <section className="relative pt-16 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#00d4ff] animate-fade-in-up">
            {copy.about.hero.eyebrow}
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            {copy.about.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-[#a0a0a0] max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            {copy.about.hero.description}
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#00d4ff]">
              {copy.about.philosophy.eyebrow}
            </p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent mb-10 whitespace-pre-line">
              {copy.about.philosophy.title}
            </h2>
            <div className="space-y-6">
              {copy.about.philosophy.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-lg text-[#a0a0a0]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#00d4ff]">
              {copy.about.pillars.eyebrow}
            </p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              {copy.about.pillars.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {copy.about.pillars.items.map((pillar, index) => {
              const Icon = pillarIcons[index];
              const gradient = pillarGradients[index];
              return (
                <div
                  key={pillar.title}
                  className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm px-6 py-8 transition-[border-color,background-color] duration-300 hover:border-white/[0.1] hover:bg-white/[0.04] animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient glow on hover */}
                  <div
                    className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${gradient} opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-20`}
                  />
                  <div className="relative">
                    <div
                      className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-lg transition-transform duration-300 backface-hidden group-hover:scale-110 group-hover:rotate-3`}
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
      <section className="relative py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#00d4ff]">
              {copy.about.differentiators.eyebrow}
            </p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              {copy.about.differentiators.title}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {copy.about.differentiators.items.map((item, index) => {
              const Icon = differentiatorIcons[index];
              const gradient = differentiatorGradients[index];
              return (
                <div
                  key={item.title}
                  className="group relative flex items-start gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm px-6 py-5 transition-[border-color,background-color] duration-300 hover:border-white/[0.1] hover:bg-white/[0.04] animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${gradient} opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-20`}
                  />
                  <div
                    className={`relative mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-lg transition-transform duration-300 backface-hidden group-hover:scale-110 group-hover:rotate-3`}
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
