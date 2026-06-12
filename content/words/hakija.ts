import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 12/kulkija, no gradation, stem hakija-.
// Genitive hakijan, partitive hakijaa, partitive pl hakijoita.
const hakija: Word = {
  fi: "hakija",
  slug: "hakija",
  pos: "substantiivi (tyyppi 12/kulkija)",
  posClass: "substantiivi",
  level: "B1",
  en: "applicant",
  selitys:
    "Henkilö, joka hakee paikkaa, etuutta tai lupaa: 'työpaikan hakija', 'ainoa hakija'. Tyyppi 12/kulkija, ei astevaihtelua; partitiivin monikko hakijoita. Sanasta hakea + -ja. Vrt. hakea, hakemus, työnhakija.",
  kuva: { alt: "hakija – henkilö joka hakee paikkaa, etuutta tai lupaa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 12/kulkija; ei astevaihtelua (vartalo hakija-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "hakijan", merkitys: "of the applicant" },
      { sija: "partitiivi (yks.)", muoto: "hakijaa", merkitys: "applicant (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "hakijoita", merkitys: "applicants (partitive pl.)" },
    ],
    huom:
      "Tyyppi 12/kulkija: ei astevaihtelua. Partitiivin monikko hakijoita, genetiivin monikko hakijoiden. Sanasta hakea. Työnhakija, opiskelijahakija. Vrt. hakea, hakemus.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "hakija" },
          { label: "Partitiivi", form: "hakijaa" },
          { label: "Genetiivi", form: "hakijan" },
          { label: "Inessiivi", form: "hakijassa" },
          { label: "Elatiivi", form: "hakijasta" },
          { label: "Illatiivi", form: "hakijaan" },
          { label: "Adessiivi", form: "hakijalla" },
          { label: "Ablatiivi", form: "hakijalta" },
          { label: "Allatiivi", form: "hakijalle" },
          { label: "Essiivi", form: "hakijana" },
          { label: "Translatiivi", form: "hakijaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "hakijat" },
          { label: "Partitiivi", form: "hakijoita" },
          { label: "Genetiivi", form: "hakijoiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "työnhakija",
      en: "job seeker",
      taso: "B1",
      esim: { fi: "Hän on aktiivinen työnhakija.", en: "He is an active job seeker." },
    },
    {
      fi: "hakemus",
      en: "application",
      taso: "B1",
      esim: { fi: "Hakijan on jätettävä hakemus ajoissa.", en: "The applicant must submit the application on time." },
    },
  ],
  synonyymit: [
    { fi: "anoja", en: "petitioner" },
  ],
  esimerkit: {
    A2: { fi: "Paikkaan oli yksi hakija.", en: "There was one applicant for the position." },
    B1: { fi: "Kaikki hakijat kutsuttiin haastatteluun.", en: "All applicants were invited to an interview." },
    B2: {
      fi: "Sopivin hakija valitaan kokemuksen ja koulutuksen perusteella.",
      en: "The most suitable applicant is chosen based on experience and education.",
    },
  },
  updatedAt: "2026-06-07",
};

export default hakija;
