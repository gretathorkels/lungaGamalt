import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
//import VueResource from "vue-resource";

//import VueShowdown from 'vue-showdown' 

//Vue.config.productionTip = false
Vue.use(VueRouter)

import Events from './components/pages/Events';
import Frontpage from './components/pages/Frontpage';
//import Navigation from './components/pages/navigation/Navigation';
import Workshops from './components/pages/Workshops';
import Concerts from './components/pages/Concerts';
import Lungalab from './components/pages/Lungalab';
import Openstudios from './components/pages/Openstudios';
import Eventindex from './components/pages/Eventindex';
import Sponsors from './components/pages/Sponsors';
import Contact from './components/pages/Contact';
import Applications from './components/pages/Applications';
import About from './components/pages/About';
import i18n from './i18n'
//Vue.use(VueShowdown)
//app.use(express.static(__dirname + '/articles'));
Vue.use(i18n);
Vue.use(VueRouter);

const routes = [  
  {path: '/', component: Frontpage },
  {path: '/en', component: Frontpage },
  {path: '/:lang/events', component: Events },
  {path: '/events', component: Events },
  {path: '/:lang/workshops', component: Workshops },
  {path: '/workshops', component: Workshops },
  {path: '/en/concerts', component: Concerts },
  {path: '/concerts', component: Concerts },
  {path: '/en/lungalab', component: Lungalab },
  {path: '/lungalab', component: Lungalab },
  {path: '/en/openstudios', component: Openstudios },
  {path: '/openstudios', component: Openstudios },
  {path: '/en/eventindex', component: Eventindex },
  {path: '/eventindex', component: Eventindex },
  {path: '/en/sponsors', component: Sponsors },
  {path: '/sponsors', component: Sponsors },
  {path: '/en/about', component: About },
  {path: '/about', component: About },
  {path: '/en/contact', component: Contact },
  {path: '/contact', component: Contact },
  {path: '/en/applications', component: Applications },
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
  i18n,
  router
}).$mount('#app')
