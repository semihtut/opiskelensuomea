import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, t:d gradation, stem johta- ~ johda-.
// Present minä johdan, hän johtaa; imperfect minä johdin, hän johti; NUT participle johtanut.
const johtaa: Word = {
  fi: "johtaa",
  slug: "johtaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to lead, manage; to lead to",
  selitys:
    "Olla johdossa, ohjata, tai aiheuttaa seuraus: 'johtaa yritystä' / 'tie johtaa rantaan'. Tyyppi 1 (-aa), astevaihtelu t:d (johdan ~ johtaa). Vrt. johtaja (leader), johto (leadership, cable).",
  kuva: { alt: "johtaa – olla johdossa tai aiheuttaa seuraus" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa); astevaihtelu t:d (johdan ↔ johtaa); vartalo johta- ~ johda-",
    muodot: [
      { sija: "preesens (minä)", muoto: "johdan", merkitys: "I lead" },
      { sija: "imperfekti (minä)", muoto: "johdin", merkitys: "I led" },
      { sija: "NUT-partisiippi", muoto: "johtanut", merkitys: "(have) led" },
    ],
    huom:
      "Heikko aste d minä/sinä/me/te-muodoissa (johdan, johdin), vahva aste t hän/he- ja perusmuodossa. Kohde partitiivissa: 'johtaa yritystä'. 'Johtaa johonkin' = to lead to (illatiivi).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "johdan" },
          { label: "sinä", form: "johdat" },
          { label: "hän", form: "johtaa" },
          { label: "me", form: "johdamme" },
          { label: "te", form: "johdatte" },
          { label: "he", form: "johtavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en johda" },
          { label: "hän", form: "ei johda" },
          { label: "he", form: "eivät johda" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "johdin" },
          { label: "sinä", form: "johdit" },
          { label: "hän", form: "johti" },
          { label: "me", form: "johdimme" },
          { label: "te", form: "johditte" },
          { label: "he", form: "johtivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen johtanut" },
          { label: "hän", form: "on johtanut" },
          { label: "he", form: "ovat johtaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "johda!" },
          { label: "te", form: "johtakaa!" },
          { label: "kielto (sinä)", form: "älä johda" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "johtaja",
      en: "leader, director, manager",
      taso: "A2",
      esim: { fi: "Hän on yrityksen johtaja.", en: "He is the company's director." },
    },
    {
      fi: "johto",
      en: "leadership; cable, wire",
      taso: "B1",
      esim: { fi: "Yrityksen johto teki päätöksen.", en: "The company's management made the decision." },
    },
    {
      fi: "johtopäätös",
      en: "conclusion",
      taso: "B2",
      esim: { fi: "Tein asiasta oman johtopäätökseni.", en: "I drew my own conclusion about the matter." },
    },
  ],
  synonyymit: [
    { fi: "ohjata", en: "to guide, direct" },
    { fi: "aiheuttaa", en: "to cause (lead to)" },
  ],
  esimerkit: {
    A2: { fi: "Tämä tie johtaa keskustaan.", en: "This road leads to the centre." },
    B1: { fi: "Hän johtaa suurta tiimiä.", en: "She leads a large team." },
    B2: {
      fi: "Huolimattomuus voi johtaa vakaviin ongelmiin.",
      en: "Carelessness can lead to serious problems.",
    },
  },
  updatedAt: "2026-06-06",
};

export default johtaa;
