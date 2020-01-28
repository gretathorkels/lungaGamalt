<template>
  <div class="contact">
    <Header v-bind:menu="'menu'"/>
    <Headline v-bind:title="title"/>
  </div>
</template>

<script>
import Header from '../shared/Header'
import Headline from '../shared/Headline'

export default {
  name: 'Contact',
  components: {Header, Headline},
  data(){
    return {
      title: 'title.contact'
    }
  }

}


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
