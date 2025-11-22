export type EmptyProps = {
  title?: string;
  description?: string;
};

export function Empty({ title, description }: EmptyProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full py-8 px-4">
      <div className="relative mb-6">
        <svg
          width="180"
          height="180"
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          {/* Outer dashed circle - teal */}
          <circle
            cx="120"
            cy="120"
            r="90"
            stroke="#00d4ff"
            strokeWidth="2.5"
            strokeDasharray="10 6"
            opacity="0.6"
          />
          {/* Middle solid circle - teal */}
          <circle
            cx="120"
            cy="120"
            r="70"
            stroke="#00d4ff"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
          {/* Inner dashed circle - dark blue */}
          <circle
            cx="120"
            cy="120"
            r="50"
            stroke="#0099cc"
            strokeWidth="2"
            strokeDasharray="6 4"
            opacity="0.7"
          />
          {/* Center solid circle - dark blue */}
          <circle cx="120" cy="120" r="30" fill="#0099cc" opacity="0.4" />
          {/* Crosshair - dark blue */}
          <path
            d="M120 80 L120 160 M80 120 L160 120"
            stroke="#0099cc"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          {/* Inner crosshair accent */}
          <path
            d="M120 100 L120 140 M100 120 L140 120"
            stroke="#00d4ff"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-[#00d4ff]/10 blur-3xl rounded-full" />
      </div>
      {title && (
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-3 text-center text-white tracking-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-center text-base text-[#a0a0a0] max-w-md mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
