import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { Unveil } from "@/components/Unveil";
import { StatCounter } from "@/components/StatCounter";

export function CaseStudyView({
  study,
  prev,
  next,
}: {
  study: CaseStudy;
  prev?: CaseStudy;
  next?: CaseStudy;
}) {
  return (
    <article className="relative">
      {/* Hero */}
      <header className="relative border-b border-border">
        <div className="relative mx-auto max-w-4xl px-6 pb-16 pt-36">
          <Link
            href="/#work"
            className="mono mb-10 inline-flex items-center gap-2 text-[13px] text-text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" /> all work
          </Link>

          <p className="label mb-5">{study.kicker}</p>
          <h1 className="font-display text-4xl font-semibold text-text sm:text-6xl">
            <Unveil>{study.title}</Unveil>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">
            {study.oneLiner}
          </p>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-sm">
            <Meta label="Role" value={study.role} />
            <Meta label="Timeframe" value={study.timeframe} />
            <Meta label="Focus" value={study.tags.join(" · ")} />
          </div>
        </div>
      </header>

      {/* Hero metrics band */}
      <section className="border-b border-border bg-bg-elevated">
        <div className="mx-auto grid max-w-4xl grid-cols-1 divide-y divide-border px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {study.heroMetrics.map((m) => (
            <div key={m.label} className="py-8 sm:px-6 sm:first:pl-0">
              <div className="mono text-4xl font-medium text-accent sm:text-5xl">
                <StatCounter value={m.value} />
              </div>
              <p className="mono mt-2 text-[13px] text-text-muted">{m.label}</p>
              {m.sub && <p className="mono text-[11px] text-text-dim">{m.sub}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Body sections */}
      <div className="mx-auto max-w-3xl px-6 py-20">
        {study.sections.map((s, i) => (
          <Reveal key={s.heading}>
            <section className={i > 0 ? "mt-20" : ""}>
              <p className="label mb-4">{s.label}</p>
              <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">
                <Unveil>{s.heading}</Unveil>
              </h2>
              <div className="mt-6 space-y-5">
                {s.body.map((p, j) => (
                  <p key={j} className="text-lg leading-relaxed text-text-muted">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          </Reveal>
        ))}
      </div>

      {/* Impact */}
      <section className="border-y border-border bg-bg-elevated">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <Reveal>
            <p className="label mb-3">The impact</p>
            <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">
              <Unveil>What it moved</Unveil>
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {study.impact.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.08}>
                <div className="mono text-4xl font-medium text-accent sm:text-5xl">
                  <StatCounter value={m.value} />
                </div>
                <p className="mono mt-2 text-[13px] leading-snug text-text-muted">
                  {m.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Learned */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <Reveal>
          <p className="label mb-4">What I took from it</p>
          <p className="font-display text-2xl font-medium leading-snug text-text sm:text-3xl">
            {study.learned}
          </p>
        </Reveal>
      </section>

      {/* Prev / next */}
      <nav className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col divide-y divide-border sm:flex-row sm:divide-x sm:divide-y-0">
          <NavLink study={prev} dir="prev" />
          <NavLink study={next} dir="next" />
        </div>
      </nav>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mono text-[11px] uppercase tracking-wider text-text-dim">{label}</p>
      <p className="mt-1 text-sm text-text">{value}</p>
    </div>
  );
}

function NavLink({ study, dir }: { study?: CaseStudy; dir: "prev" | "next" }) {
  if (!study)
    return <div className="hidden flex-1 sm:block" aria-hidden />;
  const isNext = dir === "next";
  return (
    <Link
      href={`/work/${study.slug}`}
      className={`group flex flex-1 flex-col gap-2 px-6 py-8 transition-colors hover:bg-bg-elevated ${
        isNext ? "sm:items-end sm:text-right" : ""
      }`}
    >
      <span className="mono flex items-center gap-2 text-[11px] uppercase tracking-wider text-text-dim">
        {!isNext && <ArrowLeft className="h-3.5 w-3.5" />}
        {isNext ? "Next" : "Previous"}
        {isNext && <ArrowRight className="h-3.5 w-3.5" />}
      </span>
      <span className="font-display text-xl font-semibold text-text transition-colors group-hover:text-accent">
        {study.title}
      </span>
    </Link>
  );
}
