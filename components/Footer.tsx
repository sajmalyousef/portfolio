import Link from "next/link";
import { profile } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-[2] border-t border-border bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-4xl font-bold text-text sm:text-5xl">
            Get in touch.
          </h2>
          <a
            href={profile.links.email.startsWith("http") ? profile.links.email : `mailto:${profile.links.email}`}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-bg transition-transform hover:scale-[1.03]"
          >
            {profile.links.email}
          </a>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-sm text-text-dim sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {profile.name}.</p>
          <div className="flex gap-6">
            <a href={profile.links.linkedin} className="link-sweep transition-colors hover:text-text">
              LinkedIn
            </a>
            <a href={profile.links.github} className="link-sweep transition-colors hover:text-text">
              GitHub
            </a>
            <a href={profile.links.resume} className="link-sweep transition-colors hover:text-text">
              Résumé
            </a>
            <Link href="/about" className="link-sweep transition-colors hover:text-text">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
