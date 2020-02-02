<template>
  <div class="youthexchange">
      <Header v-bind:menu="'menu'" />
      <Headline v-bind:title="title"/>





      <div class="text-container">
            <div class="sub-text">
             {{$t("youthexchange.firstline")}}
            </div>

            <div class="text-body">
             {{$t("youthexchange.para1")}}
            </div>


      </div>

  </div>
</template>

<script>
import Header from '../shared/Header'
import Headline from '../shared/Headline'

export default {
  name: 'youthexchange',
  components: {
      Header,
      Headline
  },
  data(){
      return{
          title: 'title.youthexchange'
      }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.head-container {
  display: flex;
}

.sub-text{

/* Headline 2 */
font-weight: 600;
font-size: 48px;
margin-left: 40px;
text-align: center;
color: #000000;


}

</style>
