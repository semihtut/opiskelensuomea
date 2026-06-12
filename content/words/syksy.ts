import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem syksy-.
// Genitive syksyn, partitive syksyä, illative syksyyn, partitive pl syksyjä.
const syksy: Word = {
  fi: "syksy",
  slug: "syksy",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "autumn, fall",
  selitys:
    "Vuodenaika kesän ja talven välissä: 'sateinen syksy'. Tyyppi 1, ei astevaihtelua. Partitiivin monikko syksyjä. 'Syksyllä' = in autumn (adessiivi). Vrt. syksyinen, syyskuu.",
  kuva: { alt: "syksy – vuodenaika kesän ja talven välissä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "syksyn", merkitys: "of the autumn" },
      { sija: "partitiivi (yks.)", muoto: "syksyä", merkitys: "autumn (partitive)" },
      { sija: "adessiivi (yks.)", muoto: "syksyllä", merkitys: "in autumn" },
    ],
    huom:
      "Tyyppi 1, ei astevaihtelua. Partitiivin monikko syksyjä. 'Syksyllä' = in autumn; 'tänä syksynä' = this autumn (essiivi). Vrt. syyskuu = September, syksyinen = autumnal.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "syksy" },
          { label: "Partitiivi", form: "syksyä" },
          { label: "Genetiivi", form: "syksyn" },
          { label: "Inessiivi", form: "syksyssä" },
          { label: "Elatiivi", form: "syksystä" },
          { label: "Illatiivi", form: "syksyyn" },
          { label: "Adessiivi", form: "syksyllä" },
          { label: "Ablatiivi", form: "syksyltä" },
          { label: "Allatiivi", form: "syksylle" },
          { label: "Essiivi", form: "syksynä" },
          { label: "Translatiivi", form: "syksyksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "syksyt" },
          { label: "Partitiivi", form: "syksyjä" },
          { label: "Genetiivi", form: "syksyjen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "syksyinen",
      en: "autumnal",
      taso: "B2",
      esim: { fi: "Ilma oli syksyinen ja kostea.", en: "The air was autumnal and damp." },
    },
    {
      fi: "syyskuu",
      en: "September",
      taso: "A2",
      esim: { fi: "Koulu alkaa syyskuussa.", en: "School starts in September." },
    },
    {
      fi: "ruska",
      en: "autumn foliage colours",
      taso: "B2",
      esim: { fi: "Lapin ruska on upea.", en: "Lapland's autumn colours are stunning." },
    },
  ],
  synonyymit: [
    { fi: "syysaika", en: "autumn time" },
  ],
  esimerkit: {
    A2: { fi: "Syksyllä lehdet putoavat.", en: "In autumn the leaves fall." },
    B1: { fi: "Syksy on minun lempivuodenaikani.", en: "Autumn is my favourite season." },
    B2: {
      fi: "Alkusyksystä illat alkavat pimetä nopeasti.",
      en: "In early autumn the evenings start to darken quickly.",
    },
  },
  updatedAt: "2026-06-07",
};

export default syksy;
