
<template>
<div class="eventindex">
      <Header v-bind:menu="'menu'" />
    <Headline v-bind:title="title"/>

  <div v-html='compiledMarkdown'></div>
</div>
</template>
  
<script>
//import marked from 'marked'
import krist2 from '../../../workshops/krist2.md'
import Header from '../shared/Header'
import Headline from '../shared/Headline'

//import md from 'markdown-it';
export default {
  name: 'Eventindex',
  components: {
    Header, Headline
  },
  data(){
    return {
      title: 'title.eventindex'
    }
  },
  //extends: readme.vue.component,
  computed: {
    compiledMarkdown: function(){
      var title = krist2;
      console.log(krist2)
      return title;
    }
    
  },

      // const markdown = require(`${this.fileName}.md`)
      // // const markdown = require(`~/workshops/krist2.md`)
      // this.title = markdown.attributes.title
      //  this.dynamicComponent = markdown.vue.component

      // Use Async Components for the benefit of code splitting
      // https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components
      // this.dynamicComponent = () => import(`~/articles/${this.fileName}.md`).then(({ vue }) => vue.component
    
};
</script>
  
  <style>
</style>
