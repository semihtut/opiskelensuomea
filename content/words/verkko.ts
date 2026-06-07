import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, kk:k gradation, stem verkko- ~ verko-.
// Genitive verkon, partitive verkkoa, partitive pl verkkoja.
const verkko: Word = {
  fi: "verkko",
  slug: "verkko",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "net, network; the internet (verkossa)",
  selitys:
    "1) Verkkomainen rakenne tai kalaverkko. 2) Tietoverkko, internet: 'tieto löytyy verkosta'. Tyyppi 1/valo, astevaihtelu kk:k (verkko → verkon). Vrt. internet, netti, verkosto.",
  kuva: { emoji: "🕸️", alt: "verkko – verkkomainen rakenne tai tietoverkko" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu kk:k (vartalo verko-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "verkon", merkitys: "of the network" },
      { sija: "partitiivi (yks.)", muoto: "verkkoa", merkitys: "network (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "verkkoja", merkitys: "networks (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu kk:k: nominatiivi verkko (vahva kk), genetiivi verkon (heikko k). 'Verkossa' = online; 'verkosta' = from the internet. Vrt. netti = the net, verkosto = network (of people).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "verkko" },
          { label: "Partitiivi", form: "verkkoa" },
          { label: "Genetiivi", form: "verkon" },
          { label: "Inessiivi", form: "verkossa" },
          { label: "Elatiivi", form: "verkosta" },
          { label: "Illatiivi", form: "verkkoon" },
          { label: "Adessiivi", form: "verkolla" },
          { label: "Ablatiivi", form: "verkolta" },
          { label: "Allatiivi", form: "verkolle" },
          { label: "Essiivi", form: "verkkona" },
          { label: "Translatiivi", form: "verkoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "verkot" },
          { label: "Partitiivi", form: "verkkoja" },
          { label: "Genetiivi", form: "verkkojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "verkosto",
      en: "network (of people/things)",
      taso: "B2",
      esim: { fi: "Hänellä on laaja verkosto.", en: "He has a wide network." },
    },
    {
      fi: "verkkokauppa",
      en: "online shop",
      taso: "B1",
      esim: { fi: "Ostin sen verkkokaupasta.", en: "I bought it from an online shop." },
    },
  ],
  synonyymit: [
    { fi: "netti", en: "the net" },
    { fi: "internet", en: "internet" },
  ],
  esimerkit: {
    A2: { fi: "Etsin tietoa verkosta.", en: "I look for information on the internet." },
    B1: { fi: "Kurssi suoritetaan verkossa.", en: "The course is completed online." },
    B2: {
      fi: "Sähköverkon häiriö katkaisi sähköt koko kaupunginosasta.",
      en: "A fault in the power network cut electricity to the whole district.",
    },
  },
  updatedAt: "2026-06-07",
};

export default verkko;
