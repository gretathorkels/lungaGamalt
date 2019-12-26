<template>
  <div class="workshops">
    Workshops
    <h1>{{ msg }}</h1>
    <a href="/admin/">Admin</a>
  </div>
</template>

<script>
export default {
  name: 'workshops',
  // props: {
  //   msg: String
  // }
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
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
