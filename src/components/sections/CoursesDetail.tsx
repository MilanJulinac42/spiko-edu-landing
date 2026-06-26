import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  Users,
  MessagesSquare,
  BookOpen,
  LineChart,
  Briefcase,
  Award,
  type LucideIcon,
} from "lucide-react";
import DE from "country-flag-icons/react/3x2/DE";
import GB from "country-flag-icons/react/3x2/GB";
import US from "country-flag-icons/react/3x2/US";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Lang = {
  id: string;
  name: string;
  flags: (typeof DE)[];
  accent: "primary" | "secondary";
  badge: string;
  image: string;
  destinations: string;
  levels: string[];
  intro: string;
  teacher: string;
  teacherPhoto: string;
  gives: { icon: LucideIcon; text: string }[];
  exams: string[];
  audience: string[];
};

const langs: Lang[] = [
  {
    id: "nemacki",
    name: "Nemački jezik",
    flags: [DE],
    accent: "primary",
    badge: "Naš glavni program",
    image: "/cities/berlin.jpg",
    destinations: "Berlin · Beč · Cirih",
    levels: ["A1", "A2", "B1", "B2", "C1"],
    intro:
      "Učiš nemački sistematično — od prvih reči do tečnog izražavanja — kroz razgovor i stvarne situacije. Poseban fokus na pripremu za zvanične ispite i nemački za posao i život u inostranstvu.",
    teacher: "Ema Aliđukić",
    teacherPhoto: "/team/ema.jpg",
    gives: [
      { icon: Users, text: "Mali grupni (do 10) i individualni časovi" },
      { icon: MessagesSquare, text: "Konverzacija od prvog časa" },
      { icon: BookOpen, text: "Svi udžbenici i materijali uključeni" },
      { icon: LineChart, text: "Redovni feedback i praćenje napretka" },
    ],
    exams: ["Goethe-Zertifikat", "ÖSD", "telc"],
    audience: [
      "Početnici",
      "Učenici i studenti",
      "Selidba / posao u inostranstvu",
      "Zdravstveni radnici",
      "Firme",
    ],
  },
  {
    id: "engleski",
    name: "Engleski jezik",
    flags: [GB, US],
    accent: "secondary",
    badge: "Od početnog do naprednog",
    image: "/cities/london.jpg",
    destinations: "London · Njujork · Dablin",
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    intro:
      "Engleski koji odmah koristiš — kroz konverzaciju, čitanje i stvarne situacije. Priprema za međunarodne ispite, poslovni engleski i samopouzdano sporazumevanje u svakoj prilici.",
    teacher: "Jana Torbica",
    teacherPhoto: "/team/jana.jpg",
    gives: [
      { icon: Users, text: "Grupna i individualna nastava" },
      { icon: MessagesSquare, text: "Konverzacija i rad na izgovoru" },
      { icon: Briefcase, text: "Poslovni engleski" },
      { icon: Award, text: "Priprema za međunarodne ispite" },
    ],
    exams: ["Cambridge", "IELTS", "TOEFL"],
    audience: [
      "Početnici",
      "Učenici i studenti",
      "Poslovni engleski",
      "Putovanja",
      "Firme",
    ],
  },
];

