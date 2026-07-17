"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-text"
        >
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link href="/#work" className="link-sweep hidden text-text-muted transition-colors hover:text-text sm:inline">
            Work
          </Link>
          <Link href="/about" className="link-sweep hidden text-text-muted transition-colors hover:text-text sm:inline">
            About
          </Link>
          <a
            href={profile.links.email.startsWith("http") ? profile.links.email : `mailto:${profile.links.email}`}
            className="rounded-full border border-border-strong px-4 py-1.5 font-medium text-text transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
