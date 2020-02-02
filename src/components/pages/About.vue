<template>
  <div class="about">
      <Header v-bind:menu="'menu'" />
      <Headline v-bind:title="title"/>
      
      <div class="text-container">
          
          <div class="sub-line">
                {{$t("aboutlunga.firstline")}}
           </div>
          <div class="text-body">
                {{$t("aboutlunga.para1")}}
              </div>
              <div class="text-body">
              {{$t("aboutlunga.para2")}}
              </div>
          <div class="text-body">
          {{$t("aboutlunga.para3")}}
          </div>
         <div class="sub-line">
                        {{$t("aboutlunga.lastline")}}
                   </div>

      </div>
      <div class="headline">
      {{$t("aboutlunga.footer")}}
</div>
  </div>
</template>

<script>
import Header from '../shared/Header'
import Headline from '../shared/Headline'

export default {
  name: 'About',
  components: {
      Header, 
      Headline
  },
  data(){
      return{
          title: 'title.about'
      }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 

</style>
