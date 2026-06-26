import DE from "country-flag-icons/react/3x2/DE";
import GB from "country-flag-icons/react/3x2/GB";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const items = [
  { flag: DE, label: "Goethe-Zertifikat" },
  { flag: DE, label: "ÖSD" },
  { flag: DE, label: "telc" },
  { flag: GB, label: "Cambridge" },
  { flag: GB, label: "IELTS" },
  { flag: GB, label: "TOEFL" },
];

function Badge({ flag: Flag, label }: { flag: typeof DE; label: string }) {
  return (
    <span className="mx-3 inline-flex shrink-0 items-center gap-2 rounded-full border border-ink/10 bg-white px-5 py-2 text-sm font-semibold text-ink/70 shadow-sm">
      <Flag className="h-5 w-7 rounded shadow-sm ring-1 ring-ink/10" />
      {label}
    </span>
  );
}

export function CertStrip() {
  return (
    <Section className="bg-surface py-12 sm:py-16">
      <Container>
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted">
          Pripremamo te za zvanične ispite i sertifikate
        </p>
      </Container>

      {/* beskonacni marquee */}
      <div className="marquee-track relative mt-7 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="marquee">
          {[...items, ...items].map((it, i) => (
            <Badge key={i} flag={it.flag} label={it.label} />
          ))}
        </div>
      </div>
    </Section>
  );
}
