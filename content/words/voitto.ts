import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, tt:t gradation, stem voitto- ~ voito-.
// Genitive voiton, partitive voittoa, partitive pl voittoja.
const voitto: Word = {
  fi: "voitto",
  slug: "voitto",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "victory, win; profit",
  selitys:
    "1) Kilpailun voittaminen: 'joukkueen voitto'. 2) Taloudellinen hyöty: 'yrityksen voitto'. Tyyppi 1/valo, astevaihtelu tt:t (voitto → voiton). Johdettu verbistä voittaa. Vastakohta tappio. Vrt. voittaa, voittaja.",
  kuva: { alt: "voitto – kilpailun voittaminen tai taloudellinen hyöty" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu tt:t (vartalo voito-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "voiton", merkitys: "of the victory/profit" },
      { sija: "partitiivi (yks.)", muoto: "voittoa", merkitys: "victory (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "voittoja", merkitys: "victories (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu tt:t: nominatiivi voitto (vahva tt), genetiivi voiton (heikko t). Partitiivin monikko voittoja. Johdettu verbistä voittaa. Vastakohta tappio. Merkitykset: voitto (win) ja voitto (profit).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "voitto" },
          { label: "Partitiivi", form: "voittoa" },
          { label: "Genetiivi", form: "voiton" },
          { label: "Inessiivi", form: "voitossa" },
          { label: "Elatiivi", form: "voitosta" },
          { label: "Illatiivi", form: "voittoon" },
          { label: "Adessiivi", form: "voitolla" },
          { label: "Ablatiivi", form: "voitolta" },
          { label: "Allatiivi", form: "voitolle" },
          { label: "Essiivi", form: "voittona" },
          { label: "Translatiivi", form: "voitoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "voitot" },
          { label: "Partitiivi", form: "voittoja" },
          { label: "Genetiivi", form: "voittojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "voittaa",
      en: "to win, beat",
      taso: "B1",
      esim: { fi: "Joukkue voitti ottelun.", en: "The team won the match." },
    },
    {
      fi: "voittaja",
      en: "winner",
      taso: "B1",
      esim: { fi: "Voittaja sai palkinnon.", en: "The winner got a prize." },
    },
    {
      fi: "voitollinen",
      en: "profitable; victorious",
      taso: "B2",
      esim: { fi: "Vuosi oli voitollinen.", en: "The year was profitable." },
    },
  ],
  synonyymit: [
    { fi: "tuotto", en: "yield, return" },
    { fi: "menestys", en: "success" },
  ],
  esimerkit: {
    A2: { fi: "Hieno voitto!", en: "Great win!" },
    B1: { fi: "Yritys teki suuren voiton.", en: "The company made a big profit." },
    B2: {
      fi: "Niukan voiton jälkeen joukkue eteni jatkoon.",
      en: "After a narrow win the team advanced to the next round.",
    },
  },
  updatedAt: "2026-06-07",
};

export default voitto;
