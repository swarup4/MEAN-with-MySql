var express = require("express");
var router = express.Router();
var connection = require("../config/db.js");

router.post("/", function(req, res) {
    var data = req.body;
    var sql = 'SELECT * from employee where ? & status = 1';
    connection.query(sql, data, function(err, rows, fields) {
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