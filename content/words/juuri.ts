import type { Word } from "@/lib/content-types";

// Adverb "juuri" (just, exactly; just now). Invariant in this use. (Also a homonym noun
// juuri = root, type 26/pieni — noted but this entry focuses on the adverb.)
const juuri: Word = {
  fi: "juuri",
  slug: "juuri",
  pos: "adverbi (asteen / ajan adverbi)",
  posClass: "adverbi",
  level: "A2",
  en: "just, exactly; just now",
  selitys:
    "Täsmälleen: 'juuri niin' = exactly so; juuri äsken: 'tulin juuri' = I just came. Adverbina ei taivuteta. (Homonyymi substantiivi juuri = root, taipuu juuren/juurta.)",
  kuva: { emoji: "🎯", alt: "juuri – juuri oikein, juuri nyt" },

  kielioppi: {
    tyyppi: "asteen/ajan adverbi; taipumaton (vrt. homonyymi substantiivi juuri = root)",
    muodot: [
      { sija: "täsmällisyys", muoto: "juuri", merkitys: "exactly, precisely" },
      { sija: "aika", muoto: "juuri (nyt)", merkitys: "just now, right now" },
      { sija: "kielteinen", muoto: "ei juuri", merkitys: "hardly, not much" },
    ],
    huom:
      "Kolme käyttöä: täsmällisyys ('juuri sinä'), äskeisyys ('söin juuri'), ja kielteinen 'ei juuri' = hardly. Substantiivi juuri (root) on eri sana: juuren, juurta.",
  },
  johdokset: [
    {
      fi: "juuri nyt",
      en: "right now",
      taso: "A2",
      esim: { fi: "En voi puhua juuri nyt.", en: "I can't talk right now." },
    },
    {
      fi: "juurikaan (ei juurikaan)",
      en: "hardly (at all)",
      taso: "B2",
      esim: { fi: "En nukkunut juurikaan.", en: "I hardly slept at all." },
    },
    {
      fi: "juuri sopiva",
      en: "just right",
      taso: "B1",
      esim: { fi: "Koko on juuri sopiva.", en: "The size is just right." },
    },
  ],
  synonyymit: [
    { fi: "täsmälleen", en: "exactly" },
    { fi: "juuri äsken", en: "just a moment ago" },
  ],
  esimerkit: {
    A2: { fi: "Tulin juuri kotiin.", en: "I just came home." },
    B1: { fi: "Sinä olet juuri se henkilö, jota etsin.", en: "You are exactly the person I'm looking for." },
    B2: {
      fi: "Juuri kun olin lähdössä, puhelin soi, ja jouduin jäämään vielä hetkeksi.",
      en: "Just as I was about to leave, the phone rang, and I had to stay a moment longer.",
    },
  },
  updatedAt: "2026-06-05",
};

export default juuri;
