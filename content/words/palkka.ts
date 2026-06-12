import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, kk–k gradation, stem palkka-/palka-.
// Genitive palkan, partitive palkkaa, illative palkkaan, partitive pl palkkoja.
const palkka: Word = {
  fi: "palkka",
  slug: "palkka",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A2",
  en: "salary, wage, pay",
  selitys:
    "Työstä saatu korvaus: 'hyvä palkka'. Tyyppi 9, astevaihtelu kk:k (palkka → palkan). Vrt. tuntipalkka (hourly pay), kuukausipalkka (monthly salary), palkkio (fee/reward).",
  kuva: { alt: "palkka – työstä saatu korvaus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; astevaihtelu kk:k",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "palkan", merkitys: "of the salary" },
      { sija: "partitiivi (yks.)", muoto: "palkkaa", merkitys: "salary (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "palkkoja", merkitys: "salaries (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu kk:k: palkan, palkassa (heikko), mutta palkka, palkkaa, palkkana (vahva). 'Saada palkkaa' = to earn a salary. Vrt. palkkio = fee, palkata = to hire.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "palkka" },
          { label: "Partitiivi", form: "palkkaa" },
          { label: "Genetiivi", form: "palkan" },
          { label: "Inessiivi", form: "palkassa" },
          { label: "Elatiivi", form: "palkasta" },
          { label: "Illatiivi", form: "palkkaan" },
          { label: "Adessiivi", form: "palkalla" },
          { label: "Ablatiivi", form: "palkalta" },
          { label: "Allatiivi", form: "palkalle" },
          { label: "Essiivi", form: "palkkana" },
          { label: "Translatiivi", form: "palkaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "palkat" },
          { label: "Partitiivi", form: "palkkoja" },
          { label: "Genetiivi", form: "palkkojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "palkkio",
      en: "fee, reward, bonus",
      taso: "B2",
      esim: { fi: "Hän sai palkkion hyvästä työstä.", en: "He got a reward for good work." },
    },
    {
      fi: "palkata",
      en: "to hire, employ",
      taso: "B1",
      esim: { fi: "Yritys palkkasi uuden työntekijän.", en: "The company hired a new employee." },
    },
    {
      fi: "palkankorotus",
      en: "pay raise",
      taso: "B2",
      esim: { fi: "Pyysin palkankorotusta.", en: "I asked for a pay raise." },
    },
  ],
  synonyymit: [
    { fi: "ansio", en: "earnings" },
    { fi: "korvaus", en: "compensation" },
  ],
  esimerkit: {
    A2: { fi: "Saan palkan kerran kuussa.", en: "I get my salary once a month." },
    B1: { fi: "Hänen palkkansa nousi tänä vuonna.", en: "Her salary rose this year." },
    B2: {
      fi: "Palkka ei ole ainoa syy, miksi viihdyn tässä työssä.",
      en: "Salary is not the only reason I enjoy this job.",
    },
  },
  updatedAt: "2026-06-06",
};

export default palkka;
