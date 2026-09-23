"use client";

import { Ornament } from "./Reveal";

export function PageBanner({
  title,
  crumb,
  image,
}: {
  title: string;
  crumb: string;
  image: string;
}) {
  return (
    <section className="relative flex h-[300px] items-center justify-center overflow-hidden sm:h-[360px]">
      {/* using a plain img so the banner works before hydration */}
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/80" />
      <div className="relative z-10 flex flex-col items-center gap-3 px-4 text-center">
        <span className="font-display text-sm tracking-[0.4em] text-brass uppercase">
          {crumb}
        </span>
        <h1 className="font-display text-5xl leading-none text-bone sm:text-6xl">{title}</h1>
        <Ornament />
      </div>
    </section>
  );
}
