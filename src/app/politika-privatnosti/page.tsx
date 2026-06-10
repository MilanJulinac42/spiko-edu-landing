import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politika privatnosti",
  description:
    "Kako Spiko Edu prikuplja, koristi i štiti tvoje lične podatke u skladu sa propisima o zaštiti podataka.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Politika privatnosti" updated="10. jun 2026.">
      <p>
        Ova politika privatnosti objašnjava kako škola jezika{" "}
        <strong>Spiko Edu</strong> prikuplja, koristi i štiti lične podatke koje
        nam poveriš putem ovog sajta. Posvećeni smo zaštiti tvoje privatnosti u
        skladu sa važećim propisima o zaštiti podataka (uključujući GDPR za
        korisnike iz EU).
      </p>

      <h2>Koje podatke prikupljamo</h2>
      <ul>
        <li>Ime i prezime koje uneseš u kontakt formu</li>
        <li>Email adresu i broj telefona</li>
        <li>Jezik za koji si zainteresovan/na i poruku koju nam pošalješ</li>
        <li>
          Anonimne statistike o poseti sajtu (bez kolačića koji te lično
          identifikuju)
        </li>
      </ul>

      <h2>Kako koristimo podatke</h2>
      <ul>
        <li>Da te kontaktiramo povodom upita i zakazivanja probnog časa</li>
        <li>Da ti pružimo informacije o kursevima i upisu</li>
        <li>Da unapredimo sadržaj i funkcionalnost sajta</li>
      </ul>
      <p>
        Tvoje podatke ne prodajemo i ne ustupamo trećim licima u marketinške
        svrhe.
      </p>

      <h2>Analitika</h2>
      <p>
        Koristimo Plausible Analytics — alat za web analitiku koji poštuje
        privatnost i ne koristi kolačiće niti prikuplja lične podatke. Podaci se
        prikupljaju u potpunosti anonimno.
      </p>

      <h2>Tvoja prava</h2>
      <p>
        Imaš pravo da zatražiš uvid, ispravku ili brisanje svojih ličnih
        podataka, kao i da povučeš saglasnost u bilo kom trenutku. Za sve zahteve
        piši nam na{" "}
        <a href="mailto:info@spikoedu.rs">info@spikoedu.rs</a>.
      </p>

      <h2>Kontakt</h2>
      <p>
        Za sva pitanja u vezi sa privatnošću, kontaktiraj nas na{" "}
        <a href="mailto:info@spikoedu.rs">info@spikoedu.rs</a>.
      </p>

      <p>
        <em>
          Napomena: ovaj dokument je opšti predložak i pre objave ga treba
          uskladiti sa stvarnim poslovanjem škole i pravno proveriti.
        </em>
      </p>
    </LegalPage>
  );
}
