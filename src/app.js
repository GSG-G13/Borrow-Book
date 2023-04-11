const express = require('express');
const { join } = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const router = require('./router/registration');
require('dotenv').config()


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, '..', 'public')));

app.use(router);

module.exports = app;