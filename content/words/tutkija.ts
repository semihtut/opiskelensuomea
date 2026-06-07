import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 12/kulkija, no gradation, stem tutkija-.
// Genitive tutkijan, partitive tutkijaa, partitive pl tutkijoita.
const tutkija: Word = {
  fi: "tutkija",
  slug: "tutkija",
  pos: "substantiivi (tyyppi 12/kulkija)",
  posClass: "substantiivi",
  level: "B1",
  en: "researcher, scientist, investigator",
  selitys:
    "Henkilö, joka tekee tutkimusta: 'yliopiston tutkija'. Tyyppi 12/kulkija, ei astevaihtelua; partitiivin monikko tutkijoita. Johdettu verbistä tutkia. Vrt. tutkia, tutkimus, tieteilijä.",
  kuva: { emoji: "🧑‍🔬", alt: "tutkija – henkilö joka tekee tutkimusta" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 12/kulkija; ei astevaihtelua (vartalo tutkija-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tutkijan", merkitys: "of the researcher" },
      { sija: "partitiivi (yks.)", muoto: "tutkijaa", merkitys: "researcher (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tutkijoita", merkitys: "researchers (partitive pl.)" },
    ],
    huom:
      "Tyyppi 12 (-ja, kolmitavuinen): partitiivin monikko -oita (tutkijoita), ei astevaihtelua. Tekijännimi verbistä tutkia. Vrt. tutkimus = research, johtaja/työntekijä (sama tyyppi).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tutkija" },
          { label: "Partitiivi", form: "tutkijaa" },
          { label: "Genetiivi", form: "tutkijan" },
          { label: "Inessiivi", form: "tutkijassa" },
          { label: "Elatiivi", form: "tutkijasta" },
          { label: "Illatiivi", form: "tutkijaan" },
          { label: "Adessiivi", form: "tutkijalla" },
          { label: "Ablatiivi", form: "tutkijalta" },
          { label: "Allatiivi", form: "tutkijalle" },
          { label: "Essiivi", form: "tutkijana" },
          { label: "Translatiivi", form: "tutkijaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tutkijat" },
          { label: "Partitiivi", form: "tutkijoita" },
          { label: "Genetiivi", form: "tutkijoiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tutkia",
      en: "to research, study",
      taso: "B1",
      esim: { fi: "Hän tutkii ilmastonmuutosta.", en: "She researches climate change." },
    },
    {
      fi: "tutkimus",
      en: "research, study",
      taso: "B1",
      esim: { fi: "Tutkimus julkaistiin lehdessä.", en: "The study was published in a journal." },
    },
  ],
  synonyymit: [
    { fi: "tieteilijä", en: "scientist, scholar" },
    { fi: "tiedemies", en: "scientist (man)" },
  ],
  esimerkit: {
    A2: { fi: "Hän on tutkija.", en: "She is a researcher." },
    B1: { fi: "Tutkijat keräsivät paljon aineistoa.", en: "The researchers collected a lot of data." },
    B2: {
      fi: "Tutkijoiden mukaan tulokset edellyttävät vielä lisäselvityksiä.",
      en: "According to the researchers, the results still require further investigation.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tutkija;
