"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronRight, Quote, Star } from "lucide-react";
import { PRODUCTS, SERVICES, TEAM, TESTIMONIALS, PRICE_ROWS, BRAND } from "@/lib/brand";
import { Reveal, SectionHeading } from "./Reveal";
import { BookingForm } from "./BookingForm";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    image: "/images/cut-dark.jpg",
    kicker: "Est. 2012 · Wicker Park",
    title: ["Walk in scruffy.", "Walk out sharp."],
    text: "Straight razors, hot towels and barbers who remember your name and your part. Six chairs, no attitude, good records.",
  },
  {
    image: "/images/shop-sign.jpg",
    kicker: "Two trades, one shop",
    title: ["Good hair.", "Honest ink."],
    text: "A barbershop and a tattoo studio sharing a wall on Milwaukee Ave. Get a cut while your buddy sits for a sleeve.",
  },
  {
    image: "/images/tattoo-artist.jpg",
    kicker: "Custom work only",
    title: ["Every tattoo", "drawn for you."],
    text: "Sunny and Diego sketch every piece from scratch. No repeat flash off the wall unless you really want it. Consults are free.",
  },
];

function Hero({ navigate }: { navigate: (href: string) => void }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6500);
    return () => clearInterval(t);
  }, [paused]);

  const slide = SLIDES[index];

  return (
    <section
      className="relative h-[78vh] min-h-[540px] overflow-hidden bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Featured"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <img src={slide.image} alt="" aria-hidden="true" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/20" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <p className="mb-4 font-display text-sm tracking-[0.4em] text-brass uppercase">
              {slide.kicker}
            </p>
            <h1 className="font-display text-6xl leading-[0.92] text-bone sm:text-7xl lg:text-8xl">
              {slide.title[0]}
              <br />
              <span className="text-brass">{slide.title[1]}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-bone/75 sm:text-lg">
              {slide.text}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("#/contact")}
                className="border border-brass bg-brass px-8 py-4 font-display text-base tracking-[0.2em] text-ink uppercase transition-colors hover:bg-brass-soft"
              >
                Make an appointment
              </button>
              <button
                onClick={() => navigate("#/services")}
                className="border border-bone/40 px-8 py-4 font-display text-base tracking-[0.2em] text-bone uppercase transition-colors hover:border-brass hover:text-brass"
              >
                Our services
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* slider controls */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4">
        <button
          onClick={() => setIndex((index - 1 + SLIDES.length) % SLIDES.length)}
          aria-label="Previous slide"
          className="inline-flex h-11 w-11 items-center justify-center border border-bone/30 text-bone/80 transition-colors hover:border-brass hover:text-brass"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <div className="flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "h-1.5 transition-all duration-300",
                i === index ? "w-8 bg-brass" : "w-4 bg-bone/40 hover:bg-bone/70"
              )}
            />
          ))}
        </div>
        <button
          onClick={() => setIndex((index + 1) % SLIDES.length)}
          aria-label="Next slide"
          className="inline-flex h-11 w-11 items-center justify-center border border-bone/30 text-bone/80 transition-colors hover:border-brass hover:text-brass"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

