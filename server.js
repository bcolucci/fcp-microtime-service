'use strict';

process.on('uncaughtException', function (err) {
  console.error('Caught exception: %s', err);
});

// ---

const app = require('express')();

app.use(require('./lib/router'));

app.listen(process.env.PORT, function () {
  console.log('Server listening on :%d', process.env.PORT);
});
