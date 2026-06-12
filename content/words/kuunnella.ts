import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 67/tulla (verb type 3), nt:nn gradation,
// stem kuuntele-. Present kuuntelen, past kuuntelin, past participle kuunnellut.
const kuunnella: Word = {
  fi: "kuunnella",
  slug: "kuunnella",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "A1",
  en: "to listen (to)",
  selitys:
    "Kuunnella tarkoituksella, keskittyä ääneen. Tyyppi 3, astevaihtelu nt:nn (kuuntele- → kuunnel-). Vrt. kuulla (= hear, pelkkä aisti).",
  kuva: { alt: "kuunnella – kuulokkeilla kuunteleva ihminen" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-lla); astevaihtelu nt:nn (kuuntele- ↔ kuunnel-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "kuuntelen", merkitys: "I listen" },
      { sija: "imperfekti (minä)", muoto: "kuuntelin", merkitys: "I listened" },
      { sija: "kielto (minä)", muoto: "en kuuntele", merkitys: "I don't listen" },
    ],
    huom:
      "Persoonamuodoissa vahva aste nt (kuuntelen), infinitiivissä ja partisiipissa heikko aste nn (kuunnella, kuunnellut). Kohde partitiivissa: 'Kuuntelen musiikkia.'",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kuuntelen" },
          { label: "sinä", form: "kuuntelet" },
          { label: "hän", form: "kuuntelee" },
          { label: "me", form: "kuuntelemme" },
          { label: "te", form: "kuuntelette" },
          { label: "he", form: "kuuntelevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kuuntele" },
          { label: "sinä", form: "et kuuntele" },
          { label: "hän", form: "ei kuuntele" },
          { label: "me", form: "emme kuuntele" },
          { label: "te", form: "ette kuuntele" },
          { label: "he", form: "eivät kuuntele" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kuuntelin" },
          { label: "sinä", form: "kuuntelit" },
          { label: "hän", form: "kuunteli" },
          { label: "me", form: "kuuntelimme" },
          { label: "te", form: "kuuntelitte" },
          { label: "he", form: "kuuntelivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en kuunnellut" },
          { label: "sinä", form: "et kuunnellut" },
          { label: "hän", form: "ei kuunnellut" },
          { label: "me", form: "emme kuunnelleet" },
          { label: "te", form: "ette kuunnelleet" },
          { label: "he", form: "eivät kuunnelleet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kuunnellut" },
          { label: "sinä", form: "olet kuunnellut" },
          { label: "hän", form: "on kuunnellut" },
          { label: "me", form: "olemme kuunnelleet" },
          { label: "te", form: "olette kuunnelleet" },
          { label: "he", form: "ovat kuunnelleet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole kuunnellut" },
          { label: "hän", form: "ei ole kuunnellut" },
          { label: "he", form: "eivät ole kuunnelleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kuuntele!" },
          { label: "te", form: "kuunnelkaa!" },
          { label: "kielto (sinä)", form: "älä kuuntele" },
          { label: "kielto (te)", form: "älkää kuunnelko" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kuuntelija",
      en: "listener",
      taso: "B1",
      esim: { fi: "Ohjelmalla on paljon kuuntelijoita.", en: "The show has many listeners." },
    },
    {
      fi: "kuunnelma",
      en: "radio play",
      taso: "B2",
      esim: { fi: "Radiossa tuli vanha kuunnelma.", en: "An old radio play was on the radio." },
    },
    {
      fi: "salakuunnella",
      en: "to eavesdrop",
      taso: "B2",
      esim: { fi: "Hän salakuunteli keskustelua.", en: "He eavesdropped on the conversation." },
    },
  ],
  synonyymit: [
    { fi: "kuulostella", en: "to listen out for" },
    { fi: "kuulla", en: "to hear (passively)" },
  ],
  esimerkit: {
    A2: { fi: "Kuuntelen musiikkia joka päivä.", en: "I listen to music every day." },
    B1: { fi: "Kuuntelimme opettajaa tarkasti.", en: "We listened to the teacher carefully." },
    B2: {
      fi: "Jos olisit kuunnellut, tietäisit vastauksen.",
      en: "If you had listened, you'd know the answer.",
    },
  },
  updatedAt: "2026-06-05",
};

export default kuunnella;
