let mycourseController = {};
const query = require('../data/db');
let  _query = query;
/**
 * 添加用户信息
 * @param req
 * @param res
 * @param next
 */
mycourseController.add = function(req, res) {
    var sql = "INSERT INTO  COURSE_INFORM (course_name,course_teacher_unit,course_num,course_remark,course_class,course_counttime,course_teacher_name,course_time,course_position,course_teacher_id)"+
    "VALUES(?,?,?,?,?,?,?,?,?,?)";
    var sqlparams =[
        req.body.course_name,
        req.body.course_teacher_unit,
        req.body.course_num,
        req.body.course_remark,
        req.body.course_class,
        req.body.course_counttime,
        req.body.course_teacher_name,
        req.body.course_time,
        req.body.course_position,
        req.body.course_teacher_id
    ];
    console.log(sqlparams);
    _query(sql,sqlparams,function(err,result){
       console.log(result);
    if (err){console.log(err); return res.json({"message": "课程添加失败"});}
    return res.json({"message": "课程添加成功"})
    })
}
/**
 * 
 * @param req
 * @param res
 * @param next
 */
mycourseController.find = function(req, res) {
    var sql="SELECT * FROM  COURSE_INFORM ";
    const sqlparams=[];
    _query(sql,sqlparams,function(err,result){
        //do something
        if (err) {console.log(err);return;}
        console.log(result);
        res.send(result);
    })
}
mycourseController.delete = function(req, res) {
    var course_name = req.body.course_name;
    var delsql = "DELETE FROM COURSE_INFORM WHERE course_name = '"+course_name+"'";
    const sqlparams=[];
    _query(delsql,sqlparams,function(err,result){
        //do something
        if (err) {console.log(err);return;}
        console.log(result);
        if (err){console.log(err); return res.json({"message": "课程删除失败"});}
        return res.json({"message": "课程删除成功"})
    })
}   


module.exports =mycourseController;