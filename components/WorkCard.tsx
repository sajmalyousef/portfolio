"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/content";

export function WorkCard({ study, index }: { study: CaseStudy; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <Link href={`/work/${study.slug}`} className="group block">
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-card p-7 transition-colors group-hover:border-border-strong"
      >
        <div className="mb-6 flex items-start justify-between">
          <span className="font-display text-sm font-medium text-text-dim">
            {num}
          </span>
          <ArrowUpRight className="h-5 w-5 text-text-dim transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        <p className="label mb-3">{study.kicker}</p>
        <h3 className="font-display text-2xl font-bold leading-tight text-text">
          {study.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
          {study.oneLiner}
        </p>

        <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-border pt-5">
          {study.heroMetrics.slice(0, 2).map((m) => (
            <div key={m.label}>
              <span className="font-display text-xl font-bold text-accent">
                {m.value}
              </span>
              <span className="ml-2 text-xs text-text-dim">{m.label}</span>
            </div>
          ))}
        </div>
      </motion.article>
    </Link>
  );
}
