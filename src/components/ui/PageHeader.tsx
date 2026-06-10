import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { WaveDivider } from "@/components/ui/WaveDivider";

export function PageHeader({
  eyebrow,
  title,
  description,
  waveFill = "fill-white",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  waveFill?: string;
}) {
  return (
    <Section className="relative overflow-hidden bg-ink pb-24 pt-36 sm:pt-40">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-24 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />

      <Container className="relative z-20 text-center">
        {eyebrow && (
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-light">
            {eyebrow}
          </span>
        )}
        <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            {description}
          </p>
        )}
      </Container>

      <WaveDivider variant="wave" position="bottom" fillClassName={waveFill} />
    </Section>
  );
}
