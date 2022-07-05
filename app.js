// var express = require('express');
import express from 'express';
import logger from './lib/logger.js';
import router from './router/users.js';
var app = express();

app.use(logger);


app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});
app.get("/home/index", (req, res) => {
    res.status(200).send("OK");
});

app.use('/user', router);

app.listen(3000);