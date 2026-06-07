import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, p:v gradation, stem lepo- ~ levo-.
// Genitive levon, partitive lepoa. Usually singular.
const lepo: Word = {
  fi: "lepo",
  slug: "lepo",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "rest, repose",
  selitys:
    "Lepäämisen tila, jolloin voimat palautuvat: 'tarvita lepoa'. Tyyppi 1/valo, astevaihtelu p:v (lepo → levon). Yleensä yksikössä. Johdettu verbistä levätä. Vrt. levätä, rauha, uni.",
  kuva: { emoji: "😴", alt: "lepo – lepäämisen tila jolloin voimat palautuvat" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu p:v (vartalo levo-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "levon", merkitys: "of the rest" },
      { sija: "partitiivi (yks.)", muoto: "lepoa", merkitys: "rest (partitive)" },
      { sija: "illatiivi (yks.)", muoto: "lepoon", merkitys: "to rest" },
    ],
    huom:
      "Astevaihtelu p:v: nominatiivi lepo (vahva p), genetiivi levon (heikko v). Yleensä yksikössä. Johdettu verbistä levätä. 'Käydä lepoon' = to go to rest. Vrt. levätä = to rest, lepohetki = rest break.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "lepo" },
          { label: "Partitiivi", form: "lepoa" },
          { label: "Genetiivi", form: "levon" },
          { label: "Inessiivi", form: "levossa" },
          { label: "Elatiivi", form: "levosta" },
          { label: "Illatiivi", form: "lepoon" },
          { label: "Adessiivi", form: "levolla" },
          { label: "Ablatiivi", form: "levolta" },
          { label: "Allatiivi", form: "levolle" },
          { label: "Essiivi", form: "lepona" },
          { label: "Translatiivi", form: "levoksi" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "levätä",
      en: "to rest",
      taso: "A2",
      esim: { fi: "Lepää hyvin.", en: "Rest well." },
    },
    {
      fi: "lepohetki",
      en: "rest, break",
      taso: "B2",
      esim: { fi: "Pidän pienen lepohetken.", en: "I'll take a little break." },
    },
  ],
  synonyymit: [
    { fi: "rauha", en: "peace, quiet" },
    { fi: "tauko", en: "break, pause" },
  ],
  esimerkit: {
    A2: { fi: "Tarvitsen lepoa.", en: "I need rest." },
    B1: { fi: "Sairaus vaatii lepoa.", en: "The illness requires rest." },
    B2: {
      fi: "Riittävä lepo on yhtä tärkeää suoritukselle kuin itse harjoittelu.",
      en: "Sufficient rest is as important for performance as the training itself.",
    },
  },
  updatedAt: "2026-06-07",
};

export default lepo;
