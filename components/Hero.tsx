"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { profile } from "@/lib/content";

export function Hero() {
  const reduce = useReducedMotion();
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24">
      <div className="glow left-[-10%] top-[10%] h-[600px] w-[600px]" />
      <div className="glow right-[-15%] bottom-[5%] h-[500px] w-[500px] opacity-70" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-6xl"
      >
        <motion.p variants={item} className="label mb-8">
          {profile.name} — {profile.role}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-5xl font-bold text-text sm:text-7xl lg:text-[5.5rem]"
        >
          I ship products that
          <br />
          move <span className="text-accent">real money</span>.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl"
        >
          {profile.thesis}{" "}
          <span className="text-text">{profile.subthesis}</span>
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-bg transition-transform hover:scale-[1.03]"
          >
            See the work <ArrowDown className="h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 font-medium text-text transition-colors hover:border-accent hover:text-accent"
          >
            The story
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
