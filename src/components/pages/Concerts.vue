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

    <div class="center sub-header nav-link">
      <a
          class="nav-link"
          href="https://tix.is/is/event/13027/"
          target="_blank"
      >
        {{ $t("concerts.ticket") }}
      </a>
    </div>
    <table>
      <tr>
        <!-- Breyttir Headurum hér:
              Ef þú villt taka út dálka þá tekuru út þá sem eru samsvarandi, ss date væri nr 1.. etc
           -->
        <th>Artist</th><!--1-->
        <th>Place</th><!-- 2 -->
      </tr>
      <template v-for="concert in concerts">
        <tr
            v-bind:key="concert.attributes.name"
            @click="toggle(concert.attributes.id)"
            :class="{ opened: opened.includes(concert.attributes.id) }"
        >

          <td class="border-bottom name">{{ concert.attributes.name }}</td><!--1-->

          <td class="border-bottom Width">{{ concert.attributes.time }}</td> <!--2 -->

        </tr>
        <tr
            class="border"
            v-if="opened.includes(concert.attributes.id)"
            v-bind:key="concert.attributes.id2"
        >
          <td class="border-top" colspan="1">
            {{ concert.attributes.descr1 }} <br/>
            <br/>
            {{ concert.attributes.descr2 }} <br/>
            <br/>
            {{ concert.attributes.descr3 }}
          </td>
          <td class="border-top" colspan="1">
            <img :src="concert.attributes.img"/>
            <div class="grid-container">
              <div v-if="!!concert.attributes.soundcloud">
                <a
                    class="nav-link"
                    :href="concert.attributes.soundcloud"
                    target="_blank"
                >Soundcloud</a
                >
              </div>
              <div v-if="!!concert.attributes.spotify">
                <a class="nav-link" :href="concert.attributes.spotify" target="_blank"
                >Spotify</a
                >
              </div>
              <div v-if="!!concert.attributes.instagram">
                <a
                    class="nav-link"
                    :href="concert.attributes.instagram"
                    target="_blank"
                >Instagram</a
                >
              </div>
              <div v-if="!!concert.attributes.youtube">
                <a class="nav-link" :href="concert.attributes.youtube" target="_blank"
                >Youtube</a
                >
              </div>

              <div v-if="!!concert.attributes.facebook">
                <a
                    class="nav-link"
                    :href="concert.attributes.facebook"
                    target="_blank"
                >Facebook</a
                >
              </div>
              <div v-if="!!concert.attributes.website">
                <a class="nav-link" :href="concert.attributes.website" target="_blank"
                >Website</a
                >
              </div>
            </div>
          </td>
        </tr>
      </template>
    </table>
    <br><br>
    <div class="center sub-header nav-link">
      <a
          class="nav-link"
          href="https://tix.is/is/event/13027/"
          target="_blank"
      >
        {{ $t("concerts.ticket") }}
      </a>
    </div>

    <div class="img-container">
      <img class="img-child" src="../../assets/tumblr/2021-6.jpg"/>
    </div>
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
    let resolve
    if (this.$i18n.locale == 'isl') {
      resolve = require.context("../../../content/concerts/isl", true, /\.md$/);
    } else resolve = require.context("../../../content/concerts/en", true, /\.md$/);

    const imports = resolve.keys().map(key => {
      // const [, name] = key.match(/\/(.+)\.md$/);
      // console.log(name)

      return resolve(key);
    })
    return {
      prefix: "concerts",
      concerts: imports,
      //HENDA
      title: "title.concerts",
      opened: [],

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
    getContent() {
      let resolve
      if (this.$i18n.locale == 'isl') {
        resolve = require.context("../../../content/concerts/isl", true, /\.md$/);
      } else resolve = require.context("../../../content/concerts/en", true, /\.md$/);

      this.concerts = resolve.keys().map(key => {
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
  mounted() {
    this.getContent();
  }
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
}

.Width {
  font-size: 24px;
  font-weight: 600;
  text-align: center;
}

.border-top {
  border-bottom: 2px solid #000;
}

.grid-container,
tr {
  vertical-align: top;
  padding:5px;
}
tr {
  cursor: pointer;
}
td.border-bottom.name:hover {color: #a3ffa3}
td.border-top {
  cursor: auto;
}


img {
  width: 67rem;
}


.name {
  font-size: 36px;
  font-weight: 600;
  text-align: center;
}
.nav-link:hover{
  color: #a3ffa3;
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


.center {
  text-align: center;
}

.center a:hover {
  color: #00FF38;
}

.center a:visited {
  color: #000000;
}

.sub-header {
  text-align: center;
  padding: 20px;
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
  padding: 20px;
  line-height: 105%;
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
