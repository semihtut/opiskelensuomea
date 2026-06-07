import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, nt:nn gradation, stem tartunta- ~ tartunna-.
// Genitive tartunnan, partitive tartuntaa, partitive pl tartuntoja.
const tartunta: Word = {
  fi: "tartunta",
  slug: "tartunta",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "B2",
  en: "infection, contagion",
  selitys:
    "Taudin tarttuminen elimistöön: 'saada tartunta'. Tyyppi 9/kala, astevaihtelu nt:nn (tartunta → tartunnan), partitiivin monikko tartuntoja. Johdettu verbistä tarttua. Vrt. tarttua, tauti, tartuttaa.",
  kuva: { emoji: "🦠", alt: "tartunta – taudin tarttuminen elimistöön" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; astevaihtelu nt:nn (vartalo tartunna-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tartunnan", merkitys: "of the infection" },
      { sija: "partitiivi (yks.)", muoto: "tartuntaa", merkitys: "infection (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tartuntoja", merkitys: "infections (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu nt:nn: nominatiivi tartunta (vahva nt), genetiivi tartunnan (heikko nn). Partitiivin monikko tartuntoja. Johdettu verbistä tarttua. 'Saada tartunta' = to get infected. Vrt. tarttua = to stick/spread.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tartunta" },
          { label: "Partitiivi", form: "tartuntaa" },
          { label: "Genetiivi", form: "tartunnan" },
          { label: "Inessiivi", form: "tartunnassa" },
          { label: "Elatiivi", form: "tartunnasta" },
          { label: "Illatiivi", form: "tartuntaan" },
          { label: "Adessiivi", form: "tartunnalla" },
          { label: "Ablatiivi", form: "tartunnalta" },
          { label: "Allatiivi", form: "tartunnalle" },
          { label: "Essiivi", form: "tartuntana" },
          { label: "Translatiivi", form: "tartunnaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tartunnat" },
          { label: "Partitiivi", form: "tartuntoja" },
          { label: "Genetiivi", form: "tartuntojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tarttua",
      en: "to grab; to be contagious, spread",
      taso: "B1",
      esim: { fi: "Flunssa tarttuu helposti.", en: "The flu spreads easily." },
    },
    {
      fi: "tartuttaa",
      en: "to infect",
      taso: "B2",
      esim: { fi: "Hän tartutti minuun flunssan.", en: "He gave me the flu." },
    },
    {
      fi: "tarttuva",
      en: "contagious, infectious",
      taso: "B2",
      esim: { fi: "Tauti on tarttuva.", en: "The disease is contagious." },
    },
  ],
  synonyymit: [
    { fi: "infektio", en: "infection" },
    { fi: "tauti", en: "disease" },
  ],
  esimerkit: {
    A2: { fi: "Sain tartunnan.", en: "I got infected." },
    B1: { fi: "Tartunnat lisääntyivät talvella.", en: "Infections increased in the winter." },
    B2: {
      fi: "Hyvä käsihygienia ehkäisee monien tautien tartuntoja.",
      en: "Good hand hygiene prevents the spread of many diseases.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tartunta;
