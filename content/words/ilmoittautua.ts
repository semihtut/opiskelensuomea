import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, t:d gradation, stem ilmoittaudu- ~ ilmoittautu-.
// Present minä ilmoittaudun, hän ilmoittautuu; imperfect ilmoittauduin; NUT ilmoittautunut.
const ilmoittautua: Word = {
  fi: "ilmoittautua",
  slug: "ilmoittautua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to register, enroll, sign up; to report (in)",
  selitys:
    "Ilmoittaa itsensä mukaan johonkin: 'ilmoittautua kurssille', 'ilmoittautua kokoukseen'. Tyyppi 1 (-tua), Kotus 52/sanoa, astevaihtelu t:d (ilmoittaudun). Refleksiivijohdos verbistä ilmoittaa. Vrt. ilmoittaa, ilmoittautuminen, ilmoitus.",
  kuva: { alt: "ilmoittautua – ilmoittaa itsensä mukaan johonkin" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-tua), Kotus 52/sanoa; astevaihtelu t:d (ilmoittautu- ~ ilmoittaudu-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "ilmoittaudun", merkitys: "I register" },
      { sija: "imperfekti (minä)", muoto: "ilmoittauduin", merkitys: "I registered" },
      { sija: "NUT-partisiippi", muoto: "ilmoittautunut", merkitys: "(have) registered" },
    ],
    huom:
      "Astevaihtelu t:d: vahva ilmoittautu- (ilmoittautua, ilmoittautuu, ilmoittautunut), heikko ilmoittaudu- (ilmoittaudun, ilmoittauduin). Refleksiivi verbistä ilmoittaa. Rektio: 'ilmoittautua johonkin' (illat.: kurssille / kokoukseen). Vrt. ilmoittaa.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "ilmoittaudun" },
          { label: "sinä", form: "ilmoittaudut" },
          { label: "hän", form: "ilmoittautuu" },
          { label: "me", form: "ilmoittaudumme" },
          { label: "te", form: "ilmoittaudutte" },
          { label: "he", form: "ilmoittautuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en ilmoittaudu" },
          { label: "hän", form: "ei ilmoittaudu" },
          { label: "he", form: "eivät ilmoittaudu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "ilmoittauduin" },
          { label: "sinä", form: "ilmoittauduit" },
          { label: "hän", form: "ilmoittautui" },
          { label: "me", form: "ilmoittauduimme" },
          { label: "te", form: "ilmoittauduitte" },
          { label: "he", form: "ilmoittautuivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen ilmoittautunut" },
          { label: "hän", form: "on ilmoittautunut" },
          { label: "he", form: "ovat ilmoittautuneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "ilmoittaudu!" },
          { label: "te", form: "ilmoittautukaa!" },
          { label: "kielto (sinä)", form: "älä ilmoittaudu" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ilmoittautuminen",
      en: "registration, enrollment",
      taso: "B1",
      esim: { fi: "Ilmoittautuminen päättyy perjantaina.", en: "Registration ends on Friday." },
    },
    {
      fi: "ilmoittaa",
      en: "to announce, report",
      taso: "B1",
      esim: { fi: "Ilmoitin asiasta opettajalle.", en: "I reported the matter to the teacher." },
    },
  ],
  synonyymit: [
    { fi: "rekisteröityä", en: "to register" },
  ],
  esimerkit: {
    A2: { fi: "Ilmoittaudun kurssille.", en: "I'll sign up for the course." },
    B1: { fi: "Muista ilmoittautua ajoissa.", en: "Remember to register on time." },
    B2: {
      fi: "Ilmoittauduin kokeeseen verkossa ja sain vahvistuksen sähköpostiin.",
      en: "I registered for the exam online and received a confirmation by email.",
    },
  },
  updatedAt: "2026-06-07",
};

export default ilmoittautua;
