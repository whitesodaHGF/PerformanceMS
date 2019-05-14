import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters' // 导入响应的模块，*相当于引入了这个组件下所有导出的事例
import * as actions from './action'
import * as mutations from './mutation'
 

Vue.use(Vuex)

// 首先声明一个需要全局维护的状态 state,比如 我这里举例的resturantName，相当于定义全局变量
const state = {
    username:"",
    zprojectname:"",
    H_contractname:"",
}
 

// 注册上面引入的各大模块
const store = new Vuex.Store({
    state,    // 共同维护的一个状态，state里面可以是很多个全局状态
    getters,  // 获取数据并渲染
    actions,  // 数据的异步操作
    mutations  // 处理数据的唯一途径，state的改变或赋值只能在这里！！！
})
export default store;
