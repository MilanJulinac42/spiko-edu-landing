"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const inputClass =
  "w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-ink placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Static za sada — kasnije se kači na backend / CMS.
    setSent(true);
  }

  return (
    <Section id="kontakt" className="bg-surface py-20 sm:py-28">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-ink shadow-card">
          <div className="grid lg:grid-cols-2">
            {/* leva strana */}
            <div className="relative overflow-hidden p-8 sm:p-12">
              <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative">
                <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-light">
                  Upis u toku
                </span>
                <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Zakaži besplatan probni čas
                </h2>
                <p className="mt-4 max-w-md leading-relaxed text-white/70">
                  Ostavi podatke i javljamo ti se u roku od 24h da dogovorimo
                  termin. Bez obaveza — samo dođi i vidi kako izgleda čas kod nas.
                </p>

                <ul className="mt-8 space-y-4">
                  {[
                    "Besplatna procena nivoa",
                    "Personalizovana preporuka kursa",
                    "Bez ikakvih obaveza",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3 text-white/90">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-ink">
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
                          <path
                            d="M5 13l4 4L19 7"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* desna strana — forma */}
            <div className="bg-white p-8 sm:p-12">
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-primary/15 text-4xl">
                    🎉
                  </span>
                  <h3 className="mt-5 text-2xl font-bold text-ink">
                    Hvala na prijavi!
                  </h3>
                  <p className="mt-2 max-w-xs text-muted">
                    Javljamo ti se uskoro da dogovorimo termin probnog časa.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="ime"
                      className="mb-1.5 block text-sm font-medium text-ink"
                    >
                      Ime i prezime
                    </label>
                    <input
                      id="ime"
                      name="ime"
                      required
                      autoComplete="name"
                      className={inputClass}
                      placeholder="Tvoje ime"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-ink"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        required
                        type="email"
                        autoComplete="email"
                        className={inputClass}
                        placeholder="ti@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="telefon"
                        className="mb-1.5 block text-sm font-medium text-ink"
                      >
                        Telefon
                      </label>
                      <input
                        id="telefon"
                        name="telefon"
                        type="tel"
                        autoComplete="tel"
                        className={inputClass}
                        placeholder="06x xxx xxxx"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="jezik"
                      className="mb-1.5 block text-sm font-medium text-ink"
                    >
                      Jezik koji te zanima
                    </label>
                    <select
                      id="jezik"
                      name="jezik"
                      className={inputClass}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Izaberi jezik
                      </option>
                      <option>Nemački</option>
                      <option>Engleski</option>
                      <option>Oba</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="poruka"
                      className="mb-1.5 block text-sm font-medium text-ink"
                    >
                      Poruka (opciono)
                    </label>
                    <textarea
                      id="poruka"
                      name="poruka"
                      rows={3}
                      className={inputClass}
                      placeholder="Reci nam nešto o svojim ciljevima…"
                    />
                  </div>
                  <Button size="lg" className="w-full">
                    Pošalji prijavu
                  </Button>
                  <p className="text-center text-xs text-muted">
                    Slanjem prihvataš našu{" "}
                    <Link
                      href="/politika-privatnosti"
                      className="underline hover:text-primary-dark"
                    >
                      politiku privatnosti
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
