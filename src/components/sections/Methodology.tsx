import { Target, Map, MessagesSquare, LineChart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    num: "01",
    title: "Procena nivoa",
    text: "Besplatan probni čas na kom utvrđujemo tvoj nivo i ciljeve.",
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
    text: "Redovni feedback i provere znanja da uvek znaš gde si.",
    icon: LineChart,
  },
];

export function Methodology() {
  return (
    <Section
      id="metodologija"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Naša metodologija"
          title="Metod koji te zaista nauči da govoriš"
          description="Zaboravi bubanje. Kod nas učiš jezik onako kako se zaista koristi — u razgovoru."
        />

        <Reveal stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="relative rounded-3xl bg-surface p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary-dark">
                <s.icon className="h-6 w-6" strokeWidth={2} aria-hidden />
              </span>
              <span className="absolute right-6 top-6 font-display text-3xl font-extrabold text-primary/15">
                {s.num}
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              {i < steps.length - 1 && (
                <span className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 place-items-center text-primary lg:grid">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
