import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 2/palvelu, no gradation, stem sivusto-.
// Genitive sivuston, partitive sivustoa, illative sivustoon, partitive pl sivustoja.
const sivusto: Word = {
  fi: "sivusto",
  slug: "sivusto",
  pos: "substantiivi (tyyppi 2/palvelu)",
  posClass: "substantiivi",
  level: "B1",
  en: "website",
  selitys:
    "Verkkosivujen kokonaisuus: 'yrityksen sivusto'. Tyyppi 2, ei astevaihtelua. Partitiivin monikko sivustoja. Johdettu sanasta sivu. Vrt. verkkosivusto, nettisivu, sivu.",
  kuva: { emoji: "🖥️", alt: "sivusto – verkkosivujen kokonaisuus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 2/palvelu; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "sivuston", merkitys: "of the website" },
      { sija: "partitiivi (yks.)", muoto: "sivustoa", merkitys: "website (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "sivustoja", merkitys: "websites (partitive pl.)" },
    ],
    huom:
      "Tyyppi 2, ei astevaihtelua. Sivusto = useita verkkosivuja yhdessä; sivu = yksittäinen sivu. Vrt. verkkosivusto = website, nettisivu = web page.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "sivusto" },
          { label: "Partitiivi", form: "sivustoa" },
          { label: "Genetiivi", form: "sivuston" },
          { label: "Inessiivi", form: "sivustossa" },
          { label: "Elatiivi", form: "sivustosta" },
          { label: "Illatiivi", form: "sivustoon" },
          { label: "Adessiivi", form: "sivustolla" },
          { label: "Ablatiivi", form: "sivustolta" },
          { label: "Allatiivi", form: "sivustolle" },
          { label: "Essiivi", form: "sivustona" },
          { label: "Translatiivi", form: "sivustoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "sivustot" },
          { label: "Partitiivi", form: "sivustoja" },
          { label: "Genetiivi", form: "sivustojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "verkkosivusto",
      en: "website (formal)",
      taso: "B2",
      esim: { fi: "Verkkosivusto uudistettiin.", en: "The website was renewed." },
    },
    {
      fi: "sivu",
      en: "page",
      taso: "A2",
      esim: { fi: "Sivu latautui hitaasti.", en: "The page loaded slowly." },
    },
    {
      fi: "kotisivu",
      en: "home page",
      taso: "B1",
      esim: { fi: "Yhdistyksellä on omat kotisivut.", en: "The association has its own home pages." },
    },
  ],
  synonyymit: [
    { fi: "verkkosivusto", en: "website" },
    { fi: "nettisivut", en: "web pages" },
  ],
  esimerkit: {
    A2: { fi: "Sivusto on helppokäyttöinen.", en: "The website is easy to use." },
    B1: { fi: "Löysin tiedon yliopiston sivustolta.", en: "I found the information on the university's website." },
    B2: {
      fi: "Hyvä sivusto toimii moitteettomasti myös puhelimella.",
      en: "A good website also works flawlessly on a phone.",
    },
  },
  updatedAt: "2026-06-07",
};

export default sivusto;
