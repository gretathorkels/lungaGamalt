
<template>
<div class="eventindex">
      <Header v-bind:menu="'menu'" />
    <Headline v-bind:title="title"/>
 <div class="head-container">
   <div class="sub-text">Skrá yfir viðburði birtist í maí 2020</div>
 </div>

    <div class="workshops-container">
      <div class="table left-align">12.07 Sunnudagur</div>
      <div class="table left-align">13.07 Mánudagur</div>
      <div class="table left-align">14.07 Þriðjudagur</div>
      <div class="table left-align">15.07 Miðvikudagur</div>
      <div class="table left-align">16.07 Fimmtudagur</div>
     
    </div>
    <div class="footer-container">
    </div>
    <Footer />
</div>
</template>
  
<script>
//import marked from 'marked'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import Headline from '../shared/Headline'

//import md from 'markdown-it';
export default {
  name: 'Eventindex',
  components: {
    Header, Footer, Headline
  },
  data(){
    return {
      title: 'title.eventindex'
    }
  },
  

   
    
};
</script>
  
  <style scoped>
  .head-container {
  display: flex;
}
.footer-container {
  display: flex;
  justify-content: space-between;
  margin: 0 10px 0 10px;
}
.sub-text{

/* Headline 2 */
font-weight: 600;
font-size: 48px;
margin-left: 40px;
text-align: left;
color: #000000;


}
.table {

border-bottom: 2px solid #000000;
font-weight: 600;
font-size: 36px;
line-height: 43px;
padding: 15px 0 15px 0;
color: #000000;
}
.subtext {
font-weight: 600;
font-size: 36px;

color: #000000;

}
.text{

font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;

color: #000000;
margin: 50px 0px 0 0px;
text-align: left;

}
</style>
