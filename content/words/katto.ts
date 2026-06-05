import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, tt:t gradation. Genitive katon,
// partitive kattoa, illative kattoon, partitive pl kattoja.
const katto: Word = {
  fi: "katto",
  slug: "katto",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "roof; ceiling",
  selitys:
    "Rakennuksen ylin osa (roof) tai huoneen yläpinta (ceiling). Tyyppi 1, astevaihtelu tt:t (katto → katon). Vrt. lattia (= floor).",
  kuva: { emoji: "🏠", alt: "katto – talon katto" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu tt:t",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "katon", merkitys: "of the roof" },
      { sija: "partitiivi (yks.)", muoto: "kattoa", merkitys: "roof (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kattoja", merkitys: "roofs (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa tt → t: katon, katossa, katot. Vahva aste säilyy: kattoa, kattoon, kattoja. Sama sana = roof ja ceiling.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "katto" },
          { label: "Partitiivi", form: "kattoa" },
          { label: "Genetiivi", form: "katon" },
          { label: "Inessiivi", form: "katossa" },
          { label: "Elatiivi", form: "katosta" },
          { label: "Illatiivi", form: "kattoon" },
          { label: "Adessiivi", form: "katolla" },
          { label: "Ablatiivi", form: "katolta" },
          { label: "Allatiivi", form: "katolle" },
          { label: "Essiivi", form: "kattona" },
          { label: "Translatiivi", form: "katoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "katot" },
          { label: "Partitiivi", form: "kattoja" },
          { label: "Genetiivi", form: "kattojen" },
          { label: "Inessiivi", form: "katoissa" },
          { label: "Illatiivi", form: "kattoihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kattaa",
      en: "to cover; to set (a table)",
      taso: "B1",
      esim: { fi: "Lumi kattoi katot.", en: "Snow covered the roofs." },
    },
    {
      fi: "kattoikkuna",
      en: "skylight",
      taso: "B2",
      esim: { fi: "Ullakolla on kattoikkuna.", en: "There's a skylight in the attic." },
    },
    {
      fi: "kattolamppu",
      en: "ceiling lamp",
      taso: "B1",
      esim: { fi: "Kattolamppu valaisee koko huoneen.", en: "The ceiling lamp lights the whole room." },
    },
  ],
  synonyymit: [
    { fi: "vesikatto", en: "roof (outer)" },
    { fi: "sisäkatto", en: "ceiling" },
  ],
  esimerkit: {
    A2: { fi: "Talon katto on punainen.", en: "The house's roof is red." },
    B1: { fi: "Lamppu roikkuu katosta.", en: "The lamp hangs from the ceiling." },
    B2: {
      fi: "Myrsky repi katon irti vanhasta ladosta.",
      en: "The storm tore the roof off the old barn.",
    },
  },
  updatedAt: "2026-06-05",
};

export default katto;
