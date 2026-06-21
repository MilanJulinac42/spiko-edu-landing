"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  GraduationCap,
  Briefcase,
  Award,
  Languages,
  ArrowRight,
  X,
} from "lucide-react";
import DE from "country-flag-icons/react/3x2/DE";
import GB from "country-flag-icons/react/3x2/GB";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Teacher = {
  id: string;
  name: string;
  /** ime u instrumentalu, npr. "Emom" — za "Zakaži čas sa ..." */
  instrumental: string;
  role: string;
  flag: typeof DE;
  accent: "primary" | "secondary";
  photo: string;
  tagline: string;
  bio: string;
  experience: { period: string; title: string; place: string }[];
  education: { period: string; title: string; place: string }[];
  certs: string[];
  specialties: string[];
};

// NAPOMENA: tekstovi CV-a su placeholder dok ne stignu pravi podaci.
const teachers: Teacher[] = [
  {
    id: "ema",
    name: "Ema Alidjukić",
    instrumental: "Emom",
    role: "Profesorka nemačkog jezika",
    flag: DE,
    accent: "primary",
    photo: "/team/ema.jpg",
    tagline:
      "Vodim te od prvih reči do Goethe/ÖSD sertifikata — strpljivo, sistematično i sa puno prakse.",
    bio: "Predajem nemački jezik svim uzrastima i nivoima, sa posebnim fokusom na pripremu za zvanične ispite (Goethe, ÖSD) i nemački za posao i život u inostranstvu. Časove gradim oko razgovora i stvarnih situacija.",
    experience: [
      { period: "2019 — danas", title: "Profesorka nemačkog", place: "Spiko Edu" },
      { period: "2016 — 2019", title: "Lektorka / predavač", place: "(placeholder)" },
    ],
    education: [
      {
        period: "(godina)",
        title: "Master germanistike",
        place: "(univerzitet — placeholder)",
      },
    ],
    certs: ["Goethe-Zertifikat C2", "ÖSD priprema", "(dodaj prave)"],
    specialties: [
      "Priprema za Goethe / ÖSD",
      "Nemački za zdravstvene radnike",
      "Konverzacija A1–C1",
    ],
  },
  {
    id: "jana",
    name: "Jana Torbica",
    instrumental: "Janom",
    role: "Profesorka engleskog jezika",
    flag: GB,
    accent: "secondary",
    photo: "/team/jana.jpg",
    tagline:
      "Spajam književnost i živi jezik — engleski koji odmah koristiš, uz pripremu za Cambridge i IELTS.",
    bio: "Predajem engleski jezik kroz konverzaciju, čitanje i stvarne situacije. Pripremam polaznike za međunarodne ispite (Cambridge, IELTS) i poslovni engleski, uz pristup prilagođen svakom polazniku.",
    experience: [
      { period: "2020 — danas", title: "Profesorka engleskog", place: "Spiko Edu" },
      { period: "2017 — 2020", title: "Predavač", place: "(placeholder)" },
    ],
    education: [
      {
        period: "(godina)",
        title: "Master anglistike",
        place: "(univerzitet — placeholder)",
      },
    ],
    certs: ["C2 Proficiency (CPE)", "IELTS priprema", "(dodaj prave)"],
    specialties: [
      "Priprema za Cambridge / IELTS",
      "Poslovni engleski",
      "Konverzacija A1–C1",
    ],
  },
];

function Avatar({
  teacher,
  className,
  sizes,
}: {
  teacher: Teacher;
  className?: string;
  sizes?: string;
}) {
  const [failed, setFailed] = useState(false);
  const initials = teacher.name
    .split(" ")
    .map((p) => p[0])
    .join("");
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        teacher.accent === "primary"
          ? "bg-gradient-to-br from-primary/30 to-secondary/20"
          : "bg-gradient-to-br from-secondary/30 to-primary/20",
        className
      )}
    >
      {!failed ? (
        <Image
          src={teacher.photo}
          alt={teacher.name}
          fill
          sizes={sizes ?? "(max-width: 768px) 100vw, 600px"}
          onError={() => setFailed(true)}
          className="object-cover object-top"
        />
      ) : (
        <div className="grid h-full w-full place-items-center">
          <span className="font-display text-5xl font-extrabold text-white/80">
            {initials}
          </span>
        </div>
      )}
    </div>
  );
}

