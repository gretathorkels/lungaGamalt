
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
    <br>
    <div class="footer-container">
     <!--<div class="text">
        {{$t("workshops.weekinfo")}}
      </div>
      <div class="text">
        {{$t("workshops.fridayinfo")}}
      </div>-->
    </div>
    <div class="img-container">
            <img class="img-child" src="../../assets/tumblr/15.jpg">
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
text-align:center;
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
