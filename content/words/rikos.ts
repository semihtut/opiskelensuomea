import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem rikokse-.
// Genitive rikoksen, partitive rikosta, partitive pl rikoksia.
const rikos: Word = {
  fi: "rikos",
  slug: "rikos",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "crime, offence",
  selitys:
    "Lain rikkominen, rangaistava teko: 'tehdä rikos', 'vakava rikos'. Tyyppi 39/vastaus, ei astevaihtelua (-os → -okse-). Sanasta rikkoa. Vrt. rikkoa, rikollinen, rangaistus.",
  kuva: { emoji: "🚔", alt: "rikos – lain rikkominen, rangaistava teko" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo rikokse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "rikoksen", merkitys: "of the crime" },
      { sija: "partitiivi (yks.)", muoto: "rikosta", merkitys: "crime (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "rikoksia", merkitys: "crimes (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-os): genetiivi -okse-n, partitiivi -os-ta, partitiivin monikko -oksia. Sanasta rikkoa = to break (the law). Vrt. rikollinen = criminal, rikoa/rikkoa.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "rikos" },
          { label: "Partitiivi", form: "rikosta" },
          { label: "Genetiivi", form: "rikoksen" },
          { label: "Inessiivi", form: "rikoksessa" },
          { label: "Elatiivi", form: "rikoksesta" },
          { label: "Illatiivi", form: "rikokseen" },
          { label: "Adessiivi", form: "rikoksella" },
          { label: "Ablatiivi", form: "rikokselta" },
          { label: "Allatiivi", form: "rikokselle" },
          { label: "Essiivi", form: "rikoksena" },
          { label: "Translatiivi", form: "rikokseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "rikokset" },
          { label: "Partitiivi", form: "rikoksia" },
          { label: "Genetiivi", form: "rikoksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "rikollinen",
      en: "criminal (person; adj.)",
      taso: "B1",
      esim: { fi: "Poliisi etsii rikollista.", en: "The police are looking for the criminal." },
    },
    {
      fi: "rikoksentekijä",
      en: "perpetrator, offender",
      taso: "B2",
      esim: { fi: "Rikoksentekijä jäi kiinni.", en: "The offender was caught." },
    },
  ],
  synonyymit: [
    { fi: "lainrikkomus", en: "violation of the law" },
  ],
  esimerkit: {
    A2: { fi: "Varastaminen on rikos.", en: "Stealing is a crime." },
    B1: { fi: "Häntä epäillään vakavasta rikoksesta.", en: "He is suspected of a serious crime." },
    B2: {
      fi: "Rikoksesta tuomittiin ehdollinen rangaistus, koska tekijä oli nuori.",
      en: "A suspended sentence was given for the crime because the perpetrator was young.",
    },
  },
  updatedAt: "2026-06-07",
};

export default rikos;
