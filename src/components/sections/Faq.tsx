"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Kako da znam koji nivo mi odgovara?",
    a: "Na besplatnom probnom času procenjujemo tvoje trenutno znanje i preporučujemo grupu ili program koji ti najbolje odgovara. Nema pogrešnog početka — krećemo odakle god da si.",
  },
  {
    q: "Da li su časovi uživo ili online?",
    a: "Nudimo oba formata. Možeš pohađati nastavu u našoj učionici u Novom Sadu ili online preko video poziva. Mnogi polaznici kombinuju oba.",
  },
  {
    q: "Koliko traje jedan kurs?",
    a: "Standardni nivo (npr. A1 ili B1) traje oko 4 meseca uz dva časa nedeljno. Intenzivni kursevi su brži, a tempo uvek možemo prilagoditi tvojim ciljevima.",
  },
  {
    q: "Da li pripremate za međunarodne ispite?",
    a: "Da. Imamo ciljane programe za Cambridge i IELTS (engleski) i Goethe i ÖSD (nemački), uključujući probne testove i tehnike za polaganje.",
  },
  {
    q: "Šta ako propustim čas?",
    a: "Dobićeš materijale sa časa, a u dogovoru sa predavačem moguće je nadoknaditi gradivo. Kod individualne nastave termin jednostavno pomeramo.",
  },
  {
    q: "Da li su materijali uključeni u cenu?",
    a: "Jesu. Svi udžbenici, radne sveske i dodatni materijali su deo kursa — bez skrivenih troškova.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Česta pitanja"
          title="Imaš pitanje? Imamo odgovor"
          description="A ako ne nađeš ono što tražiš, javi nam se — rado ćemo pomoći."
        />

        <Reveal stagger className="mt-12 space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={cn(
                  "rounded-2xl border transition-colors",
                  isOpen
                    ? "border-primary/40 bg-surface"
                    : "border-ink/10 bg-white"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-ink">{item.q}</span>
                  <span
                    className={cn(
                      "grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all",
                      isOpen
                        ? "rotate-45 bg-primary text-ink"
                        : "bg-ink/5 text-ink"
                    )}
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                      <path
                        d="M12 5v14M5 12h14"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-300",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 leading-relaxed text-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </Section>
  );
}
