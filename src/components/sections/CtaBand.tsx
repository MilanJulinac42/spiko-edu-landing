import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBand({
  title = "Spreman/na da progovoriš?",
  description = "Zakaži besplatan probni čas i uveri se kako izgleda učenje kod nas — bez ikakvih obaveza.",
  className = "bg-surface",
}: {
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <Section className={className}>
      <Container className="py-16 sm:py-20">
        <Reveal className="relative overflow-hidden rounded-3xl bg-ink px-8 py-12 text-center shadow-card sm:px-12 sm:py-16">
          <Image
            src="/cities/vienna.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 1100px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-secondary/25 mix-blend-multiply" />
          <div className="absolute inset-0 bg-ink/85" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">{description}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/kontakt" size="lg">
                Zakaži besplatan probni čas
              </Button>
              <Button
                href="/kursevi#cenovnik"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:border-primary hover:text-primary-light"
              >
                Pogledaj cenovnik
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
