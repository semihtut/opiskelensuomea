import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, tt:t gradation, stem tentti- ~ tenti-.
// Genitive tentin, partitive tenttiä, partitive pl tenttejä.
const tentti: Word = {
  fi: "tentti",
  slug: "tentti",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "B1",
  en: "exam (at university)",
  selitys:
    "Yliopiston tai korkeakoulun koe: 'lukea tenttiin', 'mennä tenttiin'. Tyyppi 5/risti, astevaihtelu tt:t (tentti → tentin). HUOM: koulussa ja kursseilla käytetään sanaa koe; tentti on korkeakoulujen koe. Vrt. koe, kuulustelu, suorittaa.",
  kuva: { alt: "tentti – yliopiston tai korkeakoulun koe" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; astevaihtelu tt:t (tentti ~ tenti-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tentin", merkitys: "of the exam" },
      { sija: "partitiivi (yks.)", muoto: "tenttiä", merkitys: "exam (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tenttejä", merkitys: "exams (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva tentti (nominatiivi, partitiivi tenttiä), heikko tenti- (tentin, tentissä). 'Lukea tenttiin' = to study for an exam. Korkeakoulun koe = tentti, muuten koe. Vrt. koe.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tentti" },
          { label: "Partitiivi", form: "tenttiä" },
          { label: "Genetiivi", form: "tentin" },
          { label: "Inessiivi", form: "tentissä" },
          { label: "Elatiivi", form: "tentistä" },
          { label: "Illatiivi", form: "tenttiin" },
          { label: "Adessiivi", form: "tentillä" },
          { label: "Ablatiivi", form: "tentiltä" },
          { label: "Allatiivi", form: "tentille" },
          { label: "Essiivi", form: "tenttinä" },
          { label: "Translatiivi", form: "tentiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tentit" },
          { label: "Partitiivi", form: "tenttejä" },
          { label: "Genetiivi", form: "tenttien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tenttiä",
      en: "to take an exam; to grill (question)",
      taso: "B2",
      esim: { fi: "Tentin kurssin ensi viikolla.", en: "I'll take the course exam next week." },
    },
    {
      fi: "kuulustelu",
      en: "examination, interrogation",
      taso: "B2",
      esim: { fi: "Suullinen kuulustelu oli vaikea.", en: "The oral examination was difficult." },
    },
  ],
  synonyymit: [
    { fi: "koe", en: "test, exam" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on huomenna tentti.", en: "I have an exam tomorrow." },
    B1: { fi: "Luin koko viikonlopun tenttiin.", en: "I studied for the exam all weekend." },
    B2: {
      fi: "Läpäisin tentin kiitettävästi, vaikka kysymykset olivat odotettua vaikeampia.",
      en: "I passed the exam with distinction, even though the questions were harder than expected.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tentti;
