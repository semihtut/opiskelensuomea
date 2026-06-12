import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 2/palvelu, no gradation, stem haastattelu-.
// Genitive haastattelun, partitive haastattelua, illative haastatteluun, partitive pl haastatteluja.
const haastattelu: Word = {
  fi: "haastattelu",
  slug: "haastattelu",
  pos: "substantiivi (tyyppi 2/palvelu)",
  posClass: "substantiivi",
  level: "B1",
  en: "interview",
  selitys:
    "Tilanne, jossa joku kyselee toiselta tietoja, esimerkiksi työ- tai lehtihaastattelu: 'mennä haastatteluun'. Tyyppi 2, ei astevaihtelua. Partitiivin monikko haastatteluja. Johdettu verbistä haastatella.",
  kuva: { alt: "haastattelu – tilanne, jossa joku kyselee toiselta tietoja" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 2/palvelu; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "haastattelun", merkitys: "of the interview" },
      { sija: "partitiivi (yks.)", muoto: "haastattelua", merkitys: "interview (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "haastatteluja", merkitys: "interviews (partitive pl.)" },
    ],
    huom:
      "Tyyppi 2: ei astevaihtelua (tt säilyy). Partitiivin monikko haastatteluja (tai haastatteluita). Vrt. työhaastattelu = job interview, haastatella = to interview.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "haastattelu" },
          { label: "Partitiivi", form: "haastattelua" },
          { label: "Genetiivi", form: "haastattelun" },
          { label: "Inessiivi", form: "haastattelussa" },
          { label: "Elatiivi", form: "haastattelusta" },
          { label: "Illatiivi", form: "haastatteluun" },
          { label: "Adessiivi", form: "haastattelulla" },
          { label: "Ablatiivi", form: "haastattelulta" },
          { label: "Allatiivi", form: "haastattelulle" },
          { label: "Essiivi", form: "haastatteluna" },
          { label: "Translatiivi", form: "haastatteluksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "haastattelut" },
          { label: "Partitiivi", form: "haastatteluja / haastatteluita" },
          { label: "Genetiivi", form: "haastattelujen / haastatteluiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "työhaastattelu",
      en: "job interview",
      taso: "B1",
      esim: { fi: "Valmistauduin työhaastatteluun huolella.", en: "I prepared carefully for the job interview." },
    },
    {
      fi: "haastatella",
      en: "to interview",
      taso: "B1",
      esim: { fi: "Toimittaja haastatteli ministeriä.", en: "The journalist interviewed the minister." },
    },
    {
      fi: "haastateltava",
      en: "interviewee",
      taso: "B2",
      esim: { fi: "Haastateltava vastasi rauhallisesti.", en: "The interviewee answered calmly." },
    },
  ],
  synonyymit: [
    { fi: "kysely", en: "survey, questioning" },
    { fi: "tentti", en: "examination, interview (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on huomenna haastattelu.", en: "I have an interview tomorrow." },
    B1: { fi: "Haastattelu kesti puoli tuntia.", en: "The interview lasted half an hour." },
    B2: {
      fi: "Lehden haastattelussa muusikko kertoi avoimesti urastaan.",
      en: "In the magazine interview, the musician spoke openly about her career.",
    },
  },
  updatedAt: "2026-06-06",
};

export default haastattelu;
