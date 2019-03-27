var express = require('express');
var router = express.Router();
var userRouter = {};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

  console.log("!!!!");
  var testController = require('../../controllers/test');

//先检查登录
  router.use(testController.T);
});



userRouter.router = router;
module.exports = userRouter;

