<template>
  <div class="applications">
    <Header v-bind:menu="'menu'" />
    <Headline v-bind:title="title"/>
    <div class="head-container">
      <!-- <div>
        <div class="sub-header">Apply</div>
        <div class="sub-header">Here</div>
      </div> -->

      <div class="sub-text">
      {{$t("subtexts.application")}}
      </div>
    </div>
    <table class="workshops-container">
      <tr>
        <th>{{$t("applicationDesc.title")}}</th>
        <th>{{$t("applicationLinks.title")}}</th>
        <th>{{$t("applecationDeadline.title")}}</th>
      </tr>
      <tr>
        <td>{{$t("applicationDesc.show")}}</td>
        <td class="link-container"><a class="nav-link" href="https://podio.com/webforms/23952850/1741765?fbclid=IwAR1tD3HmG0pBpsFHloGldaNWJWK2bkG6XYofTbS1Pj7ksdyFzFZihbVLiPk" target="_blank">
        {{$t("applicationLinks.show")}}</a></td>
        <td>{{$t("applecationDeadline.deadline")}}</td>
      </tr>
       <tr>
        <td>{{$t("applicationDesc.play")}}</td>
        <td>{{$t("applicationLinks.play")}}</td>
        <td>{{$t("applecationDeadline.opensinfeb")}}</td>
      </tr>
       <tr>
        <td>{{$t("applicationDesc.host")}}</td>
        <td>{{$t("applicationLinks.host")}}</td>
        <td>{{$t("applecationDeadline.opensinfeb")}}</td>
      </tr>
       <tr>
        <td>{{$t("applicationDesc.participate")}}</td>
        <td>{{$t("applicationLinks.participate")}}</td>
        <td>{{$t("applecationDeadline.opensinmay")}}</td>
      </tr>
       <tr>
        <td>{{$t("applicationDesc.speak")}}</td>
        <td>{{$t("applicationLinks.speak")}}</td>
        <td>{{$t("applecationDeadline.opensinfeb")}}</td>
      </tr>
    </table>
    <div class="footer-container">
      <div class="text">

      </div>
      <div class="text">
      
        </div>
      <!-- <div>
        <div class="sub-header">Apply</div>
        <div class="sub-header">Here</div>
        </div> -->
    </div>
  </div>
</template>

<script>
import Header from '../shared/Header'
import Headline from '../shared/Headline'
export default {
  name: 'Applications',
  components: {
    Header,
    Headline
  },
  data(){
     return {title: 'title.applications'}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  margin-top: 150px;
  border-spacing: 0;
  width: 100%;
}
th {
  border-bottom: solid 2px #000;
  font-size: 36px;
  font-weight: 600;
  padding-left: 20px;
  
  text-align: left;
}
td {
  border-bottom: solid 2px #000;
  padding-left: 20px;
  font-size: 20px;
  font-weight: 600;
}
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
