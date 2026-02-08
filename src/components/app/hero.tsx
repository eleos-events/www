import { cn, Keyed } from "@/lib/utils";
import { ScrollCue } from "../ui/scroll-cue";
import { Action, ActionProps } from "./generic-action";
import { copy } from "@/lib/copy";

export type HeroProps = {
  title: string;
  titleAlignment?: "left" | "center";
  meta: string;
  actions: Keyed<ActionProps>[];
};

export function Hero({
  title,
  titleAlignment = "center",
  meta,
  actions,
}: HeroProps) {
  const isLeft = titleAlignment === "left";

  return (
    <section className="relative h-[calc(100vh-4rem)] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/splash.jpg')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black" />
      </div>

      {/* Ambient blobs over the image */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute -left-40 bottom-20 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.05] blur-[150px]" />
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-purple-600/[0.04] blur-[150px]" />
      </div>

      {/* Glassmorphic fade at bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] h-32 bg-gradient-to-b from-transparent to-black/60 backdrop-blur-sm [mask-image:linear-gradient(to_bottom,transparent,black)]" />

      <div
        className={cn(
          "relative z-10 container mx-auto px-4 sm:px-6 lg:px-8",
          !isLeft && "text-center"
        )}
      >
        <div className={cn(isLeft && "max-w-4xl")}>
          <p
            className={cn(
              "mb-6 text-sm font-medium uppercase tracking-[0.3em] text-[#00d4ff] animate-fade-in-up",
              isLeft ? "text-left" : "text-center"
            )}
          >
            {copy.home.hero.eyebrow}
          </p>
          <h1
            className={cn(
              "text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase mb-6 leading-tight tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent animate-fade-in-up",
              isLeft ? "text-left" : "text-center"
            )}
            style={{ animationDelay: "100ms" }}
          >
            {title}
          </h1>
          <p
            className={cn(
              "text-xl md:text-2xl text-white/80 mb-8 max-w-2xl font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] animate-fade-in-up",
              !isLeft && "mx-auto"
            )}
            style={{ animationDelay: "200ms" }}
          >
            {meta}
          </p>
          <div
            className={cn(
              "flex flex-col sm:flex-row gap-4 animate-fade-in-up",
              !isLeft && "justify-center"
            )}
            style={{ animationDelay: "300ms" }}
          >
            {actions.map(({ key, ...action }) => (
              <Action key={key} {...action} />
            ))}
          </div>
        </div>
      </div>

      <ScrollCue />
    </section>
  );
}
