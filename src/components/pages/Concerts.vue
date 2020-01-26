<template>
  <div class="concerts">
    <Header v-bind:menu="'menu'"/>
    <Headline v-bind:title="title"/>
    <Footer />
  </div>
</template>

<script>
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import Headline from '../shared/Headline'

export default {
  name: 'Concerts',
  components: {Header, Footer, Headline},
  data(){
    return {
      title: 'title.concerts'
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
