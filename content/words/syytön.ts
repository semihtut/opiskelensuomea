import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 34/onneton, tt:t gradation, stem syyttömä- ~ syytön.
// Genitive syyttömän, partitive syytöntä, partitive pl syyttömiä.
const syyton: Word = {
  fi: "syytön",
  slug: "syytön",
  pos: "adjektiivi (tyyppi 34/onneton)",
  posClass: "adjektiivi",
  level: "B1",
  en: "innocent, not guilty",
  selitys:
    "Sellainen, joka ei ole syyllinen, ei ole tehnyt rikosta: 'syytön epäilty'. Tyyppi 34/onneton, astevaihtelu tt:t (syytön → syyttömän). Kieltojohdos syy + -tön. Vastakohta syyllinen. Vrt. syy, syyllinen, syyttömyys.",
  kuva: { emoji: "🕊️", alt: "syytön – henkilö joka ei ole syyllinen" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 34/onneton; astevaihtelu tt:t (vartalo syyttömä-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "syyttömän", merkitys: "of the innocent" },
      { sija: "partitiivi (yks.)", muoto: "syytöntä", merkitys: "innocent (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "syyttömiä", merkitys: "innocent (partitive pl.)" },
    ],
    huom:
      "Tyyppi 34 (-tön): nominatiivi syytön (heikko t), vartalo syyttömä- vahvistuu (syyttömän, syyttömällä), partitiivi syytöntä. Kieltojohdos syy + -tön ('ilman syytä'). Vastakohta syyllinen. Vrt. syyttömyys = innocence.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "syytön" },
          { label: "Partitiivi", form: "syytöntä" },
          { label: "Genetiivi", form: "syyttömän" },
          { label: "Inessiivi", form: "syyttömässä" },
          { label: "Elatiivi", form: "syyttömästä" },
          { label: "Illatiivi", form: "syyttömään" },
          { label: "Adessiivi", form: "syyttömällä" },
          { label: "Allatiivi", form: "syyttömälle" },
          { label: "Translatiivi", form: "syyttömäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "syyttömät" },
          { label: "Partitiivi", form: "syyttömiä" },
          { label: "Genetiivi", form: "syyttömien" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Positiivi", form: "syytön" },
          { label: "Komparatiivi", form: "syyttömämpi" },
          { label: "Superlatiivi", form: "syyttömin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "syyttömyys",
      en: "innocence",
      taso: "B2",
      esim: { fi: "Hän todisti syyttömyytensä.", en: "He proved his innocence." },
    },
    {
      fi: "syytön epäilty",
      en: "innocent suspect",
      taso: "B2",
      esim: { fi: "Syytöntä epäiltyä ei saa tuomita.", en: "An innocent suspect must not be convicted." },
    },
  ],
  synonyymit: [
    { fi: "viaton", en: "innocent, blameless" },
  ],
  esimerkit: {
    A2: { fi: "Hän on syytön.", en: "He is innocent." },
    B1: { fi: "Tuomioistuin totesi hänet syyttömäksi.", en: "The court found him not guilty." },
    B2: {
      fi: "Jokaista pidetään syyttömänä, kunnes toisin todistetaan.",
      en: "Everyone is considered innocent until proven otherwise.",
    },
  },
  updatedAt: "2026-06-07",
};

export default syyton;
