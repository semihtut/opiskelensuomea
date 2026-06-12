import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, tt:t gradation, stem näyttö- ~ näytö-.
// Genitive näytön, partitive näyttöä, illative näyttöön, partitive pl näyttöjä.
const näyttö: Word = {
  fi: "näyttö",
  slug: "näyttö",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "screen, display, monitor",
  selitys:
    "Laitteen ruutu, jolta katsotaan kuvaa: 'kosketusnäyttö'. Tyyppi 1, astevaihtelu tt:t (näyttö → näytön). Partitiivin monikko näyttöjä. Johdettu verbistä näyttää. Vrt. ruutu, kosketusnäyttö.",
  kuva: { alt: "näyttö – laitteen ruutu, jolta katsotaan kuvaa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu tt:t (näyttö ↔ näytö-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "näytön", merkitys: "of the screen" },
      { sija: "partitiivi (yks.)", muoto: "näyttöä", merkitys: "screen (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "näyttöjä", merkitys: "screens (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa tt → t: genetiivi näytön, adessiivi näytöllä. Vahva aste tt säilyy partitiivissa näyttöä. Monta merkitystä: ruutu (display), näytön antaminen (evidence). Vrt. näyttää = to show.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "näyttö" },
          { label: "Partitiivi", form: "näyttöä" },
          { label: "Genetiivi", form: "näytön" },
          { label: "Inessiivi", form: "näytössä" },
          { label: "Elatiivi", form: "näytöstä" },
          { label: "Illatiivi", form: "näyttöön" },
          { label: "Adessiivi", form: "näytöllä" },
          { label: "Ablatiivi", form: "näytöltä" },
          { label: "Allatiivi", form: "näytölle" },
          { label: "Essiivi", form: "näyttönä" },
          { label: "Translatiivi", form: "näytöksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "näytöt" },
          { label: "Partitiivi", form: "näyttöjä" },
          { label: "Genetiivi", form: "näyttöjen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kosketusnäyttö",
      en: "touchscreen",
      taso: "B1",
      esim: { fi: "Puhelimessa on kosketusnäyttö.", en: "The phone has a touchscreen." },
    },
    {
      fi: "näyttää",
      en: "to show, display",
      taso: "A2",
      esim: { fi: "Näytä minulle kuva.", en: "Show me the picture." },
    },
    {
      fi: "näytönsäästäjä",
      en: "screensaver",
      taso: "B2",
      esim: { fi: "Näytönsäästäjä käynnistyi.", en: "The screensaver started." },
    },
  ],
  synonyymit: [
    { fi: "ruutu", en: "screen" },
    { fi: "monitori", en: "monitor" },
  ],
  esimerkit: {
    A2: { fi: "Näyttö on liian kirkas.", en: "The screen is too bright." },
    B1: { fi: "Kytkin tietokoneen isompaan näyttöön.", en: "I connected the computer to a bigger monitor." },
    B2: {
      fi: "Pitkä näytön tuijottaminen rasittaa silmiä.",
      en: "Staring at a screen for a long time strains the eyes.",
    },
  },
  updatedAt: "2026-06-07",
};

export default näyttö;
