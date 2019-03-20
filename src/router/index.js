import Vue from 'vue'
import VueRouter from 'vue-router'
import Bean from '.././components/Bean.vue'
import Paper from '.././components/Paper.vue'
import PInfo from '.././components/PInfo.vue'
import ResearchUnit from '.././components/ResearchUnit.vue'
import ProjectMain from '.././components/ProjectMain.vue'
import HelloWorld from '.././components/HelloWorld.vue'
import Unitlist from '.././components/Unitlist.vue'
import Beanlist from '.././components/Beanlist.vue'
import Paperlist from '.././components/Paperlist.vue'
import Notice from '.././components/Notice.vue'
import Download from '.././components/Download.vue'
import UnitSearch from '.././components/UnitSearch.vue'
import BeanSearch from '.././components/BeanSearch.vue'
import PaperSearch from '.././components/PaperSearch.vue'

import ProjectSeach from '.././components/ProjectSeach.vue'
import Projectadd from '.././components/Projectadd.vue'
import Projectapply from '.././components/Projectapply.vue'
import Projectall from '.././components/Projectall.vue'
import Projectchange from '.././components/Projectchange.vue'
import Mycourse from '.././components/Mycourse.vue'
import Mycourseadd from '.././components/Mycourseadd.vue'

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
    path: '/ProjectSeach',
    component: ProjectSeach
  },
  {
    path: '/ProjectMain',
    component: ProjectMain
  },
  {
    path: '/Projectadd',
    component: Projectadd
  },
  {
    path: '/Projectapply',
    component: Projectapply
  },
  {
    path: '/Projectall',
    name: 'Projectall',
    component: Projectall
  },
  {
    path: '/Projectchange',
    component: Projectchange
  },
  {
    path: '/Mycourse',
    component:Mycourse
  },
  {
    path: '/Mycourseadd',
    component: Mycourseadd
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