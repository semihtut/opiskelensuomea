import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, t:d gradation, stem ehto- ~ ehdo-.
// Genitive ehdon, partitive ehtoa, partitive pl ehtoja.
const ehto: Word = {
  fi: "ehto",
  slug: "ehto",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "condition, term, requirement",
  selitys:
    "Vaatimus, jonka on täytyttävä, jotta jokin tapahtuu: 'sillä ehdolla, että…'. Tyyppi 1/valo, astevaihtelu t:d (ehto → ehdon). Monikossa usein 'ehdot' = terms (käyttöehdot). Vrt. edellyttää, ehdollinen.",
  kuva: { alt: "ehto – vaatimus, jonka on täytyttävä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu t:d (vartalo ehdo-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ehdon", merkitys: "of the condition" },
      { sija: "partitiivi (yks.)", muoto: "ehtoa", merkitys: "condition (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "ehtoja", merkitys: "conditions (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu t:d: nominatiivi ehto (vahva t), genetiivi ehdon (heikko d). Monikossa usein ehdot = terms. 'Sillä ehdolla, että' = on the condition that; 'asettaa ehtoja' = to set conditions. Vrt. edellyttää.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ehto" },
          { label: "Partitiivi", form: "ehtoa" },
          { label: "Genetiivi", form: "ehdon" },
          { label: "Inessiivi", form: "ehdossa" },
          { label: "Elatiivi", form: "ehdosta" },
          { label: "Illatiivi", form: "ehtoon" },
          { label: "Adessiivi", form: "ehdolla" },
          { label: "Ablatiivi", form: "ehdolta" },
          { label: "Allatiivi", form: "ehdolle" },
          { label: "Essiivi", form: "ehtona" },
          { label: "Translatiivi", form: "ehdoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ehdot" },
          { label: "Partitiivi", form: "ehtoja" },
          { label: "Genetiivi", form: "ehtojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ehdollinen",
      en: "conditional",
      taso: "B2",
      esim: { fi: "Hän sai ehdollisen tuomion.", en: "He got a suspended (conditional) sentence." },
    },
    {
      fi: "käyttöehdot",
      en: "terms of use",
      taso: "B2",
      esim: { fi: "Hyväksyin käyttöehdot.", en: "I accepted the terms of use." },
    },
  ],
  synonyymit: [
    { fi: "edellytys", en: "prerequisite" },
    { fi: "vaatimus", en: "requirement" },
  ],
  esimerkit: {
    A2: { fi: "Hyväksyn tämän ehdon.", en: "I accept this condition." },
    B1: { fi: "Autan sinua sillä ehdolla, että autat minua myöhemmin.", en: "I'll help you on the condition that you help me later." },
    B2: {
      fi: "Sopimuksen ehdot neuvoteltiin huolellisesti molempien osapuolten kesken.",
      en: "The terms of the contract were carefully negotiated between both parties.",
    },
  },
  updatedAt: "2026-06-07",
};

export default ehto;
