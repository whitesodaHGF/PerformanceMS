var express = require('express');
var router = express.Router();
var indexRouter = {};

var zprojectController = require('../../controllers/zproject');

//纵向项目的新增
router.post('/add', zprojectController.add);
//纵向项目的删除
//router.post('/delete', zprojectController.delete);
//纵向项目的修改
router.post('/change', zprojectController.change);
//纵向项目的查询
router.post('/find', zprojectController.find);
//纵向项目的详细信息
router.post('/findid', zprojectController.findid);

indexRouter.router = router;
module.exports = indexRouter;
