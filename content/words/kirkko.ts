import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, kk:k gradation. Genitive kirkon,
// partitive kirkkoa, illative kirkkoon, partitive pl kirkkoja.
const kirkko: Word = {
  fi: "kirkko",
  slug: "kirkko",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "church",
  selitys:
    "Kristillinen rakennus jumalanpalvelusta varten; myös kirkkoinstituutio. Tyyppi 1, astevaihtelu kk:k (kirkko → kirkon).",
  kuva: { emoji: "⛪", alt: "kirkko – kirkkorakennus torneineen" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu kk:k",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kirkon", merkitys: "of the church" },
      { sija: "partitiivi (yks.)", muoto: "kirkkoa", merkitys: "church (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kirkkoja", merkitys: "churches (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa kk → k: kirkon, kirkossa, kirkot. Vahva aste säilyy: kirkkoa, kirkkoon, kirkkoja.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kirkko" },
          { label: "Partitiivi", form: "kirkkoa" },
          { label: "Genetiivi", form: "kirkon" },
          { label: "Inessiivi", form: "kirkossa" },
          { label: "Elatiivi", form: "kirkosta" },
          { label: "Illatiivi", form: "kirkkoon" },
          { label: "Adessiivi", form: "kirkolla" },
          { label: "Ablatiivi", form: "kirkolta" },
          { label: "Allatiivi", form: "kirkolle" },
          { label: "Essiivi", form: "kirkkona" },
          { label: "Translatiivi", form: "kirkoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kirkot" },
          { label: "Partitiivi", form: "kirkkoja" },
          { label: "Genetiivi", form: "kirkkojen" },
          { label: "Inessiivi", form: "kirkoissa" },
          { label: "Illatiivi", form: "kirkkoihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kirkonkello",
      en: "church bell",
      taso: "B1",
      esim: { fi: "Kirkonkellot soivat sunnuntaina.", en: "The church bells ring on Sunday." },
    },
    {
      fi: "tuomiokirkko",
      en: "cathedral",
      taso: "B1",
      esim: { fi: "Helsingin tuomiokirkko on valkoinen.", en: "Helsinki Cathedral is white." },
    },
    {
      fi: "kirkollinen",
      en: "ecclesiastical, church-related",
      taso: "B2",
      esim: { fi: "Häät olivat kirkolliset.", en: "The wedding was a church wedding." },
    },
  ],
  synonyymit: [
    { fi: "temppeli", en: "temple" },
    { fi: "rukoushuone", en: "prayer house, chapel" },
  ],
  esimerkit: {
    A2: { fi: "Vanha kirkko on kaupungin keskustassa.", en: "The old church is in the city center." },
    B1: { fi: "Kävimme katsomassa kaunista kirkkoa.", en: "We went to see the beautiful church." },
    B2: {
      fi: "Kirkko rakennettiin yli sata vuotta sitten kivestä.",
      en: "The church was built of stone over a hundred years ago.",
    },
  },
  updatedAt: "2026-06-05",
};

export default kirkko;
