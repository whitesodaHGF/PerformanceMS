var express = require('express');
var router = express.Router();

var indexRouter={};

//接口访问
router.use('/api',require('./api/index'))

/* 服务端主页. */
router.get('/', function(req, res, next) {
  res.render('index');
});

indexRouter.router = router;

module.exports = indexRouter;
