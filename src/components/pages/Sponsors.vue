<template>
  <div class="sponsors">
      <Header v-bind:menu="'menu'" />
    <Headline v-bind:title="title"/>
      <Footer />
  </div>

</template>

<script>
import Header from '../shared/Header'
import Headline from '../shared/Headline'
import Footer from '../shared/Footer'

export default {
  name: 'Sponsors',
  components: {
    Header, Headline, Footer
  },
  data(){
    return {
      title: 'title.sponsors'
    }
  }
  
 
  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
