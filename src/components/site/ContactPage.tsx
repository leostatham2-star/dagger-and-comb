"use client";

import { CalendarCheck, Mail, MapPin, Phone } from "lucide-react";
import { PageBanner } from "./PageBanner";
import { Reveal } from "./Reveal";
import { BookingForm } from "./BookingForm";
import { BRAND } from "@/lib/brand";

const CARDS = [
  {
    icon: MapPin,
    title: "Find us",
    lines: [BRAND.address, "Blue line to Damen, two blocks south"],
    href: BRAND.mapUrl,
    linkText: "Get directions",
    external: true,
  },
  {
    icon: Phone,
    title: "Call the desk",
    lines: [BRAND.phone, "We answer until close, really"],
    href: BRAND.phoneHref,
    linkText: "Tap to call",
    external: false,
  },
  {
    icon: Mail,
    title: "Email the shop",
    lines: [BRAND.email, "For consults, events and chair rentals"],
    href: `mailto:${BRAND.email}`,
    linkText: "Write to us",
    external: false,
  },
];

export function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" crumb="Book a chair or just say hi" image="/images/shop-corner.jpg" />

      {/* Info cards */}
      <section className="bg-bone py-16 sm:py-20" aria-label="Contact details">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article className="flex h-full flex-col items-start border border-sand bg-white/40 p-8 transition-colors hover:border-brass">
                <span className="inline-flex h-12 w-12 items-center justify-center border border-brass text-brass">
                  <c.icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 font-display text-2xl tracking-wide text-ink">{c.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{c.lines[0]}</p>
                <p className="text-xs text-ink/50">{c.lines[1]}</p>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="mt-5 inline-flex items-center gap-1.5 font-display text-xs tracking-[0.25em] text-brass uppercase transition-colors hover:text-oxblood"
                >
                  {c.linkText}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Booking + hours */}
      <section className="texture-dark py-20 sm:py-24" aria-label="Book an appointment">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="border border-smoke bg-coal/70 p-7 sm:p-9">
            <p className="font-display text-sm tracking-[0.35em] text-brass uppercase">
              Make an appointment
            </p>
            <h2 className="mt-3 mb-7 font-display text-3xl leading-tight text-bone sm:text-4xl">
              Tell us what you need, we will call to confirm
            </h2>
            <BookingForm />
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.08} className="border border-smoke bg-coal/60 p-8">
              <div className="flex items-center gap-3">
                <CalendarCheck className="h-5 w-5 text-brass" />
                <h3 className="font-display text-2xl tracking-wide text-bone">Shop hours</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {BRAND.hours.map((h) => (
                  <li
                    key={h.days}
                    className="flex items-baseline justify-between gap-4 border-b border-smoke/70 pb-3 text-sm last:border-0 last:pb-0"
                  >
                    <span className="text-bone/70">{h.days}</span>
                    <span
                      className={
                        h.time === "Closed"
                          ? "font-display tracking-wider text-oxblood/90"
                          : "font-display tracking-wider text-brass"
                      }
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs leading-relaxed text-bone/45">
                Walk ins welcome all week when a chair is open. Sunday flash day at the
                studio, first come first served.
              </p>
            </Reveal>

            <Reveal delay={0.14} className="border border-smoke bg-coal/60 p-8">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-brass" />
                <h3 className="font-display text-2xl tracking-wide text-bone">Getting here</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-bone/65">
                {BRAND.address}. Street parking on Milwaukee is metered, free after 9 PM.
                The Damen blue line stop is two blocks north, and the 56 bus drops you at
                the door. Bike racks out front, helmets welcome inside.
              </p>
              <a
                href={BRAND.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block border border-brass px-7 py-3 font-display text-sm tracking-[0.2em] text-brass uppercase transition-colors hover:bg-brass hover:text-ink"
              >
                Open in maps
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
