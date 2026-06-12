import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, t:d gradation, stem pysähty- ~ pysähdy-.
// Present pysähdyn, past pysähdyin, past participle pysähtynyt. Intransitive.
const pysahtya: Word = {
  fi: "pysähtyä",
  slug: "pysähtyä",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to stop, to come to a halt (intransitive)",
  selitys:
    "Lakata liikkumasta: 'bussi pysähtyi'. Tyyppi 1 (-yä), astevaihtelu t:d (pysähdyn). Intransitiivinen. Vrt. pysäyttää (to stop sth), pysäkki (bus stop), pysyä (to stay).",
  kuva: { alt: "pysähtyä – lakata liikkumasta" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-yä); astevaihtelu t:d (pysähty- ↔ pysähdy-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "pysähdyn", merkitys: "I stop" },
      { sija: "imperfekti (minä)", muoto: "pysähdyin", merkitys: "I stopped" },
      { sija: "NUT-partisiippi", muoto: "pysähtynyt", merkitys: "(have) stopped" },
    ],
    huom:
      "Persoonamuodoissa heikko d (pysähdyn), 3. persoonassa ja infinitiivissä vahva t (pysähtyy, pysähtyä, pysähtynyt). Intransitiivi: itse pysähtyy. Vrt. pysäyttää = to bring sth to a stop (transitiivi).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "pysähdyn" },
          { label: "sinä", form: "pysähdyt" },
          { label: "hän", form: "pysähtyy" },
          { label: "me", form: "pysähdymme" },
          { label: "te", form: "pysähdytte" },
          { label: "he", form: "pysähtyvät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en pysähdy" },
          { label: "hän", form: "ei pysähdy" },
          { label: "he", form: "eivät pysähdy" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "pysähdyin" },
          { label: "sinä", form: "pysähdyit" },
          { label: "hän", form: "pysähtyi" },
          { label: "me", form: "pysähdyimme" },
          { label: "te", form: "pysähdyitte" },
          { label: "he", form: "pysähtyivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen pysähtynyt" },
          { label: "hän", form: "on pysähtynyt" },
          { label: "he", form: "ovat pysähtyneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "pysähdy!" },
          { label: "te", form: "pysähtykää!" },
          { label: "kielto (sinä)", form: "älä pysähdy" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pysäkki",
      en: "(bus/tram) stop",
      taso: "A2",
      esim: { fi: "Bussi odottaa pysäkillä.", en: "The bus is waiting at the stop." },
    },
    {
      fi: "pysäyttää",
      en: "to stop (something), bring to a halt",
      taso: "B1",
      esim: { fi: "Poliisi pysäytti auton.", en: "The police stopped the car." },
    },
    {
      fi: "pysähdys",
      en: "stop, halt",
      taso: "B2",
      esim: { fi: "Teimme lyhyen pysähdyksen matkalla.", en: "We made a short stop on the way." },
    },
  ],
  synonyymit: [
    { fi: "seisahtua", en: "to come to a standstill" },
    { fi: "jäädä paikoilleen", en: "to stay put" },
  ],
  esimerkit: {
    A2: { fi: "Juna pysähtyy joka asemalla.", en: "The train stops at every station." },
    B1: { fi: "Pysähdyin hetkeksi katsomaan maisemaa.", en: "I stopped for a moment to look at the view." },
    B2: {
      fi: "Auto pysähtyi äkillisesti, kun jänis hyppäsi tielle.",
      en: "The car stopped suddenly when a hare jumped onto the road.",
    },
  },
  updatedAt: "2026-06-06",
};

export default pysahtya;
