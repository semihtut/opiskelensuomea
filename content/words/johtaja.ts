import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem johtaja-.
// Genitive johtajan, partitive johtajaa, illative johtajaan, partitive pl johtajia.
const johtaja: Word = {
  fi: "johtaja",
  slug: "johtaja",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "B1",
  en: "leader, director, manager",
  selitys:
    "Henkilö, joka johtaa: 'hyvä johtaja'. Tyyppi 10, ei astevaihtelua. Tekijännimi verbistä johtaa. Vrt. toimitusjohtaja (CEO), pomo (boss, colloquial).",
  kuva: { emoji: "🧑‍💼", alt: "johtaja – henkilö joka johtaa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "johtajan", merkitys: "of the leader" },
      { sija: "partitiivi (yks.)", muoto: "johtajaa", merkitys: "leader (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "johtajia", merkitys: "leaders (partitive pl.)" },
    ],
    huom:
      "Tekijännimi -ja: johtaa → johtaja. Monikon partitiivi johtajia. Vrt. johtaa = to lead, johto = management/lead, toimitusjohtaja = CEO, puheenjohtaja = chairperson.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "johtaja" },
          { label: "Partitiivi", form: "johtajaa" },
          { label: "Genetiivi", form: "johtajan" },
          { label: "Inessiivi", form: "johtajassa" },
          { label: "Elatiivi", form: "johtajasta" },
          { label: "Illatiivi", form: "johtajaan" },
          { label: "Adessiivi", form: "johtajalla" },
          { label: "Ablatiivi", form: "johtajalta" },
          { label: "Allatiivi", form: "johtajalle" },
          { label: "Essiivi", form: "johtajana" },
          { label: "Translatiivi", form: "johtajaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "johtajat" },
          { label: "Partitiivi", form: "johtajia" },
          { label: "Genetiivi", form: "johtajien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "johtaa",
      en: "to lead, manage; to result in",
      taso: "B1",
      esim: { fi: "Hän johtaa suurta tiimiä.", en: "She leads a large team." },
    },
    {
      fi: "johto",
      en: "management; lead; cable",
      taso: "B2",
      esim: { fi: "Yrityksen johto teki päätöksen.", en: "The company's management made the decision." },
    },
    {
      fi: "toimitusjohtaja",
      en: "CEO, managing director",
      taso: "B2",
      esim: { fi: "Hän on yhtiön toimitusjohtaja.", en: "He is the company's CEO." },
    },
  ],
  synonyymit: [
    { fi: "esimies", en: "supervisor, boss" },
    { fi: "pomo", en: "boss (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Hän on hyvä johtaja.", en: "He is a good leader." },
    B1: { fi: "Uusi johtaja aloitti maanantaina.", en: "The new manager started on Monday." },
    B2: {
      fi: "Hyvä johtaja kuuntelee tiimiään ennen päätöksen tekemistä.",
      en: "A good leader listens to their team before making a decision.",
    },
  },
  updatedAt: "2026-06-06",
};

export default johtaja;
