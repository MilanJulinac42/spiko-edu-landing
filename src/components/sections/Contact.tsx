"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const inputClass =
  "w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-ink placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!ACCESS_KEY) {
      setStatus("error");
      return;
    }
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);
    data.append("subject", "Nova prijava sa sajta — Spiko Edu");
    data.append("from_name", "Spiko Edu sajt");

    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="kontakt" className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="overflow-hidden rounded-3xl bg-ink shadow-card">
          <div className="grid lg:grid-cols-2">
            {/* leva strana */}
            <div className="relative overflow-hidden p-8 sm:p-12">
              <Image
                src="/cities/study.jpg"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/25 mix-blend-multiply" />
              <div className="absolute inset-0 bg-ink/85" />
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
              {status === "sent" ? (
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
                  {/* honeypot protiv spama */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden
                  />
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
                  <Button
                    size="lg"
                    className="w-full"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Šaljem…" : "Pošalji prijavu"}
                  </Button>
                  {status === "error" && (
                    <p className="text-center text-sm font-medium text-red-600">
                      Nešto nije u redu. Pokušaj ponovo ili nam piši na{" "}
                      <a
                        href="mailto:spikoedu@gmail.com"
                        className="underline"
                      >
                        spikoedu@gmail.com
                      </a>
                      .
                    </p>
                  )}
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
        </Reveal>
      </Container>
    </Section>
  );
}
