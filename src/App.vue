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

.left-align {
    text-align: left;
}

.text-container{
    max-width: 800px;
    flex-direction: column;
    display: flex;
    justify-content: center;
    margin: 0 25% 0 25%;
    
}
.headline{
    max-width: 99%;
    font-size: 144px;
    font-weight: 600;
     -ms-transform: skew(10deg, 0); /* IE 9 */
    -webkit-transform: skew(10deg, 0); /* Safari prior 9.0 */
    transform: skew(10deg, 0); /* Standard syntax */
}
.sub-header{
  font-size: 96px;
  font-weight: 600;
}
.sub-line{
    font-size: 48px;
    font-weight: 600;
    margin: 60px 0 40px 0;
}
.text-body{
    font-size: 24px;
    font-weight: 600;
    text-align: left;
    margin: 10px 0 10px 0;
}
.content-img img{
    
    width: 674px;
    height: 402px;
}
</style>