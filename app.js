'use strict';

const express = require('express');

const app = express();
app.set('PORT', 5000);

app.get('/', function(req, res) { res.send('hello world') });

module.exports = app;
