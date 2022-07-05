// var express = require('express');
import express from 'express';
import logger from './lib/logger.js';
var app = express();

app.use(logger);

app.get("/", (req, res) => {
    console.log("listen");
    res.status(200).send("Hello World");
});
app.listen(3000);