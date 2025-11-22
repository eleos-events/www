import { cn, Keyed } from "@/lib/utils";
import { ScrollCue } from "../ui/scroll-cue";
import { Action, ActionProps } from "./generic-action";

export type HeroProps = {
  title: string;
  titleAlignment?: "left" | "center" | "right";
  meta: string;
  actions: Keyed<ActionProps>[];
};

export function Hero({
  title,
  titleAlignment = "center",
  meta,
  actions,
}: HeroProps) {
  return (
    <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/splash.png')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className={cn(
            "text-5xl md:text-7xl lg:text-8xl font-black uppercase mb-6 leading-tight",
            titleAlignment === "left" && "text-left",
            titleAlignment === "center" && "text-center",
            titleAlignment === "right" && "text-right"
          )}
        >
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          {meta}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {actions.map(({ key, ...action }) => (
            <Action key={key} {...action} />
          ))}
        </div>
      </div>

      <ScrollCue />
    </section>
  );
}
