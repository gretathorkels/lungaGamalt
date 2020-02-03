<template>
  <div class="contact">
    <Header v-bind:menu="'menu'"/>
    <Headline v-bind:title="title"/>
    <table>
      <tr>
        <td>Lunga Festival</td>
        <td>Hafnargata 44, 710 Seyðisfjörður</td>
        <td>LungA@LungA.is</td>
        <td>kt. 600201 2120</td>
      </tr>
      <tr>
        <td>{{ $t('roles.director') }}<br/>{{ $t('roles.exhangeprogram') }}</td>
        <td>Björt Sigfinnsdóttir</td>
        <td>bjort@lunga.is</td>
        <td>(+45) 28993633</td>
      </tr>
      <tr>
        <td>{{ $t('roles.curator') }}<br>{{ $t('roles.events') }}</td>
        <td>Þórhildur Tinna Sigurðardóttir</td>
        <td>tinna@lunga.is</td>
        <td>(+354) 8486962</td>
      </tr>
      <tr>
        <td>{{ $t('roles.workshops') }}<br>{{ $t('roles.production') }}</td>
        <td>Sesselja Hlín Jónasardóttir</td>
        <td>sesselja@lunga.is</td>
        <td>(+354) 7702444</td>
      </tr>
      <tr>
        <td>{{ $t('roles.concerts') }}</td>
        <td>Hilmar Guðjónsson</td>
        <td>hilmar@lunga.is</td>
        <td>(+354) 8955888</td>
      </tr>
      <tr>
        <td>{{ $t('roles.volunteers') }}</td>
        <td>Lama-sea Dear</td>
        <td>lama@lunga.is</td>
        <td>(+354) 7848746</td>
      </tr>
      <tr>
        <td>{{ $t('roles.exhangeprogram') }} </td>
        <td>Minerva Pietilä</td>
        <td>minerva@kaospilot.dk</td>
        <td></td>
      </tr>
      <tr>
        <td>{{ $t('roles.sponsors') }} <br>
        {{ $t('roles.socialmedia') }}</td>
        <td>Birna Ketilsdóttir Schram</td>
        <td>birna@lunga.is</td>
        <td></td>
      </tr>
      <tr>
        <td>{{ $t('roles.pr') }}</td>
        <td>Þóra Flygenring Sigurðardóttir</td>
        <td>thora@lunga.is</td>
        <td></td>
      </tr>
      <tr>
        <td>{{ $t('roles.booking') }}</td>
        <td>Simon Bergkjær</td>
        <td>simon@lunga.is</td>
        <td></td>
      </tr>
       <tr>
        <td>{{ $t('roles.booking') }}</td>
        <td>Ýmir Gíslason</td>
        <td>ymir@lunga.is</td>
        <td></td>
      </tr> 
       <tr>
        <td>{{ $t('roles.graphics') }}</td>
        <td>Gréta Þorkelsdóttir</td>
        <td>greta@lunga.is</td>
        <td></td>
      </tr>
      <tr>
        <td>{{ $t('roles.programming') }}</td>
        <td>Diljá Þorkelsdóttir</td>
        <td>dilja4@hotmail.com</td>
        <td></td>
      </tr>
     
    </table>
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
table {
  margin-top: 150px;
  border-spacing: 0;
  width: 100%;
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
