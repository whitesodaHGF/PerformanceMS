var express = require('express');
var router = express.Router();
var saveUnitformRouter = {};

let saveUnitformController=require('../../controllers/add');

//先检查登录
// router.use(testController.T);
router.post('/',saveUnitformController.saveUnitform);

saveUnitformRouter.router = router;

module.exports = saveUnitformRouter;

