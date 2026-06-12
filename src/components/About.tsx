import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem } from "./Reveal";
import { Quote, GraduationCap, Hospital, Stethoscope } from "lucide-react";

export function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-ink-50 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-16 lg:grid-cols-12">
          {/* Left: Image composition */}
          <div className="relative lg:col-span-5">
            <Reveal>
              <div className="relative">
                <div className="img-zoom relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink-200 shadow-2xl shadow-ink-900/10">
                  <img
                    src="/images/clinic-1.jpg"
                    alt="Consultório Dr. Fernando Libório"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Floating stat card */}
                <motion.div
                  initial={{ opacity: 0, x: -20, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute -bottom-8 -left-6 hidden rounded-2xl border border-ink-200 bg-white p-6 shadow-2xl shadow-ink-900/10 sm:block"
                >
                  <div className="font-display text-5xl font-light text-ink-900">
                    25<span className="text-gold-400">+</span>
                  </div>
                  <div className="mt-1 text-[12px] uppercase tracking-[0.18em] text-ink-500">
                    Anos de experiência
                  </div>
                </motion.div>

                {/* Small accent image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3 }}
                  className="img-zoom absolute -right-8 -top-8 hidden h-44 w-44 overflow-hidden rounded-2xl border-4 border-white shadow-2xl shadow-ink-900/20 lg:block"
                >
                  <img
                    src="/images/clinic-2.jpg"
                    alt="Tecnologia videolaparoscópica"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </Reveal>
          </div>

          {/* Right: Texto */}
          <div className="lg:col-span-7 lg:pl-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-500">
                <span className="h-px w-8 bg-ink-400" />
                Sobre o médico
              </div>
              <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] text-ink-900 sm:text-5xl lg:text-6xl">
                Trinta anos de medicina.
                <br />
                <span className="italic text-gold-500">Vinte e cinco</span> de
                prática dedicada.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-lg leading-relaxed text-ink-600">
                Formado pela{" "}
                <strong className="font-medium text-ink-800">
                  PUC de Sorocaba
                </strong>{" "}
                há 30 anos, o Dr. Fernando Libório construiu uma trajetória
                sólida em Cirurgia do Aparelho Digestivo e Endoscopia,
                especializando-se em técnicas minimamente invasivas que
                transformaram a experiência cirúrgica de centenas de pacientes.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-5 text-lg leading-relaxed text-ink-600">
                Hoje é{" "}
                <strong className="font-medium text-ink-800">
                  referência em cirurgias por videolaparoscopia no Litoral
                  Norte de São Paulo
                </strong>
                , médico cirurgião do Hospital de Clínicas de São Sebastião e
                emergencista — uma combinação rara que une a precisão
                técnica, a serenidade da experiência e a capacidade de decisão
                em momentos críticos.
              </p>
            </Reveal>

            <Stagger
              className="mt-12 grid gap-4 sm:grid-cols-2"
              delayChildren={0.3}
              staggerChildren={0.08}
            >
              {[
                {
                  icon: GraduationCap,
                  title: "Formação",
                  text: "PUC de Sorocaba · 30 anos de formação médica",
                },
                {
                  icon: Stethoscope,
                  title: "Especializações",
                  text: "Endoscopia · Cirurgia do Aparelho Digestivo",
                },
                {
                  icon: Hospital,
                  title: "Atuação hospitalar",
                  text: "Hospital de Clínicas de São Sebastião/SP",
                },
                {
                  icon: Quote,
                  title: "Referência regional",
                  text: "Cirurgias videolaparoscópicas no Litoral Norte/SP",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  className="card-lift group rounded-2xl border border-ink-200 bg-white p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-900 text-white transition-colors group-hover:bg-gold-500">
                    <item.icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
                  </div>
                  <div className="mt-5 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-500">
                    {item.title}
                  </div>
                  <div className="mt-2 text-[15px] leading-snug text-ink-800">
                    {item.text}
                  </div>
                </motion.div>
              ))}
            </Stagger>

            <Reveal delay={0.4}>
              <div className="mt-12 border-l-2 border-gold-400 pl-6 italic text-ink-700">
                “Transformar o bem-estar começa com o cuidado especializado da
                saúde gastrointestinal.”
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
