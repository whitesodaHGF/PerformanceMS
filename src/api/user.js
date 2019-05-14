import * as API from './'  //index.js是一个统一的接口
export default {
    login: params => {
        return API.POST('/api/users/login', params)
      },
    register:params=>{
        return API.POST('/api/users/register', params)
      },
}
