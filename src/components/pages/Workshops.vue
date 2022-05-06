<template>
  <div class="workshops">
    <Header v-bind:menu="'menu'" />
    <Headline v-bind:title="title" />

    <div class="head-container">
      <div class="sub-text">
      {{$t("workshops.firstline")}}
      </div>
    </div>


    <div class="flex-grid">
       <div class="col">
         <div class="text">{{$t("workshops.weekinfo")}}</div>
       </div>

       <div class="col">
         <div class="text">{{$t("workshops.onlineinfo")}}</div>
       </div>

       <div class="col">
         <div class="text">{{$t("workshops.childreninfo")}}</div>
       </div>

     </div>

    <div class="sub-header">
         <a class="nav-link" href="https://podio.com/webforms/27465134/2125633" target="_blank">
             {{$t("workshops.applyhere")}}
         </a>
     </div> 



<div v-for="workshop in workshops" :key="workshop.attributes.hofundur" >
<div class="seperator"></div>
    <div class="flex-grid">
      <div class="col"><div class="workshop-title">{{workshop.attributes.title}}</div></div>
    <div class="col"><div class="workshop-about2">{{workshop.attributes.teacher1}}<br>{{workshop.attributes.teacher2}}<br>{{workshop.attributes.teacher3}}</div></div>
      <div class="col"><div class="workshop-about2">
        <div v-if="!!workshop.attributes.applyhere">
          <a
              class="nav-link"
              :href="workshop.attributes.applyhere"
              target="_blank"
          >{{$t("workshops.applyhere")}}</a
          >
        </div>
        <div v-if="!!workshop.attributes.instagram">
        <a
            class="nav-link"
            :href="workshop.attributes.instagram"
            target="_blank"
        >Instagram</a
        >
      </div>
        <div v-if="!!workshop.attributes.website">
          <a
              class="nav-link"
              :href="workshop.attributes.website"
              target="_blank"
          >{{$t("workshops.website")}}</a
          >
        </div>

      </div></div>
    </div>
    <div class="img-container"><img class="img-child" :src="workshop.attributes.mynd"></div>

    <div class="flex-grid">
      <div class="col"><div class="workshop-about">{{workshop.attributes.about1}}
      <br><br>
    {{workshop.attributes.about2}}<br><br>
        {{workshop.attributes.about3}}</div></div>
      <div class="col"><div class="workshop-info">{{workshop.attributes.aboutteacher1}}<br><br>{{workshop.attributes.aboutteacher2}}<br><br>{{workshop.attributes.aboutteacher3}}</div></div>
    </div>
</div>

    <div class="seperator"></div>

    <div class="sub-header">
      <a class="nav-link" href="https://podio.com/webforms/27465134/2125633" target="_blank">
        {{$t("workshops.applyhere")}}
      </a>
    </div>

    <Footer />
  </div>

</template>

<script>
import Header from "../shared/Header";
import Headline from "../shared/Headline";
import Footer from "../shared/Footer";

//import Workshops from "../../test.md"
export default {
  name: "workshops",
  components: { Header, Headline, Footer },
  // props: {
  //   msg: String
  // },
  data() {
    let resolve
    if(this.$i18n.locale == 'isl'){
      resolve = require.context("../../../content/workshops/isl", true, /\.md$/);
    }
    else resolve = require.context("../../../content/workshops/en", true, /\.md$/);
     
    const imports = resolve.keys().map(key => {
      // const [, name] = key.match(/\/(.+)\.md$/);
      // console.log(name)
     
      return resolve(key);
    })
    return {
      title: "title.workshops",
      prefix: "workshops",
      workshops: imports

    };
  },
  methods: {
    getWorkshops(){
      let resolve
    if(this.$i18n.locale == 'isl'){
      resolve = require.context("../../../content/workshops/isl", true, /\.md$/);
    }
    else resolve = require.context("../../../content/workshops/en", true, /\.md$/);
     
    this.workshops = resolve.keys().map(key => {
      // const [, name] = key.match(/\/(.+)\.md$/);
      // console.log(name)
     
      return resolve(key);
    })
    }
  },
  watch: {
    '$i18n.locale': {
      
      handler() {
        this.getWorkshops();
      }
    }
  },
  mounted(){
    this.getWorkshops();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .flex-grid {
    display: flex;
    justify-content:space-between;
  }

  .flex-grid .col {
    flex: 1;
    margin:10px;
  }


  @media (max-width: 800px) {
    .flex-grid {
      display: block;
      .col {
        width: 100%;
        margin: 10px;
      }
    }
  }



.head-container {
  display: flex;
}



.seperator {
  width: 100%;
  border-top: 2px solid #000000;
}

.sub-text {
/* Headline 2 */
font-weight: 600;
font-size: 48px;
margin-left: 40px;
text-align: center;
color: #000000;
  line-height: 120%;
}


.table {
font-weight: 600;
font-size: 36px;
line-height: 43px;
padding: 15px 0 15px 0;
color: #000000;
text-align: center;
}

.workshoptable {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding: 10px;
}

.workshop-title {
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 90%;
}

.workshop-about {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  margin: 30px;
}

  .workshop-about2 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    margin: 0px;
  }

.workshop-info {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  margin: 30px;
}

a:hover {
  color: #00FF38;
}



.text{
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #000000;
  margin: 50px;
  text-align: left;
  line-height: 115%;
}

.img-container {
display:flex;
flex-direction: column;
flex-wrap:wrap;
justify-content: center;
align-self: center;
}

.img-child {
max-width: 70%;
height: auto;
align-self: center;
margin:30px;
}

</style>
