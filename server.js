'use strict';

process.on('uncaughtException', function (err) {
  console.error('Caught exception: %s', err);
});

const http = require('http')
  , app = require('express')();

app.use(require('./lib/router'));

http.createServer(app)
  .listen(process.env.APP_PORT);
