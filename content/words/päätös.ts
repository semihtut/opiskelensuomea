import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem päätökse-.
// Genitive päätöksen, partitive päätöstä, illative päätökseen, partitive pl päätöksiä.
const paatos: Word = {
  fi: "päätös",
  slug: "päätös",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "decision; conclusion, ending",
  selitys:
    "Lopullinen valinta tai jonkin loppu: 'tehdä päätös'. Tyyppi 39, verbijohdos sanasta päättää (-ös → -ökse-), ei astevaihtelua. Vrt. päättää (to decide / to end), päätie (decision).",
  kuva: { alt: "päätös – lopullinen valinta" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; verbijohdos (-ös → -ökse-); ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "päätöksen", merkitys: "of the decision" },
      { sija: "partitiivi (yks.)", muoto: "päätöstä", merkitys: "decision (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "päätöksiä", merkitys: "decisions (partitive pl.)" },
    ],
    huom:
      "Vartalo -ökse-: päätös → päätöksen, mutta partitiivi päätöstä. 'Tehdä päätös' = to make a decision. Vrt. päättää = to decide / to conclude.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "päätös" },
          { label: "Partitiivi", form: "päätöstä" },
          { label: "Genetiivi", form: "päätöksen" },
          { label: "Inessiivi", form: "päätöksessä" },
          { label: "Elatiivi", form: "päätöksestä" },
          { label: "Illatiivi", form: "päätökseen" },
          { label: "Adessiivi", form: "päätöksellä" },
          { label: "Ablatiivi", form: "päätökseltä" },
          { label: "Allatiivi", form: "päätökselle" },
          { label: "Essiivi", form: "päätöksenä" },
          { label: "Translatiivi", form: "päätökseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "päätökset" },
          { label: "Partitiivi", form: "päätöksiä" },
          { label: "Genetiivi", form: "päätösten / päätöksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "päätöksenteko",
      en: "decision-making",
      taso: "B2",
      esim: { fi: "Päätöksenteko vie aikaa.", en: "Decision-making takes time." },
    },
    {
      fi: "loppupäätös",
      en: "final decision, conclusion",
      taso: "B2",
      esim: { fi: "Loppupäätös oli kaikkien mieleen.", en: "The final decision pleased everyone." },
    },
    {
      fi: "ennakkopäätös",
      en: "precedent (legal); prejudgment",
      taso: "B2",
      esim: { fi: "Tuomioistuin antoi ennakkopäätöksen.", en: "The court issued a precedent." },
    },
  ],
  synonyymit: [
    { fi: "ratkaisu", en: "resolution, solution" },
    { fi: "valinta", en: "choice" },
  ],
  esimerkit: {
    A2: { fi: "Tein päätöksen eilen.", en: "I made the decision yesterday." },
    B1: { fi: "Päätös ei ollut helppo.", en: "The decision wasn't easy." },
    B2: {
      fi: "Hallituksen päätös herätti laajaa keskustelua.",
      en: "The government's decision sparked wide debate.",
    },
  },
  updatedAt: "2026-06-06",
};

export default paatos;
