import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 7/ovi, t:d gradation, stem tähte- ~ tähde-.
// Genitive tähden, partitive tähteä, illative tähteen, partitive pl tähtiä.
const tahti: Word = {
  fi: "tähti",
  slug: "tähti",
  pos: "substantiivi (tyyppi 7/ovi)",
  posClass: "substantiivi",
  level: "A2",
  en: "star",
  selitys:
    "Taivaalla loistava taivaankappale tai kuuluisa henkilö: 'kirkas tähti' / 'elokuvatähti'. Tyyppi 7, astevaihtelu t:d (tähte- → tähde-). Vrt. tähtitiede (astronomy), tähdistö (constellation).",
  kuva: { alt: "tähti – taivaalla loistava taivaankappale" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 7/ovi; astevaihtelu t:d (tähte- ↔ tähde-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tähden", merkitys: "of the star" },
      { sija: "partitiivi (yks.)", muoto: "tähteä", merkitys: "star (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tähtiä", merkitys: "stars (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa t → d: genetiivi tähden, monikon nominatiivi tähdet. Vahva aste t säilyy partitiivissa tähteä ja monikossa tähtiä. 'Jonkin tähden' = for the sake of (vanhahtava). Vrt. tähti = celebrity.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tähti" },
          { label: "Partitiivi", form: "tähteä" },
          { label: "Genetiivi", form: "tähden" },
          { label: "Inessiivi", form: "tähdessä" },
          { label: "Elatiivi", form: "tähdestä" },
          { label: "Illatiivi", form: "tähteen" },
          { label: "Adessiivi", form: "tähdellä" },
          { label: "Ablatiivi", form: "tähdeltä" },
          { label: "Allatiivi", form: "tähdelle" },
          { label: "Essiivi", form: "tähtenä" },
          { label: "Translatiivi", form: "tähdeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tähdet" },
          { label: "Partitiivi", form: "tähtiä" },
          { label: "Genetiivi", form: "tähtien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tähtitiede",
      en: "astronomy",
      taso: "B2",
      esim: { fi: "Hän opiskelee tähtitiedettä.", en: "She studies astronomy." },
    },
    {
      fi: "elokuvatähti",
      en: "movie star",
      taso: "B1",
      esim: { fi: "Hänestä tuli elokuvatähti.", en: "He became a movie star." },
    },
    {
      fi: "tähdistö",
      en: "constellation",
      taso: "B2",
      esim: { fi: "Otava on tunnettu tähdistö.", en: "The Big Dipper is a well-known constellation." },
    },
  ],
  synonyymit: [
    { fi: "taivaankappale", en: "celestial body" },
    { fi: "julkkis", en: "celebrity (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Taivaalla loistaa tuhansia tähtiä.", en: "Thousands of stars shine in the sky." },
    B1: { fi: "Katselimme tähtiä koko yön.", en: "We watched the stars all night." },
    B2: {
      fi: "Selkeänä pakkasyönä tähdet näkyvät erityisen kirkkaina.",
      en: "On a clear frosty night the stars look especially bright.",
    },
  },
  updatedAt: "2026-06-06",
};

export default tahti;
