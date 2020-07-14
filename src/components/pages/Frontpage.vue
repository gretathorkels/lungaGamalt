<template>
  <div class="frontpage">
    <Header v-bind:menu="'nomenu'" />

    <div class="logo-container">
      <img src="../../assets/LungALogo2020.svg" />
    </div>

      <div class="headline">
          {{$t("frontpage.date")}}
      </div>

   <div class="navigation"  >
       <div class="skew-container link-container" v-bind:class="{ rightalign: this.$i18n.locale=='en'}"><div ><router-link  class="nav-link" v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}" to="/about">{{ $t('links.about') }}</router-link> </div></div>
       <div class="skew-container link-container" v-bind:class="{ rightalign: this.$i18n.locale=='en'}"><div ><router-link class="nav-link" v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}" to="/workshops">{{ $t('links.workshops') }}</router-link></div></div>
       <div class="skew-container link-container" v-bind:class="{ rightalign: this.$i18n.locale=='en'}"><div ><router-link class="nav-link" v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}" to="/concerts">{{ $t('links.concerts') }}</router-link></div></div>
       <div class="skew-container link-container main-con">
        <div v-bind:class="{right: this.$i18n.locale=='isl', rightalign: this.$i18n.locale=='en'}">
          <router-link v-if="this.$i18n.locale=='isl'" class="nav-link main-con" to="/lungalab">
            <!--<span class="subtitle icelandic">{{$t('links.lungalab2')}}</span>-->
            <span class="main-container">{{ $t('links.lungalab') }}</span>
          </router-link>
          <router-link v-else class="nav-link main-con" to="/lungalab">
            <span class="main-container">{{ $t('links.lungalab') }}</span>
           <!-- <span class="subtitle  english">{{$t('links.lungalab2')}}</span>-->
          </router-link>
        </div>
      </div>
      <div class="skew-container link-container" v-bind:class="{ rightalign: this.$i18n.locale=='en'}"><div ><router-link class="nav-link" v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}" to="/youthexchange">{{ $t('links.youthexchange') }}</router-link></div></div>
      <div class="skew-container link-container" v-bind:class="{ rightalign: this.$i18n.locale=='en'}"><div ><router-link class="nav-link" v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}" to="/eventindex">{{ $t('links.eventindex') }}</router-link></div></div>
      <div class="skew-container link-container" v-bind:class="{ rightalign: this.$i18n.locale=='en'}"><div ><router-link class="nav-link" v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}" to="/shop">{{ $t('links.shop') }}</router-link></div></div>
       <div class="skew-container link-container" v-bind:class="{ rightalign: this.$i18n.locale=='en'}"><div ><router-link class="nav-link" v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}" to="/applications">{{ $t('links.applications') }}</router-link></div></div>
        
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
        <div class="skew-container link-container divider" v-bind:class="{ rightalign: this.$i18n.locale=='en'}">
          <div>
            <router-link
              class="nav-link"
              v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}"
              to="/contact"
            >{{ $t('links.contact') }}</router-link>
          </div>
      </div>
      <Footer />
    </div>
    <Modal :isOpen="open" :title="'Hæ'" @onClose="handleClose" />
  </div>
</template>

<script>
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Modal from "../shared/Modal";

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
  components: { Header, Footer, Modal },
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
  /* margin-right: 400px; */
}
/* .subtitle > .left {
  margin-right: 25rem;
}
.subtitle > .right {
  margin-left: 25rem;
} */
.rightalign {
  text-align: right;
}
/* .left {
  padding-left: 25rem;
  text-align: right;
} */
/* .right {
  margin-right: 25rem;
} */
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

  /* text-align: left; */
  color: black;
}
/* .skew-container .skew {
    -ms-transform: skew(10deg, 0); 
    -webkit-transform: skew(10deg, 0); 
    transform: skew(10deg, 0);  
} */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  font-weight: 600;
  font-size: 3rem;
  color: #000000;
  border-bottom: #000 2px solid;
}
.logo-container > img {
  max-width: 70%;
}
.logo-container {
  text-align: center;
}
</style>
