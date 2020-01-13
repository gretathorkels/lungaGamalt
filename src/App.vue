<template>
  <div id="app">
    
    <Header v-bind:isActive="isActive" v-on:shiftLanguage="shiftLanguage" v-bind:location="location"/>
    <router-view />

  </div>
</template>

<!-- JAVASCRIPT -->
<script>
import Header from './components/shared/header/Header'
//import Test from "./assets/test.md"
export default {
  name: 'app',
  components: {
    Header
    },
  data(){
        return{
            isActive: [true, false],
            location: window.location.pathname === '/' ? false : true //þarf betri leið!
        }
    },
    methods: {
        shiftLanguage: function (){
            this.isActive.forEach((element, index) => {
                return this.$set(this.isActive, index, !this.isActive[index] )
                });

    }},
}
</script>

<!-- STÍLL CSS -->
<style>
#app {
  font-family: 'Rather', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin-top: 15px;
}
</style>