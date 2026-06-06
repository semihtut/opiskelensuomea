import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem uutise-.
// Genitive uutisen, partitive uutista, illative uutiseen, partitive pl uutisia.
const uutinen: Word = {
  fi: "uutinen",
  slug: "uutinen",
  pos: "substantiivi (tyyppi 38/nainen)",
  posClass: "substantiivi",
  level: "A2",
  en: "news, news item",
  selitys:
    "Tieto tuoreesta tapahtumasta: 'hyvä uutinen'. Tyyppi 38, ei astevaihtelua, vartalo uutise-. Monikko uutiset = the news (broadcast). Vrt. uusi (new), uutisoida (to report).",
  kuva: { emoji: "📰", alt: "uutinen – tieto tuoreesta tapahtumasta" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 38/nainen; ei astevaihtelua (vartalo uutise-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "uutisen", merkitys: "of the news item" },
      { sija: "partitiivi (yks.)", muoto: "uutista", merkitys: "news item (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "uutisia", merkitys: "news items (partitive pl.)" },
    ],
    huom:
      "Loppu -nen → vartalo -se-: uutinen → uutisen, uutista. Monikko 'uutiset' tarkoittaa usein uutislähetystä: 'katson uutiset'. Vrt. uutisoida = to report on.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "uutinen" },
          { label: "Partitiivi", form: "uutista" },
          { label: "Genetiivi", form: "uutisen" },
          { label: "Inessiivi", form: "uutisessa" },
          { label: "Elatiivi", form: "uutisesta" },
          { label: "Illatiivi", form: "uutiseen" },
          { label: "Adessiivi", form: "uutisella" },
          { label: "Ablatiivi", form: "uutiselta" },
          { label: "Allatiivi", form: "uutiselle" },
          { label: "Essiivi", form: "uutisena" },
          { label: "Translatiivi", form: "uutiseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "uutiset" },
          { label: "Partitiivi", form: "uutisia" },
          { label: "Genetiivi", form: "uutisten / uutisien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "uutislähetys",
      en: "news broadcast",
      taso: "B1",
      esim: { fi: "Iltauutislähetys alkaa kahdeksalta.", en: "The evening news broadcast starts at eight." },
    },
    {
      fi: "uutisoida",
      en: "to report (in the news)",
      taso: "B2",
      esim: { fi: "Lehdet uutisoivat tapauksesta laajasti.", en: "The papers reported the case widely." },
    },
    {
      fi: "uutiskynnys",
      en: "newsworthiness threshold",
      taso: "B2",
      esim: { fi: "Asia ei ylittänyt uutiskynnystä.", en: "The matter didn't make the news." },
    },
  ],
  synonyymit: [
    { fi: "tiedote", en: "bulletin, release" },
    { fi: "sanoma", en: "message, tidings" },
  ],
  esimerkit: {
    A2: { fi: "Sain hyvän uutisen tänään.", en: "I got good news today." },
    B1: { fi: "Luen uutisia joka aamu netistä.", en: "I read the news online every morning." },
    B2: {
      fi: "Uutinen levisi sosiaalisessa mediassa nopeammin kuin perinteisissä lehdissä.",
      en: "The news spread on social media faster than in traditional papers.",
    },
  },
  updatedAt: "2026-06-06",
};

export default uutinen;
