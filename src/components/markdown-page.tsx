import Link from "next/link";
import type { ReactNode } from "react";

type Token =
  | { type: "h1"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; children: ReactNode[] }
  | { type: "ul"; items: ReactNode[][] };

function inlineMarkdown(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let match;
  let key = 0;
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      parts.push(text.slice(last, match.index));
    }
    if (match[1]) {
      parts.push(
        <strong key={key++} className="text-white font-semibold">
          {match[1]}
        </strong>
      );
    } else if (match[2] && match[3]) {
      const href = match[3];
      const isExternal = href.startsWith("http");
      parts.push(
        isExternal ? (
          <a
            key={key++}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00d4ff] hover:underline"
          >
            {match[2]}
          </a>
        ) : (
          <Link key={key++} href={href} className="text-[#00d4ff] hover:underline">
            {match[2]}
          </Link>
        )
      );
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) {
    parts.push(text.slice(last));
  }
  return parts;
}

function parseMarkdown(source: string): Token[] {
  const lines = source.split("\n");
  const tokens: Token[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("# ")) {
      tokens.push({ type: "h1", text: line.slice(2) });
      i++;
    } else if (line.startsWith("## ")) {
      tokens.push({ type: "h2", text: line.slice(3) });
      i++;
    } else if (line.startsWith("### ")) {
      tokens.push({ type: "h3", text: line.slice(4) });
      i++;
    } else if (line.startsWith("- ")) {
      const items: ReactNode[][] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(inlineMarkdown(lines[i].slice(2)));
        i++;
      }
      tokens.push({ type: "ul", items });
    } else if (line.trim() === "") {
      i++;
    } else {
      // Paragraph — collect contiguous non-empty, non-special lines
      let text = line;
      i++;
      while (
        i < lines.length &&
        lines[i].trim() !== "" &&
        !lines[i].startsWith("#") &&
        !lines[i].startsWith("- ")
      ) {
        text += " " + lines[i];
        i++;
      }
      tokens.push({ type: "p", children: inlineMarkdown(text) });
    }
  }

  return tokens;
}

export function MarkdownPage({ source }: { source: string }) {
  const tokens = parseMarkdown(source);

  return (
    <div className="min-h-screen bg-black">
      <section className="relative overflow-hidden bg-black pt-16 pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-purple-600/[0.04] blur-[150px]" />
          <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.05] blur-[150px]" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-6">
            {tokens.map((token, i) => {
              switch (token.type) {
                case "h1":
                  return (
                    <h1
                      key={i}
                      className="text-4xl md:text-6xl font-black uppercase tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent mb-2 animate-fade-in-up"
                    >
                      {token.text}
                    </h1>
                  );
                case "h2":
                  return (
                    <h2
                      key={i}
                      className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mt-10 mb-2"
                    >
                      {token.text}
                    </h2>
                  );
                case "h3":
                  return (
                    <h3
                      key={i}
                      className="text-lg font-bold text-white mt-6 mb-1"
                    >
                      {token.text}
                    </h3>
                  );
                case "p":
                  return (
                    <p key={i} className="text-[#a0a0a0] leading-relaxed">
                      {token.children}
                    </p>
                  );
                case "ul":
                  return (
                    <ul key={i} className="space-y-2 pl-1">
                      {token.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-[#a0a0a0] leading-relaxed"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00d4ff]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
              }
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
