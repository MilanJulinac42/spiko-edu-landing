import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { EarthGlobe } from "@/components/EarthGlobe";

const stats = [
  { value: "1000+", label: "Zadovoljnih polaznika" },
  { value: "8", label: "Godina iskustva" },
  { value: "98%", label: "Položenih ispita" },
];

export function Hero() {
  return (
    <Section
      id="hero"
      className="relative overflow-hidden bg-ink pb-32 pt-32 sm:pt-36"
    >
      {/* dekorativni blobovi */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />

      <Container className="relative z-20 grid items-center gap-12 lg:grid-cols-2">
        <div className="animate-fade-up text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-primary-light">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Nemački i engleski jezik
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Progovori{" "}
            <span className="relative inline-block text-primary">
              samopouzdano
              <svg
                className="absolute -bottom-2 left-0 w-full text-primary/40"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 9C40 3 160 3 198 9"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            na novom jeziku
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70 lg:mx-0">
            U Spiko školi učiš kroz razgovor, od prvog časa. Mali grupni
            časovi i individualna nastava prilagođeni tvom tempu i ciljevima.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start lg:justify-start">
            <Button href="/kontakt" variant="primary" size="lg">
              Zakaži besplatne konsultacije
            </Button>
            <Button href="/kursevi" variant="outline" size="lg" className="border-white/20 text-white hover:border-primary hover:text-primary-light">
              Pogledaj kurseve
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <dt className="text-2xl font-bold text-primary sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs text-white/60 sm:text-sm">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* vizuelni panel — interaktivna Zemlja */}
        <div className="hidden lg:block">
          <EarthGlobe />
        </div>
      </Container>

      <WaveDivider variant="wave" position="bottom" fillClassName="fill-surface" />
    </Section>
  );
}
