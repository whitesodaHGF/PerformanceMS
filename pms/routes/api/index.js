var express = require('express');
var router = express.Router();

var indexRouter = {};

router.use('/test', require('./test.js').router);

indexRouter.router = router;
module.exports = indexRouter;
