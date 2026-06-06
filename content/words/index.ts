import type { Word } from "@/lib/content-types";

import talo from "./talo";
import olla from "./olla";
import tehda from "./tehdä";
import voida from "./voida";
import saada from "./saada";
import aika from "./aika";
import paiva from "./päivä";
import henkilo from "./henkilö";
import hyva from "./hyvä";
import huono from "./huono";
import nyt from "./nyt";
import ja from "./ja";
import heiMitaKuuluu from "./hei-mitä-kuuluu";
// Week 1 · Day 2 — Ihmiset ja perhe
import perhe from "./perhe";
import aiti from "./äiti";
import isa from "./isä";
import lapsi from "./lapsi";
import nainen from "./nainen";
import mies from "./mies";
import ystava from "./ystävä";
import kaveri from "./kaveri";
import nimi from "./nimi";
import vanha from "./vanha";
import nuori from "./nuori";
import asua from "./asua";
// Week 1 · Day 3 — Koti ja arki
import koti from "./koti";
import huone from "./huone";
import ovi from "./ovi";
import ikkuna from "./ikkuna";
import poyta from "./pöytä";
import sanky from "./sänky";
import keittio from "./keittiö";
import avain from "./avain";
import nukkua from "./nukkua";
import herata from "./herätä";
import siivota from "./siivota";
import arki from "./arki";
// Week 1 · Day 4 — Ruoka ja juoma
import ruoka from "./ruoka";
import syoda from "./syödä";
import juoda from "./juoda";
import leipa from "./leipä";
import maito from "./maito";
import vesi from "./vesi";
import kahvi from "./kahvi";
import omena from "./omena";
import liha from "./liha";
import kala from "./kala";
import juusto from "./juusto";
import peruna from "./peruna";
// Week 1 · Day 5 — Aika ja viikonpäivät
import viikko from "./viikko";
import kuukausi from "./kuukausi";
import vuosi from "./vuosi";
import tunti from "./tunti";
import aamu from "./aamu";
import ilta from "./ilta";
import yo from "./yö";
import viikonloppu from "./viikonloppu";
import maanantai from "./maanantai";
import lauantai from "./lauantai";
import tanaan from "./tänään";
import huomenna from "./huomenna";
// Week 1 · Day 6 — Asiointi ja kohteliaisuus
import kauppa from "./kauppa";
import raha from "./raha";
import hinta from "./hinta";
import ostaa from "./ostaa";
import maksaa from "./maksaa";
import kysya from "./kysyä";
import auttaa from "./auttaa";
import tarvita from "./tarvita";
import kallis from "./kallis";
import kiitos from "./kiitos";
import anteeksi from "./anteeksi";
import oleHyva from "./ole-hyvä";
// Week 2 · Day 1 — Liikkuminen ja paikat
import menna from "./mennä";
import tulla from "./tulla";
import kavella from "./kävellä";
import ajaa from "./ajaa";
import lahtea from "./lähteä";
import kaupunki from "./kaupunki";
import katu from "./katu";
import tie from "./tie";
import auto from "./auto";
import juna from "./juna";
import asema from "./asema";
import matka from "./matka";
// Week 2 · Day 2 — Työ ja opiskelu
import tyo from "./työ";
import opiskella from "./opiskella";
import oppia from "./oppia";
import lukea from "./lukea";
import kirjoittaa from "./kirjoittaa";
import koulu from "./koulu";
import opettaja from "./opettaja";
import oppilas from "./oppilas";
import kirja from "./kirja";
import kysymys from "./kysymys";
import vastaus from "./vastaus";
import tietaa from "./tietää";
// Week 2 · Day 3 — Keho ja terveys
import paa from "./pää";
import kasi from "./käsi";
import silma from "./silmä";
import jalka from "./jalka";
import suu from "./suu";
import korva from "./korva";
import sydan from "./sydän";
import terve from "./terve";
import sairas from "./sairas";
import kipu from "./kipu";
import laakari from "./lääkäri";
import terveys from "./terveys";
// Week 2 · Day 4 — Vaatteet ja värit
import vaate from "./vaate";
import paita from "./paita";
import housut from "./housut";
import kenka from "./kenkä";
import takki from "./takki";
import vari from "./väri";
import valkoinen from "./valkoinen";
import musta from "./musta";
import punainen from "./punainen";
import sininen from "./sininen";
import keltainen from "./keltainen";
import vihrea from "./vihreä";
// Week 2 · Day 5 — Sää ja luonto
import saa from "./sää";
import ilma from "./ilma";
import sade from "./sade";
import lumi from "./lumi";
import aurinko from "./aurinko";
import tuuli from "./tuuli";
import taivas from "./taivas";
import metsa from "./metsä";
import jarvi from "./järvi";
import meri from "./meri";
import puu from "./puu";
import kylma from "./kylmä";
// Week 2 · Day 6 — Tunteet ja kuvailu
import iloinen from "./iloinen";
import surullinen from "./surullinen";
import vasynyt from "./väsynyt";
import vihainen from "./vihainen";
import iso from "./iso";
import pieni from "./pieni";
import kaunis from "./kaunis";
import ruma from "./ruma";
import uusi from "./uusi";
import helppo from "./helppo";
import vaikea from "./vaikea";
import tarkea from "./tärkeä";
// Week 3 · Day 1 — Pronominit ja kysymyssanat
import mina from "./minä";
import sina from "./sinä";
import han from "./hän";
import me from "./me";
import te from "./te";
import he from "./he";
import tama from "./tämä";
import tuo from "./tuo";
import se from "./se";
import kuka from "./kuka";
import mika from "./mikä";
import milloin from "./milloin";
// Week 3 · Day 2 — Yleiset verbit I: havainnot ja viestintä
import sanoa from "./sanoa";
import puhua from "./puhua";
import kuulla from "./kuulla";
import kuunnella from "./kuunnella";
import nahda from "./nähdä";
import katsoa from "./katsoa";
import antaa from "./antaa";
import ottaa from "./ottaa";
import pitaa from "./pitää";
import soittaa from "./soittaa";
import nayttaa from "./näyttää";
import kertoa from "./kertoa";
// Week 3 · Day 3 — Yleiset verbit II: toiminta ja muutos
import alkaa from "./alkaa";
import loppua from "./loppua";
import jaada from "./jäädä";
import kayda from "./käydä";
import paasta from "./päästä";
import loytaa from "./löytää";
import etsia from "./etsiä";
import muistaa from "./muistaa";
import unohtaa from "./unohtaa";
import ymmartaa from "./ymmärtää";
import ajatella from "./ajatella";
import haluta from "./haluta";
// Week 3 · Day 4 — Kaupunki ja palvelut
import pankki from "./pankki";
import posti from "./posti";
import ravintola from "./ravintola";
import hotelli from "./hotelli";
import kirjasto from "./kirjasto";
import museo from "./museo";
import apteekki from "./apteekki";
import tori from "./tori";
import kahvila from "./kahvila";
import puisto from "./puisto";
import kirkko from "./kirkko";
import sairaala from "./sairaala";
// Week 3 · Day 5 — Koti ja esineet
import tuoli from "./tuoli";
import peili from "./peili";
import lamppu from "./lamppu";
import seina from "./seinä";
import lattia from "./lattia";
import katto from "./katto";
import kaappi from "./kaappi";
import sohva from "./sohva";
import televisio from "./televisio";
import puhelin from "./puhelin";
import tietokone from "./tietokone";
import kello from "./kello";
// Week 3 · Day 6 — Koko ja määrä
import pitka from "./pitkä";
import lyhyt from "./lyhyt";
import korkea from "./korkea";
import matala from "./matala";
import nopea from "./nopea";
import hidas from "./hidas";
import raskas from "./raskas";
import kevyt from "./kevyt";
import paljon from "./paljon";
import vahan from "./vähän";
import kaikki from "./kaikki";
import moni from "./moni";
// Week 4 · Day 1 — Yleiset verbit III: arjen toiminnot
import istua from "./istua";
import seisoa from "./seisoa";
import nousta from "./nousta";
import avata from "./avata";
import sulkea from "./sulkea";
import laittaa from "./laittaa";
import pesta from "./pestä";
import odottaa from "./odottaa";
import yrittaa from "./yrittää";
import osata from "./osata";
import korjata from "./korjata";
import kayttaa from "./käyttää";
// Week 4 · Day 2 — Elämä ja ihmissuhteet
import elaa from "./elää";
import kuolla from "./kuolla";
import syntya from "./syntyä";
import kasvaa from "./kasvaa";
import rakastaa from "./rakastaa";
import tavata from "./tavata";
import tuntea from "./tuntea";
import muuttaa from "./muuttaa";
import naapuri from "./naapuri";
import suku from "./suku";
import mukava from "./mukava";
import yksin from "./yksin";
// Week 4 · Day 3 — Sijainti ja suunta
import edessa from "./edessä";
import takana from "./takana";
import vieressa from "./vieressä";
import alla from "./alla";
import paalla from "./päällä";
import valissa from "./välissä";
import lahella from "./lähellä";
import kaukana from "./kaukana";
import oikealla from "./oikealla";
import vasemmalla from "./vasemmalla";
import ylos from "./ylös";
import alas from "./alas";
// Week 4 · Day 4 — Konjunktiot ja sidesanat
import mutta from "./mutta";
import koska from "./koska";
import etta from "./että";
import jos from "./jos";
import kun from "./kun";
import vaikka from "./vaikka";
import tai from "./tai";
import vai from "./vai";
import seka from "./sekä";
import joten from "./joten";
import kuitenkin from "./kuitenkin";
import siksi from "./siksi";
// Week 4 · Day 5 — Aika ja toistuvuus
import aina from "./aina";
import usein from "./usein";
import joskus from "./joskus";
import harvoin from "./harvoin";
import jo from "./jo";
import viela from "./vielä";
import heti from "./heti";
import pian from "./pian";
import taas from "./taas";
import yleensa from "./yleensä";
import ennen from "./ennen";
import sitten from "./sitten";
// Week 4 · Day 6 — Määrä ja aste
import hyvin from "./hyvin";
import todella from "./todella";
import melko from "./melko";
import liian from "./liian";
import erittain from "./erittäin";
import vain from "./vain";
import myos from "./myös";
import ehka from "./ehkä";
import varmasti from "./varmasti";
import tietysti from "./tietysti";
import juuri from "./juuri";
import vasta from "./vasta";
// Week 5 · Day 1 — Mieli ja viestintä
import uskoa from "./uskoa";
import toivoa from "./toivoa";
import luulla from "./luulla";
import tarkoittaa from "./tarkoittaa";
import paattaa from "./päättää";
import huomata from "./huomata";
import selittaa from "./selittää";
import pyytaa from "./pyytää";
import vastata from "./vastata";
import kiittaa from "./kiittää";
import esittaa from "./esittää";
import ehdottaa from "./ehdottaa";
// Week 5 · Day 2 — Käsittely ja liike
import nostaa from "./nostaa";
import laskea from "./laskea";
import vetaa from "./vetää";
import tyontaa from "./työntää";
import heittaa from "./heittää";
import kantaa from "./kantaa";
import panna from "./panna";
import siirtaa from "./siirtää";
import kaantaa from "./kääntää";
import pudota from "./pudota";
import tarttua from "./tarttua";
import kaataa from "./kaataa";
// Week 5 · Day 3 — Tunteet ja luonne
import onni from "./onni";
import ilo from "./ilo";
import suru from "./suru";
import pelko from "./pelko";
import tunne from "./tunne";
import rakkaus from "./rakkaus";
import rohkea from "./rohkea";
import ystavallinen from "./ystävällinen";
import kiltti from "./kiltti";
import rehellinen from "./rehellinen";
import ahkera from "./ahkera";
import laiska from "./laiska";
// Week 5 · Day 4 — Abstraktit käsitteet
import asia from "./asia";
import syy from "./syy";
import tapa from "./tapa";
import ongelma from "./ongelma";
import esimerkki from "./esimerkki";
import ero from "./ero";
import keino from "./keino";
import tilanne from "./tilanne";
import mahdollisuus from "./mahdollisuus";
import vaikutus from "./vaikutus";
import merkitys from "./merkitys";
import kokemus from "./kokemus";
// Week 5 · Day 5 — Muutos ja kehitys
import muuttua from "./muuttua";
import kehittaa from "./kehittää";
import lisata from "./lisätä";
import vahentaa from "./vähentää";
import kasvattaa from "./kasvattaa";
import riittaa from "./riittää";
import jatkaa from "./jatkaa";
import jakaa from "./jakaa";
import kerata from "./kerätä";
import yhdistaa from "./yhdistää";
import parantaa from "./parantaa";
import saastaa from "./säästää";
// Week 5 · Day 6 — Työ ja talous
import palkka from "./palkka";
import asiakas from "./asiakas";
import yritys from "./yritys";
import kokous from "./kokous";
import ala from "./ala";
import palvelu from "./palvelu";
import tuote from "./tuote";
import johtaja from "./johtaja";
import tyontekija from "./työntekijä";
import sopimus from "./sopimus";
import talous from "./talous";
import lasku from "./lasku";
// Week 6 · Day 1 — Viestintä ja kieli
import sana from "./sana";
import kieli from "./kieli";
import uutinen from "./uutinen";
import lehti from "./lehti";
import viesti from "./viesti";
import aani from "./ääni";
import keskustella from "./keskustella";
import mainita from "./mainita";
import ilmoittaa from "./ilmoittaa";
import kuvata from "./kuvata";
import kutsua from "./kutsua";
import neuvoa from "./neuvoa";
// Week 6 · Day 2 — Yhteiskunta ja valta
import valtio from "./valtio";
import hallitus from "./hallitus";
import laki from "./laki";
import yhteiskunta from "./yhteiskunta";
import kansa from "./kansa";
import raja from "./raja";
import valta from "./valta";
import oikeus from "./oikeus";
import paatos from "./päätös";
import aanestaa from "./äänestää";
import vaikuttaa from "./vaikuttaa";
import jarjestaa from "./järjestää";
// Week 6 · Day 3 — Luonto ja ympäristö
import luonto from "./luonto";
import maailma from "./maailma";
import elain from "./eläin";
import kasvi from "./kasvi";
import ymparisto from "./ympäristö";
import ranta from "./ranta";
import saari from "./saari";
import pilvi from "./pilvi";
import tahti from "./tähti";
import kukka from "./kukka";
import vuori from "./vuori";
import ilmasto from "./ilmasto";
// Week 6 · Day 4 — Keho ja terveys
import keho from "./keho";
import veri from "./veri";
import hammas from "./hammas";
import selka from "./selkä";
import sormi from "./sormi";
import voima from "./voima";
import laake from "./lääke";
import sairaus from "./sairaus";
import vatsa from "./vatsa";
import hius from "./hius";
import terveellinen from "./terveellinen";
import parantua from "./parantua";
// Week 6 · Day 5 — Liike ja matkustus
import matkustaa from "./matkustaa";
import lentaa from "./lentää";
import laiva from "./laiva";
import pyora from "./pyörä";
import lippu from "./lippu";
import reitti from "./reitti";
import nopeus from "./nopeus";
import saapua from "./saapua";
import kulkea from "./kulkea";
import pysahtya from "./pysähtyä";
import jattaa from "./jättää";
import kuljettaa from "./kuljettaa";
// Week 6 · Day 6 — Vapaa-aika ja kulttuuri
import harrastus from "./harrastus";
import peli from "./peli";
import elokuva from "./elokuva";
import musiikki from "./musiikki";
import laulu from "./laulu";
import kuva from "./kuva";
import taide from "./taide";
import pelata from "./pelata";
import voittaa from "./voittaa";
import juhla from "./juhla";
import urheilu from "./urheilu";
import tanssia from "./tanssia";
// Week 7 · Day 1 — Ammatti ja työelämä
import ammatti from "./ammatti";
import tyopaikka from "./työpaikka";
import pomo from "./pomo";
import kollega from "./kollega";
import taito from "./taito";
import hakemus from "./hakemus";
import haastattelu from "./haastattelu";
import hoitaa from "./hoitaa";
import menestya from "./menestyä";
import sopia from "./sopia";
import johtaa from "./johtaa";
import palkata from "./palkata";
// Week 7 · Day 2 — Raha ja talous
import halpa from "./halpa";
import ostos from "./ostos";
import tili from "./tili";
import kortti from "./kortti";
import kateinen from "./käteinen";
import velka from "./velka";
import tulo from "./tulo";
import meno from "./meno";
import myyda from "./myydä";
import ansaita from "./ansaita";
import lainata from "./lainata";
import sijoittaa from "./sijoittaa";
// Week 7 · Day 3 — Opiskelu ja tieto
import tieto from "./tieto";
import yliopisto from "./yliopisto";
import tutkinto from "./tutkinto";
import koe from "./koe";
import laksy from "./läksy";
import sivu from "./sivu";
import numero from "./numero";
import opettaa from "./opettaa";
import tutkia from "./tutkia";
import harjoitella from "./harjoitella";
import kokeilla from "./kokeilla";
import selvittaa from "./selvittää";
// Week 7 · Day 4 — Mieli ja ajattelu
import mieli from "./mieli";
import ajatus from "./ajatus";
import idea from "./idea";
import muisti from "./muisti";
import unelma from "./unelma";
import uni from "./uni";
import jarki from "./järki";
import aivot from "./aivot";
import epailla from "./epäillä";
import keksia from "./keksiä";
import pohtia from "./pohtia";
import kuvitella from "./kuvitella";
// Week 7 · Day 5 — Tunteet ja luonne
import pelataToFear from "./pelätä";
import nauraa from "./nauraa";
import itkea from "./itkeä";
import hymyilla from "./hymyillä";
import tylsa from "./tylsä";
import ujo from "./ujo";
import ylpea from "./ylpeä";
import rauhallinen from "./rauhallinen";
import karsivallinen from "./kärsivällinen";
import hermostua from "./hermostua";
import pettya from "./pettyä";
import nauttia from "./nauttia";
// Week 7 · Day 6 — Aika ja muutos
import eilen from "./eilen";
import hetki from "./hetki";
import menneisyys from "./menneisyys";
import tulevaisuus from "./tulevaisuus";
import kausi from "./kausi";
import muutos from "./muutos";
import kehitys from "./kehitys";
import jatkua from "./jatkua";
import tapahtua from "./tapahtua";
import kestaa from "./kestää";
import viimeinen from "./viimeinen";
import seuraava from "./seuraava";
// Week 8 · Day 1 — Kaupunki ja liikenne
import liikenne from "./liikenne";
import silta from "./silta";
import risteys from "./risteys";
import pysakki from "./pysäkki";
import lentokentta from "./lentokenttä";
import asukas from "./asukas";
import keskusta from "./keskusta";
import alue from "./alue";
import kuljettaja from "./kuljettaja";
import matkustaja from "./matkustaja";
import kartta from "./kartta";
import ylittaa from "./ylittää";
// Week 8 · Day 2 — Koti ja asuminen
import asunto from "./asunto";
import kerros from "./kerros";
import piha from "./piha";
import matto from "./matto";
import hylly from "./hylly";
import uuni from "./uuni";
import vuokra from "./vuokra";
import vessa from "./vessa";
import parveke from "./parveke";
import jaakaappi from "./jääkaappi";
import sisustus from "./sisustus";
import remontti from "./remontti";

