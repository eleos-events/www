import { cn, Keyed } from "@/lib/utils";
import { ScrollCue } from "../ui/scroll-cue";
import { Action, ActionProps } from "./generic-action";

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
    <section className="relative h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/splash.png')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <div
        className={cn(
          "relative z-10 container mx-auto px-4 sm:px-6 lg:px-8",
          !isLeft && "text-center"
        )}
      >
        <div className={cn(isLeft && "max-w-4xl")}>
          <h1
            className={cn(
              "text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase mb-6 leading-tight tracking-tight",
              isLeft ? "text-left" : "text-center"
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              "text-xl md:text-2xl text-white/90 mb-8 max-w-2xl font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]",
              !isLeft && "mx-auto"
            )}
          >
            {meta}
          </p>
          <div
            className={cn(
              "flex flex-col sm:flex-row gap-4",
              !isLeft && "justify-center"
            )}
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
