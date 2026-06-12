import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation, stem seiso-.
// Present seison, past seisoin, past participle seisonut.
const seisoa: Word = {
  fi: "seisoa",
  slug: "seisoa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to stand",
  selitys:
    "Olla pystyasennossa jaloillaan. Tyyppi 1, ei astevaihtelua: seisoa → seison. Vastakohta istua. Vrt. nousta seisomaan (to stand up).",
  kuva: { alt: "seisoa – henkilö seisoo pystyssä" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-oa); ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "seison", merkitys: "I stand" },
      { sija: "imperfekti (minä)", muoto: "seisoin", merkitys: "I stood" },
      { sija: "kielto (minä)", muoto: "en seiso", merkitys: "I don't stand" },
    ],
    huom:
      "Seisoa jossakin (missä?): 'seison jonossa'. Nousta seisomaan = to stand up. Älä sekoita verbiin seistä (sama merkitys, harvinaisempi).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "seison" },
          { label: "sinä", form: "seisot" },
          { label: "hän", form: "seisoo" },
          { label: "me", form: "seisomme" },
          { label: "te", form: "seisotte" },
          { label: "he", form: "seisovat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en seiso" },
          { label: "hän", form: "ei seiso" },
          { label: "he", form: "eivät seiso" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "seisoin" },
          { label: "sinä", form: "seisoit" },
          { label: "hän", form: "seisoi" },
          { label: "me", form: "seisoimme" },
          { label: "te", form: "seisoitte" },
          { label: "he", form: "seisoivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen seisonut" },
          { label: "hän", form: "on seisonut" },
          { label: "he", form: "ovat seisoneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "seiso!" },
          { label: "te", form: "seisokaa!" },
          { label: "kielto (sinä)", form: "älä seiso" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "seisahtaa",
      en: "to come to a stop, halt",
      taso: "B2",
      esim: { fi: "Juna seisahti asemalle.", en: "The train came to a stop at the station." },
    },
    {
      fi: "seisova pöytä",
      en: "buffet (lit. standing table)",
      taso: "B1",
      esim: { fi: "Hotellissa oli seisova pöytä.", en: "The hotel had a buffet." },
    },
    {
      fi: "pysähtyä",
      en: "to stop, halt",
      taso: "A2",
      esim: { fi: "Auto pysähtyi punaisiin.", en: "The car stopped at the red light." },
    },
  ],
  synonyymit: [
    { fi: "seistä", en: "to stand (less common variant)" },
    { fi: "olla pystyssä", en: "to be upright" },
  ],
  esimerkit: {
    A2: { fi: "Seison bussipysäkillä.", en: "I'm standing at the bus stop." },
    B1: { fi: "Seisoimme jonossa puoli tuntia.", en: "We stood in the queue for half an hour." },
    B2: {
      fi: "Vanha kirkko seisoo edelleen samalla paikalla kuin sata vuotta sitten.",
      en: "The old church still stands in the same place as a hundred years ago.",
    },
  },
  updatedAt: "2026-06-05",
};

export default seisoa;
