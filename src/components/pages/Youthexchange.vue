<template>
  <div class="youthexchange">
      <Header v-bind:menu="'menu'" />
      <Headline v-bind:title="title"/>



<div class="img-container">
                          <img class="img-child" src="../../assets/euf/5.jpg">
             </div>

      <div class="text-container">
            <div class="sub-text">
             {{$t("youthexchange.firstline")}}
            </div>

            <div class="text-body">
                    {{$t("youthexchange.para1")}}
            </div>

             <div class="text-body">
                    {{$t("youthexchange.para2")}}
            </div>

            <div class="text-body">
                {{$t("youthexchange.para3")}}
            </div>


      </div>
            <div class="img-container">
             <img class="img-child" src="../../assets/euf/1.jpg">

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

.img-container {
display:flex;
flex-direction: column;
flex-wrap:wrap;
justify-content: center;
align-self: center;

}

.img-child {
max-width: 80%;
  height: auto;
  align-self: center;
margin:20px;
}

</style>
