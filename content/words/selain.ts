import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 33/kytkin, no gradation, stem selaime-.
// Genitive selaimen, partitive selainta, illative selaimeen, partitive pl selaimia.
const selain: Word = {
  fi: "selain",
  slug: "selain",
  pos: "substantiivi (tyyppi 33/kytkin)",
  posClass: "substantiivi",
  level: "B1",
  en: "browser (web)",
  selitys:
    "Ohjelma, jolla katsotaan verkkosivuja: 'avata selain'. Tyyppi 33/kytkin, ei astevaihtelua; vartalo selaime-. Johdettu verbistä selata. Vrt. selata, verkko, sovellus.",
  kuva: { alt: "selain – ohjelma jolla katsotaan verkkosivuja" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 33/kytkin; ei astevaihtelua (vartalo selaime-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "selaimen", merkitys: "of the browser" },
      { sija: "partitiivi (yks.)", muoto: "selainta", merkitys: "browser (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "selaimia", merkitys: "browsers (partitive pl.)" },
    ],
    huom:
      "Tyyppi 33 (-in): nominatiivi selain, vartalo selaime- (selaimen, selaimeen), partitiivi selainta. Johdettu verbistä selata. Välineen nimi (-in). Vrt. selata = to browse, kytkin/puhelin (sama tyyppi).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "selain" },
          { label: "Partitiivi", form: "selainta" },
          { label: "Genetiivi", form: "selaimen" },
          { label: "Inessiivi", form: "selaimessa" },
          { label: "Elatiivi", form: "selaimesta" },
          { label: "Illatiivi", form: "selaimeen" },
          { label: "Adessiivi", form: "selaimella" },
          { label: "Ablatiivi", form: "selaimelta" },
          { label: "Allatiivi", form: "selaimelle" },
          { label: "Essiivi", form: "selaimena" },
          { label: "Translatiivi", form: "selaimeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "selaimet" },
          { label: "Partitiivi", form: "selaimia" },
          { label: "Genetiivi", form: "selaimien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "selata",
      en: "to browse, scroll",
      taso: "B1",
      esim: { fi: "Selaan uutisia aamulla.", en: "I browse the news in the morning." },
    },
    {
      fi: "verkkoselain",
      en: "web browser",
      taso: "B2",
      esim: { fi: "Avaa sivu verkkoselaimessa.", en: "Open the page in a web browser." },
    },
  ],
  synonyymit: [
    { fi: "verkkoselain", en: "web browser" },
  ],
  esimerkit: {
    A2: { fi: "Avaa selain.", en: "Open the browser." },
    B1: { fi: "Mitä selainta käytät?", en: "Which browser do you use?" },
    B2: {
      fi: "Tyhjennä selaimen välimuisti, jos sivu ei lataudu oikein.",
      en: "Clear the browser's cache if the page doesn't load correctly.",
    },
  },
  updatedAt: "2026-06-07",
};

export default selain;
