'use strict';

process.on('uncaughtException', function (err) {
  console.error('Caught exception: %s', err);
});

// ---

const app = require('express')();

app.use(require('./lib/router'));

app.listen(process.env.APP_PORT, '0.0.0.0', function () {
  console.log('Server listening on :%d', process.env.APP_PORT);
});
