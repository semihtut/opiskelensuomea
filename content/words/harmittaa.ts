import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem harmitta- ~ harmita-.
// Present minä harmitan, hän harmittaa; imperfect minä harmitin; NUT harmittanut. Also impersonal + partitive.
const harmittaa: Word = {
  fi: "harmittaa",
  slug: "harmittaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to annoy, vex; (impersonal) to feel annoyed/sorry",
  selitys:
    "Aiheuttaa harmia tai mielipahaa; persoonaton: 'minua harmittaa' = harmittaa minua. Tyyppi 1 (-aa), Kotus 53/muistaa, astevaihtelu tt:t (harmitan). Yleisin käyttö persoonaton + partitiivi. Vrt. harmi, harmillinen.",
  kuva: { emoji: "😤", alt: "harmittaa – aiheuttaa harmia tai mielipahaa" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; astevaihtelu tt:t (harmita- ~ harmitta-)",
    muodot: [
      { sija: "persoonaton", muoto: "minua harmittaa", merkitys: "I feel annoyed/sorry" },
      { sija: "imperfekti", muoto: "minua harmitti", merkitys: "I was annoyed" },
      { sija: "NUT-partisiippi", muoto: "harmittanut", merkitys: "(have) annoyed" },
    ],
    huom:
      "Yleisin käyttö PERSOONATON + partitiivi: 'minua harmittaa' = it annoys me / I feel bad. Astevaihtelu tt:t. Vrt. harmi = annoyance, pity; harmillinen = annoying. Sukua tunneverbeille pelottaa, hävettää.",
  },
  taivutus: {
    sections: [
      {
        title: "Persoonaton (yleisin)",
        rows: [
          { label: "minua harmittaa", form: "I feel annoyed" },
          { label: "häntä harmitti", form: "he/she felt annoyed" },
          { label: "kielto", form: "ei harmita" },
        ],
      },
      {
        title: "Preesens (transitiivinen)",
        rows: [
          { label: "se harmittaa", form: "it annoys" },
          { label: "ne harmittavat", form: "they annoy" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "se harmitti", form: "it annoyed" },
          { label: "ne harmittivat", form: "they annoyed" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "se on harmittanut", form: "it has annoyed" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "harmi",
      en: "annoyance; pity",
      taso: "B1",
      esim: { fi: "Mikä harmi!", en: "What a pity!" },
    },
    {
      fi: "harmillinen",
      en: "annoying, regrettable",
      taso: "B2",
      esim: { fi: "Se oli harmillinen erehdys.", en: "It was a regrettable mistake." },
    },
  ],
  synonyymit: [
    { fi: "ärsyttää", en: "to irritate" },
    { fi: "kaduttaa", en: "to make one regret" },
  ],
  esimerkit: {
    A2: { fi: "Minua harmittaa.", en: "I feel annoyed." },
    B1: { fi: "Häntä harmitti, ettei ehtinyt mukaan.", en: "She felt sorry that she couldn't make it." },
    B2: {
      fi: "Eniten harmittaa se, että virhe olisi ollut helppo välttää.",
      en: "What annoys me most is that the mistake would have been easy to avoid.",
    },
  },
  updatedAt: "2026-06-07",
};

export default harmittaa;
