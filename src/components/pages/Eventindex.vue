
<template>
<div class="eventindex">
      <Header v-bind:menu="'menu'" />
    <Headline v-bind:title="title"/>
 <div class="head-container">
   <div class="sub-text">{{$t("eventindex.para1")}}</div>
 </div>

    <div class="eventindex-container">
     <div class="table">
        {{$t("eventindex.tba")}}
      </div>
    </div>
    <div class="footer-container">
      <div class="text">
        {{$t("workshops.weekinfo")}}
      </div>
      <div class="text">
        {{$t("workshops.fridayinfo")}}

      </div>
    </div>
</div>
</template>
  
<script>
//import marked from 'marked'
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
border-top: 2px solid #000000;

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
