import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem } from "./Reveal";
import { TIMELINE } from "../lib/data";

export function Timeline() {
  return (
    <section id="atendimento" className="relative bg-ink-50 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-500">
              <span className="h-px w-8 bg-ink-400" />
              Como funciona o atendimento
            </div>
            <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] text-ink-900 sm:text-5xl lg:text-6xl">
              Uma jornada clara,{" "}
              <span className="italic text-gold-500">do primeiro</span>{" "}
              contato ao pós-operatório.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-600">
              Um processo conduzido com método, transparência e cuidado em
              cada etapa — para que você saiba exatamente o que esperar.
            </p>
          </Reveal>
        </div>

        {/* Mobile timeline */}
        <div className="mt-16 lg:hidden">
          <Stagger className="space-y-6" delayChildren={0.1} staggerChildren={0.1}>
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.step}
                variants={staggerItem}
                className="relative flex gap-5"
              >
                <div className="relative flex flex-col items-center">
                  <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink-900 bg-white font-display text-sm font-light text-ink-900">
                    {t.step}
                  </div>
                  {i < TIMELINE.length - 1 && (
                    <div className="absolute top-12 h-full w-px bg-ink-200" />
                  )}
                </div>
                <div className="flex-1 pb-2 pt-1">
                  <TimelineCard t={t} />
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>

        {/* Desktop timeline */}
        <div className="relative mt-20 hidden lg:block">
          {/* Vertical center line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-ink-200 via-ink-200 to-transparent" />

          <Stagger
            className="space-y-16"
            delayChildren={0.1}
            staggerChildren={0.1}
          >
            {TIMELINE.map((t, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={t.step}
                  variants={staggerItem}
                  className="relative grid grid-cols-2 items-start gap-12"
                >
                  {isLeft ? (
                    <>
                      <div className="flex justify-end">
                        <TimelineCard t={t} />
                      </div>
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <div className="flex justify-start">
                        <TimelineCard t={t} />
                      </div>
                    </>
                  )}

                  {/* Center marker */}
                  <div className="absolute left-1/2 top-2 -translate-x-1/2">
                    <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink-900 bg-white font-display text-base font-light text-ink-900 shadow-lg shadow-ink-900/5">
                      {t.step}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ t }: { t: { step: string; title: string; description: string } }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group h-full max-w-md rounded-2xl border border-ink-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-ink-900/5"
    >
      <div className="flex items-start justify-between">
        <div className="font-display text-5xl font-light text-ink-200 transition-colors group-hover:text-gold-400">
          {t.step}
        </div>
        <div className="rounded-full bg-ink-100 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-ink-500">
          Etapa
        </div>
      </div>
      <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-ink-900">
        {t.title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
        {t.description}
      </p>
    </motion.div>
  );
}
