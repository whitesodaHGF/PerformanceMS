var express = require('express');
var router = express.Router();
var savebeanformRouter = {};

let savebeanformController=require('../../controllers/add');

//先检查登录
// router.use(testController.T);
router.post('/',savebeanformController.saveBeanform);

savebeanformRouter.router = router;

module.exports = savebeanformRouter;

