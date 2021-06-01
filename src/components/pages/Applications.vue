<template>
  <div class="applications">
    <Header v-bind:menu="'menu'" />
    <Headline v-bind:title="title"/>




    <div class="head-container">
        <!--<div class="sub-header">
            {{$t("workshops.applyhere")}}
        </div>-->

      <div class="sub-text">
      {{$t("application.headertext")}}
      </div>
    </div>
      <div class="img-container">
          <img class="img-child" src="../../assets/tumblr/17.jpg">
      </div>

<!--
    <table class="workshops-container">
      <tr>
        <th>{{$t("applicationLinks.title")}}</th>
        <th>{{$t("applicationDeadline.title")}}</th>
      </tr>
        <tr>
            <td class="link-container"><a class="nav-link" href="https://podio.com/webforms/24119149/1753108" target="_blank">
                {{$t("applicationLinks.teach")}}</a></td>
            <td>{{$t("applicationDeadline.teach")}}</td>
        </tr>
      <tr>
        <td class="link-container"><a class="nav-link" href="https://podio.com/webforms/23952850/1741765?fbclid=IwAR1tD3HmG0pBpsFHloGldaNWJWK2bkG6XYofTbS1Pj7ksdyFzFZihbVLiPk" target="_blank">
        {{$t("applicationLinks.show")}}</a></td>
        <td>{{$t("applicationDeadline.show")}}</td>
      </tr>


       <tr>
        <td>{{$t("applicationLinks.participate")}}</td>
        <td>{{$t("applicationDeadline.participate")}}</td>
      </tr>


       <tr>
        <td>{{$t("applicationLinks.speak")}}</td>
        <td>{{$t("applicationDeadline.speak")}}</td>
      </tr>
    </table>

    <div class="footer-container">
      <div class="text">
      {{$t("application.footertext")}}

      </div>

      <div class="text">
      hello
        </div>


      <div>
        <div class="sub-header">Apply</div>
        <div class="sub-header">Here</div>
        </div>
    </div>--->

    <Footer />


  </div>
</template>

<script>
import Header from '../shared/Header'
import Headline from '../shared/Headline'
import Footer from "../shared/Footer";


export default {
  name: 'Applications',
  components: {
    Header,
    Headline, Footer
  },
  data(){
     return {title: 'title.applications'}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  margin-top: 30px;
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
  font-size: 30px;
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
