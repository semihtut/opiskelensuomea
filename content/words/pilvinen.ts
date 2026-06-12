import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem pilvise-.
// Genitive pilvisen, partitive pilvistä, partitive pl pilvisiä. Comparative pilvisempi.
const pilvinen: Word = {
  fi: "pilvinen",
  slug: "pilvinen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "B1",
  en: "cloudy, overcast",
  selitys:
    "Sellainen, kun taivaalla on paljon pilviä: 'pilvinen taivas'. Tyyppi 38, ei astevaihtelua; vartalo pilvise-. Partitiivin monikko pilvisiä. Johdettu sanasta pilvi. Vastakohta aurinkoinen / selkeä.",
  kuva: { alt: "pilvinen – taivas täynnä pilviä" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua; vartalo pilvise-",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "pilvisen", merkitys: "of the cloudy (one)" },
      { sija: "partitiivi (yks.)", muoto: "pilvistä", merkitys: "cloudy (partitive)" },
      { sija: "komparatiivi", muoto: "pilvisempi", merkitys: "cloudier" },
    ],
    huom:
      "Vartalo pilvise- (genetiivi pilvisen, partitiivi pilvistä). Vertailu pilvisempi – pilvisin. Johdettu sanasta pilvi. Vastakohta aurinkoinen, selkeä, pilvetön.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "pilvinen" },
          { label: "Partitiivi", form: "pilvistä" },
          { label: "Genetiivi", form: "pilvisen" },
          { label: "Inessiivi", form: "pilvisessä" },
          { label: "Elatiivi", form: "pilvisestä" },
          { label: "Illatiivi", form: "pilviseen" },
          { label: "Adessiivi", form: "pilvisellä" },
          { label: "Ablatiivi", form: "pilviseltä" },
          { label: "Allatiivi", form: "pilviselle" },
          { label: "Essiivi", form: "pilvisenä" },
          { label: "Translatiivi", form: "pilviseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "pilviset" },
          { label: "Partitiivi", form: "pilvisiä" },
          { label: "Genetiivi", form: "pilvisten / pilvisien" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Perusaste", form: "pilvinen" },
          { label: "Komparatiivi", form: "pilvisempi" },
          { label: "Superlatiivi", form: "pilvisin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pilvi",
      en: "cloud",
      taso: "A2",
      esim: { fi: "Taivaalla on tummia pilviä.", en: "There are dark clouds in the sky." },
    },
    {
      fi: "puolipilvinen",
      en: "partly cloudy",
      taso: "B2",
      esim: { fi: "Sää on puolipilvinen.", en: "The weather is partly cloudy." },
    },
    {
      fi: "pilvetön",
      en: "cloudless",
      taso: "B2",
      esim: { fi: "Taivas oli pilvetön.", en: "The sky was cloudless." },
    },
  ],
  synonyymit: [
    { fi: "pilvinen sää", en: "overcast weather" },
    { fi: "harmaa", en: "grey (of sky)" },
  ],
  esimerkit: {
    A2: { fi: "Tänään on pilvinen päivä.", en: "Today is a cloudy day." },
    B1: { fi: "Aamupäivä oli pilvisempi kuin iltapäivä.", en: "The morning was cloudier than the afternoon." },
    B2: {
      fi: "Pilvisellä säällä aurinkopaneelit tuottavat vähemmän sähköä.",
      en: "In cloudy weather solar panels produce less electricity.",
    },
  },
  updatedAt: "2026-06-07",
};

export default pilvinen;
