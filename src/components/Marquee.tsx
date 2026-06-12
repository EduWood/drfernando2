import { motion } from "framer-motion";

const ITEMS = [
  "Cirurgia Videolaparoscópica",
  "Endoscopia",
  "Gastroenterologia",
  "Atendimento Humanizado",
  "Crianças e Adultos",
  "Hospital de Clínicas · São Sebastião",
  "Mais de 25 anos de experiência",
  "Referência no Litoral Norte de SP",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-ink-200 bg-ink-50 py-8">
      <motion.div
        className="flex w-max gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-12 font-display text-2xl font-light text-ink-400 sm:text-3xl"
          >
            <span className="italic">{item}</span>
            <span className="text-gold-400">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
