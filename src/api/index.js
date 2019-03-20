import axios from 'axios'
import {bus} from '../bus.js'

axios.defaults.withCredentials = true;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';//配置请求头

//添加一个请求拦截器
// axios.interceptors.request.use(function (config) {
//   console.dir(config);
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });

// 添加一个响应拦截器
//暂不添加，等验证用户登录模块的时候考虑
// axios.interceptors.response.use(function (response) {
//     if (response.data && response.data.errcode) {
//       if (parseInt(response.data.errcode) === 40001) {
//         //未登录
//         bus.$emit('goto', '/login')
//       }
//     }
  
//     return response;
//   }, function (error) {
//     // Do something with response error
//     return Promise.reject(error);
//   });
  
//基地址
let base ='https://127.0.0.1:3000';

//通用方法
export const POST = (url,params) => {
    return axios.post(`${base}${url}`,params).then(res => res.data)
}

export const GET = (url,params) => {
    return axios.get(`${base}${url}`,{params:params}).then(res =>res.data)
}

export const PUT = (url,params) => {
    return axios.put(`${base}${url}`,params).then(res =>res.data)
}

export const DELETE = (url,params) => {
    return axios.delete(`${base}${url}`,{params:params}).then(res =>res.data)
}

export const PATCH = (url,params) => {
    return axios.patch(`${base}${url}`,params).then(res =>res.data)
}
