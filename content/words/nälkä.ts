import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, k:∅ gradation (lk:l), stem nälkä- ~ nälä-.
// Genitive nälän, partitive nälkää, illative nälkään, partitive pl nälkiä. Usually singular.
const nälkä: Word = {
  fi: "nälkä",
  slug: "nälkä",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A2",
  en: "hunger",
  selitys:
    "Tunne, kun keho tarvitsee ruokaa: 'minulla on nälkä'. Tyyppi 10, astevaihtelu k:∅ (nälkä → nälän). Yleensä yksikössä. Vrt. nälkäinen (hungry), nälkiintyä, nälkälakko.",
  kuva: { alt: "nälkä – tunne, kun keho tarvitsee ruokaa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; astevaihtelu k:∅ (nälkä ↔ nälä-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "nälän", merkitys: "of hunger" },
      { sija: "partitiivi (yks.)", muoto: "nälkää", merkitys: "hunger (partitive)" },
      { sija: "illatiivi (yks.)", muoto: "nälkään", merkitys: "into hunger" },
    ],
    huom:
      "Heikossa asteessa lk → l: genetiivi nälän, adessiivi nälällä. Vahva aste säilyy partitiivissa nälkää. Yleensä yksikössä. 'Minulla on nälkä' = I am hungry. Vrt. nälkäinen = hungry.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "nälkä" },
          { label: "Partitiivi", form: "nälkää" },
          { label: "Genetiivi", form: "nälän" },
          { label: "Inessiivi", form: "nälässä" },
          { label: "Elatiivi", form: "nälästä" },
          { label: "Illatiivi", form: "nälkään" },
          { label: "Adessiivi", form: "nälällä" },
          { label: "Ablatiivi", form: "nälältä" },
          { label: "Allatiivi", form: "nälälle" },
          { label: "Essiivi", form: "nälkänä" },
          { label: "Translatiivi", form: "näläksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "nälät" },
          { label: "Partitiivi", form: "nälkiä" },
          { label: "Genetiivi", form: "nälkien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "nälkäinen",
      en: "hungry",
      taso: "A2",
      esim: { fi: "Olen kovin nälkäinen.", en: "I'm very hungry." },
    },
    {
      fi: "nälkälakko",
      en: "hunger strike",
      taso: "B2",
      esim: { fi: "Vangit aloittivat nälkälakon.", en: "The prisoners started a hunger strike." },
    },
    {
      fi: "tiedonnälkä",
      en: "thirst for knowledge",
      taso: "B2",
      esim: { fi: "Lapsella on suuri tiedonnälkä.", en: "The child has a great thirst for knowledge." },
    },
  ],
  synonyymit: [
    { fi: "ruokahalu", en: "appetite" },
    { fi: "näläntunne", en: "feeling of hunger" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on nälkä.", en: "I am hungry." },
    B1: { fi: "Nälkä yllätti kesken työpäivän.", en: "Hunger struck in the middle of the workday." },
    B2: {
      fi: "Kova nälkä saa keskittymisen herpaantumaan.",
      en: "Severe hunger makes concentration slip.",
    },
  },
  updatedAt: "2026-06-07",
};

export default nälkä;
