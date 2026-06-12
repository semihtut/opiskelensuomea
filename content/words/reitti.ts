import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, tt:t gradation, stem reitti- ~ reiti-.
// Genitive reitin, partitive reittiä, illative reittiin, partitive pl reittejä.
const reitti: Word = {
  fi: "reitti",
  slug: "reitti",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "B1",
  en: "route, way",
  selitys:
    "Suunniteltu kulkutie paikasta toiseen: 'nopein reitti'. Tyyppi 5, astevaihtelu tt:t (reitti → reitin). Partitiivin monikko reittejä. Vrt. bussireitti (bus route), reititin (router).",
  kuva: { alt: "reitti – suunniteltu kulkutie" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; astevaihtelu tt:t (reitti ↔ reiti-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "reitin", merkitys: "of the route" },
      { sija: "partitiivi (yks.)", muoto: "reittiä", merkitys: "route (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "reittejä", merkitys: "routes (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa tt → t: genetiivi reitin, adessiivi reitillä. Vahva aste tt säilyy partitiivissa reittiä. Partitiivin monikko reittejä (e-vartalo). Vrt. matkareitti = travel route.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "reitti" },
          { label: "Partitiivi", form: "reittiä" },
          { label: "Genetiivi", form: "reitin" },
          { label: "Inessiivi", form: "reitissä" },
          { label: "Elatiivi", form: "reitistä" },
          { label: "Illatiivi", form: "reittiin" },
          { label: "Adessiivi", form: "reitillä" },
          { label: "Ablatiivi", form: "reitiltä" },
          { label: "Allatiivi", form: "reitille" },
          { label: "Essiivi", form: "reittinä" },
          { label: "Translatiivi", form: "reitiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "reitit" },
          { label: "Partitiivi", form: "reittejä" },
          { label: "Genetiivi", form: "reittien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "bussireitti",
      en: "bus route",
      taso: "B1",
      esim: { fi: "Bussireitti muuttui kesäksi.", en: "The bus route changed for the summer." },
    },
    {
      fi: "kiertoreitti",
      en: "detour, alternative route",
      taso: "B2",
      esim: { fi: "Jouduimme ajamaan kiertoreittiä.", en: "We had to take a detour." },
    },
    {
      fi: "lentoreitti",
      en: "flight route",
      taso: "B2",
      esim: { fi: "Uusi lentoreitti avattiin Aasiaan.", en: "A new flight route to Asia was opened." },
    },
  ],
  synonyymit: [
    { fi: "kulkutie", en: "path, way" },
    { fi: "matkareitti", en: "travel route" },
  ],
  esimerkit: {
    A2: { fi: "Mikä on lyhin reitti asemalle?", en: "What's the shortest route to the station?" },
    B1: { fi: "Valitsimme kauniimman reitin.", en: "We chose the more scenic route." },
    B2: {
      fi: "Navigaattori ehdotti nopeampaa reittiä ruuhkan ohi.",
      en: "The navigator suggested a faster route past the traffic jam.",
    },
  },
  updatedAt: "2026-06-06",
};

export default reitti;
