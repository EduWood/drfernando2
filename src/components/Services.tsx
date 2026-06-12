import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem } from "./Reveal";
import { ArrowUpRight, Activity, Microscope } from "lucide-react";

export function Services() {
  const services = [
    {
      tag: "01 · Consulta",
      title: "Consulta Gastroenterológica",
      description:
        "Acompanhamento de doenças gastrointestinais em adultos e crianças através de avaliação clínica e exames complementares.",
      bullets: [
        "Anamnese completa e exame físico direcionado",
        "Análise crítica de exames prévios",
        "Plano terapêutico individualizado",
      ],
      icon: Activity,
    },
    {
      tag: "02 · Cirurgia",
      title: "Cirurgia Videolaparoscópica",
      description:
        "Procedimentos minimamente invasivos realizados com tecnologia moderna, proporcionando recuperação mais rápida e menor desconforto pós-operatório.",
      bullets: [
        "Pequenas incisões e câmera de alta definição",
        "Menos dor e menor tempo de internação",
        "Retorno precoce às atividades do dia a dia",
      ],
      icon: Microscope,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-500">
              <span className="h-px w-8 bg-ink-400" />
              Serviços
            </div>
            <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] text-ink-900 sm:text-5xl lg:text-6xl">
              Dois caminhos.{" "}
              <span className="italic text-gold-500">O mesmo cuidado</span>{" "}
              em cada detalhe.
            </h2>
          </Reveal>
        </div>

        <Stagger
          className="mt-16 grid gap-6 lg:grid-cols-2"
          delayChildren={0.15}
          staggerChildren={0.12}
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-200 bg-ink-50 p-8 sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink-500">
                    {s.tag}
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-ink-900 shadow-sm transition-colors group-hover:bg-ink-900 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="mt-10 font-display text-3xl font-light leading-tight tracking-tight text-ink-900 sm:text-4xl">
                  {s.title}
                </h3>

                <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
                  {s.description}
                </p>

                <ul className="mt-8 space-y-3 border-t border-ink-200 pt-6">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-[14px] text-ink-700"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex items-center justify-between border-t border-ink-200 pt-6">
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-2 text-[13px] font-medium text-ink-900"
                  >
                    Agendar este serviço
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                  </a>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-ink-400">
                    Disponível
                  </div>
                </div>
              </motion.article>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
