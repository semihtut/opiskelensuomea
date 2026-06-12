import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 7/ovi, t:d gradation, stem lehte- ~ lehde-.
// Genitive lehden, partitive lehteä, illative lehteen, partitive pl lehtiä.
const lehti: Word = {
  fi: "lehti",
  slug: "lehti",
  pos: "substantiivi (tyyppi 7/ovi)",
  posClass: "substantiivi",
  level: "A2",
  en: "newspaper, magazine; leaf",
  selitys:
    "Painettu julkaisu tai kasvin lehti: 'lukea lehteä' / 'puun lehti'. Tyyppi 7, astevaihtelu t:d (lehte- → lehde-). Vrt. sanomalehti (newspaper), aikakauslehti (magazine).",
  kuva: { alt: "lehti – painettu julkaisu tai kasvin lehti" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 7/ovi; astevaihtelu t:d (lehte- ↔ lehde-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "lehden", merkitys: "of the paper" },
      { sija: "partitiivi (yks.)", muoto: "lehteä", merkitys: "paper (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "lehtiä", merkitys: "papers/leaves (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa t → d: genetiivi lehden, monikon nominatiivi lehdet. Vahva aste t säilyy partitiivissa lehteä ja monikossa lehtiä. Vrt. lehtinen = leaflet.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "lehti" },
          { label: "Partitiivi", form: "lehteä" },
          { label: "Genetiivi", form: "lehden" },
          { label: "Inessiivi", form: "lehdessä" },
          { label: "Elatiivi", form: "lehdestä" },
          { label: "Illatiivi", form: "lehteen" },
          { label: "Adessiivi", form: "lehdellä" },
          { label: "Ablatiivi", form: "lehdeltä" },
          { label: "Allatiivi", form: "lehdelle" },
          { label: "Essiivi", form: "lehtenä" },
          { label: "Translatiivi", form: "lehdeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "lehdet" },
          { label: "Partitiivi", form: "lehtiä" },
          { label: "Genetiivi", form: "lehtien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sanomalehti",
      en: "newspaper",
      taso: "A2",
      esim: { fi: "Tilaan sanomalehden kotiin.", en: "I subscribe to a newspaper at home." },
    },
    {
      fi: "aikakauslehti",
      en: "magazine, periodical",
      taso: "B1",
      esim: { fi: "Luin aikakauslehteä odotushuoneessa.", en: "I read a magazine in the waiting room." },
    },
    {
      fi: "lehdistö",
      en: "the press",
      taso: "B2",
      esim: { fi: "Lehdistö seurasi oikeudenkäyntiä tiiviisti.", en: "The press followed the trial closely." },
    },
  ],
  synonyymit: [
    { fi: "julkaisu", en: "publication" },
    { fi: "sanomalehti", en: "newspaper" },
  ],
  esimerkit: {
    A2: { fi: "Luen lehteä aamukahvilla.", en: "I read the paper with my morning coffee." },
    B1: { fi: "Asiasta kirjoitettiin paikallisessa lehdessä.", en: "The matter was written about in the local paper." },
    B2: {
      fi: "Syksyllä puiden lehdet muuttuvat keltaisiksi ja putoavat.",
      en: "In autumn the trees' leaves turn yellow and fall.",
    },
  },
  updatedAt: "2026-06-06",
};

export default lehti;
