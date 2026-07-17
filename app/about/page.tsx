import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile, about, caseStudies } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `About — ${profile.name}`,
  description: profile.thesis,
};

export default function AboutPage() {
  return (
    <div className="relative">
      <header className="relative overflow-hidden border-b border-border">
        <div className="glow left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2" />
        <div className="relative mx-auto max-w-3xl px-6 pb-16 pt-40">
          <p className="label mb-5">The story</p>
          <h1 className="font-display text-5xl font-bold text-text sm:text-6xl">
            From payments to{" "}
            <span className="text-accent">what&rsquo;s next</span>.
          </h1>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-20">
        <Reveal>
          <div className="space-y-6">
            {about.intro.map((p, i) => (
              <p key={i} className="text-xl leading-relaxed text-text-muted">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 space-y-6">
            {about.throughline.map((p, i) => (
              <p key={i} className="text-xl leading-relaxed text-text-muted">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        {/* Values */}
        <Reveal>
          <div className="mt-20">
            <p className="label mb-8">How I work</p>
            <div className="space-y-px overflow-hidden rounded-2xl border border-border">
              {about.values.map((v) => (
                <div key={v.title} className="bg-bg-card p-7">
                  <h3 className="font-display text-xl font-bold text-text">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-text-muted">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Links */}
        <Reveal>
          <div className="mt-20 flex flex-wrap gap-4">
            {[
              { label: "LinkedIn", href: profile.links.linkedin },
              { label: "GitHub", href: profile.links.github },
              { label: "Résumé", href: profile.links.resume },
              {
                label: "Email",
                href: profile.links.email.startsWith("http")
                  ? profile.links.email
                  : `mailto:${profile.links.email}`,
              },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 font-medium text-text transition-colors hover:border-accent hover:text-accent"
              >
                {l.label} <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </Reveal>

        {/* Back to work */}
        <Reveal>
          <div className="mt-20 border-t border-border pt-10">
            <p className="text-text-muted">
              Or jump straight into the work —{" "}
              <Link href="/#work" className="link-sweep text-accent">
                {caseStudies.length} case studies
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
