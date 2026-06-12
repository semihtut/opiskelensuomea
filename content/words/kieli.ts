import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 26/pieni, no gradation, stem kiele-.
// Genitive kielen, partitive kieltä, illative kieleen, partitive pl kieliä.
const kieli: Word = {
  fi: "kieli",
  slug: "kieli",
  pos: "substantiivi (tyyppi 26/pieni)",
  posClass: "substantiivi",
  level: "A2",
  en: "language; tongue",
  selitys:
    "Viestintäjärjestelmä tai suun elin: 'suomen kieli' / 'kipeä kieli'. Tyyppi 26, ei astevaihtelua, vartalo kiele-. Partitiivi kieltä. Vrt. kielioppi (grammar), kielitaito (language skill).",
  kuva: { alt: "kieli – kieli viestintäjärjestelmänä tai suun elimenä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 26/pieni; ei astevaihtelua (vartalo kiele-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kielen", merkitys: "of the language" },
      { sija: "partitiivi (yks.)", muoto: "kieltä", merkitys: "language (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kieliä", merkitys: "languages (partitive pl.)" },
    ],
    huom:
      "Loppu-i → vartalo -e-: kieli → kielen. Partitiivi kieltä (ei *kieliä yksikössä). 'Puhua montaa kieltä.' Vrt. äidinkieli = native language, vieras kieli = foreign language.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kieli" },
          { label: "Partitiivi", form: "kieltä" },
          { label: "Genetiivi", form: "kielen" },
          { label: "Inessiivi", form: "kielessä" },
          { label: "Elatiivi", form: "kielestä" },
          { label: "Illatiivi", form: "kieleen" },
          { label: "Adessiivi", form: "kielellä" },
          { label: "Ablatiivi", form: "kieleltä" },
          { label: "Allatiivi", form: "kielelle" },
          { label: "Essiivi", form: "kielenä" },
          { label: "Translatiivi", form: "kieleksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kielet" },
          { label: "Partitiivi", form: "kieliä" },
          { label: "Genetiivi", form: "kielten / kielien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "äidinkieli",
      en: "native language, mother tongue",
      taso: "A2",
      esim: { fi: "Hänen äidinkielensä on viro.", en: "Her native language is Estonian." },
    },
    {
      fi: "kielitaito",
      en: "language skills",
      taso: "B1",
      esim: { fi: "Hyvä kielitaito auttaa työnhaussa.", en: "Good language skills help in job hunting." },
    },
    {
      fi: "kielellinen",
      en: "linguistic",
      taso: "B2",
      esim: { fi: "Suomessa on kielellisiä vähemmistöjä.", en: "Finland has linguistic minorities." },
    },
  ],
  synonyymit: [
    { fi: "puhetapa", en: "way of speaking" },
    { fi: "murre", en: "dialect" },
  ],
  esimerkit: {
    A2: { fi: "Opiskelen suomen kieltä.", en: "I'm studying the Finnish language." },
    B1: { fi: "Hän osaa kolmea kieltä.", en: "She knows three languages." },
    B2: {
      fi: "Uuden kielen oppiminen avaa oven toiseen kulttuuriin.",
      en: "Learning a new language opens a door to another culture.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kieli;
