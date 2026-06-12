import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, tt:t gradation, stem avioliitto- ~ avioliito-.
// Genitive avioliiton, partitive avioliittoa, partitive pl avioliittoja.
const avioliitto: Word = {
  fi: "avioliitto",
  slug: "avioliitto",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "marriage, matrimony",
  selitys:
    "Kahden ihmisen virallinen liitto: 'solmia avioliitto'. Tyyppi 1/valo, astevaihtelu tt:t (avioliitto → avioliiton). Yhdyssana avio + liitto. Vastakohta avioero. Vrt. häät, avioero, avoliitto.",
  kuva: { alt: "avioliitto – kahden ihmisen virallinen liitto" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu tt:t (avioliitto ~ avioliito-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "avioliiton", merkitys: "of the marriage" },
      { sija: "partitiivi (yks.)", muoto: "avioliittoa", merkitys: "marriage (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "avioliittoja", merkitys: "marriages (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva avioliitto (nominatiivi, partitiivi avioliittoa), heikko avioliito- (avioliiton, avioliitossa). Yhdyssana avio + liitto. 'Solmia avioliitto' = to get married. Vastakohta avioero. Vrt. häät, avoliitto.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "avioliitto" },
          { label: "Partitiivi", form: "avioliittoa" },
          { label: "Genetiivi", form: "avioliiton" },
          { label: "Inessiivi", form: "avioliitossa" },
          { label: "Elatiivi", form: "avioliitosta" },
          { label: "Illatiivi", form: "avioliittoon" },
          { label: "Adessiivi", form: "avioliitolla" },
          { label: "Ablatiivi", form: "avioliitolta" },
          { label: "Allatiivi", form: "avioliitolle" },
          { label: "Essiivi", form: "avioliittona" },
          { label: "Translatiivi", form: "avioliitoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "avioliitot" },
          { label: "Partitiivi", form: "avioliittoja" },
          { label: "Genetiivi", form: "avioliittojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "avioero",
      en: "divorce",
      taso: "B2",
      esim: { fi: "He hakivat avioeroa.", en: "They filed for divorce." },
    },
    {
      fi: "avoliitto",
      en: "cohabitation (without marriage)",
      taso: "B2",
      esim: { fi: "He asuvat avoliitossa.", en: "They live together unmarried." },
    },
  ],
  synonyymit: [
    { fi: "aviosääty", en: "marital status (formal)" },
  ],
  esimerkit: {
    A2: { fi: "He ovat avioliitossa.", en: "They are married." },
    B1: { fi: "Avioliitto solmittiin kirkossa.", en: "The marriage was entered into in church." },
    B2: {
      fi: "Pitkä avioliitto vaatii molemmilta joustavuutta ja luottamusta.",
      en: "A long marriage requires flexibility and trust from both.",
    },
  },
  updatedAt: "2026-06-07",
};

export default avioliitto;
