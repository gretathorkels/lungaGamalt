<template>
  <div class="concerts">
    <Header v-bind:menu="'menu'" />
    <Headline v-bind:title="title" />
    <div class="head-container">
      <div>
        <div class="sub-header">Kaupa miða</div>
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
          <td class="border-top" colspan="2">{{artist.descr}}</td>
          <td class="border-top" colspan="2">
            <img :src="artist.img" />
            <div class="grid-container">
              <div v-if="artist.links.tumblr">
                <a class="nav-link" :href="artist.links.tumblr" target="_blank">Tumblr</a>
              </div>
              <div v-if="artist.links.facebook">
                <a class="nav-link" :href="artist.links.facebook" target="_blank">Facebook</a>
              </div>
              <div v-if="artist.links.website">
                <a class="nav-link" :href="artist.links.website" target="_blank">Website</a>
              </div>
              <div v-if="artist.links.instagram">
                <a class="nav-link" :href="artist.links.instagram" target="_blank">Instagram</a>
              </div>
              <div v-if="artist.links.spotify">
                <a class="nav-link" :href="artist.links.spotify" target="_blank">Spotify</a>
              </div>
            </div>
          </td>
        </tr>
      </template>
    </table>
    <div class="footer-container">
      <div class="text">
        Upplýsingar um tónleikana:
      </div>
      <div class="text">
              Upplýsingar um tónleikana:

      </div>
      <div class="center sub-header nav-link">
        <a href="/frontpage" class="nav-link">
          Kaupa
          <br />Miða
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
          id: 1,
          id2: "1b",
          date: "TBD",
          name: "Lena Willikens",
          stage: "tbd",
          time: "02:00",
          img: require("../../assets/artists/lenawillikens.jpg"),
          descr:
            "Icelandic DJ duo B1B2 creates unique performative club experience playing sets with a mix of afro house and ethno techno beats. The duo has played at various underground events in Denmark and Cape Town as well as Iceland Airwaves & LungA. Playing on all your senses, B1B2 aims to create a dancefloor for you to feel free to dance while feeling loved and respected!!",
          links: {
            tumblr: "dd",
            spotify: "...",
            website: ",,,"
          }
        },
        {
          id: 2,
          id2: "2b",
          date: "TBD",
          name: "Sturla Atlas",
          stage: "tbd",
          time: "02:00",
          descr:
            "Icelandic DJ duo B1B2 creates unique performative club experience playing sets with a mix of afro house and ethno techno beats. The duo has played at various underground events in Denmark and Cape Town as well as Iceland Airwaves & LungA. Playing on all your senses, B1B2 aims to create a dancefloor for you to feel free to dance while feeling loved and respected!!",
          img: require("../../assets/artists/sturlaatlas.jpg"),
          links: {
            tumblr: "sdd",
            spotify: "...",
            facebook: "kk",
            website: ",,,"
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
</style>
