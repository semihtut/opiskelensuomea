import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, kk:k gradation, stem kakku- ~ kaku-.
// Genitive kakun, partitive kakkua, partitive pl kakkuja.
const kakku: Word = {
  fi: "kakku",
  slug: "kakku",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "cake",
  selitys:
    "Makea leivonnainen, usein juhliin: 'syntymäpäiväkakku'. Tyyppi 1/valo, astevaihtelu kk:k (kakku → kakun). Vrt. leipoa, jälkiruoka, juhla.",
  kuva: { alt: "kakku – makea leivonnainen, usein juhliin" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu kk:k (kakku ~ kaku-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kakun", merkitys: "of the cake" },
      { sija: "partitiivi (yks.)", muoto: "kakkua", merkitys: "cake (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kakkuja", merkitys: "cakes (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu kk:k: vahva kakku (nominatiivi, partitiivi kakkua), heikko kaku- (kakun, kakussa). Syntymäpäiväkakku, suklaakakku. Vrt. leipoa, jälkiruoka.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kakku" },
          { label: "Partitiivi", form: "kakkua" },
          { label: "Genetiivi", form: "kakun" },
          { label: "Inessiivi", form: "kakussa" },
          { label: "Elatiivi", form: "kakusta" },
          { label: "Illatiivi", form: "kakkuun" },
          { label: "Adessiivi", form: "kakulla" },
          { label: "Ablatiivi", form: "kakulta" },
          { label: "Allatiivi", form: "kakulle" },
          { label: "Essiivi", form: "kakkuna" },
          { label: "Translatiivi", form: "kakuksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kakut" },
          { label: "Partitiivi", form: "kakkuja" },
          { label: "Genetiivi", form: "kakkujen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "syntymäpäiväkakku",
      en: "birthday cake",
      taso: "B1",
      esim: { fi: "Puhalsin kynttilät syntymäpäiväkakusta.", en: "I blew out the candles on the birthday cake." },
    },
    {
      fi: "leivonnainen",
      en: "pastry, baked treat",
      taso: "B2",
      esim: { fi: "Kahvilassa on tuoreita leivonnaisia.", en: "The café has fresh pastries." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Haluan palan kakkua.", en: "I want a piece of cake." },
    B1: { fi: "Leivoin kakun juhliin.", en: "I baked a cake for the party." },
    B2: {
      fi: "Kakku onnistui hyvin, vaikka uuni oli hieman liian kuuma.",
      en: "The cake turned out well, even though the oven was a little too hot.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kakku;
