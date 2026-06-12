import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, no gradation, stem lausee-.
// Genitive lauseen, partitive lausetta, partitive pl lauseita.
const lause: Word = {
  fi: "lause",
  slug: "lause",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "A2",
  en: "sentence, clause",
  selitys:
    "Sanoista koostuva kieliopillinen kokonaisuus, jossa on yleensä subjekti ja predikaatti: 'kirjoita lause'. Tyyppi 48/hame, ei astevaihtelua. Johdettu verbistä lausua. HUOM: kieliopissa virke = kokonainen lause, lause = clause. Vrt. lausua, virke, sana.",
  kuva: { alt: "lause – sanoista koostuva kieliopillinen kokonaisuus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; ei astevaihtelua (vartalo lausee-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "lauseen", merkitys: "of the sentence" },
      { sija: "partitiivi (yks.)", muoto: "lausetta", merkitys: "sentence (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "lauseita", merkitys: "sentences (partitive pl.)" },
    ],
    huom:
      "Tyyppi 48/hame: ei astevaihtelua, vartalo lausee- (lauseen, lauseella), partitiivi lausetta, partitiivin monikko lauseita. Johdettu verbistä lausua. Vrt. virke = full sentence, lause = clause.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "lause" },
          { label: "Partitiivi", form: "lausetta" },
          { label: "Genetiivi", form: "lauseen" },
          { label: "Inessiivi", form: "lauseessa" },
          { label: "Elatiivi", form: "lauseesta" },
          { label: "Illatiivi", form: "lauseeseen" },
          { label: "Adessiivi", form: "lauseella" },
          { label: "Ablatiivi", form: "lauseelta" },
          { label: "Allatiivi", form: "lauseelle" },
          { label: "Essiivi", form: "lauseena" },
          { label: "Translatiivi", form: "lauseeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "lauseet" },
          { label: "Partitiivi", form: "lauseita" },
          { label: "Genetiivi", form: "lauseiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lausua",
      en: "to utter, pronounce, recite",
      taso: "B2",
      esim: { fi: "Hän lausui runon ulkoa.", en: "She recited the poem by heart." },
    },
    {
      fi: "sivulause",
      en: "subordinate clause",
      taso: "B2",
      esim: { fi: "Sivulause alkaa usein sanalla 'että'.", en: "A subordinate clause often begins with 'että'." },
    },
  ],
  synonyymit: [
    { fi: "virke", en: "sentence (full)" },
  ],
  esimerkit: {
    A2: { fi: "Tämä lause on lyhyt.", en: "This sentence is short." },
    B1: { fi: "Kirjoita lause suomeksi.", en: "Write a sentence in Finnish." },
    B2: {
      fi: "Pitkä lause kannattaa joskus jakaa kahteen lyhyempään.",
      en: "A long sentence is sometimes worth splitting into two shorter ones.",
    },
  },
  updatedAt: "2026-06-07",
};

export default lause;
