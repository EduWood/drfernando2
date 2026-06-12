import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { TESTIMONIALS } from "../lib/data";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setI((p) => (p + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left header */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-500">
                <span className="h-px w-8 bg-ink-400" />
                Depoimentos
              </div>
              <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] text-ink-900 sm:text-5xl">
                Histórias reais de quem{" "}
                <span className="italic text-gold-500">confiou</span>.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-600">
                A confiança se constrói com resultados consistentes e
                relações duradouras. Veja o que dizem pacientes e famílias
                atendidas.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex items-center gap-3">
                <button
                  onClick={() =>
                    setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
                  }
                  aria-label="Anterior"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 transition-all hover:border-ink-900 hover:bg-ink-900 hover:text-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setI((p) => (p + 1) % TESTIMONIALS.length)}
                  aria-label="Próximo"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 transition-all hover:border-ink-900 hover:bg-ink-900 hover:text-white"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>

                <div className="ml-3 flex gap-1.5">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setI(idx)}
                      aria-label={`Depoimento ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === i ? "w-8 bg-ink-900" : "w-1.5 bg-ink-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right carousel */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="relative min-h-[420px] sm:min-h-[380px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="relative h-full rounded-3xl border border-ink-200 bg-ink-50 p-8 sm:p-12"
                  >
                    <Quote className="h-10 w-10 text-gold-400" />

                    <p className="mt-8 font-display text-2xl font-light leading-snug tracking-tight text-ink-900 sm:text-3xl">
                      “{TESTIMONIALS[i].text}”
                    </p>

                    <div className="mt-10 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-900 font-display text-base font-light text-white">
                        {TESTIMONIALS[i].name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-ink-900">
                          {TESTIMONIALS[i].name}
                        </div>
                        <div className="text-[13px] text-ink-500">
                          {TESTIMONIALS[i].role}
                        </div>
                      </div>
                      <div className="ml-auto hidden gap-0.5 sm:flex">
                        {[...Array(5)].map((_, k) => (
                          <Star
                            key={k}
                            className="h-4 w-4 fill-gold-400 text-gold-400"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
