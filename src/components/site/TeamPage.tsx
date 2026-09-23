"use client";

import { CheckCircle2 } from "lucide-react";
import { PageBanner } from "./PageBanner";
import { Reveal, SectionHeading } from "./Reveal";
import { TEAM } from "@/lib/brand";

export function TeamPage({ navigate }: { navigate: (href: string) => void }) {
  return (
    <>
      <PageBanner title="Our Team" crumb="Five chairs, five characters" image="/images/shop-counter.jpg" />

      <section className="bg-bone py-20 sm:py-24" aria-label="Team">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            kicker="The crew"
            title="Book the person, not just the service"
            sub="Every barber and artist here takes their own bookings through the front desk. Read the bios, pick your person, and mention them by name when you call."
          />

          <div className="mt-16 space-y-16">
            {TEAM.map((m, i) => (
              <Reveal key={m.name}>
                <article
                  className={
                    i % 2 === 1
                      ? "grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:[&>*:first-child]:order-2"
                      : "grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14"
                  }
                >
                  <div className="relative">
                    <img
                      src={m.image}
                      alt={`${m.name}, ${m.role}`}
                      className="h-[420px] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03] lg:h-[480px]"
                    />
                    <span className="absolute bottom-5 left-5 border border-brass bg-ink/85 px-4 py-1.5 font-display text-sm tracking-[0.25em] text-brass uppercase">
                      {m.role}
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-sm tracking-[0.35em] text-brass uppercase">
                      0{i + 1}
                    </p>
                    <h3 className="mt-2 font-display text-4xl text-ink sm:text-5xl">{m.name}</h3>
                    <span className="my-5 block h-px w-20 bg-brass" aria-hidden="true" />
                    <p className="leading-relaxed text-ink/75">{m.bio}</p>
                    <ul className="mt-6 space-y-2.5">
                      {m.creds.map((c) => (
                        <li key={c} className="flex items-center gap-2.5 text-sm text-ink/70">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-brass" />
                          {c}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => navigate("#/contact")}
                      className="mt-8 border border-ink px-7 py-3.5 font-display text-sm tracking-[0.2em] text-ink uppercase transition-colors hover:bg-ink hover:text-bone"
                    >
                      Book with {m.name.split(" ")[0]}
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="texture-dark py-16" aria-label="Join the shop">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-4 py-6 text-center sm:px-6">
          <p className="font-display text-sm tracking-[0.35em] text-brass uppercase">
            Chairs available
          </p>
          <h2 className="font-display text-3xl leading-tight text-bone sm:text-4xl">
            Good barber looking for a chair in Wicker Park?
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-bone/65">
            We keep one booth open for the right person. Booth rent, fair split, and a
            crew that actually helps each other out on busy Saturdays. Swing by with your
            shears and introduce yourself, or send the shop an email and Ray will get back
            to you between clients.
          </p>
          <button
            onClick={() => navigate("#/contact")}
            className="border border-brass bg-brass px-9 py-4 font-display text-base tracking-[0.2em] text-ink uppercase transition-colors hover:bg-brass-soft"
          >
            Get in touch
          </button>
        </div>
      </section>
    </>
  );
}
