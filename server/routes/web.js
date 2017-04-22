var express = require('express');
var router = express.Router();
var path = require("path");

var absPath = path.join(__dirname, "../../app/views");
var session;

// route to handle home page

router.get('/', function(req, res, next) {
  console.log("Login Page");
  res.sendFile(absPath + "/index.html");
});
router.get('/admin', function(req, res, next) {
  console.log("Login Success");
  res.sendFile(absPath + "/index.html");
});

module.exports = router;
