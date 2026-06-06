import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation, stem laiva-.
// Genitive laivan, partitive laivaa, illative laivaan, partitive pl laivoja.
const laiva: Word = {
  fi: "laiva",
  slug: "laiva",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A2",
  en: "ship, boat (large)",
  selitys:
    "Iso vesikulkuneuvo: 'matkustaa laivalla'. Tyyppi 9, ei astevaihtelua. Partitiivin monikko laivoja. Vrt. laivasto (fleet/navy), vene (small boat), satama (harbour).",
  kuva: { emoji: "🚢", alt: "laiva – iso vesikulkuneuvo" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "laivan", merkitys: "of the ship" },
      { sija: "partitiivi (yks.)", muoto: "laivaa", merkitys: "ship (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "laivoja", merkitys: "ships (partitive pl.)" },
    ],
    huom:
      "Partitiivin monikossa a → o: laivoja. 'Mennä laivalla' = to go by ship. Vrt. vene = (small) boat, laivasto = navy/fleet.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "laiva" },
          { label: "Partitiivi", form: "laivaa" },
          { label: "Genetiivi", form: "laivan" },
          { label: "Inessiivi", form: "laivassa" },
          { label: "Elatiivi", form: "laivasta" },
          { label: "Illatiivi", form: "laivaan" },
          { label: "Adessiivi", form: "laivalla" },
          { label: "Ablatiivi", form: "laivalta" },
          { label: "Allatiivi", form: "laivalle" },
          { label: "Essiivi", form: "laivana" },
          { label: "Translatiivi", form: "laivaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "laivat" },
          { label: "Partitiivi", form: "laivoja" },
          { label: "Genetiivi", form: "laivojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "laivasto",
      en: "navy, fleet",
      taso: "B2",
      esim: { fi: "Maalla on pieni laivasto.", en: "The country has a small navy." },
    },
    {
      fi: "matkustajalaiva",
      en: "passenger ship",
      taso: "B2",
      esim: { fi: "Matkustajalaiva lähti satamasta.", en: "The passenger ship left the harbour." },
    },
    {
      fi: "laivamatka",
      en: "boat trip, cruise",
      taso: "B1",
      esim: { fi: "Teimme laivamatkan Tukholmaan.", en: "We took a boat trip to Stockholm." },
    },
  ],
  synonyymit: [
    { fi: "alus", en: "vessel" },
    { fi: "vene", en: "boat (smaller)" },
  ],
  esimerkit: {
    A2: { fi: "Menemme Ruotsiin laivalla.", en: "We're going to Sweden by ship." },
    B1: { fi: "Laiva saapui satamaan ajallaan.", en: "The ship arrived at the harbour on time." },
    B2: {
      fi: "Suuri laiva mahtuu hädin tuskin kapeaan kanavaan.",
      en: "The large ship barely fits into the narrow canal.",
    },
  },
  updatedAt: "2026-06-06",
};

export default laiva;
