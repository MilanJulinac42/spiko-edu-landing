import DE from "country-flag-icons/react/3x2/DE";
import GB from "country-flag-icons/react/3x2/GB";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { WaveDivider } from "@/components/ui/WaveDivider";

const stats = [
  { value: "1200+", label: "Zadovoljnih polaznika" },
  { value: "15+", label: "Godina iskustva" },
  { value: "98%", label: "Položenih ispita" },
];

const chat = [
  { from: "teacher", text: "Guten Tag! Wie heißt du?" },
  { from: "student", text: "Ich heiße Marko. Und du?" },
  { from: "teacher", text: "Sehr gut! Perfekt izgovoreno 👏" },
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
            U Spiko Edu školi učiš kroz razgovor, od prvog časa. Mali grupni
            časovi i individualna nastava prilagođeni tvom tempu i ciljevima.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start lg:justify-start">
            <Button href="#kontakt" variant="primary" size="lg">
              Zakaži besplatan probni čas
            </Button>
            <Button href="#kursevi" variant="outline" size="lg" className="border-white/20 text-white hover:border-primary hover:text-primary-light">
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

        {/* vizuelni panel — razgovor od prvog časa */}
        <div className="relative mx-auto hidden max-w-md lg:block">
          <div className="animate-float rounded-3xl bg-white p-5 shadow-card ring-1 ring-black/5">
            {/* header kartice */}
            <div className="flex items-center justify-between border-b border-ink/5 pb-4">
              <div className="flex items-center gap-3">
                <DE className="h-9 w-13 rounded-md shadow-sm ring-1 ring-ink/10" />
                <div>
                  <p className="font-display font-semibold text-ink">
                    Nemački · Konverzacija
                  </p>
                  <p className="text-xs text-muted">Nivo A1 · čas uživo</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary-dark">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                Uživo
              </span>
            </div>

            {/* chat */}
            <div className="space-y-3 py-4">
              {chat.map((m, i) =>
                m.from === "teacher" ? (
                  <div key={i} className="flex justify-start">
                    <p className="max-w-[80%] rounded-2xl rounded-tl-sm bg-surface px-4 py-2.5 text-sm text-ink">
                      {m.text}
                    </p>
                  </div>
                ) : (
                  <div key={i} className="flex justify-end">
                    <p className="max-w-[80%] rounded-2xl rounded-tr-sm bg-primary px-4 py-2.5 text-sm font-medium text-ink">
                      {m.text}
                    </p>
                  </div>
                )
              )}
              {/* typing indikator */}
              <div className="flex justify-start">
                <span className="flex gap-1 rounded-2xl rounded-tl-sm bg-surface px-4 py-3">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted/60 [animation-delay:0ms]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted/60 [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted/60 [animation-delay:300ms]" />
                </span>
              </div>
            </div>

            <p className="border-t border-ink/5 pt-4 text-center text-xs text-muted">
              Govoriš nemački već od <span className="font-semibold text-ink">prvog časa</span>
            </p>
          </div>

          {/* sekundarni — engleski */}
          <div className="absolute -bottom-5 -left-6 flex animate-float items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-card ring-1 ring-black/5 [animation-delay:1.2s]">
            <GB className="h-6 w-9 rounded shadow-sm ring-1 ring-ink/10" />
            <span className="text-sm font-semibold text-ink">
              I engleski jezik
            </span>
          </div>

          {/* badge upis */}
          <div className="absolute -right-6 -top-6 animate-float rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-ink shadow-card [animation-delay:1.5s]">
            🎉 Upis u toku!
          </div>
        </div>
      </Container>

      <WaveDivider variant="wave" position="bottom" fillClassName="fill-white" />
    </Section>
  );
}
