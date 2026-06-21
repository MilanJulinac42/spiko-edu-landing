import Image from "next/image";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const cities = [
  { img: "/cities/berlin.jpg", name: "Berlin", country: "Nemačka", lang: "DE" },
  { img: "/cities/vienna.jpg", name: "Beč", country: "Austrija", lang: "DE" },
  { img: "/cities/zurich.jpg", name: "Cirih", country: "Švajcarska", lang: "DE" },
  { img: "/cities/london.jpg", name: "London", country: "V. Britanija", lang: "EN" },
  { img: "/cities/nyc.jpg", name: "Njujork", country: "SAD", lang: "EN" },
  { img: "/cities/dublin.jpg", name: "Dablin", country: "Irska", lang: "EN" },
];

export function Destinations() {
  return (
    <Section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <Container>
        <SectionHeading
          invert
          eyebrow="Kuda te vodi jezik"
          title="Jezik koji otvara svet"
          description="Nemački i engleski su pasoš za studije, posao i život u nekim od najlepših gradova sveta."
        />

        <Reveal stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c) => (
            <div
              key={c.name}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10"
            >
              <Image
                src={c.img}
                alt={`${c.name}, ${c.country}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

              <span
                className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-xs font-bold backdrop-blur ${
                  c.lang === "DE"
                    ? "bg-primary/90 text-ink"
                    : "bg-secondary/90 text-white"
                }`}
              >
                {c.lang === "DE" ? "Nemački" : "Engleski"}
              </span>

              <div className="absolute bottom-0 left-0 p-5 text-white">
                <p className="flex items-center gap-1.5 text-xs text-white/70">
                  <MapPin className="h-3.5 w-3.5" />
                  {c.country}
                </p>
                <p className="font-display text-2xl font-bold">{c.name}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
