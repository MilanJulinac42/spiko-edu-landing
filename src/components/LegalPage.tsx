import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";

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
      <header className="sticky top-0 z-50 border-b border-ink/5 bg-white/90 backdrop-blur-md">
        <Container className="flex h-18 items-center justify-between py-3">
          <Logo />
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink/70 transition-colors hover:text-primary-dark"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Nazad na početnu
          </Link>
        </Container>
      </header>

      <main className="flex-1 bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted">Poslednje ažuriranje: {updated}</p>
          <div className="legal-prose mt-10 space-y-6 text-ink/80">
            {children}
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
