<template>
  <div class="eventindex">
    <Header v-bind:menu="'menu'"/>
    <Headline v-bind:title="title"/>
    <div class="head-container">
      <div class="sub-text">{{ $t("eventindex.para1") }}</div>
      <div class="text">{{ $t("eventindex.tba") }}</div>

    </div>

<!---

    <div class="eventindex-container">
      <table v-if="ready">
        <tr>
          Breyttir Headurum hér:
              Ef þú villt taka út dálka þá tekuru út þá sem eru samsvarandi, ss date væri nr 1, stage nr. 3 etc

          <th>Dagur</th>
          <th>Klukkan</th>
          <th>Hvað</th>
          <th>Hvar</th>
        </tr>
        <template v-for="event in eventlist">
          <tr
              v-bind:key="event.attributes.id"
              @click="toggle(event.attributes.id)"
              :class="{ opened: opened.includes(event.attributes.id) }"
          >
            <td class="border-bottom normal">{{ event.attributes.date }}</td>
            <td class="border-bottom normal">{{ event.attributes.time }}</td>
            <td class="border-bottom name">{{ event.attributes.name }}</td>
            <td class="border-bottom normal">{{ event.attributes.stage }}</td>
          </tr>
          <tr
              class="border"
              v-if="opened.includes(event.attributes.id)"
              v-bind:key="event.attributes.id2"
          >
            <td class="border-top" colspan="2">
              {{ event.attributes.descr1 }} <br/>
              <br/>
              {{ event.attributes.descr2 }} <br/>
              <br/>
              {{ event.attributes.descr3 }}
            </td>


            <td class="border-top" colspan="2">

              <img :src="event.attributes.img"/>

               Uncomment ef þú villt social media hlekki! Annars, taktu þetta út
              <div class="grid-container">
                <div v-if="event.attributes.soundcloud">
                  <a class="nav-link" :href="event.attributes.soundcloud" target="_blank">Soundcloud</a>
                </div>
                <div v-if="event.attributes.spotify">
                  <a class="nav-link" :href="event.attributes.spotify" target="_blank">Spotify</a>
                </div>
                <div v-if="event.attributes.instagram">
                  <a class="nav-link" :href="event.attributes.instagram" target="_blank">Instagram</a>
                </div>
                <div v-if="event.attributes.youtube">
                  <a class="nav-link" :href="event.attributes.youtube" target="_blank">Youtube</a>
                </div>
                <div v-if="event.attributes.facebook">
                  <a class="nav-link" :href="event.attributes.facebook" target="_blank">Facebook</a>
                </div>
                <div v-if="event.attributes.website">
                  <a class="nav-link" :href="event.attributes.website" target="_blank">Website</a>
                </div>
              </div>
            </td>


          </tr>
        </template>
      </table>
    </div>-->
    <br/>
    <div class="footer-container">
      <!--<div class="text">
        {{$t("workshops.weekinfo")}}
      </div>
      <div class="text">
        {{$t("workshops.fridayinfo")}}
      </div>-->
    </div>
    <div class="img-container">
      <img class="img-child" src="../../assets/tumblr/15.jpg"/>
    </div>

    <Footer/>
  </div>
</template>

<script>
//import marked from 'marked'
import Header from "../shared/Header";
import Headline from "../shared/Headline";
import Footer from "../shared/Footer";

