"use client";

import { useState } from "react";
import { ArrowRight, Users2 } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Course = { nivo: string; lessons: number; freq: number; price: number };
type Single = { dur: string; price: number };

type Tab = {
  id: string;
  label: string;
  accent: "primary" | "secondary";
  courses?: Course[];
  single?: { title: string; rows: Single[] };
  note?: string;
};

const tabs: Tab[] = [
  {
    id: "nemacki",
    label: "Nemački",
    accent: "primary",
    courses: [
      { nivo: "A1", lessons: 33, freq: 2, price: 19800 },
      { nivo: "A2.1", lessons: 24, freq: 2, price: 14400 },
      { nivo: "A2.2", lessons: 26, freq: 2, price: 15600 },
      { nivo: "B1.1", lessons: 30, freq: 2, price: 18000 },
      { nivo: "B1.2", lessons: 30, freq: 2, price: 18000 },
      { nivo: "B+", lessons: 33, freq: 3, price: 19800 },
      { nivo: "B2", lessons: 40, freq: 3, price: 24000 },
      { nivo: "C1", lessons: 50, freq: 3, price: 30000 },
    ],
  },
  {
    id: "engleski",
    label: "Engleski",
    accent: "secondary",
    courses: [
      { nivo: "Beginners", lessons: 20, freq: 2, price: 12000 },
      { nivo: "Elementary", lessons: 24, freq: 2, price: 14400 },
      { nivo: "Pre-Intermediate", lessons: 30, freq: 2, price: 18000 },
      { nivo: "Intermediate", lessons: 36, freq: 2, price: 21600 },
      { nivo: "Upper-Intermediate", lessons: 33, freq: 3, price: 19800 },
      { nivo: "Advanced", lessons: 40, freq: 3, price: 24000 },
      { nivo: "Proficiency", lessons: 50, freq: 3, price: 30000 },
    ],
  },
  {
    id: "medicinski",
    label: "Medicinski nemački",
    accent: "primary",
    courses: [
      { nivo: "B1", lessons: 30, freq: 2, price: 21000 },
      { nivo: "B2", lessons: 36, freq: 2, price: 25200 },
    ],
    single: {
      title: "Individualni čas — medicinski nemački",
      rows: [
        { dur: "90 min", price: 2550 },
        { dur: "60 min", price: 1800 },
      ],
    },
  },
  {
    id: "individualno",
    label: "Individualna nastava",
    accent: "secondary",
    single: {
      title: "Individualni čas — svi jezici",
      rows: [
        { dur: "90 min", price: 2500 },
        { dur: "60 min", price: 1800 },
      ],
    },
    note: "Poluindividualni časovi — pohađaš časove sa još jednom osobom i delite troškove na pola.",
  },
];

const rsd = (n: number) => n.toLocaleString("de-DE");

export function Pricing() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <Section id="cenovnik" className="scroll-mt-24 bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Cenovnik"
          title="Transparentne cene, bez skrivenih troškova"
          description="Izaberi format koji ti odgovara. Detalje dogovaramo na konsultacijama — cena je fiksna."
        />

        {/* tabovi */}
        <div className="mt-12 flex flex-wrap justify-center gap-2.5">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
                i === active
                  ? "bg-ink text-white shadow-soft"
                  : "border border-ink/10 bg-white text-ink/70 hover:text-ink"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <Reveal key={tab.id} className="mx-auto mt-10 max-w-3xl">
          {/* kursevi po nivoima */}
          {tab.courses && (
            <>
              {/* tabela — desktop */}
              <div className="hidden overflow-hidden rounded-2xl border border-ink/5 shadow-soft md:block">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary to-secondary text-xs font-bold uppercase tracking-wider text-white">
                      <th className="px-6 py-4">Nivo</th>
                      <th className="px-6 py-4">Trajanje</th>
                      <th className="px-6 py-4">Dinamika</th>
                      <th className="px-6 py-4 text-right">Cena</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tab.courses.map((c, i) => (
                      <tr
                        key={c.nivo}
                        className={cn(
                          "transition-colors hover:bg-primary/5",
                          i % 2 === 1 ? "bg-surface/60" : "bg-white"
                        )}
                      >
                        <td className="px-6 py-3.5">
                          <span className="inline-grid min-w-[3.5rem] place-items-center rounded-lg bg-gradient-to-br from-primary to-secondary px-3 py-1.5 text-sm font-bold text-white shadow-sm">
                            {c.nivo}
                          </span>
                        </td>
                        <td className="px-6 py-3.5 text-sm text-ink/80">
                          {c.lessons} × 90 min
                        </td>
                        <td className="px-6 py-3.5 text-sm text-ink/80">
                          {c.freq} × 90 min / nedeljno
                        </td>
                        <td className="whitespace-nowrap px-6 py-3.5 text-right font-display text-lg font-extrabold text-ink">
                          {rsd(c.price)}{" "}
                          <span className="text-xs font-semibold text-muted">
                            RSD
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* kartice — mobilni */}
              <div className="space-y-3 md:hidden">
                {tab.courses.map((c) => (
                  <div
                    key={c.nivo}
                    className="rounded-2xl border border-ink/5 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-grid min-w-[3.25rem] place-items-center rounded-lg bg-gradient-to-br from-primary to-secondary px-3 py-1.5 text-sm font-bold text-white">
                        {c.nivo}
                      </span>
                      <span className="whitespace-nowrap font-display text-lg font-extrabold text-ink">
                        {rsd(c.price)}{" "}
                        <span className="text-xs font-semibold text-muted">
                          RSD
                        </span>
                      </span>
                    </div>
                    <div className="mt-4 flex gap-8">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink/40">
                          Trajanje
                        </p>
                        <p className="text-sm font-medium text-ink">
                          {c.lessons} × 90 min
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink/40">
                          Dinamika
                        </p>
                        <p className="text-sm font-medium text-ink">
                          {c.freq} × nedeljno
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* individualni časovi */}
          {tab.single && (
            <div className={cn(tab.courses && "mt-8")}>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-ink/40">
                {tab.single.title}
              </h3>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {tab.single.rows.map((r) => (
                  <div
                    key={r.dur}
                    className="flex items-center justify-between rounded-2xl border border-ink/5 bg-white px-5 py-4 shadow-sm"
                  >
                    <span className="font-semibold text-ink">{r.dur}</span>
                    <span className="whitespace-nowrap font-display text-lg font-extrabold text-ink">
                      {rsd(r.price)}{" "}
                      <span className="text-xs font-semibold text-muted">
                        RSD
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* napomena */}
          {tab.note && (
            <div className="mt-4 flex items-start gap-3 rounded-2xl border border-ink/5 bg-white/60 px-5 py-4 text-sm text-muted">
              <Users2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-dark" />
              <span>{tab.note}</span>
            </div>
          )}

          {/* CTA */}
          <div className="mt-8 text-center">
            <Link
              href="/kontakt"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-ink shadow-soft transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:text-white"
            >
              Zatraži ponudu
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
