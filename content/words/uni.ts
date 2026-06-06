import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 24/uni, no gradation, stem une-.
// Genitive unen, partitive unta, illative uneen, partitive pl unia.
const uni: Word = {
  fi: "uni",
  slug: "uni",
  pos: "substantiivi (tyyppi 24/uni)",
  posClass: "substantiivi",
  level: "A2",
  en: "sleep; dream (while asleep)",
  selitys:
    "Nukkuminen tai unessa nähty näky: 'nähdä unta'. Tyyppi 24, ei astevaihtelua; partitiivi unta. Partitiivin monikko unia. HUOM: uni = sleep / dream while sleeping; unelma = aspiration.",
  kuva: { emoji: "😴", alt: "uni – nukkuminen tai unessa nähty näky" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 24/uni; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "unen", merkitys: "of sleep/the dream" },
      { sija: "partitiivi (yks.)", muoto: "unta", merkitys: "sleep (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "unia", merkitys: "dreams (partitive pl.)" },
    ],
    huom:
      "Tyyppi 24: partitiivi unta (-ta). 'Saada unta' = to fall asleep; 'nähdä unta' = to dream (while sleeping); 'syvässä unessa' = sound asleep. Ero: uni vs. unelma (aspiration).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "uni" },
          { label: "Partitiivi", form: "unta" },
          { label: "Genetiivi", form: "unen" },
          { label: "Inessiivi", form: "unessa" },
          { label: "Elatiivi", form: "unesta" },
          { label: "Illatiivi", form: "uneen" },
          { label: "Adessiivi", form: "unella" },
          { label: "Ablatiivi", form: "unelta" },
          { label: "Allatiivi", form: "unelle" },
          { label: "Essiivi", form: "unena" },
          { label: "Translatiivi", form: "uneksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "unet" },
          { label: "Partitiivi", form: "unia" },
          { label: "Genetiivi", form: "unien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "uninen",
      en: "sleepy, drowsy",
      taso: "B1",
      esim: { fi: "Olen aamuisin uninen.", en: "I'm sleepy in the mornings." },
    },
    {
      fi: "unettomuus",
      en: "insomnia",
      taso: "B2",
      esim: { fi: "Hän kärsii unettomuudesta.", en: "He suffers from insomnia." },
    },
    {
      fi: "päiväunet",
      en: "nap, daytime sleep",
      taso: "B1",
      esim: { fi: "Lapsi nukkuu päiväunet.", en: "The child takes a nap." },
    },
  ],
  synonyymit: [
    { fi: "nukkuminen", en: "sleeping" },
    { fi: "lepo", en: "rest" },
  ],
  esimerkit: {
    A2: { fi: "Näin oudon unen.", en: "I had a strange dream." },
    B1: { fi: "En saanut yöllä unta.", en: "I couldn't fall asleep at night." },
    B2: {
      fi: "Riittävä uni on terveydelle yhtä tärkeää kuin ruoka ja liikunta.",
      en: "Enough sleep is as important for health as food and exercise.",
    },
  },
  updatedAt: "2026-06-06",
};

export default uni;
