import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem vastaava-.
// Genitive vastaavan, partitive vastaavaa, partitive pl vastaavia. Participle of vastata.
const vastaava: Word = {
  fi: "vastaava",
  slug: "vastaava",
  pos: "adjektiivi (tyyppi 10/koira)",
  posClass: "adjektiivi",
  level: "B1",
  en: "corresponding, equivalent; similar",
  selitys:
    "Toista vastaava tai samanarvoinen: 'vastaava tilanne'. Tyyppi 10/koira, ei astevaihtelua. Verbin vastata partisiippi. Voi tarkoittaa myös 'vastuussa oleva' (vastaava hoitaja). Vrt. vastata, vastaavasti.",
  kuva: { alt: "vastaava – toista vastaava tai samanarvoinen" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 10/koira; ei astevaihtelua (vartalo vastaava-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "vastaavan", merkitys: "of corresponding" },
      { sija: "partitiivi (yks.)", muoto: "vastaavaa", merkitys: "corresponding (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "vastaavia", merkitys: "corresponding (partitive pl.)" },
    ],
    huom:
      "Verbin vastata partisiippi, käytetään adjektiivina. Partitiivin monikko vastaavia. Merkitykset: 1) samanarvoinen, vastine; 2) vastuussa oleva (vastaava lääkäri). Vrt. vastaavasti = correspondingly.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "vastaava" },
          { label: "Partitiivi", form: "vastaavaa" },
          { label: "Genetiivi", form: "vastaavan" },
          { label: "Inessiivi", form: "vastaavassa" },
          { label: "Elatiivi", form: "vastaavasta" },
          { label: "Illatiivi", form: "vastaavaan" },
          { label: "Adessiivi", form: "vastaavalla" },
          { label: "Ablatiivi", form: "vastaavalta" },
          { label: "Allatiivi", form: "vastaavalle" },
          { label: "Essiivi", form: "vastaavana" },
          { label: "Translatiivi", form: "vastaavaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vastaavat" },
          { label: "Partitiivi", form: "vastaavia" },
          { label: "Genetiivi", form: "vastaavien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vastaavasti",
      en: "correspondingly, accordingly",
      taso: "B2",
      esim: { fi: "Kysyntä kasvoi, ja hinnat nousivat vastaavasti.", en: "Demand grew, and prices rose accordingly." },
    },
    {
      fi: "vastine",
      en: "equivalent, counterpart",
      taso: "B2",
      esim: { fi: "Sanalla ei ole suoraa vastinetta.", en: "The word has no direct equivalent." },
    },
  ],
  synonyymit: [
    { fi: "samanarvoinen", en: "of equal value" },
    { fi: "samankaltainen", en: "similar" },
  ],
  esimerkit: {
    A2: { fi: "Etsin vastaavaa tuotetta halvemmalla.", en: "I'm looking for a similar product cheaper." },
    B1: { fi: "Hän siirtyi vastaavaan tehtävään toiseen yritykseen.", en: "She moved to an equivalent role at another company." },
    B2: {
      fi: "Vastaavia tapauksia on raportoitu myös muista maista.",
      en: "Corresponding cases have also been reported from other countries.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vastaava;
