import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 73/salata, no gradation, stem kuvaa- ~ kuva-.
// Present kuvaan, past kuvasin, past participle kuvannut.
const kuvata: Word = {
  fi: "kuvata",
  slug: "kuvata",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "B1",
  en: "to describe, to depict; to film, to photograph",
  selitys:
    "Esittää sanoin tai kuvana, tai ottaa kuvaa: 'kuvata maisemaa'. Tyyppi 4 (-ata), ei astevaihtelua, vartalo kuvaa-. Juuri sanasta kuva. Vrt. kuvaus (description, filming), kuvailla (to describe).",
  kuva: { emoji: "🎥", alt: "kuvata – esittää kuvana tai ottaa kuvaa" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-ata); ei astevaihtelua; vartalo kuvaa-",
    muodot: [
      { sija: "preesens (minä)", muoto: "kuvaan", merkitys: "I describe / film" },
      { sija: "imperfekti (minä)", muoto: "kuvasin", merkitys: "I described / filmed" },
      { sija: "NUT-partisiippi", muoto: "kuvannut", merkitys: "(have) described / filmed" },
    ],
    huom:
      "Preesensissä pitkä vartalo kuvaa- (kuvaan, kuvaat), imperfektissä -si- (kuvasin). Kohde partitiivissa: 'kuvata maisemaa'. Vrt. kuvailla = to describe in detail, kuvaus = description / filming.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kuvaan" },
          { label: "sinä", form: "kuvaat" },
          { label: "hän", form: "kuvaa" },
          { label: "me", form: "kuvaamme" },
          { label: "te", form: "kuvaatte" },
          { label: "he", form: "kuvaavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kuvaa" },
          { label: "hän", form: "ei kuvaa" },
          { label: "he", form: "eivät kuvaa" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kuvasin" },
          { label: "sinä", form: "kuvasit" },
          { label: "hän", form: "kuvasi" },
          { label: "me", form: "kuvasimme" },
          { label: "te", form: "kuvasitte" },
          { label: "he", form: "kuvasivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kuvannut" },
          { label: "hän", form: "on kuvannut" },
          { label: "he", form: "ovat kuvanneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kuvaa!" },
          { label: "te", form: "kuvatkaa!" },
          { label: "kielto (sinä)", form: "älä kuvaa" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kuvaus",
      en: "description; filming, shoot",
      taso: "B1",
      esim: { fi: "Elokuvan kuvaukset alkavat keväällä.", en: "The film's shooting begins in spring." },
    },
    {
      fi: "kuvailla",
      en: "to describe (in detail)",
      taso: "B2",
      esim: { fi: "Kuvaile, miltä paikka näytti.", en: "Describe what the place looked like." },
    },
    {
      fi: "kuvaaja",
      en: "photographer, cameraperson",
      taso: "B2",
      esim: { fi: "Kuvaaja seurasi tapahtumaa lähietäisyydeltä.", en: "The cameraperson followed the event up close." },
    },
  ],
  synonyymit: [
    { fi: "esittää", en: "to present, depict" },
    { fi: "kuvailla", en: "to describe" },
  ],
  esimerkit: {
    A2: { fi: "Kuvaan lapsia puistossa.", en: "I'm filming/photographing the children in the park." },
    B1: { fi: "Kirja kuvaa elämää sodan aikana.", en: "The book depicts life during the war." },
    B2: {
      fi: "Hän kuvasi tilannetta niin elävästi, että tunsin olevani paikalla.",
      en: "He described the situation so vividly that I felt I was there.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kuvata;
