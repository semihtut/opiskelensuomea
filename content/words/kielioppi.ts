import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, pp:p gradation, stem kielioppi- ~ kieliopi-.
// Genitive kieliopin, partitive kielioppia, partitive pl kielioppeja.
const kielioppi: Word = {
  fi: "kielioppi",
  slug: "kielioppi",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "B1",
  en: "grammar",
  selitys:
    "Kielen rakennetta ja sääntöjä koskeva oppi: 'suomen kielioppi', 'opiskella kielioppia'. Tyyppi 5/risti, astevaihtelu pp:p (kielioppi → kieliopin). Yhdyssana kieli + oppi. Vrt. kieli, oppi, sääntö.",
  kuva: { alt: "kielioppi – kielen rakennetta ja sääntöjä koskeva oppi" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; astevaihtelu pp:p (kielioppi ~ kieliopi-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kieliopin", merkitys: "of the grammar" },
      { sija: "partitiivi (yks.)", muoto: "kielioppia", merkitys: "grammar (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kielioppeja", merkitys: "grammars (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu pp:p: vahva kielioppi (nominatiivi, partitiivi kielioppia), heikko kieliopi- (kieliopin, kieliopissa). Yhdyssana kieli + oppi. Vrt. kieli, oppi, kielioppikirja.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kielioppi" },
          { label: "Partitiivi", form: "kielioppia" },
          { label: "Genetiivi", form: "kieliopin" },
          { label: "Inessiivi", form: "kieliopissa" },
          { label: "Elatiivi", form: "kieliopista" },
          { label: "Illatiivi", form: "kielioppiin" },
          { label: "Adessiivi", form: "kieliopilla" },
          { label: "Ablatiivi", form: "kieliopilta" },
          { label: "Allatiivi", form: "kieliopille" },
          { label: "Essiivi", form: "kielioppina" },
          { label: "Translatiivi", form: "kieliopiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kieliopit" },
          { label: "Partitiivi", form: "kielioppeja" },
          { label: "Genetiivi", form: "kielioppien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kielioppikirja",
      en: "grammar book",
      taso: "B1",
      esim: { fi: "Ostin uuden kielioppikirjan.", en: "I bought a new grammar book." },
    },
    {
      fi: "kieliopillinen",
      en: "grammatical",
      taso: "B2",
      esim: { fi: "Lauseessa on kieliopillinen virhe.", en: "There is a grammatical error in the sentence." },
    },
  ],
  synonyymit: [
    { fi: "kielen säännöt", en: "the rules of the language" },
  ],
  esimerkit: {
    A2: { fi: "Suomen kielioppi on vaikeaa.", en: "Finnish grammar is difficult." },
    B1: { fi: "Harjoittelen kielioppia joka päivä.", en: "I practice grammar every day." },
    B2: {
      fi: "Kielioppi on helpompi oppia, kun näkee säännöt oikeissa lauseissa.",
      en: "Grammar is easier to learn when you see the rules in real sentences.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kielioppi;
