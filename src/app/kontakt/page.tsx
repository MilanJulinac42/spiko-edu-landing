import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Zakaži besplatan probni čas u Spiko Edu školi jezika. Ostavi podatke i javljamo ti se u roku od 24h.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title="Hajde da se upoznamo"
        description="Ostavi podatke i javljamo ti se u roku od 24h da dogovorimo termin besplatnog probnog časa."
        waveFill="fill-surface"
      />
      <Contact />
    </>
  );
}
