import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 7/ovi with k:j (rk:rj) gradation. Strong
// rk in open syllables (arkea, arkeen), weak rj in closed (arjen, arjessa). Used
// mostly in the singular.
const arki: Word = {
  fi: "arki",
  slug: "arki",
  pos: "substantiivi (tyyppi: ovi)",
  posClass: "substantiivi",
  level: "A2",
  en: "everyday life; weekday",
  selitys:
    "Tavallinen, jokapäiväinen elämä; myös arkipäivä viikonlopun vastakohtana. Astevaihtelu rk:rj (arki → arjen). Käytetään enimmäkseen yksikössä.",
  kuva: { emoji: "📅", alt: "arki – tavallinen arkipäivä kalenterissa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 7/ovi; astevaihtelu rk:rj (arki → arjen)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "arkea", merkitys: "everyday life (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "arjen", merkitys: "of everyday life" },
      { sija: "illatiivi (yks.)", muoto: "arkeen", merkitys: "into everyday life" },
    ],
    huom:
      "Vahva rk avotavussa (arkea, arkeen), heikko rj umpitavussa (arjen, arjessa). Sana esiintyy lähinnä yksikössä.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "arki" },
          { label: "Partitiivi", form: "arkea" },
          { label: "Genetiivi", form: "arjen" },
          { label: "Inessiivi", form: "arjessa" },
          { label: "Elatiivi", form: "arjesta" },
          { label: "Illatiivi", form: "arkeen" },
          { label: "Adessiivi", form: "arjella" },
          { label: "Ablatiivi", form: "arjelta" },
          { label: "Allatiivi", form: "arjelle" },
          { label: "Essiivi", form: "arkena" },
          { label: "Translatiivi", form: "arjeksi" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "arkipäivä",
      en: "weekday; ordinary day",
      taso: "A2",
      esim: { fi: "Arkipäivisin herään aikaisin.", en: "On weekdays I wake up early." },
    },
    {
      fi: "arkinen",
      en: "everyday, mundane",
      taso: "B1",
      esim: { fi: "Se on aivan arkinen asia.", en: "It's a completely ordinary matter." },
    },
    {
      fi: "arkielämä",
      en: "everyday life",
      taso: "B1",
      esim: { fi: "Arkielämä on kiireistä.", en: "Everyday life is busy." },
    },
  ],
  synonyymit: [
    { fi: "arkipäivä", en: "weekday, the everyday" },
    { fi: "jokapäiväisyys", en: "everydayness, routine" },
  ],
  esimerkit: {
    A2: { fi: "Arki alkaa taas maanantaina.", en: "The everyday routine starts again on Monday." },
    B1: { fi: "Pyrin tuomaan pieniä iloja arkeen.", en: "I try to bring small joys into everyday life." },
    B2: {
      fi: "Matkan jälkeen oli vaikea palata arjen rutiineihin.",
      en: "After the trip it was hard to return to the routines of everyday life.",
    },
  },
  updatedAt: "2026-06-04",
};

export default arki;
