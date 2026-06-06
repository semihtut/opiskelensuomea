import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, no gradation, stem viesti-.
// Genitive viestin, partitive viestiä, illative viestiin, partitive pl viestejä.
const viesti: Word = {
  fi: "viesti",
  slug: "viesti",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A2",
  en: "message",
  selitys:
    "Lähetetty tieto tai sanoma: 'lähetin viestin'. Tyyppi 5, ei astevaihtelua. Partitiivin monikko viestejä. Vrt. viestiä (to communicate), tekstiviesti (text message).",
  kuva: { emoji: "💬", alt: "viesti – lähetetty sanoma" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "viestin", merkitys: "of the message" },
      { sija: "partitiivi (yks.)", muoto: "viestiä", merkitys: "message (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "viestejä", merkitys: "messages (partitive pl.)" },
    ],
    huom:
      "Partitiivin monikko viestejä (e-vartalo monikossa). 'Lähettää / saada viesti.' Vrt. tekstiviesti = text message, viestintä = communication.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "viesti" },
          { label: "Partitiivi", form: "viestiä" },
          { label: "Genetiivi", form: "viestin" },
          { label: "Inessiivi", form: "viestissä" },
          { label: "Elatiivi", form: "viestistä" },
          { label: "Illatiivi", form: "viestiin" },
          { label: "Adessiivi", form: "viestillä" },
          { label: "Ablatiivi", form: "viestiltä" },
          { label: "Allatiivi", form: "viestille" },
          { label: "Essiivi", form: "viestinä" },
          { label: "Translatiivi", form: "viestiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "viestit" },
          { label: "Partitiivi", form: "viestejä" },
          { label: "Genetiivi", form: "viestien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tekstiviesti",
      en: "text message, SMS",
      taso: "A2",
      esim: { fi: "Lähetä minulle tekstiviesti.", en: "Send me a text message." },
    },
    {
      fi: "viestintä",
      en: "communication",
      taso: "B1",
      esim: { fi: "Hyvä viestintä on tärkeää työssä.", en: "Good communication is important at work." },
    },
    {
      fi: "viestiä",
      en: "to communicate, signal",
      taso: "B2",
      esim: { fi: "Ele viesti pettymystä.", en: "The gesture signaled disappointment." },
    },
  ],
  synonyymit: [
    { fi: "sanoma", en: "message, tidings" },
    { fi: "tiedote", en: "bulletin" },
  ],
  esimerkit: {
    A2: { fi: "Sain sinulta viestin.", en: "I got a message from you." },
    B1: { fi: "Vastaan viestiin heti, kun ehdin.", en: "I'll reply to the message as soon as I can." },
    B2: {
      fi: "Mainoksen viesti oli selvä: laatu ennen hintaa.",
      en: "The ad's message was clear: quality before price.",
    },
  },
  updatedAt: "2026-06-06",
};

export default viesti;
