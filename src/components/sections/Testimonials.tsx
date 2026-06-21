import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const testimonials = [
  {
    name: "Marija Petrović",
    role: "Polaznica engleskog, B2",
    avatar: "MP",
    color: "bg-primary",
    text: "Posle godinu dana u Spiko Edu položila sam IELTS sa 7.5! Profesori su neverovatno posvećeni, a časovi nikad nisu dosadni.",
  },
  {
    name: "Nikola Jovanović",
    role: "Polaznik nemačkog, A2",
    avatar: "NJ",
    color: "bg-secondary",
    text: "Selio sam se u Nemačku zbog posla i za par meseci sam progovorio. Praktičan pristup koji stvarno funkcioniše.",
  },
  {
    name: "Ana Kovačević",
    role: "Roditelj polaznika",
    avatar: "AK",
    color: "bg-primary-dark",
    text: "Moja ćerka jedva čeka časove engleskog. Male grupe i topla atmosfera čine da se deca osećaju prijatno i napreduju.",
  },
];

export function Testimonials() {
  return (
    <Section id="utisci" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Utisci polaznika"
          title="Priče onih koji su već progovorili"
          description="Ne moraš da nam veruješ na reč — evo šta kažu naši polaznici."
        />

        <Reveal stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-ink/5 bg-surface p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M12 2l3 6.5 7 .9-5 4.8 1.3 7L12 17.8 5.4 21.2 6.7 14.2 1.7 9.4l7-.9z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-ink/80">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className={`grid h-11 w-11 place-items-center rounded-full text-sm font-bold text-white ${t.color}`}
                >
                  {t.avatar}
                </span>
                <div>
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
