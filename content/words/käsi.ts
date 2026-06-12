import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 27/käsi, t:d gradation, consonant stem.
// Genitive käden, partitive kättä, illative käteen, partitive pl käsiä.
const kasi: Word = {
  fi: "käsi",
  slug: "käsi",
  pos: "substantiivi (tyyppi 27/käsi)",
  posClass: "substantiivi",
  level: "A1",
  en: "hand; arm",
  selitys:
    "Kehon osa ranteesta sormiin (myös koko yläraaja). Tyyppi 27, astevaihtelu t:d, konsonanttivartalo (kättä). Tämä on koko taivutustyypin mallisana.",
  kuva: { alt: "käsi – avoin käsi" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 27/käsi; astevaihtelu t:d, konsonanttivartalo",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "käden", merkitys: "of the hand" },
      { sija: "partitiivi (yks.)", muoto: "kättä", merkitys: "hand (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "käsiä", merkitys: "hands (partitive pl.)" },
    ],
    huom:
      "Vartalo käte- → käde- (t:d): käden, käteen, kädessä. Konsonanttivartalo näkyy partitiivissa kättä. Monikon genetiivi käsien ~ kätten.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "käsi" },
          { label: "Partitiivi", form: "kättä" },
          { label: "Genetiivi", form: "käden" },
          { label: "Inessiivi", form: "kädessä" },
          { label: "Elatiivi", form: "kädestä" },
          { label: "Illatiivi", form: "käteen" },
          { label: "Adessiivi", form: "kädellä" },
          { label: "Ablatiivi", form: "kädeltä" },
          { label: "Allatiivi", form: "kädelle" },
          { label: "Essiivi", form: "kätenä" },
          { label: "Translatiivi", form: "kädeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kädet" },
          { label: "Partitiivi", form: "käsiä" },
          { label: "Genetiivi", form: "käsien" },
          { label: "Inessiivi", form: "käsissä" },
          { label: "Illatiivi", form: "käsiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kädet",
      en: "hands (plural)",
      taso: "A1",
      esim: { fi: "Pese kädet ennen ruokaa.", en: "Wash your hands before eating." },
    },
    {
      fi: "käsine",
      en: "glove",
      taso: "B1",
      esim: { fi: "Talvella tarvitaan käsineet.", en: "In winter you need gloves." },
    },
    {
      fi: "käsityö",
      en: "handicraft, handwork",
      taso: "B1",
      esim: { fi: "Hän tekee kaunista käsityötä.", en: "She makes beautiful handicrafts." },
    },
  ],
  synonyymit: [
    { fi: "kämmen", en: "palm (of the hand)" },
    { fi: "raaja", en: "limb" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on kylmät kädet.", en: "My hands are cold." },
    B1: { fi: "Ota minua kädestä.", en: "Take me by the hand." },
    B2: {
      fi: "Hän piti lasta tiukasti kädestä koko matkan.",
      en: "She held the child firmly by the hand the whole way.",
    },
  },
  updatedAt: "2026-06-04",
};

export default kasi;
