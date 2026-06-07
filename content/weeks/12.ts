import type { Week } from "@/lib/content-types";

// Week 12 — fourth week of the Sujuvuus phase (weeks 9–13), focusing on civic and working-life
// vocabulary at B1–B2: work & career, law & justice, education & learning, dealing with
// authorities, language & expression, and social phenomena. The reading text uses only words
// that already exist in the corpus (Weeks 1–12).
const week12: Week = {
  week: 12,
  phase: "Sujuvuus",
  theme: "Työ, oikeus ja yhteiskunta",
  days: [
    {
      day: 1,
      theme: "Työ ja ura",
      wordSlugs: [
        "ura",
        "tehtävä",
        "työnantaja",
        "eläke",
        "työtön",
        "esimies",
        "hakea",
        "johto",
        "palkkio",
        "irtisanoa",
        "pätevyys",
        "ylennys",
      ],
    },
    {
      day: 2,
      theme: "Laki ja oikeus",
      wordSlugs: [
        "rikos",
        "rangaistus",
        "tuomio",
        "tuomari",
        "syyllinen",
        "syytön",
        "laillinen",
        "laiton",
        "oikeudenmukainen",
        "valittaa",
        "tuomita",
        "todistaja",
      ],
    },
    {
      day: 3,
      theme: "Koulutus ja oppiminen",
      wordSlugs: [
        "koulutus",
        "kurssi",
        "luento",
        "tentti",
        "arvosana",
        "todistus",
        "peruskoulu",
        "lukio",
        "opiskelija",
        "sanasto",
        "käännös",
        "edistyä",
      ],
    },
    {
      day: 4,
      theme: "Asiointi ja hallinto",
      wordSlugs: [
        "lupa",
        "lomake",
        "virasto",
        "virkailija",
        "asiakirja",
        "allekirjoittaa",
        "ilmoittautua",
        "peruuttaa",
        "varmistaa",
        "käsitellä",
        "maksu",
        "hakija",
      ],
    },
    {
      day: 5,
      theme: "Kieli ja ilmaisu",
      wordSlugs: [
        "ilmaisu",
        "lause",
        "puhe",
        "ääntää",
        "kielioppi",
        "väärinkäsitys",
        "selitys",
        "sisältö",
        "murre",
        "äidinkieli",
        "sujuva",
        "ymmärrys",
      ],
    },
    {
      day: 6,
      theme: "Yhteiskunnalliset ilmiöt",
      wordSlugs: [
        "väestö",
        "tasa-arvo",
        "syrjintä",
        "köyhyys",
        "varallisuus",
        "verotus",
        "eriarvoisuus",
        "maahanmuutto",
        "maahanmuuttaja",
        "työttömyys",
        "turvallisuus",
        "ilmiö",
      ],
    },
  ],
  teksti: {
    title: "Uusi alku",
    level: "B1",
    topic:
      "Maahanmuuttaja opettelee suomen kielen, hoitaa asioita virastossa, hakee työtä ja löytää paikkansa yhteiskunnassa, jossa kaikkia kohdellaan tasa-arvoisesti.",
    paragraph:
      "[[Maahanmuuttaja]] Samir saapui Suomeen täynnä toiveita. Aluksi [[kieli]] tuntui vaikealta: [[kielioppi]] oli outoa eikä hänellä ollut laajaa [[sanastoa]]. Hän [[ilmoittautui]] suomen [[kurssille]] ja alkoi [[opiskella]] ahkerasti joka päivä. " +
      "Vähitellen Samir [[edistyi]], ja hänen suomensa muuttui [[sujuvammaksi]]. Hän ymmärsi yhä enemmän [[puhetta]] ja jopa paikallista [[murretta]]. Uuden [[sanaston]] oppiminen tuntui palkitsevalta. " +
      "Pian oli aika hoitaa virallisia asioita. Samir kävi [[virastossa]], jossa ystävällinen [[virkailija]] pyysi häntä täyttämään [[lomakkeen]] ja [[allekirjoittamaan]] tärkeän [[asiakirjan]]. Lopulta hän sai [[luvan]] jäädä maahan. " +
      "Kun Samir oli valmis, hän alkoi [[hakea]] työtä. Hän lähetti monta [[hakemusta]] ja oli yksi monista [[hakijoista]]. Eräs [[työnantaja]] kutsui hänet haastatteluun ja [[palkkasi]] hänet. Näin hänen [[uransa]] Suomessa alkoi. " +
      "Työpaikalla vallitsi [[tasa-arvo]], eikä [[syrjintää]] sallittu. Samir koki, että kohtelu oli [[oikeudenmukaista]]. Hän hankki vielä lisää [[koulutusta]] ja sai uuden [[todistuksen]]. Samirista tuli ahkera [[opiskelija]], joka [[ymmärsi]], että uusi alku vaatii kärsivällisyyttä mutta myös rohkeutta.",
    translation:
      "The immigrant Samir arrived in Finland full of hopes. At first the language felt difficult: the grammar was strange and he did not have a wide vocabulary. He signed up for a Finnish course and started studying diligently every day. " +
      "Gradually Samir made progress, and his Finnish became more fluent. He understood more and more speech and even the local dialect. Learning new vocabulary felt rewarding. " +
      "Soon it was time to take care of official matters. Samir went to the (government) office, where a friendly clerk asked him to fill in a form and sign an important document. In the end he got permission to stay in the country. " +
      "When Samir was ready, he started to apply for work. He sent many applications and was one of many applicants. One employer invited him to an interview and hired him. This is how his career in Finland began. " +
      "At the workplace there was equality, and discrimination was not allowed. Samir felt that the treatment was fair. He acquired even more education and got a new certificate. Samir became a diligent student who understood that a new beginning requires patience but also courage.",
    targets: [
      "maahanmuuttaja",
      "kieli",
      "kielioppi",
      "sanasto",
      "ilmoittautua",
      "kurssi",
      "opiskella",
      "edistyä",
      "sujuva",
      "puhe",
      "murre",
      "virasto",
      "virkailija",
      "lomake",
      "allekirjoittaa",
      "asiakirja",
      "lupa",
      "hakea",
      "hakemus",
      "hakija",
      "työnantaja",
      "palkata",
      "ura",
      "tasa-arvo",
      "syrjintä",
      "oikeudenmukainen",
      "koulutus",
      "todistus",
      "opiskelija",
      "ymmärtää",
    ],
  },
};

export default week12;
