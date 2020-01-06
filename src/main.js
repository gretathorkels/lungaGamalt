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
//Vue.use(VueShowdown)
//app.use(express.static(__dirname + '/articles'));
const routes = [  
  {path: '/', component: Frontpage },
  {path: '/events', component: Events },
  {path: '/workshops', component: Workshops },
 
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
