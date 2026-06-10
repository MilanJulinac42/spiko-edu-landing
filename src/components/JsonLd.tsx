const SITE_URL = "https://spikoedu.rs";

const data = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Spiko Edu",
  description:
    "Škola jezika za nemački i engleski — grupni i individualni časovi, priprema za Goethe, ÖSD, IELTS i Cambridge ispite.",
  url: SITE_URL,
  email: "info@spikoedu.rs",
  telephone: "+381600000000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Novi Sad",
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
