import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, nk:ng gradation. Genitive auringon,
// partitive aurinkoa, illative aurinkoon, partitive pl aurinkoja, nom pl auringot.
const aurinko: Word = {
  fi: "aurinko",
  slug: "aurinko",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A1",
  en: "sun",
  selitys:
    "Tähti, joka antaa valon ja lämmön. Tyyppi 1, astevaihtelu nk:ng (aurinko → auringon). Yleensä yksikössä.",
  kuva: { alt: "aurinko – paistava aurinko" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu nk:ng",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "auringon", merkitys: "of the sun" },
      { sija: "partitiivi (yks.)", muoto: "aurinkoa", merkitys: "sun (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "aurinkoja", merkitys: "suns (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa nk → ng: auringon, auringossa, auringot. Vahva aste säilyy: aurinkoa, aurinkoon. 'Auringossa' = in the sun.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "aurinko" },
          { label: "Partitiivi", form: "aurinkoa" },
          { label: "Genetiivi", form: "auringon" },
          { label: "Inessiivi", form: "auringossa" },
          { label: "Elatiivi", form: "auringosta" },
          { label: "Illatiivi", form: "aurinkoon" },
          { label: "Adessiivi", form: "auringolla" },
          { label: "Ablatiivi", form: "auringolta" },
          { label: "Allatiivi", form: "auringolle" },
          { label: "Essiivi", form: "aurinkona" },
          { label: "Translatiivi", form: "auringoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "auringot" },
          { label: "Partitiivi", form: "aurinkoja" },
          { label: "Genetiivi", form: "aurinkojen" },
          { label: "Inessiivi", form: "auringoissa" },
          { label: "Illatiivi", form: "aurinkoihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "aurinkoinen",
      en: "sunny",
      taso: "A2",
      esim: { fi: "Päivä oli aurinkoinen.", en: "The day was sunny." },
    },
    {
      fi: "auringonlasku",
      en: "sunset",
      taso: "B1",
      esim: { fi: "Katsoimme auringonlaskua rannalla.", en: "We watched the sunset on the beach." },
    },
    {
      fi: "auringonpaiste",
      en: "sunshine",
      taso: "B1",
      esim: { fi: "Nautin auringonpaisteesta.", en: "I enjoy the sunshine." },
    },
  ],
  synonyymit: [
    { fi: "päivänpaiste", en: "sunshine, daylight" },
    { fi: "aurinkokunta", en: "solar system (related)" },
  ],
  esimerkit: {
    A2: { fi: "Aurinko paistaa kirkkaasti.", en: "The sun is shining brightly." },
    B1: { fi: "Istuimme auringossa koko iltapäivän.", en: "We sat in the sun all afternoon." },
    B2: {
      fi: "Auringon noustua sumu hälveni nopeasti.",
      en: "Once the sun rose, the fog cleared quickly.",
    },
  },
  updatedAt: "2026-06-04",
};

export default aurinko;
