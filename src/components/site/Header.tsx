"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, Clock, MapPin, Menu, Phone, X } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/brand";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export function Header({
  route,
  navigate,
}: {
  route: string;
  navigate: (href: string) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 260);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    // Any hash change (link, back button) should dismiss the mobile drawer
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    navigate(href);
  };

  const isActive = (href: string) => {
    const target = href.replace("#", "");
    return route === target;
  };

  return (
    <>
      {/* Tier 1: thin announcement bar, like the theme */}
      <div className="bg-oxblood text-bone">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
          <p className="truncate text-xs tracking-wide text-bone/85 sm:text-[0.8rem]">
            Sharp cuts and honest ink in the heart of Wicker Park. Walk ins welcome when the pole is spinning.
          </p>
          <button
            onClick={() => go("#/contact")}
            className="hidden shrink-0 items-center gap-2 border border-bone/40 px-4 py-1.5 font-display text-sm tracking-widest uppercase transition-colors hover:border-brass hover:bg-brass hover:text-ink sm:inline-flex"
          >
            <CalendarCheck className="h-4 w-4" />
            Book a chair
          </button>
        </div>
      </div>

      {/* Tier 2: info strip, mirrors Address / call us / for booking / Hours */}
      <div className="border-b border-smoke bg-ink text-bone/80">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-3 px-4 py-4 sm:px-6 lg:grid-cols-4">
          <a href={BRAND.mapUrl} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brass transition-transform group-hover:scale-110" />
            <span>
              <span className="block font-display text-xs tracking-[0.25em] text-brass uppercase">Address</span>
              <span className="text-sm leading-snug">{BRAND.addressShort}</span>
            </span>
          </a>
          <a href={BRAND.phoneHref} className="group flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brass transition-transform group-hover:scale-110" />
            <span>
              <span className="block font-display text-xs tracking-[0.25em] text-brass uppercase">Call us</span>
              <span className="text-sm leading-snug">{BRAND.phone}</span>
            </span>
          </a>
          <a href="#/contact" className="group flex items-start gap-3" onClick={(e) => { e.preventDefault(); go("#/contact"); }}>
            <CalendarCheck className="mt-0.5 h-5 w-5 shrink-0 text-brass transition-transform group-hover:scale-110" />
            <span>
              <span className="block font-display text-xs tracking-[0.25em] text-brass uppercase">For booking</span>
              <span className="text-sm leading-snug">Online or by phone</span>
            </span>
          </a>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brass" />
            <span>
              <span className="block font-display text-xs tracking-[0.25em] text-brass uppercase">Hours</span>
              <span className="text-sm leading-snug">{BRAND.hoursShort}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Tier 3: main nav, becomes sticky when scrolled */}
      <header
        className={cn(
          "z-40 border-b border-smoke bg-ink transition-all",
          scrolled ? "fixed inset-x-0 top-0 shadow-[0_10px_40px_rgba(0,0,0,0.45)]" : "relative"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              go("#/");
            }}
            aria-label="Dagger and Comb home"
          >
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  go(link.href);
                }}
                className={cn(
                  "relative px-3 py-3 font-display text-[1.02rem] tracking-[0.12em] whitespace-nowrap uppercase transition-colors xl:px-4",
                  isActive(link.href) ? "text-brass" : "text-bone/75 hover:text-bone"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-4 bottom-1.5 h-0.5 origin-left bg-brass transition-transform duration-300",
                    isActive(link.href) ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </a>
            ))}
            <button
              onClick={() => go("#/contact")}
              className="ml-4 border border-brass bg-brass px-5 py-2.5 font-display text-sm tracking-[0.18em] text-ink uppercase transition-colors hover:bg-brass-soft"
            >
              Make an appointment
            </button>
          </nav>

          <button
            className="inline-flex h-11 w-11 items-center justify-center border border-smoke text-bone lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-ink/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-ink"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between border-b border-smoke px-5 py-4">
                <Logo />
                <button
                  className="inline-flex h-10 w-10 items-center justify-center border border-smoke text-bone"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 py-6" aria-label="Mobile navigation links">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                    onClick={(e) => {
                      e.preventDefault();
                      go(link.href);
                    }}
                    className={cn(
                      "border-b border-smoke/60 py-4 font-display text-2xl tracking-[0.12em] uppercase",
                      isActive(link.href) ? "text-brass" : "text-bone/85"
                    )}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <div className="border-t border-smoke px-5 py-5">
                <button
                  onClick={() => go("#/contact")}
                  className="w-full border border-brass bg-brass py-3.5 font-display text-base tracking-[0.18em] text-ink uppercase"
                >
                  Make an appointment
                </button>
                <p className="mt-3 text-center text-xs text-bone/50">
                  {BRAND.phone} · {BRAND.addressShort}
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
