<template>
  <div>
    <div class="header">
      <Navigation v-bind:menu="menu"/>
    </div>

    <div class="language-thing">
      <div class="language-options pointer-mouse">
        <div v-bind:class="{active: this.$i18n.locale == 'isl'}" @click="changeLang('isl')" class="checkbox"></div>
        <span class="text" @click="changeLang('isl')">Íslenska</span>
        <div v-bind:class="{ active: this.$i18n.locale == 'en' }" @click="changeLang('en')" class="checkbox"></div>
        <span class="text" @click="changeLang('en')">English</span>
      </div>


    </div>
  </div>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
  name: "Header",
  components: {Navigation},
  props: {
    //isActive: Array,
    menu: String
  },
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang
    }

  }

};
</script>
<style>

.text {
  font-size: 1em;
}

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  margin-top: -30px;
  flex-direction: column;
  z-index: 999;
}

.language-thing {
  display: flex;
  justify-content: space-between;
  position: fixed;
  margin-top: -30px;
  z-index: 999;

}

.nav-menu {
  font-size: 30px;
  font-weight: 600;
  background-color: #F6FFF7;
  text-align: right;
}

.nav-menu:hover {
  font-size: 30px;
  font-weight: 600;
  background-color: black;
  color: #F6FFF7;

}

.checkbox {
  margin: 0 4px 0 15px;
  border: 2px solid #000000;
  box-sizing: border-box;
  width: 1.25em;
  height: 1.25em;
}

.active {
  background: #00FF38;
}

.language-options {
  display: flex;
  background-color: #F6FFF7;
  font-weight: 600;
  max-height: 20px;
  font-size: 16px;


}

@media (max-width: 909px) {
  .language-options {
    font-size: 20px;
  }

  .header {
    margin-top: -40px;
  }
}
</style>
