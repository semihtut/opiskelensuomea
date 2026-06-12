import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 54/huutaa, nt:nn gradation + imperfect t→s,
// stem ääntä- ~ äännä-. Present minä äännän, hän ääntää; imperfect äänsin; NUT ääntänyt.
const aantaa: Word = {
  fi: "ääntää",
  slug: "ääntää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to pronounce, articulate",
  selitys:
    "Tuottaa kielen äänteet oikein: 'ääntää sana oikein'. Tyyppi 1 (-tää), Kotus 54/huutaa, astevaihtelu nt:nn (äännän) ja imperfektissä t→s (äänsin). Sanasta ääni. Vrt. ääni, ääntäminen, lausua.",
  kuva: { alt: "ääntää – tuottaa kielen äänteet oikein" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-tää), Kotus 54/huutaa; astevaihtelu nt:nn + imperfektissä t→s",
    muodot: [
      { sija: "preesens (minä)", muoto: "äännän", merkitys: "I pronounce" },
      { sija: "imperfekti (minä)", muoto: "äänsin", merkitys: "I pronounced" },
      { sija: "NUT-partisiippi", muoto: "ääntänyt", merkitys: "(have) pronounced" },
    ],
    huom:
      "Tyyppi 54/huutaa: preesensissä nt:nn (äännän, äännät), mutta hän ääntää (vahva). Imperfektissä t→s (äänsin, äänsi) – kuten lentää→lensin. NUT ääntänyt, imperatiivi äännä! Vrt. ääni, ääntäminen.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "äännän" },
          { label: "sinä", form: "äännät" },
          { label: "hän", form: "ääntää" },
          { label: "me", form: "äännämme" },
          { label: "te", form: "äännätte" },
          { label: "he", form: "ääntävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en äännä" },
          { label: "hän", form: "ei äännä" },
          { label: "he", form: "eivät äännä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "äänsin" },
          { label: "sinä", form: "äänsit" },
          { label: "hän", form: "äänsi" },
          { label: "me", form: "äänsimme" },
          { label: "te", form: "äänsitte" },
          { label: "he", form: "äänsivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen ääntänyt" },
          { label: "hän", form: "on ääntänyt" },
          { label: "he", form: "ovat ääntäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "äännä!" },
          { label: "te", form: "ääntäkää!" },
          { label: "kielto (sinä)", form: "älä äännä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ääntäminen",
      en: "pronunciation",
      taso: "B1",
      esim: { fi: "Suomen ääntäminen on melko helppoa.", en: "Finnish pronunciation is fairly easy." },
    },
    {
      fi: "äänne",
      en: "speech sound, phoneme",
      taso: "B2",
      esim: { fi: "Suomessa on lyhyitä ja pitkiä äänteitä.", en: "Finnish has short and long speech sounds." },
    },
  ],
  synonyymit: [
    { fi: "lausua", en: "to utter, pronounce" },
  ],
  esimerkit: {
    A2: { fi: "Miten tämä sana äännetään?", en: "How is this word pronounced?" },
    B1: { fi: "Äännän r:n vielä väärin.", en: "I still pronounce the r wrong." },
    B2: {
      fi: "Vieraan kielen äänteet on helpompi oppia kuuntelemalla ja toistamalla.",
      en: "The sounds of a foreign language are easier to learn by listening and repeating.",
    },
  },
  updatedAt: "2026-06-07",
};

export default aantaa;
