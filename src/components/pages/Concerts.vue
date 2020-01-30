<template>
  <div class="concerts">
    <Header v-bind:menu="'menu'"/>
    <Headline v-bind:title="title"/>
    <div class="head-container">
      <div>
        <div class="sub-header">Kaupa</div>
        <div class="sub-header">Miða</div>
      </div>
      <div class="sub-text">
        
      </div>
    </div>
    
    <div class="footer-container">
      <div class="text">
        <!-- Upplýsingar um tónleikana: -->
      </div>
      <div class="text">
       Gjald fyrir Föstudagsnámskeið er <br/>
       20.000kr og innifalið í því verði er <br/>
       þátttaka í listasmiðjuna, gisting, fæði <br/>
       á meðan námskeiðinu stendur og <br/>
       aðgangur að öllum viðburðum <br/>
       hátíðarinnar.
        </div>
      <div class="center sub-header nav-link">
        <a href="/frontpage" class="nav-link" >
        Kaupa<br/>
        Miða
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../shared/Header'
import Headline from '../shared/Headline'

export default {
  name: 'Concerts',
  components: {Header, Headline},
  data(){
    return {
      title: 'title.concerts'
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head-container {
  display: flex;
}
.center{
  text-align: center;
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
