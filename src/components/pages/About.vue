<template>
  <div class="about">
      <Header v-bind:menu="'menu'" />
      <Headline v-bind:title="title"/>
      <div class="text-container">
          
          <div class="sub-line">Árið 2000 leit listahátíð LungA dagsins ljós í fyrsta sinn.</div>
          <div class="text-body">
              Um er að ræða listahátíð þar sem sköpun, listum og menningu er fagnað með námskeiðum, fyrirlestrum og öðrum viðburðum og lýkur með uppskeruhelgi: sýningum og tónleikum.
              </div><div class="text-body">
              Hátíðin er frábær blanda af listum, sköpun, tjáningu og stórbrotinni náttúru. Hún hefur getið sér gott orðspor, bæði á Ísland og út fyrir landsteinana fyrir frábært andrúmsloft, námskeið af miklum gæðum og með mikilli virkni þátttakenda. Ennfremur færir hátíðin gleði, sjálfsþekkingu, elskendur, nýja vini og góðar minningar fyrir þá sem sækja hátíðina heim.
              </div>
          <div class="text-body">
              LungA „fjölskyldan“ samanstendur nú bæði af árlegri listahátíð og skóla. Dagsdaglega er þetta tvennt rekið sitt í hvoru lagi, en heitið, gildin og hugmyndafræðin eru af sama meiði.
          </div>
          
          <div class="content-img"><img src="../../../static/img/uploads/aboutlunga.jpg"/></div>
          <div class="sub-line">
              Ungmennaskipti Erasmus+
          </div>
          <div class="text-body">
              Við byrjum hátíðina þetta árið á LungA Lab 12.júlí 2019. Þetta er þriðja árið þar sem þessi nýji angi hátíðarinnar í bland við ungmennaskiptiverkefnið á sér stað undir nafninu LungA Lab og langar okkur að bjóða almenningi að taka þátt í samtalinu. Við bjóðum uppá fjölda stórkostlega fyrirlestra og á þann hátt náum við vonandi að opna umræðuna um “Framtíðarsýn” enn frekar.
          </div>
          <div class="text-body">
              Þetta árið koma hópar frá Danmörk, Englandi, Svíþjóð og Íslandi. Við ætlum að ræða um framtíðarsýn, ekki út frá neinum fyrirfram ákveðnum skoðunum, heldur út frá öllum þeim mismunandi sjónarhornum sem upp koma þessa daga. Umræðan er byggð í kringum vinnu í minni hópum, pallborðsumræðum, mismunandi æfingum og allskonar skemmtilegum innslögum.
          </div>
          <div class="sub-line left-align">Þema</div>
          <div class="text-body">Þema LungA 2019 er FRAMTÍÐARSÝN.</div>
          <div class="sub-line">Við vonumst til þess að sjá ykkur sem flest á LungA í ár.</div>
      </div>
      <div class="headline">Ást! LungA</div>
      <Footer />
  </div>
</template>

<script>
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import Headline from '../shared/Headline'

export default {
  name: 'About',
  components: {
      Header, Footer,
      Headline
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

</style>
