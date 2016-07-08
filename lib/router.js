'use strict';

const router = require('express').Router()
  , microtime = require('./microtime');

router.get('/:dateStr', function (req, res, next) {
  res.json(microtime.convert(req.params.dateStr));
});

module.exports = router;
