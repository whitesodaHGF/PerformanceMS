var express = require('express');
var router = express.Router();
var testRouter = {};
var testController = require('../../controllers/test');

//先检查登录
router.use(testController.T);

testRouter.router = router;
module.exports = testRouter;

