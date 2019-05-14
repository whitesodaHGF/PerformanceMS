import * as API from './'  //index.js是一个统一的接口
export default {
   add: params => {
        return API.POST('/mycourse/add', params)
      },
    
   delete:params=>{
        return API.POST('/mycourse/delete', params)
      }, 
   find:params=>{
        return API.POST('/mycourse/find', params)
      },
}
