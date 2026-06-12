import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, t:d gradation, stem laatu- ~ laadu-.
// Genitive laadun, partitive laatua, partitive pl laatuja.
const laatu: Word = {
  fi: "laatu",
  slug: "laatu",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "quality; kind, sort",
  selitys:
    "Se, kuinka hyvä jokin on; myös laji tai tyyppi: 'hyvä laatu', 'tätä laatua'. Tyyppi 1/valo, astevaihtelu t:d (laatu → laadun). Vrt. laadukas, laadunvalvonta, taso.",
  kuva: { alt: "laatu – se kuinka hyvä jokin on" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu t:d (laatu ~ laadu-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "laadun", merkitys: "of the quality" },
      { sija: "partitiivi (yks.)", muoto: "laatua", merkitys: "quality (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "laatuja", merkitys: "qualities (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu t:d: vahva laatu (nominatiivi, partitiivi laatua), heikko laadu- (laadun, laadussa). Laadukas = of high quality, laadunvalvonta = quality control. Vrt. taso.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "laatu" },
          { label: "Partitiivi", form: "laatua" },
          { label: "Genetiivi", form: "laadun" },
          { label: "Inessiivi", form: "laadussa" },
          { label: "Elatiivi", form: "laadusta" },
          { label: "Illatiivi", form: "laatuun" },
          { label: "Adessiivi", form: "laadulla" },
          { label: "Ablatiivi", form: "laadulta" },
          { label: "Allatiivi", form: "laadulle" },
          { label: "Essiivi", form: "laatuna" },
          { label: "Translatiivi", form: "laaduksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "laadut" },
          { label: "Partitiivi", form: "laatuja" },
          { label: "Genetiivi", form: "laatujen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "laadukas",
      en: "high-quality",
      taso: "B2",
      esim: { fi: "Tuote on laadukas.", en: "The product is high-quality." },
    },
    {
      fi: "laadunvalvonta",
      en: "quality control",
      taso: "B2",
      esim: { fi: "Tehtaalla on tiukka laadunvalvonta.", en: "The factory has strict quality control." },
    },
  ],
  synonyymit: [
    { fi: "taso", en: "level, standard" },
  ],
  esimerkit: {
    A2: { fi: "Tämä on hyvää laatua.", en: "This is good quality." },
    B1: { fi: "Hinta riippuu laadusta.", en: "The price depends on the quality." },
    B2: {
      fi: "Asiakkaat arvostavat laatua usein enemmän kuin halpaa hintaa.",
      en: "Customers often value quality more than a low price.",
    },
  },
  updatedAt: "2026-06-07",
};

export default laatu;
