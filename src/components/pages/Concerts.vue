<template>
  <div class="concerts">
    <Header v-bind:menu="'menu'"/>
    <Headline v-bind:title="title"/>

    <!-- <div class="img-container">
       <img class="img-child" src="../../assets/tumblr/2021-5.jpg"/>
     </div> -->



    <div class="footer-container">
      <div class="sub-text">
        {{ $t("concerts.header") }}
      </div>
      <div class="text">
        {{ $t("concerts.info1") }}
      </div>

    </div>
    <!--<div class="center sub-header nav-link">
      <a
          class="nav-link"
          href="https://tix.is/is/event/9612/lunga-20-ara-afm-listonleikar/"
          target="_blank"
      >
        {{ $t("concerts.ticket") }}
      </a>
    </div>-->
    <table>
      <tr>
        <!-- Breyttir Headurum hér:
              Ef þú villt taka út dálka þá tekuru út þá sem eru samsvarandi, ss date væri nr 1.. etc
           -->
        <th>Artist</th><!--1-->
        <th>Place</th>
      </tr>
      <template v-for="artist in artists">
        <tr
            v-bind:key="artist.id"
            @click="toggle(artist.id)"
            :class="{ opened: opened.includes(artist.id) }"
        >

          <td class="border-bottom name">{{ artist.name }}</td><!--1-->

          <td class="border-bottom Width">{{ artist.time }}</td>

        </tr>
        <tr
            class="border"
            v-if="opened.includes(artist.id)"
            v-bind:key="artist.id2"
        >
          <td class="border-top" colspan="1">
            {{ artist.descr1 }} <br/>
            <br/>
            {{ artist.descr2 }} <br/>
            <br/>
            {{ artist.descr3 }}
          </td>
          <td class="border-top" colspan="1">
            <img :src="artist.img"/>
            <div class="grid-container">
              <div v-if="artist.links.soundcloud">
                <a
                    class="nav-link"
                    :href="artist.links.soundcloud"
                    target="_blank"
                >Soundcloud</a
                >
              </div>
              <div v-if="artist.links.spotify">
                <a class="nav-link" :href="artist.links.spotify" target="_blank"
                >Spotify</a
                >
              </div>
              <div v-if="artist.links.instagram">
                <a
                    class="nav-link"
                    :href="artist.links.instagram"
                    target="_blank"
                >Instagram</a
                >
              </div>
              <div v-if="artist.links.youtube">
                <a class="nav-link" :href="artist.links.youtube" target="_blank"
                >Youtube</a
                >
              </div>

              <div v-if="artist.links.facebook">
                <a
                    class="nav-link"
                    :href="artist.links.facebook"
                    target="_blank"
                >Facebook</a
                >
              </div>
              <div v-if="artist.links.website">
                <a class="nav-link" :href="artist.links.website" target="_blank"
                >Website</a
                >
              </div>
            </div>
          </td>
        </tr>
      </template>
    </table>
<br><br>
    <div class="img-container">
      <img class="img-child" src="../../assets/tumblr/2021-6.jpg"/>
    </div>

    <!--  <div class="center sub-header nav-link">
        <a
          class="nav-link"
          href="https://tix.is/is/event/9612/lunga-20-ara-afm-listonleikar/"
          target="_blank"
        >
          {{ $t("concerts.ticket") }}
        </a>
      </div>-->

    <Footer/>
  </div>
</template>

<script>
import Header from "../shared/Header";
import Headline from "../shared/Headline";
import Footer from "../shared/Footer";

