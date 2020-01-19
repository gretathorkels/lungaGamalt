<template>
  <div class="concerts">
    <Header v-bind:menu="'menu'"/>
    <Headline v-bind:title="title"/>
  </div>
</template>

<script>
import Header from '../shared/Header'
import Headline from '../shared/Headline'

export default {
  name: 'Concerts',
  components: {Header, Headline},
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
