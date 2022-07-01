<template>
  <div class="eventindex">
    <Header v-bind:menu="'menu'"/>
    <Headline v-bind:title="title"/>
    <div class="head-container">
      <div class="sub-text">{{ $t("eventindex.para1") }}</div>
      <div class="text">{{ $t("eventindex.tba") }}</div>
    </div>



  <div class="eventindex-container">
      <table v-if="ready">
        <tr>
          <th>Dagur</th>
          <th>Klukkan</th>
          <th>Hvað</th>
          <th>Tegund</th>
          <th>Hvar</th>
        </tr>
        <template v-for="events in eventlist">
          <tr
              v-bind:key="events.attributes.id"
              @click="toggle(events.attributes.id)"
              :class="{ opened: opened.includes(events.attributes.id) }"
          >
            <td class="border-bottom normal">{{events.attributes.date}}</td>
            <td class="border-bottom normal">{{events.attributes.time}}</td>
            <td class="border-bottom name">{{events.attributes.name}}</td>
            <td class="border-bottom normal">{{events.attributes.type}}</td>
            <td class="border-bottom normal">{{events.attributes.where}}</td>

          </tr>
          <tr
              class="border"
              v-if="opened.includes(events.attributes.id)"
              v-bind:key="events.attributes.id2"
          >
            <td class="border-top" colspan="3">
              {{events.attributes.descr1}} <br/>
              <br/>
              {{events.attributes.descr2}} <br/>
              <br/>
              {{events.attributes.descr3}}
              <br />
              <div class="small">{{events.attributes.artist1}}</div>
              <div class="small">{{events.attributes.artist2}}</div>
            </td>


            <td class="border-top" colspan="2">

              <img :src="events.attributes.img"/>
              <div class="grid-container">
                <div v-if="events.attributes.photocredit">{{ $t("eventindex.photocredit") }} {{events.attributes.photocredit}}</div>
              </div>
              <div class="grid-container">
                <div v-if="events.attributes.soundcloud">
                  <a class="nav-link" :href="events.attributes.soundcloud" target="_blank">Soundcloud</a>
                </div>
                <div v-if="events.attributes.spotify">
                  <a class="nav-link" :href="events.attributes.spotify" target="_blank">Spotify</a>
                </div>
                <div v-if="events.attributes.instagram">
                  <a class="nav-link" :href="events.attributes.instagram" target="_blank">Instagram</a>
                </div>
                <div v-if="events.attributes.youtube">
                  <a class="nav-link" :href="events.attributes.youtube" target="_blank">Youtube</a>
                </div>
                <div v-if="events.attributes.facebook">
                  <a class="nav-link" :href="events.attributes.facebook" target="_blank">Facebook</a>
                </div>
                <div v-if="events.attributes.website">
                  <a class="nav-link" :href="events.attributes.website" target="_blank">Website</a>
                </div>
              </div>
            </td>


          </tr>
        </template>
      </table>
    </div>


    <br/>
    <div class="footer-container">
      <!--<div class="text">
        {{$t("workshops.weekinfo")}}
      </div>
      <div class="text">
        {{$t("workshops.fridayinfo")}}
      </div>-->
    </div>
   <!-- <div class="img-container">
      <img class="img-child" src="../../assets/tumblr/15.jpg"/>
    </div>-->

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
      resolve = require.context("../../../content/events/isl", true, /\.md$/);
    }
    else resolve = require.context("../../../content/events/en", true, /\.md$/);
     
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

.name {
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 90%;
}

.small {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 90%;
}

.normal {
  line-height: 90%;
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
