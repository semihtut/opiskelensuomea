import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 26/pieni, no gradation, stem ääne-.
// Genitive äänen, partitive ääntä, illative ääneen, partitive pl ääniä.
const aani: Word = {
  fi: "ääni",
  slug: "ääni",
  pos: "substantiivi (tyyppi 26/pieni)",
  posClass: "substantiivi",
  level: "A2",
  en: "sound; voice; vote",
  selitys:
    "Kuultava värähtely, puheen sointi tai vaalin ääni: 'kova ääni' / 'antaa äänensä'. Tyyppi 26, ei astevaihtelua, vartalo ääne-. Partitiivi ääntä. Vrt. äänestää (to vote), äänekäs (loud).",
  kuva: { alt: "ääni – kuultava värähtely tai puheen sointi" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 26/pieni; ei astevaihtelua (vartalo ääne-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "äänen", merkitys: "of the sound/voice" },
      { sija: "partitiivi (yks.)", muoto: "ääntä", merkitys: "sound/voice (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "ääniä", merkitys: "sounds/votes (partitive pl.)" },
    ],
    huom:
      "Loppu-i → vartalo -e-: ääni → äänen. Partitiivi ääntä. Kolme merkitystä: sound, voice, vote. 'Hän sai eniten ääniä' = he got the most votes. Vrt. äänestää = to vote.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ääni" },
          { label: "Partitiivi", form: "ääntä" },
          { label: "Genetiivi", form: "äänen" },
          { label: "Inessiivi", form: "äänessä" },
          { label: "Elatiivi", form: "äänestä" },
          { label: "Illatiivi", form: "ääneen" },
          { label: "Adessiivi", form: "äänellä" },
          { label: "Ablatiivi", form: "ääneltä" },
          { label: "Allatiivi", form: "äänelle" },
          { label: "Essiivi", form: "äänenä" },
          { label: "Translatiivi", form: "ääneksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "äänet" },
          { label: "Partitiivi", form: "ääniä" },
          { label: "Genetiivi", form: "äänten / äänien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "äänekäs",
      en: "loud, noisy",
      taso: "B1",
      esim: { fi: "Naapurit olivat äänekkäitä.", en: "The neighbors were loud." },
    },
    {
      fi: "ääneen",
      en: "aloud, out loud",
      taso: "B1",
      esim: { fi: "Lue teksti ääneen.", en: "Read the text out loud." },
    },
    {
      fi: "äänestys",
      en: "vote, ballot",
      taso: "B2",
      esim: { fi: "Päätös tehtiin äänestyksellä.", en: "The decision was made by a vote." },
    },
  ],
  synonyymit: [
    { fi: "sointi", en: "tone, timbre" },
    { fi: "melu", en: "noise" },
  ],
  esimerkit: {
    A2: { fi: "Kuulin oudon äänen.", en: "I heard a strange sound." },
    B1: { fi: "Puhu kovemmalla äänellä, en kuule.", en: "Speak in a louder voice, I can't hear." },
    B2: {
      fi: "Ehdokas voitti vaalit vain muutaman äänen erolla.",
      en: "The candidate won the election by only a few votes.",
    },
  },
  updatedAt: "2026-06-06",
};

export default aani;
