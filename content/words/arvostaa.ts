import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, no gradation (st cluster), stem arvosta-.
// Present minä arvostan, hän arvostaa; imperfect minä arvostin; NUT arvostanut.
const arvostaa: Word = {
  fi: "arvostaa",
  slug: "arvostaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to appreciate, value, respect",
  selitys:
    "Pitää jotakuta tai jotakin arvokkaana tai tärkeänä: 'arvostan apuasi'. Tyyppi 1 (-aa), Kotus 53/muistaa, ei astevaihtelua (st säilyy). Objekti partitiivissa. Johdettu sanasta arvo. Vrt. arvostus, arvokas.",
  kuva: { emoji: "🙏", alt: "arvostaa – pitää jotakin arvokkaana" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; ei astevaihtelua; vartalo arvosta-",
    muodot: [
      { sija: "preesens (minä)", muoto: "arvostan", merkitys: "I appreciate" },
      { sija: "imperfekti (minä)", muoto: "arvostin", merkitys: "I appreciated" },
      { sija: "NUT-partisiippi", muoto: "arvostanut", merkitys: "(have) appreciated" },
    ],
    huom:
      "Ei astevaihtelua – st-yhtymä säilyy kaikissa muodoissa (arvostan, arvostin, arvostanut). Objekti yleensä partitiivissa: 'arvostan työtäsi'. Johdettu sanasta arvo. Vrt. arvostus = appreciation, esteem.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "arvostan" },
          { label: "sinä", form: "arvostat" },
          { label: "hän", form: "arvostaa" },
          { label: "me", form: "arvostamme" },
          { label: "te", form: "arvostatte" },
          { label: "he", form: "arvostavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en arvosta" },
          { label: "hän", form: "ei arvosta" },
          { label: "he", form: "eivät arvosta" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "arvostin" },
          { label: "sinä", form: "arvostit" },
          { label: "hän", form: "arvosti" },
          { label: "me", form: "arvostimme" },
          { label: "te", form: "arvostitte" },
          { label: "he", form: "arvostivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen arvostanut" },
          { label: "hän", form: "on arvostanut" },
          { label: "he", form: "ovat arvostaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "arvosta!" },
          { label: "te", form: "arvostakaa!" },
          { label: "kielto (sinä)", form: "älä arvosta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "arvostus",
      en: "appreciation, esteem, respect",
      taso: "B1",
      esim: { fi: "Hän nauttii suurta arvostusta.", en: "He enjoys great esteem." },
    },
    {
      fi: "arvostettu",
      en: "respected, valued",
      taso: "B2",
      esim: { fi: "Hän on arvostettu asiantuntija.", en: "She is a respected expert." },
    },
    {
      fi: "arvo",
      en: "value, worth",
      taso: "A2",
      esim: { fi: "Talon arvo nousi.", en: "The house's value rose." },
    },
  ],
  synonyymit: [
    { fi: "kunnioittaa", en: "to respect" },
    { fi: "pitää arvossa", en: "to hold in high regard" },
  ],
  esimerkit: {
    A2: { fi: "Arvostan apuasi paljon.", en: "I appreciate your help a lot." },
    B1: { fi: "Työkaverit arvostavat hänen rehellisyyttään.", en: "Colleagues value her honesty." },
    B2: {
      fi: "Hän oppi arvostamaan vapaa-aikaansa vasta kiireisen vuoden jälkeen.",
      en: "He only learned to appreciate his free time after a busy year.",
    },
  },
  updatedAt: "2026-06-07",
};

export default arvostaa;
