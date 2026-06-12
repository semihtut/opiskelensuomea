import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, nt:nn gradation, stem hyvinvoinni- ~ hyvinvointi.
// Genitive hyvinvoinnin, partitive hyvinvointia. Usually singular.
const hyvinvointi: Word = {
  fi: "hyvinvointi",
  slug: "hyvinvointi",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "B2",
  en: "well-being, welfare, wellness",
  selitys:
    "Hyvä olo ja elämänlaatu – terveys, turvallisuus ja onnellisuus: 'edistää hyvinvointia'. Tyyppi 5/risti, astevaihtelu nt:nn (hyvinvointi → hyvinvoinnin). Yhdyssana hyvin + vointi. Vrt. voida, vointi, terveys.",
  kuva: { alt: "hyvinvointi – hyvä olo ja elämänlaatu" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; astevaihtelu nt:nn (vartalo hyvinvoinni-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "hyvinvoinnin", merkitys: "of well-being" },
      { sija: "partitiivi (yks.)", muoto: "hyvinvointia", merkitys: "well-being (partitive)" },
      { sija: "illatiivi (yks.)", muoto: "hyvinvointiin", merkitys: "to well-being" },
    ],
    huom:
      "Tyyppi 5 (-nti): astevaihtelu nt:nn (hyvinvointi → hyvinvoinnin), kuten tunti → tunnin. Yhdyssana hyvin + vointi (verbistä voida). Yleensä yksikössä. 'Hyvinvointivaltio' = welfare state.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "hyvinvointi" },
          { label: "Partitiivi", form: "hyvinvointia" },
          { label: "Genetiivi", form: "hyvinvoinnin" },
          { label: "Inessiivi", form: "hyvinvoinnissa" },
          { label: "Elatiivi", form: "hyvinvoinnista" },
          { label: "Illatiivi", form: "hyvinvointiin" },
          { label: "Adessiivi", form: "hyvinvoinnilla" },
          { label: "Ablatiivi", form: "hyvinvoinnilta" },
          { label: "Allatiivi", form: "hyvinvoinnille" },
          { label: "Essiivi", form: "hyvinvointina" },
          { label: "Translatiivi", form: "hyvinvoinniksi" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hyvinvointivaltio",
      en: "welfare state",
      taso: "B2",
      esim: { fi: "Suomi on hyvinvointivaltio.", en: "Finland is a welfare state." },
    },
    {
      fi: "vointi",
      en: "condition, state of health",
      taso: "B2",
      esim: { fi: "Miten vointisi on?", en: "How are you feeling?" },
    },
  ],
  synonyymit: [
    { fi: "hyvä olo", en: "feeling of well-being" },
    { fi: "terveys", en: "health" },
  ],
  esimerkit: {
    A2: { fi: "Liikunta lisää hyvinvointia.", en: "Exercise increases well-being." },
    B1: { fi: "Työnantaja huolehtii työntekijöiden hyvinvoinnista.", en: "The employer takes care of the employees' well-being." },
    B2: {
      fi: "Henkinen hyvinvointi on yhtä tärkeää kuin fyysinen terveys.",
      en: "Mental well-being is just as important as physical health.",
    },
  },
  updatedAt: "2026-06-07",
};

export default hyvinvointi;
