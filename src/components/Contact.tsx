import { Reveal } from "./Reveal";
import { SITE } from "../lib/data";
import { MapPin, Phone, MessageCircle, Mail, Clock, ArrowUpRight, AtSign } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="relative bg-ink-50 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-500">
              <span className="h-px w-8 bg-ink-400" />
              Contato
            </div>
            <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] text-ink-900 sm:text-5xl lg:text-6xl">
              Estamos prontos para{" "}
              <span className="italic text-gold-500">cuidar de você</span>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-600">
              Escolha o canal de sua preferência. Nossa equipe responde no
              menor prazo possível.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {/* Map and info */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-ink-200 bg-white">
                <div className="aspect-[16/10] w-full">
                  <iframe
                    title="Localização Dr. Fernando Libório"
                    src={SITE.mapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full grayscale-[20%]"
                  />
                </div>
                <div className="grid gap-px bg-ink-100 sm:grid-cols-3">
                  <div className="bg-white p-6">
                    <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-500">
                      <MapPin className="h-3.5 w-3.5" /> Localização
                    </div>
                    <div className="mt-3 text-[15px] leading-snug text-ink-800">
                      Hospital de Clínicas de São Sebastião
                      <br />
                      Litoral Norte, SP
                    </div>
                  </div>
                  <div className="bg-white p-6">
                    <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-500">
                      <Clock className="h-3.5 w-3.5" /> Atendimento
                    </div>
                    <div className="mt-3 text-[15px] leading-snug text-ink-800">
                      Mediante agendamento prévio
                      <br />
                      Crianças e adultos
                    </div>
                  </div>
                  <div className="bg-white p-6">
                    <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-500">
                      <AtSign className="h-3.5 w-3.5" /> Redes
                    </div>
                    <div className="mt-3 text-[15px] leading-snug text-ink-800">
                      @drfernandoliborio
                      <br />
                      Acompanhe conteúdos de saúde
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Contact actions */}
          <div className="lg:col-span-5">
            <div className="space-y-3">
              <Reveal>
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=Olá%20Dr.%20Fernando,%20gostaria%20de%20agendar%20uma%20consulta.`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-ink-200 bg-white p-6 transition-all hover:border-ink-300 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-600">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-500">
                        WhatsApp
                      </div>
                      <div className="text-base font-medium text-ink-900">
                        {SITE.whatsappDisplay}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-ink-400 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink-900" />
                </a>
              </Reveal>

              <Reveal delay={0.05}>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-ink-200 bg-white p-6 transition-all hover:border-ink-300 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900/5 text-ink-800">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-500">
                        Telefone
                      </div>
                      <div className="text-base font-medium text-ink-900">
                        {SITE.phone}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-ink-400 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink-900" />
                </a>
              </Reveal>

              <Reveal delay={0.1}>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-ink-200 bg-white p-6 transition-all hover:border-ink-300 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-500">
                        E-mail
                      </div>
                      <div className="text-base font-medium text-ink-900">
                        {SITE.email}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-ink-400 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink-900" />
                </a>
              </Reveal>

              <Reveal delay={0.15}>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-ink-200 bg-white p-6 transition-all hover:border-ink-300 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/15 to-purple-500/15 text-pink-600">
                      <AtSign className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-500">
                        Instagram
                      </div>
                      <div className="text-base font-medium text-ink-900">
                        @drfernandoliborio
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-ink-400 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink-900" />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
