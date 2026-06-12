import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem } from "./Reveal";
import { PILLARS } from "../lib/data";
import { ArrowUpRight } from "lucide-react";

const ICONS = [
  // Gastroenterologia
  (props: any) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8 6c0 8 16 6 16 14" />
      <path d="M8 6c0 5 4 8 4 12" />
      <path d="M8 6h4" />
      <path d="M24 20c0 4-3 6-7 6" />
    </svg>
  ),
  // Cirurgia Aparelho Digestivo
  (props: any) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 4v24" />
      <path d="M4 16h24" />
      <circle cx="16" cy="16" r="4" />
      <path d="M22 10l4-4" />
      <path d="M22 22l4 4" />
    </svg>
  ),
  // Endoscopia
  (props: any) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="6" y="6" width="20" height="14" rx="2" />
      <path d="M11 26h10" />
      <path d="M16 20v6" />
      <circle cx="16" cy="13" r="3" />
    </svg>
  ),
  // Videolaparoscopia
  (props: any) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="8" width="16" height="12" rx="1.5" />
      <path d="M20 14h6" />
      <path d="M26 14v6" />
      <circle cx="12" cy="14" r="2" />
      <path d="M8 24h8" />
    </svg>
  ),
];

export function Areas() {
  return (
    <section
      id="atuacao"
      className="relative bg-white py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-500">
              <span className="h-px w-8 bg-ink-400" />
              Áreas de atuação
            </div>
            <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] text-ink-900 sm:text-5xl lg:text-6xl">
              Quatro pilares.{" "}
              <span className="italic text-gold-500">Um compromisso</span>{" "}
              único com a sua saúde.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-600">
              Da consulta gastroenterológica à cirurgia de alta complexidade,
              um cuidado integrado que combina diagnóstico preciso, técnica
              refinada e acompanhamento humano.
            </p>
          </Reveal>
        </div>

        <Stagger
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          delayChildren={0.15}
          staggerChildren={0.1}
        >
          {PILLARS.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <motion.article
                key={p.title}
                variants={staggerItem}
                className="card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-200 bg-ink-50 p-7"
              >
                {/* Numbered marker */}
                <div className="flex items-center justify-between">
                  <div className="font-display text-sm font-light text-ink-400">
                    0{i + 1}
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-ink-300 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink-900" />
                </div>

                <div className="mt-12 flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-900 text-gold-300 transition-all duration-500 group-hover:bg-gold-500 group-hover:text-ink-950">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-8 font-display text-2xl font-medium leading-tight tracking-tight text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
                  {p.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-8 h-px w-full bg-ink-200" />
                <div className="mt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  Atendimento especializado
                </div>
              </motion.article>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
