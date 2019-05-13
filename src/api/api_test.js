import * as API from './'

export default {

    getpinfo:params =>{
        return API.GET('/getpinfo',params)
    },

    savepinfo:params =>{
        return API.POST('/savepinfo',params)
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

