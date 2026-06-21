import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Team } from "@/components/sections/Team";
import { Methodology } from "@/components/sections/Methodology";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "O nama",
  description:
    "Upoznaj Spiko Edu — našu metodologiju učenja kroz razgovor, zašto nas polaznici biraju i šta kažu oni koji su već progovorili.",
};

export default function ONamaPage() {
  return (
    <>
      <PageHeader
        eyebrow="O nama"
        title="Škola u kojoj zaista progovoriš"
        description="Naša misija je jednostavna — da govoriš samopouzdano, a ne samo da znaš pravila. Evo kako to postižemo."
        image="/cities/onama.jpg"
      />
      <Team />
      <Methodology />
      <WhyUs />
      <Testimonials />
      <CtaBand />
    </>
  );
}
