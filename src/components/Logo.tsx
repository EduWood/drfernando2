import { motion } from "framer-motion";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#hero" className="group inline-flex items-center gap-3">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
            light
              ? "border-white/15 bg-white/5"
              : "border-ink-200 bg-white"
          }`}
        >
          <svg
            viewBox="0 0 32 32"
            className={`h-5 w-5 ${light ? "text-gold-300" : "text-ink-800"}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Monograma F + L estilizado, sutil, médico */}
            <path d="M8 6v20" />
            <path d="M8 6h12" />
            <path d="M8 15h8" />
            <path d="M22 12v14" />
            <path d="M22 26h7" />
          </svg>
        </motion.div>
        <span
          className={`absolute -bottom-1 -right-1 h-2 w-2 rounded-full ${
            light ? "bg-gold-300" : "bg-gold-400"
          }`}
        />
      </div>
      <div className="leading-tight">
        <div
          className={`text-[11px] font-medium uppercase tracking-[0.22em] ${
            light ? "text-gold-200/80" : "text-ink-400"
          }`}
        >
          Dr.
        </div>
        <div
          className={`font-display text-base font-semibold ${
            light ? "text-white" : "text-ink-900"
          }`}
        >
          Fernando Libório
        </div>
      </div>
    </a>
  );
}
