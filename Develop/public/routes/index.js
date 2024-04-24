const router = require('express').Router();
const apiRouter = require('./apiRoutes')
const htmlRouter = require('./htmlRoutes')

router.use('/api', apiRouter);

router.use('/', htmlRouter);

module.exports = router;