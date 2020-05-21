<template>
<div class="link-container">
<router-link class="nav-link" to="/">
    <div v-if="this.$i18n.locale == 'isl'" class="headline icelandic" >
       <div class="subtitle"> {{$t(subtitle)}} </div> {{$t(title)}}
    </div>
    <div v-else class="headline english" >
        {{$t(title)}}  <div class="subtitle">{{$t(subtitle)}}</div>
    </div>
</router-link>
</div>
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
/* .headline > *:hover{ */
.headline:hover{
    color: #fff !important;
    background: #000 !important;
    width: fit-content;

}
/* .link-container:hover{
  color: #fff !important;
  background: #000 !important;
} */
</style>