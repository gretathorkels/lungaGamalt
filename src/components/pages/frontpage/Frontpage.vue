<template>
  <div class="frontpage">
      <div class="language-container" @click.prevent="shiftLanguage">
         
      </div>
    <div class="logo-container">
         <img src="../../../assets/LungaLogo.svg" />
    </div>
   <div class="navigation">
       <div class="skew-container"><div class="skew"><router-link class="nav-link" to="/about">Um LungA</router-link></div></div>
       <div class="skew-container"><div class="skew"><router-link class="nav-link" to="/workshops">Listasmiðjur</router-link></div></div>
       <div class="skew-container"><div class="skew"><router-link class="nav-link" to="/concerts">Tónleikar í Norðursíld</router-link></div></div>
       <div class="skew-container"><div class="skew"><router-link class="nav-link" to="/lungalab">LungA LAB</router-link></div></div>
       <div class="skew-container"><div class="skew"><router-link class="nav-link" to="/openstudios">Opnar vinnustofur</router-link></div></div>
      <div class="skew-container"><div class="skew"><router-link class="nav-link" to="/eventindex">Viðburðarskrá</router-link></div></div>
       <div class="skew-container"><div class="skew"><router-link class="nav-link" to="/applications">Umsóknir</router-link></div></div>
        </div>
       <div class="little-nav">
         <div class="grid-container">
         <div class="skew-container"><div class="skew"><router-link class="nav-link" to="/sponsors">Samstarfsaðilar</router-link></div></div>
         <div class="skew-container"><div class="skew"><router-link class="nav-link" to="/contact">Hafðu samband</router-link></div></div>
         </div>
         <div class="grid-container">
          <div class="skew">Instagram</div>
           <div class="skew">Facebook</div>
           <div class="skew">Tumblr</div>
       </div>
       </div>
  </div>
</template>

<script>
export default {
  name: 'Frontpage',

  data() {
     return{
         isActive: [true, false],
     }       
  },
  
  methods: {
    shiftLanguage: function (){
      this.isActive.forEach((element, index) => {
        return this.$set(this.isActive, index, !this.isActive[index] )
      });
      
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-link {
  text-decoration: none;
}
a:link, :visited{
  color: inherit;
}


.little-nav .skew-container {
  font-size: 48px;
}
.skew-container  {
    border-top: 2px solid #000;
    max-width: 99.9%;
    text-decoration: none;
    font-size: 96px;
    font-weight: 600;
    text-align: left;
    color: black;
}
.skew-container .skew {
    -ms-transform: skew(10deg, 0); /* IE 9 */
    -webkit-transform: skew(10deg, 0); /* Safari prior 9.0 */
    transform: skew(10deg, 0); /* Standard syntax */
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

</style>
