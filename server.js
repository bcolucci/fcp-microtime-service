'use strict';

process.on('uncaughtException', function (err) {
  console.error('Caught exception: %s', err);
});

// ---

const app = require('express')()
  , PORT = process.env.LOCAL_PORT || 80;

app.use(require('./lib/router'));

app.listen(PORT, '0.0.0.0', function () {
  console.log('Server listening on :%d', PORT);
});
