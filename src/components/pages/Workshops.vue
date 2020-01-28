<template>
  <div class="workshops">
    <Header v-bind:menu="'menu'" />
    <Headline v-bind:title="title" />

    <div class="head-container">
      <div>
        <div class="sub-header">Apply</div>
        <div class="sub-header">Here</div>
      </div>
      <div class="sub-text">
        Listasmiðjur LungA 2020 verða 9 talsins: <br/>
        átta vikulangar listasmiðjur <br/>
        og ein föstudags-listasmiðja
      </div>
    </div>
    <div class="workshops-container">
      <div class="table">Listasmiðjur verða birtar í Maí 2020</div>
    </div>
    <div class="footer-container">
      <div class="text">
        Gjald fyrir viku námskeið er 48.000kr <br/>
        og innifalið í því verði er þátttaka í <br/>
         listasmiðju, gisting í svefnpoka plássi, <br/>
         fullt fæði og aðgangur að öllum <br/>
         viðburðum hátíðarinnar. Það er einnig <br/>
         möguleiki að skrá sig á LungA <br/>
         tjaldsvæði eða þitt eigið húsnæði.
      </div>
      <div class="text">
       Gjald fyrir Föstudagsnámskeið er <br/>
       20.000kr og innifalið í því verði er <br/>
       þátttaka í listasmiðjuna, gisting, fæði <br/>
       á meðan námskeiðinu stendur og <br/>
       aðgangur að öllum viðburðum <br/>
       hátíðarinnar.
        </div>
      <div><div class="sub-header">Apply</div>
        <div class="sub-header">Here</div></div>
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
