import type { Week } from "@/lib/content-types";

// Week 1 — Reaktivointi phase. Day 1 references the verified seed words; Days 2–6
// carry themes and are populated in later verified batches (see ROADMAP).
// The reading text uses ONLY Day-1 vocabulary so it is fully supported.
const week1: Week = {
  week: 1,
  phase: "Reaktivointi",
  theme: "Arjen sanat ja perusverbit",
  days: [
    {
      day: 1,
      theme: "Olemisen ja tekemisen verbit + tervehdys",
      wordSlugs: [
        "olla",
        "tehdä",
        "voida",
        "saada",
        "aika",
        "päivä",
        "henkilö",
        "hyvä",
        "huono",
        "nyt",
        "ja",
        "hei-mitä-kuuluu",
      ],
    },
    {
      day: 2,
      theme: "Ihmiset ja perhe",
      wordSlugs: [
        "perhe",
        "äiti",
        "isä",
        "lapsi",
        "nainen",
        "mies",
        "ystävä",
        "kaveri",
        "nimi",
        "vanha",
        "nuori",
        "asua",
      ],
    },
    {
      day: 3,
      theme: "Koti ja arki",
      wordSlugs: [
        "koti",
        "huone",
        "ovi",
        "ikkuna",
        "pöytä",
        "sänky",
        "keittiö",
        "avain",
        "nukkua",
        "herätä",
        "siivota",
        "arki",
      ],
    },
    {
      day: 4,
      theme: "Ruoka ja juoma",
      wordSlugs: [
        "ruoka",
        "syödä",
        "juoda",
        "leipä",
        "maito",
        "vesi",
        "kahvi",
        "omena",
        "liha",
        "kala",
        "juusto",
        "peruna",
      ],
    },
    { day: 5, theme: "Aika ja viikonpäivät", wordSlugs: [] },
    { day: 6, theme: "Asiointi ja kohteliaisuus", wordSlugs: [] },
  ],
  teksti: {
    title: "Tavallinen päivä",
    level: "A2",
    topic: "Yhden ihmisen tavallinen arkipäivä aamusta iltaan.",
    paragraph:
      "Aamulla minä [[olen]] usein väsynyt, mutta [[teen]] aamupalan [[ja]] juon kahvia. " +
      "[[Nyt]] minulla on [[aikaa]] lukea lehteä. " +
      "Päivällä [[teen]] töitä [[ja]] tapaan monia [[henkilöitä]]. " +
      "Joku kysyy: ”[[Hei, mitä kuuluu?]]” Minä vastaan: ”Kiitos, [[hyvää]].” " +
      "Joskus [[saan]] [[huonoja]] uutisia, mutta tänään kaikki on hyvin. " +
      "Illalla minä [[voin]] hyvin: se [[oli]] todella [[hyvä]] [[päivä]].",
    translation:
      "In the morning I am often tired, but I make breakfast and drink coffee. " +
      "Now I have time to read the paper. " +
      "During the day I work and meet many people. " +
      "Someone asks: “Hi, how are you?” I answer: “Thanks, good.” " +
      "Sometimes I get bad news, but today everything is fine. " +
      "In the evening I feel well: it was a really good day.",
    targets: [
      "olla",
      "tehdä",
      "ja",
      "nyt",
      "aika",
      "henkilö",
      "hei, mitä kuuluu?",
      "hyvä",
      "saada",
      "huono",
      "voida",
      "päivä",
    ],
  },
};

export default week1;
