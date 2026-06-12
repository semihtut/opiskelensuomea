import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 15/korkea, no gradation, stem ylpeä-.
// Genitive ylpeän, partitive ylpeää, partitive pl ylpeitä. Comparative ylpeämpi, superlative ylpein.
const ylpeä: Word = {
  fi: "ylpeä",
  slug: "ylpeä",
  pos: "adjektiivi (tyyppi 15/korkea)",
  posClass: "adjektiivi",
  level: "B1",
  en: "proud",
  selitys:
    "Tyytyväinen itseensä tai toiseen saavutuksen vuoksi: 'ylpeä lapsestaan'. Tyyppi 15, ei astevaihtelua. Partitiivin monikko ylpeitä. Yhteydessä elatiivi: 'ylpeä jostakin'. Vrt. ylpeys (pride), ylpeillä.",
  kuva: { alt: "ylpeä – tyytyväinen itseensä tai toiseen" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 15/korkea; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ylpeän", merkitys: "of the proud (one)" },
      { sija: "partitiivi (yks.)", muoto: "ylpeää", merkitys: "proud (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "ylpeitä", merkitys: "proud (partitive pl.)" },
    ],
    huom:
      "Tyyppi 15: partitiivin monikko ylpeitä. Vertailu ylpeämpi – ylpein. Rakenne 'ylpeä jostakin' (elatiivi): 'Olen ylpeä sinusta'. Vrt. ylpeys = pride, ylpeillä = to boast.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ylpeä" },
          { label: "Partitiivi", form: "ylpeää" },
          { label: "Genetiivi", form: "ylpeän" },
          { label: "Inessiivi", form: "ylpeässä" },
          { label: "Elatiivi", form: "ylpeästä" },
          { label: "Illatiivi", form: "ylpeään" },
          { label: "Adessiivi", form: "ylpeällä" },
          { label: "Ablatiivi", form: "ylpeältä" },
          { label: "Allatiivi", form: "ylpeälle" },
          { label: "Essiivi", form: "ylpeänä" },
          { label: "Translatiivi", form: "ylpeäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ylpeät" },
          { label: "Partitiivi", form: "ylpeitä" },
          { label: "Genetiivi", form: "ylpeiden / ylpeitten" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Perusaste", form: "ylpeä" },
          { label: "Komparatiivi", form: "ylpeämpi" },
          { label: "Superlatiivi", form: "ylpein" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ylpeys",
      en: "pride",
      taso: "B2",
      esim: { fi: "Ylpeys esti häntä pyytämästä apua.", en: "Pride kept him from asking for help." },
    },
    {
      fi: "ylpeillä",
      en: "to boast, take pride in",
      taso: "B2",
      esim: { fi: "Hän ylpeili uudella autollaan.", en: "He boasted about his new car." },
    },
    {
      fi: "ylpeästi",
      en: "proudly",
      taso: "B1",
      esim: { fi: "Hän käveli ylpeästi lavalle.", en: "She walked proudly onto the stage." },
    },
  ],
  synonyymit: [
    { fi: "tyytyväinen", en: "satisfied, content" },
    { fi: "kopea", en: "haughty, arrogant" },
  ],
  esimerkit: {
    A2: { fi: "Olen ylpeä sinusta.", en: "I'm proud of you." },
    B1: { fi: "Vanhemmat olivat ylpeitä lapsensa saavutuksesta.", en: "The parents were proud of their child's achievement." },
    B2: {
      fi: "Hän oli liian ylpeä myöntääkseen tehneensä virheen.",
      en: "He was too proud to admit he had made a mistake.",
    },
  },
  updatedAt: "2026-06-06",
};

export default ylpeä;
