var express = require('express');
var router = express.Router();
var indexRouter = {};

var mycourseController = require('../../controllers/mycourse');

//课程的新增
router.post('/add', mycourseController.add);
//课程的删除
router.post('/delete', mycourseController.delete);
//课程的查询
router.post('/find', mycourseController.find);
//课程的详细信息
//router.post('/findid', mycourseController.findid);

indexRouter.router = router;
module.exports = indexRouter;
