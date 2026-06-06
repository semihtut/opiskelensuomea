import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, kk:k gradation, stem musiikki- ~ musiiki-.
// Genitive musiikin, partitive musiikkia, illative musiikkiin.
const musiikki: Word = {
  fi: "musiikki",
  slug: "musiikki",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A2",
  en: "music",
  selitys:
    "Sävelistä ja rytmistä koostuva taide: 'kuunnella musiikkia'. Tyyppi 5, astevaihtelu kk:k (musiikki → musiikin). Yleensä yksiköllinen. Vrt. muusikko (musician), musiikillinen (musical), soitto.",
  kuva: { emoji: "🎵", alt: "musiikki – sävelistä koostuva taide" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; astevaihtelu kk:k (musiikki ↔ musiiki-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "musiikin", merkitys: "of music" },
      { sija: "partitiivi (yks.)", muoto: "musiikkia", merkitys: "music (partitive)" },
      { sija: "illatiivi (yks.)", muoto: "musiikkiin", merkitys: "into music" },
    ],
    huom:
      "Heikossa asteessa kk → k: genetiivi musiikin, adessiivi musiikilla. Vahva aste kk säilyy partitiivissa musiikkia. Yleensä yksikössä (ainesana). Vrt. muusikko = musician.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "musiikki" },
          { label: "Partitiivi", form: "musiikkia" },
          { label: "Genetiivi", form: "musiikin" },
          { label: "Inessiivi", form: "musiikissa" },
          { label: "Elatiivi", form: "musiikista" },
          { label: "Illatiivi", form: "musiikkiin" },
          { label: "Adessiivi", form: "musiikilla" },
          { label: "Ablatiivi", form: "musiikilta" },
          { label: "Allatiivi", form: "musiikille" },
          { label: "Essiivi", form: "musiikkina" },
          { label: "Translatiivi", form: "musiikiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "musiikit" },
          { label: "Partitiivi", form: "musiikkeja" },
          { label: "Genetiivi", form: "musiikkien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "muusikko",
      en: "musician",
      taso: "B1",
      esim: { fi: "Hän on lahjakas muusikko.", en: "She is a talented musician." },
    },
    {
      fi: "musiikillinen",
      en: "musical",
      taso: "B2",
      esim: { fi: "Lapsella on musiikillisia lahjoja.", en: "The child has musical gifts." },
    },
    {
      fi: "taustamusiikki",
      en: "background music",
      taso: "B2",
      esim: { fi: "Kahvilassa soi rauhallinen taustamusiikki.", en: "Calm background music played in the café." },
    },
  ],
  synonyymit: [
    { fi: "soitto", en: "playing, instrumental music" },
    { fi: "säveltaide", en: "music as an art form" },
  ],
  esimerkit: {
    A2: { fi: "Kuuntelen musiikkia joka päivä.", en: "I listen to music every day." },
    B1: { fi: "Millaisesta musiikista pidät?", en: "What kind of music do you like?" },
    B2: {
      fi: "Elokuvan musiikki teki kohtauksesta vielä vaikuttavamman.",
      en: "The film's music made the scene even more powerful.",
    },
  },
  updatedAt: "2026-06-06",
};

export default musiikki;
