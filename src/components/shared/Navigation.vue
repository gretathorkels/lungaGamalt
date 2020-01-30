<template>
  <div class="navigation">
    <div v-if="menu === 'menu'" class="nav-menu" @click="toggle()">{{ $t(title )}}</div>
    <div class="navigation-container" :class="{hidden: this.menuActive}" @click.prevent="toggle">
      <div class="skew-container">
        <div v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}">
          <router-link class="nav-link" to="/about">{{ $t('links.about') }}</router-link>
        </div>
      </div>
      <div class="skew-container">
        <div v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}">
          <router-link class="nav-link" to="/workshops">{{ $t('links.workshops') }}</router-link>
        </div>
      </div>
      <div class="skew-container">
        <div v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}">
          <router-link class="nav-link" to="/concerts">{{ $t('links.concerts') }}</router-link>
        </div>
      </div>
      <div class="skew-container">
        <div
          class="center"
          v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}"
        >
          <router-link
            v-if="this.$i18n.locale=='isl'"
            class="nav-link center"
            to="/lungalab"
          >{{$t('links.lungalab2')}} {{ $t('links.lungalab') }}</router-link>
          <router-link
            v-else
            class="nav-link center"
            to="/lungalab"
          >{{ $t('links.lungalab') }} {{$t('links.lungalab2')}}</router-link>
        </div>
      </div>
      <!-- <div class="skew-container"><div class="skew"><router-link class="nav-link" to="/openstudios">{{ $t('links.openstudios') }}</router-link></div></div> -->
      <div class="skew-container">
        <div v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}">
          <router-link class="nav-link" to="/eventindex">{{ $t('links.eventindex') }}</router-link>
        </div>
      </div>
      <div class="skew-container">
        <div v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}">
          <router-link class="nav-link" to="/applications">{{ $t('links.applications') }}</router-link>
        </div>
      </div>
    <div class="little-nav">
      <div class="grid-container">
        <div class="skew-container">
          <div
            v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}"
          >
            <router-link class="nav-link" to="/sponsors">{{ $t('links.sponsors') }}</router-link>
          </div>
        </div>
        <div class="skew-container divider">
          <div
            v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}"
          >
            <router-link class="nav-link" to="/contact">{{ $t('links.contact') }}</router-link>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    menu: String
  },
  data: () => ({
    menuActive: true,
    title: "links.menu"
  }),
  methods: {
    toggle() {
      this.menuActive = !this.menuActive;
      if (this.title === "x") {
        this.title = "links.menu";
      } else this.title = "x";
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation {
  /* position: fixed; */
  /* z-index: 99; */
}
.hidden {
  display: none;
}
.little-nav .skew-container {
  font-size: 48px;
}
.nav-link{
  background-color: white;
  /* z-index: 99; */
  max-height: 20px;
}
.skew-container {
  border-top: 2px solid #000;
  max-width: 99.9%;
  text-decoration: none;
  box-sizing: border-box;
  font-size: 66px;
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
  font-size: 48px;
  color: #000000;
  border-bottom: #000 2px solid;
}
/* .logo-container > img {
  width: 80%;
} */
</style>
