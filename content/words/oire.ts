import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, no gradation, stem oiree-.
// Genitive oireen, partitive oiretta, illative oireeseen, partitive pl oireita.
const oire: Word = {
  fi: "oire",
  slug: "oire",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B1",
  en: "symptom",
  selitys:
    "Sairauden tai ongelman merkki: 'flunssan oireet'. Tyyppi 48/hame, ei astevaihtelua; vartalo oiree-. Voi olla myös laajemman ongelman merkki. Vrt. oireilla, merkki, sairaus.",
  kuva: { emoji: "🤧", alt: "oire – sairauden tai ongelman merkki" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; ei astevaihtelua (vartalo oiree-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "oireen", merkitys: "of the symptom" },
      { sija: "partitiivi (yks.)", muoto: "oiretta", merkitys: "symptom (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "oireita", merkitys: "symptoms (partitive pl.)" },
    ],
    huom:
      "Tyyppi 48 (-e): nominatiivi oire, vartalo oiree- (oireen, oireeseen), partitiivi oiretta. Ei astevaihtelua. Usein monikossa: oireet = symptoms. Vrt. oireilla = to show symptoms, merkki = sign.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "oire" },
          { label: "Partitiivi", form: "oiretta" },
          { label: "Genetiivi", form: "oireen" },
          { label: "Inessiivi", form: "oireessa" },
          { label: "Elatiivi", form: "oireesta" },
          { label: "Illatiivi", form: "oireeseen" },
          { label: "Adessiivi", form: "oireella" },
          { label: "Ablatiivi", form: "oireelta" },
          { label: "Allatiivi", form: "oireelle" },
          { label: "Essiivi", form: "oireena" },
          { label: "Translatiivi", form: "oireeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "oireet" },
          { label: "Partitiivi", form: "oireita" },
          { label: "Genetiivi", form: "oireiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "oireilla",
      en: "to show symptoms",
      taso: "B2",
      esim: { fi: "Tauti oireilee monin tavoin.", en: "The disease shows symptoms in many ways." },
    },
    {
      fi: "oireeton",
      en: "asymptomatic, symptom-free",
      taso: "B2",
      esim: { fi: "Tartunta voi olla oireeton.", en: "An infection can be asymptomatic." },
    },
  ],
  synonyymit: [
    { fi: "merkki", en: "sign" },
    { fi: "tuntemus", en: "sensation" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on flunssan oireita.", en: "I have flu symptoms." },
    B1: { fi: "Oireet pahenivat illalla.", en: "The symptoms got worse in the evening." },
    B2: {
      fi: "Väsymys voi olla oire monenlaisista terveysongelmista.",
      en: "Tiredness can be a symptom of many kinds of health problems.",
    },
  },
  updatedAt: "2026-06-07",
};

export default oire;
