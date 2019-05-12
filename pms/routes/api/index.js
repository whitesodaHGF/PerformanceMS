var express = require('express');
var router = express.Router();
var indexRouter = {};

router.use('/test', require('./test.js').router);
router.use('/user', require('./users.js').router);
router.use('/saveunitinfo', require('./saveunitinfo.js').router);
router.use('/getunitinfo', require('./getunitinfo.js').router);
router.use('/savebeaninfo', require('./savebeaninfo.js').router);
router.use('/getbeaninfo', require('./getbeaninfo.js').router);
router.use('/savepaperinfo', require('./savepaperinfo.js').router);
router.use('/getpaperinfo', require('./getpaperinfo.js').router);
indexRouter.router = router;
module.exports = indexRouter;
