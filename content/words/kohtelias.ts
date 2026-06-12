import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 41/vieras, no gradation, stem kohtelia(a)-.
// Genitive kohteliaan, partitive kohteliasta, partitive pl kohteliaita.
const kohtelias: Word = {
  fi: "kohtelias",
  slug: "kohtelias",
  pos: "adjektiivi (tyyppi 41/vieras)",
  posClass: "adjektiivi",
  level: "B1",
  en: "polite, courteous",
  selitys:
    "Hyvätapainen ja toiset huomioon ottava: 'kohtelias asiakaspalvelija'. Tyyppi 41/vieras, ei astevaihtelua; vartalo kohteliaa-. Vastakohta epäkohtelias, töykeä. Vrt. kohteliaisuus, kohdella.",
  kuva: { alt: "kohtelias – hyvätapainen ja huomaavainen" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 41/vieras; ei astevaihtelua (vartalo kohteliaa-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kohteliaan", merkitys: "of polite" },
      { sija: "partitiivi (yks.)", muoto: "kohteliasta", merkitys: "polite (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kohteliaita", merkitys: "polite (partitive pl.)" },
    ],
    huom:
      "Tyyppi 41 (-ias): nominatiivi kohtelias, genetiivi kohteliaan (pitkä vokaali), partitiivi kohteliasta, monikon partitiivi kohteliaita. Vastakohta epäkohtelias. Vrt. kohteliaisuus = politeness, kohdella = to treat.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kohtelias" },
          { label: "Partitiivi", form: "kohteliasta" },
          { label: "Genetiivi", form: "kohteliaan" },
          { label: "Inessiivi", form: "kohteliaassa" },
          { label: "Elatiivi", form: "kohteliaasta" },
          { label: "Illatiivi", form: "kohteliaaseen" },
          { label: "Adessiivi", form: "kohteliaalla" },
          { label: "Allatiivi", form: "kohteliaalle" },
          { label: "Translatiivi", form: "kohteliaaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kohteliaat" },
          { label: "Partitiivi", form: "kohteliaita" },
          { label: "Genetiivi", form: "kohteliaiden" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Positiivi", form: "kohtelias" },
          { label: "Komparatiivi", form: "kohteliaampi" },
          { label: "Superlatiivi", form: "kohteliain" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kohteliaisuus",
      en: "politeness, courtesy",
      taso: "B2",
      esim: { fi: "Kohteliaisuus ei maksa mitään.", en: "Politeness costs nothing." },
    },
    {
      fi: "kohteliaasti",
      en: "politely",
      taso: "B1",
      esim: { fi: "Hän kieltäytyi kohteliaasti.", en: "He declined politely." },
    },
  ],
  synonyymit: [
    { fi: "hyväkäytöksinen", en: "well-mannered" },
    { fi: "huomaavainen", en: "considerate" },
  ],
  esimerkit: {
    A2: { fi: "Ole kohtelias vieraille.", en: "Be polite to the guests." },
    B1: { fi: "Hän on aina kohtelias asiakkaille.", en: "She is always polite to customers." },
    B2: {
      fi: "Vaikka hän oli eri mieltä, hän esitti kantansa kohteliaasti.",
      en: "Although he disagreed, he presented his view politely.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kohtelias;
