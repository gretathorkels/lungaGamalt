<template>
  <div id="app">
    
    <router-view></router-view>
    <test/>
  </div>
</template>

<!-- JAVASCRIPT -->
<script>
//import Test from "./assets/test.md"
export default {
  name: 'app',
  //components: {Test},
  
}
</script>

<!-- STÍLL CSS -->
<style>
#app {
  font-family: 'Rather', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>