import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { CoursesDetail } from "@/components/sections/CoursesDetail";
import { Formats } from "@/components/sections/Formats";
import { LevelGuide } from "@/components/sections/LevelGuide";
import { Destinations } from "@/components/sections/Destinations";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Kursevi i cene",
  description:
    "Kursevi nemačkog i engleskog jezika u Spiko Edu — nivoi A1–C2, grupna, individualna i intenzivna nastava, priprema za Goethe, ÖSD, IELTS i Cambridge. Transparentne cene.",
};

export default function KurseviPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kursevi i cene"
        title="Kursevi nemačkog i engleskog jezika"
        description="Bilo da kreneš od nule ili usavršavaš ono što već znaš — imamo program prilagođen tvom nivou, tempu i ciljevima."
        image="/cities/study.jpg"
      />
      <CoursesDetail />
      <Formats />
      <LevelGuide />
      <Destinations />
      <Pricing />
      <Faq />
      <CtaBand />
    </>
  );
}
