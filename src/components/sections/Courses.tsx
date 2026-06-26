import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";
import GB from "country-flag-icons/react/3x2/GB";
import US from "country-flag-icons/react/3x2/US";
import DE from "country-flag-icons/react/3x2/DE";

const courses = [
  {
    flags: [DE],
    name: "Nemački jezik",
    accent: "primary" as const,
    image: "/cities/berlin.jpg",
    description:
      "Naš glavni program. Sistematično učenje za školu, posao ili život u inostranstvu, uz pripremu za Goethe i ÖSD.",
    levels: ["A1", "A2", "B1", "B2", "C1"],
    features: [
      "Priprema za Goethe / ÖSD",
      "Nemački za zdravstvene radnike",
      "Grupno, individualno i intenzivno",
    ],
  },
  {
    flags: [GB, US],
    name: "Engleski jezik",
    accent: "secondary" as const,
    image: "/cities/london.jpg",
    description:
      "Od početnog do naprednog nivoa — priprema za Cambridge i IELTS, poslovni engleski i konverzacija.",
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
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

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {courses.map((c, idx) => {
            const isPrimary = c.accent === "primary";
            return (
              <TiltCard
                key={c.name}
                index={idx}
                className="group flex flex-col overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-soft hover:shadow-card"
              >
                {/* banner sa gradom */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 mix-blend-multiply ${
                      isPrimary ? "bg-primary/35" : "bg-secondary/45"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-xl bg-white/15 p-2 ring-1 ring-white/20 backdrop-blur">
                      {c.flags.map((Flag, i) => (
                        <Flag
                          key={i}
                          className="h-6 w-auto rounded shadow-sm ring-1 ring-white/20"
                        />
                      ))}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {c.name}
                    </h3>
                  </div>
                </div>

                {/* telo */}
                <div className="flex flex-1 flex-col p-7">
                  <p className="leading-relaxed text-muted">{c.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {c.levels.map((lvl) => (
                      <span
                        key={lvl}
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
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
                      <li
                        key={f}
                        className="flex items-center gap-3 text-sm text-ink/80"
                      >
                        <span
                          className={`grid h-5 w-5 shrink-0 place-items-center rounded-full text-white ${
                            isPrimary ? "bg-primary" : "bg-secondary"
                          }`}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="/kursevi"
                    variant={isPrimary ? "primary" : "secondary"}
                    className="mt-8 w-full"
                  >
                    Saznaj više
                  </Button>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
