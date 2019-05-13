var express = require('express');
var router = express.Router();
var addRouter = {};

let addController=require('../../controllers/add');

//先检查登录
// router.use(testController.T);
router.post('/',addController.ADD);

addRouter.router = router;
module.exports = addRouter;

 