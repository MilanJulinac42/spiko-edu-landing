const SITE_URL = "https://spikoedu.rs";

const data = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Spiko Edu",
  description:
    "Škola jezika za nemački i engleski — grupni i individualni časovi, priprema za Goethe, ÖSD, IELTS i Cambridge ispite.",
  url: SITE_URL,
  email: "spikoedu@gmail.com",
  telephone: "+381629611743",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vase Stajića 2a/10",
    addressLocality: "Bačka Palanka",
    addressCountry: "RS",
  },
  sameAs: [] as string[],
  knowsLanguage: ["de", "en"],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