export default {
  name: "Concerts",
  components: {Header, Headline, Footer},
  data() {
    return {
      title: "title.concerts",
      opened: [],
      artists: [
        {
          id: 1,
          id2: "1b",
          date: "  ",
          name: "Skatebård",
          stage: "T.B.A.",
          time: "T.B.A.",
          descr1:
              "Skatebård, the Norwegian producer of all things electronic. Connoisseurs know that his catalogue oscillates between emotional techno, neo-italo, electro from an alternative future and a Scando-cosmic reinterpretation of pure Detroitian house. Skatebård releases on labels like Digitalo Enterprises, Radius Records, Supersoul Recordings, Tellè Records, Keys of Life Finland, Luna Flicks, Totally and Sex Tags Mania. ",
          descr2:
              " ",
          descr3:
              " ",
          img: require("../../assets/artists/skatebard.png"),
          links: {
            // spotify: " ",
            // facebook: " ",
            // instagram: " ",
            // website: " "
            // youtube: " ",
          },
        },

        {
          id: 2,
          id2: "2b",
          date: " ",
          name: "Bríet",
          stage: "TBA",
          time: "TBA",
          img: require("../../assets/artists/briet.png"),
          descr1: "Bríet is an award-winning Icelandic singer known for her songs ‘Esjan’, ‘Feimin(n)’ and ‘Rólegur kúreki’.  She is a multi-instrumentalist who writes and performs her own songs but also loves to collaborate with others. Most of her work is done with her longtime musical partner, writer and producer, Pálmi Ragnar Ásgeirsson. Her album ‘Kveðja, Bríet’ was selected as album of the year at the 2021 Icelandic Music Awards. That year she also won singer of the year and lyricist of the year.",
          descr2:
              " ",
          descr3: "  ",
          links: {
            // spotify: " ",
            // facebook: " ",
            // instagram: " ",
            // website: " "
            // youtube: " ",
          },
        },

        {
          id: 3,
          id2: "3b",
          date: " ",
          name: "Birnir",
          stage: "TBA",
          time: "TBA",
          img: require("../../assets/artists/birnir.png"),
          descr1:
              "Birnir has been one of Iceland's most popular rappers since his debut in 2017. Last year he released the critically acclaimed album Bushido which cemented his spot as both the top dog of Icelandic rap and a pop icon. Birnir's catalogue is diverse and Lunga guests can expect a high energy epic performance. ",
          descr2:
              " ",
          descr3: "  ",
          links: {
            // spotify: " ",
            // facebook: " ",
            // instagram: " ",
            // website: " "
            // youtube: " ",,
          },
        },

        {
          id: 4,
          id2: "4b",
          date: " ",
          name: "russian.girls",
          stage: "TBA",
          time: "TBA",
          descr1:
              "russian.girls started out as a solo project of Guðlaugur Hörðdal Einarsson in 2011, but later became a platform for him and his friends to make music. Today russian.girls is known as a trio, as Tatjana Dís Aldísar and Gylfi Freeland Sigurðsson joined the project in 2016. Together they've released four EP’s, most recently under the Icelandic/German techno label bbb recors. As once described, russian.girls make music that is “entirely their own,“ surprising their listeners with each release. ",
          descr2:
              " ",
          descr3: "  ",
          img: require("../../assets/artists/russiangirls.png"),
          links: {
            // spotify: " ",
            // facebook: " ",
            // instagram: " ",
            // website: " "
            // youtube: " ",
          },
        },

        {
          id: 5,
          id2: "5b",
          date: " ",
          name: "Cyber",
          stage: "TBA",
          time: "TBA",
          descr1:
              "Even though originally formed in 2012 as a thrash metal/disco concept, CYBER is now known as the ongoing experimental hip-hop and electronic project of Salka Valsdóttir and Jóhanna Rakel. The band was named after a lipstick that Salka and Jóhanna both found themselves rocking when they became best friends at sixteen. Even though the lipstick is now totally lame the band has flourished. Releasing 5 projects in the last 5 years, CYBER has now established themselves as a leading force of fun and experimental live performances. For their latest album ´VACATION´ CYBER won the Icelandic Music Awards for best hip-hop/rap album.",
          descr2:
              " ",
          descr3: "  ",
          img: require("../../assets/artists/cyber.png"),
          links: {
            // spotify: " ",
            // facebook: " ",
            // instagram: " ",
            // website: " "
            // youtube: " ",
          },
        },
        {
          id: 6,
          id2: "6b",
          date: " ",
          name: "gugusar",
          stage: "TBA",
          time: "TBA",
          descr1:
              "gugusar is an eighteen year old singer, producer and a songwriter from Reykjavík, Iceland. She started producing her own music only at fourteen years old and has been doing since",
          descr2:
              " ",
          descr3:
              "",
          img: require("../../assets/artists/gugusar2.png"),
          links: {
            // spotify: " ",
            // facebook: " ",
            // instagram: " ",
            // website: " "
            // youtube: " ",
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-grid {
  display: flex;
  justify-content: space-between;
}

.flex-grid .col {
  flex: 1;
  margin: 10px;
}

@media (max-width: 800px) {
  .flex-grid {
    display: block;
  .col {
    width: 100%;
    margin: 10px;
  }
}

}
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

.Width {
  width: 69rem;
  font-size: 24px;
  font-weight: 600;
  text-align: left;
}

img {
  width: 67rem;
}

.head-container {
  display: flex;
}

.name {
  font-size: 36px;
  font-weight: 600;
  text-align: center;
}


th {
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

tr:hover {
  color: #00FF38;
}

.center {
  text-align: center;
}

.center a:hover{
  color: #00FF38;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  margin: 10px;
}

.sub-text {
  /* Headline 2 */
  font-weight: 600;
  font-size: 48px;
  margin-left: 40px;
  width: 80%;
  text-align: left;
  color: #000000;
  padding: 20px;
  line-height: 105%;
}

.sub-header {
  text-align: center;
  padding: 20px;
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
  padding: 20px;
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
  max-width: 100%;
  height: auto;
  align-self: center;
  margin: 20px;
}
</style>
