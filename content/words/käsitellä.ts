import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 67/tulla, tt:t gradation, stem käsittele- ~ käsitellä.
// Present minä käsittelen, hän käsittelee; imperfect käsittelin; NUT käsitellyt.
const kasitella: Word = {
  fi: "käsitellä",
  slug: "käsitellä",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "B1",
  en: "to handle, deal with, process; to discuss",
  selitys:
    "1) Hoitaa tai käydä läpi asia: 'käsitellä hakemus', 'käsitellä asia kokouksessa'. 2) Käsitellä jotakin fyysisesti tai aineella. 3) Käsitellä aihetta puheessa. Tyyppi 3 (-llä), Kotus 67/tulla, astevaihtelu tt:t (käsittelen). Frekventatiivi verbistä käsittää. Vrt. käsittää, käsi, käsittely.",
  kuva: { alt: "käsitellä – hoitaa, käydä läpi tai käsitellä asia" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-llä), Kotus 67/tulla; astevaihtelu tt:t (käsittele- ~ käsitellä)",
    muodot: [
      { sija: "preesens (minä)", muoto: "käsittelen", merkitys: "I handle" },
      { sija: "imperfekti (minä)", muoto: "käsittelin", merkitys: "I handled" },
      { sija: "NUT-partisiippi", muoto: "käsitellyt", merkitys: "(have) handled" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva preesensissä käsittele- (käsittelen, käsittelee), heikko infinitiivissä ja NUT-partisiipissa käsitel- (käsitellä, käsitellyt). Passiivi käsitellään. Vrt. käsittää, käsittely = processing/handling.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "käsittelen" },
          { label: "sinä", form: "käsittelet" },
          { label: "hän", form: "käsittelee" },
          { label: "me", form: "käsittelemme" },
          { label: "te", form: "käsittelette" },
          { label: "he", form: "käsittelevät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en käsittele" },
          { label: "hän", form: "ei käsittele" },
          { label: "he", form: "eivät käsittele" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "käsittelin" },
          { label: "sinä", form: "käsittelit" },
          { label: "hän", form: "käsitteli" },
          { label: "me", form: "käsittelimme" },
          { label: "te", form: "käsittelitte" },
          { label: "he", form: "käsittelivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen käsitellyt" },
          { label: "hän", form: "on käsitellyt" },
          { label: "he", form: "ovat käsitelleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "käsittele!" },
          { label: "te", form: "käsitelkää!" },
          { label: "kielto (sinä)", form: "älä käsittele" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "käsittely",
      en: "processing, handling, treatment",
      taso: "B2",
      esim: { fi: "Hakemuksen käsittely kestää viikon.", en: "Processing the application takes a week." },
    },
    {
      fi: "käsittää",
      en: "to comprise; to understand",
      taso: "B2",
      esim: { fi: "Kurssi käsittää kymmenen luentoa.", en: "The course comprises ten lectures." },
    },
  ],
  synonyymit: [
    { fi: "hoitaa", en: "to handle, take care of" },
  ],
  esimerkit: {
    A2: { fi: "Virasto käsittelee hakemuksen.", en: "The office processes the application." },
    B1: { fi: "Asia käsiteltiin kokouksessa.", en: "The matter was discussed at the meeting." },
    B2: {
      fi: "Henkilötietoja on käsiteltävä huolellisesti ja lain mukaisesti.",
      en: "Personal data must be handled carefully and in accordance with the law.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kasitella;
