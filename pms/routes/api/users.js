/**
 * Created by jerry on 2017/11/13.
 * users相关路由
 * 采用 restful api 风格
 */

var express = require('express');
var router = express.Router();
var indexRouter = {};
var userController = require('../../controllers/user');

//用户登录
router.post('/login', userController.login);
//用户退出
router.get('/logout', userController.logout);
//用户注册
router.post('/register',userController.register);

//先检查登录
router.use(userController.checkLogin);

//更新个人部分信息
router.patch('/profile', userController.profile);
//用户修改个人密码
router.patch('/changepwd', userController.changepwd);

//返回user的集合
router.get('/', userController.find);

indexRouter.router = router;

module.exports = indexRouter;

