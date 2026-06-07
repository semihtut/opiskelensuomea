import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem ura-.
// Genitive uran, partitive uraa, partitive pl uria.
const ura: Word = {
  fi: "ura",
  slug: "ura",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "B1",
  en: "career; track, groove",
  selitys:
    "Ihmisen ammatillinen kehityspolku: 'tehdä uraa', 'pitkä ura'. Myös konkreettinen ura tai vako (esim. suksen ura). Tyyppi 10/koira, ei astevaihtelua. Vrt. urakehitys, uraputki, ammatti.",
  kuva: { emoji: "📈", alt: "ura – ihmisen ammatillinen kehityspolku" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua (vartalo ura-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "uran", merkitys: "of the career" },
      { sija: "partitiivi (yks.)", muoto: "uraa", merkitys: "career (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "uria", merkitys: "careers (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10/koira: ei astevaihtelua. Partitiivin monikko uria (a katoaa, ei urja). 'Tehdä uraa' = to build a career. Vrt. urakehitys, uraputki.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ura" },
          { label: "Partitiivi", form: "uraa" },
          { label: "Genetiivi", form: "uran" },
          { label: "Inessiivi", form: "urassa" },
          { label: "Elatiivi", form: "urasta" },
          { label: "Illatiivi", form: "uraan" },
          { label: "Adessiivi", form: "uralla" },
          { label: "Ablatiivi", form: "uralta" },
          { label: "Allatiivi", form: "uralle" },
          { label: "Essiivi", form: "urana" },
          { label: "Translatiivi", form: "uraksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "urat" },
          { label: "Partitiivi", form: "uria" },
          { label: "Genetiivi", form: "urien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "urakehitys",
      en: "career development",
      taso: "B2",
      esim: { fi: "Yritys tukee työntekijöiden urakehitystä.", en: "The company supports employees' career development." },
    },
    {
      fi: "uraputki",
      en: "career fast track",
      taso: "B2",
      esim: { fi: "Hän on selvässä uraputkessa.", en: "He is clearly on a career fast track." },
    },
  ],
  synonyymit: [
    { fi: "ammattipolku", en: "career path" },
  ],
  esimerkit: {
    A2: { fi: "Haluan tehdä uraa.", en: "I want to build a career." },
    B1: { fi: "Hänellä on pitkä ura opettajana.", en: "She has a long career as a teacher." },
    B2: {
      fi: "Vaihdoin alaa kesken urani, koska halusin mielekkäämpää työtä.",
      en: "I changed fields mid-career because I wanted more meaningful work.",
    },
  },
  updatedAt: "2026-06-07",
};

export default ura;
