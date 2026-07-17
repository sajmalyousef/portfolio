import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies } from "@/lib/content";
import { CaseStudyView } from "@/components/CaseStudyView";

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.kicker} — Sajmal Yousef`,
    description: study.oneLiner,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sorted = [...caseStudies].sort((a, b) => a.order - b.order);
  const idx = sorted.findIndex((s) => s.slug === slug);
  if (idx === -1) notFound();

  return (
    <CaseStudyView
      study={sorted[idx]}
      prev={sorted[idx - 1]}
      next={sorted[idx + 1]}
    />
  );
}
