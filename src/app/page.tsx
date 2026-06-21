import { Hero } from "@/components/sections/Hero";
import { CertStrip } from "@/components/sections/CertStrip";
import { Courses } from "@/components/sections/Courses";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <CertStrip />
      <Courses />
      <Testimonials />
      <CtaBand />
    </>
  );
}
