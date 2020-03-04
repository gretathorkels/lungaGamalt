<template>
  <div class="concerts">
    <Header v-bind:menu="'menu'" />
    <Headline v-bind:title="title" />




 <div class="img-container">
                <img class="img-child" src="../../assets/tumblr/10.jpg">
              </div>

    <div class="head-container">

      <div>
        <div class="sub-header">
           <a class="nav-link" href="https://tix.is/is/event/9612/lunga-20-ara-afm-listonleikar/" target="_blank">
            {{$t("concerts.ticket")}}
          </a>
        </div>
      </div>
      <div class="sub-text">
        {{$t("concerts.header")}}
      </div>
    </div>


    <table>
      <tr>
        <th>Date</th>
        <th></th>
        <th>Stage</th>
        <th>Time</th>
      </tr>
      <template v-for="artist in artists">
        <tr
          v-bind:key="artist.id"
          @click="toggle(artist.id)"
          :class="{ opened: opened.includes(artist.id) }"
        >
          <td class="border-bottom normal">{{artist.date}}</td>
          <td class="border-bottom name">{{artist.name}}</td>
          <td class="border-bottom normal">{{artist.stage}}</td>
          <td class="border-bottom normal">{{artist.time}}</td>
        </tr>
        <tr class="border" v-if="opened.includes(artist.id)" v-bind:key="artist.id2">
          <td class="border-top" colspan="2">{{artist.descr1}} <br/> <br/>
            {{artist.descr2}}  <br/> <br/>
            {{artist.descr3}}
          </td>
          <td class="border-top" colspan="2">
            <img :src="artist.img" />
            <div class="grid-container">
                  <div v-if="artist.links.soundcloud">
                      <a class="nav-link" :href="artist.links.soundcloud" target="_blank">Soundcloud</a>
                  </div>
                  <div v-if="artist.links.spotify">
                      <a class="nav-link" :href="artist.links.spotify" target="_blank">Spotify</a>
                  </div>
                  <div v-if="artist.links.instagram">
                      <a class="nav-link" :href="artist.links.instagram" target="_blank">Instagram</a>
                  </div>
                <div v-if="artist.links.youtube">
                    <a class="nav-link" :href="artist.links.youtube" target="_blank">Youtube</a>
                </div>

              <div v-if="artist.links.facebook">
                <a class="nav-link" :href="artist.links.facebook" target="_blank">Facebook</a>
              </div>
              <div v-if="artist.links.website">
                <a class="nav-link" :href="artist.links.website" target="_blank">Website</a>
              </div>



            </div>
          </td>
        </tr>
      </template>
    </table>
    <div class="footer-container">
        <div class="text">
        <!--Upplýsingar um tónleikana:--->
        </div>
      <div class="text">
        <!--Upplýsingar um tónleikana:-->
      </div>
         <div class="img-container">
             <img class="img-child" src="../../assets/tumblr/12.jpg">
         </div>
      <div class="center sub-header nav-link">
       <a class="nav-link" href="https://tix.is/is/event/9612/lunga-20-ara-afm-listonleikar/" target="_blank">
                   {{$t("concerts.ticket")}}
                 </a>
      </div>
    </div>


  </div>
</template>

<script>
import Header from "../shared/Header";
import Headline from "../shared/Headline";

