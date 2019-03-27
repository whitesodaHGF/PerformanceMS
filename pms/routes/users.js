var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var testController = require('../../controllers/test');

//先检查登录
router.use(testController.T);

module.exports = router;
