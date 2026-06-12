import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { ShieldCheck, Award, HeartPulse, Users } from "lucide-react";

const STATS = [
  { value: "25+", label: "Anos de experiência" },
  { value: "30", label: "Anos de formação" },
  { value: "100%", label: "Cuidado individualizado" },
  { value: "Litoral", label: "Referência regional" },
];

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Segurança clínica",
    text: "Atuação em ambiente hospitalar de referência, com protocolos atualizados e decisão baseada em evidência.",
  },
  {
    icon: Award,
    title: "Técnica refinada",
    text: "Especialização em cirurgia videolaparoscópica e endoscopia, com domínio de equipamentos modernos.",
  },
  {
    icon: HeartPulse,
    title: "Cuidado humano",
    text: "Atendimento próximo, escuta qualificada e relação construída com empatia e respeito ao paciente.",
  },
  {
    icon: Users,
    title: "Para todas as idades",
    text: "Atendimento gastroenterológico para crianças e adultos, com abordagem específica para cada fase.",
  },
];

export function Trust() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Stats */}
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink-200 bg-ink-100 sm:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-white p-8 sm:p-10"
              >
                <div className="font-display text-4xl font-light text-ink-900 sm:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-[12px] uppercase tracking-[0.18em] text-ink-500">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* Pillars */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-ink-200 bg-ink-50 p-6 transition-all hover:border-ink-900">
                  <Icon
                    className="h-6 w-6 text-ink-900 transition-colors group-hover:text-gold-500"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-ink-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-600">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
