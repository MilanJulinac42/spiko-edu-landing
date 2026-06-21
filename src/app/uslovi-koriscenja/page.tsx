import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Uslovi korišćenja",
  description:
    "Uslovi korišćenja sajta i usluga škole jezika Spiko Edu.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Uslovi korišćenja" updated="10. jun 2026.">
      <p>
        Korišćenjem sajta i usluga škole jezika <strong>Spiko Edu</strong>{" "}
        prihvataš sledeće uslove. Molimo te da ih pažljivo pročitaš.
      </p>

      <h2>Usluge</h2>
      <p>
        Spiko Edu pruža usluge nastave nemačkog i engleskog jezika kroz grupne i
        individualne časove, uživo i online. Detalji svakog kursa (trajanje,
        termini, cena) dogovaraju se prilikom upisa.
      </p>

      <h2>Prijava i upis</h2>
      <ul>
        <li>
          Slanjem kontakt forme šalješ neobavezujući upit — upis se smatra
          potvrđenim tek nakon dogovora i potvrde sa naše strane.
        </li>
        <li>
          Dužan/na si da pružiš tačne i istinite podatke prilikom prijave.
        </li>
      </ul>

      <h2>Obaveze polaznika</h2>
      <ul>
        <li>Redovno pohađanje časova radi najboljih rezultata</li>
        <li>Poštovanje termina i pravovremeno obaveštavanje o izostancima</li>
        <li>Poštovanje predavača i drugih polaznika</li>
      </ul>

      <h2>Intelektualna svojina</h2>
      <p>
        Svi materijali, tekstovi i vizuelni elementi na ovom sajtu vlasništvo su
        škole Spiko Edu i ne smeju se koristiti bez dozvole.
      </p>

      <h2>Izmene uslova</h2>
      <p>
        Zadržavamo pravo da povremeno ažuriramo ove uslove. Aktuelna verzija je
        uvek dostupna na ovoj stranici.
      </p>

      <h2>Kontakt</h2>
      <p>
        Za sva pitanja u vezi sa uslovima korišćenja, piši nam na{" "}
        <a href="mailto:info@spikoedu.rs">info@spikoedu.rs</a>.
      </p>
    </LegalPage>
  );
}
