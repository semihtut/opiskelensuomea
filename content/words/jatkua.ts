import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation, stem jatku-.
// Present hän jatkuu; imperfect hän jatkui; NUT participle jatkunut. Intransitive.
const jatkua: Word = {
  fi: "jatkua",
  slug: "jatkua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to continue, go on, last (intransitive)",
  selitys:
    "Olla edelleen käynnissä tai kestää: 'sade jatkuu'. Tyyppi 1 (-ua), tyyppi 52/sanoa, ei astevaihtelua. Intransitiivinen (jokin jatkuu). Johdettu verbistä jatkaa. Vrt. jatko (continuation), jatkuva.",
  kuva: { emoji: "➡️", alt: "jatkua – olla edelleen käynnissä" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua), Kotus 52/sanoa; ei astevaihtelua; intransitiivinen",
    muodot: [
      { sija: "preesens (hän/se)", muoto: "jatkuu", merkitys: "it continues" },
      { sija: "imperfekti (hän/se)", muoto: "jatkui", merkitys: "it continued" },
      { sija: "NUT-partisiippi", muoto: "jatkunut", merkitys: "(has) continued" },
    ],
    huom:
      "Intransitiivinen: 'jokin jatkuu' (vrt. transitiivinen jatkaa = 'jatkaa jotakin'). Käytetään useimmiten 3. persoonassa. 'Ohjelma jatkuu' = the programme continues. Vrt. jatkuva = continuous.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "jatkun" },
          { label: "sinä", form: "jatkut" },
          { label: "hän / se", form: "jatkuu" },
          { label: "me", form: "jatkumme" },
          { label: "te", form: "jatkutte" },
          { label: "he / ne", form: "jatkuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "se", form: "ei jatku" },
          { label: "ne", form: "eivät jatku" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "hän / se", form: "jatkui" },
          { label: "he / ne", form: "jatkuivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "se", form: "on jatkunut" },
          { label: "ne", form: "ovat jatkuneet" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "jatkaa",
      en: "to continue (something), keep doing",
      taso: "B1",
      esim: { fi: "Jatkamme kokousta tauon jälkeen.", en: "We'll continue the meeting after the break." },
    },
    {
      fi: "jatko",
      en: "continuation, sequel",
      taso: "B1",
      esim: { fi: "Tarina sai jatkon.", en: "The story got a sequel." },
    },
    {
      fi: "jatkuva",
      en: "continuous, ongoing",
      taso: "B2",
      esim: { fi: "Se vaatii jatkuvaa harjoittelua.", en: "It requires continuous practice." },
    },
  ],
  synonyymit: [
    { fi: "kestää", en: "to last" },
    { fi: "kestää edelleen", en: "to keep going" },
  ],
  esimerkit: {
    A2: { fi: "Sade jatkuu koko päivän.", en: "The rain continues all day." },
    B1: { fi: "Neuvottelut jatkuivat myöhään iltaan.", en: "The negotiations continued late into the evening." },
    B2: {
      fi: "Jos tilanne jatkuu tällaisena, meidän on tehtävä jotain.",
      en: "If the situation continues like this, we'll have to do something.",
    },
  },
  updatedAt: "2026-06-06",
};

export default jatkua;
