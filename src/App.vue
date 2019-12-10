
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Navigation msg="Welcome to Your Vue.js App"/>
    <Workshops msg="Welcome to Your Vue.js App"/>
    <Events msg="Welcome to Your Vue.js App"/>
    <FestivalProgram msg="Welcome to Your Vue.js App"/>
   
  </div>
</template>

<!-- JAVASCRIPT -->
<script>
import HelloWorld from './components/HelloWorld.vue'
import Navigation from './components/Navigation.vue'
import Workshops from './components/Workshops.vue'
import Events from './components/Events.vue'
import FestivalProgram from './components/FestivalProgram.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Navigation,
    Workshops, 
    Events,
    FestivalProgram
  }
}
</script>

<!-- STÍLL CSS -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
