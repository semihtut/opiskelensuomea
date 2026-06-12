import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo (koulu), no gradation, stem peruskoulu-.
// Genitive peruskoulun, partitive peruskoulua, partitive pl peruskouluja.
const peruskoulu: Word = {
  fi: "peruskoulu",
  slug: "peruskoulu",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "comprehensive school (grades 1–9)",
  selitys:
    "Suomen yhdeksänvuotinen pakollinen peruskoulutus (luokat 1–9): 'käydä peruskoulu'. Tyyppi 1/valo, ei astevaihtelua. Yhdyssana perus + koulu. Peruskoulun jälkeen tulee lukio tai ammattikoulu. Vrt. koulu, lukio, oppilas.",
  kuva: { alt: "peruskoulu – Suomen yhdeksänvuotinen pakollinen peruskoulutus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua (vartalo peruskoulu-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "peruskoulun", merkitys: "of the comprehensive school" },
      { sija: "partitiivi (yks.)", muoto: "peruskoulua", merkitys: "comprehensive school (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "peruskouluja", merkitys: "comprehensive schools (partitive pl.)" },
    ],
    huom:
      "Tyyppi 1/valo: ei astevaihtelua (koulu → koulun, kouluja). Yhdyssana perus + koulu. Suomessa peruskoulu kestää 9 vuotta ja on maksuton. Vrt. koulu, lukio, ammattikoulu.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "peruskoulu" },
          { label: "Partitiivi", form: "peruskoulua" },
          { label: "Genetiivi", form: "peruskoulun" },
          { label: "Inessiivi", form: "peruskoulussa" },
          { label: "Elatiivi", form: "peruskoulusta" },
          { label: "Illatiivi", form: "peruskouluun" },
          { label: "Adessiivi", form: "peruskoululla" },
          { label: "Ablatiivi", form: "peruskoululta" },
          { label: "Allatiivi", form: "peruskoululle" },
          { label: "Essiivi", form: "peruskouluna" },
          { label: "Translatiivi", form: "peruskouluksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "peruskoulut" },
          { label: "Partitiivi", form: "peruskouluja" },
          { label: "Genetiivi", form: "peruskoulujen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ammattikoulu",
      en: "vocational school",
      taso: "B1",
      esim: { fi: "Hän meni ammattikouluun.", en: "He went to vocational school." },
    },
    {
      fi: "alakoulu",
      en: "primary school (grades 1–6)",
      taso: "B1",
      esim: { fi: "Lapsi aloittaa alakoulun.", en: "The child is starting primary school." },
    },
  ],
  synonyymit: [
    { fi: "perusopetus", en: "basic education" },
  ],
  esimerkit: {
    A2: { fi: "Lapseni käy peruskoulua.", en: "My child attends comprehensive school." },
    B1: { fi: "Peruskoulu on Suomessa maksuton.", en: "Comprehensive school is free in Finland." },
    B2: {
      fi: "Peruskoulun päätyttyä oppilas valitsee lukion tai ammatillisen koulutuksen.",
      en: "After comprehensive school, the pupil chooses upper secondary school or vocational education.",
    },
  },
  updatedAt: "2026-06-07",
};

export default peruskoulu;
