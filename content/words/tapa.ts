import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, p–v gradation, stem tapa-/tava-.
// Genitive tavan, partitive tapaa, illative tapaan, partitive pl tapoja.
const tapa: Word = {
  fi: "tapa",
  slug: "tapa",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A2",
  en: "way, manner; habit, custom",
  selitys:
    "Tottumus tai toimintatapa: 'hyvä tapa' / 'minulla on tapana…'. Tyyppi 9, astevaihtelu p:v (tapa → tavan). Vrt. tapana = as a habit, tavallinen (ordinary).",
  kuva: { alt: "tapa – tottumus tai toimintatapa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; astevaihtelu p:v",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tavan", merkitys: "of the way/habit" },
      { sija: "partitiivi (yks.)", muoto: "tapaa", merkitys: "way (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tapoja", merkitys: "ways/habits (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu p:v: tapa, tapaa (vahva), mutta tavan, tavassa (heikko). 'Minulla on tapana herätä aikaisin.' = I usually wake up early. Vrt. tavallinen = ordinary, tapana = customarily.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tapa" },
          { label: "Partitiivi", form: "tapaa" },
          { label: "Genetiivi", form: "tavan" },
          { label: "Inessiivi", form: "tavassa" },
          { label: "Elatiivi", form: "tavasta" },
          { label: "Illatiivi", form: "tapaan" },
          { label: "Adessiivi", form: "tavalla" },
          { label: "Ablatiivi", form: "tavalta" },
          { label: "Allatiivi", form: "tavalle" },
          { label: "Essiivi", form: "tapana" },
          { label: "Translatiivi", form: "tavaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tavat" },
          { label: "Partitiivi", form: "tapoja" },
          { label: "Genetiivi", form: "tapojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tavallinen",
      en: "ordinary, usual",
      taso: "A2",
      esim: { fi: "Se oli aivan tavallinen päivä.", en: "It was a completely ordinary day." },
    },
    {
      fi: "tavallaan",
      en: "in a way, sort of",
      taso: "B2",
      esim: { fi: "Olet tavallaan oikeassa.", en: "You're sort of right." },
    },
    {
      fi: "tapana",
      en: "as a habit, customarily",
      taso: "B1",
      esim: { fi: "Minulla on tapana kävellä töihin.", en: "I usually walk to work." },
    },
  ],
  synonyymit: [
    { fi: "tottumus", en: "habit" },
    { fi: "keino", en: "way, means" },
  ],
  esimerkit: {
    A2: { fi: "Se on hyvä tapa.", en: "That is a good habit." },
    B1: { fi: "Tein sen omalla tavallani.", en: "I did it my own way." },
    B2: {
      fi: "Vanhoista tavoista on usein vaikea päästä eroon.",
      en: "Old habits are often hard to get rid of.",
    },
  },
  updatedAt: "2026-06-06",
};

export default tapa;