export function Team() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const active = teachers.find((t) => t.id === openId) ?? null;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
    if (openId) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
      setScrolled(false);
      // uvek kreni od vrha
      requestAnimationFrame(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
      });
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [openId]);

  return (
    <Section id="tim" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Naš tim"
          title="Upoznaj svoje predavače"
          description="Mala škola, veliki fokus na tebe. Iza svakog časa stoji predavač koji ti je posvećen."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {teachers.map((t, i) => {
            const isPrimary = t.accent === "primary";
            return (
              <Reveal key={t.id} delay={`${i * 0.1}s`}>
                <article className="group h-full overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <button
                    type="button"
                    onClick={() => setOpenId(t.id)}
                    className="block w-full text-left"
                    aria-label={`Saznaj više o: ${t.name}`}
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Avatar
                        teacher={t}
                        sizes="(max-width: 768px) 100vw, 600px"
                        className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                      />
                      <span
                        className={cn(
                          "absolute left-4 top-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-soft backdrop-blur",
                          isPrimary ? "bg-primary/90 text-ink" : "bg-secondary/90"
                        )}
                      >
                        <t.flag className="h-4 w-6 rounded-sm ring-1 ring-white/30" />
                        {isPrimary ? "Nemački" : "Engleski"}
                      </span>
                    </div>
                  </button>

                  <div className="p-7">
                    <h3 className="text-2xl font-bold text-ink">{t.name}</h3>
                    <p
                      className={cn(
                        "mt-1 text-sm font-semibold",
                        isPrimary ? "text-primary-dark" : "text-secondary-dark"
                      )}
                    >
                      {t.role}
                    </p>
                    <p className="mt-3 leading-relaxed text-muted">{t.tagline}</p>

                    <button
                      type="button"
                      onClick={() => setOpenId(t.id)}
                      className={cn(
                        "mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-colors",
                        isPrimary
                          ? "text-primary-dark hover:text-primary"
                          : "text-secondary-dark hover:text-secondary"
                      )}
                    >
                      Saznaj više o meni
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>

      {/* Drawer — portal na body (van transformisanog page-enter wrappera) */}
      {mounted &&
        createPortal(
          <div
            className={cn(
              "fixed inset-0 z-[100]",
              active ? "pointer-events-auto" : "pointer-events-none"
            )}
            aria-hidden={!active}
          >
        {/* overlay */}
        <div
          onClick={() => setOpenId(null)}
          className={cn(
            "absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity duration-300",
            active ? "opacity-100" : "opacity-0"
          )}
        />

        {/* panel */}
        <aside
          role="dialog"
          aria-modal="true"
          aria-label={active ? active.name : undefined}
          className={cn(
            "absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-card transition-transform duration-300 ease-out sm:max-w-lg",
            active ? "translate-x-0" : "translate-x-full"
          )}
        >
          {active && (
            <>
              {/* kompaktna traka — pojavi se kad slika ode gore */}
              <div
                className={cn(
                  "absolute inset-x-0 top-0 z-10 flex items-center gap-3 border-b border-ink/5 bg-white/90 px-6 py-4 pr-16 backdrop-blur transition-opacity duration-300",
                  scrolled ? "opacity-100" : "pointer-events-none opacity-0"
                )}
              >
                <active.flag className="h-5 w-7 rounded shadow-sm ring-1 ring-ink/10" />
                <span className="font-display text-lg font-bold text-ink">
                  {active.name}
                </span>
              </div>

              {/* close — uvek vidljiv */}
              <button
                type="button"
                onClick={() => setOpenId(null)}
                aria-label="Zatvori"
                className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink shadow-soft transition-colors hover:bg-white"
              >
                <X className="h-5 w-5" />
              </button>

              {/* scroll oblast: slika + sadrzaj */}
              <div
                ref={scrollRef}
                data-lenis-prevent
                onScroll={(e) =>
                  setScrolled(e.currentTarget.scrollTop > 200)
                }
                className="flex-1 overflow-y-auto overscroll-contain"
              >
                <div className="relative h-72 w-full sm:h-80">
                  <Avatar teacher={active} sizes="512px" className="h-full w-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6 text-white">
                    <div className="flex items-center gap-2">
                      <active.flag className="h-5 w-7 rounded shadow-sm ring-1 ring-white/30" />
                      <span className="text-sm font-semibold">{active.role}</span>
                    </div>
                    <h3 className="mt-1 font-display text-3xl font-extrabold">
                      {active.name}
                    </h3>
                  </div>
                </div>

                <div className="space-y-8 p-6 sm:p-8">
                  <p className="leading-relaxed text-ink/80">{active.bio}</p>

                <CvBlock
                  icon={Briefcase}
                  title="Iskustvo"
                  accent={active.accent}
                >
                  {active.experience.map((e) => (
                    <TimelineItem
                      key={e.title + e.period}
                      period={e.period}
                      title={e.title}
                      place={e.place}
                    />
                  ))}
                </CvBlock>

                <CvBlock
                  icon={GraduationCap}
                  title="Obrazovanje"
                  accent={active.accent}
                >
                  {active.education.map((e) => (
                    <TimelineItem
                      key={e.title + e.period}
                      period={e.period}
                      title={e.title}
                      place={e.place}
                    />
                  ))}
                </CvBlock>

                <CvBlock icon={Award} title="Sertifikati" accent={active.accent}>
                  <div className="flex flex-wrap gap-2">
                    {active.certs.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-ink/10 bg-surface px-3 py-1 text-sm font-medium text-ink/70"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </CvBlock>

                <CvBlock
                  icon={Languages}
                  title="Specijalnosti"
                  accent={active.accent}
                >
                  <ul className="space-y-2">
                    {active.specialties.map((s) => (
                      <li
                        key={s}
                        className="flex items-center gap-3 text-sm text-ink/80"
                      >
                        <span
                          className={cn(
                            "h-1.5 w-1.5 rounded-full",
                            active.accent === "primary"
                              ? "bg-primary"
                              : "bg-secondary"
                          )}
                        />
                        {s}
                      </li>
                    ))}
                  </ul>
                </CvBlock>
                </div>
              </div>

              <div className="border-t border-ink/5 p-6">
                <a
                  href="/kontakt"
                  className={cn(
                    "flex h-12 w-full items-center justify-center gap-2 rounded-full font-semibold text-ink shadow-soft transition-all hover:-translate-y-0.5",
                    active.accent === "primary"
                      ? "bg-primary hover:bg-primary-dark hover:text-white"
                      : "bg-secondary text-white hover:bg-secondary-dark"
                  )}
                >
                  Zakaži čas sa {active.instrumental}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </>
          )}
        </aside>
          </div>,
          document.body
        )}
    </Section>
  );
}

function CvBlock({
  icon: Icon,
  title,
  accent,
  children,
}: {
  icon: typeof Briefcase;
  title: string;
  accent: "primary" | "secondary";
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-ink">
        <Icon
          className={cn(
            "h-4 w-4",
            accent === "primary" ? "text-primary-dark" : "text-secondary-dark"
          )}
        />
        {title}
      </h4>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function TimelineItem({
  period,
  title,
  place,
}: {
  period: string;
  title: string;
  place: string;
}) {
  return (
    <div className="border-l-2 border-ink/10 py-1 pl-4 [&:not(:last-child)]:mb-3">
      <p className="text-xs font-medium text-muted">{period}</p>
      <p className="font-semibold text-ink">{title}</p>
      <p className="text-sm text-muted">{place}</p>
    </div>
  );
}
