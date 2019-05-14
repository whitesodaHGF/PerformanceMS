import * as API from './'  //index.js是一个统一的接口
export default {
   add: params => {
        return API.POST('/hproject/add', params)
      },
   delete:params=>{
        return API.POST('/hproject/delete', params)
      }, 
   find:params=>{
        return API.POST('/hproject/find', params)
      },
  findid:params=>{
        return API.POST('/hproject/findid', params)
     },
}
