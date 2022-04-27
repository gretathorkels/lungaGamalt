<template>
  <div class="about">
      <Header v-bind:menu="'menu'" />
      <Headline v-bind:title="title"/>

      <div class="img-container">
                                <img class="img-child" src="../../assets/tumblr/14-2018.jpg">
                   </div>

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

          <!-- <div class="text-body">
              {{$t("aboutlunga.themeintro")}}
          </div>
          <div class="headline">
              {{$t("aboutlunga.theme")}}
          </div>
          <div class="sub-line">
              {{$t("aboutlunga.themeheadline")}}
          </div>
          <div class="text-body">
              {{$t("aboutlunga.themepara1")}}
          </div>
          <div class="text-body">
              {{$t("aboutlunga.themepara2")}}
          </div>
          <div class="text-body">
              {{$t("aboutlunga.themepara3")}}
          </div>
          <div class="text-body">
              {{$t("aboutlunga.themepara4")}}
          </div>
-->
         <div class="sub-line">
                        {{$t("aboutlunga.lastline")}}
                   </div>

      </div>
      <div class="headline">
      {{$t("aboutlunga.footer")}}
</div>

    <div class="img-container">
        <img class="img-child" src="../../assets/tumblr/5.jpg">
    </div>

      <Footer />


  </div>
</template>

<script>
import Header from '../shared/Header';
import Headline from '../shared/Headline';
import Footer from "../shared/Footer";

export default {
  name: 'About',
  components: {
      Header, 
      Headline,
      Footer
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

body {
  background-color: #F6FFF7;
}
.headline {
    text-align: center;
}
.sub-line{
text-align:center;
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
