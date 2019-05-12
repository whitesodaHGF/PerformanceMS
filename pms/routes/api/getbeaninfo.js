var express = require('express');
var router = express.Router();
var getbeanformRouter = {};

const getbeanformController=require('../../controllers/test');

//先检查登录
// router.use(testController.T);
router.get('/',getbeanformController.getBeaninfo);

getbeanformRouter.router = router;

module.exports = getbeanformRouter;

