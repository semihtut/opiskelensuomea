import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 33/kytkin, no gradation, stem avoime-.
// Genitive avoimen, partitive avointa, illative avoimeen, partitive pl avoimia.
const avoin: Word = {
  fi: "avoin",
  slug: "avoin",
  pos: "adjektiivi (tyyppi 33/kytkin)",
  posClass: "adjektiivi",
  level: "B1",
  en: "open; open-minded; vacant",
  selitys:
    "1) Auki oleva: 'avoin ovi'. 2) Avomielinen tai läpinäkyvä: 'avoin keskustelu'. 3) Vapaana oleva: 'avoin työpaikka'. Tyyppi 33/kytkin, ei astevaihtelua; vartalo avoime-. Vastakohta suljettu. Vrt. avata, avoimesti.",
  kuva: { alt: "avoin – auki oleva tai avomielinen" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 33/kytkin; ei astevaihtelua (vartalo avoime-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "avoimen", merkitys: "of open" },
      { sija: "partitiivi (yks.)", muoto: "avointa", merkitys: "open (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "avoimia", merkitys: "open (partitive pl.)" },
    ],
    huom:
      "Tyyppi 33 (-in): nominatiivi avoin, vartalo avoime- (avoimen, avoimeen), partitiivi avointa. Vastakohta suljettu. 'Avoin työpaikka' = job vacancy; 'avoin lähdekoodi' = open source. Vrt. avata = to open.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "avoin" },
          { label: "Partitiivi", form: "avointa" },
          { label: "Genetiivi", form: "avoimen" },
          { label: "Inessiivi", form: "avoimessa" },
          { label: "Elatiivi", form: "avoimesta" },
          { label: "Illatiivi", form: "avoimeen" },
          { label: "Adessiivi", form: "avoimella" },
          { label: "Allatiivi", form: "avoimelle" },
          { label: "Translatiivi", form: "avoimeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "avoimet" },
          { label: "Partitiivi", form: "avoimia" },
          { label: "Genetiivi", form: "avoimien" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Positiivi", form: "avoin" },
          { label: "Komparatiivi", form: "avoimempi" },
          { label: "Superlatiivi", form: "avoimin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "avata",
      en: "to open",
      taso: "A2",
      esim: { fi: "Avaa ikkuna.", en: "Open the window." },
    },
    {
      fi: "avoimesti",
      en: "openly, frankly",
      taso: "B2",
      esim: { fi: "Hän puhui avoimesti ongelmista.", en: "She spoke openly about the problems." },
    },
    {
      fi: "avoimuus",
      en: "openness, transparency",
      taso: "B2",
      esim: { fi: "Avoimuus lisää luottamusta.", en: "Openness increases trust." },
    },
  ],
  synonyymit: [
    { fi: "auki (oleva)", en: "open" },
    { fi: "avomielinen", en: "open-minded" },
  ],
  esimerkit: {
    A2: { fi: "Ovi on avoin.", en: "The door is open." },
    B1: { fi: "Hän on avoin uusille ideoille.", en: "She is open to new ideas." },
    B2: {
      fi: "Avoin ja rehellinen keskustelu auttoi ratkaisemaan riidan.",
      en: "An open and honest discussion helped resolve the quarrel.",
    },
  },
  updatedAt: "2026-06-07",
};

export default avoin;
