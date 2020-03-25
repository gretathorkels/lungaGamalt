
<template>
  <div class="eventindex">
    <Header v-bind:menu="'menu'" />
    <Headline v-bind:title="title" />
    <div class="head-container">
      <div class="sub-text">{{$t("eventindex.para1")}}</div>
    </div>

    <div class="eventindex-container">
      <table v-if="this.$i18n.locale == 'isl'">
        <tr class="header__container">
          <th class="sub-text">13.07</th>
          <th class="sub-text" colspan="3">Mánudagur</th>
        </tr>
        <template v-for="(event, index) in events">
          <tr :key="index" @click="toggle(index)" :class="{ opened: opened.includes(index) }">
            <td class="border-bottom normal">{{event.attributes.timasetning}}</td>
            <td class="border-bottom normal event__name">{{event.attributes.nafn}}</td>
            <td class="border-bottom normal">{{event.attributes.tegund}}</td>
            <td class="border-bottom normal">{{event.attributes.stadsetning}}</td>
          </tr>
          <tr class="border" v-if="opened.includes(index)" v-bind:key="event.attributes.nafn">
            <td class="border-top" colspan="2" >
              <div class="html-container" v-html="event.html"></div>
              <div class="event__about-author">
                <div>{{event.attributes.um_hofund}}</div>
                <div>{{event.attributes.um_annan_hofund}}</div>
              </div>
            </td>
            <td class="border-top" colspan="2">
              {{imageLink(event.attributes.vidburdarmynd)}}
              <img class="img-child" :src="event.attributes.vidburdarmynd" />
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
      <table v-else></table>
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
  </div>
</template>
  
<script>
//import marked from 'marked'
import Header from "../shared/Header";
import Headline from "../shared/Headline";

//import md from 'markdown-it';
export default {
  name: "Eventindex",
  components: {
    Header,
    Headline
  },
  data() {
    const resolve = require.context("../../../posts/events", false, /\.md$/);
    const imports = resolve.keys().map(key => {
      const [, name] = key.match(/\/(.+)\.md$/);
      console.log(name);
      //console.log(key)
      return resolve(key);
    });
    return {
      prefix: "events",
      events: imports,
      title: "title.eventindex",
      opened: []
    };
  },
 
  methods: {
    imageLink(im){
      console.log(im)
      var newLink = im.substring(17);
      console.log(newLink)
      return "hæ"
    },
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
  
  <style scoped>
.head-container {
  display: flex;
}
.footer-container {
  display: flex;
  justify-content: space-between;
  margin: 0 10px 0 10px;
}
.header__container th.sub-text {
  border-bottom: solid 2px #000000;
  padding-left: 40px;
  padding-bottom: 20px;
  
}
td.border-bottom{
  padding-left: 40px;
}
.event__name{
  font-size: 36px;

}
.event__about-author{
  display: flex;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
  justify-content: space-between;
}
.event__about-author > div {
  padding: 0 40px 0 40px;
  
}
.sub-text {
  /* Headline 2 */
  font-weight: 600;
  font-size: 48px;
  margin-left: 40px;
  text-align: left;
  color: #000000;
}
td {
  width: 1%;
}
.html-container {
  padding-left: 40px;
  line-height: 29px;
}
table {
  /* border-top: 2px solid #000000; */
  /* text-align: center; */
  border-spacing: 0;
  border-bottom: 2px solid #000000;
  font-weight: 600;
  font-size: 24px;
  line-height: 43px;
  padding: 15px 0 15px 0;
  color: #000000;
  /* margin-left: 20px; */

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