function Welcome({ navigate }: { navigate: (href: string) => void }) {
  const imgs = [
    "/images/work-trim.jpg",
    "/images/shop-corner.jpg",
    "/images/tools-flatlay.jpg",
    "/images/artist-sunny.jpg",
  ];
  return (
    <section className="bg-bone py-20 sm:py-28" aria-label="Welcome">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <p className="font-display text-sm tracking-[0.35em] text-brass uppercase">
            Welcome to Dagger &amp; Comb
          </p>
          <h2 className="mt-3 font-display text-4xl leading-[0.95] text-ink sm:text-5xl">
            A barbershop and a tattoo studio that actually belong in the same room
          </h2>
          <span className="my-5 block h-px w-24 bg-brass" aria-hidden="true" />
          <p className="leading-relaxed text-ink/75">
            The shop started in 2012 with two chairs and a hand painted sign. Ray had been
            cutting hair for a decade, his cousin Sunny had been tattooing out of a studio
            in Pilsen, and they figured the two trades belonged together. Fourteen years
            and five chairs later, the formula has not changed much.
          </p>
          <p className="mt-4 leading-relaxed text-ink/75">
            You can get a haircut, a shave and a tattoo in the same afternoon if you plan
            it right. Most people come for one thing and end up staying for the conversation.
            The coffee is free, the records are loud, and nobody will try to sell you a
            membership.
          </p>
          <button
            onClick={() => navigate("#/about")}
            className="mt-8 inline-flex items-center gap-2 border border-ink px-7 py-3.5 font-display text-sm tracking-[0.2em] text-ink uppercase transition-colors hover:bg-ink hover:text-bone"
          >
            More about us <ChevronRight className="h-4 w-4" />
          </button>
        </Reveal>

        {/* collage like the theme */}
        <div className="grid grid-cols-2 gap-4">
          {imgs.map((src, i) => (
            <Reveal
              key={src}
              delay={i * 0.1}
              className={cn(
                "relative overflow-hidden",
                i % 2 === 1 ? "translate-y-6" : ""
              )}
            >
              <img
                src={src}
                alt={
                  ["Barber at work on a textured crop", "Barber pole corner of the shop", "Shop tools laid out for the day", "Sunny, resident tattoo artist"][i]
                }
                className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-72"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services({ navigate }: { navigate: (href: string) => void }) {
  return (
    <section className="texture-dark py-20 sm:py-28" aria-label="Our services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          dark
          kicker="Our Services"
          title="Four ways we earn your chair"
          sub="Every service comes with a real consultation and a straight razor finish. Prices are honest, posted, and they include the tips the house keeps."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <article className="group flex h-full flex-col border border-smoke bg-coal/60">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 border border-brass bg-ink/85 px-3 py-1 font-display text-sm tracking-widest text-brass">
                    from {s.price}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl tracking-wide text-bone">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-bone/60">{s.blurb}</p>
                  <button
                    onClick={() => navigate("#/services")}
                    className="mt-5 inline-flex items-center gap-1.5 font-display text-xs tracking-[0.25em] text-brass uppercase transition-colors hover:text-brass-soft"
                  >
                    Read more <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 7000);
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[i];

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28"
      aria-label="Testimonials"
      style={{
        backgroundImage: "url(/images/shop-chairs.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-ink/88" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <Quote className="mx-auto h-10 w-10 rotate-180 text-brass" />
          <h2 className="mt-4 font-display text-4xl text-bone sm:text-5xl">Testimonials</h2>
          <span className="mx-auto my-5 block h-px w-24 bg-brass" aria-hidden="true" />
        </Reveal>
        <div className="relative min-h-[220px] sm:min-h-[190px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg leading-relaxed text-bone/85 sm:text-xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex justify-center gap-1" aria-label="Five star review">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-brass text-brass" />
                ))}
              </div>
              <footer className="mt-3">
                <p className="font-display text-xl tracking-wide text-brass">{t.name}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-bone/50">{t.detail}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIALS.map((_, d) => (
            <button
              key={d}
              onClick={() => setI(d)}
              aria-label={`Show testimonial ${d + 1}`}
              className={cn(
                "h-1.5 transition-all",
                d === i ? "w-8 bg-brass" : "w-4 bg-bone/30 hover:bg-bone/60"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Staff({ navigate }: { navigate: (href: string) => void }) {
  const three = TEAM.slice(0, 3);
  return (
    <section className="bg-bone py-20 sm:py-28" aria-label="Our staff">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          kicker="Our Staff"
          title="The people behind the chairs"
          sub="Five of us keep the shop running. Between the two trades there are over seventy years of experience on this floor, and exactly zero egos about it."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {three.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <article className="group border border-sand bg-white/40">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={m.image}
                    alt={`${m.name}, ${m.role}`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-2xl tracking-wide text-ink">{m.name}</h3>
                  <p className="mt-1 font-display text-xs tracking-[0.3em] text-brass uppercase">
                    {m.role}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("#/team")}
            className="border border-ink px-8 py-3.5 font-display text-sm tracking-[0.2em] text-ink uppercase transition-colors hover:bg-ink hover:text-bone"
          >
            Meet the whole crew
          </button>
        </div>
      </div>
    </section>
  );
}

function Prices({ navigate }: { navigate: (href: string) => void }) {
  const half = Math.ceil(PRICE_ROWS.length / 2);
  const cols = [PRICE_ROWS.slice(0, half), PRICE_ROWS.slice(half)];
  return (
    <section
      className="relative py-20 sm:py-28"
      aria-label="Prices"
      style={{
        backgroundImage: "url(/images/machine.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}
    >
      <div className="absolute inset-0 bg-ink/92" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          dark
          kicker="Prices List"
          title="No surprises at the register"
          sub="The price you see is the price you pay. Card, cash or tap, same number."
        />
        <div className="mt-14 grid gap-x-16 gap-y-0 md:grid-cols-2">
          {cols.map((col, ci) => (
            <ul key={ci}>
              {col.map((row, ri) => (
                <Reveal key={row.name} delay={ri * 0.03}>
                  <li className="group flex items-baseline justify-between gap-4 border-b border-smoke py-4">
                    <span className="text-base text-bone/85 transition-colors group-hover:text-brass">
                      {row.name}
                    </span>
                    <span
                      className="mx-2 flex-1 border-b border-dotted border-smoke"
                      aria-hidden="true"
                    />
                    <span className="font-display text-xl tracking-wide text-brass">
                      {row.price}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("#/contact")}
            className="border border-brass bg-brass px-10 py-4 font-display text-base tracking-[0.2em] text-ink uppercase transition-colors hover:bg-brass-soft"
          >
            Make an appointment
          </button>
        </div>
      </div>
    </section>
  );
}

function Shop() {
  return (
    <section className="bg-bone py-20 sm:py-28" aria-label="From the shop counter">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          kicker="From the Counter"
          title="Take the shop home with you"
          sub="Everything we use behind the chair, stocked on the shelf by the register. Ask for any of it at your next visit and we will send you home with the good stuff."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <article className="group flex h-full flex-col border border-sand bg-white/40">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl tracking-wide text-ink">{p.name}</h3>
                    <span className="font-display text-lg text-brass">{p.price}</span>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{p.note}</p>
                  <p className="mt-4 border-t border-sand pt-3 text-xs uppercase tracking-[0.2em] text-ink/45">
                    Available at the front desk
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Appointment() {
  return (
    <section
      className="relative py-20 sm:py-28"
      aria-label="Make an appointment"
      style={{
        backgroundImage: "url(/images/shop-sign.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-ink/90" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <p className="font-display text-sm tracking-[0.35em] text-brass uppercase">
            Make an appointment
          </p>
          <h2 className="mt-3 font-display text-4xl leading-[0.95] text-bone sm:text-5xl">
            Grab a chair before someone else does
          </h2>
          <span className="my-5 block h-px w-24 bg-brass" aria-hidden="true" />
          <p className="leading-relaxed text-bone/70">
            Send the form and the front desk will call you back within the hour during shop
            hours. Want a specific barber or artist? Say so in the notes and we will check
            their book first.
          </p>
          <p className="mt-4 leading-relaxed text-bone/70">
            Walk ins are always welcome when a chair is open, and Sundays are flash days at
            the studio if you are feeling brave. {BRAND.addressShort} is two blocks from the
            Damen blue line stop.
          </p>
          <div className="mt-8 space-y-3 border border-smoke bg-coal/50 p-6">
            {BRAND.hours.map((h) => (
              <div key={h.days} className="flex items-baseline justify-between gap-4 text-sm">
                <span className="text-bone/70">{h.days}</span>
                <span className={h.time === "Closed" ? "text-oxblood/90" : "font-display tracking-wider text-brass"}>
                  {h.time}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="border border-smoke bg-coal/70 p-7 sm:p-9">
          <BookingForm />
        </Reveal>
      </div>
    </section>
  );
}

export function HomePage({ navigate }: { navigate: (href: string) => void }) {
  return (
    <>
      <Hero navigate={navigate} />
      <Welcome navigate={navigate} />
      <Services navigate={navigate} />
      <Testimonials />
      <Staff navigate={navigate} />
      <Prices navigate={navigate} />
      <Shop />
      <Appointment />
    </>
  );
}
