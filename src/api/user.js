import * as API from '.'  //index.js是一个统一的接口
export default {
    login: params => {
        return API.POST('/users/login', params)
      },
    register:params=>{
        return API.POST('/users/register', params)
      },
}
