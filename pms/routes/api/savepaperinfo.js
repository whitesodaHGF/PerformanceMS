var express = require('express');
var router = express.Router();
var savepaperformRouter = {};

let savepaperformController=require('../../controllers/add');

//先检查登录
// router.use(testController.T);
router.post('/',savepaperformController.savePaperform);

savepaperformRouter.router = router;

module.exports = savepaperformRouter;

