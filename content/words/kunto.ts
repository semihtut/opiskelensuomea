import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, nt:nn gradation, stem kunto- ~ kunno-.
// Genitive kunnon, partitive kuntoa, partitive pl kuntoja.
const kunto: Word = {
  fi: "kunto",
  slug: "kunto",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "condition, fitness, shape",
  selitys:
    "Fyysinen tai yleinen tila: 'hyvä kunto', 'auton kunto'. Tyyppi 1/valo, astevaihtelu nt:nn (kunto → kunnon). Vrt. kuntoilla, kunnossa, kuntoutua.",
  kuva: { alt: "kunto – fyysinen tai yleinen tila" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu nt:nn (vartalo kunno-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kunnon", merkitys: "of the condition" },
      { sija: "partitiivi (yks.)", muoto: "kuntoa", merkitys: "condition (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kuntoja", merkitys: "conditions (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu nt:nn: nominatiivi kunto (vahva nt), genetiivi kunnon (heikko nn). 'Olla hyvässä kunnossa' = to be in good shape; 'pitää kuntoa yllä' = to keep fit. Vrt. kuntoilla = to work out.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kunto" },
          { label: "Partitiivi", form: "kuntoa" },
          { label: "Genetiivi", form: "kunnon" },
          { label: "Inessiivi", form: "kunnossa" },
          { label: "Elatiivi", form: "kunnosta" },
          { label: "Illatiivi", form: "kuntoon" },
          { label: "Adessiivi", form: "kunnolla" },
          { label: "Ablatiivi", form: "kunnolta" },
          { label: "Allatiivi", form: "kunnolle" },
          { label: "Essiivi", form: "kuntona" },
          { label: "Translatiivi", form: "kunnoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kunnot" },
          { label: "Partitiivi", form: "kuntoja" },
          { label: "Genetiivi", form: "kuntojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kuntoilla",
      en: "to exercise, work out",
      taso: "B2",
      esim: { fi: "Kuntoilen kolmesti viikossa.", en: "I work out three times a week." },
    },
    {
      fi: "kuntoutua",
      en: "to rehabilitate, recover",
      taso: "B2",
      esim: { fi: "Hän kuntoutui leikkauksesta.", en: "He recovered from the surgery." },
    },
  ],
  synonyymit: [
    { fi: "vointi", en: "condition, state" },
    { fi: "tila", en: "state" },
  ],
  esimerkit: {
    A2: { fi: "Olen hyvässä kunnossa.", en: "I'm in good shape." },
    B1: { fi: "Auto on huonossa kunnossa.", en: "The car is in bad condition." },
    B2: {
      fi: "Säännöllinen liikunta pitää kunnon yllä ja kohottaa mielialaa.",
      en: "Regular exercise keeps you fit and lifts the mood.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kunto;
