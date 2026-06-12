import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 58/laskea, lk:lj gradation, stem kulke- ~ kulje-.
// Present kuljen, past kuljin, past participle kulkenut.
const kulkea: Word = {
  fi: "kulkea",
  slug: "kulkea",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to go, to travel, to run (extend)",
  selitys:
    "Liikkua eteenpäin tai johtaa jotakin reittiä: 'kulkea junalla' / 'tie kulkee metsän läpi'. Tyyppi 1 (-ea, laskea-tyyppi), astevaihtelu lk:lj (kuljen). Vrt. kulku (passage), kulkija (wanderer), kuljettaa (to transport).",
  kuva: { alt: "kulkea – liikkua eteenpäin" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ea), laskea-tyyppi; astevaihtelu lk:lj (kulke- ↔ kulje-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "kuljen", merkitys: "I go / travel" },
      { sija: "imperfekti (minä)", muoto: "kuljin", merkitys: "I went / travelled" },
      { sija: "NUT-partisiippi", muoto: "kulkenut", merkitys: "(have) gone / travelled" },
    ],
    huom:
      "Persoonamuodoissa heikko lj (kuljen, kuljin), 3. persoonassa ja infinitiivissä vahva lk (kulkee, kulkea, kulkenut). Väline adessiivissa: 'kulkea bussilla'. Vrt. kulkuneuvo = vehicle.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kuljen" },
          { label: "sinä", form: "kuljet" },
          { label: "hän", form: "kulkee" },
          { label: "me", form: "kuljemme" },
          { label: "te", form: "kuljette" },
          { label: "he", form: "kulkevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kulje" },
          { label: "hän", form: "ei kulje" },
          { label: "he", form: "eivät kulje" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kuljin" },
          { label: "sinä", form: "kuljit" },
          { label: "hän", form: "kulki" },
          { label: "me", form: "kuljimme" },
          { label: "te", form: "kuljitte" },
          { label: "he", form: "kulkivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kulkenut" },
          { label: "hän", form: "on kulkenut" },
          { label: "he", form: "ovat kulkeneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kulje!" },
          { label: "te", form: "kulkekaa!" },
          { label: "kielto (sinä)", form: "älä kulje" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kulku",
      en: "passage, course, movement",
      taso: "B2",
      esim: { fi: "Tapahtumien kulku yllätti kaikki.", en: "The course of events surprised everyone." },
    },
    {
      fi: "kulkuneuvo",
      en: "vehicle, means of transport",
      taso: "B1",
      esim: { fi: "Polkupyörä on hyvä kulkuneuvo.", en: "A bicycle is a good means of transport." },
    },
    {
      fi: "kulkija",
      en: "wanderer, traveller",
      taso: "B2",
      esim: { fi: "Yksinäinen kulkija nousi mäelle.", en: "A lone wanderer climbed the hill." },
    },
  ],
  synonyymit: [
    { fi: "liikkua", en: "to move" },
    { fi: "matkata", en: "to journey" },
  ],
  esimerkit: {
    A2: { fi: "Kuljen töihin bussilla.", en: "I go to work by bus." },
    B1: { fi: "Polku kulkee järven rantaa pitkin.", en: "The path runs along the lakeshore." },
    B2: {
      fi: "Juna kulkee tämän reitin vain arkipäivisin.",
      en: "The train runs this route only on weekdays.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kulkea;
