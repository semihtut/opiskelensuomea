import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem ohjelma-.
// Genitive ohjelman, partitive ohjelmaa, illative ohjelmaan, partitive pl ohjelmia.
const ohjelma: Word = {
  fi: "ohjelma",
  slug: "ohjelma",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A2",
  en: "programme; (computing) program, software",
  selitys:
    "Tv- tai radio-ohjelma, suunnitelma tai tietokoneohjelma: 'katsoa ohjelmaa'. Tyyppi 10, ei astevaihtelua. Partitiivin monikko ohjelmia. Vrt. tv-ohjelma, ohjelmoida, sovellus.",
  kuva: { alt: "ohjelma – tv-ohjelma tai tietokoneohjelma" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ohjelman", merkitys: "of the programme" },
      { sija: "partitiivi (yks.)", muoto: "ohjelmaa", merkitys: "programme (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "ohjelmia", merkitys: "programmes (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10, ei astevaihtelua. Partitiivin monikko ohjelmia. Monta merkitystä: tv-ohjelma, päiväohjelma, tietokoneohjelma. Vrt. ohjelmoida = to program, sovellus = app.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ohjelma" },
          { label: "Partitiivi", form: "ohjelmaa" },
          { label: "Genetiivi", form: "ohjelman" },
          { label: "Inessiivi", form: "ohjelmassa" },
          { label: "Elatiivi", form: "ohjelmasta" },
          { label: "Illatiivi", form: "ohjelmaan" },
          { label: "Adessiivi", form: "ohjelmalla" },
          { label: "Ablatiivi", form: "ohjelmalta" },
          { label: "Allatiivi", form: "ohjelmalle" },
          { label: "Essiivi", form: "ohjelmana" },
          { label: "Translatiivi", form: "ohjelmaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ohjelmat" },
          { label: "Partitiivi", form: "ohjelmia" },
          { label: "Genetiivi", form: "ohjelmien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tv-ohjelma",
      en: "TV programme",
      taso: "A2",
      esim: { fi: "Mikä tv-ohjelma tämä on?", en: "What TV programme is this?" },
    },
    {
      fi: "ohjelmoida",
      en: "to program (code)",
      taso: "B2",
      esim: { fi: "Hän osaa ohjelmoida.", en: "She knows how to program." },
    },
    {
      fi: "ohjelmisto",
      en: "software, repertoire",
      taso: "B2",
      esim: { fi: "Päivitä ohjelmisto.", en: "Update the software." },
    },
  ],
  synonyymit: [
    { fi: "sovellus", en: "application (computing)" },
    { fi: "ohjelmisto", en: "software" },
  ],
  esimerkit: {
    A2: { fi: "Katson suosikkiohjelmaani.", en: "I'm watching my favourite programme." },
    B1: { fi: "Asensin uuden ohjelman tietokoneelle.", en: "I installed a new program on the computer." },
    B2: {
      fi: "Konferenssin ohjelma oli tiivis ja täynnä mielenkiintoisia luentoja.",
      en: "The conference programme was packed and full of interesting lectures.",
    },
  },
  updatedAt: "2026-06-07",
};

export default ohjelma;
