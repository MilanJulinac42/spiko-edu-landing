import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/Logo";

const cols = [
  {
    title: "Kursevi",
    links: [
      { href: "/kursevi#nemacki", label: "Nemački jezik" },
      { href: "/kursevi#engleski", label: "Engleski jezik" },
      { href: "/kursevi#cenovnik", label: "Cenovnik" },
      { href: "/kursevi#faq", label: "Česta pitanja" },
    ],
  },
  {
    title: "Škola",
    links: [
      { href: "/o-nama", label: "O nama" },
      { href: "/o-nama#tim", label: "Naš tim" },
      { href: "/o-nama#metodologija", label: "Metodologija" },
      { href: "/kontakt", label: "Kontakt" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo invert />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Škola jezika za nemački i engleski. Učimo te da govoriš
              samopouzdano — kroz časove prilagođene baš tebi.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-light">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/70 transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-light">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href="mailto:spikoedu@gmail.com"
                  className="transition-colors hover:text-primary"
                >
                  spikoedu@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+381600000000"
                  className="transition-colors hover:text-primary"
                >
                  +381 60 000 0000
                </a>
              </li>
              <li>Novi Sad, Srbija</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Spiko Edu. Sva prava zadržana.</p>
          <div className="flex gap-6">
            <Link href="/politika-privatnosti" className="hover:text-primary">
              Politika privatnosti
            </Link>
            <Link href="/uslovi-koriscenja" className="hover:text-primary">
              Uslovi korišćenja
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
