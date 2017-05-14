const express = require('express');
const router = express.Router();

router.use('/queries', require('./queries'));
router.use('/state-quantities', require('./state_quantities'));

module.exports = router;
