import type { Word } from "@/lib/content-types";

// Adverb of place from oikea (right). Locative series oikealla (static) /
// oikealta (separative) / oikealle (directional). Verified against Wiktionary.
const oikealla: Word = {
  fi: "oikealla",
  slug: "oikealla",
  pos: "adverbi (paikan adverbi)",
  posClass: "adverbi",
  level: "A2",
  en: "on the right",
  selitys:
    "Oikealla puolella. Paikallissarja: oikealla (missä) – oikealta (mistä) – oikealle (mihin). Pohjana adjektiivi oikea. Vastakohta vasemmalla.",
  kuva: { emoji: "👉", alt: "oikealla – oikealla puolella" },

  kielioppi: {
    tyyppi: "paikan adverbi (oikea); kolmiosainen paikallissarja",
    muodot: [
      { sija: "missä", muoto: "oikealla", merkitys: "on the right" },
      { sija: "mistä", muoto: "oikealta", merkitys: "from the right" },
      { sija: "mihin", muoto: "oikealle", merkitys: "to the right" },
    ],
    huom:
      "Oikea = right (myös 'correct'). Suuntaohjeissa: 'käänny oikealle'. Vastakohta vasemmalla / vasemmalle.",
  },
  taivutus: {
    sections: [
      {
        title: "Paikallissarja",
        rows: [
          { label: "Missä?", form: "oikealla" },
          { label: "Mistä?", form: "oikealta" },
          { label: "Mihin?", form: "oikealle" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "oikea",
      en: "right (side); correct",
      taso: "A2",
      esim: { fi: "Vastaus on oikea.", en: "The answer is correct." },
    },
    {
      fi: "oikeakätinen",
      en: "right-handed",
      taso: "B2",
      esim: { fi: "Useimmat ihmiset ovat oikeakätisiä.", en: "Most people are right-handed." },
    },
    {
      fi: "oikealle päin",
      en: "towards the right",
      taso: "B1",
      esim: { fi: "Katso oikealle päin.", en: "Look towards the right." },
    },
  ],
  synonyymit: [
    { fi: "oikealla puolella", en: "on the right side" },
    { fi: "oikeassa laidassa", en: "at the right edge" },
  ],
  esimerkit: {
    A2: { fi: "Posti on oikealla.", en: "The post office is on the right." },
    B1: { fi: "Käänny oikealle risteyksessä.", en: "Turn right at the intersection." },
    B2: {
      fi: "Kun tulet oikealta, näet kirjaston heti ensimmäisen talon jälkeen.",
      en: "When you come from the right, you'll see the library right after the first house.",
    },
  },
  updatedAt: "2026-06-05",
};

export default oikealla;
