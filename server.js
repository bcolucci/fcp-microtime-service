'use strict';

const http = require('http')
  , app = require('express')();

app.use(require('./lib/router'));

http.createServer(app)
  .listen(process.env.APP_PORT, '0.0.0.0');
