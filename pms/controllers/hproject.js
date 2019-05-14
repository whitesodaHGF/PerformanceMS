let hprojectController = {};
const query = require('../data/db');
let  _query = query;
/**
 * 
 * @param req
 * @param res
 * @param next
 */
hprojectController.add = function(req, res) {
    var sql = "INSERT INTO H_PROJECT (H_contractsubjectClassId,H_contractname,H_contractType,H_contractcode,H_contractchargerType,H_contractchargerName,H_contractchargerNametel,H_contractunitId,H_contractsubjectId,H_contractprojectStatusId,H_contractfeeAuthorize,H_contractauthorizeDate,H_contractentryTime,H_contractstartDate,H_contractactualEndDate,H_contractfeeCode,H_contractbuyerName,H_contractbuyerType,H_contractbuyerAddress,"+
    "H_contractbuyerArea,H_contractbuyerZipCode,H_contractbuyerTel,H_contractbuyerRepresentative,H_contractprojectSourceId,H_contractresearchClassId,H_contractcooperateId,H_contractintro)"+
    "VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    var sqlparams =[
        req.body.H_contractsubjectClassId,
        req.body.H_contractname,
        req.body.H_contractType,
        req.body.H_contractcode,
        req.body.H_contractchargerType,

        req.body.H_contractchargerName,
        req.body.H_contractchargerNametel,
        req.body.H_contractunitId,
        req.body.H_contractsubjectId,
        req.body.H_contractprojectStatusId,

        req.body.H_contractfeeAuthorize,
        req.body.H_contractauthorizeDate,
        req.body.H_contractentryTime,
        req.body.H_contractstartDate,
        req.body.H_contractactualEndDate,

        req.body.H_contractfeeCode,
        req.body.H_contractbuyerName,
        req.body.H_contractbuyerType,
        req.body.H_contractbuyerAddress,
        req.body.H_contractbuyerArea,

        req.body.H_contractbuyerZipCode,
        req.body.H_contractbuyerTel,
        req.body.H_contractbuyerRepresentative,
        req.body.H_contractprojectSourceId,
        req.body.H_contractresearchClassId,
        
        req.body.H_contractcooperateId,
        req.body.H_contractintro];
        console.log(sql);
        console.log(sqlparams);
        _query(sql,sqlparams,function(err,result){
           console.log(result);
        if (err){console.log(err); return res.json({"message": "项目添加失败"});}
        return res.json({"message": "项目添加成功"})
        })
        
}

/**
 * 
 * @param req
 * @param res
 * @param next
 */
hprojectController.find = function(req, res){
    var sql="SELECT H_contractname,H_contractchargerName,H_contractauthorizeDate,H_contractfeeAuthorize,H_contractunitId,H_idea  FROM  H_PROJECT ";
    const sqlparams=[];
    _query(sql,sqlparams,function(err,result){
        //do something
        if (err) {console.log(err);return;}
        console.log(result);
        res.send(result);
    })
} 
hprojectController.findid = function(req,res){
    var sql = "SELECT * FROM H_PROJECT ";
    var H_contractname = req.body.H_contractname;
    const sqlparams=[];
    _query(sql,sqlparams,function(err,result){
        //do something
        if (err) {console.log(err);return;}
        console.log(result);
        for(i=0;i<result.length;i++){
            if(result[i].H_contractname==H_contractname)
            {
                console.log(result[i]);
                res.send(result[i]);
            }
        }
    })
}

 module.exports = hprojectController;