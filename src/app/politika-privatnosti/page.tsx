import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politika privatnosti",
  description:
    "Kako Spiko Edu prikuplja, koristi i štiti tvoje lične podatke, u skladu sa Zakonom o zaštiti podataka o ličnosti Republike Srbije.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Politika privatnosti" updated="21. jun 2026.">
      <p>
        Ova politika privatnosti objašnjava kako škola jezika{" "}
        <strong>Spiko Edu</strong> prikuplja, koristi, čuva i štiti lične podatke
        koje nam poveriš putem ovog sajta. Podatke obrađujemo u skladu sa{" "}
        <strong>
          Zakonom o zaštiti podataka o ličnosti Republike Srbije
        </strong>{" "}
        („Sl. glasnik RS"). Za posetioce iz Evropske unije primenjujemo i načela
        Opšte uredbe o zaštiti podataka (GDPR).
      </p>

      <h2>1. Rukovalac podacima</h2>
      <p>Rukovalac tvojim ličnim podacima je:</p>
      <ul>
        <li>
          <strong>Spiko Edu</strong> (puno pravno ime — <em>popuniti</em>)
        </li>
        <li>Adresa: <em>popuniti</em></li>
        <li>Matični broj / PIB: <em>popuniti</em></li>
        <li>
          Email: <a href="mailto:spikoedu@gmail.com">spikoedu@gmail.com</a>
        </li>
      </ul>

      <h2>2. Koje podatke prikupljamo</h2>
      <ul>
        <li>Ime i prezime koje uneseš u kontakt formu</li>
        <li>Email adresu i (opciono) broj telefona</li>
        <li>Jezik za koji si zainteresovan/na i sadržaj poruke</li>
        <li>
          Anonimne i agregirane statistike o poseti (bez kolačića koji te lično
          identifikuju — videti odeljak „Kolačići i analitika")
        </li>
      </ul>
      <p>
        Ne prikupljamo posebne („naročito osetljive") vrste podataka i ne vršimo
        automatizovano donošenje odluka ni profilisanje.
      </p>

      <h2>3. Svrhe i osnov obrade</h2>
      <ul>
        <li>
          <strong>Odgovor na upit i zakazivanje konsultacija</strong> — na osnovu
          tvog pristanka, odnosno radnji preduzetih na tvoj zahtev pre zaključenja
          ugovora.
        </li>
        <li>
          <strong>Informisanje o kursevima i upisu</strong> — na osnovu pristanka,
          odnosno izvršenja ugovora.
        </li>
        <li>
          <strong>Unapređenje sadržaja i bezbednosti sajta</strong> putem anonimne
          analitike — na osnovu našeg legitimnog interesa.
        </li>
      </ul>

      <h2>4. Kolačići i analitika</h2>
      <p>
        Koristimo <strong>Plausible Analytics</strong> — alat za web analitiku
        koji poštuje privatnost, <strong>ne koristi kolačiće</strong> i ne
        prikuplja lične podatke niti ih deli u reklamne svrhe. Podaci se
        prikupljaju potpuno anonimno i agregirano, zbog čega ovaj sajt ne zahteva
        baner za saglasnost za kolačiće.
      </p>

      <h2>5. Primaoci podataka (obrađivači)</h2>
      <p>
        Tvoje podatke ne prodajemo. Možemo ih deliti isključivo sa pouzdanim
        pružaocima usluga koji ih obrađuju u naše ime i po našim uputstvima:
      </p>
      <ul>
        <li>Pružalac hostinga sajta (<em>npr. Vercel — popuniti</em>)</li>
        <li>
          Pružalac email usluge za prijem poruka iz forme (<em>popuniti</em>)
        </li>
        <li>Plausible Analytics (anonimna analitika)</li>
      </ul>
      <p>
        Ukoliko se neki pružalac usluga nalazi u inostranstvu, prenos podataka
        vršimo uz primenu odgovarajućih mera zaštite predviđenih Zakonom.
      </p>

      <h2>6. Koliko dugo čuvamo podatke</h2>
      <p>
        Podatke iz upita čuvamo onoliko dugo koliko je potrebno da odgovorimo i
        eventualno zaključimo ugovor o pohađanju kursa, a najduže{" "}
        <em>(npr. 24 meseca — popuniti)</em> od poslednjeg kontakta, osim ako
        zakon ne nalaže duže čuvanje. Nakon toga podatke brišemo ili
        anonimizujemo.
      </p>

      <h2>7. Tvoja prava</h2>
      <p>U skladu sa Zakonom, imaš pravo na:</p>
      <ul>
        <li>pristup svojim podacima i informaciju o obradi;</li>
        <li>ispravku netačnih ili dopunu nepotpunih podataka;</li>
        <li>brisanje podataka;</li>
        <li>ograničenje obrade i prigovor na obradu;</li>
        <li>prenosivost podataka;</li>
        <li>
          opoziv pristanka u svakom trenutku (bez uticaja na zakonitost obrade
          pre opoziva).
        </li>
      </ul>
      <p>
        Za ostvarivanje prava piši nam na{" "}
        <a href="mailto:spikoedu@gmail.com">spikoedu@gmail.com</a> i odgovorićemo ti u
        zakonskom roku.
      </p>

      <h2>8. Pravo na pritužbu</h2>
      <p>
        Ako smatraš da obrađujemo tvoje podatke suprotno propisima, imaš pravo da
        podneseš pritužbu nadzornom organu —{" "}
        <strong>
          Povereniku za informacije od javnog značaja i zaštitu podataka o
          ličnosti
        </strong>{" "}
        Republike Srbije.
      </p>

      <h2>9. Bezbednost podataka</h2>
      <p>
        Primenjujemo razumne tehničke i organizacione mere zaštite (šifrovan
        prenos podataka, ograničen pristup) kako bismo zaštitili tvoje podatke od
        neovlašćenog pristupa, gubitka ili zloupotrebe.
      </p>

      <h2>10. Izmene politike</h2>
      <p>
        Ovu politiku možemo povremeno ažurirati. Aktuelna verzija sa datumom
        poslednje izmene uvek je dostupna na ovoj stranici.
      </p>

      <h2>11. Kontakt</h2>
      <p>
        Za sva pitanja u vezi sa privatnošću i zaštitom podataka, kontaktiraj nas
        na <a href="mailto:spikoedu@gmail.com">spikoedu@gmail.com</a>.
      </p>
    </LegalPage>
  );
}
