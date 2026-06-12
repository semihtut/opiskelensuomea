import type { Word } from "@/lib/content-types";

// Frequency adverb "joskus" (sometimes; at some time). Invariant.
const joskus: Word = {
  fi: "joskus",
  slug: "joskus",
  pos: "adverbi (ajan adverbi)",
  posClass: "adverbi",
  level: "A2",
  en: "sometimes; at some time",
  selitys:
    "Silloin tällöin; jonain aikana. Toistuvuuden adverbi, ei taivuteta. 'Joskus käyn elokuvissa.' Myös menneestä/tulevasta: 'joskus ennen', 'joskus vielä'.",
  kuva: { alt: "joskus – silloin tällöin" },

  kielioppi: {
    tyyppi: "toistuvuuden adverbi; taipumaton",
    muodot: [
      { sija: "perusmuoto", muoto: "joskus", merkitys: "sometimes" },
      { sija: "yhdistelmä", muoto: "joskus joskus", merkitys: "(every) now and then" },
      { sija: "vrt.", muoto: "silloin tällöin", merkitys: "from time to time" },
    ],
    huom:
      "Toistuvuusasteikko: aina – usein – joskus – harvoin. Voi viitata epämääräiseen aikaan: 'Olin joskus hyvä piirtämään.' (once) tai 'Tavataan joskus.' (sometime).",
  },
  johdokset: [
    {
      fi: "joskus joskus",
      en: "every now and then",
      taso: "B1",
      esim: { fi: "Käyn siellä joskus joskus.", en: "I go there every now and then." },
    },
    {
      fi: "jolloin",
      en: "at which time, when (relative)",
      taso: "B2",
      esim: { fi: "Tulin kello viisi, jolloin kauppa oli vielä auki.", en: "I came at five, when the shop was still open." },
    },
    {
      fi: "joskus joskus vielä",
      en: "someday still",
      taso: "B2",
      esim: { fi: "Matkustan sinne joskus vielä.", en: "I'll travel there someday still." },
    },
  ],
  synonyymit: [
    { fi: "silloin tällöin", en: "from time to time" },
    { fi: "toisinaan", en: "occasionally" },
  ],
  esimerkit: {
    A2: { fi: "Joskus syön ravintolassa.", en: "Sometimes I eat at a restaurant." },
    B1: { fi: "Joskus on parempi olla hiljaa.", en: "Sometimes it's better to stay quiet." },
    B2: {
      fi: "Toivon, että voisimme joskus matkustaa yhdessä Lappiin talvella.",
      en: "I hope that we could sometime travel together to Lapland in winter.",
    },
  },
  updatedAt: "2026-06-05",
};

export default joskus;