/**
 * Registry of all word entries. Order is the canonical learning sequence used
 * for prev/next navigation (Week 1 Day 1 order; talo is the demo word, last).
 * Add a word: create content/words/<slug>.ts and import it here.
 */
export const words: Word[] = [
  olla,
  tehda,
  voida,
  saada,
  aika,
  paiva,
  henkilo,
  hyva,
  huono,
  nyt,
  ja,
  heiMitaKuuluu,
  // Day 2 — Ihmiset ja perhe
  perhe,
  aiti,
  isa,
  lapsi,
  nainen,
  mies,
  ystava,
  kaveri,
  nimi,
  vanha,
  nuori,
  asua,
  // Day 3 — Koti ja arki
  koti,
  huone,
  ovi,
  ikkuna,
  poyta,
  sanky,
  keittio,
  avain,
  nukkua,
  herata,
  siivota,
  arki,
  // Day 4 — Ruoka ja juoma
  ruoka,
  syoda,
  juoda,
  leipa,
  maito,
  vesi,
  kahvi,
  omena,
  liha,
  kala,
  juusto,
  peruna,
  // Day 5 — Aika ja viikonpäivät
  viikko,
  kuukausi,
  vuosi,
  tunti,
  aamu,
  ilta,
  yo,
  viikonloppu,
  maanantai,
  lauantai,
  tanaan,
  huomenna,
  // Day 6 — Asiointi ja kohteliaisuus
  kauppa,
  raha,
  hinta,
  ostaa,
  maksaa,
  kysya,
  auttaa,
  tarvita,
  kallis,
  kiitos,
  anteeksi,
  oleHyva,
  // Week 2 · Day 1 — Liikkuminen ja paikat
  menna,
  tulla,
  kavella,
  ajaa,
  lahtea,
  kaupunki,
  katu,
  tie,
  auto,
  juna,
  asema,
  matka,
  // Week 2 · Day 2 — Työ ja opiskelu
  tyo,
  opiskella,
  oppia,
  lukea,
  kirjoittaa,
  koulu,
  opettaja,
  oppilas,
  kirja,
  kysymys,
  vastaus,
  tietaa,
  // Week 2 · Day 3 — Keho ja terveys
  paa,
  kasi,
  silma,
  jalka,
  suu,
  korva,
  sydan,
  terve,
  sairas,
  kipu,
  laakari,
  terveys,
  // Week 2 · Day 4 — Vaatteet ja värit
  vaate,
  paita,
  housut,
  kenka,
  takki,
  vari,
  valkoinen,
  musta,
  punainen,
  sininen,
  keltainen,
  vihrea,
  // Week 2 · Day 5 — Sää ja luonto
  saa,
  ilma,
  sade,
  lumi,
  aurinko,
  tuuli,
  taivas,
  metsa,
  jarvi,
  meri,
  puu,
  kylma,
  // Week 2 · Day 6 — Tunteet ja kuvailu
  iloinen,
  surullinen,
  vasynyt,
  vihainen,
  iso,
  pieni,
  kaunis,
  ruma,
  uusi,
  helppo,
  vaikea,
  tarkea,
  // Week 3 · Day 1 — Pronominit ja kysymyssanat
  mina,
  sina,
  han,
  me,
  te,
  he,
  tama,
  tuo,
  se,
  kuka,
  mika,
  milloin,
  // Week 3 · Day 2 — Yleiset verbit I: havainnot ja viestintä
  sanoa,
  puhua,
  kuulla,
  kuunnella,
  nahda,
  katsoa,
  antaa,
  ottaa,
  pitaa,
  soittaa,
  nayttaa,
  kertoa,
  // Week 3 · Day 3 — Yleiset verbit II: toiminta ja muutos
  alkaa,
  loppua,
  jaada,
  kayda,
  paasta,
  loytaa,
  etsia,
  muistaa,
  unohtaa,
  ymmartaa,
  ajatella,
  haluta,
  // Week 3 · Day 4 — Kaupunki ja palvelut
  pankki,
  posti,
  ravintola,
  hotelli,
  kirjasto,
  museo,
  apteekki,
  tori,
  kahvila,
  puisto,
  kirkko,
  sairaala,
  // Week 3 · Day 5 — Koti ja esineet
  tuoli,
  peili,
  lamppu,
  seina,
  lattia,
  katto,
  kaappi,
  sohva,
  televisio,
  puhelin,
  tietokone,
  kello,
  // Week 3 · Day 6 — Koko ja määrä
  pitka,
  lyhyt,
  korkea,
  matala,
  nopea,
  hidas,
  raskas,
  kevyt,
  paljon,
  vahan,
  kaikki,
  moni,
  // Week 4 · Day 1 — Yleiset verbit III: arjen toiminnot
  istua,
  seisoa,
  nousta,
  avata,
  sulkea,
  laittaa,
  pesta,
  odottaa,
  yrittaa,
  osata,
  korjata,
  kayttaa,
  // Week 4 · Day 2 — Elämä ja ihmissuhteet
  elaa,
  kuolla,
  syntya,
  kasvaa,
  rakastaa,
  tavata,
  tuntea,
  muuttaa,
  naapuri,
  suku,
  mukava,
  yksin,
  // Week 4 · Day 3 — Sijainti ja suunta
  edessa,
  takana,
  vieressa,
  alla,
  paalla,
  valissa,
  lahella,
  kaukana,
  oikealla,
  vasemmalla,
  ylos,
  alas,
  // Week 4 · Day 4 — Konjunktiot ja sidesanat
  mutta,
  koska,
  etta,
  jos,
  kun,
  vaikka,
  tai,
  vai,
  seka,
  joten,
  kuitenkin,
  siksi,
  // Week 4 · Day 5 — Aika ja toistuvuus
  aina,
  usein,
  joskus,
  harvoin,
  jo,
  viela,
  heti,
  pian,
  taas,
  yleensa,
  ennen,
  sitten,
  // Week 4 · Day 6 — Määrä ja aste
  hyvin,
  todella,
  melko,
  liian,
  erittain,
  vain,
  myos,
  ehka,
  varmasti,
  tietysti,
  juuri,
  vasta,
  // Week 5 · Day 1 — Mieli ja viestintä
  uskoa,
  toivoa,
  luulla,
  tarkoittaa,
  paattaa,
  huomata,
  selittaa,
  pyytaa,
  vastata,
  kiittaa,
  esittaa,
  ehdottaa,
  // Week 5 · Day 2 — Käsittely ja liike
  nostaa,
  laskea,
  vetaa,
  tyontaa,
  heittaa,
  kantaa,
  panna,
  siirtaa,
  kaantaa,
  pudota,
  tarttua,
  kaataa,
  // Week 5 · Day 3 — Tunteet ja luonne
  onni,
  ilo,
  suru,
  pelko,
  tunne,
  rakkaus,
  rohkea,
  ystavallinen,
  kiltti,
  rehellinen,
  ahkera,
  laiska,
  // Week 5 · Day 4 — Abstraktit käsitteet
  asia,
  syy,
  tapa,
  ongelma,
  esimerkki,
  ero,
  keino,
  tilanne,
  mahdollisuus,
  vaikutus,
  merkitys,
  kokemus,
  // Week 5 · Day 5 — Muutos ja kehitys
  muuttua,
  kehittaa,
  lisata,
  vahentaa,
  kasvattaa,
  riittaa,
  jatkaa,
  jakaa,
  kerata,
  yhdistaa,
  parantaa,
  saastaa,
  // Week 5 · Day 6 — Työ ja talous
  palkka,
  asiakas,
  yritys,
  kokous,
  ala,
  palvelu,
  tuote,
  johtaja,
  tyontekija,
  sopimus,
  talous,
  lasku,
  // Week 6 · Day 1 — Viestintä ja kieli
  sana,
  kieli,
  uutinen,
  lehti,
  viesti,
  aani,
  keskustella,
  mainita,
  ilmoittaa,
  kuvata,
  kutsua,
  neuvoa,
  // Week 6 · Day 2 — Yhteiskunta ja valta
  valtio,
  hallitus,
  laki,
  yhteiskunta,
  kansa,
  raja,
  valta,
  oikeus,
  paatos,
  aanestaa,
  vaikuttaa,
  jarjestaa,
  // Week 6 · Day 3 — Luonto ja ympäristö
  luonto,
  maailma,
  elain,
  kasvi,
  ymparisto,
  ranta,
  saari,
  pilvi,
  tahti,
  kukka,
  vuori,
  ilmasto,
  // Week 6 · Day 4 — Keho ja terveys
  keho,
  veri,
  hammas,
  selka,
  sormi,
  voima,
  laake,
  sairaus,
  vatsa,
  hius,
  terveellinen,
  parantua,
  // Week 6 · Day 5 — Liike ja matkustus
  matkustaa,
  lentaa,
  laiva,
  pyora,
  lippu,
  reitti,
  nopeus,
  saapua,
  kulkea,
  pysahtya,
  jattaa,
  kuljettaa,
  // Week 6 · Day 6 — Vapaa-aika ja kulttuuri
  harrastus,
  peli,
  elokuva,
  musiikki,
  laulu,
  kuva,
  taide,
  pelata,
  voittaa,
  juhla,
  urheilu,
  tanssia,
  // Week 7 · Day 1 — Ammatti ja työelämä
  ammatti,
  tyopaikka,
  pomo,
  kollega,
  taito,
  hakemus,
  haastattelu,
  hoitaa,
  menestya,
  sopia,
  johtaa,
  palkata,
  // Week 7 · Day 2 — Raha ja talous
  halpa,
  ostos,
  tili,
  kortti,
  kateinen,
  velka,
  tulo,
  meno,
  myyda,
  ansaita,
  lainata,
  sijoittaa,
  // Week 7 · Day 3 — Opiskelu ja tieto
  tieto,
  yliopisto,
  tutkinto,
  koe,
  laksy,
  sivu,
  numero,
  opettaa,
  tutkia,
  harjoitella,
  kokeilla,
  selvittaa,
  // Week 7 · Day 4 — Mieli ja ajattelu
  mieli,
  ajatus,
  idea,
  muisti,
  unelma,
  uni,
  jarki,
  aivot,
  epailla,
  keksia,
  pohtia,
  kuvitella,
  // Week 7 · Day 5 — Tunteet ja luonne
  pelataToFear,
  nauraa,
  itkea,
  hymyilla,
  tylsa,
  ujo,
  ylpea,
  rauhallinen,
  karsivallinen,
  hermostua,
  pettya,
  nauttia,
  // Week 7 · Day 6 — Aika ja muutos
  eilen,
  hetki,
  menneisyys,
  tulevaisuus,
  kausi,
  muutos,
  kehitys,
  jatkua,
  tapahtua,
  kestaa,
  viimeinen,
  seuraava,
  // Week 8 · Day 1 — Kaupunki ja liikenne
  liikenne,
  silta,
  risteys,
  pysakki,
  lentokentta,
  asukas,
  keskusta,
  alue,
  kuljettaja,
  matkustaja,
  kartta,
  ylittaa,
  // Week 8 · Day 2 — Koti ja asuminen
  asunto,
  kerros,
  piha,
  matto,
  hylly,
  uuni,
  vuokra,
  vessa,
  parveke,
  jaakaappi,
  sisustus,
  remontti,
  talo,
];
