import { Hero } from "@/components/sections/Hero";
import { Courses } from "@/components/sections/Courses";
import { WhyUs } from "@/components/sections/WhyUs";
import { CtaBand } from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Courses />
      <WhyUs waveFill="fill-surface" />
      <CtaBand />
    </>
  );
}
