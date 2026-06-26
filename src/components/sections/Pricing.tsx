import {
  Check,
  Users,
  MessagesSquare,
  User,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  icon: LucideIcon;
  price: string;
  unit: string;
  description: string;
  features: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Grupni kurs",
    icon: Users,
    price: "od 6.900",
    unit: "RSD / mesečno",
    description: "Učenje u maloj grupi (do 10 polaznika) uz pun tempo napretka.",
    features: [
      "2 časa nedeljno",
      "Maksimalno 10 polaznika",
      "Svi materijali uključeni",
      "Potvrda o završenom kursu",
    ],
  },
  {
    name: "Grupni konverzacijski kurs",
    icon: MessagesSquare,
    price: "na upit",
    unit: "grupni format",
    description:
      "Časovi posvećeni isključivo govoru i tečnosti — najviše prakse u razgovoru.",
    features: [
      "3 časa nedeljno",
      "Naglasak na konverzaciji",
      "Realne situacije iz života",
      "Mala grupa",
    ],
  },
  {
    name: "Individualna nastava",
    icon: User,
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
    icon: Zap,
    price: "na upit",
    unit: "individualna ponuda",
    description: "Ubrzani program za pripremu ispita ili brzo savladavanje nivoa.",
    features: [
      "Pojačan fond časova",
      "Priprema za Goethe / ÖSD / IELTS",
      "Probni testovi",
      "Mentorska podrška",
    ],
  },
];

export function Pricing() {
  return (
    <Section id="cenovnik" className="scroll-mt-24 bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Cenovnik"
          title="Transparentne cene, bez skrivenih troškova"
          description="Izaberi format koji ti odgovara. Detalje dogovaramo na konsultacijama — cena je fiksna."
        />

        <div className="mt-16 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, idx) => {
            const featured = !!p.featured;
            return (
              <TiltCard
                key={p.name}
                index={idx}
                className={cn(
                  "relative flex h-full flex-col rounded-3xl p-7",
                  featured
                    ? "bg-ink text-white shadow-card ring-2 ring-primary"
                    : "border border-ink/5 bg-white text-ink shadow-soft"
                )}
              >
                {featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink shadow-soft">
                    Najpopularniji
                  </span>
                )}

                <span
                  className={cn(
                    "grid h-12 w-12 place-items-center rounded-2xl",
                    featured
                      ? "bg-primary text-ink"
                      : "bg-primary/10 text-primary-dark"
                  )}
                >
                  <p.icon className="h-6 w-6" strokeWidth={2} aria-hidden />
                </span>

                <h3 className="mt-4 text-lg font-bold leading-tight">{p.name}</h3>
                <p
                  className={cn(
                    "mt-2 min-h-[3.75rem] text-sm leading-relaxed",
                    featured ? "text-white/70" : "text-muted"
                  )}
                >
                  {p.description}
                </p>

                <div className="mt-1">
                  <span className="font-display text-3xl font-extrabold tracking-tight">
                    {p.price}
                  </span>
                  <p
                    className={cn(
                      "mt-0.5 text-xs",
                      featured ? "text-white/55" : "text-muted"
                    )}
                  >
                    {p.unit}
                  </p>
                </div>

                <div
                  className={cn(
                    "my-6 h-px w-full",
                    featured ? "bg-white/10" : "bg-ink/5"
                  )}
                />

                <ul className="flex-1 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={cn(
                          "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                          featured
                            ? "bg-primary text-ink"
                            : "bg-primary/15 text-primary-dark"
                        )}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                      </span>
                      <span className={featured ? "text-white/85" : "text-ink/80"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="/kontakt"
                  variant={featured ? "primary" : "outline"}
                  className={cn("mt-7 w-full", !featured && "border-ink/15")}
                >
                  Zatraži ponudu
                </Button>
              </TiltCard>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
