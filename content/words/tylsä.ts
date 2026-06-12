import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem tylsä-.
// Genitive tylsän, partitive tylsää, partitive pl tylsiä. Comparative tylsempi, superlative tylsin.
const tylsä: Word = {
  fi: "tylsä",
  slug: "tylsä",
  pos: "adjektiivi (tyyppi 10/koira)",
  posClass: "adjektiivi",
  level: "A2",
  en: "boring; blunt, dull",
  selitys:
    "Tylsistyttävä ja kiinnostamaton, tai terältään tylppä: 'tylsä elokuva' / 'tylsä veitsi'. Tyyppi 10, ei astevaihtelua. Partitiivin monikko tylsiä. Vertailu tylsempi – tylsin. Vastakohta kiinnostava / terävä.",
  kuva: { alt: "tylsä – kiinnostamaton tai terältään tylppä" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tylsän", merkitys: "of the boring (one)" },
      { sija: "partitiivi (yks.)", muoto: "tylsää", merkitys: "boring (partitive)" },
      { sija: "komparatiivi", muoto: "tylsempi", merkitys: "more boring" },
    ],
    huom:
      "Partitiivin monikko tylsiä. Vertailu tylsempi – tylsin. Kaksi merkitystä: 'boring' (kiinnostamaton) ja 'blunt/dull' (esim. veitsi). Vastakohdat kiinnostava ja terävä.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tylsä" },
          { label: "Partitiivi", form: "tylsää" },
          { label: "Genetiivi", form: "tylsän" },
          { label: "Inessiivi", form: "tylsässä" },
          { label: "Elatiivi", form: "tylsästä" },
          { label: "Illatiivi", form: "tylsään" },
          { label: "Adessiivi", form: "tylsällä" },
          { label: "Ablatiivi", form: "tylsältä" },
          { label: "Allatiivi", form: "tylsälle" },
          { label: "Essiivi", form: "tylsänä" },
          { label: "Translatiivi", form: "tylsäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tylsät" },
          { label: "Partitiivi", form: "tylsiä" },
          { label: "Genetiivi", form: "tylsien" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Perusaste", form: "tylsä" },
          { label: "Komparatiivi", form: "tylsempi" },
          { label: "Superlatiivi", form: "tylsin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tylsistyä",
      en: "to get bored",
      taso: "B2",
      esim: { fi: "Tylsistyin pian luennolla.", en: "I soon got bored in the lecture." },
    },
    {
      fi: "tylsyys",
      en: "boredom, dullness",
      taso: "B2",
      esim: { fi: "Tylsyys sai minut lähtemään.", en: "The boredom made me leave." },
    },
    {
      fi: "tylsämielinen",
      en: "dull-witted",
      taso: "B2",
      esim: { fi: "Se oli tylsämielinen vitsi.", en: "It was a dull-witted joke." },
    },
  ],
  synonyymit: [
    { fi: "ikävä", en: "dull, dreary" },
    { fi: "pitkäveteinen", en: "long-winded, tedious" },
  ],
  esimerkit: {
    A2: { fi: "Tämä kirja on tylsä.", en: "This book is boring." },
    B1: { fi: "Päivä tuntui tylsemmältä kuin yleensä.", en: "The day felt more boring than usual." },
    B2: {
      fi: "Tylsä veitsi on itse asiassa vaarallisempi kuin terävä.",
      en: "A blunt knife is actually more dangerous than a sharp one.",
    },
  },
  updatedAt: "2026-06-06",
};

export default tylsä;
