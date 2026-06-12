import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 7/ovi, no gradation, stem sukupolve-.
// Genitive sukupolven, partitive sukupolvea, partitive pl sukupolvia.
const sukupolvi: Word = {
  fi: "sukupolvi",
  slug: "sukupolvi",
  pos: "substantiivi (tyyppi 7/ovi)",
  posClass: "substantiivi",
  level: "B2",
  en: "generation",
  selitys:
    "Suvun tai yhteiskunnan samanikäinen polvi: 'nuorempi sukupolvi'. Tyyppi 7/ovi, ei astevaihtelua. Yhdyssana suku + polvi. Vrt. suku, polvi, ikäpolvi.",
  kuva: { alt: "sukupolvi – suvun tai yhteiskunnan samanikäinen polvi" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 7/ovi; ei astevaihtelua (vartalo sukupolve-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "sukupolven", merkitys: "of the generation" },
      { sija: "partitiivi (yks.)", muoto: "sukupolvea", merkitys: "generation (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "sukupolvia", merkitys: "generations (partitive pl.)" },
    ],
    huom:
      "Tyyppi 7/ovi: ei astevaihtelua, vartalo sukupolve- (sukupolven, sukupolvella), partitiivi sukupolvea, partitiivin monikko sukupolvia. Yhdyssana suku + polvi. Sukupolvenvaihdos. Vrt. suku, polvi.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "sukupolvi" },
          { label: "Partitiivi", form: "sukupolvea" },
          { label: "Genetiivi", form: "sukupolven" },
          { label: "Inessiivi", form: "sukupolvessa" },
          { label: "Elatiivi", form: "sukupolvesta" },
          { label: "Illatiivi", form: "sukupolveen" },
          { label: "Adessiivi", form: "sukupolvella" },
          { label: "Ablatiivi", form: "sukupolvelta" },
          { label: "Allatiivi", form: "sukupolvelle" },
          { label: "Essiivi", form: "sukupolvena" },
          { label: "Translatiivi", form: "sukupolveksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "sukupolvet" },
          { label: "Partitiivi", form: "sukupolvia" },
          { label: "Genetiivi", form: "sukupolvien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "suku",
      en: "family, kin",
      taso: "B1",
      esim: { fi: "Koko suku kokoontui juhlaan.", en: "The whole family gathered for the celebration." },
    },
    {
      fi: "sukupolvenvaihdos",
      en: "generational change, handover",
      taso: "B2",
      esim: { fi: "Yrityksessä tehtiin sukupolvenvaihdos.", en: "A generational handover was made in the company." },
    },
  ],
  synonyymit: [
    { fi: "ikäpolvi", en: "age generation" },
  ],
  esimerkit: {
    A2: { fi: "Nuori sukupolvi käyttää paljon nettiä.", en: "The young generation uses the internet a lot." },
    B1: { fi: "Talo on ollut suvulla monta sukupolvea.", en: "The house has belonged to the family for many generations." },
    B2: {
      fi: "Eri sukupolvet näkevät maailman usein hyvin eri tavalla.",
      en: "Different generations often see the world very differently.",
    },
  },
  updatedAt: "2026-06-07",
};

export default sukupolvi;
