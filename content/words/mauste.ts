import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, no gradation, stem maustee-.
// Genitive mausteen, partitive maustetta, partitive pl mausteita.
const mauste: Word = {
  fi: "mauste",
  slug: "mauste",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B1",
  en: "spice, seasoning",
  selitys:
    "Aine, joka antaa ruoalle makua: 'lisätä mausteita'. Tyyppi 48/hame, ei astevaihtelua. Johdettu verbistä maustaa. Vrt. maku, maustaa, suola.",
  kuva: { alt: "mauste – aine joka antaa ruoalle makua" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; ei astevaihtelua (vartalo maustee-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "mausteen", merkitys: "of the spice" },
      { sija: "partitiivi (yks.)", muoto: "maustetta", merkitys: "spice (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "mausteita", merkitys: "spices (partitive pl.)" },
    ],
    huom:
      "Tyyppi 48/hame: ei astevaihtelua, vartalo maustee- (mausteen, mausteella), partitiivi maustetta, partitiivin monikko mausteita. Sanasta maustaa = to season. Vrt. maku, pippuri, suola.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "mauste" },
          { label: "Partitiivi", form: "maustetta" },
          { label: "Genetiivi", form: "mausteen" },
          { label: "Inessiivi", form: "mausteessa" },
          { label: "Elatiivi", form: "mausteesta" },
          { label: "Illatiivi", form: "mausteeseen" },
          { label: "Adessiivi", form: "mausteella" },
          { label: "Ablatiivi", form: "mausteelta" },
          { label: "Allatiivi", form: "mausteelle" },
          { label: "Essiivi", form: "mausteena" },
          { label: "Translatiivi", form: "mausteeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "mausteet" },
          { label: "Partitiivi", form: "mausteita" },
          { label: "Genetiivi", form: "mausteiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "maustaa",
      en: "to season, spice",
      taso: "B1",
      esim: { fi: "Mausta keitto suolalla.", en: "Season the soup with salt." },
    },
    {
      fi: "mausteinen",
      en: "spicy",
      taso: "B2",
      esim: { fi: "Ruoka oli liian mausteista.", en: "The food was too spicy." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Lisää vähän mausteita.", en: "Add a little spice." },
    B1: { fi: "Tässä kaupassa on paljon mausteita.", en: "This shop has many spices." },
    B2: {
      fi: "Oikeat mausteet tekevät yksinkertaisestakin ruoasta mielenkiintoisen.",
      en: "The right spices make even a simple dish interesting.",
    },
  },
  updatedAt: "2026-06-07",
};

export default mauste;
