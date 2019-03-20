import * as API from './'

export default {

    test:params =>{
        return API.GET('/api/test',params)
    }
}

