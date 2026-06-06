import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 41/vieras, kk:k gradation, stem asukas ~ asukkaa-.
// Genitive asukkaan, partitive asukasta, illative asukkaaseen, partitive pl asukkaita.
const asukas: Word = {
  fi: "asukas",
  slug: "asukas",
  pos: "substantiivi (tyyppi 41/vieras)",
  posClass: "substantiivi",
  level: "B1",
  en: "resident, inhabitant",
  selitys:
    "Henkilö, joka asuu jossakin paikassa: 'kaupungin asukas'. Tyyppi 41, astevaihtelu k:kk (asukas → asukkaan). Partitiivin monikko asukkaita. Johdettu verbistä asua. Vrt. asukasluku, asunto.",
  kuva: { emoji: "🏘️", alt: "asukas – henkilö, joka asuu jossakin paikassa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 41/vieras; astevaihtelu k:kk (asukas ↔ asukkaa-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "asukkaan", merkitys: "of the resident" },
      { sija: "partitiivi (yks.)", muoto: "asukasta", merkitys: "resident (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "asukkaita", merkitys: "residents (partitive pl.)" },
    ],
    huom:
      "Nominatiivi asukas (yksi k), obliikvimuodoissa kk: genetiivi asukkaan, monikon partitiivi asukkaita. Vrt. asiakas → asiakkaan (sama tyyppi). Johdettu verbistä asua.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "asukas" },
          { label: "Partitiivi", form: "asukasta" },
          { label: "Genetiivi", form: "asukkaan" },
          { label: "Inessiivi", form: "asukkaassa" },
          { label: "Elatiivi", form: "asukkaasta" },
          { label: "Illatiivi", form: "asukkaaseen" },
          { label: "Adessiivi", form: "asukkaalla" },
          { label: "Ablatiivi", form: "asukkaalta" },
          { label: "Allatiivi", form: "asukkaalle" },
          { label: "Essiivi", form: "asukkaana" },
          { label: "Translatiivi", form: "asukkaaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "asukkaat" },
          { label: "Partitiivi", form: "asukkaita" },
          { label: "Genetiivi", form: "asukkaiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "asukasluku",
      en: "population (number of inhabitants)",
      taso: "B2",
      esim: { fi: "Kaupungin asukasluku kasvaa.", en: "The city's population is growing." },
    },
    {
      fi: "asua",
      en: "to live, reside",
      taso: "A2",
      esim: { fi: "Asun keskustassa.", en: "I live in the centre." },
    },
    {
      fi: "asukasyhdistys",
      en: "residents' association",
      taso: "B2",
      esim: { fi: "Asukasyhdistys järjesti talkoot.", en: "The residents' association organized a working bee." },
    },
  ],
  synonyymit: [
    { fi: "asuja", en: "occupant" },
    { fi: "elänikki", en: "inhabitant (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Talon asukkaat tunsivat toisensa.", en: "The building's residents knew each other." },
    B1: { fi: "Saarella on vain muutama asukas.", en: "The island has only a few inhabitants." },
    B2: {
      fi: "Uudet asukkaat toivat kortteliin uutta elämää.",
      en: "The new residents brought new life to the block.",
    },
  },
  updatedAt: "2026-06-06",
};

export default asukas;
