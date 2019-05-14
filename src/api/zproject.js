import * as API from './'  //index.js是一个统一的接口
export default {
   add: params => {
        return API.POST('/api/v1/zproject/add', params)
      },
   delete:params=>{
        return API.POST('/api/v1/zproject/delete', params)
      }, 
   find:params=>{
        return API.POST('/api/v1/zproject/find', params)
      },
   change:params=>{
    return API.POST('/api/v1/zproject/change', params)
   },
   findid:params=>{
      return API.POST('/api/v1/zproject/findid', params)
   },
}
