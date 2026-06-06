import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, nt:nn gradation, stem ranta- ~ ranna-.
// Genitive rannan, partitive rantaa, illative rantaan, partitive pl rantoja.
const ranta: Word = {
  fi: "ranta",
  slug: "ranta",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A2",
  en: "shore, beach, bank",
  selitys:
    "Veden ja maan raja: 'mennä rannalle'. Tyyppi 9, astevaihtelu nt:nn (ranta → rannan). Partitiivin monikko rantoja. Vrt. uimaranta (swimming beach), rannikko (coast).",
  kuva: { emoji: "🏖️", alt: "ranta – veden ja maan raja" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; astevaihtelu nt:nn (ranta ↔ ranna-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "rannan", merkitys: "of the shore" },
      { sija: "partitiivi (yks.)", muoto: "rantaa", merkitys: "shore (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "rantoja", merkitys: "shores (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa nt → nn: genetiivi rannan, adessiivi rannalla ('rannalla' = at the beach). Vahva aste nt säilyy partitiivissa rantaa ja illatiivissa rantaan. Vrt. rannikko = coast.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ranta" },
          { label: "Partitiivi", form: "rantaa" },
          { label: "Genetiivi", form: "rannan" },
          { label: "Inessiivi", form: "rannassa" },
          { label: "Elatiivi", form: "rannasta" },
          { label: "Illatiivi", form: "rantaan" },
          { label: "Adessiivi", form: "rannalla" },
          { label: "Ablatiivi", form: "rannalta" },
          { label: "Allatiivi", form: "rannalle" },
          { label: "Essiivi", form: "rantana" },
          { label: "Translatiivi", form: "rannaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "rannat" },
          { label: "Partitiivi", form: "rantoja" },
          { label: "Genetiivi", form: "rantojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "uimaranta",
      en: "swimming beach",
      taso: "A2",
      esim: { fi: "Uimaranta oli täynnä ihmisiä.", en: "The swimming beach was full of people." },
    },
    {
      fi: "rannikko",
      en: "coast, coastline",
      taso: "B2",
      esim: { fi: "Asumme lähellä rannikkoa.", en: "We live near the coast." },
    },
    {
      fi: "rantaviiva",
      en: "shoreline",
      taso: "B2",
      esim: { fi: "Järven rantaviiva on pitkä.", en: "The lake's shoreline is long." },
    },
  ],
  synonyymit: [
    { fi: "rannikko", en: "coast" },
    { fi: "ranta-alue", en: "shore area" },
  ],
  esimerkit: {
    A2: { fi: "Mennään rannalle uimaan.", en: "Let's go to the beach to swim." },
    B1: { fi: "Lapset leikkivät hiekkarannalla.", en: "The children play on the sandy beach." },
    B2: {
      fi: "Mökki sijaitsee järven rannalla rauhallisessa paikassa.",
      en: "The cottage is located on the lakeshore in a peaceful spot.",
    },
  },
  updatedAt: "2026-06-06",
};

export default ranta;
