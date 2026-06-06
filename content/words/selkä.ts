import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, k:∅ gradation, stem selkä- ~ selä-.
// Genitive selän, partitive selkää, illative selkään, partitive pl selkiä.
const selka: Word = {
  fi: "selkä",
  slug: "selkä",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A2",
  en: "back (body part)",
  selitys:
    "Kehon takapuoli niskasta lantioon: 'kipeä selkä'. Tyyppi 10, astevaihtelu k:∅ (selkä → selän). Vrt. selkäranka (spine), selkäkipu (back pain), selällään (on one's back).",
  kuva: { emoji: "🔙", alt: "selkä – kehon takapuoli" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; astevaihtelu k:∅ (selkä ↔ selä-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "selän", merkitys: "of the back" },
      { sija: "partitiivi (yks.)", muoto: "selkää", merkitys: "back (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "selkiä", merkitys: "backs (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa k katoaa: genetiivi selän, adessiivi selällä. Vahva aste k säilyy partitiivissa selkää ja illatiivissa selkään. 'Kääntää selkä' = to turn one's back.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "selkä" },
          { label: "Partitiivi", form: "selkää" },
          { label: "Genetiivi", form: "selän" },
          { label: "Inessiivi", form: "selässä" },
          { label: "Elatiivi", form: "selästä" },
          { label: "Illatiivi", form: "selkään" },
          { label: "Adessiivi", form: "selällä" },
          { label: "Ablatiivi", form: "selältä" },
          { label: "Allatiivi", form: "selälle" },
          { label: "Essiivi", form: "selkänä" },
          { label: "Translatiivi", form: "seläksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "selät" },
          { label: "Partitiivi", form: "selkiä" },
          { label: "Genetiivi", form: "selkien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "selkäranka",
      en: "spine, backbone",
      taso: "B2",
      esim: { fi: "Selkäranka tukee koko kehoa.", en: "The spine supports the whole body." },
    },
    {
      fi: "selkäkipu",
      en: "back pain",
      taso: "B1",
      esim: { fi: "Istumatyö aiheuttaa selkäkipua.", en: "Sedentary work causes back pain." },
    },
    {
      fi: "selkäreppu",
      en: "backpack",
      taso: "B1",
      esim: { fi: "Pakkasin selkärepun täyteen.", en: "I packed the backpack full." },
    },
  ],
  synonyymit: [
    { fi: "selkäpuoli", en: "back side" },
    { fi: "taustapuoli", en: "rear, reverse side" },
  ],
  esimerkit: {
    A2: { fi: "Selkäni on kipeä.", en: "My back is sore." },
    B1: { fi: "Nostin laatikon ja loukkasin selkäni.", en: "I lifted the box and hurt my back." },
    B2: {
      fi: "Hyvä työtuoli tukee selkää ja ehkäisee kipuja.",
      en: "A good office chair supports the back and prevents pain.",
    },
  },
  updatedAt: "2026-06-06",
};

export default selka;
