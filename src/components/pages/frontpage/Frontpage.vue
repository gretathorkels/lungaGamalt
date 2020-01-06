<template>
  <div class="frontpage">
      <div class="language-container">
          <input type="checkbox" id="icelandic" value="icelandic" v-model="checked">
          <label for="icelandic">Íslenska</label>
          <br>
          <input type="checkbox" id="english" value="english" v-model="checked">
          <label for="english">English</label>
          <br>
          <span>{{checked}}</span>
      </div>
    <div class="logo-container">
         <img src="../../../assets/LungaLogo.svg" />
    </div>
   <div class="navigation">
       <a><span class="skew">Um LungA</span></a>
       <a><span class="skew">Listasmiðjur</span></a>
       <a><span class="skew">Tónleikar í Norðursíld</span></a>
       <a><span class="little-nav">Fyrirlestraröð</span> <span class="skew">LungA LAB</span></a>
       <a><span class="skew">Opnar vinnustofur</span></a>
       <a><span class="skew">Viðburðarskrá</span></a>
       <a><span class="skew">Umsóknir</span></a>
        </div>
       <div class="little-nav">
           <a>Samstarfsaðilar</a>
           <a>Hafðu samband</a>
       </div>
       <div class="social-media">
           <a>Instagram</a>
           <a>Facebook</a>
           <a>Tumblr</a>
       </div>
  </div>
</template>

<script>
export default {
  name: 'Frontpage',

  data() {
     return{
         checked: []
     }       
  },
  props: {
    msg: String
  },
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.navigation{
    display: flex;
    flex-direction: column;
    
}
.navigation a{
    border-top: 2px solid #000;
    width: 100%;
    text-decoration: none;
    font-size: 96px;
    font-weight: bold;
    color: black;
    -ms-transform: skew(10deg, 0); /* IE 9 */
    -webkit-transform: skew(10deg, 0); /* Safari prior 9.0 */
    transform: skew(10deg, 0); /* Standard syntax */
}
.little-nav {
     display: flex;
     flex-direction: row;
}
.little-nav a {
    font-size: 48px;
    font-weight: bold;
    color: #000;
    border-top: 2px solid #000;
    justify-content: space-evenly;
    width: 100%;
    -ms-transform: skew(10deg, 0); /* IE 9 */
    -webkit-transform: skew(10deg, 0); /* Safari prior 9.0 */
    transform: skew(10deg, 0); /* Standard syntax */
}
.social-media {
     display: flex;
     flex-direction: row;
}
.social-media a {
    font-size: 48px;
    font-weight: bold;
    color: #000;
    border-top: 2px solid #000;
    justify-content: space-evenly;
    width: 100%;
   
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.logo-container img {
    width: 100%; 
}
.language-container input {
-webkit-appearance: checkbox;
  -moz-appearance: checkbox;   
  -ms-appearance: checkbox;
}

</style>
