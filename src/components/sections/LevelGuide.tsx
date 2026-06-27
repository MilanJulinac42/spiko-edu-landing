"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const levels = [
  {
    code: "A1",
    name: "Početni",
    short: "Osnovne fraze, predstavljanje, jednostavna pitanja.",
    full: "Mogu da razumem poznate reči i veoma jednostavne rečenice koje se odnose na mene, moju porodicu ili konkretne stvari u mom okruženju. U razgovoru se mogu jednostavno izraziti, mogu da postavljam i odgovaram na jednostavna pitanja o veoma poznatim temama.",
  },
  {
    code: "A2",
    name: "Osnovni",
    short: "Svakodnevne situacije i kratki razgovori.",
    full: "Mogu da razumem pojedinačne rečenice i reči koje se odnose na meni važne stvari, kao i suštinu jasnih obaveštenja, a umem i da pročitam oglase, jelovnike, vozne redove i pronađem konkretne informacije u njima. Umem da napišem kratke beleške i poruke, kao i sasvim jednostavno lično pismo. Umem da opišem druge ljude, svoju stambenu situaciju, obrazovanje i sadašnji ili poslednji posao.",
  },
  {
    code: "B1",
    name: "Srednji",
    short: "Samostalno se snalaziš u većini situacija.",
    full: "Mogu da razumem glavne tačke kada se koristi standardni jezik o poznatim temama, kao i osnovne informacije o aktuelnim događajima ili oblastima koje me interesuju. Umem da pišem jednostavne povezane tekstove o temama koje su mi poznate ili koje me lično interesuju, kao i da opisujem iskustva i utiske. Snalazim se u većini situacija na putovanju, mogu spontano da učestvujem u razgovorima o poznatim temama, umem jednostavnim povezanim rečenicama da opišem iskustva, događaje, snove, nadanja i ciljeve, da ukratko objasnim i obrazložim svoje mišljenje i planove, te da ispričam priču ili sadržaj filma/knjige i opišem svoje reakcije.",
  },
  {
    code: "B2",
    name: "Viši srednji",
    short: "Tečno o različitim temama, poslovni kontekst.",
    full: "Mogu da razumem duža izlaganja i predavanja, kao i da pratim složeniju argumentaciju kada mi je tema donekle poznata, a u TV programu razumem većinu vesti, aktuelnih reportaža i igranih filmova ukoliko se govori standardnim jezikom; takođe razumem članke i izveštaje o savremenim problemima, kao i savremenu književnu prozu. Umem da pišem jasne i detaljne tekstove o širokom spektru tema koje me interesuju, da iznesem informacije ili argumente i protivargumente za određeni stav. Mogu da se izražavam dovoljno spontano i tečno da normalan razgovor sa izvornim govornikom bude moguć, aktivno učestvujem u diskusijama o poznatim temama braneći svoje stavove, navodeći prednosti i nedostatke različitih mogućnosti.",
  },
  {
    code: "C1",
    name: "Napredni",
    short: "Precizno i spontano izražavanje, nijanse jezika.",
    full: "Mogu da pratim duža izlaganja i kada nisu jasno strukturirana, bez velikog napora razumem TV emisije i igrane filmove, kao i duge i složene stručne i književne tekstove, uključujući stručne članke i tehnička uputstva i van moje oblasti. Umem da se pismeno izražavam jasno i dobro strukturirano, da detaljno iznesem svoj stav u sastavima o složenim temama, ističući bitne aspekte. Govorim spontano i tečno, bez vidljivog traganja za rečima, efikasno i fleksibilno koristim jezik u društvenom i profesionalnom životu, precizno izražavam misli i mišljenja, i umem da opširno predstavim složene sadržaje, povezujući teme, posebno razrađujući određene aspekte i prikladno zaokružujući izlaganje.",
  },
  {
    code: "C2",
    name: "Vrhunski",
    short: "Skoro maternji nivo razumevanja i izražavanja.",
    full: "Nemam nikakvih teškoća da razumem govorni jezik, bilo uživo ili u medijima, čak i kada se brzo govori, a potrebno mi je samo malo vremena da se priviknem na poseban akcenat; takođe bez napora čitam praktično svaku vrstu pisanog teksta, uključujući apstraktne i sadržinski i jezički složene, kao priručnike, stručne članke i književna dela. Pišem jasno, tečno i sastavljam zahtevne dopise i složene izveštaje ili članke koji su dobro strukturirani, te umem pismeno da sažmem i prokomentarišem stručne i književne tekstove. Bez ikakvog napora učestvujem u svim razgovorima i diskusijama, dobro poznajem idiome i kolokvijalne izraze, govorim tečno i precizno izražavam i najsitnije nijanse značenja, a eventualne poteškoće u izražavanju prevazilazim tako neprimetno da sagovornik to ne primeti, i umem da jasno, tečno i stilski adekvatno predstavim i razložim sadržaje, logično ih strukturirajući da bi slušaocima bilo lakše da uoče i pamte ključne tačke.",
  },
];

export function LevelGuide() {
  const [open, setOpen] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const active = open !== null ? levels[open] : null;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
    if (active) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
      });
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <Section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Nivoi znanja (CEFR)"
          title="Gde si ti? Krećemo odakle god da si"
          description="Evropski okvir deli znanje na šest nivoa. Na besplatnim konsultacijama utvrđujemo tvoj nivo i pravimo personalizovani plan rada."
        />

        <Reveal stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {levels.map((l, i) => {
            const pct = ((i + 1) / levels.length) * 100;
            return (
              <button
                key={l.code}
                type="button"
                onClick={() => setOpen(i)}
                className="group flex flex-col rounded-2xl border border-ink/5 bg-surface p-6 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-3xl font-extrabold text-primary">
                    {l.code}
                  </span>
                  <span className="text-sm font-semibold text-ink">{l.name}</span>
                </div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted">
                  {l.full}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-dark">
                  Pročitaj više
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            );
          })}
        </Reveal>
      </Container>

      {/* Modal */}
      {mounted &&
        active &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
              onClick={() => setOpen(null)}
              className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            />
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`Nivo ${active.code}`}
              className="animate-fade-up relative z-10 flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-3xl bg-white shadow-card"
            >
              <div className="flex items-center justify-between gap-4 border-b border-ink/5 p-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-3xl font-extrabold text-primary">
                    {active.code}
                  </span>
                  <span className="text-base font-semibold text-ink">
                    {active.name}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(null)}
                  aria-label="Zatvori"
                  className="grid h-10 w-10 place-items-center rounded-full bg-surface text-ink transition-colors hover:bg-ink/5"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div
                ref={scrollRef}
                className="overflow-y-auto overscroll-contain p-6 leading-relaxed text-ink/80"
              >
                {active.full}
              </div>
            </div>
          </div>,
          document.body
        )}
    </Section>
  );
}
