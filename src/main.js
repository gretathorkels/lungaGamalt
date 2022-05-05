import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import Events from './components/pages/Events';
import Frontpage from './components/pages/Frontpage';
//import Navigation from './components/pages/navigation/Navigation';
import Workshops from './components/pages/Workshops';
import Concerts from './components/pages/Concerts';
import Lungalab from './components/pages/Lungalab';
import Shop from './components/pages/Shop';
import Youthexchange from './components/pages/Youthexchange';
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
  {path: '/events', component: Events },
  {path: '/workshops', component: Workshops },
  {path: '/concerts', component: Concerts },
  {path: '/lungalab', component: Lungalab },
  {path: '/youthexchange', component: Youthexchange },
  {path: '/eventindex', component: Eventindex },
  {path: '/shop', component: Shop },
  {path: '/en/sponsors', component: Sponsors },
  {path: '/sponsors', component: Sponsors },
  {path: '/about', component: About },
  {path: '/contact', component: Contact },
  {path: '/applications', component: Applications },
 
  //{path: '/', component: Frontpage },
]
const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(){
    return{x:0, y:0}
  }
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  i18n,
  router
}).use(router).$mount('#app')