export default {
  name: "Concerts",
  components: { Header, Headline },
  data() {
    return {
      title: "title.concerts",
      opened: [],
      artists: [

          {
              id:1,
              id2: "1b",
              date: "TBA",
              name: "Jessy Lanza",
              stage: "TBA",
              time: "TBA",
              descr1:
                      "Jessy Lanza is a producer, vocalist and DJ from Hamilton, Canada who currently lives in Queens New York. She has released two studio albums; Pull My Hair Back and Oh No on London's Hyperdub label . Both records were met with near universal praise and featured in The Guardian, New York Times, Pitchfork and more.",
              descr2: "Jessy has toured across North America, Europe, Australia and Asia and performed on the BBC (where she had a year long show on Radio 1), KCRW, arte.tv in Europe and Channel 4 in the UK. Working alongside producer Jeremy Greenspan, Jessy has crafted a new and vibrant pop aesthetic that is both universal, energetic, yet personal and introspective. The material exists on a distinct polarity of big and small, global and local, populist and personal; and clarifies a modern and crucial voice in pop music.",
              descr3:"Her new single Lick In Heaven drops on 20th February, followed by a European tour.",
              img: require("../../assets/artists/jessylanza.jpg"),
              links: {
                  // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
                  // spotify: "...",
                  // facebook: "kk",
                  // website: ",,,"
                  youtube: "https://www.youtube.com/watch?v=V3D7EEpdlY4",
              }
          },


          {
          id: 2,
          id2: "2b",
          date: "TBA",
          name: "Lena Willikens",
          stage: "TBA",
          time: "TBA",
          img: require("../../assets/artists/lenawillikens.jpg"),
          descr1:
            "Lena Willikens doesn’t play the hits. When she’s behind the decks, even her biggest fans often have no idea exactly what she’s playing, and that’s part of the magic. Like all DJs, Willikens of course has a passion for records, but she’s also after something bigger, something that’s truly transportive for those on the dancefloor.",
	descr2:
"Born and raised in Germany, Willikens first honed her unique approach during a long residency at Düsseldorf’s beloved Salon des Amateurs. These days, however, she’s based in Amsterdam, where her transportative impulses have been plugged into a variety of outlets with a global reach. On the radio, she pilots the monthly Lightning Conductor program on NTS. On record, she recently curated the fifth installment of Dekmantel’s acclaimed Selectors compilation series, and she’s also been tapped to remix the likes of Lena Platonos, S U R V I V E, rRoxymore, Simian Mobile Disco and Ana Helder, amongst others. On stage, Willikens works with artist Sarah Szczesny on Phantom Kino Ballett, an immersive audio-visual performance art project that defies routine explanation.",
	descr3:
"Still, it’s in the DJ booth where Willikens continues to make the biggest impact. Whether she’s playing alone or in tandem with fellow sonic explorer and Salon des Amateurs alum Vladimir Ivkovic, Willikens nimbly navigates electronic music’s darkest and most bizarre corners, sampling different temperatures, different moods and a dollop of chaos, just to keep things interesting. And although she herself doesn’t always know the final destination, when Willikens is at the helm, there’s no question that the journey is bound to be thrilling.",
          links: {
              soundcloud: "https://soundcloud.com/dkmntl/lena-willikens-at-dekmantel-festival-2017",
              spotify: "https://open.spotify.com/artist/6ut6UGbmxITsrTO3byNE2E",
              instagram: "https://www.instagram.com/lena_willikens/",
          }
        },

          {
              id: 3,
              id2: "3b",
              date: "TBA",
              name: "Svala",
              stage: "TBA",
              time: "TBA",
              descr1:
                      "....",
              descr2: "....",
              descr3:"...",
              img: require("../../assets/artists/svala.jpg"),
              links: {
                  // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
                  // spotify: "...",
                  // facebook: "kk",
                  // website: ",,,"
              }
          },

        {
          id: 4,
          id2: "4b",
          date: "TBA",
          name: "Violet",
          stage: "TBA",
          time: "TBA",
          descr1:
            "In her home city Lisbon, Violet is contributing to her local scene from different angles. She’s co-founder of online radio station Rádio Quântica and also resident at mina – a queer rave in unexpected venues. This work permeates Violet’s work as an artist, as she thoughtfully expresses the political history of dance music through her voice and her music.",
  descr2: "As a producer, she has released music on One Eyed Jacks and LoveOn The Rocks, self-released collaborations with artists likes Elles, DEBONAIR and Nightwave for International Women’s Day, remixed on Cómeme and established her own label – Naive. The first self-released EP on it, “Togetherness” resonated widely, using the sound of familiar breaks and twisting them into new contexts with dub-inspired bass, brass flourishes and dreamy chords. Eris Drew played the title track on her widely appraised RA podcast as well as choosing it as the featured track in a short film about her DJing.",
	descr3:"Violet incorporates similar sounds from her production process into her DJing, melding breaks, extraterrestrial jacking rhythms, imaginative techno, acid house and more in a way that feels natural and challenging all at once. She has contributed mixes for Beats In Space, Crack, The Ransom Note, Mixmag and Cómeme as well as having radio appearances on Rinse, NTS and The Lot. Violet has played across Europe at parties such as Room 4 Resistance, Berlin Atonal and Field Maneuvers and embarked on her first US tour in 2018.",
          img: require("../../assets/artists/violet-live.jpg"),
          links: {
            soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
            // spotify: "...",
            // facebook: "kk",
            // website: ",,,"
          }
        },

        {
          id: 5,
          id2: "5b",
          date: "TBA",
          name: "Vök",
          stage: "TBA",
          time: "TBA",
          descr1:
            "Icelandic electronic dream-pop trio Vök have just released their sophomore full-length LP In The Dark. The trio are on the heels of a string of highly successful live dates, including 32 gigs in Europe to their U.S. debut with several concerts in select cities as well as support for Editors in Germany & Poland.",
	descr2:
            "The band first gained recognition within months of forming when they won Iceland’s prestigious Músíktilraunir (‘Music Experiments’), Their triumph soon led to the recording and release of their debut EP Tension through local Icelandic label Record Records. Soon they began to further mark themselves out as rising innovators of smart, atmospheric jams on their second EP Circles. Hailed by Noisey as “channelling the Beach soundtrack via 1980s synth pop and the modern sexiness of The Knife.”",
	descr3:"Vök has toured extensively through Europe, supporting the likes of Goldfrapp and Asgeir, and performing at festivals including Roskilde, Green Man and Into the Woods. Winning numerous new fans along the way with their brand of dreamy electronics with melodic vocals, the band soon caught the attention of Nettwerk Music Group (Angus & Julia Stone, Boxed In, The Veils), who instantly signed them for an international record deal. 2017 saw the release of their highly anticipated debut LP ‘Figure’ to critical acclaim. Produced by Jack Garrett’s collaborator Brett Cox, The Line of Best Fit hailed it a \"brilliant debut album”. ‘Figure’ won Album of the Year in the Electronic Music category at this year’s Icelandic Music Awards.",
          img: require("../../assets/artists/vok.jpg"),
          links: {
            // tumblr: "sdd",
            spotify: "https://open.spotify.com/artist/7oDTyDfeA2JE2jUZztkBj8?si=TtUiVVAfRya43LOO1zcysA"
            // facebook: "kk",
            // website: ",,,"
          }
        },
        {
          id: 6,
          id2: "6b",
          date: "TBA",
          name: "Sturla Atlas",
          stage: "TBA",
          time: "TBA",
          descr1:
            "Sturla Atlas stepped on the Icelandic music scene back in 2015 and immediately made noise. One of that memorable summers’ highlights was without doubt his set at LungA. The energy and interaction with the young crowd signaled a new era of Icelandic hip-hop and pop in general. The 2016 Newcomer of the year at the Icelandic Music Awards continued to release mixtapes and singles to critical acclaim and sure enough the world noticed. Having conquered every stage available in Iceland, performances at Sónar Barcelona, Eurosonic and a support slot at Justin Bieber’s Purpose World Tour in Reykjavík have solidified Sturla Atlas’ status as a seasoned and entertaining performer. Now returning to Seyðisfjörður five years later and embarking on a new chapter in his career, the only thing certain is that everyone is in for a good time.",
          img: require("../../assets/artists/sturlaatlas.jpg"),
          links: {
            // tumblr: "sdd",
              spotify: "https://open.spotify.com/artist/7yuLFZmY5CuPf81al33Ot2?si=3fmTovQkQ3GK1s2SeMZQjg"
            // facebook: "kk",
            // website: ",,,"
          }
        },

          {
              id: 7,
              id2: "7b",
              date: "TBA",
              name: "Hipsumhaps",
              stage: "TBA",
              time: "TBA",
              descr1:
                      "Hipsumhaps is an indie-pop project created in the suburbs of the Capital Area by two local friends, Fannar Ingi and Jökull Breki.",
              descr2: "They became widely recognized last summer with their debut album 'Best gleymdu leyndarmálin,' including hit singles such as 'LSMLÍ (lífið sem mig langar í)' and 'Fyrsta ástin.'",
              // descr3:"...",
              img: require("../../assets/artists/hipsumhaps.jpeg"),
              links: {
                  // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
                  // spotify: "...",
                  // facebook: "kk",
                  // website: ",,,"
              }
          },


        {
          id: 8,
          id2: "8b",
          date: "TBA",
          name: "Fruit",
          stage: "TBA",
          time: "TBA",
          descr1:
            "Fruit is a Copenhagen based producer and a DJ from Iceland. His sound is a blend of club and experimental music with inspirations drawing from balearic house and 90's trance. To date his productions have drawn on atmospheric ambience, breakbeat & the lush melancholy of balearic house.",
	descr2:
            "His first release on Øen Records was an intimate world full of naive melodies, Icelandic wikipedia text and meticulous textures where he explores his quiet side. His second release was through the label Coastal Haze where Fruit managed to jump in between melodic dance floor trance, 2step breakbeat and island ambience.",
	descr3:
	"He’s known both for his excellent DJ skills as well as his eclectic live shows.",

          img: require("../../assets/artists/fruit.jpg"),
          links: {
            // tumblr: "sdd",
            spotify: "https://open.spotify.com/album/5pBPl9a0ck739rKSSq8wln?si=Aw9fzKzXSvGA4DgNyXuIYg"
            // facebook: "kk",
            // website: ",,,"
          }
        },
        {
 id: 9,
          id2: "9b",
          date: "TBA",
          name: "B1B2",
          stage: "TBA",
          time: "TBA",
          descr1:
            "Icelandic DJ duo B1B2 creates unique performative club experience playing sets with a mix of afro house and ethno techno beats.",
	descr2:
            "The duo has played at various underground events in Denmark and Cape Town as well as Iceland Airwaves & LungA.",
	descr3:
	"Playing on all your senses, B1B2 aims to create a dancefloor for you to feel free to dance while feeling loved and respected!!",

          img: require("../../assets/artists/b1b2.jpg"),
          links: {
            // tumblr: "sdd",
            spotify: "https://open.spotify.com/track/3HFFBfoTdd0TOlvMgq3Lzc?si=1A43L0_RS9CTBD0x9fNTcQ",
            facebook: "https://www.facebook.com/djb1b2/"
            // website: ",,,"
          }
        }



      ]
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  /* margin-top: 20px; */
}
.border-top {
  border-bottom: 2px solid #000;
}
.grid-container,
tr {
  vertical-align: top;
  /* padding-top: 20px; */
}
.grid-container,
tr,
td {
  padding-top: 10px;
}
.grid-container.nav-link {
  font-size: 13px;
  font-weight: 600;
}
img {
  width: 690px;
}
.head-container {
  display: flex;
}
.name {
  font-size: 36px;
  font-weight: 600;
  text-align: center;
}
.normal {
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  width: 10%;
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
.center {
  text-align: center;
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
  width: 80%;
  text-align: left;
  margin-top: 20px;
  color: #000000;
}
.sub-header{
text-align: center;
}
.table {
  border-top: 2px solid #000000;
  border-bottom: 2px solid #000000;
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  padding: 15px 0 15px 0;
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
    display:flex;
    flex-direction: column;
    flex-wrap:wrap;
    justify-content: center;
    align-self: center;
}

.img-child {
    max-width: 100%;
    height: auto;
    align-self: center;
    margin:20px;
}

</style>
