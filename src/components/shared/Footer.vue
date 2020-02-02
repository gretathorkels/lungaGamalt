<template>
  <div class="footer ">
          <div class="footer-item link-container"><a class="nav-link" href="https://www.instagram.com/lunga.festival/" target="_blank">Instagram</a></div>
          <div class="footer-item divider link-container"><a class="nav-link" href="https://www.facebook.com/lunga.festival/" target="_blank">Facebook</a></div>
          <div class="footer-item divider link-container"><a class="nav-link" href="https://lunga19.tumblr.com" target="_blank">Tumblr</a></div>
  </div>
</template>

<script>

export default {
  name: "Footer",

};
</script>
<style scoped>

.footer{
  display: grid;
  /* margin-top: 100px; */
  grid-template-columns: 1fr 1fr auto;
  font-weight: 600;
  background-color: white;
  font-size: 48px;
  color: #000000;
  /* border-bottom: #000 2px solid; */
  /* border-top: #000 2px solid; */
}
.footer-item {
  text-align: center;
}
</style>
