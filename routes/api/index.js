const router = require('express').Router();
const user = require('./userRotues');

router.use('/user',user);

module.exports = router;