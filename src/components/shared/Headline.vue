<template>
<router-link class="nav-link" to="/">
    <div class="headline left-align" v-bind:class="{skewheader: this.$i18n.locale == 'isl'}">{{$t(title)}}</div>
</router-link>
</template>
<script>
export default {
    name: "Headline",
    props:{
        title: String
    }
}
</script>
<style scoped>

</style>