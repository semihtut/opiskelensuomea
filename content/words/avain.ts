import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 33/kytkin, no gradation, stem avaime-.
// Partitive sg avainta, genitive sg avaimen, genitive pl avainten (also avaimien).
const avain: Word = {
  fi: "avain",
  slug: "avain",
  pos: "substantiivi (tyyppi: kytkin)",
  posClass: "substantiivi",
  level: "A2",
  en: "key",
  selitys:
    "Esine, jolla lukko avataan tai suljetaan; myös kuvaannollisesti ratkaisun avain. Vartalo avaime-, ei astevaihtelua.",
  kuva: { emoji: "🔑", alt: "avain – lukon avain" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 33/kytkin; ei astevaihtelua (vartalo avaime-)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "avainta", merkitys: "key (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "avaimen", merkitys: "of the key" },
      { sija: "partitiivi (mon.)", muoto: "avaimia", merkitys: "keys (partitive pl.)" },
    ],
    huom:
      "Nominatiivi avain, mutta muut muodot vartalolla avaime-: avaimen, avaimet. Partitiivi avainta, monikon genetiivi avainten (myös avaimien).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "avain" },
          { label: "Partitiivi", form: "avainta" },
          { label: "Genetiivi", form: "avaimen" },
          { label: "Inessiivi", form: "avaimessa" },
          { label: "Elatiivi", form: "avaimesta" },
          { label: "Illatiivi", form: "avaimeen" },
          { label: "Adessiivi", form: "avaimella" },
          { label: "Ablatiivi", form: "avaimelta" },
          { label: "Allatiivi", form: "avaimelle" },
          { label: "Essiivi", form: "avaimena" },
          { label: "Translatiivi", form: "avaimeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "avaimet" },
          { label: "Partitiivi", form: "avaimia" },
          { label: "Genetiivi", form: "avainten" },
          { label: "Illatiivi", form: "avaimiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "avainsana",
      en: "keyword",
      taso: "B1",
      esim: { fi: "Hae tietoa avainsanalla.", en: "Search for information with a keyword." },
    },
    {
      fi: "avaimenperä",
      en: "keychain, keyring",
      taso: "B2",
      esim: { fi: "Avaimet roikkuvat avaimenperässä.", en: "The keys hang on the keyring." },
    },
    {
      fi: "pääavain",
      en: "master key",
      taso: "B2",
      esim: { fi: "Vahtimestarilla on pääavain.", en: "The caretaker has a master key." },
    },
  ],
  synonyymit: [
    { fi: "lukonavain", en: "(door/lock) key" },
    { fi: "ratkaisu", en: "key, solution (figurative)" },
  ],
  esimerkit: {
    A2: { fi: "Missä autoni avaimet ovat?", en: "Where are my car keys?" },
    B1: { fi: "Hukkasin asunnon avaimen eilen.", en: "I lost the apartment key yesterday." },
    B2: {
      fi: "Kärsivällisyys on avain onnistumiseen.",
      en: "Patience is the key to success.",
    },
  },
  updatedAt: "2026-06-04",
};

export default avain;
