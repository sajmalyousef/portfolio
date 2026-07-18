import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile, caseStudies, aiProjects, about } from "@/lib/content";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { StatCounter } from "@/components/StatCounter";
import { WorkCard } from "@/components/WorkCard";

export default function Home() {
  const sorted = [...caseStudies].sort((a, b) => a.order - b.order);

  return (
    <>
      <Hero />

      {/* Stat band */}
      <section className="border-y border-border bg-bg-elevated">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {profile.heroStats.map((s) => (
            <div key={s.label} className="py-10 sm:px-8 sm:first:pl-0">
              <div className="font-display text-4xl font-bold text-accent sm:text-5xl">
                <StatCounter value={s.value} />
              </div>
              <p className="mt-2 text-sm text-text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Credibility strip */}
      <section className="border-b border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:gap-10">
          <span className="text-xs uppercase tracking-[0.2em] text-text-dim">
            Built and studied at
          </span>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {profile.companies.map((c) => (
              <span
                key={c}
                className="font-display text-base font-medium text-text-muted"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="label mb-3">Selected work</p>
              <h2 className="font-display text-4xl font-bold text-text sm:text-5xl">
                The work.
              </h2>
            </div>
            <p className="max-w-sm text-text-muted">
              A summary of what I have shipped across payments, checkout, and
              credit at Cashfree, plus an open-source project of my own.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {sorted.map((study, i) => (
            <Reveal key={study.slug} delay={(i % 2) * 0.08}>
              <WorkCard study={study} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Throughline strip */}
      <section className="border-y border-border bg-bg-elevated">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <Reveal>
            <p className="label mb-6">How I work</p>
            <p className="font-display text-3xl font-medium leading-snug text-text sm:text-4xl">
              Life is hard enough. I find the thing quietly making it harder, sit
              with it long enough to understand it, and build something that makes
              people&rsquo;s lives <span className="text-accent">easier</span>,
              and earns big for the business.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Now building */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="label mb-3">On the side</p>
              <h2 className="font-display text-4xl font-bold text-text sm:text-5xl">
                Playing with AI.
              </h2>
            </div>
            <p className="max-w-sm text-text-muted">
              Side projects where I take the growth and CRO instincts from
              checkout into AI-native tools, and try to make them big.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aiProjects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <a
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col rounded-2xl border border-border bg-bg-card p-7 transition-colors hover:border-border-strong"
              >
                <div className="mb-5 flex items-start justify-between">
                  <h3 className="font-display text-2xl font-bold text-text">
                    {p.name}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-text-dim transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-sm font-medium text-accent-dim">{p.tagline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                  {p.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-xs text-text-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <Reveal>
            <p className="label mb-6">About</p>
            <p className="text-2xl leading-relaxed text-text-muted sm:text-3xl">
              {about.intro[0]}
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-accent transition-transform hover:translate-x-1"
            >
              Read the full story <ArrowUpRight className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
