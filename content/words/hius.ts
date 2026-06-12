import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem hiukse-.
// Genitive hiuksen, partitive hiusta, illative hiukseen, partitive pl hiuksia.
const hius: Word = {
  fi: "hius",
  slug: "hius",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "A2",
  en: "hair (of the head); (pl.) hair",
  selitys:
    "Päässä kasvava karva; monikko hiukset = tukka: 'pitkät hiukset'. Tyyppi 39, ei astevaihtelua, vartalo hiukse-. Käytetään yleensä monikossa. Vrt. hiusten leikkaus (haircut), karva (body/animal hair).",
  kuva: { alt: "hius – päässä kasvava karva" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo hiukse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "hiuksen", merkitys: "of the (single) hair" },
      { sija: "partitiivi (yks.)", muoto: "hiusta", merkitys: "hair (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "hiuksia", merkitys: "hairs (partitive pl.)" },
    ],
    huom:
      "Vartalo -ukse-: hius → hiuksen, mutta partitiivi hiusta. Tukasta puhutaan yleensä monikossa: hiukset, hiuksia, hiuksissa. Vrt. tukka = (head of) hair, karva = animal/body hair.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "hius" },
          { label: "Partitiivi", form: "hiusta" },
          { label: "Genetiivi", form: "hiuksen" },
          { label: "Inessiivi", form: "hiuksessa" },
          { label: "Elatiivi", form: "hiuksesta" },
          { label: "Illatiivi", form: "hiukseen" },
          { label: "Adessiivi", form: "hiuksella" },
          { label: "Ablatiivi", form: "hiukselta" },
          { label: "Allatiivi", form: "hiukselle" },
          { label: "Essiivi", form: "hiuksena" },
          { label: "Translatiivi", form: "hiukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "hiukset" },
          { label: "Partitiivi", form: "hiuksia" },
          { label: "Genetiivi", form: "hiusten / hiuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hiustenleikkuu",
      en: "haircut",
      taso: "B1",
      esim: { fi: "Varasin ajan hiustenleikkuuseen.", en: "I booked an appointment for a haircut." },
    },
    {
      fi: "hiuslakka",
      en: "hairspray",
      taso: "B2",
      esim: { fi: "Käytän vähän hiuslakkaa.", en: "I use a little hairspray." },
    },
    {
      fi: "hiusväri",
      en: "hair dye, hair colour",
      taso: "B2",
      esim: { fi: "Vaihdoin hiusväriä.", en: "I changed my hair colour." },
    },
  ],
  synonyymit: [
    { fi: "tukka", en: "(head of) hair" },
    { fi: "karva", en: "hair (body/animal)" },
  ],
  esimerkit: {
    A2: { fi: "Hänellä on tummat hiukset.", en: "She has dark hair." },
    B1: { fi: "Käyn leikkauttamassa hiukset kerran kuussa.", en: "I get my hair cut once a month." },
    B2: {
      fi: "Tuuli sotki hiukset heti, kun astuin ulos.",
      en: "The wind messed up my hair the moment I stepped outside.",
    },
  },
  updatedAt: "2026-06-06",
};

export default hius;
