<template>
  <div class="hello">
    Hæ
    <div v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  name: 'Events',
  props: {
    msg: String
  },
  computed: {
    compiledMarkdown: function(){
      return marked('../../../../workshops/krist2.md', { sanitize: true })
    }
  },
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
