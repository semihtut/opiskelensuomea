import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation. Genitive
// vastauksen, partitive vastausta, illative vastaukseen, partitive pl vastauksia.
const vastaus: Word = {
  fi: "vastaus",
  slug: "vastaus",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "A2",
  en: "answer, reply, response",
  selitys:
    "Se, mitä sanotaan kysymykseen tai viestiin. Tyyppi 39, ei astevaihtelua. Juuri verbistä vastata.",
  kuva: { alt: "vastaus – puhekupla vastauksena" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "vastauksen", merkitys: "of the answer" },
      { sija: "partitiivi (yks.)", muoto: "vastausta", merkitys: "answer (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "vastauksia", merkitys: "answers (partitive pl.)" },
    ],
    huom:
      "Vartalo vastaukse- taivutuksessa; partitiivi vastausta. 'Saada vastaus' = get an answer; 'antaa vastaus' = give an answer.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "vastaus" },
          { label: "Partitiivi", form: "vastausta" },
          { label: "Genetiivi", form: "vastauksen" },
          { label: "Inessiivi", form: "vastauksessa" },
          { label: "Elatiivi", form: "vastauksesta" },
          { label: "Illatiivi", form: "vastaukseen" },
          { label: "Adessiivi", form: "vastauksella" },
          { label: "Ablatiivi", form: "vastaukselta" },
          { label: "Allatiivi", form: "vastaukselle" },
          { label: "Essiivi", form: "vastauksena" },
          { label: "Translatiivi", form: "vastaukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vastaukset" },
          { label: "Partitiivi", form: "vastauksia" },
          { label: "Genetiivi", form: "vastausten" },
          { label: "Inessiivi", form: "vastauksissa" },
          { label: "Illatiivi", form: "vastauksiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vastata",
      en: "to answer, reply",
      taso: "A2",
      esim: { fi: "Vastaa kysymykseen, kiitos.", en: "Answer the question, please." },
    },
    {
      fi: "vastaaja",
      en: "respondent; answering machine",
      taso: "B2",
      esim: { fi: "Jätä viesti vastaajaan.", en: "Leave a message on the answering machine." },
    },
    {
      fi: "vastuu",
      en: "responsibility (related root)",
      taso: "B1",
      esim: { fi: "Hän kantaa vastuun virheestä.", en: "He takes responsibility for the mistake." },
    },
  ],
  synonyymit: [
    { fi: "vastine", en: "counterpart, response" },
    { fi: "ratkaisu", en: "solution (to a problem)" },
  ],
  esimerkit: {
    A2: { fi: "En tiedä vastausta.", en: "I don't know the answer." },
    B1: { fi: "Sain vastauksen sähköpostiini nopeasti.", en: "I got a reply to my email quickly." },
    B2: {
      fi: "Hänen vastauksensa yllätti meidät kaikki.",
      en: "Her answer surprised us all.",
    },
  },
  updatedAt: "2026-06-04",
};

export default vastaus;
