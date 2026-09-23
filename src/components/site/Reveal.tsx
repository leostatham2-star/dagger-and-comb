"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Ornament({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`} aria-hidden="true">
      <span className="h-px w-10 bg-brass/70" />
      <span className="h-1.5 w-1.5 rotate-45 bg-brass" />
      <span className="h-px w-10 bg-brass/70" />
    </span>
  );
}

export function SectionHeading({
  kicker,
  title,
  sub,
  dark = false,
  align = "center",
}: {
  kicker?: string;
  title: string;
  sub?: string;
  dark?: boolean;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <Reveal className={`flex flex-col ${alignCls} gap-3`}>
      {kicker && (
        <span className="font-display text-sm tracking-[0.35em] text-brass uppercase">
          {kicker}
        </span>
      )}
      <h2
        className={`font-display text-4xl sm:text-5xl leading-[0.95] ${
          dark ? "text-bone" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <Ornament />
      {sub && (
        <p
          className={`max-w-2xl text-base leading-relaxed ${
            dark ? "text-bone/70" : "text-ink/70"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}
