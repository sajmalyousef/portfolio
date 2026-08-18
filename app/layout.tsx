import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { profile, GA_MEASUREMENT_ID } from "@/lib/content";

const sans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.role}`,
  description: profile.thesis,
  openGraph: {
    title: `${profile.name} · Product Manager`,
    description: profile.thesis,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen">
        <Nav />
        <main className="relative z-[2]">{children}</main>
        <Footer />
        <Analytics gaId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
