import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, no gradation, stem vaihee-.
// Genitive vaiheen, partitive vaihetta, illative vaiheeseen, partitive pl vaiheita.
const vaihe: Word = {
  fi: "vaihe",
  slug: "vaihe",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B1",
  en: "phase, stage, step",
  selitys:
    "Erotettavissa oleva osa pidemmästä prosessista tai kehityksestä: 'projektin ensimmäinen vaihe'. Tyyppi 48/hame, ei astevaihtelua; vartalo vaihee-. Vrt. jakso, kausi, vaiheittain.",
  kuva: { emoji: "🪜", alt: "vaihe – erotettavissa oleva osa prosessista" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; ei astevaihtelua (vartalo vaihee-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "vaiheen", merkitys: "of the phase" },
      { sija: "partitiivi (yks.)", muoto: "vaihetta", merkitys: "phase (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "vaiheita", merkitys: "phases (partitive pl.)" },
    ],
    huom:
      "Tyyppi 48 (-e): nominatiivi vaihe, vartalo vaihee- (vaiheen, vaiheeseen), partitiivi vaihetta. Ei astevaihtelua. 'Vaiheittain' = in stages, step by step. Vrt. jakso = period, episode.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "vaihe" },
          { label: "Partitiivi", form: "vaihetta" },
          { label: "Genetiivi", form: "vaiheen" },
          { label: "Inessiivi", form: "vaiheessa" },
          { label: "Elatiivi", form: "vaiheesta" },
          { label: "Illatiivi", form: "vaiheeseen" },
          { label: "Adessiivi", form: "vaiheella" },
          { label: "Ablatiivi", form: "vaiheelta" },
          { label: "Allatiivi", form: "vaiheelle" },
          { label: "Essiivi", form: "vaiheena" },
          { label: "Translatiivi", form: "vaiheeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vaiheet" },
          { label: "Partitiivi", form: "vaiheita" },
          { label: "Genetiivi", form: "vaiheiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vaiheittain",
      en: "in stages, step by step",
      taso: "B2",
      esim: { fi: "Muutos tehdään vaiheittain.", en: "The change is made in stages." },
    },
    {
      fi: "välivaihe",
      en: "intermediate stage",
      taso: "B2",
      esim: { fi: "Tämä on vain välivaihe.", en: "This is just an intermediate stage." },
    },
  ],
  synonyymit: [
    { fi: "jakso", en: "period, phase" },
    { fi: "kausi", en: "season, period" },
  ],
  esimerkit: {
    A2: { fi: "Olemme nyt viimeisessä vaiheessa.", en: "We are now in the final stage." },
    B1: { fi: "Projekti eteni vaihe vaiheelta.", en: "The project advanced stage by stage." },
    B2: {
      fi: "Jokaiseen elämänvaiheeseen kuuluu sekä haasteita että iloja.",
      en: "Every phase of life includes both challenges and joys.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vaihe;
