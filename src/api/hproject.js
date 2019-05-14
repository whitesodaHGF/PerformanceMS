import * as API from './'  //index.js是一个统一的接口
export default {
   add: params => {
        return API.POST('/api/hproject/add', params)
      },
   delete:params=>{
        return API.POST('/api/hproject/delete', params)
      }, 
   find:params=>{
        return API.POST('/api/hproject/find', params)
      },
  findid:params=>{
        return API.POST('/api/hproject/findid', params)
     },
}
