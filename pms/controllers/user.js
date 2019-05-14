/**
 * users 控制器
 *
 * Created by jerry on 2017/11/2.
 */
const Users = require('../data/user'); 
let _query=require('../data/db');
 //require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。 
let userController = {};
let _Users = Users;  

/**
 * 检查用户的登录状态
 * @param req
 * @param res
 * @param next
 */
userController.checkLogin = function (req, res, next) {
  //用户已经登录
  if (req.session.userId) {
    next();
  }
  else {
    res.json({"errcode": 40001, "errmsg": "您还没有登录"});
  }
};
//返回响应 一个json对象！
/**
 * 登录
 * @param req
 * @param res
 */
userController.login = function (req, res) {
  let username = _.trim(req.query.username || req.body.username || '');
  let pwd = req.body.pwd;
  let states = req.body.state;
  if (!username || !pwd) {
    return res.json({"errcode": 40002, "errmsg": "不合法的参数"});
  }
var sql;
if(states===1){
  
  sql = "select U_Puserid, U_Ppasswd from U_Userinfom";
}
else if(states===2)
  sql = "select U_Suserid, U_Spasswd from U_Suserinfom";
  const addSqlparmals=[];
_query(sql,addSqlparmals,function(err,result){
    //do something
    if (err) throw error;
    var i;
    console.log(result);
    if(states===1){
    for(i=0;i<result.length;i++)
    {
      if(result[i].U_Puserid===username)
        {
            if(result[i].U_Ppasswd === pwd)
            {
              req.session.username = result[i].U_Puserid;
              return res.json({
                username: result[i].U_Puserid
              });
            } else {
              return res.json({"errcode": 40004, "errmsg": "密码错误"});
            }
        }
    }
    if(i===result.length) {
      return res.json({"errcode": 40003, "errmsg": "用户不存在"});
    }}
    else if(states===2){
      for(i=0;i<result.length;i++)
      {
        if(result[i].U_Suserid===username)
          {
              if(result[i].U_Spasswd === pwd)
              {
                req.session.username = result[i].U_Suserid;
                return res.json({
                  username: result[i].U_Suserid
                });
              } else {
                return res.json({"errcode": 40004, "errmsg": "密码错误"});
              }
          }
      }
      if(i===result.length) {
        return res.json({"errcode": 40003, "errmsg": "用户不存在"});
      }
    }
});

};
/**
 * 检查用户的登录状态
 * @param req
 * @param res
 * @param next
 */
userController.checkLogin = function (req, res, next) {
  //用户已经登录
  if (req.session.userId) {
    next();
  }
  else {
    res.json({"errcode": 40001, "errmsg": "您还没有登录"});
  }
};

/**
 * 注册
 * @param req
 * @param res
 */

userController.register=function (req, res){
  let  U_Puserid = _.trim(req.query.U_Puserid || req.body.U_Puserid || '');
  let  U_Ppasswd =req.body.U_Ppasswd;
  let  U_Pmainbox =req.body.U_Pmainbox;
  let  U_Ptelphoto =req.body.U_Ptelphoto;
  let  U_Ppeoid =req.body.U_Ppeoid;
  var  addSql = 'INSERT INTO U_Userinfom (U_Puserid,U_Ppasswd,U_Pmainbox,U_Ptelphoto,U_Ppeoid) VALUES (?,?,?,?,?)';
  var  addSqlparmals=[];s= [U_Puserid,U_Ppasswd,U_Pmainbox,U_Ptelphoto,U_Ppeoid];
  console.log(addSql);
  _query(addSql,addSqlparmals,function(err,result){
    //do something
    if (err){console.log("注册失败"); return ;};
    console.log(result);
    return res.json({"message": "用户注册成功"});
  })
}
/**
 * 退出登录
 * @param req
 * @param res
 */
userController.logout = function (req, res) {
  req.session.destroy();
  res.json({"errcode": 0, "errmsg": "退出完成"});
};

/**
 * 修改个人部分信息
 * @param req
 * @param res
 */
userController.profile = function (req, res) {
  let nickname = req.body.nickname;
  let email = req.body.email;
  let name  = req.body.name;
  let i = _.findIndex(_Users, function (u) {
    return u.id === req.session.userId
  })
  if (i > -1) {
    _Users[i].nickname = nickname;
    _Users[i].email = email;
    _Users[i].name = name;
    res.json({"errcode": 0, "errmsg": "修改成功"});
  } else {
    res.json({"errcode": 40009, "errmsg": "处理失败"});
  }
};

/**
 * 修改密码
 * @param req
 * @param res
 */
userController.changepwd = function (req, res) {
  //TODO 未开发
};

/**
 * 通过书名查询，获取图书列表
 * @param req
 * @param res
 */
userController.find = function (req, res) {
  let page = parseInt(req.query.page || 1); //页码（默认第1页）
  let limit = parseInt(req.query.limit || 10); //每页显示条数（默认10条）
  let name = req.query.name || '';
  let total = 0;
  let rltUsers = [];
  if (name.length > 0) {
    let mockUsers = _Users.filter(user => {
      return (user.username.indexOf(name) > -1 || user.nickname.indexOf(name) > -1 || user.name.indexOf(name) > -1)
    });
    total = mockUsers.length; //总条数
    rltUsers = mockUsers.filter((u, index) => index < limit * page && index >= limit * (page - 1))
  } else {
    total = _Users.length; //总条数
    rltUsers = _Users.filter((u, index) => index < limit * page && index >= limit * (page - 1))
  }
  res.json({
    total: total,
    limit: limit,
    users: rltUsers
  })
};

module.exports = userController;
