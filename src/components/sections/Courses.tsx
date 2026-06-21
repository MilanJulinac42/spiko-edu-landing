import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import GB from "country-flag-icons/react/3x2/GB";
import US from "country-flag-icons/react/3x2/US";
import DE from "country-flag-icons/react/3x2/DE";

const courses = [
  {
    flags: [DE],
    name: "Nemački jezik",
    accent: "primary" as const,
    description:
      "Naš glavni program. Sistematično učenje nemačkog za školu, posao ili život u inostranstvu. Priprema za Goethe i ÖSD sertifikate.",
    levels: ["A1", "A2", "B1", "B2", "C1"],
    features: [
      "Priprema za Goethe / ÖSD",
      "Nemački za zdravstvene radnike",
      "Grupni, individualni i intenzivni kursevi",
    ],
  },
  {
    flags: [GB, US],
    name: "Engleski jezik",
    accent: "secondary" as const,
    description:
      "Od početnog do naprednog nivoa. Priprema za Cambridge i IELTS ispite, poslovni engleski i konverzacija.",
    levels: ["A1", "A2", "B1", "B2", "C1"],
    features: [
      "Grupni i individualni časovi",
      "Priprema za međunarodne ispite",
      "Poslovni engleski",
    ],
  },
];

export function Courses() {
  return (
    <Section id="kursevi" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Naši kursevi"
          title="Izaberi jezik, mi se brinemo za ostalo"
          description="Bilo da kreneš od nule ili usavršavaš ono što već znaš — imamo program za tebe."
        />

        <Reveal stagger className="mt-14 grid gap-8 md:grid-cols-2">
          {courses.map((c) => {
            const isPrimary = c.accent === "primary";
            return (
              <article
                key={c.name}
                className="group relative overflow-hidden rounded-3xl border border-ink/5 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl transition-opacity group-hover:opacity-100 ${
                    isPrimary ? "bg-primary/15" : "bg-secondary/15"
                  } opacity-60`}
                />
                <div className="relative">
                  <span className="inline-flex items-center gap-2 rounded-2xl bg-surface p-3">
                    {c.flags.map((Flag, i) => (
                      <Flag
                        key={i}
                        className="h-9 w-auto rounded-md shadow-sm ring-1 ring-ink/10"
                      />
                    ))}
                  </span>
                  <h3 className="mt-5 text-2xl font-bold text-ink">{c.name}</h3>
                  <p className="mt-3 leading-relaxed text-muted">
                    {c.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {c.levels.map((lvl) => (
                      <span
                        key={lvl}
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          isPrimary
                            ? "bg-primary/10 text-primary-dark"
                            : "bg-secondary/10 text-secondary-dark"
                        }`}
                      >
                        {lvl}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-6 space-y-3">
                    {c.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-ink/80">
                        <span
                          className={`grid h-5 w-5 shrink-0 place-items-center rounded-full text-white ${
                            isPrimary ? "bg-primary" : "bg-secondary"
                          }`}
                        >
                          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
                            <path
                              d="M5 13l4 4L19 7"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="/kontakt"
                    variant={isPrimary ? "primary" : "secondary"}
                    className="mt-8 w-full"
                  >
                    Saznaj više
                  </Button>
                </div>
              </article>
            );
          })}
        </Reveal>
      </Container>
    </Section>
  );
}
