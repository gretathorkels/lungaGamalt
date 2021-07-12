
<template>
  <div class="eventindex">
    <Header v-bind:menu="'menu'" />
    <Headline v-bind:title="title" />
    <div class="head-container">
      <div class="sub-text">{{ $t("eventindex.para1") }}</div>
    </div>

    <div class="eventindex-container">
      <table v-if="ready">
        <tr>
          <!-- Breyttir Headurum hér:
              Ef þú villt taka út dálka þá tekuru út þá sem eru samsvarandi, ss date væri nr 1, stage nr. 3 etc          
           -->
          <th>Date</th> <!-- 1 -->
          <th></th>    <!-- 2 -->
          <th>Stage</th> <!-- 3 -->
          <th>Time</th> <!-- 4 -->
        </tr>
        <template v-for="event in events">
          <tr
            v-bind:key="event.id"
            @click="toggle(event.id)"
            :class="{ opened: opened.includes(event.id) }"
          >
            <td class="border-bottom normal">{{ event.date }}</td><!-- 1 -->
            <td class="border-bottom name">{{ event.name }}</td>  <!-- 2 -->
            <td class="border-bottom normal">{{ event.stage }}</td><!-- 3 -->
            <td class="border-bottom normal">{{ event.time }}</td><!-- 4 -->
          </tr>
          <tr
            class="border"
            v-if="opened.includes(event.id)"
            v-bind:key="event.id2"
          >
            <td class="border-top" colspan="2">
              {{ event.descr1 }} <br />
              <br />
              {{ event.descr2 }} <br />
              <br />
              {{ event.descr3 }}
            </td>
            

            <td class="border-top" colspan="2">
             
              <img :src="event.img" />

              <!-- Uncomment ef þú villt social media hlekki! Annars, taktu þetta út  -->
              <!-- <div class="grid-container">
                  <div v-if="event.links.soundcloud">
                      <a class="nav-link" :href="event.links.soundcloud" target="_blank">Soundcloud</a>
                  </div>
                  <div v-if="event.links.spotify">
                      <a class="nav-link" :href="event.links.spotify" target="_blank">Spotify</a>
                  </div>
                  <div v-if="event.links.instagram">
                      <a class="nav-link" :href="event.links.instagram" target="_blank">Instagram</a>
                  </div>
                <div v-if="event.links.youtube">
                    <a class="nav-link" :href="event.links.youtube" target="_blank">Youtube</a>
                </div>

              <div v-if="event.links.facebook">
                <a class="nav-link" :href="event.links.facebook" target="_blank">Facebook</a>
              </div>
              <div v-if="event.links.website">
                <a class="nav-link" :href="event.links.website" target="_blank">Website</a>
              </div>
            </div> -->
            </td>


          </tr>
        </template>
      </table>
    </div>
    <br />
    <div class="footer-container">
      <!--<div class="text">
        {{$t("workshops.weekinfo")}}
      </div>
      <div class="text">
        {{$t("workshops.fridayinfo")}}
      </div>-->
    </div>
    <div class="img-container">
      <img class="img-child" src="../../assets/tumblr/15.jpg" />
    </div>

    <Footer />
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
    return {
      title: "title.eventindex",
      opened: [],

      //When ready: breyttu ready: false í ready: true,
      ready: false,

      //EVENT uppl til að breyta:
      //Ekki breyta id og id2
      events: [
        {
          id: 1,
          id2: "1b",
          date: "17. July",
          name: "GusGus",
          stage: "TBA",
          time: "TBA",
          descr1:
            "Tastemakers of the scene for a quarter of a century, GusGus are one of the most beloved and longstanding electronic acts hailing from Iceland. Offering much more than just unparalleled musical mastery, the group have had their feet firmly spread across various sectors of the creative space since their inception and would sooner be classified as a multi-media art collective above all else.",
          descr2:
            "World-renowned for their genre-defying style and must-see live show, the troupe’s eclectic infusion of modern club culture and echoes of the past have seen them remix iconic acts such as Depeche Mode, Björk, and Sigur Rós. With the near-constant presence of Biggi Veira and Daníel Ágúst, recently re-joined (behind the scenes) by founding member Siggi Kinski and the newly recruited Margrét Rán, the collective has seen a rotating cast of members, all of whom have contributed to the artistic vibrancy that has defined the group and its production output over its 25 year-long careers.",
          descr3:
            "GusGus is now unfolding into a new era with their upcoming 11th studio album, Mobile Home. Rejuvenated and replete with creative aspiration, the collective welcome Vök’s Margrét Rán as the newest member of the circus, calling upon her illustrious dream-pop vocals to launch a new chapter in the GusGus saga. Offering an immersive montage of short stories that will serve as their most ambitious and forward-thinking LP to date, “Mobile Home” echoes the world’s forgotten purpose, lost between screens of distraction and material consciousness. This conceptual manifesto is the embodiment of GusGus and their world; a virtuous blend of masterful compositions and profound ideologies.",
          img: require("../../assets/artists/gusgus.png"),
          links: {
            spotify:
              "https://open.spotify.com/artist/5sL9uDMwceYHPknnCLAAwJ?si=fLpYCO1DRuiwmqVDWev5Iw",
            facebook: "https://www.facebook.com/GusGusOfficial/",
            instagram: "https://www.instagram.com/officialgusgus/",
            // website: ",,,"
            youtube: "https://www.youtube.com/user/GusGusOfficial",
          },
        },

        {
          id: 2,
          id2: "2b",
          date: "17. July",
          name: "DJ Yamaho",
          stage: "TBA",
          time: "TBA",
          img: require("../../assets/artists/djyamaho.jpg"),
          descr1:
            "DJ Yamaho  Natalie G. Gunnarsdóttir, a DJ from Reykjavik who began playing around 2000 at the legendary city bar Sirkus. She has remained in high demand ever since having also played in Ibiza, Barcelona (Razzmatazz) Berlin (Berghain) to name a few.",
          descr2:
            "Her sets typically oscillate between the eminent pillars of Techno/House, Chicago house and Detroit techno, and from where she weaves her hypnotic and technically minded sets. She has an upcoming Ep release this summer on Either Recordings collaborating with Jamie Clarke.",
          descr3: " ",
          links: {
            // soundcloud: "https://soundcloud.com/dkmntl/lena-willikens-at-dekmantel-festival-2017",
            // spotify: "https://open.spotify.com/artist/6ut6UGbmxITsrTO3byNE2E",
            // instagram: "https://www.instagram.com/lena_willikens/",
          },
        },

        {
          id: 3,
          id2: "3b",
          date: "17. July",
          name: "Vök",
          stage: "TBA",
          time: "TBA",
          img: require("../../assets/artists/vok.jpg"),
          descr1:
            "Icelandic trio Vök have shared their dynamic new single Lost in the Weekend, which is out now through Nettwerk Records.",
          descr2:
            "Following the release of their acclaimed 2019 album In the Dark, which was written and recorded by the band in collaboration with producer James Earp (Bipolar Sunshine, Fickle Friends, Lewis Capaldi), Vök have been nestled away in their Reykjavík studios working on new material. The result is some of their most atmospheric work yet and Lost in the Weekend is an early taste of their progressive alt-pop sound.",
          descr3:
            "Through their unique and lushly layered sound that blends electro and indie with forward-thinking pop and a self-assured aesthetic, that is just as striking as their sound, Vök continue to cement their position as one of the most exciting alternative bands right now. Following two critically acclaimed albums, Lost in the Weekend is just the first musical moment in an exciting year for Vök, with further new music announced soon.",
          links: {
            soundcloud: "https://soundcloud.com/vokmusic",
            spotify:
              "https://open.spotify.com/artist/7oDTyDfeA2JE2jUZztkBj8?si=a1JIQBMsSd20L_nrjXGp7Q",
            instagram: "https://www.instagram.com/vokmusic/",
            facebook: "https://www.facebook.com/Vokband",
            youtube:
              "https://www.youtube.com/channel/UChMp2yW0NNOA62MGi6db7Nw/videos",
            website: "https://www.vok.is/",
          },
        },

        {
          id: 4,
          id2: "4b",
          date: "17. July",
          name: "Inspector Spacetime",
          stage: "TBA",
          time: "TBA",
          descr1:
            "Reykjavík based pop group Inspector Spacetime, an offspring of the first coronavirus lockdown, has been shaking things up in the Icelandic music scene since their debut single ‘Hvað sem er’ last summer.",
          descr2:
            "Reminiscent of the disco scene, the band also draws inspiration from the bops around them; French electro, the UK garage scene, the exciting hyper-pop movement, and fellow scandi-pop acts.",
          descr3:
            "With their self-titled debut album released this January, all Inspector asks of you is to dance … and bounce, at home, at the club, and now finally at LungA 2021!!",
          img: require("../../assets/artists/inspectorspacetime.jpg"),
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
          date: "17. July",
          name: "VILL",
          stage: "TBA",
          time: "TBA",
          descr1:
            "VILL byrjaði sem samstarfsverkefni Ísidórs, JóaPé og Muna en bætti fljótt við sig fleira listafólki, sem öll eiga það sameiginlegt að vera illa haldin af sköpunaráráttu. Tónlist þeirra tvinnar saman angist smáborgarlífsins og losta ungdómsins, á hugljúfan og orkuríkan hátt. Afraksturinn mun heyrast í sumar, þegar hópurinn gefur út sína fyrstu plötu.",
          descr2:
            "Við viljum öll mismunandi hluti í lífinu, en á LungA vill VILL að þú njótir þín meðan tónlistin seiðar hljóðhimnurnar.",
          descr3: "  ",
          img: require("../../assets/artists/vill.jpg"),
          links: {
            // tumblr: "sdd",
            // spotify: "https://open.spotify.com/artist/7oDTyDfeA2JE2jUZztkBj8?si=TtUiVVAfRya43LOO1zcysA"
            // facebook: "kk",
            // website: ",,,"
          },
        },
        {
          id: 6,
          id2: "6b",
          date: "17. July",
          name: "SAKANA",
          stage: "TBA",
          time: "TBA",
          descr1:
            "SAKANA is the dj name of the versatile Icelandic visual artist, creative director and project manager Sunna Axels.",
          descr2:
            "SAKANA has performed at numerous local art festivals and international events. With passion for J-pop, techno-pop and exploring the boundaries of guilty pleasure, SAKANA creates epic dj-sets that are guaranteed to get people to show off their best dance moves.",
          descr3:
            "After hosting the opening exhibition at LungA in 2019, DARK GLITTER, SAKANA is returning to Seyðisfjörður - promising a night you don’t want to miss.",
          img: require("../../assets/artists/sakana.jpg"),
          links: {
            instagram: "https://www.instagram.com/sunna_sakana_/",
            // tumblr: "sdd",
            //  spotify: "https://open.spotify.com/artist/7yuLFZmY5CuPf81al33Ot2?si=3fmTovQkQ3GK1s2SeMZQjg"
            // facebook: "kk",
            // website: ",,,"
          },
        },

        {
          id: 7,
          id2: "7b",
          date: "17. July",
          name: "DJ Unnur Birna",
          stage: "TBA",
          time: "TBA",
          descr1:
            "Unnur Birna er leiklistarnemi og tónlistargramsari sem nýtur sín best í góðra vina hópi á dansgólfum landsins. Eins og góðum grömsurum sæmir sækist hún í faldar og exotískar gersemar tónheimsins, sem fá nú að líta dagsins ljós í seyðandi sumarstemningu á LungA! ",
          descr2: " ",
          descr3: " ",
          img: require("../../assets/artists/unnur_birna.jpg"),
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
  },
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
