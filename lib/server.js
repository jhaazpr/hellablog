'use strict';

// modules =================================================
var express = require('express');
var app = express();
// var bodyParser     = require('body-parser');
var fs = require('fs');

// configuration ===========================================
var port = process.env.PORT || 3000; // set our port
// app.use(bodyParser.json()); // for parsing application/json

// serve this directory as public
app.use(express.static(__dirname));

// routes ==================================================
require('./routes.js')(app); // pass our application into our routes

// start app ===============================================
app.listen(port, function () {
    console.log("Running on port: " + port);
    exports = module.exports = app;
});