//import md from 'markdown-it';
export default {
  name: "Eventindex",
  components: {
    Header,
    Headline,
    Footer,
  },
  data() {
    let resolve
    if(this.$i18n.locale == 'isl'){
      resolve = require.context("../../../content/events/isl", true, /\.md$/);
    }
    else resolve = require.context("../../../content/events/en", true, /\.md$/);
     
    const imports = resolve.keys().map(key => {
      // const [, name] = key.match(/\/(.+)\.md$/);
      // console.log(name)
     
      return resolve(key);
    })
    return {
      prefix: "eventlist",
      eventlist: imports,
      //HENDA 
      title: "title.eventindex",
      opened: [],

      //When ready: breyttu ready: false í ready: true,
      ready: true,

      //EVENT uppl til að breyta:
      //Ekki breyta id og id2
      events: [
        {
          id: 1,
          id2: "1b",
          date: "10.–16. 07.",
          name: "Ertu búið að borða? Nikaon na ka? Did you eat already? – Lucky 3",
          stage: "Herðubreið Gallery",
          time: "Ongoing",
          descr1:
              "Margt hefur breyst síðan þið sáuð okkur síðast. Í þetta skipti munu 2/3 af listamannakollektífinu með sannri filipseyskri gestrisni bjóða ykkur til veislu, þar sem matur og okkar uppáhalds afþreying verður til staðar, sem er karókí. So sige na! Drífum okkur að ná okkur í bita áður en flugurnar komast í matinn og hann verður kaldur. ",
          descr2:
              "Much has changed since you last saw us. This time around 2/3 of the collective is inviting you to enjoy Filipino hospitality which always involves food and our entertainment of choice; karaoke. So sige na! Let's eat before the flies get to the food and the food gets cold. ",
          descr3:
              "Daghan na ang nausab sukad sa niagi nato na panagkita. Sa karon panahona, 2/3 sa koliktibo naga imbitar kaninyo na malingaw mo sa Pilipinhong panagsama nga adunay pirmi kalakip na pagkaon ug kasadya na pinakagusto sa tanan; Karaoke. Unsa paman and inyong gehuwat, sige na! Tara mangaon nata sa dili pa ni malangawan ug mubugnaw ang atong mga pagkaon.",
          img: require("../../assets/eventindex/luckyme.png"),
          links: {
            // spotify: "https://open.spotify.com/artist/5sL9uDMwceYHPknnCLAAwJ?si=fLpYCO1DRuiwmqVDWev5Iw",
            // facebook: "https://www.facebook.com/GusGusOfficial/",
            // instagram: "https://www.instagram.com/officialgusgus/",
            // website: ",,,"
          },
        },

        {
          id: 2,
          id2: "2b",
          date: "10.–16. 07.",
          name: "Pillow Talk – Sonja Kovačević",
          stage: "Glerboxið / The Glass Box",
          time: "Ongoing",
          descr1:
              "Pillow Talk by Sonja Kovačević is an immersive artwork installation that provides insight into the lives of asylum seekers and refugees in Iceland. The setup is simple: an emergency bed, that serves as bed for asylum seekers, broadcasts an array of stories. The stories have been carefully edited to give an insight into the life of the person portrayed and are looking to find new ways of engaging with the ‘story of a refugee’. Pillow Talk was shown at the Reykjavík Arts Festival in 2018. The piece has been adapted for LungA 2021. Sonja Kovačević is an Austrian theatre maker based in Iceland. An interest in exploring current topics and creating a theatre that bridges the gap between theory and practice lace her projects. ",
          descr2:
              "Koddahjal - Endurhlaða eftir Sonju Kovačević er innsetning sem gefur áhorfandanum innsýn í lif hælisleitenda og flóttamanna á Íslandi. Framsetningin er einföld; hátalarar hafa verið sett á samanbrjótanlega bed, eins og notaðir eru sem rúm fyrir hælisleitendur og úr hátölurum heyrast síðan fjölmargar ólíkar frásagnir. Frásagnirnar hafa verið settar saman af kostgæfni með það í huga til að veita innsýn í líf manneskjunnar sem þær lýsa, og til að gefa áhorfendanum færi á að tengjast „sögu flóttamanns“ á nýstárlegan hátt. Koddahjal var sýnt á Listahátíð í Reykjavík árið 2018. Verkið hefur verið lagað að LungA 2021. Sonja Kovačević er austurískur leikhúsframleiðandi sem búsett er á Íslandi. Inn í verk hennar fléttast áhugi á að skoða mikilvæg umræðuefni í samtímanum og á að skapa leikhús sem brúar bilið milli kenninganna og framsetningarinnar.",
          descr3:
              "  ",
          img: require("../../assets/eventindex/pillowtalk.jpg"),
          links: {
            // spotify: "https://open.spotify.com/artist/5sL9uDMwceYHPknnCLAAwJ?si=fLpYCO1DRuiwmqVDWev5Iw",
            // facebook: "https://www.facebook.com/GusGusOfficial/",
            // instagram: "https://www.instagram.com/officialgusgus/",
            // website: ",,,"
            // youtube: "https://www.youtube.com/user/GusGusOfficial",
          },
        },

        {
          id: 3,
          id2: "3b",
          date: "13. 07.",
          name: "Poppy Star",
          stage: "Herðubreið Cinema",
          time: "20:00",
          descr1:
              "Sumarið 2021! Í eitt skipti, og eitt skipti einungis! PoppyStar fer í átta vikna danstónleikaferðalag um land allt. Ekki missa af þessu! PoppyStar er poppstjarna sköpuð af Ulomu Osuala og Mörtu Ákadóttur sem dansar, semur tónlist og gengur alltaf um í mögnuðum fötum. Marta í hlutverki poppstjörnunnar, Uloma í hlutverki grúppíu og fatahönnuðs, saman taka þær yfir eitt svið í einu.",
          descr2:
              "Summer 2021! One time, and one time only! PoppyStar goes on an eight week dancetour around Iceland. Do not miss it! Poppystar is a popstar created by Uloma Osuala and Marta Ákadóttir. She dances, writes music and always wears incredible clothes. With Marta in the role of the popstar and Uloma in the role of fashion designer and groupie, together they take over one stage at a time.",
          descr3:
              "  ",
          img: require("../../assets/eventindex/poppy.jpg"),
          links: {
            // spotify: "https://open.spotify.com/artist/5sL9uDMwceYHPknnCLAAwJ?si=fLpYCO1DRuiwmqVDWev5Iw",
            // facebook: "https://www.facebook.com/GusGusOfficial/",
            // instagram: "https://www.instagram.com/officialgusgus/",
            // website: ",,,"
            // youtube: "https://www.youtube.com/user/GusGusOfficial",
          },
        },

        {
          id: 4,
          id2: "4b",
          date: "14.07",
          name: "Upp til Agna – Anna Margrét Ólafsdóttir & Signý Jónsdóttir",
          stage: "Herðubreið",
          time: "17:30",
          descr1:
              "  ",
          descr2:
              "  ",
          descr3:
              "  ",
          // img: require("../../assets/artists/inspectorspacetime.jpg"),
          links: {
            // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
            // spotify: "...",
            // facebook: "kk",
            // website: ",,,"
          },
        },

        {
          id: 5,
          id2: "5b",
          date: "14.07",
          name: "SUO_GAN – oceanfloor.group",
          stage: "TBA",
          time: "19:00",
          descr1:
              "  ",
          descr2:
              "  ",
          descr3:
              "  ",
          // img: require("../../assets/artists/inspectorspacetime.jpg"),
          links: {
            // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
            // spotify: "...",
            // facebook: "kk",
            // website: ",,,"
          },
        },
        {
          id: 6,
          id2: "6b",
          date: "15.07",
          name: "Ertu búið að borða? Nikaon na ka? Did you eat already? – Lucky 3 - Gjörningur/Performance",
          stage: "Herðubreið Gallery",
          time: "17:30",
          ddescr1:
              "Margt hefur breyst síðan þið sáuð okkur síðast. Í þetta skipti munu 2/3 af listamannakollektífinu með sannri filipseyskri gestrisni bjóða ykkur til veislu, þar sem matur og okkar uppáhalds afþreying verður til staðar, sem er karókí. So sige na! Drífum okkur að ná okkur í bita áður en flugurnar komast í matinn og hann verður kaldur. ",
          descr2:
              "Much has changed since you last saw us. This time around 2/3 of the collective is inviting you to enjoy Filipino hospitality which always involves food and our entertainment of choice; karaoke. So sige na! Let's eat before the flies get to the food and the food gets cold. ",
          descr3:
              "Daghan na ang nausab sukad sa niagi nato na panagkita. Sa karon panahona, 2/3 sa koliktibo naga imbitar kaninyo na malingaw mo sa Pilipinhong panagsama nga adunay pirmi kalakip na pagkaon ug kasadya na pinakagusto sa tanan; Karaoke. Unsa paman and inyong gehuwat, sige na! Tara mangaon nata sa dili pa ni malangawan ug mubugnaw ang atong mga pagkaon.",
          img: require("../../assets/eventindex/luckyme.png"),
          links: {
            // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
            // spotify: "...",
            // facebook: "kk",
            // website: ",,,"
          },
        },

        {
          id: 7,
          id2: "7b",
          date: "15.07",
          name: "Countess Malaise LIVE – Þrennu party!",
          stage: "Kaffi Lára",
          time: "22:00",
          descr1:
              "Fimmtudagspartý á Lárunni í boði Þrennunar! Countess Malaise spilar live, og KRÖNS dj-ar.",
          descr2:
              "Thursday party at Café Lára sponsored by Þrenna! Countess Malaise performs live, and KRÖNS DJs.",
          descr3: "  ",
          img: require("../../assets/eventindex/countessmalaise.jpeg"),
          links: {
            // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
            // spotify: "...",
            // facebook: "kk",
            // website: ",,,"
          },
        },
        {
          id: 8,
          id2: "8b",
          date: "16.07",
          name: "BMX Brós",
          stage: "Herðubreið",
          time: "16:00",
          descr1:
              "BMX sýning og námskeið fyrir alla sem vilja. BMX BRÓS urðu til í hinum geysivinsæla sjónvarpsþætti Ísland Got Talent árið 2015 þegar þeir höfnuðu í 2.sæti. Þar voru þeir Benedikt og Magnús í fyrsta skiptið að gera listir á BMX hjólunum fyrir framan áhorfendur, fyrir keppnina höfðu þeir einungis horft á þetta hættulega en magnaða sport sem áhugamál. Í kjölfarið opnuðust dyr inn í heim sýninga og kennslu. Síðan þá hafa þeir verið ötulir við að sýna og kenna listir á hátíðum um land allt. Vegna mikillar eftirspurnar var honum Antoni bætt við í teymið og eru BMX bræðurnir nú þrír. Sex árum síðar eru sýningarnar og kennslan upp á sitt besta, því æfingin skapar jú meistarann. Það sem við bjóðum upp á er að koma á hátíðina eða viðburðinn ykkar, hvort sem það er skóli, fyrirtæki, bæjarhátíð, og vera með sýningu og/eða kennslu. Við mætum þá með stökkpalla, hátalara og allar þær græjur sem þarf til að gera góða sýningu eða kennslu.",
          descr2:
              "BMX show and workshop for all who want to watch and learn.",
          descr3:
              "  ",
          img: require("../../assets/eventindex/bmxbros.jpg"),
          links: {
            // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
            // spotify: "...",
            // facebook: "kk",
            // website: ",,,"
          },
        },

        {
          id: 9,
          id2: "9b",
          date: "16.07",
          name: "Screening – Vikram Pradhan",
          stage: "Herðubreið Cinema",
          time: "19:00",
          descr1:
              "Vikram Pradhan, sem fæddist á Indlandi og býr og starfar nú á Íslandi, vinnur með ýmsa miðla í stefnumótun á milli myndlistar og hönnunar. Úr ferli hans myndast verk af pataphysísku lagi, þar sem sálfræði og heimspeki koma saman. Fyrri verk hans hafa fjallað um sjónræna upplifun geðklofa einnig hafa þau fjallað um skírdreymi, því verki miðlaði hann sem útvarpsþætti byggður á skáldskap. Hann leggur áherslu á að rannsaka á tilraunakenndann hátt hönnun og pataphysík, þar sem hann gerir rannsóknir sínar með myndbandsgerð og ljósmyndun að leiðarljósi. Hann mun frumsýna nýtt myndbandsverk af þessu tagi á LungA ‘21, þar sem hann grannskoðar endurtekningar hverdagslegs lífs á tímum sem þessum.",
          descr2:
              "Born in India and currently based in Iceland, Vikram Pradhan works with various mediums in the field of art and design to create pataphysical works, revolving around psychology and philosophy. His previous works have dealt with topics like the visual experience of Schizophrenia and the practice of Lucid Dreaming through a fictional radio show. His practice currently revolves around researching on speculative design and pataphysics, and is highly based on experimentations done with the medium of video and photography. At Lunga 21' he will be presenting a new video work based on the repetition of daily life in these times using cinemagraphs and photography.",
          descr3:
              "  ",
          img: require("../../assets/eventindex/vikram.jpg"),
          links: {
            // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
            // spotify: "...",
            // facebook: "kk",
            // website: ",,,"
          },
        },
        {
          id: 10,
          id2: "10b",
          date: "16.07",
          name: "Karókí!",
          stage: "Láran",
          time: "23:00",
          descr1:
              "Hin SVAKALEGA Sigrún Gyða stýrir karókí með STÆL. Karíókínu lýkur kl 01:00 en þá taka frábærir plötusnúðar við og halda uppi stuðinu til lokunar.",
          descr2:
              "Hosted by the HOSTESS with the MOSTESS: Sigrún Gyða. The karaoke ends at 01:00 – and amazing DJs take the reigns for the night",
          descr3:
              "  ",
          img: require("../../assets/eventindex/karaoke.jpg"),
          links: {
            // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
            // spotify: "...",
            // facebook: "kk",
            // website: ",,,"
          },
        },
        {
          id: 11,
          id2: "11b",
          date: "16.07",
          name: "CGFC is DJ",
          stage: "Láran",
          time: "01:00",
          descr1:
              "CGFC (Arnar Geir Gústafsson, Birnir Jón Sigurðsson, Hallveig Eiríksdóttir og Ýr Jóhannsdóttir) spila ljúfa tóna fyrir dans á Lárunni! ",
          descr2:
              "CGFC (Arnar Geir Gústafsson, Birnir Jón Sigurðsson, Hallveig Eiríksdóttir og Ýr Jóhannsdóttir) will DJ amazing tunes for cute dances at Café Lára!",
          descr3:
              "",
          img: require("../../assets/eventindex/cgfc.jpg"),
          links: {
            // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
            // spotify: "...",
            // facebook: "kk",
            // website: ",,,"
          },
        },
        {
          id: 12,
          id2: "12b",
          date: "16.07",
          name: "DJ ALEXJEAN b2b DJ THAISON",
          stage: "Láran",
          time: "02:00",
          descr1:
              "Plötusnúðar þeyta skífum fyrir dansgólf til lokunar kl 03:30. Heyrst hefur að þetta verður alveg tryllt! ",
          descr2:
              "DJs will spin records until closing, at 03:30. We've heard whispers that it will be incredible!  ",
          descr3:
              "",
          img: require("../../assets/eventindex/alex.jpg"),
          links: {
            // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
            // spotify: "...",
            // facebook: "kk",
            // website: ",,,"
          },
        },

        {
          id: 13,
          id2: "13b",
          date: "17.07",
          name: "Fjölskyldudagurinn settur! / Family day set!",
          stage: "Herðubreið",
          time: "13:30",
          descr1:
              "Ræður og allskonar skemmtilegheit!",
          descr2:
              "Speeches and all sorts of fun stuff!",
          descr3:
              "  ",
          // img: require("../../assets/eventindex/vikram.jpg"),
          links: {
            // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
            // spotify: "...",
            // facebook: "kk",
            // website: ",,,"
          },
        },


        {
          id: 14,
          id2: "14b",
          date: "17.07",
          name: "Hér er LungA – This is LungA",
          stage: "Herðubreið",
          time: "14:00",
          descr1:
              "Bókaútgáfa! Bókin Hér er LungA kemur formlega út. Hún er ritstýrð og hönnuð af núverandi og fyrrverandi hönnuðum hátíðarinnar – þau Gréta Þorkelsdóttir og Guðmundur Úlfarsson. Bókin rekur 21 árs sögu hátíðarinnar, frá árinu 2000 til dagsins í dag.",
          descr2:
              "Book release! The book  This is LungA is formally published. Co-edited and designed by the current and former graphic designer of the festival; Gréta Þorkelsdóttir and Guðmundur Úlfarsson, respectively. The book traces the 21 years of festival history, from the year 2000 'till today.  ",
          descr3:
              "  ",
          img: require("../../assets/eventindex/hererlunga.jpg"),
          links: {
            // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
            // spotify: "...",
            // facebook: "kk",
            // website: ",,,"
          },
        },

        {
          id: 15,
          id2: "15b",
          date: "17.07",
          name: "LungA Fjölskyldu fjör / Family Féte",
          stage: "Herðubreið",
          time: "14:00",
          descr1:
              "Laugardaginn 17. júlí verður blásið til heljarinnar fjölskylduhátíðar á planinu hjá Herðubreið. Meðal skemmtana verður hoppukastali, andlitsmálning, markaður og leikir með verðlaunum frá Þrennunni! Þar á meðal verður hægt að vinna miða á tónleikaveislu kvöldsins. Ef þú hefur áhuga á að taka þátt í markaðnum, hafðu samband við lama@lunga.is",
          descr2:
              "Saturday the 17th of July we are having a family fete at LungA festival, including an art market. For everyone interested in having a stall or selling your products or artworks at the LungA family fete Art market, please contact lama@lunga.is ",
          descr3:
              "  ",
          img: require("../../assets/eventindex/familyfete.jpg"),
          links: {
            // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
            // spotify: "...",
            // facebook: "kk",
            // website: ",,,"
          },
        },
        {
          id: 16,
          id2: "16b",
          date: "17.07",
          name: "Listasmiðjusýningar / Workshop exhibitions",
          stage: "Allstaðar! / Everywhere!",
          time: "14:00",
          descr1:
              "Afrakstur smiðjanna 5 verður sýndur víðsvegar um bæinn. Nánari upplýsingar um staðsetningar koma þegar nær dregur.",
          descr2:
              "The results from the 5 workshops will be strewn around town. More information about what and where will be announced later.",
          descr3:
              "  ",
          // img: require("../../assets/eventindex/familyfete.jpg"),
          links: {
            // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
            // spotify: "...",
            // facebook: "kk",
            // website: ",,,"
          },
        },
        {
          id: 17,
          id2: "17b",
          date: "17.07",
          name: "Ör / Micro",
          stage: "HEIMA",
          time: "14:00",
          descr1:
              "Samsýning heimamanna; meðal annars þau Juanjo Ivaldi Zaldívar, Laura Tack, Linus Lohmann, Guðjón Harðarsson og Hanna Christel Sigurkarlsdóttir sýna verk sín í HEIMA.",
          descr2:
              "A group exhibiton by Seyðisfjörður Locals; Juanjo Ivaldi Zaldívar, Laura Tack, Linus Lohmann, Guðjón Harðarsson, Hanna Christel Sigurkarlsdóttir and more. ",
          descr3:
              "  ",
          // img: require("../../assets/eventindex/vikram.jpg"),
          links: {
            // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
            // spotify: "...",
            // facebook: "kk",
            // website: ",,,"
          },
        },

        {
          id: 18,
          id2: "18b",
          date: "17.07",
          name: "Tónleikaveisla! Concerts!",
          stage: "Íþróttahúsið / Gymnasium",
          time: "21:00",
          descr1:
              "GusGus, DJ Unnur Birna, Inspector Spacetime, Vök, DJ Yamaho, Sakana, VILL.",
          descr2:
              "Allsherjar tónleikaveisla í íþróttahúsinu! Tryggið ykkur miða á tix.is",
          descr3:
              "A huge concert in the gymnasium! Get your ticket at tix.is",
          // img: require("../../assets/eventindex/vikram.jpg"),
          links: {
            // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
            // spotify: "...",
            // facebook: "kk",
            // website: ",,,"
          },
        },
      ],
    };
  },
  methods: {
    toggle(id) {
      const index = this.opened.indexOf(id);
      if (index > -1) {
        this.opened.splice(index, 1);
      } else {
        this.opened.push(id);
      }
      
    },
    getContent(){
      let resolve
    if(this.$i18n.locale == 'isl'){
      resolve = require.context("../../../content/concerts/isl", true, /\.md$/);
    }
    else resolve = require.context("../../../content/concerts/en", true, /\.md$/);
     
    this.eventlist = resolve.keys().map(key => {
      // const [, name] = key.match(/\/(.+)\.md$/);
      // console.log(name)
     
      return resolve(key);
    })
    }
  },
 watch: {
    '$i18n.locale': {
      
      handler() {
        this.getContent();
      }
    }
  },
  mounted(){
    this.getContent();
  }

};
</script>

<style scoped>
.head-container {
  display: flex;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  margin: 0 10px 0 10px;
}

.sub-text {
  /* Headline 2 */
  font-weight: 600;
  font-size: 48px;
  margin-left: 40px;
  text-align: left;
  color: #000000;
  line-height: 110%;
}

th {
  /* border-bottom: solid 2px #000; */
  font-size: 24px;
  font-weight: 600;
  padding-left: 20px;
  text-align: left;
}

table {
  margin-top: 100px;
  border-spacing: 0;
  width: 100%;
}

td {
  padding-left: 20px;
  font-size: 20px;
  font-weight: 600;
}

td.border-bottom {
  border-top: solid 2px #000;
  padding-top: 10px;
}

img {
  width: 69rem;
}

.subtext {
  font-weight: 600;
  font-size: 36px;

  color: #000000;
}

.text {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  color: #000000;
  margin: 50px 0px 0 0px;
  text-align: left;
}

.img-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;
}

.img-child {
  max-width: 80%;
  height: auto;
  align-self: center;
  margin: 20px;
}
</style>
