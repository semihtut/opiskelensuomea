import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, t:d gradation, stem johto- ~ johdo-.
// Genitive johdon, partitive johtoa, partitive pl johtoja.
const johto: Word = {
  fi: "johto",
  slug: "johto",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "management, leadership; lead; cord, cable",
  selitys:
    "1) Johtaminen tai johtava ryhmä: 'yrityksen johto', 'olla johdossa'. 2) Sähköjohto tai kaapeli. 3) Johtoasema kilpailussa. Tyyppi 1/valo, astevaihtelu t:d (johto → johdon). Sanasta johtaa. Vrt. johtaa, johtaja, johtua.",
  kuva: { emoji: "🧭", alt: "johto – johtaminen, johtava ryhmä tai sähköjohto" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu t:d (johto ~ johdo-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "johdon", merkitys: "of the management" },
      { sija: "partitiivi (yks.)", muoto: "johtoa", merkitys: "management (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "johtoja", merkitys: "leads / cords (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu t:d: vahva johto (nominatiivi, partitiivi johtoa), heikko johdo- (johdon, johdossa). 'Olla johdossa' = to be in the lead / in charge. Vrt. johtaa = to lead, johtaja = leader.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "johto" },
          { label: "Partitiivi", form: "johtoa" },
          { label: "Genetiivi", form: "johdon" },
          { label: "Inessiivi", form: "johdossa" },
          { label: "Elatiivi", form: "johdosta" },
          { label: "Illatiivi", form: "johtoon" },
          { label: "Adessiivi", form: "johdolla" },
          { label: "Ablatiivi", form: "johdolta" },
          { label: "Allatiivi", form: "johdolle" },
          { label: "Essiivi", form: "johtona" },
          { label: "Translatiivi", form: "johdoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "johdot" },
          { label: "Partitiivi", form: "johtoja" },
          { label: "Genetiivi", form: "johtojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "johtaja",
      en: "leader, director, manager",
      taso: "A2",
      esim: { fi: "Hän on yrityksen johtaja.", en: "She is the company's director." },
    },
    {
      fi: "johtokunta",
      en: "board, governing body",
      taso: "B2",
      esim: { fi: "Johtokunta kokoontuu kerran kuussa.", en: "The board meets once a month." },
    },
  ],
  synonyymit: [
    { fi: "johtaminen", en: "managing, leadership" },
    { fi: "kaapeli", en: "cable" },
  ],
  esimerkit: {
    A2: { fi: "Sähköjohto on rikki.", en: "The power cord is broken." },
    B1: { fi: "Yrityksen johto teki päätöksen.", en: "The company's management made the decision." },
    B2: {
      fi: "Uuden johdon myötä koko organisaation kulttuuri muuttui avoimemmaksi.",
      en: "With the new management, the whole organization's culture became more open.",
    },
  },
  updatedAt: "2026-06-07",
};

export default johto;
