import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
//import VueResource from "vue-resource";

//import VueShowdown from 'vue-showdown' 

//Vue.config.productionTip = false
Vue.use(VueRouter)

import Events from './components/pages/events/Events';
import Frontpage from './components/pages/frontpage/Frontpage';
//import Navigation from './components/pages/navigation/Navigation';
import Workshops from './components/pages/workshops/Workshops';
import Concerts from './components/pages/concerts/Concerts';
import Lungalab from './components/pages/lungalab/Lungalab';
import Openstudios from './components/pages/openstudios/Openstudios';
import Eventindex from './components/pages/eventindex/Eventindex';
import Sponsors from './components/pages/sponsors/Sponsors';
import Contact from './components/pages/contact/Contact';
import Applications from './components/pages/applications/Applications';
import About from './components/pages/about/About';
//Vue.use(VueShowdown)
//app.use(express.static(__dirname + '/articles'));
const routes = [  
  {path: '/', component: Frontpage },
  {path: '/events', component: Events },
  {path: '/workshops', component: Workshops },
  {path: '/concerts', component: Concerts },
  {path: '/lungalab', component: Lungalab },
  {path: '/openstudios', component: Openstudios },
  {path: '/eventindex', component: Eventindex },
  {path: '/sponsors', component: Sponsors },
  {path: '/about', component: About },
  {path: '/contact', component: Contact },
  {path: '/applications', component: Applications },
 
  //{path: '/', component: Frontpage },
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router,
  
}).$mount('#app')
