import * as API from './'  //index.js是一个统一的接口
export default {
   add: params => {
        return API.POST('/api/v1/hproject/add', params)
      },
   delete:params=>{
        return API.POST('/api/v1/hproject/delete', params)
      }, 
   find:params=>{
        return API.POST('/api/v1/hproject/find', params)
      },
  findid:params=>{
        return API.POST('/api/v1/hproject/findid', params)
     },
}
