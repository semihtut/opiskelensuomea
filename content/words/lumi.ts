import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 25/toimi, no gradation, consonant stem.
// Genitive lumen, partitive lunta, illative lumeen, partitive pl lumia, inessive lumessa.
const lumi: Word = {
  fi: "lumi",
  slug: "lumi",
  pos: "substantiivi (tyyppi 25/toimi)",
  posClass: "substantiivi",
  level: "A1",
  en: "snow",
  selitys:
    "Valkoiset jääkiteet, joita sataa talvella. Tyyppi 25, ei astevaihtelua, mutta konsonanttivartalo näkyy partitiivissa lunta.",
  kuva: { emoji: "❄️", alt: "lumi – lumihiutaleita" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 25/toimi; ei astevaihtelua, konsonanttivartalo",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "lumen", merkitys: "of the snow" },
      { sija: "partitiivi (yks.)", muoto: "lunta", merkitys: "snow (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "lumia", merkitys: "snows (partitive pl.)" },
    ],
    huom:
      "Konsonanttivartalo näkyy partitiivissa lunta (lum- + -ta → lunta). Muuten vartalo lume-: lumen, lumeen, lumessa. Yleensä yksikössä.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "lumi" },
          { label: "Partitiivi", form: "lunta" },
          { label: "Genetiivi", form: "lumen" },
          { label: "Inessiivi", form: "lumessa" },
          { label: "Elatiivi", form: "lumesta" },
          { label: "Illatiivi", form: "lumeen" },
          { label: "Adessiivi", form: "lumella" },
          { label: "Ablatiivi", form: "lumelta" },
          { label: "Allatiivi", form: "lumelle" },
          { label: "Essiivi", form: "lumena" },
          { label: "Translatiivi", form: "lumeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "lumet" },
          { label: "Partitiivi", form: "lumia" },
          { label: "Genetiivi", form: "lumien" },
          { label: "Inessiivi", form: "lumissa" },
          { label: "Illatiivi", form: "lumiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lumihiutale",
      en: "snowflake",
      taso: "B1",
      esim: { fi: "Lumihiutaleet leijailivat alas.", en: "The snowflakes drifted down." },
    },
    {
      fi: "lumiukko",
      en: "snowman",
      taso: "A2",
      esim: { fi: "Lapset rakensivat lumiukon.", en: "The children built a snowman." },
    },
    {
      fi: "luminen",
      en: "snowy",
      taso: "B1",
      esim: { fi: "Maisema oli luminen.", en: "The landscape was snowy." },
    },
  ],
  synonyymit: [
    { fi: "nietos", en: "snowdrift" },
    { fi: "loska", en: "slush (wet snow)" },
  ],
  esimerkit: {
    A2: { fi: "Maassa on paljon lunta.", en: "There's a lot of snow on the ground." },
    B1: { fi: "Lumi suli aurinkoisena päivänä.", en: "The snow melted on the sunny day." },
    B2: {
      fi: "Ensimmäinen lumi peitti kaupungin yhdessä yössä.",
      en: "The first snow covered the city in a single night.",
    },
  },
  updatedAt: "2026-06-04",
};

export default lumi;
