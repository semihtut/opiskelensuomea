import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 66/rohkaista, no gradation, stem ilmaise-.
// Present minä ilmaisen, hän ilmaisee; imperfect minä ilmaisin; NUT ilmaissut. Governs allative.
const ilmaista: Word = {
  fi: "ilmaista",
  slug: "ilmaista",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "B1",
  en: "to express, indicate; to disclose",
  selitys:
    "Tuoda tunne, ajatus tai tieto esiin sanoin tai elein: 'ilmaista mielipiteensä'. Tyyppi 3 (-sta), Kotus 66/rohkaista, ei astevaihtelua; vartalo ilmaise-. NUT-partisiippi ilmaissut. Henkilölle allatiivi. Vrt. ilmaisu, ilmoittaa.",
  kuva: { emoji: "🗣️", alt: "ilmaista – tuoda ajatus tai tunne esiin" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-sta), Kotus 66/rohkaista; ei astevaihtelua; vartalo ilmaise-",
    muodot: [
      { sija: "preesens (minä)", muoto: "ilmaisen", merkitys: "I express" },
      { sija: "imperfekti (minä)", muoto: "ilmaisin", merkitys: "I expressed" },
      { sija: "NUT-partisiippi", muoto: "ilmaissut", merkitys: "(have) expressed" },
    ],
    huom:
      "Tyyppi 66 (kuten ratkaista): vartalo ilmaise-, preesens ilmaisen, imperfekti ilmaisin. NUT-partisiipissa s kahdentuu: ilmaissut. Henkilölle allatiivi: 'ilmaista jollekulle'. Vrt. ilmaisu = expression.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "ilmaisen" },
          { label: "sinä", form: "ilmaiset" },
          { label: "hän", form: "ilmaisee" },
          { label: "me", form: "ilmaisemme" },
          { label: "te", form: "ilmaisette" },
          { label: "he", form: "ilmaisevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en ilmaise" },
          { label: "hän", form: "ei ilmaise" },
          { label: "he", form: "eivät ilmaise" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "ilmaisin" },
          { label: "sinä", form: "ilmaisit" },
          { label: "hän", form: "ilmaisi" },
          { label: "me", form: "ilmaisimme" },
          { label: "te", form: "ilmaisitte" },
          { label: "he", form: "ilmaisivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen ilmaissut" },
          { label: "hän", form: "on ilmaissut" },
          { label: "he", form: "ovat ilmaisseet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "ilmaise!" },
          { label: "te", form: "ilmaiskaa!" },
          { label: "kielto (sinä)", form: "älä ilmaise" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ilmaisu",
      en: "expression, phrase",
      taso: "B1",
      esim: { fi: "Se on yleinen ilmaisu.", en: "It's a common expression." },
    },
    {
      fi: "ilmaista itseään",
      en: "to express oneself",
      taso: "B2",
      esim: { fi: "Hän osaa ilmaista itseään selkeästi.", en: "She can express herself clearly." },
    },
  ],
  synonyymit: [
    { fi: "kertoa", en: "to tell" },
    { fi: "tuoda esiin", en: "to bring out" },
  ],
  esimerkit: {
    A2: { fi: "Ilmaise ajatuksesi rohkeasti.", en: "Express your thoughts boldly." },
    B1: { fi: "Hän ilmaisi tyytymättömyytensä selvästi.", en: "He expressed his dissatisfaction clearly." },
    B2: {
      fi: "Joskus on vaikea ilmaista monimutkaisia tunteita sanoin.",
      en: "Sometimes it's hard to express complex feelings in words.",
    },
  },
  updatedAt: "2026-06-07",
};

export default ilmaista;
