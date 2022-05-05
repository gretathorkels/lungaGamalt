<template>
  <div class="frontpage">
    <Header v-bind:menu="'nomenu'" />
    <div class="logo-container">
      <img src="../../assets/22-banner.png" />
    </div>


    <div class="center sub-header">
      <a
          href="https://tix.is/is/event/13027/"
          target="_blank"
      >
        {{ $t("concerts.ticket") }}
      </a>
    </div>

   <div class="navigation"  >
       <div class="skew-container link-container" v-bind:class="{ rightalign: this.$i18n.locale=='en'}">
           <div>
               <router-link  class="nav-link" v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}" to="/about">
                   {{ $t('links.about') }}
               </router-link>
           </div>
       </div>

       <div class="skew-container link-container" v-bind:class="{ rightalign: this.$i18n.locale=='en'}">
           <div>
               <router-link class="nav-link" v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}" to="/workshops">
                   {{ $t('links.workshops') }}
               </router-link>
           </div>
       </div>

       <div class="skew-container link-container" v-bind:class="{ rightalign: this.$i18n.locale=='en'}">
           <div>
               <router-link class="nav-link" v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}" to="/concerts">
                   {{ $t('links.concerts') }}
               </router-link>
           </div>
       </div>

       <div class="skew-container link-container main-con">
           <div v-bind:class="{right: this.$i18n.locale=='isl', rightalign: this.$i18n.locale=='en'}">
          <router-link v-if="this.$i18n.locale=='isl'" class="nav-link main-con" to="/lungalab">
            <span class="main-container">{{ $t('links.lungalab') }}</span>
          </router-link>

          <router-link v-else class="nav-link main-con" to="/lungalab">
            <span class="main-container">{{ $t('links.lungalab') }}</span>
          </router-link>
        </div>
      </div>

      <div class="skew-container link-container" v-bind:class="{ rightalign: this.$i18n.locale=='en'}">
          <div>
              <router-link class="nav-link" v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}" to="/youthexchange">
                  {{ $t('links.youthexchange') }}
              </router-link>
          </div>
      </div>

       <div class="skew-container link-container" v-bind:class="{ rightalign: this.$i18n.locale=='en'}">
           <div>
               <router-link class="nav-link" v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}" to="/eventindex">
                   {{ $t('links.eventindex') }}
               </router-link>
           </div>
       </div>

      <div class="skew-container link-container" v-bind:class="{ rightalign: this.$i18n.locale=='en'}">
          <div>
              <router-link class="nav-link" v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}" to="/shop">
                  {{ $t('links.shop') }}
              </router-link>
          </div>
      </div>

       <!--<div class="skew-container link-container" v-bind:class="{ rightalign: this.$i18n.locale=='en'}">
           <div>
               <router-link class="nav-link" v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}" to="/applications">
                   {{ $t('links.applications') }}
               </router-link>
           </div>
       </div>-->

       <div class="skew-container link-container" v-bind:class="{ rightalign: this.$i18n.locale=='en'}">
           <div>
               <router-link class="nav-link" v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}" to="/contact">
                   {{ $t('links.contact') }}
               </router-link>
           </div>
       </div>


    </div>
    <div class="little-nav ">
      <!-- <div class="grid-container"> -->
        <!-- <div class="skew-container link-container" v-bind:class="{ rightalign: this.$i18n.locale=='en'}">
          <div>
            <router-link
              class="nav-link"
              v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}"
              to="/sponsors"
            >{{ $t('links.sponsors') }}</router-link>
          </div>
        </div> -->

      <Footer />
    </div>

  </div>
</template>

<script>
import Header from "../shared/Header";
import Footer from "../shared/Footer";



export default {
  name: "Frontpage",
  data() {
   return {
      open: true,

   }
  },
  props: {
    lang: String
  },
  components: { Header, Footer, },
  methods: {
    handleClose(){
      this.open = !this.open;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-con{
  width: 100%;
}

.headline{
    text-align:center;
}
.subtitle {
  display: inline-block;
  font-size: 3rem;
  width: 38%;
}

.center {
  text-align: center;
}

.center a:hover{
  color: #00FF38;
}

.center a:visited{
  color: #000000;
}

.sub-header {
  text-align: center;
  padding: 20px;
}

.rightalign {
  text-align: right;
}

.nav-link {
  display: inline-block;
}

.little-nav .skew-container {
  font-size: 3rem;
}
.skew-container {
  border-top: 2px solid #000;
  max-width: 99.9%;
  text-decoration: none;
  box-sizing: border-box;
  font-size: 96px;
  font-weight: 600;
    color: black;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  font-weight: 600;
  font-size: 3rem;
  color: #000000;
  border-bottom: #000 2px solid;
}
.logo-container > img {
  max-width: 90%;
}
.logo-container {
  text-align: center;
}
</style>
