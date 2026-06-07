import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem päivittä- ~ päivitä-.
// Present minä päivitän, hän päivittää; imperfect minä päivitin; NUT päivittänyt.
const paivittaa: Word = {
  fi: "päivittää",
  slug: "päivittää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to update",
  selitys:
    "Saattaa ajan tasalle: 'päivittää ohjelma'. Tyyppi 1 (-ää), Kotus 53/muistaa, astevaihtelu tt:t (päivitän). Johdettu sanasta päivä. Vrt. päivitys, päivä, ajantasainen.",
  kuva: { emoji: "🔄", alt: "päivittää – saattaa ajan tasalle" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää), Kotus 53/muistaa; astevaihtelu tt:t (päivitä- ~ päivittä-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "päivitän", merkitys: "I update" },
      { sija: "imperfekti (minä)", muoto: "päivitin", merkitys: "I updated" },
      { sija: "NUT-partisiippi", muoto: "päivittänyt", merkitys: "(have) updated" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva päivittä- (päivittää, päivittänyt), heikko päivitä- (päivitän, päivitin). Älä sekoita sanaan 'päivittäin' = daily. Johdettu sanasta päivä. Vrt. päivitys = update.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "päivitän" },
          { label: "sinä", form: "päivität" },
          { label: "hän", form: "päivittää" },
          { label: "me", form: "päivitämme" },
          { label: "te", form: "päivitätte" },
          { label: "he", form: "päivittävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en päivitä" },
          { label: "hän", form: "ei päivitä" },
          { label: "he", form: "eivät päivitä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "päivitin" },
          { label: "sinä", form: "päivitit" },
          { label: "hän", form: "päivitti" },
          { label: "me", form: "päivitimme" },
          { label: "te", form: "päivititte" },
          { label: "he", form: "päivittivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen päivittänyt" },
          { label: "hän", form: "on päivittänyt" },
          { label: "he", form: "ovat päivittäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "päivitä!" },
          { label: "te", form: "päivittäkää!" },
          { label: "kielto (sinä)", form: "älä päivitä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "päivitys",
      en: "update",
      taso: "B1",
      esim: { fi: "Asensin uuden päivityksen.", en: "I installed a new update." },
    },
    {
      fi: "päivä",
      en: "day",
      taso: "A1",
      esim: { fi: "Hyvää päivää!", en: "Good day!" },
    },
  ],
  synonyymit: [
    { fi: "saattaa ajan tasalle", en: "to bring up to date" },
    { fi: "uudistaa", en: "to renew" },
  ],
  esimerkit: {
    A2: { fi: "Päivitä sovellus.", en: "Update the app." },
    B1: { fi: "Päivitin tietoni järjestelmään.", en: "I updated my information in the system." },
    B2: {
      fi: "Ohjelma kannattaa päivittää säännöllisesti tietoturvan vuoksi.",
      en: "It's worth updating the software regularly for security reasons.",
    },
  },
  updatedAt: "2026-06-07",
};

export default paivittaa;
