import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Courses } from "@/components/sections/Courses";
import { Methodology } from "@/components/sections/Methodology";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Kursevi",
  description:
    "Kursevi nemačkog i engleskog jezika u Spiko Edu — od početnog do naprednog nivoa, grupno i individualno, sa pripremom za Goethe, ÖSD, IELTS i Cambridge.",
};

export default function KurseviPage() {
  return (
    <>
      <PageHeader
        eyebrow="Naši kursevi"
        title="Kursevi nemačkog i engleskog jezika"
        description="Bilo da kreneš od nule ili usavršavaš ono što već znaš — imamo program prilagođen tvom nivou i ciljevima."
      />
      <Courses />
      <Methodology />
      <CtaBand />
    </>
  );
}
