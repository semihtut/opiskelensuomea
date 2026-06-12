import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt–t gradation, stem yhdistä-.
// Present yhdistän, past yhdistin, past participle yhdistänyt.
const yhdistaa: Word = {
  fi: "yhdistää",
  slug: "yhdistää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to combine, connect, unite",
  selitys:
    "Liittää kaksi asiaa yhteen: 'yhdistää johdot' / 'yhdistää voimat'. Astevaihtelu tt:t (yhdistää → yhdistän). Juuri yksi/yhde-. Vrt. yhdistys (association), erottaa (to separate).",
  kuva: { alt: "yhdistää – liittää kaksi asiaa yhteen" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ttää); astevaihtelu tt:t; vartalo yhdistä-",
    muodot: [
      { sija: "preesens (minä)", muoto: "yhdistän", merkitys: "I combine" },
      { sija: "imperfekti (minä)", muoto: "yhdistin", merkitys: "I combined" },
      { sija: "NUT-partisiippi", muoto: "yhdistänyt", merkitys: "(have) combined" },
    ],
    huom:
      "Astevaihtelu tt:t: yhdistän, yhdistät, yhdisti. Liitettävä asia illatiivissa: 'yhdistä A B:hen'. Vastakohta erottaa. Vrt. yhteys = connection, yhdistys = association.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "yhdistän" },
          { label: "sinä", form: "yhdistät" },
          { label: "hän", form: "yhdistää" },
          { label: "me", form: "yhdistämme" },
          { label: "te", form: "yhdistätte" },
          { label: "he", form: "yhdistävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en yhdistä" },
          { label: "hän", form: "ei yhdistä" },
          { label: "he", form: "eivät yhdistä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "yhdistin" },
          { label: "sinä", form: "yhdistit" },
          { label: "hän", form: "yhdisti" },
          { label: "me", form: "yhdistimme" },
          { label: "te", form: "yhdistitte" },
          { label: "he", form: "yhdistivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen yhdistänyt" },
          { label: "hän", form: "on yhdistänyt" },
          { label: "he", form: "ovat yhdistäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "yhdistä!" },
          { label: "te", form: "yhdistäkää!" },
          { label: "kielto (sinä)", form: "älä yhdistä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "yhteys",
      en: "connection, contact",
      taso: "B1",
      esim: { fi: "Nettiyhteys katkesi.", en: "The internet connection dropped." },
    },
    {
      fi: "yhdistys",
      en: "association, society",
      taso: "B2",
      esim: { fi: "Liityin urheiluyhdistykseen.", en: "I joined a sports association." },
    },
    {
      fi: "yhdistelmä",
      en: "combination",
      taso: "B2",
      esim: { fi: "Se on värien hyvä yhdistelmä.", en: "It is a good combination of colours." },
    },
  ],
  synonyymit: [
    { fi: "liittää", en: "to attach, join" },
    { fi: "kytkeä", en: "to connect, couple" },
  ],
  esimerkit: {
    A2: { fi: "Yhdistä pisteet viivalla.", en: "Connect the dots with a line." },
    B1: { fi: "Yhdistin työn ja opiskelun.", en: "I combined work and study." },
    B2: {
      fi: "Hanke yhdisti useita kaupunkeja saman tavoitteen taakse.",
      en: "The project united several cities behind the same goal.",
    },
  },
  updatedAt: "2026-06-06",
};

export default yhdistaa;
