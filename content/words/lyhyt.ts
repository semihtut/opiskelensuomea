import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 43/ohut, no gradation. Genitive lyhyen,
// partitive lyhyttä, partitive pl lyhyitä. Comparative lyhyempi (~lyhempi), superlative lyhyin (~lyhin).
const lyhyt: Word = {
  fi: "lyhyt",
  slug: "lyhyt",
  pos: "adjektiivi (tyyppi 43/ohut)",
  posClass: "adjektiivi",
  level: "A1",
  en: "short",
  selitys:
    "Mitaltaan pieni (pituus tai kesto). Tyyppi 43, ei astevaihtelua. Vartalo lyhye-: lyhyen, lyhyttä. Vastakohta pitkä.",
  kuva: { emoji: "📐", alt: "lyhyt – lyhyt mitta" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 43/ohut; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "lyhyen", merkitys: "of the short" },
      { sija: "partitiivi (yks.)", muoto: "lyhyttä", merkitys: "short (partitive)" },
      { sija: "komparatiivi", muoto: "lyhyempi", merkitys: "shorter" },
    ],
    huom:
      "Vartalo lyhye-: lyhyen, lyhyeen. Partitiivi lyhyttä. Vertailu lyhyempi/lyhyin (myös lyhempi/lyhin). Vastakohta pitkä.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "lyhyt" },
          { label: "Partitiivi", form: "lyhyttä" },
          { label: "Genetiivi", form: "lyhyen" },
          { label: "Inessiivi", form: "lyhyessä" },
          { label: "Illatiivi", form: "lyhyeen" },
          { label: "Adessiivi", form: "lyhyellä" },
          { label: "Essiivi", form: "lyhyenä" },
          { label: "Translatiivi", form: "lyhyeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "lyhyet" },
          { label: "Partitiivi", form: "lyhyitä" },
          { label: "Genetiivi", form: "lyhyiden" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "lyhyempi" },
          { label: "Komparatiivi (gen.)", form: "lyhyemmän" },
          { label: "Superlatiivi (nom.)", form: "lyhyin" },
          { label: "Superlatiivi (gen.)", form: "lyhyimmän" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lyhentää",
      en: "to shorten",
      taso: "B2",
      esim: { fi: "Lyhensin tekstiä hieman.", en: "I shortened the text a bit." },
    },
    {
      fi: "lyhenne",
      en: "abbreviation",
      taso: "B2",
      esim: { fi: "EU on lyhenne.", en: "EU is an abbreviation." },
    },
    {
      fi: "lyhyesti",
      en: "briefly, in short",
      taso: "B1",
      esim: { fi: "Kerro lyhyesti, mitä tapahtui.", en: "Tell me briefly what happened." },
    },
  ],
  synonyymit: [
    { fi: "lyhytkestoinen", en: "short-lived" },
    { fi: "matala", en: "low (of height)" },
  ],
  esimerkit: {
    A2: { fi: "Hänellä on lyhyet hiukset.", en: "She has short hair." },
    B1: { fi: "Pidetään lyhyt tauko.", en: "Let's take a short break." },
    B2: {
      fi: "Talvella päivät ovat lyhyempiä kuin kesällä.",
      en: "In winter the days are shorter than in summer.",
    },
  },
  updatedAt: "2026-06-05",
};

export default lyhyt;
