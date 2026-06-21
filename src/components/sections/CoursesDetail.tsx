import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import DE from "country-flag-icons/react/3x2/DE";
import GB from "country-flag-icons/react/3x2/GB";
import US from "country-flag-icons/react/3x2/US";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Lang = {
  id: string;
  name: string;
  flags: (typeof DE)[];
  accent: "primary" | "secondary";
  badge: string;
  levels: string[];
  intro: string;
  teacher: string;
  gives: string[];
  exams: string[];
  audience: string[];
};

const langs: Lang[] = [
  {
    id: "nemacki",
    name: "Nemački jezik",
    flags: [DE],
    accent: "primary",
    badge: "Naš glavni program",
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    intro:
      "Učiš nemački sistematično — od prvih reči do tečnog izražavanja — kroz razgovor i stvarne situacije. Poseban fokus na pripremu za zvanične ispite i nemački za posao i život u inostranstvu.",
    teacher: "Ema Alidjukić",
    gives: [
      "Mali grupni (do 6) i individualni časovi",
      "Konverzacija od prvog časa",
      "Svi udžbenici i materijali uključeni",
      "Redovne provere znanja i feedback",
    ],
    exams: ["Goethe-Zertifikat", "ÖSD", "TestDaF", "telc"],
    audience: [
      "Početnici",
      "Učenici i studenti",
      "Selidba / posao u inostranstvu",
      "Zdravstveni radnici",
      "Firme",
    ],
  },
  {
    id: "engleski",
    name: "Engleski jezik",
    flags: [GB, US],
    accent: "secondary",
    badge: "Od početnog do naprednog",
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    intro:
      "Engleski koji odmah koristiš — kroz konverzaciju, čitanje i stvarne situacije. Priprema za međunarodne ispite, poslovni engleski i samopouzdano sporazumevanje u svakoj prilici.",
    teacher: "Jana Torbica",
    gives: [
      "Grupna i individualna nastava",
      "Konverzacija i rad na izgovoru",
      "Poslovni engleski",
      "Priprema za međunarodne ispite",
    ],
    exams: ["Cambridge", "IELTS", "TOEFL"],
    audience: [
      "Početnici",
      "Učenici i studenti",
      "Poslovni engleski",
      "Putovanja",
      "Firme",
    ],
  },
];

export function CoursesDetail() {
  return (
    <Section className="bg-white py-20 sm:py-28">
      <Container className="space-y-10">
        {langs.map((l) => {
          const isPrimary = l.accent === "primary";
          return (
            <Reveal key={l.id}>
              <div
                id={l.id}
                className="grid scroll-mt-28 overflow-hidden rounded-3xl shadow-card ring-1 ring-ink/5 lg:grid-cols-[0.92fr_1.3fr]"
              >
                {/* LEVO — tamna identity tabla */}
                <div className="relative overflow-hidden bg-ink p-8 sm:p-10">
                  <div
                    className={cn(
                      "pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl",
                      isPrimary ? "bg-primary/25" : "bg-secondary/25"
                    )}
                  />
                  <div className="relative flex h-full flex-col">
                    <span
                      className={cn(
                        "text-xs font-semibold uppercase tracking-wider",
                        isPrimary ? "text-primary-light" : "text-secondary-light"
                      )}
                    >
                      {l.badge}
                    </span>

                    <div className="mt-4 flex items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-2xl bg-white/10 p-2.5 ring-1 ring-white/10">
                        {l.flags.map((Flag, i) => (
                          <Flag
                            key={i}
                            className="h-7 w-auto rounded-md shadow-sm ring-1 ring-white/20"
                          />
                        ))}
                      </span>
                      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {l.name}
                      </h2>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {l.levels.map((lvl) => (
                        <span
                          key={lvl}
                          className={cn(
                            "rounded-full px-2.5 py-1 text-xs font-semibold",
                            isPrimary
                              ? "bg-primary/15 text-primary-light"
                              : "bg-secondary/15 text-secondary-light"
                          )}
                        >
                          {lvl}
                        </span>
                      ))}
                    </div>

                    <p className="mt-6 leading-relaxed text-white/70">{l.intro}</p>

                    <p className="mt-4 text-sm text-white/60">
                      Predaje:{" "}
                      <Link
                        href="/o-nama#tim"
                        className={cn(
                          "font-semibold underline-offset-2 hover:underline",
                          isPrimary ? "text-primary-light" : "text-secondary-light"
                        )}
                      >
                        {l.teacher}
                      </Link>
                    </p>

                    <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                      <Link
                        href="/kontakt"
                        className={cn(
                          "inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold shadow-soft transition-all hover:-translate-y-0.5",
                          isPrimary
                            ? "bg-primary text-ink hover:bg-primary-dark hover:text-white"
                            : "bg-secondary text-white hover:bg-secondary-dark"
                        )}
                      >
                        Zatraži ponudu
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <a
                        href="#cenovnik"
                        className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white/20 px-6 text-sm font-semibold text-white transition-colors hover:border-white/40"
                      >
                        Pogledaj cene
                      </a>
                    </div>
                  </div>
                </div>

                {/* DESNO — detalji */}
                <div className="bg-white p-8 sm:p-10">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-ink/50">
                    Šta dobijaš
                  </h3>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {l.gives.map((g) => (
                      <li
                        key={g}
                        className="flex items-start gap-3 text-sm text-ink/80"
                      >
                        <span
                          className={cn(
                            "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-white",
                            isPrimary ? "bg-primary" : "bg-secondary"
                          )}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {g}
                      </li>
                    ))}
                  </ul>

                  <div className="my-8 h-px bg-ink/5" />

                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-ink/50">
                        Priprema za ispite
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {l.exams.map((e) => (
                          <span
                            key={e}
                            className="rounded-full border border-ink/10 bg-surface px-3 py-1.5 text-sm font-semibold text-ink/70"
                          >
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-ink/50">
                        Za koga je
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {l.audience.map((a) => (
                          <span
                            key={a}
                            className={cn(
                              "rounded-full px-3 py-1.5 text-sm font-medium",
                              isPrimary
                                ? "bg-primary/10 text-primary-dark"
                                : "bg-secondary/10 text-secondary-dark"
                            )}
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </Container>
    </Section>
  );
}
