import { Analytics } from "@vercel/analytics/next";

import { Archivo_Black, Inter } from "next/font/google";
import "@fontsource/aileron/400.css";
import "@fontsource/aileron/700.css";
import "@fontsource/aileron/800.css";
import "@fontsource/aileron/400-italic.css";
import "@fontsource/aileron/700-italic.css";
import "@fontsource/aileron/800-italic.css";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  variable: "--font-archivo-black",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { config } from "@/lib/config";
import { Providers } from "./providers";

export const metadata = config.seo;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <Analytics />
      <body
        className={`${archivoBlack.variable} ${inter.variable} antialiased bg-black text-white`}
      >
        <Providers>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
