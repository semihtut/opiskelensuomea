import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, no gradation, stem muisti-.
// Genitive muistin, partitive muistia, illative muistiin, partitive pl muisteja.
const muisti: Word = {
  fi: "muisti",
  slug: "muisti",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "B1",
  en: "memory (faculty); (computing) memory",
  selitys:
    "Kyky muistaa asioita, tai laitteen muisti: 'hyvä muisti'. Tyyppi 5, ei astevaihtelua. Partitiivin monikko muisteja. Johdettu verbistä muistaa. Vrt. muisto (a memory, recollection), muistutus.",
  kuva: { alt: "muisti – kyky muistaa asioita" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "muistin", merkitys: "of the memory" },
      { sija: "partitiivi (yks.)", muoto: "muistia", merkitys: "memory (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "muisteja", merkitys: "memories/memory units (partitive pl.)" },
    ],
    huom:
      "Tyyppi 5, ei astevaihtelua. HUOM ero: muisti = kyky muistaa / laitteen muisti; muisto = yksittäinen muistikuva (a memory). 'Painaa mieleen' = to commit to memory. Vrt. tietokoneen muisti.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "muisti" },
          { label: "Partitiivi", form: "muistia" },
          { label: "Genetiivi", form: "muistin" },
          { label: "Inessiivi", form: "muistissa" },
          { label: "Elatiivi", form: "muistista" },
          { label: "Illatiivi", form: "muistiin" },
          { label: "Adessiivi", form: "muistilla" },
          { label: "Ablatiivi", form: "muistilta" },
          { label: "Allatiivi", form: "muistille" },
          { label: "Essiivi", form: "muistina" },
          { label: "Translatiivi", form: "muistiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "muistit" },
          { label: "Partitiivi", form: "muisteja" },
          { label: "Genetiivi", form: "muistien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "muisto",
      en: "memory, recollection, souvenir",
      taso: "B1",
      esim: { fi: "Minulla on hyviä muistoja kesästä.", en: "I have good memories of the summer." },
    },
    {
      fi: "muistaa",
      en: "to remember",
      taso: "A2",
      esim: { fi: "Muistatko hänen nimensä?", en: "Do you remember his name?" },
    },
    {
      fi: "muistutus",
      en: "reminder",
      taso: "B1",
      esim: { fi: "Sain muistutuksen kokouksesta.", en: "I got a reminder about the meeting." },
    },
  ],
  synonyymit: [
    { fi: "muistikyky", en: "memory capacity" },
    { fi: "muisto", en: "recollection" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on huono muisti.", en: "I have a bad memory." },
    B1: { fi: "Painoin numeron muistiin.", en: "I committed the number to memory." },
    B2: {
      fi: "Tietokoneen muisti loppui kesken suuren tiedoston avaamisen.",
      en: "The computer's memory ran out while opening the large file.",
    },
  },
  updatedAt: "2026-06-06",
};

export default muisti;
