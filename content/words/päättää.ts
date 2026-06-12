import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt–t gradation, stem päättä-.
// Present päätän, past päätin, past participle päättänyt.
const paattaa: Word = {
  fi: "päättää",
  slug: "päättää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to decide; to end, conclude",
  selitys:
    "Tehdä päätös tai saattaa loppuun: 'päätin lähteä' (I decided to leave) / 'päätämme kokouksen' (we end the meeting). Astevaihtelu tt:t (päättää → päätän). Vrt. loppua (end, intransitive).",
  kuva: { alt: "päättää – tehdä päätös tai lopettaa" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ttää); astevaihtelu tt:t; vartalo päättä-",
    muodot: [
      { sija: "preesens (minä)", muoto: "päätän", merkitys: "I decide" },
      { sija: "imperfekti (minä)", muoto: "päätin", merkitys: "I decided" },
      { sija: "NUT-partisiippi", muoto: "päättänyt", merkitys: "(have) decided" },
    ],
    huom:
      "Kaksi merkitystä: 1) tehdä päätös ('päätän itse'), 2) lopettaa ('päätän puheen'). Astevaihtelu tt:t: päätän, päätät, päätti. Vrt. päätös = decision, päätyä = to end up.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "päätän" },
          { label: "sinä", form: "päätät" },
          { label: "hän", form: "päättää" },
          { label: "me", form: "päätämme" },
          { label: "te", form: "päätätte" },
          { label: "he", form: "päättävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en päätä" },
          { label: "hän", form: "ei päätä" },
          { label: "he", form: "eivät päätä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "päätin" },
          { label: "sinä", form: "päätit" },
          { label: "hän", form: "päätti" },
          { label: "me", form: "päätimme" },
          { label: "te", form: "päätitte" },
          { label: "he", form: "päättivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen päättänyt" },
          { label: "hän", form: "on päättänyt" },
          { label: "he", form: "ovat päättäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "päätä!" },
          { label: "te", form: "päättäkää!" },
          { label: "kielto (sinä)", form: "älä päätä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "päätös",
      en: "decision",
      taso: "B1",
      esim: { fi: "Teimme yhteisen päätöksen.", en: "We made a joint decision." },
    },
    {
      fi: "päättäväinen",
      en: "determined, resolute",
      taso: "B2",
      esim: { fi: "Hän on hyvin päättäväinen ihminen.", en: "She is a very determined person." },
    },
    {
      fi: "päätyä",
      en: "to end up (somewhere)",
      taso: "B1",
      esim: { fi: "Päädyimme samaan ravintolaan.", en: "We ended up at the same restaurant." },
    },
  ],
  synonyymit: [
    { fi: "tehdä päätös", en: "to make a decision" },
    { fi: "lopettaa", en: "to end, finish" },
  ],
  esimerkit: {
    A2: { fi: "Päätin ostaa uuden puhelimen.", en: "I decided to buy a new phone." },
    B1: { fi: "Kuka täällä päättää asioista?", en: "Who decides things here?" },
    B2: {
      fi: "Lopulta päätimme lykätä matkaa, koska sää oli liian huono.",
      en: "In the end we decided to postpone the trip because the weather was too bad.",
    },
  },
  updatedAt: "2026-06-06",
};

export default paattaa;
