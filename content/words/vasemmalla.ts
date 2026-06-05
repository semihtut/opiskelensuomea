import type { Word } from "@/lib/content-types";

// Adverb of place from vasen (left). Locative series vasemmalla (static) /
// vasemmalta (separative) / vasemmalle (directional). Verified against Wiktionary.
const vasemmalla: Word = {
  fi: "vasemmalla",
  slug: "vasemmalla",
  pos: "adverbi (paikan adverbi)",
  posClass: "adverbi",
  level: "A2",
  en: "on the left",
  selitys:
    "Vasemmalla puolella. Paikallissarja: vasemmalla (missä) – vasemmalta (mistä) – vasemmalle (mihin). Pohjana adjektiivi vasen. Vastakohta oikealla.",
  kuva: { emoji: "👈", alt: "vasemmalla – vasemmalla puolella" },

  kielioppi: {
    tyyppi: "paikan adverbi (vasen); kolmiosainen paikallissarja",
    muodot: [
      { sija: "missä", muoto: "vasemmalla", merkitys: "on the left" },
      { sija: "mistä", muoto: "vasemmalta", merkitys: "from the left" },
      { sija: "mihin", muoto: "vasemmalle", merkitys: "to the left" },
    ],
    huom:
      "Pohjana vasen (genetiivi vasemman). Suuntaohjeissa: 'käänny vasemmalle'. Vastakohta oikealla / oikealle.",
  },
  taivutus: {
    sections: [
      {
        title: "Paikallissarja",
        rows: [
          { label: "Missä?", form: "vasemmalla" },
          { label: "Mistä?", form: "vasemmalta" },
          { label: "Mihin?", form: "vasemmalle" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vasen",
      en: "left (side)",
      taso: "A2",
      esim: { fi: "Vasen käsi on kipeä.", en: "My left hand hurts." },
    },
    {
      fi: "vasenkätinen",
      en: "left-handed",
      taso: "B2",
      esim: { fi: "Hän on vasenkätinen.", en: "She is left-handed." },
    },
    {
      fi: "vasemmalle päin",
      en: "towards the left",
      taso: "B1",
      esim: { fi: "Jatka vasemmalle päin.", en: "Continue towards the left." },
    },
  ],
  synonyymit: [
    { fi: "vasemmalla puolella", en: "on the left side" },
    { fi: "vasemmassa laidassa", en: "at the left edge" },
  ],
  esimerkit: {
    A2: { fi: "Apteekki on vasemmalla.", en: "The pharmacy is on the left." },
    B1: { fi: "Käänny vasemmalle ja jatka suoraan.", en: "Turn left and continue straight." },
    B2: {
      fi: "Vasemmalta kuului ääniä, joten käännyimme katsomaan, mistä ne tulivat.",
      en: "Sounds came from the left, so we turned to see where they came from.",
    },
  },
  updatedAt: "2026-06-05",
};

export default vasemmalla;
