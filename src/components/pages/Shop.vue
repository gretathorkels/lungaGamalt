<template>
  <div class="shop">
      <Header v-bind:menu="'menu'" />
      <Headline v-bind:title="title"/>
      <div class="text-container">

          <div class="sub-line">
              {{$t("shop.firstinfo")}}
          </div>
          </div>
      <table>

          <template v-for="artist in artists">
              <tr
                      v-bind:key="artist.id"
                      @click="toggle(artist.id)"
                      :class="{ opened: opened.includes(artist.id) }"
              >
                  <td class="border-bottom normal">{{artist.time}}</td>

                  <td class="border-bottom normal"><img :src="artist.img" width="50"/></td>
                  <td class="border-bottom name">{{artist.name}}</td>
                  <td class="border-bottom normal">{{artist.stage}}</td>
              </tr>

              <tr class="border" v-if="opened.includes(artist.id)" v-bind:key="artist.id2">
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
                  <td class="border-top" colspan="2">{{artist.descr1}} <br/> <br/>
                      {{artist.descr2}}  <br/> <br/>
                      {{artist.descr3}}
                      <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                          <input type="hidden" name="cmd" value="_s-xclick">
                          <input type="hidden" name="hosted_button_id" :value="artist.value">
                          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
                          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" style="width: 10px; height: 10px;">
                      </form>
                  </td>

              </tr>
          </template>
      </table>

      <div class="text-container">


          <div class="sub-line">
              {{$t("shop.para1")}}
          </div>
          <div class="text-body">
              {{$t("shop.para2")}}
          </div>
      </div>





  </div>
</template>

<script>
import Header from '../shared/Header'
import Headline from '../shared/Headline'

