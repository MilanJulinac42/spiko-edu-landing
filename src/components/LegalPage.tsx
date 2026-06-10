import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader title={title} eyebrow="Pravne informacije" />
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <p className="text-sm text-muted">Poslednje ažuriranje: {updated}</p>
          <div className="legal-prose mt-8 space-y-6 text-ink/80">
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}
