import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 17/vapaa, no gradation, stem vastuu-.
// Genitive vastuun, partitive vastuuta, illative vastuuseen, partitive pl vastuita.
const vastuu: Word = {
  fi: "vastuu",
  slug: "vastuu",
  pos: "substantiivi (tyyppi 17/vapaa)",
  posClass: "substantiivi",
  level: "B1",
  en: "responsibility, accountability, liability",
  selitys:
    "Velvollisuus huolehtia jostakin ja vastata seurauksista: 'ottaa vastuu'. Tyyppi 17/vapaa, ei astevaihtelua; pitkä loppuvokaali uu. Johdettu verbistä vastata. Vrt. vastata, vastuullinen, velvollisuus.",
  kuva: { alt: "vastuu – velvollisuus huolehtia ja vastata seurauksista" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 17/vapaa; ei astevaihtelua (vartalo vastuu-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "vastuun", merkitys: "of the responsibility" },
      { sija: "partitiivi (yks.)", muoto: "vastuuta", merkitys: "responsibility (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "vastuita", merkitys: "responsibilities (partitive pl.)" },
    ],
    huom:
      "Tyyppi 17 (pitkä -uu): illatiivi vastuuseen (-seen), partitiivi vastuuta, partitiivin monikko vastuita. Ei astevaihtelua. 'Ottaa/kantaa vastuu' = to take responsibility. Vrt. vastata = to answer/be responsible.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "vastuu" },
          { label: "Partitiivi", form: "vastuuta" },
          { label: "Genetiivi", form: "vastuun" },
          { label: "Inessiivi", form: "vastuussa" },
          { label: "Elatiivi", form: "vastuusta" },
          { label: "Illatiivi", form: "vastuuseen" },
          { label: "Adessiivi", form: "vastuulla" },
          { label: "Ablatiivi", form: "vastuulta" },
          { label: "Allatiivi", form: "vastuulle" },
          { label: "Essiivi", form: "vastuuna" },
          { label: "Translatiivi", form: "vastuuksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vastuut" },
          { label: "Partitiivi", form: "vastuita" },
          { label: "Genetiivi", form: "vastuiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vastuullinen",
      en: "responsible",
      taso: "B2",
      esim: { fi: "Hän on vastuullinen henkilö.", en: "She is a responsible person." },
    },
    {
      fi: "vastata",
      en: "to answer; to be responsible",
      taso: "A2",
      esim: { fi: "Kuka vastaa tästä?", en: "Who is responsible for this?" },
    },
    {
      fi: "vastuuton",
      en: "irresponsible",
      taso: "B2",
      esim: { fi: "Se oli vastuutonta.", en: "That was irresponsible." },
    },
  ],
  synonyymit: [
    { fi: "velvollisuus", en: "obligation, duty" },
    { fi: "vastuualue", en: "area of responsibility" },
  ],
  esimerkit: {
    A2: { fi: "Otan vastuun virheestä.", en: "I take responsibility for the mistake." },
    B1: { fi: "Hänellä on suuri vastuu työssään.", en: "He has great responsibility in his job." },
    B2: {
      fi: "Johtaja kantaa lopullisen vastuun tiimin päätöksistä.",
      en: "The leader bears the ultimate responsibility for the team's decisions.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vastuu;
