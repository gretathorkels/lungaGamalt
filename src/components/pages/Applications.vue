<template>
  <div class="applications">
    <Header v-bind:menu="'menu'" />
    <Headline v-bind:title="title"/>
  </div>
</template>

<script>
import Header from '../shared/Header'
import Headline from '../shared/Headline'
export default {
  name: 'Applications',
  components: {
    Header,
    Headline
  },
  data(){
     return {title: 'title.applications'}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
