import { Target, Map, MessagesSquare, LineChart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    num: "01",
    title: "Procena nivoa",
    text: "Besplatne konsultacije na kojima utvrđujemo tvoj nivo i ciljeve.",
    icon: Target,
  },
  {
    num: "02",
    title: "Plan učenja",
    text: "Pravimo program prilagođen tvom tempu, rasporedu i potrebama.",
    icon: Map,
  },
  {
    num: "03",
    title: "Učenje kroz razgovor",
    text: "Govoriš od prvog časa. Gramatiku savladavaš kroz praktične situacije.",
    icon: MessagesSquare,
  },
  {
    num: "04",
    title: "Praćenje napretka",
    text: "Redovni feedback da uvek znaš gde si — i provera znanja na kraju nivoa.",
    icon: LineChart,
  },
];

export function Methodology() {
  return (
    <Section
      id="metodologija"
      className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* sticky levo */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Naša metodologija"
              title="Metoda koja te zaista nauči da govoriš"
              description="Zaboravi bubanje. Kod nas učiš jezik onako kako se zaista koristi — u razgovoru."
            />
            <div className="mt-8 hidden rounded-3xl bg-ink p-8 text-white shadow-card lg:block">
              <p className="font-display text-xl font-semibold leading-snug">
                „Govoriš od prvog časa.”
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Časovi su vođeni kroz stvarne situacije — naručuješ kafu, vodiš
                intervju, pričaš o planovima. Gramatika dolazi prirodno, kroz
                upotrebu.
              </p>
            </div>
          </div>

          {/* koraci — timeline desno */}
          <ol className="relative space-y-6 border-l-2 border-dashed border-primary/25 pl-10">
            {steps.map((s, i) => (
              <Reveal
                as="li"
                key={s.num}
                delay={`${i * 0.08}s`}
                className="relative"
              >
                <span className="absolute -left-10 top-6 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full bg-primary text-ink shadow-soft ring-4 ring-white">
                  <s.icon className="h-5 w-5" strokeWidth={2.2} aria-hidden />
                </span>
                <div className="group rounded-2xl border border-ink/5 bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="font-display text-sm font-bold text-primary-dark">
                    Korak {s.num}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
