<template>
  <div>
      <Header v-bind:lang="isActive" v-on:shiftLanguage='shiftLanguage' />
      
  </div>
</template>

<script>
import Header from '../components/shared/Header';
export default {
    name: 'Home',
    data(){
        return{
            isActive: [true, false]
        }
    },
    components: {Header},
    methods: {
        shiftLanguage: function (){
            this.isActive.forEach((element, index) => {
                return this.$set(this.isActive, index, !this.isActive[index] )
                });
    }},
}
</script>

<style>

</style>