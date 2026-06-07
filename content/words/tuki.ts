import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 7/ovi, k:∅ gradation, stem tuke- ~ tue-.
// Genitive tuen, partitive tukea, illative tukeen, partitive pl tukia.
const tuki: Word = {
  fi: "tuki",
  slug: "tuki",
  pos: "substantiivi (tyyppi 7/ovi)",
  posClass: "substantiivi",
  level: "B1",
  en: "support, aid, subsidy",
  selitys:
    "Apu, joka tukee fyysisesti, henkisesti tai taloudellisesti: 'saada tukea'. Tyyppi 7/ovi, astevaihtelu k:∅ (tuki → tuen). Johdettu verbistä tukea. Vrt. tukea, tukija, opintotuki.",
  kuva: { emoji: "🩼", alt: "tuki – apu joka tukee fyysisesti tai henkisesti" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 7/ovi; astevaihtelu k:∅ (vartalo tue-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tuen", merkitys: "of the support" },
      { sija: "partitiivi (yks.)", muoto: "tukea", merkitys: "support (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tukia", merkitys: "supports (partitive pl.)" },
    ],
    huom:
      "Tyyppi 7 (-i): genetiivi -en, partitiivi -ea, ei -ia perusmuodossa. Astevaihtelu k:∅: nominatiivi tuki (vahva k), genetiivi tuen (heikko). Huom: tuen = sekä tämä genetiivi että verbin tukea minä-muoto. Vrt. opintotuki = study grant.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tuki" },
          { label: "Partitiivi", form: "tukea" },
          { label: "Genetiivi", form: "tuen" },
          { label: "Inessiivi", form: "tuessa" },
          { label: "Elatiivi", form: "tuesta" },
          { label: "Illatiivi", form: "tukeen" },
          { label: "Adessiivi", form: "tuella" },
          { label: "Ablatiivi", form: "tuelta" },
          { label: "Allatiivi", form: "tuelle" },
          { label: "Essiivi", form: "tukena" },
          { label: "Translatiivi", form: "tueksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tuet" },
          { label: "Partitiivi", form: "tukia" },
          { label: "Genetiivi", form: "tukien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tukea",
      en: "to support",
      taso: "B1",
      esim: { fi: "Tuemme hanketta.", en: "We support the project." },
    },
    {
      fi: "opintotuki",
      en: "student financial aid",
      taso: "B2",
      esim: { fi: "Hain opintotukea.", en: "I applied for student aid." },
    },
  ],
  synonyymit: [
    { fi: "apu", en: "help, aid" },
    { fi: "avustus", en: "grant, subsidy" },
  ],
  esimerkit: {
    A2: { fi: "Kiitos tuesta!", en: "Thanks for the support!" },
    B1: { fi: "Sain perheeltäni paljon tukea.", en: "I got a lot of support from my family." },
    B2: {
      fi: "Valtion taloudellinen tuki mahdollisti hankkeen toteuttamisen.",
      en: "The state's financial support made the project possible.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tuki;
