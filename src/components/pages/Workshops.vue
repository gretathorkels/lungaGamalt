<template>
  <div class="workshops">
    <Header v-bind:menu="'menu'" />
    <Headline v-bind:title="title" />
    <div class="img-container">
            <img class="img-child" src="../../assets/tumblr/2.jpg">
        </div>
    <div class="head-container">
      <div>
        <div class="sub-header">
            <!--- {{$t("workshops.applyhere")}}--->
        </div>
      </div>
      <div class="sub-text">
      {{$t("workshops.firstline")}}
      </div>
    </div>

    <div class="workshops-container">
      <div class="table">
            {{$t("workshops.tba")}}
      </div>
    </div>
    <div class="footer-container">
      <div class="text">
                    {{$t("workshops.weekinfo")}}
      </div>
      <div class="text">
                          {{$t("workshops.fridayinfo")}}

        </div>
      <div>
                <div class="sub-header">
              <!--- {{$t("workshops.applyhere")}}--->
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import Header from "../shared/Header";
import Headline from "../shared/Headline";

//import Workshops from "../../test.md"
export default {
  name: "workshops",
  components: { Header, Headline },
  // props: {
  //   msg: String
  // },
  data() {
    return {
      title: "title.workshops"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head-container {
  display: flex;
}
.footer-container {
  display: flex;
  justify-content: space-between;
  margin: 0px 10px 0px 10px;
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
text-align: center;
}
.text{

font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;

color: #000000;
margin: 50px 50px 0 0px;
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
