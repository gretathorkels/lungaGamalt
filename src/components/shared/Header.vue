<template>
  <div class="header">
    <div class="language-options pointer-mouse" >
        <div v-bind:class="{active: this.$i18n.locale == 'isl'}" @click="changeLang('isl')" class="checkbox"></div>
          <span  @click="changeLang('isl')">Íslenska</span>
          <div v-bind:class="{ active: this.$i18n.locale == 'en' }" @click="changeLang('en')" class="checkbox" ></div>
          <span @click="changeLang('en')">English</span>
    </div>
    
    <Navigation v-bind:menu="menu"/>
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
    changeLang(lang){
      this.$i18n.locale = lang
    }

  }

};
</script>
<style>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  margin-top: -30px;
  
  z-index: 999;
}
.nav-menu {
  font-size: 30px;
  font-weight: 600;
  background-color: white;
}

.nav-menu:hover {
  font-size: 30px;
  font-weight: 600;
  background-color: black;
  color: white;
}
.checkbox {
  margin: 0 4px 0 15px;
  border: 2px solid #000000;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.active {
  background: #00FF38;
}
.language-options {
  display: flex;
  background-color: white;
  font-weight: 600;
  max-height: 20px;
}
</style>
