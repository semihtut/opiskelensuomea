import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem riittävä-.
// Genitive riittävän, partitive riittävää, partitive pl riittäviä. Participle of riittää.
const riittava: Word = {
  fi: "riittävä",
  slug: "riittävä",
  pos: "adjektiivi (tyyppi 10/koira)",
  posClass: "adjektiivi",
  level: "B1",
  en: "sufficient, enough, adequate",
  selitys:
    "Sellainen, jota on tarpeeksi: 'riittävä määrä'. Tyyppi 10/koira, ei astevaihtelua. Verbin riittää partisiippi. Vastakohta riittämätön. Vrt. riittää (to suffice), riittävästi (sufficiently).",
  kuva: { emoji: "✔️", alt: "riittävä – sellainen, jota on tarpeeksi" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 10/koira; ei astevaihtelua (vartalo riittävä-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "riittävän", merkitys: "of sufficient" },
      { sija: "partitiivi (yks.)", muoto: "riittävää", merkitys: "sufficient (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "riittäviä", merkitys: "sufficient (partitive pl.)" },
    ],
    huom:
      "Verbin riittää partisiippi, käytetään adjektiivina. Partitiivin monikko riittäviä. Vastakohta riittämätön = insufficient. Adverbi riittävästi = enough. 'Riittävän hyvä' = good enough.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "riittävä" },
          { label: "Partitiivi", form: "riittävää" },
          { label: "Genetiivi", form: "riittävän" },
          { label: "Inessiivi", form: "riittävässä" },
          { label: "Elatiivi", form: "riittävästä" },
          { label: "Illatiivi", form: "riittävään" },
          { label: "Adessiivi", form: "riittävällä" },
          { label: "Ablatiivi", form: "riittävältä" },
          { label: "Allatiivi", form: "riittävälle" },
          { label: "Essiivi", form: "riittävänä" },
          { label: "Translatiivi", form: "riittäväksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "riittävät" },
          { label: "Partitiivi", form: "riittäviä" },
          { label: "Genetiivi", form: "riittävien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "riittää",
      en: "to be enough, suffice",
      taso: "A2",
      esim: { fi: "Raha ei riitä kaikkeen.", en: "The money isn't enough for everything." },
    },
    {
      fi: "riittävästi",
      en: "sufficiently, enough",
      taso: "B1",
      esim: { fi: "Nuku riittävästi.", en: "Sleep enough." },
    },
    {
      fi: "riittämätön",
      en: "insufficient, inadequate",
      taso: "B2",
      esim: { fi: "Tiedot olivat riittämättömät.", en: "The information was insufficient." },
    },
  ],
  synonyymit: [
    { fi: "tarpeeksi suuri", en: "big enough" },
    { fi: "kelvollinen", en: "adequate, acceptable" },
  ],
  esimerkit: {
    A2: { fi: "Onko ruokaa riittävä määrä?", en: "Is there a sufficient amount of food?" },
    B1: { fi: "Hänellä on riittävä kokemus tehtävään.", en: "She has sufficient experience for the role." },
    B2: {
      fi: "Riittävä lepo on yhtä tärkeää kuin ahkera harjoittelu.",
      en: "Sufficient rest is just as important as diligent practice.",
    },
  },
  updatedAt: "2026-06-07",
};

export default riittava;
