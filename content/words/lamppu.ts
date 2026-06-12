import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, pp:p gradation. Genitive lampun,
// partitive lamppua, illative lamppuun, partitive pl lamppuja.
const lamppu: Word = {
  fi: "lamppu",
  slug: "lamppu",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A1",
  en: "lamp; light bulb",
  selitys:
    "Valaisin tai sen polttimo. Tyyppi 1, astevaihtelu pp:p (lamppu → lampun). Ruotsista (lampa).",
  kuva: { alt: "lamppu – pöytälamppu" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu pp:p",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "lampun", merkitys: "of the lamp" },
      { sija: "partitiivi (yks.)", muoto: "lamppua", merkitys: "lamp (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "lamppuja", merkitys: "lamps (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa pp → p: lampun, lampussa, lamput. Vahva aste säilyy: lamppua, lamppuun, lamppuja.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "lamppu" },
          { label: "Partitiivi", form: "lamppua" },
          { label: "Genetiivi", form: "lampun" },
          { label: "Inessiivi", form: "lampussa" },
          { label: "Elatiivi", form: "lampusta" },
          { label: "Illatiivi", form: "lamppuun" },
          { label: "Adessiivi", form: "lampulla" },
          { label: "Ablatiivi", form: "lampulta" },
          { label: "Allatiivi", form: "lampulle" },
          { label: "Essiivi", form: "lamppuna" },
          { label: "Translatiivi", form: "lampuksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "lamput" },
          { label: "Partitiivi", form: "lamppuja" },
          { label: "Genetiivi", form: "lamppujen" },
          { label: "Inessiivi", form: "lampuissa" },
          { label: "Illatiivi", form: "lamppuihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lampunvarjostin",
      en: "lampshade",
      taso: "B2",
      esim: { fi: "Lampunvarjostin oli punainen.", en: "The lampshade was red." },
    },
    {
      fi: "pöytälamppu",
      en: "table lamp",
      taso: "A2",
      esim: { fi: "Sytytin pöytälampun.", en: "I switched on the table lamp." },
    },
    {
      fi: "katulamppu",
      en: "street lamp",
      taso: "B1",
      esim: { fi: "Katulamput syttyivät hämärässä.", en: "The street lamps came on at dusk." },
    },
  ],
  synonyymit: [
    { fi: "valaisin", en: "light fixture" },
    { fi: "valo", en: "light" },
  ],
  esimerkit: {
    A2: { fi: "Sytytä lamppu, täällä on pimeää.", en: "Turn on the lamp, it's dark here." },
    B1: { fi: "Lampun polttimo paloi loppuun.", en: "The lamp's bulb burned out." },
    B2: {
      fi: "Olohuoneen pehmeä lamppu loi tunnelmaa.",
      en: "The soft lamp in the living room created an atmosphere.",
    },
  },
  updatedAt: "2026-06-05",
};

export default lamppu;
