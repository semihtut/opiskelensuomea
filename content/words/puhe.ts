import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, no gradation, stem puhee-.
// Genitive puheen, partitive puhetta, partitive pl puheita.
const puhe: Word = {
  fi: "puhe",
  slug: "puhe",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "A2",
  en: "speech, talk; address",
  selitys:
    "1) Puhuminen tai puhetapa: 'selkeä puhe'. 2) Juhlapuhe, esitys: 'pitää puhe'. Tyyppi 48/hame, ei astevaihtelua. Johdettu verbistä puhua. Vrt. puhua, puhuja, juhlapuhe.",
  kuva: { alt: "puhe – puhuminen tai juhlapuhe" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; ei astevaihtelua (vartalo puhee-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "puheen", merkitys: "of the speech" },
      { sija: "partitiivi (yks.)", muoto: "puhetta", merkitys: "speech (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "puheita", merkitys: "speeches (partitive pl.)" },
    ],
    huom:
      "Tyyppi 48/hame: ei astevaihtelua, vartalo puhee- (puheen, puheella), partitiivi puhetta, partitiivin monikko puheita. 'Pitää puhe' = to give a speech. Vrt. puhua, puhuja, puheenvuoro.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "puhe" },
          { label: "Partitiivi", form: "puhetta" },
          { label: "Genetiivi", form: "puheen" },
          { label: "Inessiivi", form: "puheessa" },
          { label: "Elatiivi", form: "puheesta" },
          { label: "Illatiivi", form: "puheeseen" },
          { label: "Adessiivi", form: "puheella" },
          { label: "Ablatiivi", form: "puheelta" },
          { label: "Allatiivi", form: "puheelle" },
          { label: "Essiivi", form: "puheena" },
          { label: "Translatiivi", form: "puheeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "puheet" },
          { label: "Partitiivi", form: "puheita" },
          { label: "Genetiivi", form: "puheiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "puhuja",
      en: "speaker",
      taso: "B1",
      esim: { fi: "Puhuja oli erittäin hyvä.", en: "The speaker was very good." },
    },
    {
      fi: "juhlapuhe",
      en: "celebratory speech",
      taso: "B2",
      esim: { fi: "Hän piti juhlapuheen.", en: "He gave a celebratory speech." },
    },
  ],
  synonyymit: [
    { fi: "esitelmä", en: "talk, presentation" },
  ],
  esimerkit: {
    A2: { fi: "Hänen puheensa oli selkeää.", en: "Her speech was clear." },
    B1: { fi: "Presidentti piti puheen.", en: "The president gave a speech." },
    B2: {
      fi: "Hyvä puhe vetoaa sekä järkeen että tunteisiin.",
      en: "A good speech appeals to both reason and emotions.",
    },
  },
  updatedAt: "2026-06-07",
};

export default puhe;
