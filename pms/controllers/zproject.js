let zprojectController = {};
const query = require('../data/db');
let  _query = query;

/**
 * 添加用户信息
 * @param req
 * @param res
 * @param next
 */

zprojectController.add = function(req, res) {
    
    let Z_resource= req.body.Z_resource;
    let Z_projectName= req.body.Z_projectName;
    let Z_projectCode= req.body.Z_projectCode;
    let Z_chargerType= req.body.Z_chargerType;
    let Z_chargerName= req.body.Z_chargerName;
    let Z_projectUnitId= req.body.Z_projectUnitId;
    let Z_projectsubjectId= req.body.Z_projectsubjectId;
    let Z_projectauthorizeSn= req.body.Z_projectauthorizeSn;
    let Z_projectSourceUnit= req.body.Z_projectSourceUnit;
    let Z_isSubjectBuilding= req.body.Z_isSubjectBuilding;
    let Z_isSubjectBuildingProject= req.body.Z_isSubjectBuildingProject;
    let Z_isSpecialFee= req.body.Z_isSpecialFee;
    let Z_continueUnitOrder= req.body.Z_continueUnitOrder;
    let Z_isSubProject= req.body.Z_isSubProject;
    let Z_project_subProjectNum= req.body.Z_project_subProjectNum;
    let Z_projectStatusId= req.body.Z_projectStatusId;
    let Z_startDate= req.body.Z_startDate;
    let Z_actualEndDate= req.body.Z_actualEndDate;
    let Z_projectfeeAuthorize= req.body.Z_projectfeeAuthorize;
    let Z_projectSourceId= req.body.Z_projectSourceId;
    let Z_researchClassId= req.body.Z_researchClassId;
    let Z_cooperateId= req.body.Z_cooperateId;
    let Z_textarea= req.body.Z_textarea;
    console.log(Z_actualEndDate);

     var sql = "INSERT INTO Z_PROJECT (Z_resource,Z_projectName,Z_projectCode,Z_chargerType,"+
     "Z_chargerName,Z_projectUnitId,Z_projectsubjectId,"+
     "Z_projectauthorizeSn,Z_projectSourceUnit,Z_isSubjectBuilding,Z_isSubjectBuildingProject,"+
     "Z_isSpecialFee,Z_continueUnitOrder,Z_isSubProject,Z_project_subProjectNum,Z_projectStatusId,"+
     "Z_startDate,Z_actualEndDate,Z_projectfeeAuthorize,Z_projectSourceId,Z_researchClassId,"+
     "Z_cooperateId,Z_textarea)"+
     "VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
     var sqlparams =[Z_resource,Z_projectName,Z_projectCode,Z_chargerType,
     Z_chargerName,Z_projectUnitId,Z_projectsubjectId,Z_projectauthorizeSn,Z_projectSourceUnit,Z_isSubjectBuilding
     ,Z_isSubjectBuildingProject,Z_isSpecialFee,Z_continueUnitOrder,Z_isSubProject,Z_project_subProjectNum,Z_projectStatusId,
     Z_startDate,Z_actualEndDate,Z_projectfeeAuthorize,Z_projectSourceId,Z_researchClassId,Z_cooperateId,Z_textarea];
     console.log(sql);
     console.log(sqlparams);
     _query(sql,sqlparams,function(err,result){
        console.log(result);
     if (err){console.log(err); return ;}
     return res.json({"message": "项目添加成功"})
     })
};


zprojectController.find = function(req, res) {
    var sql="SELECT Z_projectCode,Z_projectName,Z_chargerName,Z_projectUnitId,Z_startDate,Z_actualEndDate,Z_projectStatusId,Z_projectsubjectId,Z_researchClassId,Z_projectfeeAuthorize,Z_projectSourceUnit,Z_checkstatus FROM Z_PROJECT ";
    const sqlparams=[];
    _query(sql,function(err,result){
        if (err) {console.log(err);return;}
        console.log(result);
        res.send(result);
    })
};


zprojectController.change = function(req, res) {
    var sql = "SELECT Z_projectCode,Z_projectName,Z_projectUnitId,Z_chargerName,Z_startDate,Z_projectfeeAuthorize  FROM Z_PROJECT ";
    const sqlparams=[];
    _query(sql,function(err,result){
        if (err) {console.log(err);return;}
        console.log(result);
        res.send(result);
    })

};


zprojectController.findid = function(req, res) {
    var sql = "SELECT  * FROM Z_PROJECT ";
    var i=0;
    console.log(req.body)
    console.log(req.body.Z_projectName);
    var Z_projectName = req.body.Z_projectName;
    const sqlparams=[];
    _query(sql,function(err,result){
        if (err) {console.log(err);return;}
        console.log(result);
        for(i=0;i<result.length;i++){
            if(result[i].Z_projectName==Z_projectName)
            {
                res.send(result[i]);
            }
        }
    })
}

module.exports = zprojectController;