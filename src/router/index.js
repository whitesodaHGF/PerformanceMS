import Vue from 'vue'
import VueRouter from 'vue-router'

import Bean from '.././components/Bean.vue'
import Paper from '.././components/Paper.vue'
import PInfo from '.././components/PInfo.vue'
import ResearchUnit from '.././components/ResearchUnit.vue'
import HelloWorld from '.././components/HelloWorld.vue'
import Unitlist from '.././components/Unitlist.vue'
import Beanlist from '.././components/Beanlist.vue'
import Paperlist from '.././components/Paperlist.vue'
import Notice from '.././components/Notice.vue'
import Download from '.././components/Download.vue'
import UnitSearch from '.././components/UnitSearch.vue'
import BeanSearch from '.././components/BeanSearch.vue'
import PaperSearch from '.././components/PaperSearch.vue'


import Hprojectadd from '.././components/Hprojectadd'
import Hprojectlist from '.././components/Hprojectlist.vue'
import Hprojectsearch from '.././components/Hprojectsearch.vue'
import Hprojectshow from '.././components/Hprojectshow.vue'

import Zprojectadd from '.././components/Zprojectadd'
import Zprojectlist from '.././components/Zprojectlist.vue'
import Zprojectseach from '.././components/Zprojectseach.vue'
import Zprojectshow from '.././components/Zprojectshow.vue'
import Zprojectchange from '.././components/Zprojectchange.vue'
import Zprojectinform from '.././components/Zprojectinform.vue'

import  login from '.././components/Login.vue'
import  Register from '.././components/Register.vue'

import mycourse from '.././components/mycourse.vue'
import Home from '../components/Home'


//import mycourseadd from '.././components/mycourseadd.vue'

// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
// const  Bean ={ template: bean}
// const  Paper ={ template: paper}  

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
  },
  {
    path:'/Home',
    component:Home,
    children:[
  {
    path: '/',
    name: '/',
    component: Notice,
  },
  { 
    path:'/Bean',
    component:Bean,
  },
  { 
    path:'/Paper',
    component:Paper,
  },
  { 
    path:'/PInfo',
    component:PInfo,
  },
  { 
    path:'/ResearchUnit',
    component:ResearchUnit,
  },
  { 
    path:'/HelloWorld',
    component:HelloWorld,
  },
  { 
    path:'/Unitlist',
    component:Unitlist,
  },
  { 
    path:'/Beanlist',
    component:Beanlist,
  },
  { 
    path:'/Paperlist',
    component:Paperlist,
  },
  {
    path: '/Notice',
    component: Notice
  },
  {
    path: '/Download',
    component: Download
  },
  {
    path: '/UnitSearch',
    component: UnitSearch
  },
  {
    path: '/BeanSearch',
    component: BeanSearch
  },
  {
    path: '/PaperSearch',
    component: PaperSearch
  },
  {
    path: '/Hprojectadd',
    component: Hprojectadd
  },
  {
    path: '/Hprojectlist',
    component: Hprojectlist
  },
  {
    path: '/Hprojectsearch',
    component: Hprojectsearch
  },
  {
    path: '/Hprojectshow',
    component: Hprojectshow
  },
  {
    path: '/Zprojectadd',
    component: Zprojectadd
  },
  {
    path: '/Zprojectlist',
    component: Zprojectlist
  },
  {
    path: '/Zprojectseach',
    component: Zprojectseach
  },
  {
    path: '/Zprojectshow',
    component: Zprojectshow
  },
  {
    path: '/Zprojectchange',
    component: Zprojectchange
  },
  {
    path: '/Zprojectinform',
    component:Zprojectinform
  },
  {
    path: '/mycourse',
    component:mycourse
  },
  ]},
  {
    path:'/Register',
    component:Register
  },
  {
    path: '/Login',
    component: login,
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes:routes, // (缩写) 相当于 routes: routes
});


new Vue({
  el:'#app',
  router:router
})

export default router