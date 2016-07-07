'use strict';

const http = require('http')
  , app = require('express')();

app.use(require('./lib/router'));

http.createServer(app)
  .listen(process.env.NODE_PORT);
