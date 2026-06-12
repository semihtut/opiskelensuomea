import type { Word } from "@/lib/content-types";

// Demonstrative pronoun (proximal). Verified against Wiktionary: genitive tämän,
// partitive tätä, illative tähän; plural nämä/näiden/näitä.
const tama: Word = {
  fi: "tämä",
  slug: "tämä",
  pos: "pronomini (demonstratiivipronomini)",
  posClass: "pronomini",
  level: "A1",
  en: "this",
  selitys:
    "Osoittava pronomini lähellä olevasta (this). Genetiivi tämän, partitiivi tätä. Monikko nämä. Sarja: tämä (lähellä) – tuo (kaukana) – se (neutraali).",
  kuva: { alt: "tämä – osoitetaan lähellä olevaa" },

  kielioppi: {
    tyyppi: "demonstratiivipronomini (läheinen); epäsäännöllinen monikko nämä",
    muodot: [
      { sija: "genetiivi", muoto: "tämän", merkitys: "of this" },
      { sija: "partitiivi", muoto: "tätä", merkitys: "this (partitive)" },
      { sija: "illatiivi", muoto: "tähän", merkitys: "into/to this" },
    ],
    huom:
      "Illatiivi on tähän (ei *tämään). Monikko on nämä, näiden, näitä. Sarja: tämä – tuo – se; mon. nämä – nuo – ne.",
  },
  taivutus: {
    sections: [
      {
        title: "Sijamuodot (yksikkö)",
        rows: [
          { label: "Nominatiivi", form: "tämä" },
          { label: "Genetiivi", form: "tämän" },
          { label: "Partitiivi", form: "tätä" },
          { label: "Inessiivi", form: "tässä" },
          { label: "Elatiivi", form: "tästä" },
          { label: "Illatiivi", form: "tähän" },
          { label: "Adessiivi", form: "tällä" },
          { label: "Ablatiivi", form: "tältä" },
          { label: "Allatiivi", form: "tälle" },
        ],
      },
      {
        title: "Monikko (nämä)",
        rows: [
          { label: "Nominatiivi", form: "nämä" },
          { label: "Genetiivi", form: "näiden" },
          { label: "Partitiivi", form: "näitä" },
          { label: "Inessiivi", form: "näissä" },
          { label: "Illatiivi", form: "näihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "nämä",
      en: "these (plural of tämä)",
      taso: "A1",
      esim: { fi: "Nämä kengät ovat uudet.", en: "These shoes are new." },
    },
    {
      fi: "tällainen",
      en: "this kind of, such",
      taso: "B1",
      esim: { fi: "En ole nähnyt tällaista ennen.", en: "I haven't seen this kind before." },
    },
    {
      fi: "tänään",
      en: "today (this day, related stem)",
      taso: "A1",
      esim: { fi: "Tänään on lauantai.", en: "Today is Saturday." },
    },
  ],
  synonyymit: [
    { fi: "se", en: "it, that (neutral)" },
    { fi: "tuo", en: "that (over there)" },
  ],
  esimerkit: {
    A2: { fi: "Tämä on minun kirjani.", en: "This is my book." },
    B1: { fi: "Pidän tästä kaupungista.", en: "I like this city." },
    B2: {
      fi: "Tähän asiaan palaamme myöhemmin.",
      en: "We'll come back to this matter later.",
    },
  },
  updatedAt: "2026-06-05",
};

export default tama;