export function CoursesDetail() {
  return (
    <Section className="bg-white py-20 sm:py-28">
      <Container className="space-y-10">
        {langs.map((l) => {
          const isPrimary = l.accent === "primary";
          return (
            <Reveal key={l.id}>
              <div
                id={l.id}
                className="relative grid scroll-mt-28 overflow-hidden rounded-3xl shadow-card ring-1 ring-ink/5 lg:grid-cols-[0.92fr_1.3fr]"
              >
                {/* corner ribbon */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute right-0 top-0 z-30 h-24 w-24 overflow-hidden rounded-tr-3xl"
                >
                  <div
                    className={cn(
                      "absolute right-[-42px] top-[14px] w-[150px] rotate-45 py-1 text-center text-[11px] font-bold uppercase tracking-[0.15em] shadow-md",
                      isPrimary ? "bg-primary text-ink" : "bg-secondary text-white"
                    )}
                  >
                    {isPrimary ? "Nemački" : "Engleski"}
                  </div>
                </div>

                {/* LEVO — tamna identity tabla sa gradom u pozadini */}
                <div className="group relative overflow-hidden bg-ink p-8 sm:p-10">
                  {/* grad */}
                  <Image
                    src={l.image}
                    alt={l.destinations}
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* duoton akcenat */}
                  <div
                    className={cn(
                      "absolute inset-0 mix-blend-multiply",
                      isPrimary ? "bg-primary/35" : "bg-secondary/45"
                    )}
                  />
                  {/* zatamnjenje za citljivost */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/55" />

                  <div className="relative flex h-full flex-col">
                    <div className="mb-6 inline-flex items-center gap-1.5 self-start rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/15 backdrop-blur">
                      <MapPin className="h-3.5 w-3.5" />
                      {l.destinations}
                    </div>

                    <span
                      className={cn(
                        "text-xs font-semibold uppercase tracking-wider",
                        isPrimary ? "text-primary-light" : "text-secondary-light"
                      )}
                    >
                      {l.badge}
                    </span>

                    <div className="mt-4 flex items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-2xl bg-white/10 p-2.5 ring-1 ring-white/10">
                        {l.flags.map((Flag, i) => (
                          <Flag
                            key={i}
                            className="h-7 w-auto rounded-md shadow-sm ring-1 ring-white/20"
                          />
                        ))}
                      </span>
                      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {l.name}
                      </h2>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {l.levels.map((lvl) => (
                        <span
                          key={lvl}
                          className={cn(
                            "rounded-full px-2.5 py-1 text-xs font-semibold",
                            isPrimary
                              ? "bg-primary/15 text-primary-light"
                              : "bg-secondary/15 text-secondary-light"
                          )}
                        >
                          {lvl}
                        </span>
                      ))}
                    </div>

                    <p className="mt-6 leading-relaxed text-white/70">{l.intro}</p>

                    <Link
                      href="/o-nama#tim"
                      className="group/teacher mt-5 inline-flex items-center gap-3"
                    >
                      <Image
                        src={l.teacherPhoto}
                        alt={l.teacher}
                        width={44}
                        height={44}
                        className="h-11 w-11 rounded-full object-cover object-top ring-2 ring-white/25"
                      />
                      <span className="text-sm leading-tight">
                        <span className="block text-white/55">Predaje</span>
                        <span
                          className={cn(
                            "font-semibold underline-offset-2 group-hover/teacher:underline",
                            isPrimary ? "text-primary-light" : "text-secondary-light"
                          )}
                        >
                          {l.teacher}
                        </span>
                      </span>
                    </Link>

                    <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                      <Link
                        href="/kontakt"
                        className={cn(
                          "inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold shadow-soft transition-all hover:-translate-y-0.5",
                          isPrimary
                            ? "bg-primary text-ink hover:bg-primary-dark hover:text-white"
                            : "bg-secondary text-white hover:bg-secondary-dark"
                        )}
                      >
                        Zatraži ponudu
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <a
                        href="#cenovnik"
                        className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white/20 px-6 text-sm font-semibold text-white transition-colors hover:border-white/40"
                      >
                        Pogledaj cene
                      </a>
                    </div>
                  </div>
                </div>

                {/* DESNO — detalji */}
                <div className="relative flex flex-col justify-center overflow-hidden bg-white p-8 sm:p-10 lg:p-12">
                  {/* suptilan tackasti pattern */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(120%_120%_at_100%_0%,#000,transparent_70%)]"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(14,22,34,0.07) 1px, transparent 1px)",
                      backgroundSize: "18px 18px",
                    }}
                  />
                  {/* meki akcentni sjaj */}
                  <div
                    className={cn(
                      "pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full blur-3xl",
                      isPrimary ? "bg-primary/10" : "bg-secondary/10"
                    )}
                  />

                  <div className="relative">
                  <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-ink/40">
                    Šta dobijaš
                  </h3>
                  <ul className="mt-2 divide-y divide-ink/[0.07]">
                    {l.gives.map((g) => (
                      <li key={g.text} className="flex items-center gap-4 py-4">
                        <span
                          className={cn(
                            "grid h-11 w-11 shrink-0 place-items-center rounded-2xl",
                            isPrimary
                              ? "bg-primary/10 text-primary-dark"
                              : "bg-secondary/10 text-secondary-dark"
                          )}
                        >
                          <g.icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                        </span>
                        <span className="text-[15px] font-medium leading-snug text-ink/85">
                          {g.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-9 text-xs font-bold uppercase tracking-[0.18em] text-ink/40">
                    Priprema za ispite
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {l.exams.map((e) => (
                      <span
                        key={e}
                        className="rounded-full border border-ink/12 px-4 py-2 text-sm font-medium text-ink/70"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </Container>
    </Section>
  );
}
