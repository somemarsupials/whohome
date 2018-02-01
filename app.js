'use strict';

const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const DEV_PORT = 5000;

// configure

app.set('PORT', DEV_PORT);

// middlewares

app.use(bodyParser().urlencoded({ extended: true }));

// controllers

app.get('/', function(req, res) { res.send('hello world') });

// exports

module.exports = app;
