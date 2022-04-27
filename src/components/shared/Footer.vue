<template>
    <div class="footer ">
        <div class="footer-item link-container"><a class="nav-link" href="https://www.lungaschool.is" target="_blank">LungA School</a></div>
        <div class="footer-item link-container"><a class="nav-link" href="https://www.instagram.com/lunga.festival/" target="_blank">Instagram</a></div>
        <div class="footer-item link-container"><a class="nav-link" href="https://www.facebook.com/lunga.festival/" target="_blank">Facebook</a></div>
        <div class="footer-item link-container"><a class="nav-link" href="https://lunga21.tumblr.com" target="_blank">Tumblr</a></div>
    </div>
</template>

<script>

export default {
  name: "Footer",

};
</script>
<style scoped>

    .footer{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        font-weight: 600;
        background-color: #F6FFF7;
        font-size: 26px;
        color: #000000;
    }
    .footer-item {
        text-align: center;
        flex-grow: 1;
        padding: 10px;
    }


</style>
