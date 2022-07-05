// var express = require('express');
import express from 'express';
var app = express();

app.get("/", (req, res) => {
    console.log("listen");
    res.status(200).send("Hello World");
});
app.listen(3000);