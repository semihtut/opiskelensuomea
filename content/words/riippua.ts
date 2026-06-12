import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, pp:p gradation, stem riippu- ~ riipu-.
// Present minä riipun, hän riippuu; imperfect minä riipuin; NUT riippunut. Governs elative.
const riippua: Word = {
  fi: "riippua",
  slug: "riippua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to depend (on); to hang",
  selitys:
    "1) Olla riippuvainen jostakin: 'se riippuu säästä'. 2) Olla ripustettuna: 'taulu riippuu seinällä'. Tyyppi 1 (-ua), Kotus 52/sanoa, astevaihtelu pp:p (riipun). Hallitsee elatiivia ('riippua jostakin'). Vrt. riippuvainen, riippumaton.",
  kuva: { alt: "riippua – olla riippuvainen tai ripustettuna" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua), Kotus 52/sanoa; astevaihtelu pp:p (riippu- ~ riipu-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "riipun", merkitys: "I depend / hang" },
      { sija: "imperfekti (minä)", muoto: "riipuin", merkitys: "I depended / hung" },
      { sija: "NUT-partisiippi", muoto: "riippunut", merkitys: "(have) depended / hung" },
    ],
    huom:
      "Astevaihtelu pp:p: heikko riipu- (riipun, riipuin), vahva riippu- (riippua, riippuu, riippunut). Hallitsee elatiivia: 'riippua jostakin'. 'Se riippuu' = it depends. Vrt. riippuvainen = dependent, riippumaton = independent.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "riipun" },
          { label: "sinä", form: "riiput" },
          { label: "hän / se", form: "riippuu" },
          { label: "me", form: "riipumme" },
          { label: "te", form: "riiputte" },
          { label: "he / ne", form: "riippuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en riipu" },
          { label: "se", form: "ei riipu" },
          { label: "ne", form: "eivät riipu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "riipuin" },
          { label: "hän / se", form: "riippui" },
          { label: "ne", form: "riippuivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen riippunut" },
          { label: "se", form: "on riippunut" },
          { label: "ne", form: "ovat riippuneet" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "riippuvainen",
      en: "dependent, addicted",
      taso: "B2",
      esim: { fi: "Hän on riippuvainen kahvista.", en: "She is dependent on coffee." },
    },
    {
      fi: "riippumaton",
      en: "independent",
      taso: "B2",
      esim: { fi: "Tuomioistuin on riippumaton.", en: "The court is independent." },
    },
    {
      fi: "riippuen",
      en: "depending on",
      taso: "B2",
      esim: { fi: "Hinta vaihtelee riippuen koosta.", en: "The price varies depending on the size." },
    },
  ],
  synonyymit: [
    { fi: "olla kiinni jostakin", en: "to be contingent on" },
    { fi: "roikkua", en: "to dangle, hang" },
  ],
  esimerkit: {
    A2: { fi: "Se riippuu säästä.", en: "It depends on the weather." },
    B1: { fi: "Lopputulos riippuu monesta tekijästä.", en: "The outcome depends on many factors." },
    B2: {
      fi: "Se, kuinka nopeasti opit, riippuu pitkälti omasta motivaatiostasi.",
      en: "How quickly you learn depends largely on your own motivation.",
    },
  },
  updatedAt: "2026-06-07",
};

export default riippua;
