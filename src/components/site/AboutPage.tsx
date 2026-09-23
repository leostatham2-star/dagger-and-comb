"use client";

import { Reveal, SectionHeading } from "./Reveal";
import { PageBanner } from "./PageBanner";
import { BRAND, TESTIMONIALS } from "@/lib/brand";
import { Quote, Star } from "lucide-react";

const VALUES = [
  {
    title: "Sharp work only",
    text: "If a cut or a line is not right, it does not leave the chair. We would rather take twenty more minutes than have you come back for a fix.",
  },
  {
    title: "Straight talk",
    text: "Not every idea will work on your head or your arm, and we will say so before the money changes hands. Then we will offer something that will.",
  },
  {
    title: "A clean shop",
    text: "Fresh blades for every client, sealed tools opened in front of you, and a floor we mop ourselves every night. The boring stuff matters most.",
  },
];

export function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" crumb="Since 2012" image="/images/shop-sign.jpg" />

      {/* Story */}
      <section className="bg-bone py-20 sm:py-24" aria-label="Our story">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal className="relative">
            <img
              src="/images/shop-chairs.jpg"
              alt="Inside the shop, five chairs and a long mirror"
              className="h-[420px] w-full object-cover"
            />
            <div className="absolute bottom-6 left-6 border border-brass bg-ink px-6 py-4">
              <p className="font-display text-4xl text-brass">{new Date().getFullYear() - BRAND.estYear}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-bone/70">Years on the avenue</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-sm tracking-[0.35em] text-brass uppercase">
              Our story
            </p>
            <h2 className="mt-3 font-display text-4xl leading-[0.95] text-ink sm:text-5xl">
              More than a haircut, this is a chair you can trust
            </h2>
            <span className="my-5 block h-px w-24 bg-brass" aria-hidden="true" />
            <p className="leading-relaxed text-ink/75">
              Dagger &amp; Comb opened in the spring of 2012 on a stretch of Milwaukee Ave
              where half the storefronts were empty. Ray Delgado had just left a shop in the
              Loop, his cousin Sunny Whitfield was tattooing two neighborhoods over, and the
              rent was finally cheap enough for both trades to live under one roof. The first
              year was slow. The second year the blue line carried enough regulars to keep
              the lights on. Everything after that is history you can still see in the shop:
              the flash wall by the window, the chairs Ray rebuilt himself, the counter that
              used to be a bowling alley lane.
            </p>
            <p className="mt-4 leading-relaxed text-ink/75">
              Fourteen years later we are five people, five chairs, two tattoo beds and one
              long shared floor. Barbering and tattooing are old trades, and putting them
              together is not a gimmick. Both are built on the same thing: steady hands,
              honest prices and a shop where the same faces keep coming back. That is the
              whole business plan.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="texture-dark py-20 sm:py-24" aria-label="What we stand for">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            dark
            kicker="House rules"
            title="Three things we refuse to bend on"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <article className="h-full border border-smoke bg-coal/60 p-8">
                  <span className="font-display text-5xl text-brass/40">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-2xl tracking-wide text-bone">{v.title}</h3>
                  <span className="my-4 block h-px w-12 bg-brass" aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-bone/65">{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="bg-bone py-20 sm:py-24" aria-label="Inside the shop">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            kicker="The room itself"
            title="Come see it in person"
            sub="Photos only get you so far. The records, the coffee, the flash wall and the barber pole out front are worth the trip."
          />
          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { src: "/images/shop-corner.jpg", alt: "The barber pole corner with worn leather chairs" },
              { src: "/images/studio-wide.jpg", alt: "The tattoo studio side of the shop" },
              { src: "/images/shop-counter.jpg", alt: "Ray behind the front counter" },
              { src: "/images/tools-flatlay.jpg", alt: "Tools laid out for a morning of shaves" },
            ].map((g, i) => (
              <Reveal key={g.src} delay={i * 0.07} className={i % 2 === 1 ? "lg:translate-y-6" : ""}>
                <img
                  src={g.src}
                  alt={g.alt}
                  className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-72"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial highlight */}
      <section className="bg-sand/60 py-16 sm:py-20" aria-label="What clients say">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-3 sm:px-6">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col border border-sand bg-white/50 p-7">
                <Quote className="h-6 w-6 rotate-180 text-brass" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-brass text-brass" />
                    ))}
                  </div>
                  <p className="mt-2 font-display text-lg tracking-wide text-ink">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.22em] text-ink/50">{t.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
