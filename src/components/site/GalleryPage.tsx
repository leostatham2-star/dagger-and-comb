"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PageBanner } from "./PageBanner";
import { SectionHeading } from "./Reveal";
import { GALLERY } from "@/lib/brand";
import { cn } from "@/lib/utils";

const FILTERS = [
  { key: "all", label: "All work" },
  { key: "cuts", label: "Cuts & shaves" },
  { key: "tattoos", label: "Tattoos" },
] as const;

export function GalleryPage({ navigate }: { navigate: (href: string) => void }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["key"]>("all");

  const items = useMemo(
    () => (filter === "all" ? GALLERY : GALLERY.filter((g) => g.category === filter)),
    [filter]
  );

  return (
    <>
      <PageBanner title="Gallery" crumb="Recent work off our floor" image="/images/work-back.jpg" />

      <section className="bg-bone py-20 sm:py-24" aria-label="Gallery">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            kicker="The proof"
            title="Fresh off the floor"
            sub="Everything here was done in the shop in the last few months. Nothing stock, nothing borrowed. Every photo is posted with permission."
          />

          {/* filters */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={cn(
                  "border px-6 py-2.5 font-display text-sm tracking-[0.2em] uppercase transition-colors",
                  filter === f.key
                    ? "border-brass bg-brass text-ink"
                    : "border-ink/25 text-ink/70 hover:border-ink hover:text-ink"
                )}
                aria-pressed={filter === f.key}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* masonry style grid */}
          <motion.div layout className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
            <AnimatePresence mode="popLayout">
              {items.map((g) => (
                <motion.figure
                  key={g.title + g.image}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="group relative break-inside-avoid overflow-hidden"
                >
                  <img
                    src={g.image}
                    alt={`${g.title} by ${g.credit}`}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="font-display text-xl tracking-wide text-bone">{g.title}</span>
                    <span className="mt-1 text-xs uppercase tracking-[0.25em] text-brass">
                      by {g.credit}
                    </span>
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-16 flex flex-col items-center gap-4 border border-sand bg-white/40 p-8 text-center sm:p-10">
            <h3 className="font-display text-2xl tracking-wide text-ink sm:text-3xl">
              Want your work on this wall?
            </h3>
            <p className="max-w-xl text-sm leading-relaxed text-ink/65">
              Book a consult with Sunny or Diego, or grab a cut with any of the barbers.
              If it turns out well, you might end up in here with the rest of them.
            </p>
            <button
              onClick={() => navigate("#/contact")}
              className="border border-ink px-8 py-3.5 font-display text-sm tracking-[0.2em] text-ink uppercase transition-colors hover:bg-ink hover:text-bone"
            >
              Book your chair
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
