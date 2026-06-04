import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, no gradation, stem huonee-.
// Partitive sg huonetta, partitive pl huoneita, genitive pl huoneiden.
const huone: Word = {
  fi: "huone",
  slug: "huone",
  pos: "substantiivi (tyyppi: hame)",
  posClass: "substantiivi",
  level: "A1",
  en: "room",
  selitys:
    "Talon tai asunnon erillinen tila, esim. makuuhuone tai olohuone. Vartalo huonee-, ei astevaihtelua.",
  kuva: { emoji: "🛋️", alt: "huone – sisustettu huone" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; ei astevaihtelua (vartalo huonee-)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "huonetta", merkitys: "room (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "huoneen", merkitys: "of the room" },
      { sija: "partitiivi (mon.)", muoto: "huoneita", merkitys: "rooms (partitive pl.)" },
    ],
    huom:
      "Partitiivi huonetta (ei *huonetä). Vartalon e pitenee: huoneen, huoneessa. Monikon genetiivi huoneiden (myös huoneitten).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "huone" },
          { label: "Partitiivi", form: "huonetta" },
          { label: "Genetiivi", form: "huoneen" },
          { label: "Inessiivi", form: "huoneessa" },
          { label: "Elatiivi", form: "huoneesta" },
          { label: "Illatiivi", form: "huoneeseen" },
          { label: "Adessiivi", form: "huoneella" },
          { label: "Ablatiivi", form: "huoneelta" },
          { label: "Allatiivi", form: "huoneelle" },
          { label: "Essiivi", form: "huoneena" },
          { label: "Translatiivi", form: "huoneeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "huoneet" },
          { label: "Partitiivi", form: "huoneita" },
          { label: "Genetiivi", form: "huoneiden" },
          { label: "Illatiivi", form: "huoneisiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "makuuhuone",
      en: "bedroom",
      taso: "A2",
      esim: { fi: "Makuuhuone on yläkerrassa.", en: "The bedroom is upstairs." },
    },
    {
      fi: "olohuone",
      en: "living room",
      taso: "A2",
      esim: { fi: "Katsomme televisiota olohuoneessa.", en: "We watch television in the living room." },
    },
    {
      fi: "huoneisto",
      en: "apartment, flat",
      taso: "B1",
      esim: { fi: "He muuttivat suurempaan huoneistoon.", en: "They moved to a larger apartment." },
    },
  ],
  synonyymit: [
    { fi: "tila", en: "space, room (area)" },
    { fi: "kammari", en: "chamber (archaic/colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Tämä huone on valoisa.", en: "This room is bright." },
    B1: { fi: "Varasimme hotellista kahden hengen huoneen.", en: "We booked a double room at the hotel." },
    B2: {
      fi: "Huoneen sisustus oli moderni ja tyylikäs.",
      en: "The room's decor was modern and stylish.",
    },
  },
  updatedAt: "2026-06-04",
};

export default huone;
