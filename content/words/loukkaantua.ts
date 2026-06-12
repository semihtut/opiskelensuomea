import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, nt:nn gradation, stem loukkaantu- ~ loukkaannu-.
// Present minä loukkaannun, hän loukkaantuu; imperfect minä loukkaannuin; NUT loukkaantunut. Intransitive.
const loukkaantua: Word = {
  fi: "loukkaantua",
  slug: "loukkaantua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to get injured; to be offended",
  selitys:
    "1) Saada fyysinen vamma: 'loukkaantua pelissä'. 2) Pahastua henkisesti: 'loukkaantua sanoista'. Tyyppi 1 (-ua), Kotus 52/sanoa, astevaihtelu nt:nn (loukkaannun). Intransitiivinen. Vrt. loukata, loukkaus, vamma.",
  kuva: { alt: "loukkaantua – saada vamma tai pahastua" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua), Kotus 52/sanoa; astevaihtelu nt:nn (loukkaantu- ~ loukkaannu-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "loukkaannun", merkitys: "I get injured" },
      { sija: "imperfekti (minä)", muoto: "loukkaannuin", merkitys: "I got injured" },
      { sija: "NUT-partisiippi", muoto: "loukkaantunut", merkitys: "(have) gotten injured" },
    ],
    huom:
      "Astevaihtelu nt:nn: heikko loukkaannu- (loukkaannun, loukkaannuin), vahva loukkaantu- (loukkaantua, loukkaantuu, loukkaantunut). Intransitiivinen; transitiivinen pari loukata. Henkisestä loukkaantumisesta: 'loukkaantua jostakin'.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "loukkaannun" },
          { label: "sinä", form: "loukkaannut" },
          { label: "hän", form: "loukkaantuu" },
          { label: "me", form: "loukkaannumme" },
          { label: "te", form: "loukkaannutte" },
          { label: "he", form: "loukkaantuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en loukkaannu" },
          { label: "hän", form: "ei loukkaannu" },
          { label: "he", form: "eivät loukkaannu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "loukkaannuin" },
          { label: "sinä", form: "loukkaannuit" },
          { label: "hän", form: "loukkaantui" },
          { label: "me", form: "loukkaannuimme" },
          { label: "te", form: "loukkaannuitte" },
          { label: "he", form: "loukkaantuivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen loukkaantunut" },
          { label: "hän", form: "on loukkaantunut" },
          { label: "he", form: "ovat loukkaantuneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "älä loukkaannu" },
          { label: "huom.", form: "(myönteinen imperatiivi harvinainen)" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "loukata",
      en: "to injure; to offend, insult",
      taso: "B2",
      esim: { fi: "En halunnut loukata sinua.", en: "I didn't mean to offend you." },
    },
    {
      fi: "loukkaus",
      en: "insult, offence",
      taso: "B2",
      esim: { fi: "Se oli paha loukkaus.", en: "It was a serious insult." },
    },
  ],
  synonyymit: [
    { fi: "satuttaa itsensä", en: "to hurt oneself" },
    { fi: "pahastua", en: "to take offence" },
  ],
  esimerkit: {
    A2: { fi: "Hän loukkaantui jalkaansa.", en: "He injured his leg." },
    B1: { fi: "Pelaaja loukkaantui vakavasti.", en: "The player got seriously injured." },
    B2: {
      fi: "Hän loukkaantui kommentista, vaikka sitä ei tarkoitettu pahasti.",
      en: "She was offended by the comment, even though it wasn't meant badly.",
    },
  },
  updatedAt: "2026-06-07",
};

export default loukkaantua;
