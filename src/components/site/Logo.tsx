"use client";

import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("shrink-0", className)}
      role="img"
      aria-label="Dagger and Comb emblem"
    >
      {/* badge ring */}
      <circle cx="32" cy="32" r="30" fill="#17130e" />
      <circle cx="32" cy="32" r="28.5" fill="none" stroke="#c9973f" strokeWidth="1.4" />
      <circle cx="32" cy="32" r="25" fill="none" stroke="#c9973f" strokeWidth="0.7" />
      {/* comb body */}
      <g stroke="#c9973f" strokeWidth="2.6" strokeLinecap="round">
        <line x1="17" y1="43" x2="43" y2="17" />
        <line x1="19.5" y1="40.5" x2="22.5" y2="43.5" />
        <line x1="23" y1="37" x2="26" y2="40" />
        <line x1="26.5" y1="33.5" x2="29.5" y2="36.5" />
        <line x1="30" y1="30" x2="33" y2="33" />
      </g>
      {/* dagger */}
      <g stroke="#f4efe4" strokeWidth="2.6" strokeLinecap="round">
        <line x1="21" y1="21" x2="40" y2="40" />
        <line x1="24.5" y1="17.5" x2="43.5" y2="36.5" />
      </g>
      {/* dagger pommel */}
      <circle cx="41.8" cy="41.8" r="3.2" fill="#8c2f24" stroke="#c9973f" strokeWidth="1" />
      {/* small diamond top */}
      <rect x="30.6" y="15.6" width="4.2" height="4.2" transform="rotate(45 32.7 17.7)" fill="#c9973f" />
    </svg>
  );
}

export function Logo({
  className,
  light = true,
  compact = false,
}: {
  className?: string;
  light?: boolean;
  compact?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark className="h-11 w-11" />
      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-[1.65rem] whitespace-nowrap tracking-wide",
              light ? "text-bone" : "text-ink"
            )}
          >
            Dagger <span className="text-brass">&amp;</span> Comb
          </span>
          <span
            className={cn(
              "text-[0.6rem] whitespace-nowrap uppercase tracking-[0.32em]",
              light ? "text-bone/60" : "text-ink/60"
            )}
          >
            Barbershop &amp; Tattoo
          </span>
        </span>
      )}
    </span>
  );
}
