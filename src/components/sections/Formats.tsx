import { Users, UserPlus, User, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { TiltCard } from "@/components/ui/TiltCard";

const formats = [
  {
    icon: Users,
    title: "Grupna nastava",
    size: "do 10 polaznika",
    text: "Učenje u maloj grupi uz dovoljno prostora za svakoga. Idealno za motivaciju i vežbu konverzacije.",
    points: ["2 časa nedeljno", "Najbolji odnos cene i kvaliteta", "Dinamika grupe"],
  },
  {
    icon: UserPlus,
    title: "Poluindividualna nastava",
    size: "2–3 polaznika",
    text: "Učenje u paru ili maloj grupici — pažnja skoro kao 1-na-1, uz povoljniju cenu.",
    points: ["Više pažnje po polazniku", "Fleksibilni termini", "Povoljnije od individualne"],
  },
  {
    icon: User,
    title: "Individualna nastava",
    size: "1 na 1",
    text: "Časovi potpuno prilagođeni tvom tempu, rasporedu i ciljevima. Najbrži napredak.",
    points: ["Termini po dogovoru", "Personalizovan plan", "Online ili uživo"],
    featured: true,
  },
  {
    icon: Zap,
    title: "Intenzivni kurs",
    size: "ubrzani tempo",
    text: "Pojačan fond časova za brzo savladavanje nivoa ili pripremu ispita u kratkom roku.",
    points: ["Više časova nedeljno", "Priprema za ispit", "Mentorska podrška"],
  },
];

export function Formats() {
  return (
    <Section className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Formati nastave"
          title="Izaberi način koji ti odgovara"
          description="Isti kvalitet u svakom formatu — razlika je u tempu, veličini grupe i ceni."
        />

        <div className="mt-14 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {formats.map((f, i) => (
            <TiltCard
              key={f.title}
              index={i}
              className={
                f.featured
                  ? "flex flex-col rounded-3xl bg-ink p-8 text-white ring-2 ring-primary shadow-soft"
                  : "flex flex-col rounded-3xl border border-ink/5 bg-white p-8 shadow-soft"
              }
            >
              <span
                className={
                  f.featured
                    ? "grid h-14 w-14 place-items-center rounded-2xl bg-primary text-ink"
                    : "grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary-dark"
                }
              >
                <f.icon className="h-7 w-7" strokeWidth={2} aria-hidden />
              </span>
              <h3 className="mt-5 text-xl font-bold">{f.title}</h3>
              <p
                className={
                  f.featured
                    ? "text-sm font-semibold text-primary-light"
                    : "text-sm font-semibold text-primary-dark"
                }
              >
                {f.size}
              </p>
              <p
                className={
                  f.featured
                    ? "mt-3 leading-relaxed text-white/70"
                    : "mt-3 leading-relaxed text-muted"
                }
              >
                {f.text}
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                {f.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span
                      className={
                        f.featured
                          ? "h-1.5 w-1.5 rounded-full bg-primary"
                          : "h-1.5 w-1.5 rounded-full bg-primary"
                      }
                    />
                    <span className={f.featured ? "text-white/80" : "text-ink/80"}>
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </TiltCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
