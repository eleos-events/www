import { ArrowRight } from "lucide-react";

export type EmptyProps = {
  title?: string;
  description?: string;
  notifyHref?: string;
};

export function Empty({ title, description, notifyHref }: EmptyProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full py-12 px-4">
      <div className="relative mb-8">
        <svg
          width="180"
          height="180"
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          <circle
            cx="120"
            cy="120"
            r="90"
            stroke="#00d4ff"
            strokeWidth="2.5"
            strokeDasharray="10 6"
            opacity="0.6"
          />
          <circle
            cx="120"
            cy="120"
            r="70"
            stroke="#00d4ff"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
          <circle
            cx="120"
            cy="120"
            r="50"
            stroke="#0099cc"
            strokeWidth="2"
            strokeDasharray="6 4"
            opacity="0.7"
          />
          <circle cx="120" cy="120" r="30" fill="#0099cc" opacity="0.4" />
          <path
            d="M120 80 L120 160 M80 120 L160 120"
            stroke="#0099cc"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M120 100 L120 140 M100 120 L140 120"
            stroke="#00d4ff"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
        <div className="absolute inset-0 bg-[#00d4ff]/10 blur-3xl rounded-full" />
      </div>
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-3 text-center text-white/90 tracking-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-center text-base text-[#a0a0a0] max-w-md mx-auto mb-8">
          {description}
        </p>
      )}
      {notifyHref && (
        <a
          href={notifyHref}
          className="inline-flex items-center text-[#00d4ff] font-medium hover:underline"
        >
          Notify Me When Live
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      )}
    </div>
  );
}
