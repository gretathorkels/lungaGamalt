
<template>
<div class="eventindex">
      <Header v-bind:menu="'menu'" />
    <Headline v-bind:title="title"/>
 <div class="head-container">
   <div class="sub-text">{{$t("eventindex.para1")}}</div>
 </div>

    <div class="eventindex-container">
    <table v-if="this.$i18n.locale == 'isl'">
      <tr>
        <th>13.07</th>
        <th>Mánudagur</th>
        <th></th>
        <th></th>
      </tr>
      <template  v-for="(event, index) in events"  >
        <tr 
        :key="index"
        @click="toggle(index)"
          :class="{ opened: opened.includes(index) }"

        >
          <td class="border-bottom normal">{{event.attributes.timasetning}}</td>
          <td class="border-bottom normal">{{event.attributes.nafn}}</td>
          <td class="border-bottom normal">{{event.attributes.tegund}}</td>
          <td class="border-bottom normal">{{event.attributes.stadsetning}}</td>
        </tr>
        <tr class="border" v-if="opened.includes(index)" v-bind:key="event.attributes.nafn">
          <td class="border-top" colspan="2" v-html="event">
            {{event}}
            </td>
            <td class="border-top" colspan="2">
            <img :src="event.attributes.mynd" />
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
    <table v-else ></table>
    </div>
    <br>
    <div class="footer-container">
     <!--<div class="text">
        {{$t("workshops.weekinfo")}}
      </div>
      <div class="text">
        {{$t("workshops.fridayinfo")}}
      </div>-->
    </div>
    <div class="img-container">
            <img class="img-child" src="../../assets/tumblr/15.jpg">
        </div>



</div>
</template>
  
<script>
//import marked from 'marked'
import Header from '../shared/Header'
import Headline from '../shared/Headline'

//import md from 'markdown-it';
export default {
  name: 'Eventindex',
  components: {
    Header, Headline
  },
  data(){
    // const language = this.$i18n.locale == 'isl' ? "icelandic" : "english";
    // const path = "../../../posts/"+language+"/events";
    // console.log(path)
    const resolve = require.context("../../../posts/events", false, /\.md$/) 
    const imports = resolve.keys().map(key => {
      const [, name] = key.match(/\/(.+)\.md$/);
      console.log(name)
      return resolve(key);
    })
    return {
      // prefix: 'events',
      events: imports,
      title: 'title.eventindex',
      opened: [],
    }
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
  
  <style scoped>
  .head-container {
  display: flex;
}
.footer-container {
  display: flex;
  justify-content: space-between;
  margin: 0 10px 0 10px;
}
.sub-text{

/* Headline 2 */
font-weight: 600;
font-size: 48px;
margin-left: 40px;
text-align: left;
color: #000000;


}
.table {
border-top: 2px solid #000000;
text-align:center;
border-bottom: 2px solid #000000;
font-weight: 600;
font-size: 36px;
line-height: 43px;
padding: 15px 0 15px 0;
color: #000000;

}
.subtext {
font-weight: 600;
font-size: 36px;

color: #000000;

}
.text{

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
max-width: 80%;
  height: auto;
  align-self: center;
margin:20px;
}
</style>
