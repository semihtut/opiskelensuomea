import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 61/sallia, t:d gradation (ht:hd), stem pohti- ~ pohdi-.
// Present minä pohdin, hän pohtii; imperfect minä pohdin, hän pohti; NUT participle pohtinut.
const pohtia: Word = {
  fi: "pohtia",
  slug: "pohtia",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to ponder, consider, reflect on",
  selitys:
    "Miettiä jotakin syvällisesti ja punnita eri puolia: 'pohtia ratkaisua'. Tyyppi 1 (-ia), astevaihtelu t:d (pohdin ~ pohtii). Vrt. pohdinta (reflection, deliberation), miettiä.",
  kuva: { alt: "pohtia – miettiä jotakin syvällisesti" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ia); astevaihtelu t:d (pohdin ↔ pohtii); vartalo pohti- ~ pohdi-",
    muodot: [
      { sija: "preesens (minä)", muoto: "pohdin", merkitys: "I ponder" },
      { sija: "imperfekti (minä)", muoto: "pohdin", merkitys: "I pondered" },
      { sija: "NUT-partisiippi", muoto: "pohtinut", merkitys: "(have) pondered" },
    ],
    huom:
      "Heikko aste hd minä/sinä/me/te-muodoissa (pohdin), vahva aste ht hän/he- ja perusmuodossa (pohtii, pohti). HUOM: minä-muoto sama preesensissä ja imperfektissä (pohdin); vain hän erottaa (pohtii ↔ pohti).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "pohdin" },
          { label: "sinä", form: "pohdit" },
          { label: "hän", form: "pohtii" },
          { label: "me", form: "pohdimme" },
          { label: "te", form: "pohditte" },
          { label: "he", form: "pohtivat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en pohdi" },
          { label: "hän", form: "ei pohdi" },
          { label: "he", form: "eivät pohdi" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "pohdin" },
          { label: "sinä", form: "pohdit" },
          { label: "hän", form: "pohti" },
          { label: "me", form: "pohdimme" },
          { label: "te", form: "pohditte" },
          { label: "he", form: "pohtivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen pohtinut" },
          { label: "hän", form: "on pohtinut" },
          { label: "he", form: "ovat pohtineet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "pohdi!" },
          { label: "te", form: "pohtikaa!" },
          { label: "kielto (sinä)", form: "älä pohdi" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pohdinta",
      en: "reflection, deliberation",
      taso: "B2",
      esim: { fi: "Pitkän pohdinnan jälkeen hän päätti jäädä.", en: "After long deliberation, he decided to stay." },
    },
    {
      fi: "pohdiskella",
      en: "to muse, mull over",
      taso: "B2",
      esim: { fi: "Hän pohdiskeli elämän tarkoitusta.", en: "He mused on the meaning of life." },
    },
    {
      fi: "ajatuksen aihe",
      en: "food for thought",
      taso: "B2",
      esim: { fi: "Luento antoi ajatuksen aihetta.", en: "The lecture gave food for thought." },
    },
  ],
  synonyymit: [
    { fi: "miettiä", en: "to think over" },
    { fi: "harkita", en: "to consider, deliberate" },
  ],
  esimerkit: {
    A2: { fi: "Pohdin vielä asiaa.", en: "I'm still considering the matter." },
    B1: { fi: "Pohdimme yhdessä, mitä tehdä seuraavaksi.", en: "We pondered together what to do next." },
    B2: {
      fi: "Hän pohti pitkään, kannattaako vaihtaa työpaikkaa vai ei.",
      en: "She pondered for a long time whether or not it was worth changing jobs.",
    },
  },
  updatedAt: "2026-06-06",
};

export default pohtia;
