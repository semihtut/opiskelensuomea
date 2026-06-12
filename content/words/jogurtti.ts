import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, tt:t gradation, stem jogurtti- ~ jogurti-.
// Genitive jogurtin, partitive jogurttia, partitive pl jogurtteja.
const jogurtti: Word = {
  fi: "jogurtti",
  slug: "jogurtti",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A2",
  en: "yogurt",
  selitys:
    "Hapatettu maitotuote, usein aamiaiseksi: 'marjajogurtti'. Tyyppi 5/risti, astevaihtelu tt:t (jogurtti → jogurtin). Vrt. maito, viili, aamiainen.",
  kuva: { alt: "jogurtti – hapatettu maitotuote" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; astevaihtelu tt:t (jogurtti ~ jogurti-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "jogurtin", merkitys: "of the yogurt" },
      { sija: "partitiivi (yks.)", muoto: "jogurttia", merkitys: "yogurt (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "jogurtteja", merkitys: "yogurts (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva jogurtti (nominatiivi, partitiivi jogurttia), heikko jogurti- (jogurtin, jogurtissa). Marjajogurtti, luonnonjogurtti. Vrt. maito, viili.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "jogurtti" },
          { label: "Partitiivi", form: "jogurttia" },
          { label: "Genetiivi", form: "jogurtin" },
          { label: "Inessiivi", form: "jogurtissa" },
          { label: "Elatiivi", form: "jogurtista" },
          { label: "Illatiivi", form: "jogurttiin" },
          { label: "Adessiivi", form: "jogurtilla" },
          { label: "Ablatiivi", form: "jogurtilta" },
          { label: "Allatiivi", form: "jogurtille" },
          { label: "Essiivi", form: "jogurttina" },
          { label: "Translatiivi", form: "jogurtiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "jogurtit" },
          { label: "Partitiivi", form: "jogurtteja" },
          { label: "Genetiivi", form: "jogurttien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "marjajogurtti",
      en: "berry yogurt",
      taso: "B1",
      esim: { fi: "Ostin marjajogurttia.", en: "I bought berry yogurt." },
    },
    {
      fi: "luonnonjogurtti",
      en: "plain / natural yogurt",
      taso: "B2",
      esim: { fi: "Luonnonjogurtti ei sisällä sokeria.", en: "Plain yogurt contains no sugar." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Syön jogurttia aamulla.", en: "I eat yogurt in the morning." },
    B1: { fi: "Lisää jogurttiin marjoja ja hunajaa.", en: "Add berries and honey to the yogurt." },
    B2: {
      fi: "Jogurtti sopii hyvin aamiaiseksi, koska se on kevyt mutta täyttävä.",
      en: "Yogurt is well suited for breakfast because it is light but filling.",
    },
  },
  updatedAt: "2026-06-07",
};

export default jogurtti;
