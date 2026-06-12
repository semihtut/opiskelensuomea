import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 7/ovi, no gradation, stem polve-.
// Genitive polven, partitive polvea, partitive pl polvia.
const polvi: Word = {
  fi: "polvi",
  slug: "polvi",
  pos: "substantiivi (tyyppi 7/ovi)",
  posClass: "substantiivi",
  level: "A2",
  en: "knee",
  selitys:
    "Jalan keskellä oleva nivel: 'polvi on kipeä'. Tyyppi 7/ovi, ei astevaihtelua. Vrt. jalka, nivel, nilkka.",
  kuva: { alt: "polvi – jalan keskellä oleva nivel" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 7/ovi; ei astevaihtelua (vartalo polve-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "polven", merkitys: "of the knee" },
      { sija: "partitiivi (yks.)", muoto: "polvea", merkitys: "knee (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "polvia", merkitys: "knees (partitive pl.)" },
    ],
    huom:
      "Tyyppi 7/ovi: ei astevaihtelua, vartalo polve- (polven, polvella), partitiivi polvea, partitiivin monikko polvia. Polvi tarkoittaa myös sukupolvea. Vrt. nivel, jalka.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "polvi" },
          { label: "Partitiivi", form: "polvea" },
          { label: "Genetiivi", form: "polven" },
          { label: "Inessiivi", form: "polvessa" },
          { label: "Elatiivi", form: "polvesta" },
          { label: "Illatiivi", form: "polveen" },
          { label: "Adessiivi", form: "polvella" },
          { label: "Ablatiivi", form: "polvelta" },
          { label: "Allatiivi", form: "polvelle" },
          { label: "Essiivi", form: "polvena" },
          { label: "Translatiivi", form: "polveksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "polvet" },
          { label: "Partitiivi", form: "polvia" },
          { label: "Genetiivi", form: "polvien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "polvilumpio",
      en: "kneecap",
      taso: "B2",
      esim: { fi: "Hän loukkasi polvilumpionsa.", en: "He injured his kneecap." },
    },
    {
      fi: "polvinivel",
      en: "knee joint",
      taso: "B2",
      esim: { fi: "Polvinivel kuluu iän myötä.", en: "The knee joint wears with age." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Polveni on kipeä.", en: "My knee hurts." },
    B1: { fi: "Hän kaatui ja loukkasi polvensa.", en: "He fell and hurt his knee." },
    B2: {
      fi: "Juoksijan kannattaa vahvistaa lihaksia polvien ympärillä.",
      en: "A runner should strengthen the muscles around the knees.",
    },
  },
  updatedAt: "2026-06-07",
};

export default polvi;
