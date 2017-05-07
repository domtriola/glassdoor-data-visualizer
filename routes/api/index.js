const express = require('express');
const router = express.Router();

router.use('/queries', require('./queries'));

module.exports = router;
