import { Logo } from "./Logo";
import { NAV, SITE } from "../lib/data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-20 lg:px-10">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo light />
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/60">
              Gastroenterologia, cirurgia do aparelho digestivo, endoscopia e
              cirurgia videolaparoscópica com cuidado humano, tecnologia
              moderna e mais de 25 anos de experiência.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[12px] font-medium text-white transition-all hover:border-white/30"
              >
                WhatsApp
              </a>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[12px] font-medium text-white transition-all hover:border-white/30"
              >
                Telefone
              </a>
              <a
                href="#contato"
                className="rounded-full bg-white px-4 py-2 text-[12px] font-medium text-ink-950 transition-all hover:bg-gold-100"
              >
                Agendar
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold-200/70">
              Navegação
            </div>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-[15px] text-white/70 transition-colors hover:text-white"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold-200/70">
              Atuação
            </div>
            <ul className="mt-5 space-y-3 text-[15px] text-white/70">
              <li>Gastroenterologia · adultos e crianças</li>
              <li>Cirurgia do Aparelho Digestivo</li>
              <li>Endoscopia</li>
              <li>Cirurgia Videolaparoscópica</li>
            </ul>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold-200/70">
                Localização
              </div>
              <div className="mt-2 text-[15px] text-white/85">
                Hospital de Clínicas de São Sebastião
              </div>
              <div className="text-[13px] text-white/55">
                Litoral Norte, São Paulo
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <div className="text-[12px] text-white/45">
            © {new Date().getFullYear()} Dr. Fernando Libório · Todos os direitos reservados.
          </div>
          <div className="text-[12px] text-white/45">
            Desenvolvido com cuidado para uma experiência médica à altura
            dos seus pacientes.
          </div>
        </div>
      </div>
    </footer>
  );
}
