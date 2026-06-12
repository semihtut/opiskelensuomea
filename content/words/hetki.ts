import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 7/ovi, NO gradation, stem hetke-.
// Genitive hetken, partitive hetkeä, illative hetkeen, partitive pl hetkiä.
const hetki: Word = {
  fi: "hetki",
  slug: "hetki",
  pos: "substantiivi (tyyppi 7/ovi)",
  posClass: "substantiivi",
  level: "A2",
  en: "moment, instant, while",
  selitys:
    "Lyhyt ajanjakso tai yksittäinen ajan kohta: 'odota hetki'. Tyyppi 7, ei astevaihtelua (tk säilyy). Partitiivin monikko hetkiä. Vrt. hetkinen (just a moment), hetkellinen (momentary).",
  kuva: { alt: "hetki – lyhyt ajanjakso tai ajan kohta" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 7/ovi; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "hetken", merkitys: "of the moment" },
      { sija: "partitiivi (yks.)", muoto: "hetkeä", merkitys: "moment (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "hetkiä", merkitys: "moments (partitive pl.)" },
    ],
    huom:
      "Tyyppi 7, ei astevaihtelua (tk säilyy kaikissa muodoissa). 'Hetken päästä' = in a moment; 'odota hetki' = wait a moment. Vrt. hetkinen = just a sec, hetkellinen = momentary.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "hetki" },
          { label: "Partitiivi", form: "hetkeä" },
          { label: "Genetiivi", form: "hetken" },
          { label: "Inessiivi", form: "hetkessä" },
          { label: "Elatiivi", form: "hetkestä" },
          { label: "Illatiivi", form: "hetkeen" },
          { label: "Adessiivi", form: "hetkellä" },
          { label: "Ablatiivi", form: "hetkeltä" },
          { label: "Allatiivi", form: "hetkelle" },
          { label: "Essiivi", form: "hetkenä" },
          { label: "Translatiivi", form: "hetkeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "hetket" },
          { label: "Partitiivi", form: "hetkiä" },
          { label: "Genetiivi", form: "hetkien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hetkinen",
      en: "just a moment",
      taso: "A2",
      esim: { fi: "Hetkinen, etsin avaimet.", en: "Just a moment, I'll find the keys." },
    },
    {
      fi: "hetkellinen",
      en: "momentary, fleeting",
      taso: "B2",
      esim: { fi: "Se oli vain hetkellinen tunne.", en: "It was just a fleeting feeling." },
    },
    {
      fi: "silmänräpäys",
      en: "instant, blink of an eye",
      taso: "B2",
      esim: { fi: "Kaikki muuttui silmänräpäyksessä.", en: "Everything changed in an instant." },
    },
  ],
  synonyymit: [
    { fi: "tuokio", en: "moment, while" },
    { fi: "silmänräpäys", en: "instant" },
  ],
  esimerkit: {
    A2: { fi: "Odota hetki!", en: "Wait a moment!" },
    B1: { fi: "Hetken päästä juna saapui.", en: "A moment later the train arrived." },
    B2: {
      fi: "Nauti tästä hetkestä, sillä se ei koskaan palaa samanlaisena.",
      en: "Enjoy this moment, because it will never return the same.",
    },
  },
  updatedAt: "2026-06-06",
};

export default hetki;
