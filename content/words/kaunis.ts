import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 41/vieras, no gradation, consonant stem.
// Genitive kauniin, partitive kaunista, illative kauniiseen, partitive pl kauniita.
const kaunis: Word = {
  fi: "kaunis",
  slug: "kaunis",
  pos: "adjektiivi (tyyppi 41/vieras)",
  posClass: "adjektiivi",
  level: "A1",
  en: "beautiful, pretty",
  selitys:
    "Silmää tai mieltä miellyttävä. Tyyppi 41, ei astevaihtelua, konsonanttivartalo (kaunista). Vastakohta ruma.",
  kuva: { alt: "kaunis – kaunis kukka" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 41/vieras; ei astevaihtelua, konsonanttivartalo",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kauniin", merkitys: "of the beautiful" },
      { sija: "partitiivi (yks.)", muoto: "kaunista", merkitys: "beautiful (partitive)" },
      { sija: "komparatiivi", muoto: "kauniimpi", merkitys: "more beautiful" },
    ],
    huom:
      "Vokaalivartalo kaunii-: kauniin, kauniiseen, kauniita. Konsonanttivartalo näkyy partitiivissa kaunista. Superlatiivi kaunein.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "kaunis" },
          { label: "Partitiivi", form: "kaunista" },
          { label: "Genetiivi", form: "kauniin" },
          { label: "Inessiivi", form: "kauniissa" },
          { label: "Illatiivi", form: "kauniiseen" },
          { label: "Adessiivi", form: "kauniilla" },
          { label: "Essiivi", form: "kauniina" },
          { label: "Translatiivi", form: "kauniiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kauniit" },
          { label: "Partitiivi", form: "kauniita" },
          { label: "Genetiivi", form: "kauniiden" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "kauniimpi" },
          { label: "Komparatiivi (gen.)", form: "kauniimman" },
          { label: "Komparatiivi (part.)", form: "kauniimpaa" },
          { label: "Superlatiivi (nom.)", form: "kaunein" },
          { label: "Superlatiivi (gen.)", form: "kauneimman" },
          { label: "Superlatiivi (part.)", form: "kauneinta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kauneus",
      en: "beauty",
      taso: "B1",
      esim: { fi: "Luonnon kauneus hämmästytti.", en: "The beauty of nature amazed us." },
    },
    {
      fi: "kauniisti",
      en: "beautifully, nicely",
      taso: "B1",
      esim: { fi: "Hän laulaa kauniisti.", en: "She sings beautifully." },
    },
    {
      fi: "kaunistaa",
      en: "to beautify, adorn",
      taso: "B2",
      esim: { fi: "Kukat kaunistavat huonetta.", en: "The flowers beautify the room." },
    },
  ],
  synonyymit: [
    { fi: "nätti", en: "pretty (colloquial)" },
    { fi: "soma", en: "cute, neat" },
  ],
  esimerkit: {
    A2: { fi: "Tämä on kaunis kukka.", en: "This is a beautiful flower." },
    B1: { fi: "Näimme kauniin auringonlaskun.", en: "We saw a beautiful sunset." },
    B2: {
      fi: "Se oli kaunein maisema, jonka olen koskaan nähnyt.",
      en: "It was the most beautiful landscape I have ever seen.",
    },
  },
  updatedAt: "2026-06-04",
};

export default kaunis;
