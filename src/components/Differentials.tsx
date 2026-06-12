import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem } from "./Reveal";
import { DIFFERENTIALS } from "../lib/data";
import { Check } from "lucide-react";

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative overflow-hidden bg-ink-900 py-28 text-white sm:py-36"
    >
      {/* Background ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-medical-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-gold-200/80">
                <span className="h-px w-8 bg-gold-400/50" />
                Diferenciais
              </div>
              <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
                A medicina no seu{" "}
                <span className="italic gold-text">melhor</span> padrão.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-white/65">
                Cada detalhe do atendimento foi pensado para entregar mais
                do que um procedimento — uma experiência médica completa,
                segura e centrada em você.
              </p>
            </Reveal>
          </div>
        </div>

        <Stagger
          className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3"
          delayChildren={0.15}
          staggerChildren={0.07}
        >
          {DIFFERENTIALS.map((d, i) => (
            <motion.div
              key={d.title}
              variants={staggerItem}
              className="group relative bg-ink-900 p-8 transition-colors duration-500 hover:bg-ink-800"
            >
              {/* Index */}
              <div className="flex items-start justify-between">
                <div className="font-display text-sm font-light text-white/40">
                  0{i + 1}
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-gold-300/30 text-gold-300 transition-all group-hover:border-gold-300 group-hover:bg-gold-300 group-hover:text-ink-950">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </div>
              </div>

              <h3 className="mt-12 font-display text-2xl font-medium leading-tight tracking-tight text-white">
                {d.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                {d.description}
              </p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
