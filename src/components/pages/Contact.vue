<template>
  <div class="contact">
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
  name: 'Contact',
  components: {Header, Footer, Headline},
  data(){
    return {
      title: 'title.contact'
    }
  }

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
