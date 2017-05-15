var express = require("express");
var router = express.Router();
var connection = require("../config/db.js");

router.post("/", function(req, res) {
    //var data = req.body;
    var username = req.body.username;
    var password = req.body.password;
    var sql = 'SELECT * from employee where username = ? and password = ? and status = 1';
    connection.query(sql, [username, password], function(err, rows, fields) {
        if (!err){
            res.send(rows);
        }
        else{
            console.log('Error while performing Query.');
            connection.end();
        }
    });
});

module.exports = router;