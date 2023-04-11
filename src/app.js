const express = require('express');
const router = require('./router');
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, ".." , "public")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);


module.exports = app