import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 54/huutaa, lt:ll gradation, imperfect t→s.
// Present minä kiellän, hän kieltää; imperfect minä kielsin; NUT kieltänyt.
const kieltaa: Word = {
  fi: "kieltää",
  slug: "kieltää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to forbid, prohibit; to deny",
  selitys:
    "1) Estää tekemästä jotakin, antaa kielto: 'kieltää tupakointi'. 2) Sanoa, ettei jokin ole totta: 'kieltää syyllisyytensä'. Tyyppi 1 (-ää), Kotus 54/huutaa, astevaihtelu lt:ll (kiellän) ja imperfektissä t→s (kielsin). Vastakohta sallia, myöntää.",
  kuva: { emoji: "🚫", alt: "kieltää – estää tekemästä tai sanoa ettei ole totta" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää), Kotus 54/huutaa; astevaihtelu lt:ll + imperfektin t→s",
    muodot: [
      { sija: "preesens (minä)", muoto: "kiellän", merkitys: "I forbid" },
      { sija: "imperfekti (minä)", muoto: "kielsin", merkitys: "I forbade" },
      { sija: "NUT-partisiippi", muoto: "kieltänyt", merkitys: "(have) forbidden" },
    ],
    huom:
      "Tyyppi 54: preesensissä lt:ll (kiellän, kiellät), mutta imperfektissä t→s (kielsin), kuten myöntää→myönsin. NUT-partisiippi kieltänyt. 'Kieltää jotakuta tekemästä' = to forbid sb from doing. Vastakohta sallia.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kiellän" },
          { label: "sinä", form: "kiellät" },
          { label: "hän", form: "kieltää" },
          { label: "me", form: "kiellämme" },
          { label: "te", form: "kiellätte" },
          { label: "he", form: "kieltävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kiellä" },
          { label: "hän", form: "ei kiellä" },
          { label: "he", form: "eivät kiellä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kielsin" },
          { label: "sinä", form: "kielsit" },
          { label: "hän", form: "kielsi" },
          { label: "me", form: "kielsimme" },
          { label: "te", form: "kielsitte" },
          { label: "he", form: "kielsivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kieltänyt" },
          { label: "hän", form: "on kieltänyt" },
          { label: "he", form: "ovat kieltäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kiellä!" },
          { label: "te", form: "kieltäkää!" },
          { label: "kielto (sinä)", form: "älä kiellä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kielto",
      en: "ban, prohibition",
      taso: "B1",
      esim: { fi: "Puistossa on koirien sisäänpääsykielto.", en: "There is a no-dogs ban in the park." },
    },
    {
      fi: "kielletty",
      en: "forbidden, prohibited",
      taso: "A2",
      esim: { fi: "Tupakointi on kielletty.", en: "Smoking is prohibited." },
    },
    {
      fi: "kieltäytyä",
      en: "to refuse, decline",
      taso: "B1",
      esim: { fi: "Hän kieltäytyi tarjouksesta.", en: "He declined the offer." },
    },
  ],
  synonyymit: [
    { fi: "estää", en: "to prevent" },
    { fi: "torjua", en: "to reject, deny" },
  ],
  esimerkit: {
    A2: { fi: "Äiti kielsi minua menemästä ulos.", en: "Mum forbade me from going out." },
    B1: { fi: "Hän kielsi tehneensä mitään väärää.", en: "He denied having done anything wrong." },
    B2: {
      fi: "Uusi laki kieltää muovipussien myynnin kaupoissa.",
      en: "The new law prohibits the sale of plastic bags in shops.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kieltaa;
