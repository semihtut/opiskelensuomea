import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 2/palvelu, no gradation, stem seikkailu-.
// Genitive seikkailun, partitive seikkailua, illative seikkailuun, partitive pl seikkailuja.
const seikkailu: Word = {
  fi: "seikkailu",
  slug: "seikkailu",
  pos: "substantiivi (tyyppi 2/palvelu)",
  posClass: "substantiivi",
  level: "B1",
  en: "adventure",
  selitys:
    "Jännittävä ja tavallisuudesta poikkeava kokemus: 'jännittävä seikkailu'. Tyyppi 2, ei astevaihtelua. Partitiivin monikko seikkailuja. Johdettu verbistä seikkailla. Vrt. seikkailukirja, seikkailla.",
  kuva: { emoji: "🧭", alt: "seikkailu – jännittävä, tavallisuudesta poikkeava kokemus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 2/palvelu; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "seikkailun", merkitys: "of the adventure" },
      { sija: "partitiivi (yks.)", muoto: "seikkailua", merkitys: "adventure (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "seikkailuja", merkitys: "adventures (partitive pl.)" },
    ],
    huom:
      "Tyyppi 2, ei astevaihtelua. Partitiivin monikko seikkailuja. Johdettu verbistä seikkailla = to adventure. Vrt. seikkailukirja = adventure book, seikkailunhaluinen = adventurous.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "seikkailu" },
          { label: "Partitiivi", form: "seikkailua" },
          { label: "Genetiivi", form: "seikkailun" },
          { label: "Inessiivi", form: "seikkailussa" },
          { label: "Elatiivi", form: "seikkailusta" },
          { label: "Illatiivi", form: "seikkailuun" },
          { label: "Adessiivi", form: "seikkailulla" },
          { label: "Ablatiivi", form: "seikkailulta" },
          { label: "Allatiivi", form: "seikkailulle" },
          { label: "Essiivi", form: "seikkailuna" },
          { label: "Translatiivi", form: "seikkailuksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "seikkailut" },
          { label: "Partitiivi", form: "seikkailuja" },
          { label: "Genetiivi", form: "seikkailujen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "seikkailla",
      en: "to adventure, roam",
      taso: "B2",
      esim: { fi: "Lapset seikkailivat metsässä.", en: "The children adventured in the forest." },
    },
    {
      fi: "seikkailukirja",
      en: "adventure book",
      taso: "B1",
      esim: { fi: "Luin jännittävän seikkailukirjan.", en: "I read an exciting adventure book." },
    },
    {
      fi: "seikkailunhaluinen",
      en: "adventurous",
      taso: "B2",
      esim: { fi: "Hän on seikkailunhaluinen matkailija.", en: "She is an adventurous traveller." },
    },
  ],
  synonyymit: [
    { fi: "elämys", en: "experience, thrill" },
    { fi: "retki", en: "outing, expedition" },
  ],
  esimerkit: {
    A2: { fi: "Matka oli iso seikkailu.", en: "The trip was a big adventure." },
    B1: { fi: "Lähdimme seikkailuun vuorille.", en: "We set off on an adventure in the mountains." },
    B2: {
      fi: "Joskus paras seikkailu alkaa täysin suunnittelematta.",
      en: "Sometimes the best adventure begins completely unplanned.",
    },
  },
  updatedAt: "2026-06-07",
};

export default seikkailu;
