<template>
  <div class="lungalab">
    <Header v-bind:menu="'menu'" />
    <Headline v-bind:title="title" v-bind:subtitle="subtitle"/>



    <div class="text-container">

              <div class="sub-line">
                    {{$t("lungalab.firstline")}}
               </div>
              <div class="text-body">
                    {{$t("lungalab.para1")}}
                  </div>
                  <div class="text-body">
                  {{$t("aboutlunga.para2")}}
                  </div>
          </div>


    <div class="workshops-container">
      <div class="table">
            {{$t("lungalab.tba")}}
      </div>
    </div>

    <div class="footer-container">
       <div class="text"> {{$t("lungalab.sponsors")}}  </div>
       </div>

</div>

</template>

<script>
import Header from '../shared/Header'
import Headline from '../shared/Headline'

export default {
  name: 'LungaLab',
  components: {Header,  Headline},
  data() {
     return{
         isActive: [true, false],
         title: 'title.lungalab',
         subtitle: 'title.lungalab2',

     }       
  },
  
  methods: {
    shiftLanguage: function (){
      this.isActive.forEach((element, index) => {
        return this.$set(this.isActive, index, !this.isActive[index] )
      });
      
    }
  }
}






</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active {
  background: #00FF38;
}
.language-container {
  display: flex;
 
}
.checkbox{
  margin: 0 4px 0 15px;
  border: 2px solid #000000;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.little-nav .skew-container {
  font-size: 48px;
}
.skew-container  {
    border-top: 2px solid #000;
    max-width: 99.9%;
    text-decoration: none;
    font-size: 96px;
    font-weight: 600;
    text-align: left;
    color: black;
}
.skew-container .skew {
    -ms-transform: skew(10deg, 0); /* IE 9 */
    -webkit-transform: skew(10deg, 0); /* Safari prior 9.0 */
    transform: skew(10deg, 0); /* Standard syntax */
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.table {

border-top: 2px solid #000000;
border-bottom: 2px solid #000000;
font-weight: 600;
font-size: 36px;
line-height: 43px;
padding: 15px 0 15px 0;
color: #000000;
text-align: center;

}
.text{

font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;

color: #000000;
margin: 50px 50px 50px 50px;
text-align: center;

}

.footer-container {
  display: flex;
  justify-content: space-between;
  margin: 0px 10px 0px 10px;
}
</style>
