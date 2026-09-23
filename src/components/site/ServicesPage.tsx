"use client";

import { ChevronRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { PageBanner } from "./PageBanner";
import { SERVICES } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function ServicesPage({ navigate }: { navigate: (href: string) => void }) {
  return (
    <>
      <PageBanner title="Our Services" crumb="The menu" image="/images/cut-dark.jpg" />

      {/* Intro + service blocks */}
      <section className="bg-bone py-20 sm:py-24" aria-label="Service details">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            kicker="What we do"
            title="Every service, explained by the people who do it"
            sub="Prices are posted and final. If you are not sure what you need, book the cheapest option and we will sort it out in the chair."
          />

          <div className="mt-16 space-y-16">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug}>
                <article
                  className={cn(
                    "grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
                    i % 2 === 1 && "lg:[&>*:first-child]:order-2"
                  )}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-80 w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[440px]"
                    />
                    <span className="absolute left-5 top-5 border border-brass bg-ink/85 px-4 py-1.5 font-display text-lg tracking-widest text-brass">
                      {s.price}
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-sm tracking-[0.35em] text-brass uppercase">
                      0{i + 1} · {s.priceNote ?? "At the chair"}
                    </p>
                    <h3 className="mt-3 font-display text-3xl text-ink sm:text-4xl">{s.title}</h3>
                    <span className="my-5 block h-px w-20 bg-brass" aria-hidden="true" />
                    <p className="leading-relaxed text-ink/75">{s.description}</p>
                    <div className="mt-7 flex flex-wrap gap-4">
                      <button
                        onClick={() => navigate("#/contact")}
                        className="border border-brass bg-brass px-7 py-3.5 font-display text-sm tracking-[0.2em] text-ink uppercase transition-colors hover:bg-brass-soft"
                      >
                        Book this
                      </button>
                      <button
                        onClick={() => navigate("#/gallery")}
                        className="inline-flex items-center gap-1.5 border border-ink px-7 py-3.5 font-display text-sm tracking-[0.2em] text-ink uppercase transition-colors hover:bg-ink hover:text-bone"
                      >
                        See the work <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interiors / the room */}
      <section className="texture-dark py-20 sm:py-24" aria-label="The shop interiors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            dark
            kicker="The room"
            title="Worth the trip to the avenue"
            sub="Blue line to Damen, walk two blocks south. Look for the pole and the hand painted sign."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              { src: "/images/shop-chairs.jpg", alt: "Barber side of the shop with five chairs", span: "md:col-span-2" },
              { src: "/images/studio-wide.jpg", alt: "Tattoo beds by the north window", span: "" },
              { src: "/images/shop-counter.jpg", alt: "The front counter, formerly a bowling lane", span: "" },
              { src: "/images/shop-corner.jpg", alt: "Barber pole and waiting bench", span: "md:col-span-2" },
            ].map((g, i) => (
              <Reveal key={g.src} delay={i * 0.07} className={g.span}>
                <img
                  src={g.src}
                  alt={g.alt}
                  className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-72"
                />
              </Reveal>
            ))}
          </div>
          <div className="mt-14 flex flex-col items-center gap-5 border border-smoke bg-coal/60 p-8 text-center sm:p-10">
            <h3 className="font-display text-3xl tracking-wide text-bone">
              Not sure what to book? Just walk in.
            </h3>
            <p className="max-w-2xl text-sm leading-relaxed text-bone/65">
              The pole spins when a chair is open. If it is a Sunday, the studio side runs
              flash specials from the artists books, first come first served until the
              flash wall is claimed.
            </p>
            <button
              onClick={() => navigate("#/contact")}
              className="border border-brass bg-brass px-9 py-4 font-display text-base tracking-[0.2em] text-ink uppercase transition-colors hover:bg-brass-soft"
            >
              Make an appointment
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
