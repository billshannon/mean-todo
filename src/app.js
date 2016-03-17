'use strict';

var express = require('express');

var app = express();

app.use('/', express.static('public/public'));

app.listen(3000, function () {
  console.log('Port 3000 up and running!')
});