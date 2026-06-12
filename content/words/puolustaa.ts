import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, no gradation (st cluster), stem puolusta-.
// Present minä puolustan, hän puolustaa; imperfect minä puolustin; NUT puolustanut.
const puolustaa: Word = {
  fi: "puolustaa",
  slug: "puolustaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to defend, stand up for",
  selitys:
    "Suojella jotakuta tai jotakin hyökkäykseltä tai arvostelulta; pitää puolta: 'puolustaa mielipidettään'. Tyyppi 1 (-aa), Kotus 53/muistaa, ei astevaihtelua (st säilyy). Objekti partitiivissa. Vastakohta hyökätä. Vrt. puolustus, puoli.",
  kuva: { alt: "puolustaa – suojella ja pitää puolta" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; ei astevaihtelua; vartalo puolusta-",
    muodot: [
      { sija: "preesens (minä)", muoto: "puolustan", merkitys: "I defend" },
      { sija: "imperfekti (minä)", muoto: "puolustin", merkitys: "I defended" },
      { sija: "NUT-partisiippi", muoto: "puolustanut", merkitys: "(have) defended" },
    ],
    huom:
      "Ei astevaihtelua – st-yhtymä säilyy (puolustan, puolustin, puolustanut). Objekti partitiivissa: 'puolustan oikeuttani'. 'Puolustautua' = to defend oneself. Vrt. puolustus = defence, puoli = side.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "puolustan" },
          { label: "sinä", form: "puolustat" },
          { label: "hän", form: "puolustaa" },
          { label: "me", form: "puolustamme" },
          { label: "te", form: "puolustatte" },
          { label: "he", form: "puolustavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en puolusta" },
          { label: "hän", form: "ei puolusta" },
          { label: "he", form: "eivät puolusta" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "puolustin" },
          { label: "sinä", form: "puolustit" },
          { label: "hän", form: "puolusti" },
          { label: "me", form: "puolustimme" },
          { label: "te", form: "puolustitte" },
          { label: "he", form: "puolustivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen puolustanut" },
          { label: "hän", form: "on puolustanut" },
          { label: "he", form: "ovat puolustaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "puolusta!" },
          { label: "te", form: "puolustakaa!" },
          { label: "kielto (sinä)", form: "älä puolusta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "puolustus",
      en: "defence",
      taso: "B1",
      esim: { fi: "Joukkueen puolustus oli vahva.", en: "The team's defence was strong." },
    },
    {
      fi: "puolustautua",
      en: "to defend oneself",
      taso: "B2",
      esim: { fi: "Hän puolustautui syytöksiä vastaan.", en: "He defended himself against the accusations." },
    },
    {
      fi: "puolustaja",
      en: "defender",
      taso: "B1",
      esim: { fi: "Hän pelaa puolustajana.", en: "He plays as a defender." },
    },
  ],
  synonyymit: [
    { fi: "suojella", en: "to protect" },
    { fi: "pitää puolta", en: "to take sb's side" },
  ],
  esimerkit: {
    A2: { fi: "Hän puolustaa aina ystäviään.", en: "She always defends her friends." },
    B1: { fi: "Osaan puolustaa mielipidettäni.", en: "I can defend my opinion." },
    B2: {
      fi: "Asianajaja puolusti asiakastaan vakuuttavin perustein.",
      en: "The lawyer defended their client with convincing arguments.",
    },
  },
  updatedAt: "2026-06-07",
};

export default puolustaa;
