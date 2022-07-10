// var express = require('express');
import express from 'express';
import logger from './lib/logger.js';
import router from './router/users.js';
var app = express();

app.use(logger);

app.set("view engine", "ejs");
app.set('view options', {
    layout: false
});


app.get("/", (req, res) => {
    res.status(200).render("index.ejs", {title: "webアプリケーションの開発"});
});
app.get("/home/index", (req, res) => {
    res.status(200).send("OK");
});

app.use('/user', router);

app.listen(3000);