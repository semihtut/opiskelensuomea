import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: plurale tantum, Kotus type 1/valo (plural only), no gradation.
// Nominative kasvot, genitive kasvojen, partitive kasvoja, illative kasvoihin.
const kasvot: Word = {
  fi: "kasvot",
  slug: "kasvot",
  pos: "substantiivi (monikkosana, tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "face",
  selitys:
    "Pään etupuoli, jossa ovat silmät, nenä ja suu. Monikkosana (plurale tantum): aina monikossa, 'kauniit kasvot', 'pestä kasvot'. Tyyppi 1/valo (monikkotaivutus), ei astevaihtelua. Vrt. naama (puhekieli), pää, ilme.",
  kuva: { emoji: "🙂", alt: "kasvot – pään etupuoli jossa ovat silmät, nenä ja suu" },

  kielioppi: {
    tyyppi: "substantiivi, monikkosana (plurale tantum), tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "nominatiivi (mon.)", muoto: "kasvot", merkitys: "face" },
      { sija: "genetiivi (mon.)", muoto: "kasvojen", merkitys: "of the face" },
      { sija: "partitiivi (mon.)", muoto: "kasvoja", merkitys: "face (partitive)" },
    ],
    huom:
      "Monikkosana: ei yksikkömuotoa (kuten aivot, häät). Aina monikossa: kasvot, kasvojen, kasvoilla, kasvoihin. Puhekielessä naama. Vrt. pää, ilme = facial expression.",
  },
  taivutus: {
    sections: [
      {
        title: "Monikko (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kasvot" },
          { label: "Partitiivi", form: "kasvoja" },
          { label: "Genetiivi", form: "kasvojen" },
          { label: "Inessiivi", form: "kasvoissa" },
          { label: "Elatiivi", form: "kasvoista" },
          { label: "Illatiivi", form: "kasvoihin" },
          { label: "Adessiivi", form: "kasvoilla" },
          { label: "Ablatiivi", form: "kasvoilta" },
          { label: "Allatiivi", form: "kasvoille" },
          { label: "Essiivi", form: "kasvoina" },
          { label: "Translatiivi", form: "kasvoiksi" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ilme",
      en: "facial expression",
      taso: "B1",
      esim: { fi: "Hänen ilmeensä oli iloinen.", en: "His expression was happy." },
    },
    {
      fi: "kasvonpiirteet",
      en: "facial features",
      taso: "B2",
      esim: { fi: "Hänellä on pehmeät kasvonpiirteet.", en: "She has soft facial features." },
    },
  ],
  synonyymit: [
    { fi: "naama", en: "face (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Pesen kasvot aamulla.", en: "I wash my face in the morning." },
    B1: { fi: "Hänen kasvoillaan näkyi pettymys.", en: "Disappointment showed on his face." },
    B2: {
      fi: "Tunsin hänet heti kasvoista, vaikka emme olleet tavanneet vuosiin.",
      en: "I recognized her immediately by her face, although we hadn't met in years.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kasvot;
