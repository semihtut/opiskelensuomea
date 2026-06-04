import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, NO gradation. Genitive värin,
// partitive väriä, illative väriin, partitive pl värejä.
const vari: Word = {
  fi: "väri",
  slug: "väri",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A1",
  en: "color",
  selitys:
    "Valon aistittava ominaisuus (esim. punainen); myös maali tai pigmentti. Tyyppi 5, EI astevaihtelua (väri → värin).",
  kuva: { emoji: "🎨", alt: "väri – värit ja paletti" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "värin", merkitys: "of the color" },
      { sija: "partitiivi (yks.)", muoto: "väriä", merkitys: "color (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "värejä", merkitys: "colors (partitive pl.)" },
    ],
    huom:
      "EI astevaihtelua: väri → värin (r ei vaihtele). Monikon partitiivi värejä. 'Minkä värinen?' = what color?",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "väri" },
          { label: "Partitiivi", form: "väriä" },
          { label: "Genetiivi", form: "värin" },
          { label: "Inessiivi", form: "värissä" },
          { label: "Elatiivi", form: "väristä" },
          { label: "Illatiivi", form: "väriin" },
          { label: "Adessiivi", form: "värillä" },
          { label: "Ablatiivi", form: "väriltä" },
          { label: "Allatiivi", form: "värille" },
          { label: "Essiivi", form: "värinä" },
          { label: "Translatiivi", form: "väriksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "värit" },
          { label: "Partitiivi", form: "värejä" },
          { label: "Genetiivi", form: "värien" },
          { label: "Inessiivi", form: "väreissä" },
          { label: "Illatiivi", form: "väreihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "värikäs",
      en: "colorful",
      taso: "B1",
      esim: { fi: "Kuva on hyvin värikäs.", en: "The picture is very colorful." },
    },
    {
      fi: "värittää",
      en: "to color (in)",
      taso: "B1",
      esim: { fi: "Lapsi värittää kuvaa.", en: "The child is coloring a picture." },
    },
    {
      fi: "vesiväri",
      en: "watercolor",
      taso: "B1",
      esim: { fi: "Maalasin vesiväreillä.", en: "I painted with watercolors." },
    },
  ],
  synonyymit: [
    { fi: "sävy", en: "hue, shade" },
    { fi: "maali", en: "paint" },
  ],
  esimerkit: {
    A2: { fi: "Mikä on lempivärisi?", en: "What is your favorite color?" },
    B1: { fi: "Tämän auton väri on kaunis.", en: "This car's color is beautiful." },
    B2: {
      fi: "Syksyllä metsä loistaa lämpimissä väreissä.",
      en: "In autumn the forest glows in warm colors.",
    },
  },
  updatedAt: "2026-06-04",
};

export default vari;
