'use strict';

const http = require('http')
  , app = require('express')();

app.use(require('./lib/router'));

http.createServer(app).listen(80, '0.0.0.0');
