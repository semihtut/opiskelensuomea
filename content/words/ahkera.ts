import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem ahkera-.
// Genitive ahkeran, partitive ahkeraa, illative ahkeraan, partitive pl ahkeria.
const ahkera: Word = {
  fi: "ahkera",
  slug: "ahkera",
  pos: "adjektiivi (tyyppi 10/koira)",
  posClass: "adjektiivi",
  level: "B1",
  en: "diligent, hard-working, industrious",
  selitys:
    "Paljon ja innokkaasti työtä tekevä: 'ahkera opiskelija'. Tyyppi 10, ei astevaihtelua. Vrt. ahkeruus (diligence). Vastakohta laiska.",
  kuva: { alt: "ahkera – paljon työtä tekevä" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ahkeran", merkitys: "of the diligent" },
      { sija: "partitiivi (yks.)", muoto: "ahkeraa", merkitys: "diligent (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "ahkeria", merkitys: "diligent (partitive pl.)" },
    ],
    huom:
      "Helppo tyypin 10 sana: ahkera → ahkeran, ahkeraa, ahkeria. Vastakohta laiska. Vrt. ahkeruus = diligence, ahkerasti = diligently.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "ahkera" },
          { label: "Partitiivi", form: "ahkeraa" },
          { label: "Genetiivi", form: "ahkeran" },
          { label: "Inessiivi", form: "ahkerassa" },
          { label: "Illatiivi", form: "ahkeraan" },
          { label: "Adessiivi", form: "ahkeralla" },
          { label: "Essiivi", form: "ahkerana" },
          { label: "Translatiivi", form: "ahkeraksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ahkerat" },
          { label: "Partitiivi", form: "ahkeria" },
          { label: "Genetiivi", form: "ahkerien" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "ahkerampi" },
          { label: "Komparatiivi (gen.)", form: "ahkeramman" },
          { label: "Superlatiivi (nom.)", form: "ahkerin" },
          { label: "Superlatiivi (gen.)", form: "ahkerimman" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ahkeruus",
      en: "diligence, industriousness",
      taso: "B2",
      esim: { fi: "Ahkeruus palkitaan.", en: "Diligence is rewarded." },
    },
    {
      fi: "ahkerasti",
      en: "diligently, hard",
      taso: "B1",
      esim: { fi: "Hän opiskelee ahkerasti.", en: "She studies diligently." },
    },
    {
      fi: "ahkeroida",
      en: "to work diligently, toil",
      taso: "B2",
      esim: { fi: "He ahkeroivat pellolla koko päivän.", en: "They toiled in the field all day." },
    },
  ],
  synonyymit: [
    { fi: "uuttera", en: "industrious" },
    { fi: "työteliäs", en: "hard-working" },
  ],
  esimerkit: {
    A2: { fi: "Hän on ahkera työntekijä.", en: "He is a hard-working employee." },
    B1: { fi: "Ahkerat oppilaat saivat hyvät arvosanat.", en: "The diligent students got good grades." },
    B2: {
      fi: "Ahkera ei aina tarkoita tehokasta — myös lepo on tärkeää.",
      en: "Diligent doesn't always mean efficient — rest matters too.",
    },
  },
  updatedAt: "2026-06-06",
};

export default ahkera;
