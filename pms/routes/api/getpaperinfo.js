var express = require('express');
var router = express.Router();
var getpaperformRouter = {};

const getpaperformController=require('../../controllers/get');

//先检查登录
// router.use(testController.T);
router.get('/',getpaperformController.getPaperinfo);

getpaperformRouter.router = router;

module.exports = getpaperformRouter;

