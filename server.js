//========= importing modules ==========
var express = require('express');
var path = require('path');
var router = express.Router();
var session = require('express-session');
var bodyParser = require('body-parser');
var routes = require('./server/routes/web'); //web routes
var apiRoutes = require('./server/routes/api'); //api routes

// creating express server
var app = express();

//========= configuration ==========

//=== get all the data from the body (POST)===

//===configuration for Session Management===
app.use(session({
    secret: 'ssshhhhh',
    resave: false,
    saveUninitialized: true
}));

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// setting static files location './app' for angular app html and js
app.use(express.static(path.join(__dirname, 'app')));
// setting static files location './node_modules' for libs like angular, bootstrap
//app.use(express.static('node_modules'));

// configure our routes
app.use(routes);
app.use(apiRoutes);

// setting port number for running server
var port = process.env.port || 3001;

// starting express server
app.listen(port, function() {
    console.log("Server is running at : http://localhost:" + port);
});
