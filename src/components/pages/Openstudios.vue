
<template>
<div class="openstudios">
      <Header v-bind:menu="'menu'" />
    <Headline v-bind:title="title"/>

  <div class="headline left-align" v-bind:class="{skewheader: this.$i18n.locale == 'isl'}">{{ $t('title.openstudios') }}</div>
</div>
</template>
  
<script>
import Header from '../shared/Header'
import Headline from '../shared/Headline'

export default {
  name: 'Openstudios',
  components: {
    Header, Headline
  },
  data(){
    return {
      title: 'title.openstudios'
    }
  }
};
</script>
  
  <style>
</style>
