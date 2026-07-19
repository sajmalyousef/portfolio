"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Mask reveal: the text slides up from behind a clipped container on
 * scroll-in, so it reads as being unveiled rather than fading in.
 * Extra bottom padding keeps descenders (g, y, p) from being clipped by
 * the tight display line-height.
 */
export function Unveil({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) return <span className={className}>{children}</span>;

  return (
    <span
      className={`block overflow-hidden pb-[0.18em] -mb-[0.18em] ${className ?? ""}`}
    >
      <motion.span
        className="block"
        initial={{ y: "115%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
