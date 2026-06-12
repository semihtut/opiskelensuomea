import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem käteise-.
// Genitive käteisen, partitive käteistä, illative käteiseen, partitive pl käteisiä.
const käteinen: Word = {
  fi: "käteinen",
  slug: "käteinen",
  pos: "substantiivi (tyyppi 38/nainen)",
  posClass: "substantiivi",
  level: "B1",
  en: "cash",
  selitys:
    "Setelit ja kolikot, fyysinen raha: 'maksaa käteisellä'. Tyyppi 38, ei astevaihtelua; vartalo käteise-. Käytetään useimmiten yksikössä. Vrt. kortti, raha. Alun perin adjektiivi 'käteinen raha' = ready money.",
  kuva: { alt: "käteinen – setelit ja kolikot" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 38/nainen; ei astevaihtelua; vartalo käteise-",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "käteisen", merkitys: "of the cash" },
      { sija: "partitiivi (yks.)", muoto: "käteistä", merkitys: "cash (partitive)" },
      { sija: "adessiivi (yks.)", muoto: "käteisellä", merkitys: "with cash" },
    ],
    huom:
      "Useimmiten yksikössä (ainesana). 'Maksaa käteisellä' = to pay in cash. Vartalo käteise- (genetiivi käteisen, partitiivi käteistä). Vrt. käteisautomaatti = ATM.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "käteinen" },
          { label: "Partitiivi", form: "käteistä" },
          { label: "Genetiivi", form: "käteisen" },
          { label: "Inessiivi", form: "käteisessä" },
          { label: "Elatiivi", form: "käteisestä" },
          { label: "Illatiivi", form: "käteiseen" },
          { label: "Adessiivi", form: "käteisellä" },
          { label: "Ablatiivi", form: "käteiseltä" },
          { label: "Allatiivi", form: "käteiselle" },
          { label: "Essiivi", form: "käteisenä" },
          { label: "Translatiivi", form: "käteiseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "käteiset" },
          { label: "Partitiivi", form: "käteisiä" },
          { label: "Genetiivi", form: "käteisten / käteisien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "käteisautomaatti",
      en: "ATM, cash machine",
      taso: "B1",
      esim: { fi: "Nostin rahaa käteisautomaatista.", en: "I withdrew money from the ATM." },
    },
    {
      fi: "käteismaksu",
      en: "cash payment",
      taso: "B2",
      esim: { fi: "Käteismaksu ei aina onnistu.", en: "Cash payment isn't always possible." },
    },
    {
      fi: "raha",
      en: "money",
      taso: "A2",
      esim: { fi: "Minulla ei ole rahaa mukana.", en: "I don't have money with me." },
    },
  ],
  synonyymit: [
    { fi: "raha", en: "money" },
    { fi: "setelit ja kolikot", en: "notes and coins" },
  ],
  esimerkit: {
    A2: { fi: "Maksan käteisellä.", en: "I'll pay in cash." },
    B1: { fi: "Ravintola ei ota käteistä vastaan.", en: "The restaurant doesn't accept cash." },
    B2: {
      fi: "Yhä harvempi kantaa mukanaan käteistä, kun kaikki maksavat kortilla.",
      en: "Fewer and fewer people carry cash, since everyone pays by card.",
    },
  },
  updatedAt: "2026-06-06",
};

export default käteinen;