export default {
  name: 'Shop',
  components: {
      Header, 
      Headline
  },
    data() {
        return {
            title: "title.shop",
            opened: [],
            shopitem: [{
                id: 1,
                id2: "1b",
                name: "BUXUR",
                img: require("../../assets/artists/jessylanza.jpg"),
                descr: "ÞEttaer  gegggjuð vara",
                value: "4QV43PPAVP55Q",

            }],
            artists: [


                {
                    id:1,
                    id2: "1b",
                    date: "",
                    time: "2020",
                    name: "Vildi að ég væri á LungA",
                    stage: "Taupoki / Totebag",
                    value: "4QV43PPAVP55Q",
                    descr1: "T-shirt, available in white and yellow from 2010",
                    descr2: "4000kr",
                    descr3:"",
                    img: require("../../assets/webshop/10-tshirt-1-white.jpg"),
                    img2: require("../../assets/webshop/10-tshirt-1-white.jpg"),
                    img3: require("../../assets/webshop/10-tshirt-1-white.jpg"),
                    links: {
                        // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
                        // spotify: "...",
                        // facebook: "kk",
                        // website: ",,,"
                        // youtube: "https://www.youtube.com/watch?v=V3D7EEpdlY4",
                    },
                },

                {
                    id:2,
                    id2: "2b",
                    date: "",
                    time: "2020",
                    name: "Vildi að ég væri á LungA",
                    stage: "Derhúfa / Baseball cap",
                    value: "4QV43PPAVP55Q",
                    descr1: "T-shirt, available in white and yellow from 2010",
                    descr2: "4000kr",
                    descr3:"",
                    img: require("../../assets/webshop/10-tshirt-1-white.jpg"),
                    img2: require("../../assets/webshop/10-tshirt-1-white.jpg"),
                    img3: require("../../assets/webshop/10-tshirt-1-white.jpg"),
                    links: {
                        // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
                        // spotify: "...",
                        // facebook: "kk",
                        // website: ",,,"
                        // youtube: "https://www.youtube.com/watch?v=V3D7EEpdlY4",
                    },
                },

                {
                    id:3,
                    id2: "3b",
                    date: "",
                    time: "2019",
                    name: "wowowowo",
                    stage: "T-shirt",
                    value: "4QV43PPAVP55Q",
                    descr1: "T-shirt, available in white and yellow from 2010",
                    descr2: "4000kr",
                    descr3:"",
                    img: require("../../assets/webshop/19-tshirt-black.png"),
                    img2: require("../../assets/webshop/19-tshirt-green.jpg"),
                    //img3: require("../../assets/webshop/10-tshirt-1-white.jpg"),
                    links: {
                        // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
                        // spotify: "...",
                        // facebook: "kk",
                        // website: ",,,"
                        // youtube: "https://www.youtube.com/watch?v=V3D7EEpdlY4",
                    },
                },

                {
                    id:4,
                    id2: "4b",
                    date: "",
                    time: "2018",
                    name: "~~~~~",
                    stage: "Totebag",
                    value: "4QV43PPAVP55Q",
                    descr1: "T-shirt, available in white and yellow from 2010",
                    descr2: "4000kr",
                    descr3:"",
                    img: require("../../assets/webshop/18-totebag-blue.jpg"),
                    //img2: require("../../assets/webshop/10-tshirt-1-white.jpg"),
                   // img3: require("../../assets/webshop/10-tshirt-1-white.jpg"),
                    links: {
                        // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
                        // spotify: "...",
                        // facebook: "kk",
                        // website: ",,,"
                        // youtube: "https://www.youtube.com/watch?v=V3D7EEpdlY4",
                    },
                },


                {
                    id:5,
                    id2: "5b",
                    date: "",
                    time: "2018",
                    name: "~~~~~",
                    stage: "T-shirt",
                    value: "4QV43PPAVP55Q",
                    descr1: "T-shirt, available in white and yellow from 2010",
                    descr2: "4000kr",
                    descr3:"",
                    img: require("../../assets/webshop/18-totebag-blue.jpg"),
                    //img2: require("../../assets/webshop/10-tshirt-1-white.jpg"),
                    // img3: require("../../assets/webshop/10-tshirt-1-white.jpg"),
                    links: {
                        // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
                        // spotify: "...",
                        // facebook: "kk",
                        // website: ",,,"
                        // youtube: "https://www.youtube.com/watch?v=V3D7EEpdlY4",
                    },
                },

                {
                    id:6,
                    id2: "6b",
                    date: "",
                    time: "2017",
                    name: "Thumbs up",
                    stage: "Taupoki/Totebag",
                    value: "4QV43PPAVP55Q",
                    descr1: "T-shirt, available in white and yellow from 2010",
                    descr2: "4000kr",
                    descr3:"",
                    img: require("../../assets/webshop/17-totebag.jpg"),
                    // img2: require("../../assets/webshop/10-tshirt-3-black.jpg"),
                    // img3: require("../../assets/webshop/10-tshirt-3-white.jpg"),
                    links: {
                        // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
                        // spotify: "...",
                        // facebook: "kk",
                        // website: ",,,"
                        // youtube: "https://www.youtube.com/watch?v=V3D7EEpdlY4",
                    },
                },

                {
                    id:7,
                    id2: "7b",
                    date: "",
                    time: "2017",
                    name: "Thumbs up",
                    stage: "Sweatshirt",
                    value: "4QV43PPAVP55Q",
                    descr1: "T-shirt, available in white and yellow from 2010",
                    descr2: "4000kr",
                    descr3:"",
                    img: require("../../assets/webshop/17-sweatshirt.jpg"),
                    // img2: require("../../assets/webshop/10-tshirt-3-black.jpg"),
                    // img3: require("../../assets/webshop/10-tshirt-3-white.jpg"),
                    links: {
                        // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
                        // spotify: "...",
                        // facebook: "kk",
                        // website: ",,,"
                        // youtube: "https://www.youtube.com/watch?v=V3D7EEpdlY4",
                    },
                },

                {
                    id:8,
                    id2: "8b",
                    date: "",
                    time: "2015",
                    name: "2015 LungA",
                    stage: "Taupoki / Totebag",
                    value: "4QV43PPAVP55Q",
                    descr1: "T-shirt, available in white and yellow from 2010",
                    descr2: "4000kr",
                    descr3:"",
                    img: require("../../assets/webshop/15-totebag.png"),
                    // img2: require("../../assets/webshop/10-tshirt-3-black.jpg"),
                    // img3: require("../../assets/webshop/10-tshirt-3-white.jpg"),
                    links: {
                        // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
                        // spotify: "...",
                        // facebook: "kk",
                        // website: ",,,"
                        // youtube: "https://www.youtube.com/watch?v=V3D7EEpdlY4",
                    },
                },

                {
                    id:9,
                    id2: "9b",
                    date: "",
                    time: "2011",
                    name: "2011 LungA",
                    stage: "T-shirt",
                    value: "4QV43PPAVP55Q",
                    descr1: "T-shirt, available in white and yellow from 2010",
                    descr2: "4000kr",
                    descr3:"",
                    img: require("../../assets/webshop/11-tshirt.jpg"),
                   // img2: require("../../assets/webshop/10-tshirt-3-black.jpg"),
                   // img3: require("../../assets/webshop/10-tshirt-3-white.jpg"),
                    links: {
                        // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
                        // spotify: "...",
                        // facebook: "kk",
                        // website: ",,,"
                        // youtube: "https://www.youtube.com/watch?v=V3D7EEpdlY4",
                    },
                },
                {
                    id:10,
                    id2: "10b",
                    date: "",
                    time: "2010",
                    name: "LungA Lengi Lifi!",
                    stage: "T-shirt",
                    value: "4QV43PPAVP55Q",
                    descr1: "T-shirt, available in white and yellow from 2010",
                    descr2: "4000kr",
                    descr3:"",
                    img: require("../../assets/webshop/10-tshirt-3-yellow.jpg"),
                    img2: require("../../assets/webshop/10-tshirt-3-black.jpg"),
                    img3: require("../../assets/webshop/10-tshirt-3-white.jpg"),
                    links: {
                        // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
                        // spotify: "...",
                        // facebook: "kk",
                        // website: ",,,"
                        // youtube: "https://www.youtube.com/watch?v=V3D7EEpdlY4",
                    },
                },

                {
                    id:11,
                    id2: "11b",
                    date: "",
                    time: "2010",
                    name: "Hæ ég heiti LungA og ég er 10 ára",
                    stage: "T-shirt",
                    value: "4QV43PPAVP55Q",
                    descr1: "T-shirt, available in white and yellow from 2010",
                    descr2: "4000kr",
                    descr3:"",
                    img: require("../../assets/webshop/10-tshirt-1-yellow.jpg"),
                    img2: require("../../assets/webshop/10-tshirt-1-white.jpg"),
                    // img3: require("../../assets/webshop/10-tshirt-1-yellow.jpg"),
                    links: {
                        // soundcloud: "https://soundcloud.com/violet/sets/bed-of-roses-190754229"
                        // spotify: "...",
                        // facebook: "kk",
                        // website: ",,,"
                        // youtube: "https://www.youtube.com/watch?v=V3D7EEpdlY4",
                    },
                },


                {
                    id: 12,
                    id2: "12b",
                    date: "",
                    time: "2010",
                    name: "Mér leið eins og baðkari",
                    stage: "T-shirt",
                    value: "4QV43PPAVP55Q",
                    descr1: "T-shirt available in black, yellow and grey from 2010, with the text:",
                    descr2: "Mér leið einsog baðkari fullt af drullugu vatni er ég keyrði upp á fjallið frá Egilsstöðum í áttina til Seyðisfjarðar. Þegar ég kom niður hinn endann og sá fallegan sólbaðaðan bæinn bíða mín var eins og tappanum hefði skyndilega verið kippt úr",
                    descr3:"",
                    img: require("../../assets/webshop/10-tshirt-2-white.jpg"),
                    img2: require("../../assets/webshop/10-tshirt-2-white.jpg"),
                    img3: require("../../assets/webshop/10-tshirt-2-white.jpg"),

                    links: {
                       // soundcloud: "https://soundcloud.com/dkmntl/lena-willikens-at-dekmantel-festival-2017",
                      //  spotify: "https://open.spotify.com/artist/6ut6UGbmxITsrTO3byNE2E",
                       // instagram: "https://www.instagram.com/lena_willikens/",
                    },
                    htmlbutton: <div>hæ</div>
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

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.headline {
    text-align: center;
}
.sub-line{
text-align:center;
}
img {
    max-width: 500px;
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
th {
    /* border-bottom: solid 2px #000; */
    font-size: 30px;
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
    font-size: 30px;
    font-weight: 600;
}
td.border-bottom {
    border-top: solid 2px #000;
    padding-top: 10px;
}
.center {
    text-align: center;
}

</style>
