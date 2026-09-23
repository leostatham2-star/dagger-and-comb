"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HomePage } from "@/components/site/HomePage";
import { AboutPage } from "@/components/site/AboutPage";
import { ServicesPage } from "@/components/site/ServicesPage";
import { GalleryPage } from "@/components/site/GalleryPage";
import { TeamPage } from "@/components/site/TeamPage";
import { ContactPage } from "@/components/site/ContactPage";

const KNOWN_ROUTES = ["/", "/about", "/services", "/gallery", "/team", "/contact"];

function getRoute(): string {
  const raw = window.location.hash.replace(/^#/, "");
  const path = raw.startsWith("/") ? raw : "/";
  return KNOWN_ROUTES.includes(path) ? path : "/";
}

function subscribe(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function getServerRoute(): string {
  return "/";
}

export default function App() {
  // Hash routing keeps every page on the single served route while
  // behaving like a real multi page site, deep links included.
  const route = useSyncExternalStore(subscribe, getRoute, getServerRoute);

  const navigate = useCallback((href: string) => {
    const target = href.replace(/^#/, "");
    if (window.location.hash.replace(/^#/, "") === target) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.location.hash = target;
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [route]);

  const renderPage = () => {
    switch (route) {
      case "/about":
        return <AboutPage />;
      case "/services":
        return <ServicesPage navigate={navigate} />;
      case "/gallery":
        return <GalleryPage navigate={navigate} />;
      case "/team":
        return <TeamPage navigate={navigate} />;
      case "/contact":
        return <ContactPage />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-bone">
      <Header route={route} navigate={navigate} />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={route}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}
