import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation, stem suola-.
// Genitive suolan, partitive suolaa, illative suolaan, partitive pl suoloja. Usually singular.
const suola: Word = {
  fi: "suola",
  slug: "suola",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A2",
  en: "salt",
  selitys:
    "Valkoinen mausteaine, natriumkloridi: 'lisää suolaa'. Tyyppi 9, ei astevaihtelua. Käytetään useimmiten yksikössä (ainesana). Kemiassa myös 'suola' (yhdiste). Vrt. suolainen, merisuola.",
  kuva: { emoji: "🧂", alt: "suola – valkoinen mausteaine" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "suolan", merkitys: "of the salt" },
      { sija: "partitiivi (yks.)", muoto: "suolaa", merkitys: "salt (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "suoloja", merkitys: "salts (partitive pl.)" },
    ],
    huom:
      "Käytetään useimmiten yksikössä (ainesana). Partitiivin monikossa a → o: suoloja (esim. kemian suolat). 'Lisää suolaa' = add some salt. Vrt. suolainen = salty, merisuola = sea salt.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "suola" },
          { label: "Partitiivi", form: "suolaa" },
          { label: "Genetiivi", form: "suolan" },
          { label: "Inessiivi", form: "suolassa" },
          { label: "Elatiivi", form: "suolasta" },
          { label: "Illatiivi", form: "suolaan" },
          { label: "Adessiivi", form: "suolalla" },
          { label: "Ablatiivi", form: "suolalta" },
          { label: "Allatiivi", form: "suolalle" },
          { label: "Essiivi", form: "suolana" },
          { label: "Translatiivi", form: "suolaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "suolat" },
          { label: "Partitiivi", form: "suoloja" },
          { label: "Genetiivi", form: "suolojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "suolainen",
      en: "salty",
      taso: "A2",
      esim: { fi: "Keitto on liian suolaista.", en: "The soup is too salty." },
    },
    {
      fi: "merisuola",
      en: "sea salt",
      taso: "B2",
      esim: { fi: "Käytän ruoanlaitossa merisuolaa.", en: "I use sea salt in cooking." },
    },
    {
      fi: "suolata",
      en: "to salt",
      taso: "B2",
      esim: { fi: "Muista suolata pastavesi.", en: "Remember to salt the pasta water." },
    },
  ],
  synonyymit: [
    { fi: "ruokasuola", en: "table salt" },
    { fi: "natriumkloridi", en: "sodium chloride" },
  ],
  esimerkit: {
    A2: { fi: "Lisää vähän suolaa.", en: "Add a little salt." },
    B1: { fi: "Ruoassa on liikaa suolaa.", en: "There is too much salt in the food." },
    B2: {
      fi: "Suolaa kannattaa käyttää maltilla terveyden vuoksi.",
      en: "It's worth using salt in moderation for health reasons.",
    },
  },
  updatedAt: "2026-06-07",
};

export default suola;
