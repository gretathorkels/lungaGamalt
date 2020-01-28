<template>
<router-link class="nav-link" to="/">
    <div v-if="this.$i18n.locale == 'isl'" class="headline icelandic" >
        {{$t(subtitle)}} {{$t(title)}}
    </div>
    <div v-else class="headline english" >
        {{$t(title)}}  {{$t(subtitle)}}
    </div>
</router-link>
</template>
<script>
export default {
    name: "Headline",
    props:{
        title: String,
        subtitle: String,
    }
}
</script>
<style scoped>

</style>