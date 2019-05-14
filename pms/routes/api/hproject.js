var express = require('express');
var router = express.Router();
var indexRouter = {};

var hprojectController = require('../../controllers/hproject');
//横向项目的新增
router.post('/add', hprojectController.add);
//横向项目的删除
//router.post('/delete', hprojectController.delete);
//横向项目的修改
//router.post('/change', zprojectController.change);
//横向项目的查询
router.post('/find', hprojectController.find);
//横向项目的详细查询
router.post('/findid', hprojectController.findid);

indexRouter.router = router;

module.exports = indexRouter;