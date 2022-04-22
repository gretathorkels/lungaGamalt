<template>

  <div class="navigation" :class="{open: !this.menuActive}">
    <div v-if="menu === 'menu'" class="nav-menu" @click="toggle()">{{ $t(title )}}</div>

    <div class="navigation-container" :class="{hidden: this.menuActive}" @click.prevent="toggle">
      <div class="skew-container">
        <div v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}">
          <router-link class="nav-link link-container" to="/">{{ $t('links.home') }}</router-link>
        </div>
      </div>
      <div class="skew-container">
        <div v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}">
          <router-link class="nav-link link-container" to="/about">{{ $t('links.about') }}</router-link>
        </div>
      </div>
      <div class="skew-container">
        <div v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}">
          <router-link class="nav-link link-container" to="/workshops">{{ $t('links.workshops') }}</router-link>
        </div>
      </div>
      <div class="skew-container">
        <div v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}">
          <router-link class="nav-link link-container" to="/concerts">{{ $t('links.concerts') }}</router-link>
        </div>
      </div>
      <div class="skew-container main-con">
        <div v-bind:class="{right: this.$i18n.locale=='isl', rightalign: this.$i18n.locale=='en'}">
          <router-link v-if="this.$i18n.locale=='isl'" class="nav-link main-con" to="/lungalab">
            <!--<span class="subtitle icelandic">{{$t('links.lungalab2')}}</span>-->
            <span class="main-container">{{ $t('links.lungalab') }}</span>
          </router-link>
          <router-link v-else class="nav-link main-con" to="/lungalab">
            <span class="main-container">{{ $t('links.lungalab') }}</span>
            <!--<span class="subtitle  english">{{$t('links.lungalab2')}}</span>-->
          </router-link>
        </div>
      </div>
      <div class="skew-container">
        <div v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}">
          <router-link class="nav-link link-container" to="/youthexchange">{{ $t('links.youthexchange') }}</router-link>
        </div>
      </div>
      <div class="skew-container">
        <div v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}">
          <router-link class="nav-link link-container" to="/eventindex">{{ $t('links.eventindex') }}</router-link>
        </div>
      </div>

      <div class="skew-container">
        <div v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}">
          <router-link class="nav-link link-container" to="/shop">{{ $t('links.shop') }}</router-link>
        </div>
      </div>

      <div class="skew-container">
        <div v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}">
          <router-link class="nav-link link-container" to="/applications">{{ $t('links.applications') }}</router-link>
        </div>
      </div>

      <div class="skew-container">
        <div v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}">
          <router-link class="nav-link link-container" to="/contact">{{ $t('links.contact') }}</router-link>
        </div>
      </div>
     <!-- <div class="skew-container">
        <div v-bind:class="{icelandic: this.$i18n.locale=='isl', english: this.$i18n.locale=='en'}">
          <router-link class="nav-link link-container" to="/sponsors">{{ $t('links.sponsors') }}</router-link>
        </div>
      </div>-->

    </div>
  </div>
</template>

<script>


  export default {
  name: "Navigation",
  components: {  },
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
      if (this.title === "×") {
        this.title = "links.menu";
      } else this.title = "×";
    }
  }
};


</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hidden {
  display: none;
}
.main-con{
  width: 100%;
}
.subtitle {
  display: inline-block;
  font-size: 3rem;
  width: 38%;
  /* margin-right: 400px; */
}
.rightalign {
  text-align: right;
}
.little-nav .skew-container {
  font-size: 48px;
}
.nav-link {
  /* background-color: white; */
  /* z-index: 99; */
  max-height: 20px;
}
.skew-container>div>a{
  background-color: #fff;
}
.skew-container>div>a>span{
  background-color: #fff;
}
.skew-container>div>a>span:hover{
  background-color: #000;
  color: white;
}
.skew-container {
  border-top: 2px solid #000;
  border-bottom: 0px;
  border-left: 0px;
  border-right:0px;
  max-width: 99.9%;
  text-decoration: none;
  box-sizing: border-box;
  font-weight: 600;
  color: black;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  font-weight: 600;
  color: #000000;
  border-bottom: #000 2px solid;
  align-items: center;
}
.navigation {
  font-size: 30px;
  margin-left: 70%;
  width: fit-content;
  align-self: flex-end;
  background-color: white;
}

.navigation-container{
  overflow: scroll;
}
.open {
  width: 100%;
  margin-left: 0;
}

  .nav-menu {
    background-color: transparent;
    color: black;
    font-size: 48px;

  }
.nav-menu:hover {
  background-color: transparent;
  color: #00FF38;
  font-size: 48px;
}
</style>
