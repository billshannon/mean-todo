'use strict';

var express = require('express');
var router = require('./api');

var app = express();

require('./database');
require('./seed');

app.use('/', express.static('public'));

app.use('/api', router);

app.listen(3000, function () {
  console.log('Port 3000 up and running!')
});