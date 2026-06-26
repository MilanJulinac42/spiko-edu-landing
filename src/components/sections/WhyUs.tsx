import {
  Users,
  GraduationCap,
  Clock,
  MonitorSmartphone,
  BookOpen,
  Trophy,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { TiltCard } from "@/components/ui/TiltCard";

const reasons = [
  {
    icon: Users,
    title: "Male grupe",
    text: "Maksimalno 10 polaznika po grupi — više vremena za svakoga i više prakse.",
  },
  {
    icon: GraduationCap,
    title: "Iskusni predavači",
    text: "Sertifikovani profesori sa godinama iskustva i ljubavlju prema podučavanju.",
  },
  {
    icon: Clock,
    title: "Fleksibilni termini",
    text: "Jutarnji, popodnevni i večernji termini — uklapaš časove u svoj raspored.",
  },
  {
    icon: MonitorSmartphone,
    title: "Online i uživo",
    text: "Pohađaj časove u učionici ili iz udobnosti svog doma — izbor je tvoj.",
  },
  {
    icon: BookOpen,
    title: "Materijali uključeni",
    text: "Svi udžbenici i dodatni materijali su deo kursa, bez skrivenih troškova.",
  },
  {
    icon: Trophy,
    title: "Priprema za ispite",
    text: "Ciljana priprema za Cambridge, IELTS, Goethe i ÖSD sertifikate.",
  },
];

export function WhyUs({ waveFill = "fill-white" }: { waveFill?: string }) {
  return (
    <Section id="zasto" className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-secondary/15 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-1/4 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          invert
          eyebrow="Zašto Spiko Edu"
          title="Sve što ti treba da uspeš"
          description="Pažljivo smo osmislili svaki detalj iskustva učenja — od veličine grupe do materijala."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <TiltCard
              key={r.title}
              index={i}
              className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur hover:border-primary/40 hover:bg-white/10"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-primary transition-transform group-hover:scale-110">
                <r.icon className="h-7 w-7" strokeWidth={2} aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {r.text}
              </p>
            </TiltCard>
          ))}
        </div>
      </Container>

      <WaveDivider variant="curve" position="bottom" fillClassName={waveFill} />
    </Section>
  );
}
