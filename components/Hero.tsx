"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { profile } from "@/lib/content";

export function Hero() {
  const reduce = useReducedMotion();
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section className="relative flex min-h-[88vh] flex-col justify-center border-b border-border px-6 pt-28 pb-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-6xl"
      >
        <motion.div variants={item} className="mb-9 flex items-center gap-4">
          <Image
            src={profile.headshot}
            alt={profile.name}
            width={400}
            height={400}
            priority
            className="h-14 w-14 rounded-md border border-border object-cover"
          />
          <p className="label text-text-dim">
            <span className="text-accent-dim">{profile.name}</span> · {profile.role}
          </p>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-4xl font-semibold text-text sm:text-5xl lg:text-6xl"
        >
          {profile.headlineLead}{" "}
          <span className="text-accent">{profile.headlineAccent}</span>{" "}
          {profile.headlineRest}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-text-muted"
        >
          {profile.thesis}{" "}
          <span className="text-text">{profile.subthesis}</span>
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="#work"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-medium text-white transition-colors hover:bg-accent-dim"
          >
            See the work <ArrowDown className="h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-2.5 font-medium text-text transition-colors hover:border-accent hover:text-accent"
          >
            The story
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
