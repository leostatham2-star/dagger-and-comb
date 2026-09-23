"use client";

import { BRAND, NAV_LINKS, SERVICES } from "@/lib/brand";
import { Logo } from "./Logo";

export function Footer({ navigate }: { navigate: (href: string) => void }) {
  const year = new Date().getFullYear();

  const linkCls =
    "text-bone/60 transition-colors hover:text-brass";

  return (
    <footer className="texture-dark border-t border-smoke text-bone">
      {/* barber stripe accent */}
      <div className="barber-stripe h-2 w-full opacity-80" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-bone/60">
            Two trades under one roof on Milwaukee Ave. We have been cutting hair and
            laying ink in the same room since {BRAND.estYear}, and we still sweep the
            floor ourselves.
          </p>
          <div className="flex gap-3 pt-1">
            {[
              { label: "Instagram", icon: "IG", href: "https://instagram.com" },
              { label: "Facebook", icon: "FB", href: "https://facebook.com" },
              { label: "TikTok", icon: "TT", href: "https://tiktok.com" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${BRAND.name} on ${s.label}`}
                className="inline-flex h-9 w-9 items-center justify-center border border-smoke font-display text-xs tracking-widest text-bone/70 transition-colors hover:border-brass hover:text-brass"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer navigation">
          <h3 className="font-display text-lg tracking-[0.2em] text-bone uppercase">
            The Shop
          </h3>
          <span className="mb-4 mt-2 block h-px w-10 bg-brass" aria-hidden="true" />
          <ul className="space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={linkCls}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(l.href);
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Footer services">
          <h3 className="font-display text-lg tracking-[0.2em] text-bone uppercase">
            What we do
          </h3>
          <span className="mb-4 mt-2 block h-px w-10 bg-brass" aria-hidden="true" />
          <ul className="space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <a
                  href="#/services"
                  className={linkCls}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("#/services");
                  }}
                >
                  {s.title}
                </a>
              </li>
            ))}
            <li>
              <span className="text-bone/40">Flash day at the studio every Sunday</span>
            </li>
          </ul>
        </nav>

        {/* Hours + contact */}
        <div>
          <h3 className="font-display text-lg tracking-[0.2em] text-bone uppercase">
            Hours &amp; contact
          </h3>
          <span className="mb-4 mt-2 block h-px w-10 bg-brass" aria-hidden="true" />
          <ul className="space-y-2 text-sm text-bone/60">
            {BRAND.hours.map((h) => (
              <li key={h.days} className="flex items-baseline justify-between gap-4">
                <span>{h.days}</span>
                <span className={h.time === "Closed" ? "text-oxblood/90" : "text-brass"}>
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-1.5 text-sm">
            <p>
              <a href={BRAND.phoneHref} className={linkCls}>
                {BRAND.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${BRAND.email}`} className={linkCls}>
                {BRAND.email}
              </a>
            </p>
            <p>
              <a
                href={BRAND.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkCls}
              >
                {BRAND.address}
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar with the required credit */}
      <div className="border-t border-smoke/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs text-bone/45 sm:flex-row sm:px-6 sm:text-left">
          <p>
            © {year} {BRAND.legalName}. All rights reserved. Tattoo licenses on file with
            the City of Chicago.
          </p>
          <p>
            <a
              href="https://m-webcraftstudio.space-z.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-bone/70 transition-colors hover:text-brass"
            >
              Designed By M-Webcraft Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
