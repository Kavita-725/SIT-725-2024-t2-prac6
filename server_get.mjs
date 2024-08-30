// const express = require("express");

// const bodyParser = require("body-parser");

// var app = express();
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// require('./database')();
// require('./routers/router')(app);

// const port = 3040;
// app.listen(port, () => {
//     console.log("Server is listening on port " + port);
// });

import express from 'express';
import bodyParser from 'body-parser';
import router from './routers/router.mjs'; // Ensure the path and file name are correct

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

import './database.mjs'; // Ensure this file correctly connects to your database

app.use(router);

const port = 3040;
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});

export default app;


