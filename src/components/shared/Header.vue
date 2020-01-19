<template>
  <div class="header">
    <div class="language-options pointer-mouse" >
        <div v-bind:class="{active: this.$i18n.locale == 'isl'}" @click="changeLang('isl')" class="checkbox"></div>
          <span  @click="changeLang('isl')">Íslenska</span>
          <div v-bind:class="{ active: this.$i18n.locale == 'en' }" @click="changeLang('en')" class="checkbox" ></div>
          <span @click="changeLang('en')">English</span>
    </div>
    <div v-if="menu === 'menu'" class="nav-menu">{{ $t('links.menu') }}</div>
  </div>
</template>

<script>

export default {
  name: "Header",
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
}
.nav-menu {
  font-size: 96px;
  font-weight: 600;
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
}
</style>
