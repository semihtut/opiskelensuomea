import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 54/huutaa, nt:nn gradation, imperfect t→s.
// Present minä asennan, hän asentaa; imperfect minä asensin; NUT asentanut.
const asentaa: Word = {
  fi: "asentaa",
  slug: "asentaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to install, set up",
  selitys:
    "Liittää tai valmistella jokin käyttöä varten: 'asentaa ohjelma'. Tyyppi 1 (-aa), Kotus 54/huutaa, astevaihtelu nt:nn (asennan) ja imperfektissä t→s (asensin). Vrt. asennus, asentaja, asettaa.",
  kuva: { emoji: "🔧", alt: "asentaa – liittää tai valmistella jokin käyttöä varten" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 54/huutaa; astevaihtelu nt:nn + imperfektin t→s",
    muodot: [
      { sija: "preesens (minä)", muoto: "asennan", merkitys: "I install" },
      { sija: "imperfekti (minä)", muoto: "asensin", merkitys: "I installed" },
      { sija: "NUT-partisiippi", muoto: "asentanut", merkitys: "(have) installed" },
    ],
    huom:
      "Tyyppi 54: preesensissä nt:nn (asennan), mutta imperfektissä vartalon t muuttuu s:ksi (asensin), kuten lentää→lensin. NUT-partisiippi asentanut. Vrt. asennus = installation, asentaja = installer.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "asennan" },
          { label: "sinä", form: "asennat" },
          { label: "hän", form: "asentaa" },
          { label: "me", form: "asennamme" },
          { label: "te", form: "asennatte" },
          { label: "he", form: "asentavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en asenna" },
          { label: "hän", form: "ei asenna" },
          { label: "he", form: "eivät asenna" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "asensin" },
          { label: "sinä", form: "asensit" },
          { label: "hän", form: "asensi" },
          { label: "me", form: "asensimme" },
          { label: "te", form: "asensitte" },
          { label: "he", form: "asensivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen asentanut" },
          { label: "hän", form: "on asentanut" },
          { label: "he", form: "ovat asentaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "asenna!" },
          { label: "te", form: "asentakaa!" },
          { label: "kielto (sinä)", form: "älä asenna" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "asennus",
      en: "installation",
      taso: "B2",
      esim: { fi: "Asennus kesti viisi minuuttia.", en: "The installation took five minutes." },
    },
    {
      fi: "asentaja",
      en: "installer, fitter",
      taso: "B2",
      esim: { fi: "Asentaja tuli paikalle.", en: "The installer arrived on site." },
    },
  ],
  synonyymit: [
    { fi: "laittaa paikalleen", en: "to put in place" },
    { fi: "pystyttää", en: "to set up, erect" },
  ],
  esimerkit: {
    A2: { fi: "Asensin uuden sovelluksen.", en: "I installed a new app." },
    B1: { fi: "Sähkömies asensi valot.", en: "The electrician installed the lights." },
    B2: {
      fi: "Ohjelman asentaminen vaatii järjestelmänvalvojan oikeudet.",
      en: "Installing the program requires administrator rights.",
    },
  },
  updatedAt: "2026-06-07",
};

export default asentaa;
