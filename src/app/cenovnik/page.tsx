import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Cenovnik",
  description:
    "Cene kurseva nemačkog i engleskog jezika u Spiko Edu — grupna, individualna i intenzivna nastava. Transparentno, bez skrivenih troškova.",
};

export default function CenovnikPage() {
  return (
    <>
      <PageHeader
        eyebrow="Cenovnik"
        title="Cene prilagođene tebi"
        description="Izaberi format koji ti odgovara — tačnu cenu i termin dogovaramo na besplatnom probnom času."
      />
      <Pricing />
      <Faq />
      <CtaBand />
    </>
  );
}
