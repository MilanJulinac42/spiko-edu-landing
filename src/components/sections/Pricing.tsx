import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Grupni kurs",
    price: "od 6.900",
    unit: "RSD / mesečno",
    description: "Učenje u maloj grupi (do 6 polaznika) uz pun tempo napretka.",
    features: [
      "2 časa nedeljno",
      "Maksimalno 6 polaznika",
      "Svi materijali uključeni",
      "Sertifikat o nivou",
    ],
    featured: false,
  },
  {
    name: "Individualna nastava",
    price: "od 1.900",
    unit: "RSD / čas",
    description: "Časovi 1-na-1, potpuno prilagođeni tvom tempu i ciljevima.",
    features: [
      "Termini po dogovoru",
      "Personalizovan plan učenja",
      "Fokus na tvoje ciljeve",
      "Online ili uživo",
      "Brži napredak",
    ],
    featured: true,
  },
  {
    name: "Intenzivni kurs",
    price: "na upit",
    unit: "individualna ponuda",
    description: "Ubrzani program za pripremu ispita ili brzo savladavanje nivoa.",
    features: [
      "Pojačan fond časova",
      "Priprema za Goethe / ÖSD / IELTS",
      "Probni testovi",
      "Mentorska podrška",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <Section id="cenovnik" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Cenovnik"
          title="Transparentne cene, bez skrivenih troškova"
          description="Izaberi format koji ti odgovara. Tačnu cenu i termin dogovaramo na besplatnom probnom času."
        />

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={cn(
                "relative flex flex-col rounded-3xl p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card",
                p.featured
                  ? "bg-ink text-white ring-2 ring-primary"
                  : "border border-ink/5 bg-white text-ink"
              )}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink">
                  Najpopularniji
                </span>
              )}

              <h3 className="text-xl font-bold">{p.name}</h3>
              <p
                className={cn(
                  "mt-2 text-sm",
                  p.featured ? "text-white/70" : "text-muted"
                )}
              >
                {p.description}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl font-extrabold">
                  {p.price}
                </span>
              </div>
              <span
                className={cn(
                  "text-sm",
                  p.featured ? "text-white/60" : "text-muted"
                )}
              >
                {p.unit}
              </span>

              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span
                      className={cn(
                        "grid h-5 w-5 shrink-0 place-items-center rounded-full",
                        p.featured ? "bg-primary text-ink" : "bg-primary/15 text-primary-dark"
                      )}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                href="/kontakt"
                variant={p.featured ? "primary" : "outline"}
                className={cn(
                  "mt-8 w-full",
                  !p.featured && "border-ink/15"
                )}
              >
                Zatraži ponudu
              </Button>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          * Prikazane cene su okvirne (primer). Konačnu ponudu prilagođavamo nivou,
          formatu i broju časova.
        </p>
      </Container>
    </Section>
  );
}
