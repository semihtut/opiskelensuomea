import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa (type 1), tt:t gradation,
// stem odotta-. Present odotan, past odotin, past participle odottanut.
const odottaa: Word = {
  fi: "odottaa",
  slug: "odottaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to wait, expect",
  selitys:
    "Pysyä paikallaan kunnes jotain tapahtuu; uskoa jonkin tulevan. Tyyppi 1, astevaihtelu tt:t: odottaa → odotan. Vaatii usein partitiivin: 'odotan bussia'.",
  kuva: { alt: "odottaa – odotetaan ja katsotaan kelloa" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ttaa); astevaihtelu tt:t",
    muodot: [
      { sija: "preesens (minä)", muoto: "odotan", merkitys: "I wait" },
      { sija: "imperfekti (minä)", muoto: "odotin", merkitys: "I waited" },
      { sija: "kielto (minä)", muoto: "en odota", merkitys: "I don't wait" },
    ],
    huom:
      "Heikossa asteessa tt → t: odotan, odotin (mutta odottaa, odottavat). Objekti partitiivissa: 'odotan junaa, sinua'. 'Odottaa lasta' = to be expecting a baby.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "odotan" },
          { label: "sinä", form: "odotat" },
          { label: "hän", form: "odottaa" },
          { label: "me", form: "odotamme" },
          { label: "te", form: "odotatte" },
          { label: "he", form: "odottavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en odota" },
          { label: "hän", form: "ei odota" },
          { label: "he", form: "eivät odota" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "odotin" },
          { label: "sinä", form: "odotit" },
          { label: "hän", form: "odotti" },
          { label: "me", form: "odotimme" },
          { label: "te", form: "odotitte" },
          { label: "he", form: "odottivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen odottanut" },
          { label: "hän", form: "on odottanut" },
          { label: "he", form: "ovat odottaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "odota!" },
          { label: "te", form: "odottakaa!" },
          { label: "kielto (sinä)", form: "älä odota" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "odotus",
      en: "wait, expectation",
      taso: "B1",
      esim: { fi: "Odotus tuntui pitkältä.", en: "The wait felt long." },
    },
    {
      fi: "odottamaton",
      en: "unexpected",
      taso: "B2",
      esim: { fi: "Se oli odottamaton uutinen.", en: "It was unexpected news." },
    },
    {
      fi: "odotushuone",
      en: "waiting room",
      taso: "B1",
      esim: { fi: "Istuin lääkärin odotushuoneessa.", en: "I sat in the doctor's waiting room." },
    },
  ],
  synonyymit: [
    { fi: "varttoa", en: "to wait (colloquial, dialectal)" },
    { fi: "jäädä odottamaan", en: "to stay and wait" },
  ],
  esimerkit: {
    A2: { fi: "Odotan bussia pysäkillä.", en: "I'm waiting for the bus at the stop." },
    B1: { fi: "Odotimme sinua koko illan.", en: "We waited for you the whole evening." },
    B2: {
      fi: "En odottanut, että matka kestäisi näin kauan, joten en ottanut tarpeeksi ruokaa mukaan.",
      en: "I didn't expect the trip to take this long, so I didn't bring enough food.",
    },
  },
  updatedAt: "2026-06-05",
};

export default odottaa;
