import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem jakso-.
// Genitive jakson, partitive jaksoa, partitive pl jaksoja.
const jakso: Word = {
  fi: "jakso",
  slug: "jakso",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "period; episode",
  selitys:
    "Ajanjakso tai sarjan osa: 'lämmin jakso', 'sarjan kolmas jakso'. Tyyppi 1/valo, ei astevaihtelua (ks-yhtymä säilyy). Johdettu verbistä jakaa. Vrt. vaihe, kausi.",
  kuva: { emoji: "📺", alt: "jakso – ajanjakso tai sarjan osa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua (vartalo jakso-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "jakson", merkitys: "of the period" },
      { sija: "partitiivi (yks.)", muoto: "jaksoa", merkitys: "period (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "jaksoja", merkitys: "periods (partitive pl.)" },
    ],
    huom:
      "Tyyppi 1 (-o): partitiivin monikko -ja (jaksoja), ei astevaihtelua (ks säilyy). Johdettu verbistä jakaa. Merkitykset: ajanjakso, tv-sarjan jakso, opintojakso. Vrt. vaihe = phase.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "jakso" },
          { label: "Partitiivi", form: "jaksoa" },
          { label: "Genetiivi", form: "jakson" },
          { label: "Inessiivi", form: "jaksossa" },
          { label: "Elatiivi", form: "jaksosta" },
          { label: "Illatiivi", form: "jaksoon" },
          { label: "Adessiivi", form: "jaksolla" },
          { label: "Ablatiivi", form: "jaksolta" },
          { label: "Allatiivi", form: "jaksolle" },
          { label: "Essiivi", form: "jaksona" },
          { label: "Translatiivi", form: "jaksoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "jaksot" },
          { label: "Partitiivi", form: "jaksoja" },
          { label: "Genetiivi", form: "jaksojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "opintojakso",
      en: "course unit, study module",
      taso: "B2",
      esim: { fi: "Suoritin opintojakson arvosanalla 5.", en: "I completed the course unit with a grade of 5." },
    },
    {
      fi: "ajanjakso",
      en: "period of time",
      taso: "B1",
      esim: { fi: "Se oli vaikea ajanjakso.", en: "It was a difficult period of time." },
    },
  ],
  synonyymit: [
    { fi: "kausi", en: "season, period" },
    { fi: "vaihe", en: "phase, stage" },
  ],
  esimerkit: {
    A2: { fi: "Katsoin sarjan ensimmäisen jakson.", en: "I watched the first episode of the series." },
    B1: { fi: "Tulossa on pitkä sateinen jakso.", en: "A long rainy period is coming." },
    B2: {
      fi: "Työttömyysjakson aikana hän opiskeli uuden ammatin.",
      en: "During the period of unemployment he studied for a new profession.",
    },
  },
  updatedAt: "2026-06-07",
};

export default jakso;
