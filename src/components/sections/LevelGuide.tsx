import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const levels = [
  { code: "A1", name: "Početni", text: "Osnovne fraze, predstavljanje, jednostavna pitanja." },
  { code: "A2", name: "Osnovni", text: "Svakodnevne situacije i kratki razgovori." },
  { code: "B1", name: "Srednji", text: "Samostalno se snalaziš u većini situacija." },
  { code: "B2", name: "Viši srednji", text: "Tečno o različitim temama, poslovni kontekst." },
  { code: "C1", name: "Napredni", text: "Precizno i spontano izražavanje, nijanse jezika." },
  { code: "C2", name: "Vrhunski", text: "Skoro maternji nivo razumevanja i izražavanja." },
];

export function LevelGuide() {
  return (
    <Section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Nivoi znanja (CEFR)"
          title="Gde si ti? Krećemo odakle god da si"
          description="Evropski okvir deli znanje na šest nivoa. Na besplatnim konsultacijama utvrđujemo tvoj nivo i pravimo personalizovani plan rada."
        />

        <Reveal stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {levels.map((l, i) => {
            const pct = ((i + 1) / levels.length) * 100;
            return (
              <div
                key={l.code}
                className="rounded-2xl border border-ink/5 bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-3xl font-extrabold text-primary">
                    {l.code}
                  </span>
                  <span className="text-sm font-semibold text-ink">{l.name}</span>
                </div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{l.text}</p>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </Section>
  );
}
