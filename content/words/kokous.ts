import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem kokoukse-.
// Genitive kokouksen, partitive kokousta, illative kokoukseen, partitive pl kokouksia.
const kokous: Word = {
  fi: "kokous",
  slug: "kokous",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "meeting, assembly, conference",
  selitys:
    "Virallinen tapaaminen, jossa keskustellaan asioista: 'pitää kokous'. Tyyppi 39, ei astevaihtelua. Juuri koota/koko-. Arkisempi synonyymi palaveri.",
  kuva: { emoji: "👥", alt: "kokous – virallinen tapaaminen" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo kokoukse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kokouksen", merkitys: "of the meeting" },
      { sija: "partitiivi (yks.)", muoto: "kokousta", merkitys: "meeting (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kokouksia", merkitys: "meetings (partitive pl.)" },
    ],
    huom:
      "Loppu -us → vartalo -ukse-: kokous → kokouksen. 'Pitää kokous' = to hold a meeting, 'avata/päättää kokous' = to open/close a meeting. Vrt. kokoontua = to gather, palaveri = meeting (colloquial).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kokous" },
          { label: "Partitiivi", form: "kokousta" },
          { label: "Genetiivi", form: "kokouksen" },
          { label: "Inessiivi", form: "kokouksessa" },
          { label: "Elatiivi", form: "kokouksesta" },
          { label: "Illatiivi", form: "kokoukseen" },
          { label: "Adessiivi", form: "kokouksella" },
          { label: "Ablatiivi", form: "kokoukselta" },
          { label: "Allatiivi", form: "kokoukselle" },
          { label: "Essiivi", form: "kokouksena" },
          { label: "Translatiivi", form: "kokoukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kokoukset" },
          { label: "Partitiivi", form: "kokouksia" },
          { label: "Genetiivi", form: "kokousten" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vuosikokous",
      en: "annual meeting",
      taso: "B2",
      esim: { fi: "Vuosikokous pidetään keväällä.", en: "The annual meeting is held in spring." },
    },
    {
      fi: "kokoontua",
      en: "to gather, assemble",
      taso: "B1",
      esim: { fi: "Kokoonnumme aulassa.", en: "We gather in the lobby." },
    },
    {
      fi: "kokouspöytäkirja",
      en: "meeting minutes",
      taso: "B2",
      esim: { fi: "Kirjoitin kokouspöytäkirjan.", en: "I wrote the meeting minutes." },
    },
  ],
  synonyymit: [
    { fi: "palaveri", en: "meeting (colloquial)" },
    { fi: "tapaaminen", en: "meeting, appointment" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on kokous kello kaksi.", en: "I have a meeting at two o'clock." },
    B1: { fi: "Kokous kesti kaksi tuntia.", en: "The meeting lasted two hours." },
    B2: {
      fi: "Kokouksessa päätettiin lykätä hanketta ensi vuoteen.",
      en: "At the meeting it was decided to postpone the project to next year.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kokous;
