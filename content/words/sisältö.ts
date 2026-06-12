import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, lt:ll gradation, stem sisältö- ~ sisällö-.
// Genitive sisällön, partitive sisältöä, partitive pl sisältöjä.
const sisalto: Word = {
  fi: "sisältö",
  slug: "sisältö",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "content, contents; substance",
  selitys:
    "Se, mitä jokin sisältää: tekstin, paketin tai median sisältö. Tyyppi 1/valo, astevaihtelu lt:ll (sisältö → sisällön). Johdettu verbistä sisältää. Vrt. sisältää, sisällys, muoto.",
  kuva: { alt: "sisältö – se mitä jokin sisältää" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu lt:ll (sisältö ~ sisällö-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "sisällön", merkitys: "of the content" },
      { sija: "partitiivi (yks.)", muoto: "sisältöä", merkitys: "content (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "sisältöjä", merkitys: "contents (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu lt:ll: vahva sisältö (nominatiivi, partitiivi sisältöä), heikko sisällö- (sisällön, sisällössä). Johdettu verbistä sisältää. Vastakohta: muoto (form). Vrt. sisältää, sisällys.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "sisältö" },
          { label: "Partitiivi", form: "sisältöä" },
          { label: "Genetiivi", form: "sisällön" },
          { label: "Inessiivi", form: "sisällössä" },
          { label: "Elatiivi", form: "sisällöstä" },
          { label: "Illatiivi", form: "sisältöön" },
          { label: "Adessiivi", form: "sisällöllä" },
          { label: "Ablatiivi", form: "sisällöltä" },
          { label: "Allatiivi", form: "sisällölle" },
          { label: "Essiivi", form: "sisältönä" },
          { label: "Translatiivi", form: "sisällöksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "sisällöt" },
          { label: "Partitiivi", form: "sisältöjä" },
          { label: "Genetiivi", form: "sisältöjen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sisältää",
      en: "to contain, include",
      taso: "B1",
      esim: { fi: "Paketti sisältää kirjan.", en: "The package contains a book." },
    },
    {
      fi: "sisällys",
      en: "table of contents",
      taso: "B2",
      esim: { fi: "Kirjan alussa on sisällys.", en: "There is a table of contents at the start of the book." },
    },
  ],
  synonyymit: [
    { fi: "aines", en: "substance, material" },
  ],
  esimerkit: {
    A2: { fi: "Mikä on tämän tekstin sisältö?", en: "What is the content of this text?" },
    B1: { fi: "Viestin sisältö oli tärkeä.", en: "The content of the message was important." },
    B2: {
      fi: "Hyvässä esityksessä sekä muoto että sisältö tukevat toisiaan.",
      en: "In a good presentation, both form and content support each other.",
    },
  },
  updatedAt: "2026-06-07",
};

export default sisalto;
