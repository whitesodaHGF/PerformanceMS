var express = require('express');
var router = express.Router();
var getunitformRouter = {};

const getunitformController=require('../../controllers/get');

//先检查登录
// router.use(testController.T);
router.get('/',getunitformController.getUnitinfo);

getunitformRouter.router = router;

module.exports = getunitformRouter;

