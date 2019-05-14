import * as API from './'  //index.js是一个统一的接口
export default {
   add: params => {
        return API.POST('/api/v1/mycourse/add', params)
      },
    
   delete:params=>{
        return API.POST('/api/v1/mycourse/delete', params)
      }, 
   find:params=>{
        return API.POST('/api/v1/mycourse/find', params)
      },
}
