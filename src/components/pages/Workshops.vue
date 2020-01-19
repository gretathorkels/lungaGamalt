<template>
  <div class="workshops">
      <Header v-bind:menu="'menu'" />
    <Headline v-bind:title="title"/>

   <div class="container">
      <div>
        <div class="sub-header">Apply</div>
        <div class="sub-header">Here</div>
      </div>
      
      <div class="sub-line">Listasmiðjur verða birtar í maí 2020</div>
    </div>
    
  </div>
</template>

<script>
import Header from '../shared/Header'
import Headline from '../shared/Headline'

//import Workshops from "../../test.md"
export default {
  name: 'workshops',
  components: {Header, Headline},
  // props: {
  //   msg: String
  // },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: 'title.workshops'
      //workshops: {workshops}
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
}
</style>
