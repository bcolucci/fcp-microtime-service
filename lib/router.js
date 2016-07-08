'use strict';

const router = require('express').Router()
  , microtime = require('./microtime');

router.get('/:dateStr', (req, res) => res.json(microtime.convert(req.params.dateStr)));

module.exports = router;
