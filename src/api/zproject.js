import * as API from './'  //index.js是一个统一的接口
export default {
   add: params => {
        return API.POST('/api/zproject/add', params)
      },
   delete:params=>{
        return API.POST('/api/zproject/delete', params)
      }, 
   find:params=>{
        return API.POST('/api/zproject/find', params)
      },
   change:params=>{
    return API.POST('/api/zproject/change', params)
   },
   findid:params=>{
      return API.POST('/api/zproject/findid', params)
   },
}
