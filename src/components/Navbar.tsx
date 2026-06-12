import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { NAV, SITE } from "../lib/data";
import { cn } from "../utils/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-ink-200/60 bg-white/70 backdrop-blur-xl"
            : "border-b border-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Logo />

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-underline text-[13px] font-medium tracking-wide text-ink-700 transition-colors hover:text-ink-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="group inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-[13px] font-medium text-ink-800 transition-all hover:border-ink-300 hover:shadow-sm"
            >
              <Phone className="h-3.5 w-3.5 text-ink-500 transition-colors group-hover:text-ink-800" />
              {SITE.phone}
            </a>
            <a
              href="#contato"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink-900 px-5 py-2.5 text-[13px] font-medium text-white transition-all hover:bg-ink-800"
            >
              <span className="relative z-10">Agendar Consulta</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white/80 text-ink-800 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink-950/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between px-6 py-5">
                <Logo light />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Fechar menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-1 flex-col justify-center gap-6 px-10">
                {NAV.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.6 }}
                    className="font-display text-4xl font-light text-white"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
              <div className="space-y-3 px-6 pb-10">
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  className="block rounded-full bg-gold-400 px-6 py-4 text-center text-sm font-medium text-ink-950"
                >
                  Falar no WhatsApp
                </a>
                <a
                  href="#contato"
                  onClick={() => setOpen(false)}
                  className="block rounded-full border border-white/20 px-6 py-4 text-center text-sm font-medium text-white"
                >
                  Agendar Consulta
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
