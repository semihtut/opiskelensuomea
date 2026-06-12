import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 61/sallia, t:d gradation (ht:hd), i-stem.
// Present minä ehdin = imperfect minä ehdin (identical); hän ehtii/ehti; NUT ehtinyt.
const ehtia: Word = {
  fi: "ehtiä",
  slug: "ehtiä",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to have time (to); to make it in time",
  selitys:
    "Olla riittävästi aikaa tehdä jokin tai saapua ajoissa: 'ehtiä bussiin', 'en ehdi'. Tyyppi 1 (-iä), Kotus 61/sallia, astevaihtelu ht:hd (ehdin). HUOM: i-vartalo – minä-muoto sama preesensissä ja imperfektissä (ehdin). Vrt. ehtiä + illatiivi, kiirehtiä.",
  kuva: { alt: "ehtiä – olla riittävästi aikaa tehdä jokin tai saapua ajoissa" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-iä), Kotus 61/sallia; astevaihtelu ht:hd (eht- ~ ehd-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "ehdin", merkitys: "I have time" },
      { sija: "imperfekti (minä)", muoto: "ehdin", merkitys: "I had time (sama muoto!)" },
      { sija: "NUT-partisiippi", muoto: "ehtinyt", merkitys: "(have) had time" },
    ],
    huom:
      "i-vartalo: minä ehdin on SAMA preesensissä ja imperfektissä; vain hän eroaa (ehtii ↔ ehti). Astevaihtelu ht:hd: ehdin (heikko), hän ehtii (vahva), NUT ehtinyt. 'Ehtiä johonkin' (illat.) = to make it to. Vrt. kiirehtiä.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "ehdin" },
          { label: "sinä", form: "ehdit" },
          { label: "hän", form: "ehtii" },
          { label: "me", form: "ehdimme" },
          { label: "te", form: "ehditte" },
          { label: "he", form: "ehtivät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en ehdi" },
          { label: "hän", form: "ei ehdi" },
          { label: "he", form: "eivät ehdi" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "ehdin" },
          { label: "sinä", form: "ehdit" },
          { label: "hän", form: "ehti" },
          { label: "me", form: "ehdimme" },
          { label: "te", form: "ehditte" },
          { label: "he", form: "ehtivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen ehtinyt" },
          { label: "hän", form: "on ehtinyt" },
          { label: "he", form: "ovat ehtineet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "ehdi!" },
          { label: "te", form: "ehtikää!" },
          { label: "kielto (sinä)", form: "älä ehdi" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kiirehtiä",
      en: "to hurry",
      taso: "B1",
      esim: { fi: "Kiirehdin, jotta ehdin ajoissa.", en: "I hurry so that I make it on time." },
    },
    {
      fi: "ajoissa",
      en: "in time, on time",
      taso: "B1",
      esim: { fi: "Saavuin ajoissa.", en: "I arrived in time." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "En ehdi tänään.", en: "I don't have time today." },
    B1: { fi: "Ehditkö bussiin?", en: "Did you make it to the bus?" },
    B2: {
      fi: "Jos lähden heti, ehdin vielä kauppaan ennen sulkemista.",
      en: "If I leave right now, I'll still make it to the shop before closing.",
    },
  },
  updatedAt: "2026-06-07",
};

export default ehtia;
