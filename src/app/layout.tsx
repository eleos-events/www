import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "elëos events | Bespoke Live Music Events in Boston",
  description:
    "Boston-based bespoke events company producing one-off live-music parties that showcase local talent. High-quality, highly produced experiences at relatively low cost.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${archivoBlack.variable} ${inter.variable} antialiased bg-black text-white`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
