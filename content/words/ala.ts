import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation, stem ala-.
// Genitive alan, partitive alaa, illative alaan, partitive pl aloja.
const ala: Word = {
  fi: "ala",
  slug: "ala",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "B1",
  en: "field, sector, branch; area",
  selitys:
    "Toiminnan tai osaamisen alue: 'IT-ala' / 'oma ala'. Tyyppi 9, ei astevaihtelua. 'Alalla' = in the field/sector. Vrt. ammatti (profession), pinta-ala (surface area).",
  kuva: { alt: "ala – toiminnan tai osaamisen alue" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "alan", merkitys: "of the field" },
      { sija: "partitiivi (yks.)", muoto: "alaa", merkitys: "field (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "aloja", merkitys: "fields (partitive pl.)" },
    ],
    huom:
      "Monikon partitiivi aloja (a → o). 'Alalla' (adessiivi) = in the sector. 'Vaihtaa alaa' = to change careers. Vrt. ammattiala = professional field, pinta-ala = area.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ala" },
          { label: "Partitiivi", form: "alaa" },
          { label: "Genetiivi", form: "alan" },
          { label: "Inessiivi", form: "alassa" },
          { label: "Elatiivi", form: "alasta" },
          { label: "Illatiivi", form: "alaan" },
          { label: "Adessiivi", form: "alalla" },
          { label: "Ablatiivi", form: "alalta" },
          { label: "Allatiivi", form: "alalle" },
          { label: "Essiivi", form: "alana" },
          { label: "Translatiivi", form: "alaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "alat" },
          { label: "Partitiivi", form: "aloja" },
          { label: "Genetiivi", form: "alojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ammattiala",
      en: "professional field, trade",
      taso: "B2",
      esim: { fi: "Hän vaihtoi ammattialaa.", en: "He changed his professional field." },
    },
    {
      fi: "alainen",
      en: "subordinate; under",
      taso: "B2",
      esim: { fi: "Hän on minun alaiseni.", en: "He is my subordinate." },
    },
    {
      fi: "pinta-ala",
      en: "surface area",
      taso: "B2",
      esim: { fi: "Asunnon pinta-ala on 60 neliötä.", en: "The flat's area is 60 square metres." },
    },
  ],
  synonyymit: [
    { fi: "sektori", en: "sector" },
    { fi: "alue", en: "area, region" },
  ],
  esimerkit: {
    A2: { fi: "Millä alalla työskentelet?", en: "What field do you work in?" },
    B1: { fi: "Hän on oman alansa asiantuntija.", en: "She is an expert in her field." },
    B2: {
      fi: "Teknologia-ala muuttuu nopeammin kuin moni muu ala.",
      en: "The tech sector changes faster than many other fields.",
    },
  },
  updatedAt: "2026-06-06",
};

export default ala;
