import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, tt:t gradation, stem matto- ~ mato-.
// Genitive maton, partitive mattoa, illative mattoon, partitive pl mattoja.
const matto: Word = {
  fi: "matto",
  slug: "matto",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "rug, carpet, mat",
  selitys:
    "Lattialla oleva pehmeä peite: 'pyyhi jalat mattoon'. Tyyppi 1, astevaihtelu tt:t (matto → maton). Partitiivin monikko mattoja. Vrt. ovimatto (doormat), kokolattiamatto.",
  kuva: { alt: "matto – lattialla oleva pehmeä peite" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu tt:t (matto ↔ mato-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "maton", merkitys: "of the rug" },
      { sija: "partitiivi (yks.)", muoto: "mattoa", merkitys: "rug (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "mattoja", merkitys: "rugs (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa tt → t: genetiivi maton, adessiivi matolla. Vahva aste tt säilyy partitiivissa mattoa ja monikossa mattoja. HUOM ero: maton (rug) vs. maton (adj. mato = worm gen.). Vrt. ovimatto = doormat.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "matto" },
          { label: "Partitiivi", form: "mattoa" },
          { label: "Genetiivi", form: "maton" },
          { label: "Inessiivi", form: "matossa" },
          { label: "Elatiivi", form: "matosta" },
          { label: "Illatiivi", form: "mattoon" },
          { label: "Adessiivi", form: "matolla" },
          { label: "Ablatiivi", form: "matolta" },
          { label: "Allatiivi", form: "matolle" },
          { label: "Essiivi", form: "mattona" },
          { label: "Translatiivi", form: "matoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "matot" },
          { label: "Partitiivi", form: "mattoja" },
          { label: "Genetiivi", form: "mattojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ovimatto",
      en: "doormat",
      taso: "B1",
      esim: { fi: "Pyyhi kengät ovimattoon.", en: "Wipe your shoes on the doormat." },
    },
    {
      fi: "kokolattiamatto",
      en: "wall-to-wall carpet",
      taso: "B2",
      esim: { fi: "Olohuoneessa on kokolattiamatto.", en: "The living room has wall-to-wall carpet." },
    },
    {
      fi: "räsymatto",
      en: "rag rug",
      taso: "B2",
      esim: { fi: "Mummo kutoi räsymaton.", en: "Grandma wove a rag rug." },
    },
  ],
  synonyymit: [
    { fi: "ryijy", en: "rya rug" },
    { fi: "kynnysmatto", en: "threshold mat" },
  ],
  esimerkit: {
    A2: { fi: "Lattialla on punainen matto.", en: "There is a red rug on the floor." },
    B1: { fi: "Vein maton ulos tuulettumaan.", en: "I took the rug outside to air." },
    B2: {
      fi: "Paksu matto vaimentaa ääniä ja tekee huoneesta kodikkaamman.",
      en: "A thick rug dampens sounds and makes the room cosier.",
    },
  },
  updatedAt: "2026-06-06",
};

export default matto;
