import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 34/onneton, tt:t gradation, stem työttömä- ~ työtön.
// Genitive työttömän, partitive työtöntä, partitive pl työttömiä. Adjective + noun.
const tyoton: Word = {
  fi: "työtön",
  slug: "työtön",
  pos: "adjektiivi / substantiivi (tyyppi 34/onneton)",
  posClass: "adjektiivi",
  level: "B1",
  en: "unemployed; an unemployed person",
  selitys:
    "Sellainen, jolla ei ole työtä: 'olla työtön', 'työtön nuori'. Toimii myös substantiivina (työtön = työtön henkilö). Tyyppi 34/onneton, astevaihtelu tt:t (työtön → työttömän). Kieltojohdos työ + -tön. Vrt. työ, työttömyys, työllinen.",
  kuva: { emoji: "🚷", alt: "työtön – henkilö jolla ei ole työtä" },

  kielioppi: {
    tyyppi: "adjektiivi/substantiivi, tyyppi 34/onneton; astevaihtelu tt:t (vartalo työttömä-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "työttömän", merkitys: "of the unemployed" },
      { sija: "partitiivi (yks.)", muoto: "työtöntä", merkitys: "unemployed (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "työttömiä", merkitys: "unemployed (partitive pl.)" },
    ],
    huom:
      "Tyyppi 34 (-tön/-ton): nominatiivi työtön (heikko t), vartalo työttömä- vahvistuu (työttömän, työttömällä), partitiivi työtöntä. Kieltojohdos työ + -tön ('ilman työtä'). Vrt. työttömyys = unemployment.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "työtön" },
          { label: "Partitiivi", form: "työtöntä" },
          { label: "Genetiivi", form: "työttömän" },
          { label: "Inessiivi", form: "työttömässä" },
          { label: "Elatiivi", form: "työttömästä" },
          { label: "Illatiivi", form: "työttömään" },
          { label: "Adessiivi", form: "työttömällä" },
          { label: "Allatiivi", form: "työttömälle" },
          { label: "Translatiivi", form: "työttömäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "työttömät" },
          { label: "Partitiivi", form: "työttömiä" },
          { label: "Genetiivi", form: "työttömien" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Positiivi", form: "työtön" },
          { label: "Komparatiivi", form: "työttömämpi" },
          { label: "Superlatiivi", form: "työttömin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "työttömyys",
      en: "unemployment",
      taso: "B1",
      esim: { fi: "Nuorten työttömyys on kasvanut.", en: "Youth unemployment has grown." },
    },
    {
      fi: "työtön työnhakija",
      en: "unemployed job seeker",
      taso: "B2",
      esim: { fi: "Hän on työtön työnhakija.", en: "He is an unemployed job seeker." },
    },
  ],
  synonyymit: [
    { fi: "vailla työtä", en: "without work" },
  ],
  esimerkit: {
    A2: { fi: "Hän on tällä hetkellä työtön.", en: "He is currently unemployed." },
    B1: { fi: "Työtön saa työttömyyskorvausta.", en: "An unemployed person receives unemployment benefit." },
    B2: {
      fi: "Pitkään työttömänä olleen voi olla vaikea palata työelämään.",
      en: "Someone who has been unemployed for a long time may find it hard to return to working life.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tyoton;
