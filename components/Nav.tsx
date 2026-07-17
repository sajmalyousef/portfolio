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
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-text-muted transition-colors hover:text-accent"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>
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
