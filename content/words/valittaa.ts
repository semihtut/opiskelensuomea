import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem valitta- ~ valita-.
// Present minä valitan, hän valittaa; imperfect minä valitin; NUT valittanut. NB ≠ valita (to choose).
const valittaa: Word = {
  fi: "valittaa",
  slug: "valittaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to complain; to appeal; to lament",
  selitys:
    "1) Ilmaista tyytymättömyyttä: 'valittaa palvelusta'. 2) Hakea muutosta tuomioon: 'valittaa päätöksestä'. 3) Voihkia kivusta. Tyyppi 1 (-aa), Kotus 53/muistaa, astevaihtelu tt:t (valitan). HUOM: eri sana kuin valita (= to choose, valitsen). Vrt. valitus, valitettavasti.",
  kuva: { emoji: "😤", alt: "valittaa – ilmaista tyytymättömyyttä tai hakea muutosta tuomioon" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; astevaihtelu tt:t (valita- ~ valitta-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "valitan", merkitys: "I complain" },
      { sija: "imperfekti (minä)", muoto: "valitin", merkitys: "I complained" },
      { sija: "NUT-partisiippi", muoto: "valittanut", merkitys: "(have) complained" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva valitta- (valittaa, valittanut), heikko valita- (valitan, valitin). Rektio: 'valittaa jostakin' (elat.: valittaa päätöksestä). ÄLÄ sekoita verbiin valita = to choose (minä valitsen). Vrt. valitus = complaint/appeal.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "valitan" },
          { label: "sinä", form: "valitat" },
          { label: "hän", form: "valittaa" },
          { label: "me", form: "valitamme" },
          { label: "te", form: "valitatte" },
          { label: "he", form: "valittavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en valita" },
          { label: "hän", form: "ei valita" },
          { label: "he", form: "eivät valita" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "valitin" },
          { label: "sinä", form: "valitit" },
          { label: "hän", form: "valitti" },
          { label: "me", form: "valitimme" },
          { label: "te", form: "valititte" },
          { label: "he", form: "valittivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen valittanut" },
          { label: "hän", form: "on valittanut" },
          { label: "he", form: "ovat valittaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "valita!" },
          { label: "te", form: "valittakaa!" },
          { label: "kielto (sinä)", form: "älä valita" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "valitus",
      en: "complaint; appeal",
      taso: "B1",
      esim: { fi: "Hän teki valituksen päätöksestä.", en: "He filed an appeal against the decision." },
    },
    {
      fi: "valitettavasti",
      en: "unfortunately",
      taso: "B1",
      esim: { fi: "Valitettavasti en pääse tulemaan.", en: "Unfortunately I can't come." },
    },
  ],
  synonyymit: [
    { fi: "marista", en: "to grumble" },
  ],
  esimerkit: {
    A2: { fi: "Älä valita koko ajan.", en: "Don't complain all the time." },
    B1: { fi: "Asiakas valitti huonosta palvelusta.", en: "The customer complained about poor service." },
    B2: {
      fi: "Syytetyllä on oikeus valittaa tuomiosta hovioikeuteen.",
      en: "The defendant has the right to appeal the verdict to the court of appeal.",
    },
  },
  updatedAt: "2026-06-07",
};

export default valittaa;
