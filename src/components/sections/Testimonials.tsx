import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { TiltCard } from "@/components/ui/TiltCard";

const testimonials = [
  {
    name: "Mihailo",
    role: "Polaznik nemačkog, C1",
    avatar: "M",
    color: "bg-primary",
    text: "Posle 6 godina bez kontakta sa stranim jezicima, sa Emom sam položio Goethe-Zertifikat B2. Akcenat je na konverzaciji i aktivnim veštinama, uz najsavremenije materijale — udžbenik je samo polazna osnova. Stekneš znanje primenljivo u svakodnevnom životu.",
  },
  {
    name: "Teodora",
    role: "Polaznica nemačkog, A1",
    avatar: "T",
    color: "bg-secondary",
    text: "Dugo sam se dvoumila gde da krenem, a sada sam prezadovoljna. Nema nikakvog pritiska, sve ide laganim tempom, a Ema objašnjava jasno i jednostavno. Časovi nikad nisu dosadni i stalno me motiviše da napredujem.",
  },
  {
    name: "Ljiljana",
    role: "Polaznica nemačkog, A1",
    avatar: "Lj",
    color: "bg-primary-dark",
    text: "Emini časovi su izuzetno zanimljivi i drže pažnju. Fleksibilna je i temeljna — važno joj je da razumeš gde si pogrešio i da naučiš da sam prepoznaš svoje greške.",
  },
  {
    name: "Nemanja",
    role: "Polaznik nemačkog, A2",
    avatar: "N",
    color: "bg-secondary-dark",
    text: "Ema je fantastična nastavnica i vidi se da voli svoj posao. Ne radimo samo gramatiku — puno pažnje ide na govor, što mi je najvažnije. Domaći su raznovrsni: od vežbi do slušanja video klipova na nemačkom.",
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

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, idx) => (
            <TiltCard
              key={t.name}
              index={idx}
              className="flex flex-col rounded-3xl border border-ink/5 bg-surface p-7 shadow-soft hover:shadow-card"
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
            </TiltCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
