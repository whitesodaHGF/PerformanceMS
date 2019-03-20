// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import NavMenu from './components/NavMenu.vue'
import Header from './components/Header.vue'
import router from './router/index'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)


//import  VueResource  from 'vue-resource'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
//Vue.use(VueResource)
Vue.use(ElementUI)

/* eslint-disable no-new */ 
new Vue({
  el: '#app',
  router,
  components: { App, NavMenu, Header },
  template: '<App/>'
})
 
