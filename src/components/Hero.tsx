import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { STATS, SITE } from "../lib/data";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="hero-gradient grain relative overflow-hidden text-white"
    >
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-medical-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-28 pt-36 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-40 lg:pt-44">
        {/* Texto */}
        <motion.div
          style={{ y: textY, opacity }}
          className="relative z-10 lg:col-span-7"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-300 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-300" />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold-100/80">
              Gastroenterologia · Cirurgia · Endoscopia
            </span>
          </motion.div>

          {/* Headline */}
          <div className="mt-8 overflow-hidden">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.5rem,6.5vw,5.25rem)] font-light leading-[0.95] tracking-[-0.03em]"
            >
              A referência em{" "}
              <span className="italic gold-text">gastrocirurgia</span>
              <br />
              no Litoral Norte
              <br />
              de São Paulo.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg"
          >
            Mais de 25 anos transformando o cuidado gastrointestinal em
            segurança, tecnologia e atendimento humanizado — para crianças
            e adultos.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-ink-950 transition-all hover:bg-gold-100"
            >
              Agendar Consulta
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=Olá%20Dr.%20Fernando,%20gostaria%20de%20agendar%20uma%20consulta.`}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-medium text-white backdrop-blur transition-all hover:border-white/30 hover:bg-white/[0.07]"
            >
              <MessageCircle className="h-4 w-4 text-gold-300" />
              Falar no WhatsApp
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-white/50"
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold-300" />
              Hospital de Clínicas de São Sebastião
            </span>
            <span className="hidden h-3 w-px bg-white/15 sm:block" />
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-gold-300" />
              Atendimento humanizado e individualizado
            </span>
          </motion.div>
        </motion.div>

        {/* Imagem */}
        <motion.div
          style={{ y: imgY }}
          className="relative z-10 lg:col-span-5"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[28px] border border-white/10 bg-ink-900/40"
          >
            <img
              src="/images/dr-fernando.jpg"
              alt="Dr. Fernando Libório — Gastrocirurgião"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="glass-dark absolute bottom-4 left-4 right-4 rounded-2xl p-3.5 sm:bottom-5 sm:left-5 sm:right-5 sm:p-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-400/20 text-gold-300">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-gold-200/70 sm:text-[11px] sm:tracking-[0.2em]">
                    Cirurgião
                  </div>
                  <div className="text-[13px] font-medium text-white sm:text-sm">
                    Hospital de Clínicas de São Sebastião
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Top badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="absolute right-4 top-4 rounded-full border border-white/15 bg-ink-950/50 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-white/80 backdrop-blur"
            >
              CRM/SP
            </motion.div>
          </motion.div>

          {/* Decorative ring */}
          <div className="pointer-events-none absolute -right-10 -top-10 hidden h-40 w-40 rounded-full border border-gold-300/20 lg:block" />
          <div className="pointer-events-none absolute -bottom-8 -left-8 hidden h-24 w-24 rounded-full border border-white/10 lg:block" />
        </motion.div>
      </div>

      {/* Stats strip */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {STATS.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="px-6 py-8 sm:px-10 sm:py-10"
            >
              <div className="font-display text-4xl font-light text-white sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-[12px] uppercase tracking-[0.18em] text-white/55">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-32 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
          <span>Role para descobrir</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-white/60 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
