<script>
import Frontpage from "./Frontpage.vue";
import About from "./About.vue";
import Shop from "./Shop.vue";

const routes = {
  "/": Frontpage,
  "/about": About,
  "/shop": Shop,
};

export default {
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || Frontpage;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
};
</script>

<template>
  <div id="app">
    <router-view>
      <router-link to="#/shop">shop</router-link>
    </router-view>
    <component :is="currentView" />
  </div>
</template>

<!-- JAVASCRIPT -->
<script>
//import Rather from "./assets/fonts/font.css"
//import Test from "./assets/test.md"
export default {
  name: "app",
};
</script>

<!-- STÍLL CSS -->
<style>
body {
  margin-top: 50px;
  margin-left: 0;
  background-color: #F6FFF7;
  margin-right: 0;
}
.divider {
  border-left: solid 2px #000;
  padding-left: 20px;
}
#app {
  font-family: Rather;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #000;
  margin-top: 15px;
  position: relative;
}
.pointer-mouse {
  cursor: pointer;
}
.nav-link {
  text-decoration: none;
}
.nav-link:hover {
  color: inherit;
}
.subtitle {
  font-size: 48px;
}
::selection {
  color: #F6FFF7;
  background: #000;
  opacity: 1;
}
a:link,
:visited {
  color: inherit;
  text-decoration: none;
}
.left-align {
  text-align: left;
}
.link-container:hover {
  color:#F6FFF7 !important;
  background: #000 !important;
}
.text-container {
  max-width: 800px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin: 0 25% 0 25%;
}
.headline {
  max-width: 99%;
  font-size: 144px;
  font-weight: 600;
  hyphens: auto;
}
@media (max-width: 800px) {
  .headline {
    font-size: 80px;
  }
}
.center {
  text-align: center;
}
.english {
  font-style: italic;
  text-align: right;
}
.icelandic {
  -ms-transform: skew(10deg, 0); /* IE 9 */
  -webkit-transform: skew(10deg, 0); /* Safari prior 9.0 */
  transform: skew(10deg, 0); /* Standard syntax */
  text-align: left;
}
.sub-header {
  font-size: 96px;
  font-weight: 600;
  text-align: center;
}
.sub-line {
  font-size: 48px;
  font-weight: 600;
  margin: 60px 0 40px 0;
}
.text-body {
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  margin: 10px 0 10px 0;
}
.content-img img {
  width: 674px;
  height: 402px;
}
@font-face {
  font-family: "Rather";
  src: url("./assets/fonts/Rather-SemiBold.woff2") format("woff2"),
    url("./assets/fonts/Rather-SemiBold.woff") format("woff");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "Rather";
  src: url("./assets/fonts/Rather-Regular.woff2") format("woff2"),
    url("./assets/fonts/Rather-Regular.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
</style>
