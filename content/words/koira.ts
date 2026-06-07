import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira (the exemplar), no gradation, stem koira-.
// Genitive koiran, partitive koiraa, partitive pl koiria.
const koira: Word = {
  fi: "koira",
  slug: "koira",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A1",
  en: "dog",
  selitys:
    "Yleinen kotieläin ja ihmisen lemmikki: 'ulkoiluttaa koiraa'. Tyyppi 10/koira – tämä sana on koko taivutustyypin malliesimerkki (ei astevaihtelua, partitiivin monikko koiria). Vrt. kissa, lemmikki, eläin.",
  kuva: { emoji: "🐶", alt: "koira – yleinen kotieläin ja ihmisen lemmikki" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira (malliesimerkki); ei astevaihtelua (vartalo koira-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "koiran", merkitys: "of the dog" },
      { sija: "partitiivi (yks.)", muoto: "koiraa", merkitys: "dog (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "koiria", merkitys: "dogs (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10/koira on kahden tavun -a/-ä-sanojen malli, jonka partitiivin monikko on -ia (koiria, ei koiroja). Vrt. tyyppi 9/kala (-oja). Vrt. kissa, lemmikki.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "koira" },
          { label: "Partitiivi", form: "koiraa" },
          { label: "Genetiivi", form: "koiran" },
          { label: "Inessiivi", form: "koirassa" },
          { label: "Elatiivi", form: "koirasta" },
          { label: "Illatiivi", form: "koiraan" },
          { label: "Adessiivi", form: "koiralla" },
          { label: "Ablatiivi", form: "koiralta" },
          { label: "Allatiivi", form: "koiralle" },
          { label: "Essiivi", form: "koirana" },
          { label: "Translatiivi", form: "koiraksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "koirat" },
          { label: "Partitiivi", form: "koiria" },
          { label: "Genetiivi", form: "koirien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pentu",
      en: "puppy, cub",
      taso: "A2",
      esim: { fi: "Koiralla on viisi pentua.", en: "The dog has five puppies." },
    },
    {
      fi: "koiranpentu",
      en: "puppy",
      taso: "A2",
      esim: { fi: "Saimme koiranpennun.", en: "We got a puppy." },
    },
  ],
  synonyymit: [
    { fi: "hauva", en: "doggie (childish)" },
  ],
  esimerkit: {
    A2: { fi: "Meillä on iso koira.", en: "We have a big dog." },
    B1: { fi: "Ulkoilutan koiraa joka aamu.", en: "I walk the dog every morning." },
    B2: {
      fi: "Hyvin koulutettu koira tottelee, vaikka ympärillä olisi häiriöitä.",
      en: "A well-trained dog obeys even when there are distractions around.",
    },
  },
  updatedAt: "2026-06-07",
};

export default koira;
