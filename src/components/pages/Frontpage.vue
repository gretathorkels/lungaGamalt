<template>
  <div class="frontpage">
      <Header v-bind:menu="'nomenu'" />
      
    <div class="logo-container">
         <img src="../../assets/LungaLogo.svg" />
    </div>
   <div class="navigation">
       <div class="skew-container"><div class="skew"><router-link  class="nav-link" to="/about">{{ $t('links.about') }}</router-link> </div></div>
       <div class="skew-container"><div class="skew"><router-link class="nav-link" to="/workshops">{{ $t('links.workshops') }}</router-link></div></div>
       <div class="skew-container"><div class="skew"><router-link class="nav-link" to="/concerts">{{ $t('links.concerts') }}</router-link></div></div>
       <div class="skew-container"><div class="skew"><router-link class="nav-link" to="/lungalab">{{ $t('links.lungalab') }}</router-link></div></div>
       <div class="skew-container"><div class="skew"><router-link class="nav-link" to="/openstudios">{{ $t('links.openstudios') }}</router-link></div></div>
      <div class="skew-container"><div class="skew"><router-link class="nav-link" to="/eventindex">{{ $t('links.eventindex') }}</router-link></div></div>
       <div class="skew-container"><div class="skew"><router-link class="nav-link" to="/applications">{{ $t('links.applications') }}</router-link></div></div>
        </div>
       <div class="little-nav">
         <div class="grid-container">
         <div class="skew-container"><div class="skew"><router-link class="nav-link" to="/sponsors">{{ $t('links.sponsors') }}</router-link></div></div>
         <div class="skew-container divider"><div class="skew"><router-link class="nav-link" to="/contact">{{ $t('links.contact') }}</router-link></div></div>
         </div>
        <Footer /> 
       </div>
  </div>
</template>

<script>
import Header from '../shared/Header'
import Footer from '../shared/Footer'
export default {
  name: 'Frontpage',
  props: {
    lang: String
  },
  components: {Header, Footer}
}


</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  grid-template-columns: 1fr 1fr auto;
  font-weight: 600;
  font-size: 48px;
  color: #000000;
  border-bottom: #000 2px solid;
}

</style>
