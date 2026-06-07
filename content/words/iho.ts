import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem iho-.
// Genitive ihon, partitive ihoa, partitive pl ihoja.
const iho: Word = {
  fi: "iho",
  slug: "iho",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "skin",
  selitys:
    "Kehoa peittävä elin: 'kuiva iho', 'herkkä iho'. Tyyppi 1/valo, ei astevaihtelua. Vrt. keho, ihottuma, ihonväri.",
  kuva: { emoji: "🧴", alt: "iho – kehoa peittävä elin" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua (vartalo iho-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ihon", merkitys: "of the skin" },
      { sija: "partitiivi (yks.)", muoto: "ihoa", merkitys: "skin (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "ihoja", merkitys: "skins (partitive pl.)" },
    ],
    huom:
      "Tyyppi 1/valo: ei astevaihtelua. Yleensä yksikössä. Ihonväri, ihovoide. Vrt. keho, iho-ongelma.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "iho" },
          { label: "Partitiivi", form: "ihoa" },
          { label: "Genetiivi", form: "ihon" },
          { label: "Inessiivi", form: "ihossa" },
          { label: "Elatiivi", form: "ihosta" },
          { label: "Illatiivi", form: "ihoon" },
          { label: "Adessiivi", form: "iholla" },
          { label: "Ablatiivi", form: "iholta" },
          { label: "Allatiivi", form: "iholle" },
          { label: "Essiivi", form: "ihona" },
          { label: "Translatiivi", form: "ihoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ihot" },
          { label: "Partitiivi", form: "ihoja" },
          { label: "Genetiivi", form: "ihojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ihonväri",
      en: "skin colour",
      taso: "B1",
      esim: { fi: "Ihonväri ei kerro ihmisestä mitään.", en: "Skin colour tells nothing about a person." },
    },
    {
      fi: "ihovoide",
      en: "skin cream, lotion",
      taso: "B1",
      esim: { fi: "Käytän ihovoidetta talvella.", en: "I use skin cream in winter." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Minulla on kuiva iho.", en: "I have dry skin." },
    B1: { fi: "Aurinko polttaa herkän ihon nopeasti.", en: "The sun burns sensitive skin quickly." },
    B2: {
      fi: "Riittävä unen määrä näkyy myös ihon kunnossa.",
      en: "A sufficient amount of sleep shows in the condition of the skin too.",
    },
  },
  updatedAt: "2026-06-07",
};

export default iho;
