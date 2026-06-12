import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 2/palvelu, no gradation, stem suojelu-.
// Genitive suojelun, partitive suojelua, partitive pl suojeluja.
const suojelu: Word = {
  fi: "suojelu",
  slug: "suojelu",
  pos: "substantiivi (tyyppi 2/palvelu)",
  posClass: "substantiivi",
  level: "B1",
  en: "protection, conservation",
  selitys:
    "Suojeleminen, varjeleminen vahingolta: 'luonnonsuojelu'. Tyyppi 2/palvelu, ei astevaihtelua. Johdettu verbistä suojella. Vrt. suojella, suoja, ympäristönsuojelu.",
  kuva: { alt: "suojelu – suojeleminen ja varjeleminen vahingolta" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 2/palvelu; ei astevaihtelua (vartalo suojelu-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "suojelun", merkitys: "of the protection" },
      { sija: "partitiivi (yks.)", muoto: "suojelua", merkitys: "protection (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "suojeluja", merkitys: "protections (partitive pl.)" },
    ],
    huom:
      "Tyyppi 2 (-u, kolmitavuinen): partitiivin monikko -ja (suojeluja), ei astevaihtelua. Johdettu verbistä suojella. 'Luonnonsuojelu' = nature conservation; 'ympäristönsuojelu' = environmental protection.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "suojelu" },
          { label: "Partitiivi", form: "suojelua" },
          { label: "Genetiivi", form: "suojelun" },
          { label: "Inessiivi", form: "suojelussa" },
          { label: "Elatiivi", form: "suojelusta" },
          { label: "Illatiivi", form: "suojeluun" },
          { label: "Adessiivi", form: "suojelulla" },
          { label: "Ablatiivi", form: "suojelulta" },
          { label: "Allatiivi", form: "suojelulle" },
          { label: "Essiivi", form: "suojeluna" },
          { label: "Translatiivi", form: "suojeluksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "suojelut" },
          { label: "Partitiivi", form: "suojeluja" },
          { label: "Genetiivi", form: "suojelujen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "suojella",
      en: "to protect",
      taso: "B1",
      esim: { fi: "Suojelemme metsiä.", en: "We protect the forests." },
    },
    {
      fi: "luonnonsuojelu",
      en: "nature conservation",
      taso: "B2",
      esim: { fi: "Hän työskentelee luonnonsuojelun parissa.", en: "She works in nature conservation." },
    },
  ],
  synonyymit: [
    { fi: "varjelu", en: "safeguarding" },
    { fi: "turvaaminen", en: "securing" },
  ],
  esimerkit: {
    A2: { fi: "Ympäristön suojelu on tärkeää.", en: "Protecting the environment is important." },
    B1: { fi: "Alueella on tiukka suojelu.", en: "The area has strict protection." },
    B2: {
      fi: "Lajien suojelu vaatii sekä rahaa että poliittista tahtoa.",
      en: "Protecting species requires both money and political will.",
    },
  },
  updatedAt: "2026-06-07",
};

export default suojelu;
