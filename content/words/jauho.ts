import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem jauho-.
// Genitive jauhon, partitive jauhoa, partitive pl jauhoja. Often plural (jauhot).
const jauho: Word = {
  fi: "jauho",
  slug: "jauho",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "flour",
  selitys:
    "Viljasta jauhettu hieno aine, jota käytetään leivonnassa: 'vehnäjauho'. Tyyppi 1/valo, ei astevaihtelua. Käytetään usein monikossa (jauhot). Vrt. leipoa, taikina, vilja.",
  kuva: { alt: "jauho – viljasta jauhettu hieno aine" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua (vartalo jauho-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "jauhon", merkitys: "of the flour" },
      { sija: "partitiivi (yks.)", muoto: "jauhoa", merkitys: "flour (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "jauhoja", merkitys: "flours (partitive pl.)" },
    ],
    huom:
      "Tyyppi 1/valo: ei astevaihtelua. Käytetään usein monikossa: 'jauhot'. Vehnäjauho, ruisjauho. Vrt. leipoa, taikina.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "jauho" },
          { label: "Partitiivi", form: "jauhoa" },
          { label: "Genetiivi", form: "jauhon" },
          { label: "Inessiivi", form: "jauhossa" },
          { label: "Elatiivi", form: "jauhosta" },
          { label: "Illatiivi", form: "jauhoon" },
          { label: "Adessiivi", form: "jauholla" },
          { label: "Ablatiivi", form: "jauholta" },
          { label: "Allatiivi", form: "jauholle" },
          { label: "Essiivi", form: "jauhona" },
          { label: "Translatiivi", form: "jauhoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "jauhot" },
          { label: "Partitiivi", form: "jauhoja" },
          { label: "Genetiivi", form: "jauhojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vehnäjauho",
      en: "wheat flour",
      taso: "B1",
      esim: { fi: "Resepti vaatii vehnäjauhoa.", en: "The recipe requires wheat flour." },
    },
    {
      fi: "jauhaa",
      en: "to grind, mill",
      taso: "B2",
      esim: { fi: "Vilja jauhetaan jauhoksi.", en: "Grain is ground into flour." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Tarvitsen jauhoja leivontaan.", en: "I need flour for baking." },
    B1: { fi: "Sekoita jauhot ja vesi.", en: "Mix the flour and water." },
    B2: {
      fi: "Lisää jauhot vähitellen, jotta taikinasta ei tule liian paksua.",
      en: "Add the flour gradually so the dough doesn't get too thick.",
    },
  },
  updatedAt: "2026-06-07",
};

export default jauho;
