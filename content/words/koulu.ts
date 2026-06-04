import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation. Genitive koulun,
// partitive koulua, illative kouluun, partitive pl kouluja.
const koulu: Word = {
  fi: "koulu",
  slug: "koulu",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A1",
  en: "school",
  selitys:
    "Paikka, jossa opiskellaan; myös oppilaitos yleisesti. Tyyppi 1, ei astevaihtelua.",
  kuva: { emoji: "🏫", alt: "koulu – koulurakennus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "koulun", merkitys: "of the school" },
      { sija: "partitiivi (yks.)", muoto: "koulua", merkitys: "school (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kouluja", merkitys: "schools (partitive pl.)" },
    ],
    huom:
      "'Kouluun' = to school, 'koulussa' = at school, 'koulusta' = from school. Yhdyssanat: peruskoulu, yläkoulu, ammattikoulu.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "koulu" },
          { label: "Partitiivi", form: "koulua" },
          { label: "Genetiivi", form: "koulun" },
          { label: "Inessiivi", form: "koulussa" },
          { label: "Elatiivi", form: "koulusta" },
          { label: "Illatiivi", form: "kouluun" },
          { label: "Adessiivi", form: "koululla" },
          { label: "Ablatiivi", form: "koululta" },
          { label: "Allatiivi", form: "koululle" },
          { label: "Essiivi", form: "kouluna" },
          { label: "Translatiivi", form: "kouluksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "koulut" },
          { label: "Partitiivi", form: "kouluja" },
          { label: "Genetiivi", form: "koulujen" },
          { label: "Inessiivi", form: "kouluissa" },
          { label: "Illatiivi", form: "kouluihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "peruskoulu",
      en: "comprehensive/primary school",
      taso: "A2",
      esim: { fi: "Peruskoulu kestää yhdeksän vuotta.", en: "Comprehensive school lasts nine years." },
    },
    {
      fi: "koululainen",
      en: "schoolchild, pupil",
      taso: "B1",
      esim: { fi: "Koululaiset menivät retkelle.", en: "The schoolchildren went on a trip." },
    },
    {
      fi: "kouluttaa",
      en: "to train, educate",
      taso: "B1",
      esim: { fi: "Yritys kouluttaa uudet työntekijät.", en: "The company trains the new employees." },
    },
  ],
  synonyymit: [
    { fi: "oppilaitos", en: "educational institution" },
    { fi: "opinahjo", en: "school, alma mater (formal)" },
  ],
  esimerkit: {
    A2: { fi: "Lapset menevät kouluun aamulla.", en: "The children go to school in the morning." },
    B1: { fi: "Koulu alkaa elokuussa.", en: "School starts in August." },
    B2: {
      fi: "Kävin tämän koulun jo kaksikymmentä vuotta sitten.",
      en: "I attended this school twenty years ago.",
    },
  },
  updatedAt: "2026-06-04",
};

export default koulu;
