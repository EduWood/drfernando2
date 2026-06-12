import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { FAQ as FAQData } from "../lib/data";
import { Plus } from "lucide-react";
import { cn } from "../utils/cn";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-ink-50 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-500">
                <span className="h-px w-8 bg-ink-400" />
                Perguntas frequentes
              </div>
              <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] text-ink-900 sm:text-5xl">
                Dúvidas comuns.{" "}
                <span className="italic text-gold-500">Respostas claras</span>.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-600">
                Reunimos as perguntas mais frequentes para facilitar o seu
                primeiro contato. Caso precise de algo mais específico,
                fale com a nossa equipe.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-ink-200 border-y border-ink-200">
              {FAQData.map((item, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={i} delay={i * 0.05}>
                    <div className="py-2">
                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                      >
                        <div className="flex items-center gap-5">
                          <span
                            className={cn(
                              "font-display text-sm font-light transition-colors",
                              isOpen ? "text-gold-500" : "text-ink-300"
                            )}
                          >
                            0{i + 1}
                          </span>
                          <h3
                            className={cn(
                              "font-display text-xl font-medium leading-tight transition-colors sm:text-2xl",
                              isOpen ? "text-ink-900" : "text-ink-800"
                            )}
                          >
                            {item.q}
                          </h3>
                        </div>
                        <span
                          className={cn(
                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500",
                            isOpen
                              ? "rotate-45 border-ink-900 bg-ink-900 text-white"
                              : "border-ink-200 text-ink-700 group-hover:border-ink-900"
                          )}
                        >
                          <Plus className="h-4 w-4" />
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.4,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="pb-7 pl-12 pr-12 text-[15px] leading-relaxed text-ink-600">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
