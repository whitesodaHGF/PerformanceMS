import * as API from './'

export default {

    test:params =>{
        return API.GET('/user',params)
    },

    saveinfo:params =>{
        return API.POST('/test',params)
    },

    getUnitinfo:params=>{
        return API.GET('/getunitinfo',params);
    },

    saveUnitinfo:params=>{
        return API.POST('/saveunitinfo',params);
    },

    getBeaninfo:params=>{
        return API.GET('/getbeaninfo',params);
    },

    saveBeaninfo:params=>{
        return API.POST('/savebeaninfo',params);
    },

    getPaperinfo:params=>{
        return API.GET('/getpaperinfo',params);
    },

    savePaperinfo:params=>{
        return API.POST('/savepaperinfo',params);
    },
}

