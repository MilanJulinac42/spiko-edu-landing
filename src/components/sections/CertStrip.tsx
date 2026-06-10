import DE from "country-flag-icons/react/3x2/DE";
import GB from "country-flag-icons/react/3x2/GB";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const groups = [
  { flag: DE, label: "Nemački", exams: ["Goethe-Zertifikat", "ÖSD", "TestDaF", "telc"] },
  { flag: GB, label: "Engleski", exams: ["Cambridge", "IELTS", "TOEFL"] },
];

export function CertStrip() {
  return (
    <Section className="bg-surface py-12 sm:py-16">
      <Container>
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted">
          Pripremamo te za zvanične ispite i sertifikate
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-12">
          {groups.map((g, i) => (
            <div
              key={g.label}
              className="flex flex-col items-center gap-4 sm:flex-row"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-ink">
                <g.flag className="h-5 w-7 rounded shadow-sm ring-1 ring-ink/10" />
                {g.label}
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                {g.exams.map((e) => (
                  <span
                    key={e}
                    className="rounded-full border border-ink/10 bg-white px-4 py-1.5 text-sm font-semibold text-ink/70 shadow-sm"
                  >
                    {e}
                  </span>
                ))}
              </div>
              {i === 0 && (
                <span className="hidden h-10 w-px bg-ink/10 lg:block" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
