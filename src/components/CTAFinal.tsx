import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { ArrowUpRight, MessageCircle, Calendar } from "lucide-react";
import { SITE } from "../lib/data";

export function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[40px] bg-ink-900 px-8 py-20 text-white sm:px-16 sm:py-28 lg:px-24">
            {/* Background image overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-30">
              <img
                src="/images/clinic-2.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
            </div>

            {/* Orbs */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gold-500/15 blur-3xl" />
              <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-medical-500/15 blur-3xl" />
            </div>

            <div className="relative grid items-end gap-12 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 backdrop-blur"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold-100/80">
                    Comece hoje
                  </span>
                </motion.div>

                <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:text-7xl">
                  Cuide da sua saúde
                  <br />
                  gastrointestinal{" "}
                  <span className="italic gold-text">com quem entende</span>.
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
                  Agende uma consulta e dê o primeiro passo para um cuidado
                  especializado, humano e baseado em mais de duas décadas de
                  experiência.
                </p>
              </div>

              <div className="lg:col-span-4">
                <div className="flex flex-col gap-3">
                  <a
                    href="#contato"
                    className="group inline-flex items-center justify-between gap-2 rounded-2xl bg-white px-6 py-5 text-sm font-medium text-ink-950 transition-all hover:bg-gold-100"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Agendar Consulta
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                  </a>
                  <a
                    href={`https://wa.me/${SITE.whatsapp}?text=Olá%20Dr.%20Fernando,%20gostaria%20de%20agendar%20uma%20consulta.`}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-between gap-2 rounded-2xl border border-white/15 bg-white/[0.05] px-6 py-5 text-sm font-medium text-white backdrop-blur transition-all hover:border-white/30 hover:bg-white/[0.1]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-gold-300" />
                      Falar no WhatsApp
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                  </a>
                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                    className="group inline-flex items-center justify-between gap-2 rounded-2xl border border-white/10 px-6 py-5 text-sm font-medium text-white/80 transition-all hover:border-white/20 hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      Ligar · {SITE.phone}
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
