var express = require('express');
var router = express.Router();
var userRouter = {};

const testController=require('../../controllers/get');

/* GET users listing. */
router.get('/',testController.T);

userRouter.router = router;
module.exports = userRouter;